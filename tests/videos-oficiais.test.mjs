import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
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
assert.equal(VideosModule.total, 36, 'ITIL deve conter 36 vídeos (31 Value Insights + 1 AKSolution + 4 oficiais)');
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
assert.ok(viewerHTML.includes('<iframe'), 'Deve incorporar o player OneDrive');
assert.ok(viewerHTML.includes('Vídeos Oficiais • Vídeo 01 de 04'));

// 4. Os quatro IDs fornecidos devem chegar ao iframe e ao link externo.
const ids = ['e581a076-0c24-43a5-8955-f69c3330e1f3', '25c65a04-8659-4e47-b911-03554232410f',
  '6dc354b3-a954-42d3-aab9-af2050342935', '2f2f2ecd-a5a8-4514-ae18-0fbeca11cc1e'];
const html = await readFile(new URL('index.html', root), 'utf8');
const csp = html.match(/http-equiv="Content-Security-Policy" content="([^"]+)"/)[1];
const frameSources = csp.split(';').find(directive => directive.trim().startsWith('frame-src')).trim().split(/\s+/).slice(1);
for (const [index, id] of ids.entries()) {
  VideosModule.select(32 + index);
  const markup = node('#videoViewer').innerHTML;
  const embedded = new URL(markup.match(/<iframe\s+src="([^"]+)"/)[1]);
  assert.equal(embedded.origin, 'https://goiasgovbr-my.sharepoint.com');
  assert.equal(embedded.pathname, '/personal/rafael_cordeiro_goias_gov_br/_layouts/15/embed.aspx');
  assert.equal(embedded.searchParams.get('UniqueId'), id);
  assert.deepEqual(JSON.parse(embedded.searchParams.get('embed')), { ust: false, hv: 'CopyEmbedCode' });
  assert.equal(embedded.searchParams.get('referrer'), 'StreamWebApp');
  assert.equal(embedded.searchParams.get('referrerScenario'), 'EmbedDialog.Create');
  assert.ok(frameSources.includes(embedded.origin), 'A CSP deve permitir o domínio exato do player');
  assert.ok(markup.includes(`href="${embedded.href}"`));
  assert.ok(markup.includes('OneDrive / SharePoint'));
  assert.ok(markup.includes(`Parte ${index + 1}`));
  assert.ok(markup.includes('allowfullscreen'));
  assert.ok(!markup.includes('<video') && !markup.includes('videos-split/'));
}

// 5. Google Drive/YouTube continuam funcionando, e file:// exibe orientação.
VideosModule.select(31);
assert.ok(node('#videoViewer').innerHTML.includes('drive.google.com'));
assert.ok(node('#videoViewer').innerHTML.includes('Abrir no Google Drive'));
VideosModule.select(0);
assert.ok(node('#videoViewer').innerHTML.includes('youtube.com/embed/'));
context.window.location = new URL('file:///index.html');
VideosModule.select(32);
assert.ok(!node('#videoViewer').innerHTML.includes('<iframe'));
assert.ok(node('#videoViewer').innerHTML.includes('HTTP ou HTTPS'));

console.log('Aprovado: quatro incorporações OneDrive/SharePoint, IDs e parâmetros originais, CSP, links externos, tela cheia, 36 vídeos e regressão Google Drive/YouTube/file://.');
