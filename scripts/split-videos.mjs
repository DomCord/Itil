import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

// Usage: node scripts/split-videos.mjs SOURCE_DIRECTORY [FFMPEG] [FFPROBE]
// The originals are read only. Existing output files are never overwritten.
const [sourceDirectory, ffmpeg = 'ffmpeg', ffprobe = 'ffprobe'] = process.argv.slice(2);
if (!sourceDirectory) throw new Error('Informe a pasta dos vídeos originais.');
const outputDirectory = path.resolve(import.meta.dirname, '../videos-split');
const maximumBytes = 100_000_000;
const manifest = { version: 1, maximumBytes, videos: [] };

function run(executable, args) {
  const result = spawnSync(executable, args, { encoding: 'utf8', maxBuffer: 128 * 1024 * 1024 });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`${path.basename(executable)}: ${result.stderr}`);
  return result.stdout;
}

function inspect(file) {
  return JSON.parse(run(ffprobe, ['-v', 'error', '-show_format', '-show_streams', '-of', 'json', file]));
}

const sources = fs.readdirSync(sourceDirectory).filter(name => /^Parte [1-4]\.mp4$/i.test(name))
  .sort((a, b) => a.localeCompare(b, 'pt-BR', { numeric: true }));
if (sources.length !== 4) throw new Error('Esperados os quatro arquivos Parte 1.mp4 a Parte 4.mp4.');
if (fs.existsSync(outputDirectory)) {
  if (fs.lstatSync(outputDirectory).isSymbolicLink() || fs.readdirSync(outputDirectory).length) {
    throw new Error('Use uma pasta videos-split real e vazia para evitar sobrescritas.');
  }
} else fs.mkdirSync(outputDirectory);

for (const name of sources) {
  const source = path.resolve(sourceDirectory, name);
  const sourceBytes = fs.statSync(source).size;
  const count = sourceBytes < 400_000_000 ? 4 : sourceBytes > 500_000_000 ? 6 : null;
  if (!count) throw new Error(`Defina a quantidade de partes para ${name}: tamanho entre 400 e 500 MB.`);
  const metadata = inspect(source);
  const duration = Number(metadata.format.duration);
  const streams = metadata.streams.filter(stream => ['audio', 'video'].includes(stream.codec_type));
  const packets = JSON.parse(run(ffprobe, ['-v', 'error', '-select_streams', 'v:0',
    '-show_packets', '-show_entries', 'packet=pts_time,pos,flags', '-of', 'json', source])).packets;
  const keyframes = packets.filter(packet => packet.flags.includes('K') && Number.isFinite(Number(packet.pos)))
    .map(packet => ({ time: Number(packet.pts_time), position: Number(packet.pos) }));
  // Balance by source bytes rather than duration: variable bitrate can otherwise
  // produce a part above GitHub's limit. Cut only at independently decodable frames.
  const boundaries = Array.from({ length: count - 1 }, (_, index) => {
    const target = sourceBytes * (index + 1) / count;
    return keyframes.reduce((best, frame) => Math.abs(frame.position - target) < Math.abs(best.position - target) ? frame : best).time;
  });
  if (boundaries.some((time, index) => !(time > (boundaries[index - 1] || 0) && time < duration))) {
    throw new Error(`Não foi possível encontrar pontos de corte independentes para ${name}.`);
  }
  const prefix = `parte-${name.match(/\d+/)[0]}-trecho-`;
  console.log(`Dividindo ${name}: ${count} trechos, sem recodificação.`);
  run(ffmpeg, ['-hide_banner', '-loglevel', 'error', '-nostdin', '-n', '-i', source,
    '-map', '0:v:0', '-map', '0:a?', '-c', 'copy', '-f', 'segment',
    '-segment_times', boundaries.join(','), '-segment_time_delta', '0.02',
    '-reset_timestamps', '1', '-segment_start_number', '1',
    '-segment_format_options', 'movflags=+faststart', path.join(outputDirectory, `${prefix}%02d.mp4`)]);
  const files = fs.readdirSync(outputDirectory).filter(file => file.startsWith(prefix) && file.endsWith('.mp4')).sort();
  if (files.length !== count) throw new Error(`${name}: esperados ${count} trechos; encontrados ${files.length}.`);
  const segments = files.map((file, index) => {
    const absoluteFile = path.join(outputDirectory, file);
    const bytes = fs.statSync(absoluteFile).size;
    if (bytes <= 0 || bytes >= maximumBytes) throw new Error(`${file}: tamanho inválido (${bytes} bytes).`);
    const info = inspect(absoluteFile);
    for (const expected of streams) {
      if (!info.streams.some(actual => actual.codec_type === expected.codec_type && actual.codec_name === expected.codec_name)) {
        throw new Error(`${file}: codec original não preservado.`);
      }
    }
    if (!info.streams.some(stream => stream.codec_type === 'video' && stream.width > 0 && stream.height > 0)) {
      throw new Error(`${file}: vídeo inválido.`);
    }
    const segmentDuration = Number(info.format.duration);
    if (!(segmentDuration > 0)) throw new Error(`${file}: duração inválida.`);
    // Read every audio/video packet to catch truncated or unreadable MP4 files.
    run(ffmpeg, ['-v', 'error', '-xerror', '-nostdin', '-i', absoluteFile, '-map', '0:v', '-map', '0:a?', '-c', 'copy', '-f', 'null', '-']);
    console.log(`${file}: ${(bytes / 1_000_000).toFixed(2)} MB`);
    return { file, bytes, durationSeconds: segmentDuration, sourceStartSeconds: index ? boundaries[index - 1] : 0 };
  });
  const totalDuration = segments.reduce((total, segment) => total + segment.durationSeconds, 0);
  if (Math.abs(totalDuration - duration) > count) throw new Error(`${name}: duração total dos trechos diverge do original.`);
  manifest.videos.push({ source: name, sourceBytes, durationSeconds: duration, count, segments });
}

fs.writeFileSync(path.join(outputDirectory, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log('Concluído: 18 trechos MP4, todos menores que 100 MB.');
