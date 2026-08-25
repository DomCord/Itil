const app = document.querySelector('#app');
const homeBtn = document.querySelector('#homeBtn');

let active = null;
let activeQuiz = null;
let index = 0;
let answers = [];
let selections = [];

const LAST_LAYOUT_KEY = 'itil-last-quiz-layout-v1-';
const PROGRESS_KEY = 'itil-quiz-progress-v1-';

function randomIndex(maxExclusive) {
  if (globalThis.crypto?.getRandomValues) {
    const value = new Uint32Array(1);
    globalThis.crypto.getRandomValues(value);
    return value[0] % maxExclusive;
  }
  return Math.floor(Math.random() * maxExclusive);
}

function shuffledIndices(length) {
  const order = Array.from({ length }, (_, i) => i);
  for (let i = order.length - 1; i > 0; i -= 1) {
    const j = randomIndex(i + 1);
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

function sameOrder(first, second) {
  return Array.isArray(first) && Array.isArray(second) && first.length === second.length && first.every((value, i) => value === second[i]);
}

function differentQuestionOrder(length, previousOrder) {
  const reference = Array.isArray(previousOrder) && previousOrder.length === length
    ? previousOrder
    : Array.from({ length }, (_, i) => i);
  let order = shuffledIndices(length);
  if (length > 1 && sameOrder(order, reference)) order = [...order.slice(1), order[0]];
  return order;
}

function differentOptionOrder(correctIndex, previousOrder) {
  const original = [0, 1, 2, 3];
  const reference = Array.isArray(previousOrder) && previousOrder.length === 4 ? previousOrder : original;
  const previousCorrectPosition = reference.indexOf(correctIndex);
  for (let attempt = 0; attempt < 20; attempt += 1) {
    const order = shuffledIndices(4);
    if (!sameOrder(order, reference) && order.indexOf(correctIndex) !== previousCorrectPosition) return order;
  }
  const fallback = reference.slice();
  const nextPosition = (previousCorrectPosition + 1) % fallback.length;
  [fallback[previousCorrectPosition], fallback[nextPosition]] = [fallback[nextPosition], fallback[previousCorrectPosition]];
  return fallback;
}

function isPermutation(values, length) {
  return Array.isArray(values)
    && values.length === length
    && new Set(values).size === length
    && values.every(value => Number.isInteger(value) && value >= 0 && value < length);
}

function validLayout(layout, questionCount) {
  return isPermutation(layout?.questionOrder, questionCount)
    && Array.isArray(layout?.optionOrders)
    && layout.optionOrders.length === questionCount
    && layout.optionOrders.every(order => isPermutation(order, 4));
}

function readPreviousLayout(simIndex, questionCount) {
  try {
    const layout = JSON.parse(localStorage.getItem(`${LAST_LAYOUT_KEY}${simIndex}`));
    return validLayout(layout, questionCount) ? layout : null;
  } catch {
    return null;
  }
}

function buildQuizSession(simIndex, layout) {
  const source = SIMULADOS[simIndex];
  return {
    title: source.title,
    layout,
    questions: layout.questionOrder.map(originalIndex => {
      const question = source.questions[originalIndex];
      const optionOrder = layout.optionOrders[originalIndex];
      const originalCorrectIndex = 'ABCD'.indexOf(question.a);
      return {
        ...question,
        o: optionOrder.map(optionIndex => question.o[optionIndex]),
        a: 'ABCD'[optionOrder.indexOf(originalCorrectIndex)],
        x: Array.isArray(question.x) ? optionOrder.map(optionIndex => question.x[optionIndex]) : question.x
      };
    })
  };
}

function createQuizSession(simIndex) {
  const source = SIMULADOS[simIndex];
  const previous = readPreviousLayout(simIndex, source.questions.length);
  const questionOrder = differentQuestionOrder(source.questions.length, previous?.questionOrder);
  const optionOrders = source.questions.map((question, originalIndex) => {
    const correctIndex = 'ABCD'.indexOf(question.a);
    return differentOptionOrder(correctIndex, previous?.optionOrders?.[originalIndex]);
  });
  const layout = { questionOrder, optionOrders };
  try {
    localStorage.setItem(`${LAST_LAYOUT_KEY}${simIndex}`, JSON.stringify(layout));
  } catch {
    // O simulado continua funcionando mesmo quando o armazenamento está indisponível.
  }

  return buildQuizSession(simIndex, layout);
}

function validAnswerList(values, questionCount) {
  return Array.isArray(values)
    && values.length === questionCount
    && values.every(value => value === null || 'ABCD'.includes(value));
}

function readProgress(simIndex) {
  const questionCount = SIMULADOS[simIndex].questions.length;
  try {
    const progress = JSON.parse(localStorage.getItem(`${PROGRESS_KEY}${simIndex}`));
    const validIndex = Number.isInteger(progress?.index) && progress.index >= 0 && progress.index < questionCount;
    if (validLayout(progress?.layout, questionCount)
      && validAnswerList(progress?.answers, questionCount)
      && validAnswerList(progress?.selections, questionCount)
      && validIndex) return progress;
  } catch {
    // Um progresso inválido é descartado abaixo.
  }
  try { localStorage.removeItem(`${PROGRESS_KEY}${simIndex}`); } catch {}
  return null;
}

function saveProgress() {
  if (active === null || !activeQuiz) return;
  try {
    localStorage.setItem(`${PROGRESS_KEY}${active}`, JSON.stringify({
      layout: activeQuiz.layout,
      answers,
      selections,
      index,
      updatedAt: Date.now()
    }));
  } catch {
    // O progresso em memória continua disponível quando o armazenamento falha.
  }
}

function clearProgress(simIndex) {
  try { localStorage.removeItem(`${PROGRESS_KEY}${simIndex}`); } catch {}
}

const conceptDefinitions = [
  [/garantia/i, 'Garantia indica que o serviço é adequado ao uso, atendendo aos níveis acordados de disponibilidade, capacidade, continuidade e segurança.'],
  [/utilidade/i, 'Utilidade é o que o serviço faz: a funcionalidade que o torna adequado ao propósito.'],
  [/acesso a recursos/i, 'Acesso a recursos permite ao consumidor usar recursos do provedor sem receber sua propriedade.'],
  [/transferência de bens/i, 'Transferência de bens passa a posse ou propriedade de um bem do provedor para o consumidor.'],
  [/ações de serviço/i, 'Ações de serviço são atividades realizadas pelo provedor, ou conjuntamente com o consumidor, para viabilizar o serviço.'],
  [/sustentabilidade/i, 'Sustentabilidade considera impactos ambientais, sociais e econômicos no longo prazo.'],
  [/experiência do usuário/i, 'Experiência do usuário trata das percepções e reações da pessoa ao utilizar um produto ou serviço.'],
  [/parceiros e fornecedores/i, 'A dimensão parceiros e fornecedores trata das relações externas, contratos e estratégias de fornecimento.'],
  [/fluxos de valor e processos/i, 'A dimensão fluxos de valor e processos mostra como o trabalho é organizado e integrado para criar valor.'],
  [/informação e tecnologia/i, 'A dimensão informação e tecnologia abrange dados, conhecimento, aplicações e infraestrutura tecnológica.'],
  [/organizações e pessoas/i, 'A dimensão organizações e pessoas abrange estrutura, cultura, competências, comunicação e liderança.'],
  [/sistema de valor/i, 'O Sistema de Valor do ITIL integra princípios orientadores, governança, cadeia de valor, práticas e melhoria contínua.'],
  [/acordo documentado|\bSLA\b/i, 'Um SLA documenta serviços e metas de nível de serviço acordadas entre provedor e cliente.'],
  [/incidente/i, 'Incidente é uma interrupção não planejada ou uma redução da qualidade de um serviço.'],
  [/problema|causa raiz/i, 'Problema é uma causa, ou possível causa, de um ou mais incidentes.'],
  [/observabilidade|métricas, logs e traces/i, 'Observabilidade permite inferir o estado interno de um sistema a partir de suas saídas, como métricas, logs e traces.'],
  [/patrocinador/i, 'O patrocinador autoriza o orçamento para o consumo do serviço.'],
  [/cliente/i, 'O cliente define os requisitos do serviço e assume responsabilidade pelos resultados do consumo.'],
  [/usuário/i, 'O usuário é a pessoa que utiliza o serviço no dia a dia.'],
  [/propósito da organização/i, 'O propósito explica por que a organização existe e para quem ela cria valor.'],
  [/modelo operacional/i, 'O modelo operacional descreve como a organização organiza suas capacidades para cumprir seu propósito.'],
  [/prática de gerenciamento|recursos e capacidades/i, 'Uma prática de gerenciamento é um conjunto de recursos organizacionais concebido para executar um trabalho ou atingir um objetivo.'],
  [/serviço digital/i, 'Serviço digital é um serviço que depende total ou amplamente de produtos digitais para habilitar resultados e cocriar valor.'],
  [/produto digital/i, 'Produto digital é uma configuração de recursos baseada em tecnologia digital e projetada para oferecer valor.'],
  [/jornada de serviço|ponta a ponta/i, 'Jornada de serviço é a experiência completa das interações entre consumidor e provedor.'],
  [/mapeamento do fluxo/i, 'Mapeamento do fluxo de valor torna visível como o valor flui e ajuda a identificar oportunidades de melhoria.'],
  [/implantação contínua/i, 'Implantação contínua coloca automaticamente em produção cada alteração que passa pelos controles definidos.'],
  [/entrega contínua/i, 'Entrega contínua mantém alterações prontas para produção, mas a decisão de implantar pode continuar manual.']
];

function definitionFor(text) {
  const found = conceptDefinitions.find(([pattern]) => pattern.test(text));
  return found ? found[1] : '';
}

function correctExplanation(q, option) {
  const optionIndex = 'ABCD'.indexOf(q.a);
  const explicit = q.x?.[optionIndex];
  if (explicit) return explicit;
  const specific = q.e && !q.e.startsWith('A alternativa ') ? q.e : '';
  return specific || definitionFor(option) || `“${option}” corresponde diretamente ao conceito e às condições apresentadas no enunciado.`;
}

function optionExplanation(q, option, letter) {
  const optionIndex = 'ABCD'.indexOf(letter);
  const explicit = q.x?.[optionIndex];
  if (explicit) return explicit;
  if (letter === q.a) return correctExplanation(q, option);
  const definition = definitionFor(option);
  const correctOption = q.o['ABCD'.indexOf(q.a)];
  if (definition) return `${definition} Apesar de ser um conceito válido do ITIL, ele não atende ao que esta questão pede; aqui, a resposta aplicável é “${correctOption}”.`;
  return `“${option}” não se aplica às condições do enunciado e confunde o foco do conceito avaliado. A referência correta é “${correctOption}”: ${correctExplanation(q, correctOption)}`;
}

function home() {
  active = null;
  activeQuiz = null;
  homeBtn.classList.add('hidden');
  const totalDefinitions = typeof QRG_TERMS === 'undefined' ? 0 : QRG_TERMS.length;
  app.innerHTML = `
    <section class="hero">
      <div>
        <span class="eyebrow">Preparação inteligente</span>
        <h1>Teste seu domínio em <em>ITIL</em></h1>
        <p>Três simulados completos, um módulo com ${SlidesModule.total} slides em alta resolução e uma biblioteca de vídeos. Responda no seu ritmo, revise o gabarito comentado e consulte o material de apoio.</p>
      </div>
      <div class="hero-visual">
        <span class="mini-label">Meta de aprovação</span>
        <div class="big-score">65%</div>
        <div class="mini-bars">${'<i class="on"></i>'.repeat(7)}${'<i></i>'.repeat(3)}</div>
      </div>
    </section>
    <h2 class="choose-title">Escolha o que estudar</h2>
    <section class="cards">
      ${SIMULADOS.map((simulado, simuladoIndex) => `
        <button class="sim-card" data-action="start" data-index="${simuladoIndex}">
          <h3>Simulado ${simuladoIndex + 1}</h3>
          <div class="meta"><span>${simulado.questions.length} questões</span></div>
          <span class="start">Começar agora</span>
        </button>`).join('')}
      <button class="sim-card slide-card" data-action="slides">
        <h3>Slide</h3>
        <div class="meta"><span>${SlidesModule.total} slides</span></div>
        <span class="start">Abrir módulo</span>
      </button>
      <button class="sim-card video-menu-card" data-action="videos">
        <h3>Vídeos</h3>
        <div class="meta"><span>${VideosModule.total} vídeos</span></div>
        <span class="start">Assistir agora</span>
      </button>
    </section>`;
}

function beginNewQuiz(i) {
  active = i;
  activeQuiz = createQuizSession(i);
  index = 0;
  answers = Array(activeQuiz.questions.length).fill(null);
  selections = Array(activeQuiz.questions.length).fill(null);
  homeBtn.classList.remove('hidden');
  renderQuestion(true);
}

function showResumeChoice(i, progress) {
  active = i;
  activeQuiz = null;
  homeBtn.classList.remove('hidden');
  const sim = SIMULADOS[i];
  const answeredCount = progress.answers.filter(Boolean).length;
  const percentage = Math.round(answeredCount / sim.questions.length * 100);
  const lastAccess = progress.updatedAt ? new Date(progress.updatedAt).toLocaleString('pt-BR') : 'acesso anterior';
  app.innerHTML = `<section class="resume-shell"><article class="resume-card"><span class="resume-icon" aria-hidden="true">↻</span><span class="eyebrow">Progresso encontrado</span><h1>Você já iniciou o ${sim.title}</h1><p>Foram respondidas <strong>${answeredCount} de ${sim.questions.length} questões</strong>. Você pode continuar exatamente de onde parou, mantendo respostas, correções e a ordem sorteada anteriormente.</p><div class="resume-progress"><div><span>Progresso salvo</span><strong>${percentage}%</strong></div><div class="track"><span style="width:${percentage}%"></span></div><small>Último acesso: ${lastAccess}</small></div><div class="resume-actions"><button class="primary" data-action="resume" data-index="${i}">Continuar de onde parei →</button><button class="ghost" data-action="restart-saved" data-index="${i}">Recomeçar o simulado</button><button class="text-button" data-action="home">Escolher outro simulado</button></div></article></section>`;
}

function start(i) {
  const progress = readProgress(i);
  if (progress?.answers.some(Boolean)) return showResumeChoice(i, progress);
  if (progress) clearProgress(i);
  beginNewQuiz(i);
}

function resumeQuiz(i) {
  const progress = readProgress(i);
  if (!progress) return beginNewQuiz(i);
  active = i;
  activeQuiz = buildQuizSession(i, progress.layout);
  answers = progress.answers.slice();
  selections = progress.selections.slice();
  index = progress.index;
  homeBtn.classList.remove('hidden');
  renderQuestion(true);
}

function restartSavedQuiz(i) {
  clearProgress(i);
  beginNewQuiz(i);
}

function navigator(s) {
  return `<aside class="question-nav" aria-label="Navegação entre questões"><div class="nav-title"><strong>Questões</strong><span>${answers.filter(Boolean).length}/${s.questions.length}</span></div><div class="number-grid">${s.questions.map((q, i) => {
    const answered = answers[i];
    const status = answered ? (answered === q.a ? 'correct' : 'wrong') : '';
    return `<button class="question-number ${status} ${i === index ? 'current' : ''}" data-action="go-to" data-index="${i}" aria-label="Ir para a questão ${i + 1}" ${i === index ? 'aria-current="true"' : ''}>${i + 1}</button>`;
  }).join('')}</div><div class="nav-legend"><span><i class="legend-current"></i>Atual</span><span><i class="legend-correct"></i>Correta</span><span><i class="legend-wrong"></i>Incorreta</span></div>${answers.every(Boolean) ? '<button class="primary finish-button" data-action="result">Finalizar simulado</button>' : ''}</aside>`;
}

function feedback(q, chosen) {
  if (!chosen) return '';
  const isCorrect = chosen === q.a;
  return `<section class="answer-feedback ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}" aria-live="polite"><div class="feedback-heading"><span class="feedback-icon">${isCorrect ? '✓' : '×'}</span><div><strong>${isCorrect ? 'Resposta correta!' : 'Resposta incorreta'}</strong><p>${isCorrect ? 'Muito bem. Confira por que cada alternativa está correta ou incorreta.' : `Você marcou ${chosen}. A resposta correta é ${q.a}. Veja a análise completa.`}</p></div></div><div class="alternative-analysis">${q.o.map((option, i) => {
    const letter = 'ABCD'[i];
    const correct = letter === q.a;
    return `<article class="analysis-item ${correct ? 'analysis-correct' : 'analysis-wrong'}"><div class="analysis-label"><span>${letter}</span><strong>${correct ? 'Correta' : 'Incorreta'}</strong></div><p><b>${option}.</b> ${optionExplanation(q, option, letter)}</p></article>`;
  }).join('')}</div></section>`;
}

function renderQuestion(scrollToTop = false) {
  const previousScroll = window.scrollY;
  const s = activeQuiz;
  const q = s.questions[index];
  const chosen = answers[index];
  const selected = chosen || selections[index];
  const answeredCount = answers.filter(Boolean).length;
  const pct = answeredCount / s.questions.length * 100;
  app.innerHTML = `<section class="quiz-shell"><div class="quiz-head"><div class="quiz-row"><div><span class="quiz-kicker">Simulado em andamento</span><h1>${s.title}</h1></div><span class="counter">${answeredCount} de ${s.questions.length} respondidas</span></div><div class="track"><span></span></div></div><div class="quiz-layout">${navigator(s)}<div class="question-column"><article class="question-card"><span class="qtag">Questão ${String(index + 1).padStart(2, '0')}</span><h2>${q.q}</h2><div class="options">${q.o.map((option, i) => {
    const letter = 'ABCD'[i];
    let state = '';
    if (chosen) state = letter === q.a ? 'correct-option' : (letter === chosen ? 'wrong-option' : 'dimmed-option');
    return `<button class="option ${selected === letter ? 'selected' : ''} ${state}" data-action="choose" data-letter="${letter}" ${chosen ? 'disabled' : ''}><span class="letter">${letter}</span><span>${option}</span>${chosen && letter === q.a ? '<span class="option-result">✓</span>' : chosen === letter && letter !== q.a ? '<span class="option-result">×</span>' : ''}</button>`;
  }).join('')}</div>${feedback(q, chosen)}</article><div class="quiz-actions"><button class="ghost" data-action="prev" ${index === 0 ? 'disabled' : ''}>← Anterior</button>${chosen ? '<button class="primary" data-action="next">Próxima →</button>' : `<button class="primary" data-action="answer" ${selected ? '' : 'disabled'}>Responder</button>`}</div></div></div></section>`;
  document.querySelector('.track span').style.width = `${pct}%`;
  saveProgress();
  if (scrollToTop) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const previousBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, previousScroll);
    requestAnimationFrame(() => {
      window.scrollTo(0, previousScroll);
      document.documentElement.style.scrollBehavior = previousBehavior;
    });
  }
}

function choose(letter) {
  if (answers[index]) return;
  selections[index] = letter;
  renderQuestion(false);
}

function answer() {
  if (answers[index] || !selections[index]) return;
  answers[index] = selections[index];
  renderQuestion(false);
}

function goTo(questionIndex, scrollToTop = false) { index = questionIndex; renderQuestion(scrollToTop); }
function prev() { if (index > 0) goTo(index - 1); }
function next() {
  const total = activeQuiz.questions.length;
  if (!answers[index]) return;
  if (index < total - 1) return goTo(index + 1, true);
  const pending = answers.findIndex(answer => !answer);
  if (pending !== -1) return goTo(pending, true);
  result();
}

function result() {
  const qs = activeQuiz.questions;
  const correct = qs.reduce((total, q, i) => total + (answers[i] === q.a), 0);
  const pct = Math.round(correct / qs.length * 100);
  const pass = pct >= 65;
  clearProgress(active);
  app.innerHTML = `<section class="result"><div class="result-top"><div class="score-ring"><strong>${pct}%</strong></div><span class="eyebrow">Resultado final</span><h1>${pass ? 'Parabéns, você atingiu a meta!' : 'Continue praticando — você está avançando.'}</h1><p>${correct} acertos de ${qs.length} questões • ${qs.length - correct} para revisar</p><div class="result-actions"><button class="primary" data-action="restart">Refazer simulado</button><button class="ghost" data-action="home">Escolher outro</button></div></div><div class="review"><h2>Revisão comentada</h2>${qs.map((q, i) => `<article class="review-item ${answers[i] === q.a ? 'ok' : ''}"><strong>${i + 1}. ${answers[i] === q.a ? 'Correta' : 'Incorreta'} — resposta ${q.a}</strong><p>${correctExplanation(q, q.o['ABCD'.indexOf(q.a)])}</p>${answers[i] !== q.a ? `<small>Sua resposta: ${answers[i]}</small>` : ''}</article>`).join('')}</div></section>`;
  document.querySelector('.score-ring').style.setProperty('--score', `${pct * 3.6}deg`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

app.addEventListener('click', event => {
  const control = event.target.closest('[data-action]');
  if (!control) return;
  const actions = {
    start: () => start(Number(control.dataset.index)),
    slides: () => SlidesModule.open(),
    videos: () => VideosModule.open(),
    resume: () => resumeQuiz(Number(control.dataset.index)),
    'restart-saved': () => restartSavedQuiz(Number(control.dataset.index)),
    'go-to': () => goTo(Number(control.dataset.index)),
    choose: () => choose(control.dataset.letter),
    answer,
    prev,
    next,
    result,
    restart: () => beginNewQuiz(active),
    home
  };
  actions[control.dataset.action]?.();
});

homeBtn.addEventListener('click', home);
AuthGate.initialize(home);
