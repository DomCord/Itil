import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { webcrypto } from 'node:crypto';
import { TextEncoder } from 'node:util';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const read = file => readFile(new URL(file, root), 'utf8');
const scripts = [...(await read('index.html')).matchAll(/<script src="([^"]+)"/g)]
  .map(match => match[1].split('?')[0]).filter(file => !['auth.js', 'slides.js'].includes(file));
const sources = await Promise.all(scripts.map(async file => [file, await read(file)]));
const stored = new Map();
let instant = '2026-10-16T12:00:00Z';
class TestDate extends Date {
  constructor(...values) { super(...(values.length ? values : [instant])); }
  static now() { return new Date(instant).getTime(); }
}
const storage = map => ({ getItem: key => map.get(key) ?? null, setItem: (key, value) => map.set(key, String(value)), removeItem: key => map.delete(key) });
const plain = value => JSON.parse(JSON.stringify(value));

async function load(username = 'admin', password = 'domcord') {
  const nodes = new Map();
  const node = selector => {
    if (!nodes.has(selector)) nodes.set(selector, { innerHTML: '', classList: { add() {}, remove() {} },
      style: { setProperty() {} }, addEventListener() {}, querySelector() { return null; } });
    return nodes.get(selector);
  };
  let accounts;
  const context = vm.createContext({ Date: TestDate, crypto: webcrypto, TextEncoder, URL,
    location: new URL('https://domcord.github.io/Itil/'), localStorage: storage(stored), sessionStorage: storage(new Map()),
    document: { querySelector: node, documentElement: { style: {} } },
    window: { scrollY: 0, scrollTo() {}, addEventListener() {} }, requestAnimationFrame: callback => callback(),
    SlidesModule: { total: 233 },
    AuthGate: { initialize() {}, isAuthenticated: () => Boolean(accounts?.currentUser()),
      currentUser: () => accounts.currentUser(), canAccessCourse: course => accounts.canAccessCourse(course),
      progressKey: key => accounts.progressKey(key), isAdministrator: () => accounts.currentUser()?.role === 'admin' }
  });
  for (const [file, source] of sources) vm.runInContext(source, context, { filename: file });
  const run = code => vm.runInContext(code, context);
  accounts = run('PortalAccounts');
  await accounts.initialize();
  await accounts.login(username, password);
  return { run, node, context, accounts };
}

function finish(run, correctCount) {
  run(`answers = activeQuiz.questions.map((q, i) => {
    if (i < ${correctCount}) return Array.isArray(q.a) ? q.a.slice() : q.a;
    if (questionType(q) === 'yesno') return q.a.map((value, j) => j ? value : !value);
    if (questionType(q) === 'multi') return [...q.a.slice(1), [...'ABCD'].find(letter => !q.a.includes(letter))];
    return [...'ABCD'].slice(0, q.o.length).find(letter => letter !== q.a);
  }); result()`);
}

const client = await load();
const { run, node, accounts } = client;
const scenarios = [['itil', 0], ['ai901', 3], ['tenable', 6], ['tenable-sc', 19]];
for (const [course, simulation] of scenarios) {
  run(`courseHome('${course}')`);
  assert.ok(node('#app').innerHTML.includes('Estatísticas dos simulados'));
  assert.ok(node('#app').innerHTML.includes('Conclua um simulado'));
  assert.ok(node('#app').innerHTML.includes('Começar agora'));
  run(`beginNewQuiz(${simulation}); result()`);
  assert.equal(run(`readQuizHistory('${course}').length`), 0, 'Uma tentativa incompleta não é conclusão');
  const total = run('activeQuiz.questions.length');
  finish(run, total / 2);
  assert.ok(node('#app').innerHTML.includes('<strong>50%</strong>'));
  const history = plain(run(`readQuizHistory('${course}')`));
  assert.equal(history.length, 1);
  assert.equal(history[0].correct, total / 2);
  assert.equal(history[0].total, total);
  assert.equal(history[0].completedAt, new Date(instant).toISOString());
  assert.equal(history[0].title, run('activeQuiz.title'));
  const saved = JSON.stringify(history);
  run('result(); result()');
  assert.equal(JSON.stringify(plain(run(`readQuizHistory('${course}')`))), saved, 'Reabrir resultado não duplica conclusão');
  run(`courseHome('${course}')`);
  assert.equal((node('#app').innerHTML.match(/class="attempt-history-item"/g) || []).length, 1);
  assert.ok(node('#app').innerHTML.includes('<strong>50%</strong>'));
  assert.ok(node('#app').innerHTML.includes('16/10/2026, 09:00'));
  assert.ok(!stored.has(accounts.progressKey('itil-quiz-progress-v1-' + simulation)));
}

// Cada nova tentativa é uma linha; notas zero, média e melhor resultado são mantidos.
instant = '2026-10-16T13:00:00Z';
run('beginNewQuiz(19)'); finish(run, 150);
instant = '2026-10-16T14:00:00Z';
run('beginNewQuiz(19)'); finish(run, 0);
assert.deepEqual(plain(run("readQuizHistory('tenable-sc').map(attempt => attempt.correct)")), [0, 150, 75]);
run("courseHome('tenable-sc')");
assert.ok(node('#app').innerHTML.includes('<dt>Conclusões</dt><dd>3</dd>'));
assert.ok(node('#app').innerHTML.includes('<dt>Média das tentativas</dt><dd>50%</dd>'));
assert.ok(node('#app').innerHTML.includes('<dt>Melhor resultado</dt><dd>100%</dd>'));
assert.ok(node('#app').innerHTML.indexOf('<strong>0%</strong>') < node('#app').innerHTML.indexOf('<strong>100%</strong>'));

// Simulados diferentes do mesmo curso não sobrescrevem resultados anteriores.
run('beginNewQuiz(1)'); finish(run, 40);
assert.equal(run("readQuizHistory('itil').length"), 2);
assert.notEqual(run("readQuizHistory('itil')[0].simulationId"), run("readQuizHistory('itil')[1].simulationId"));
run("courseHome('tenable-sc')");
assert.ok(!node('#app').innerHTML.includes('Simulado 2'));

// O histórico persiste ao recarregar, e uma tentativa retomada só entra ao finalizar.
const reloaded = await load();
reloaded.run("courseHome('tenable-sc')");
assert.equal((reloaded.node('#app').innerHTML.match(/class="attempt-history-item"/g) || []).length, 3);
reloaded.run("beginNewQuiz(19); choose(activeQuiz.questions[0].a); answer(); courseHome('tenable-sc')");
assert.equal(reloaded.run("readQuizHistory('tenable-sc').length"), 3);
const resumed = await load();
resumed.run('resumeQuiz(19)');
assert.equal(resumed.run('answers.filter(Boolean).length'), 1);
finish(resumed.run, 75);
assert.equal(resumed.run("readQuizHistory('tenable-sc').length"), 4);

// Duas contas no mesmo navegador têm históricos separados, sem misturar os cursos.
const other = await accounts.createUser({ username: 'qa.history', password: 'Historia123', role: 'user', courses: ['tenable-sc'], expiresOn: null });
const otherClient = await load('qa.history', 'Historia123');
otherClient.run("courseHome('tenable-sc')");
assert.ok(otherClient.node('#app').innerHTML.includes('Conclua um simulado'));
assert.equal(otherClient.run("readQuizHistory('tenable-sc').length"), 0);
otherClient.run('beginNewQuiz(19)'); finish(otherClient.run, 150);
assert.equal(otherClient.run("readQuizHistory('tenable-sc').length"), 1);
assert.equal(run("readQuizHistory('tenable-sc').length"), 4);
otherClient.run("courseHome('itil')");
assert.ok(!otherClient.node('#app').innerHTML.includes('Estatísticas dos simulados'));

// Conteúdo inválido não quebra a tela; títulos de dados salvos são escapados.
const historyKey = otherClient.accounts.progressKey('study-quiz-history-v1-tenable-sc');
assert.ok(historyKey.includes(other.id));
const validEntry = plain(otherClient.run("readQuizHistory('tenable-sc')[0]"));
stored.set(historyKey, JSON.stringify([{ ...validEntry, correct: -1 }, { ...validEntry, completedAt: 'inválida' },
  { ...validEntry, title: '<img src=x onerror=alert(1)>' }]));
otherClient.run("courseHome('tenable-sc')");
assert.equal((otherClient.node('#app').innerHTML.match(/class="attempt-history-item"/g) || []).length, 1);
assert.ok(otherClient.node('#app').innerHTML.includes('&lt;img'));
assert.ok(!otherClient.node('#app').innerHTML.includes('<img'));
stored.set(historyKey, '{broken');
otherClient.run("courseHome('tenable-sc')");
assert.ok(otherClient.node('#app').innerHTML.includes('Não foi possível carregar'));
otherClient.run('beginNewQuiz(19)'); finish(otherClient.run, 150);
assert.ok(otherClient.node('#app').innerHTML.includes('<strong>100%</strong>'));
assert.ok(otherClient.node('#app').innerHTML.includes('Não foi possível salvar'));
assert.equal(stored.get(historyKey), '{broken', 'Histórico ilegível não é sobrescrito');

// Falta de espaço não impede a correção e é informada no resultado.
stored.delete(historyKey);
otherClient.context.localStorage.setItem = (key, value) => {
  if (key === historyKey) throw new Error('QuotaExceededError');
  stored.set(key, String(value));
};
otherClient.run('beginNewQuiz(19)'); finish(otherClient.run, 150);
assert.ok(otherClient.node('#app').innerHTML.includes('<strong>100%</strong>'));
assert.ok(otherClient.node('#app').innerHTML.includes('Não foi possível salvar'));
console.log('Aprovado: histórico dos quatro cursos, cada conclusão, 0/50/100%, média/melhor, ordem e data Brasília, recarga, retomada, isolamento por usuário/curso, sem duplicatas, dados inválidos e falha de armazenamento.');
