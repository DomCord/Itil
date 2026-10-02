import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { createHash, webcrypto } from 'node:crypto';
import { TextEncoder } from 'node:util';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const read = file => readFile(new URL(file, root), 'utf8');
const storage = new Map();
const nodes = new Map();
const node = selector => {
  if (!nodes.has(selector)) nodes.set(selector, {
    innerHTML: '', textContent: '',
    classList: { add() {}, remove() {} },
    style: { setProperty() {} },
    addEventListener() {}, querySelector() { return null; }
  });
  return nodes.get(selector);
};
const context = vm.createContext({
  document: { querySelector: node, documentElement: { style: {} } },
  window: { scrollY: 0, scrollTo() {}, addEventListener() {} },
  requestAnimationFrame: callback => callback(),
  AuthGate: { initialize() {}, isAuthenticated: () => true },
  SlidesModule: { total: 233 }, VideosModule: { total: 32 },
  localStorage: {
    getItem: key => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, String(value)),
    removeItem: key => storage.delete(key)
  },
  crypto: webcrypto, TextEncoder
});
for (const file of ['questions.js', 'explanations.js', 'simulado3.js', 'ai901.js', 'ai901-explanations.js', 'app.js']) {
  vm.runInContext(await read(file), context, { filename: file });
}
const run = code => vm.runInContext(code, context);
const plain = value => JSON.parse(JSON.stringify(value));
const simulations = run('SIMULADOS');
assert.deepEqual(plain(simulations.map(sim => sim.questions.length)), [40, 40, 114, 54, 23, 24]);
assert.equal(new Set(simulations[3].questions.map(q => q.id)).size, 54);

// Todos os comentários são específicos da alternativa; nenhum repete o fallback antigo.
const aiQuestions = simulations.filter(sim => sim.course === 'ai901').flatMap(sim => sim.questions);
assert.equal(aiQuestions.reduce((count, q) => count + q.x.length, 0), 394);
for (const sim of simulations) for (const q of sim.questions) {
  assert.equal(q.x.length, q.o.length);
  assert.equal(new Set(q.x).size, q.o.length, `Comentários repetidos: ${q.id || q.q}`);
  assert.ok(q.x.every(text => typeof text === 'string' && text.length > 40));
  if (q.course === 'ai901') {
    assert.ok(q.references.length > 0);
    assert.ok(q.references.every(source => source.title && /^https:\/\/(learn\.microsoft\.com|arxiv\.org|docs\.pytorch\.org)\//.test(source.url)));
    assert.ok(q.x.every(text => !text.includes('Esta alternativa não atende ao cenário solicitado.')));
    for (const chosen of [q.a, q.type === 'yesno' ? q.a.map(value => !value) : q.type === 'multi' ? ['ABCD'.split('').find(letter => !q.a.includes(letter))] : 'ABCD'.split('').find(letter => letter !== q.a)]) {
      const markup = run('feedback')(q, chosen);
      q.x.forEach(text => assert.ok(markup.includes(run('richText')(text)), `Comentário não exibido: ${q.id}`));
      q.references.forEach(source => assert.ok(markup.includes(source.url.replaceAll('&', '&amp;'))));
      assert.ok(markup.includes('Fontes e documentação'));
    }
  }
}
// Regressão da imagem enviada: cada princípio explica seu próprio significado.
const transparency = aiQuestions.find(q => q.id === 'a1-2');
assert.ok(transparency.x[0].includes('prestação de contas'));
assert.ok(transparency.x[1].includes('Transparency Notes'));
assert.ok(transparency.x[2].includes('protegem dados pessoais'));
assert.ok(transparency.x[3].includes('discriminação'));

const originals = await Promise.all(['Google AI/1-simulado-ai901.html', 'Google AI/2-ai901-na-pratica.html', 'Google AI/3-ai901-rodada-3.html'].map(read));
assert.equal(new Set(originals.map(text => createHash('sha256').update(text).digest('hex'))).size, 3);
originals.forEach((html, i) => {
  const sourceContext = vm.createContext({});
  vm.runInContext(html.slice(html.indexOf('const AREAS ='), html.indexOf('const BY =')) + '\nglobalThis.questions = Q;', sourceContext);
  assert.equal(simulations[i + 3].questions.length, sourceContext.questions.length);
  sourceContext.questions.forEach((sourceQuestion, j) => {
    const importedQuestion = simulations[i + 3].questions[j];
    assert.equal(importedQuestion.id, sourceQuestion.id);
    assert.equal(importedQuestion.q, sourceQuestion.stem);
    assert.equal(importedQuestion.e, sourceQuestion.why);
    assert.equal(importedQuestion.code, sourceQuestion.code || '');
    assert.deepEqual(plain(importedQuestion.o), sourceQuestion.type === 'yesno' ? plain(sourceQuestion.items.map(item => item[0])) : plain(sourceQuestion.opts));
    assert.deepEqual(plain(importedQuestion.a), sourceQuestion.type === 'yesno' ? plain(sourceQuestion.items.map(item => item[1]))
      : sourceQuestion.type === 'multi' ? plain(sourceQuestion.ans.map(answer => 'ABCD'[answer])) : 'ABCD'[sourceQuestion.ans]);
  });
});

function correctOptions(question) {
  if (question.type === 'yesno') return question.o.map((text, i) => [text, question.a[i]]).sort((a, b) => a[0].localeCompare(b[0]));
  const letters = question.type === 'multi' ? question.a : [question.a];
  return letters.map(letter => question.o['ABCD'.indexOf(letter)]).sort();
}

// O embaralhamento precisa preservar a resposta e a explicação de cada alternativa.
for (let sim = 0; sim < simulations.length; sim++) {
  let previous = null;
  for (let attempt = 0; attempt < 30; attempt++) {
    const session = run(`createQuizSession(${sim})`);
    assert.equal(run('validLayout')(session.layout, simulations[sim].questions), true);
    if (previous) assert.notDeepEqual(plain(session.layout.questionOrder), plain(previous.layout.questionOrder));
    session.questions.forEach((question, i) => {
      const originalIndex = session.layout.questionOrder[i];
      const original = simulations[sim].questions[originalIndex];
      assert.deepEqual(plain(correctOptions(question)), plain(correctOptions(original)));
      assert.equal(question.e, original.e);
      if (question.x) assert.deepEqual(plain(question.x), plain(session.layout.optionOrders[originalIndex].map(j => original.x[j])));
      assert.equal(run('isCorrectAnswer')(question, question.a), true);
      if (previous && question.type !== 'yesno') {
        const prior = previous.questions[previous.layout.questionOrder.indexOf(originalIndex)];
        assert.notDeepEqual(plain(question.a), plain(prior.a));
      }
    });
    previous = session;
  }
}

// Um progresso salvo no formato anterior do ITIL deve continuar válido.
const legacyLayout = {
  questionOrder: Array.from({ length: 40 }, (_, i) => i),
  optionOrders: Array.from({ length: 40 }, () => [0, 1, 2, 3])
};
const legacyAnswers = Array(40).fill(null);
legacyAnswers[0] = simulations[0].questions[0].a;
storage.set('itil-quiz-progress-v1-0', JSON.stringify({ layout: legacyLayout, answers: legacyAnswers, selections: legacyAnswers, index: 1 }));
run('resumeQuiz(0)');
assert.deepEqual(plain(run('answers')), legacyAnswers);
assert.equal(run('index'), 1);
assert.equal(run('isCorrectAnswer(activeQuiz.questions[0], answers[0])'), true);

// Os três formatos devem exigir uma resposta completa e preservar a retomada.
run('beginNewQuiz(3)');
for (const type of ['single', 'multi', 'yesno']) {
  run(`goTo(activeQuiz.questions.findIndex(q => q.type === '${type}'))`);
  const question = run('activeQuiz.questions[index]');
  run('answer()');
  assert.equal(run('answers[index]'), null);
  if (type === 'yesno') question.a.forEach((value, i) => run(`chooseYesNo(${i}, ${value})`));
  else (type === 'multi' ? question.a : [question.a]).forEach(letter => run(`choose('${letter}')`));
  run('answer()');
  assert.equal(run('isCorrectAnswer(activeQuiz.questions[index], answers[index])'), true);
}
const saved = JSON.parse(storage.get('itil-quiz-progress-v1-3'));
run("courseHome('itil'); resumeQuiz(3)");
assert.deepEqual(plain(run('answers')), saved.answers);
assert.deepEqual(plain(run('activeQuiz.layout')), saved.layout);
assert.ok(storage.has('itil-quiz-progress-v1-0'));

// A pontuação final e o progresso concluído não devem depender do formato.
run('answers = activeQuiz.questions.map(q => Array.isArray(q.a) ? q.a.slice() : q.a); result()');
assert.ok(node('#app').innerHTML.includes('<strong>100%</strong>'));
assert.equal(storage.has('itil-quiz-progress-v1-3'), false);
run('home()');
assert.equal(storage.has('itil-quiz-progress-v1-3'), false);

storage.set('itil-quiz-progress-v1-0', '{broken');
assert.equal(run('readProgress(0)'), null);
const invalidLegacy = { layout: legacyLayout, answers: [...legacyAnswers], selections: [...legacyAnswers], index: 1 };
invalidLegacy.answers[0] = 'AB';
storage.set('itil-quiz-progress-v1-0', JSON.stringify(invalidLegacy));
assert.equal(run('readProgress(0)'), null);

// A indisponibilidade do armazenamento não impede uma nova tentativa.
context.localStorage = { getItem() { throw new Error('Unavailable'); }, setItem() { throw new Error('Unavailable'); }, removeItem() { throw new Error('Unavailable'); } };
assert.equal(run('createQuizSession(3).questions.length'), 54);

const html = await read('index.html');
for (const match of html.matchAll(/(?:src|href)="([^"#]+\.(?:js|css))"/g)) {
  if (!match[1].startsWith('https:')) await access(new URL(match[1], root));
}
console.log('Aprovado: 295 questões, 394 comentários AI-901, 180 embaralhamentos, gabaritos, importação, fontes, ausência de repetições, progresso legado, três formatos, retomada e resultado.');
