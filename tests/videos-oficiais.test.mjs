import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { webcrypto } from 'node:crypto';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const source = await readFile(new URL('videos.js', root), 'utf8');

const nodes = new Map();
const node = selector => {
  if (!nodes.has(selector)) nodes.set(selector, {
    innerHTML: '', classList: { add() {}, remove() {}, toggle() {} },
    setAttribute() {}, querySelector() { return null; }, querySelectorAll() { return []; },
    addEventListener() {}
  });
  return nodes.get(selector);
};

const context = vm.createContext({
  window: { location: new URL('http://localhost:8080/'), scrollTo() {} },
  document: { querySelector: node, querySelectorAll: () => [] },
  AuthGate: { canAccessCourse: () => true },
  crypto: webcrypto,
  URL
});

vm.runInContext(source, context);
const VideosModule = vm.runInContext('VideosModule', context);

// 1. Verificação da contagem total e por curso
assert.equal(VideosModule.total, 36, 'ITIL deve conter 36 vídeos (31 Value Insights + 1 AKSolution + 4 Vídeos Oficiais)');
assert.equal(VideosModule.countFor('itil'), 36);
assert.equal(VideosModule.countFor('tenable'), 1);

// 2. Abertura do módulo e inspeção dos Vídeos Oficiais
VideosModule.open('itil');
const appHTML = node('#app').innerHTML;
assert.ok(appHTML.includes('Vídeos Oficiais'), 'Aba/pasta Vídeos Oficiais deve estar presente');
assert.ok(appHTML.includes('Parte 1'));
assert.ok(appHTML.includes('Parte 2'));
assert.ok(appHTML.includes('Parte 3'));
assert.ok(appHTML.includes('Parte 4'));

// 3. Seleção do primeiro vídeo oficial (índice 32)
VideosModule.select(32);
const viewerHTML = node('#videoViewer').innerHTML;
assert.ok(viewerHTML.includes('<video'), 'Deve renderizar a tag HTML5 <video>');
assert.ok(viewerHTML.includes('src="videos/Parte%201.mp4"'), 'Deve apontar para videos/Parte 1.mp4 codificado');
assert.ok(viewerHTML.includes('controls'), 'Deve conter controles de reprodução');
assert.ok(viewerHTML.includes('Vídeos Oficiais • Vídeo 01 de 04'));

// 4. Verificação física dos arquivos de vídeo no disco
for (let i = 1; i <= 4; i++) {
  const filePath = new URL(`videos/Parte ${i}.mp4`, root);
  await access(filePath);
}

console.log('Aprovado: aba Vídeos Oficiais integrada com 4 partes MP4, player HTML5 responsivo e arquivos acessíveis.');
