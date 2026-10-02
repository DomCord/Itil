const app = document.querySelector('#app');
const homeBtn = document.querySelector('#homeBtn');
const coursesBtn = document.querySelector('#coursesBtn');

let activeCourse = null;
let active = null;
let activeQuiz = null;
let index = 0;
let answers = [];
let selections = [];
let quizFinished = false;

const COURSES = {
  itil: { title: 'ITIL v5', target: 65 },
  ai901: { title: 'AI-901', target: 80 }
};

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}

function richText(value) {
  return escapeHTML(value).replace(/`([^`]+)`/g, '<code>$1</code>');
}

function questionType(question) { return question.type || 'single'; }
function courseFor(simIndex) { return SIMULADOS[simIndex].course || 'itil'; }
function courseSimulations(course) {
  return SIMULADOS.map((simulado, i) => ({ simulado, i })).filter(({ i }) => courseFor(i) === course);
}
function hasAnswer(value) { return value !== null && value !== undefined; }

function isCorrectAnswer(question, value) {
  if (!hasAnswer(value)) return false;
  if (questionType(question) === 'single') return value === question.a;
  if (!Array.isArray(value) || value.length !== question.a.length) return false;
  if (questionType(question) === 'yesno') return value.every((answer, i) => answer === question.a[i]);
  return question.a.every(answer => value.includes(answer));
}

function selectionComplete(question, value) {
  if (questionType(question) === 'single') return typeof value === 'string' && value.length === 1 && 'ABCD'.includes(value);
  if (!Array.isArray(value)) return false;
  if (questionType(question) === 'yesno') return value.length === question.o.length && value.every(answer => typeof answer === 'boolean');
  return value.length === question.a.length;
}

function answerLabel(question, value) {
  if (!hasAnswer(value)) return 'Não respondida';
  if (questionType(question) === 'single') return value;
  if (questionType(question) === 'multi') return value.slice().sort().join(', ');
  return value.map((answer, i) => `${i + 1}: ${answer ? 'Sim' : 'Não'}`).join(' · ');
}

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

function differentOptionOrder(correctIndices, previousOrder, length) {
  const original = Array.from({ length }, (_, i) => i);
  const reference = isPermutation(previousOrder, length) ? previousOrder : original;
  const positions = order => order.map((value, i) => correctIndices.includes(value) ? i : -1).filter(i => i >= 0);
  const previousPositions = positions(reference);
  for (let attempt = 0; attempt < 20; attempt += 1) {
    const order = shuffledIndices(length);
    if (!sameOrder(order, reference) && (!correctIndices.length || !sameOrder(positions(order), previousPositions))) return order;
  }
  const fallback = reference.slice();
  const firstPosition = previousPositions[0] ?? 0;
  const nextPosition = correctIndices.length ? reference.findIndex(value => !correctIndices.includes(value)) : 1;
  if (nextPosition >= 0 && nextPosition < length) [fallback[firstPosition], fallback[nextPosition]] = [fallback[nextPosition], fallback[firstPosition]];
  return fallback;
}

function isPermutation(values, length) {
  return Array.isArray(values)
    && values.length === length
    && new Set(values).size === length
    && values.every(value => Number.isInteger(value) && value >= 0 && value < length);
}

function validLayout(layout, questions) {
  return isPermutation(layout?.questionOrder, questions.length)
    && Array.isArray(layout?.optionOrders)
    && layout.optionOrders.length === questions.length
    && layout.optionOrders.every((order, i) => isPermutation(order, questions[i].o.length));
}

function readPreviousLayout(simIndex, questions) {
  try {
    const layout = JSON.parse(localStorage.getItem(`${LAST_LAYOUT_KEY}${simIndex}`));
    return validLayout(layout, questions) ? layout : null;
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
      const type = questionType(question);
      const correctLetters = type === 'multi' ? question.a : [question.a];
      return {
        ...question,
        o: optionOrder.map(optionIndex => question.o[optionIndex]),
        a: type === 'yesno' ? optionOrder.map(optionIndex => question.a[optionIndex])
          : type === 'multi' ? correctLetters.map(letter => 'ABCD'[optionOrder.indexOf('ABCD'.indexOf(letter))]).sort()
          : 'ABCD'[optionOrder.indexOf('ABCD'.indexOf(question.a))],
        x: Array.isArray(question.x) ? optionOrder.map(optionIndex => question.x[optionIndex]) : question.x
      };
    })
  };
}

function createQuizSession(simIndex) {
  const source = SIMULADOS[simIndex];
  const previous = readPreviousLayout(simIndex, source.questions);
  const questionOrder = differentQuestionOrder(source.questions.length, previous?.questionOrder);
  const optionOrders = source.questions.map((question, originalIndex) => {
    const correctIndices = questionType(question) === 'yesno' ? []
      : (questionType(question) === 'multi' ? question.a : [question.a]).map(letter => 'ABCD'.indexOf(letter));
    return differentOptionOrder(correctIndices, previous?.optionOrders?.[originalIndex], question.o.length);
  });
  const layout = { questionOrder, optionOrders };
  try {
    localStorage.setItem(`${LAST_LAYOUT_KEY}${simIndex}`, JSON.stringify(layout));
  } catch {
    // O simulado continua funcionando mesmo quando o armazenamento está indisponível.
  }

  return buildQuizSession(simIndex, layout);
}

function validAnswerList(values, questions, confirmed = false) {
  return Array.isArray(values)
    && values.length === questions.length
    && values.every((value, i) => {
      if (value === null) return true;
      const question = questions[i];
      if (questionType(question) === 'single') return typeof value === 'string' && value.length === 1 && 'ABCD'.includes(value);
      if (!Array.isArray(value)) return false;
      if (questionType(question) === 'yesno') return value.length === question.o.length && value.every(answer => typeof answer === 'boolean' || (!confirmed && answer === null));
      return new Set(value).size === value.length && value.length <= question.a.length
        && (!confirmed || value.length === question.a.length)
        && value.every(answer => typeof answer === 'string' && answer.length === 1 && 'ABCD'.includes(answer));
    });
}

function readProgress(simIndex) {
  const questions = SIMULADOS[simIndex].questions;
  const questionCount = questions.length;
  try {
    const progress = JSON.parse(localStorage.getItem(`${PROGRESS_KEY}${simIndex}`));
    const validIndex = Number.isInteger(progress?.index) && progress.index >= 0 && progress.index < questionCount;
    if (validLayout(progress?.layout, questions) && validIndex) {
      const sessionQuestions = buildQuizSession(simIndex, progress.layout).questions;
      if (validAnswerList(progress.answers, sessionQuestions, true)
        && validAnswerList(progress.selections, sessionQuestions)) return progress;
    }
  } catch {
    // Um progresso inválido é descartado abaixo.
  }
  try { localStorage.removeItem(`${PROGRESS_KEY}${simIndex}`); } catch {}
  return null;
}

function saveProgress() {
  if (active === null || !activeQuiz || quizFinished) return;
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
  if (q.course === 'ai901' && q.x) {
    if (questionType(q) === 'yesno') return q.x.join(' ');
    const letters = questionType(q) === 'multi' ? q.a : [q.a];
    return letters.map(letter => q.x['ABCD'.indexOf(letter)]).join(' ');
  }
  const optionIndex = questionType(q) === 'single' ? 'ABCD'.indexOf(q.a) : -1;
  const explicit = q.x?.[optionIndex];
  if (explicit) return explicit;
  const specific = q.e && !q.e.startsWith('A alternativa ') ? q.e : '';
  return specific || (q.course !== 'ai901' && definitionFor(option)) || `“${option}” corresponde diretamente ao conceito e às condições apresentadas no enunciado.`;
}

function optionExplanation(q, option, letter) {
  const optionIndex = 'ABCD'.indexOf(letter);
  const explicit = q.x?.[optionIndex];
  if (explicit) return explicit;
  const correct = questionType(q) === 'multi' ? q.a.includes(letter) : letter === q.a;
  if (correct) return correctExplanation(q, option);
  if (q.course === 'ai901') throw new Error(`Comentário AI-901 ausente: ${q.id}, ${letter}`);
  const definition = definitionFor(option);
  const correctOption = q.o['ABCD'.indexOf(q.a)];
  if (definition) return `${definition} Apesar de ser um conceito válido do ITIL, ele não atende ao que esta questão pede; aqui, a resposta aplicável é “${correctOption}”.`;
  return `“${option}” não se aplica às condições do enunciado e confunde o foco do conceito avaliado. A referência correta é “${correctOption}”: ${correctExplanation(q, correctOption)}`;
}

function home() {
  saveProgress();
  activeCourse = null;
  active = null;
  activeQuiz = null;
  homeBtn.classList.add('hidden');
  coursesBtn.classList.add('hidden');
  const aiSimulations = courseSimulations('ai901');
  const aiQuestionCount = aiSimulations.reduce((total, { simulado }) => total + simulado.questions.length, 0);
  const aiTopicCount = new Set(aiSimulations.flatMap(({ simulado }) => simulado.questions.map(q => q.topic))).size;
  app.innerHTML = `
    <section class="hero course-hero">
      <div><span class="eyebrow">Central de estudos</span><h1>Seu próximo passo começa <em>aqui</em></h1><p>Escolha o curso para acessar os simulados e materiais. Estude no seu ritmo e acompanhe seu progresso em cada área.</p></div>
    </section>
    <h2 class="choose-title">Escolha seu curso</h2>
    <section class="cards course-cards" aria-label="Cursos disponíveis">
      <button class="sim-card course-card" data-action="course" data-course="itil"><span class="course-icon" aria-hidden="true">IT</span><h3>ITIL v5</h3><p>Gerenciamento de produtos e serviços digitais.</p><div class="meta"><span>3 simulados</span><span>${SlidesModule.total} slides</span><span>${VideosModule.total} vídeos</span></div><span class="start">Acessar material →</span></button>
      <button class="sim-card course-card" data-action="course" data-course="ai901"><span class="course-icon" aria-hidden="true">AI</span><h3>AI-901</h3><p>Conceitos de IA e soluções com Microsoft Foundry.</p><div class="meta"><span>${aiSimulations.length} simulados</span><span>${aiQuestionCount} questões</span><span>${aiTopicCount} tópicos</span></div><span class="start">Acessar simulados →</span></button>
    </section>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function courseHome(course = activeCourse) {
  if (!COURSES[course]) return home();
  saveProgress();
  activeCourse = course;
  active = null;
  activeQuiz = null;
  homeBtn.classList.remove('hidden');
  homeBtn.textContent = '← Menu principal';
  coursesBtn.classList.add('hidden');
  const isITIL = course === 'itil';
  const simulations = courseSimulations(course);
  const questionCount = simulations.reduce((total, { simulado }) => total + simulado.questions.length, 0);
  const topics = isITIL ? [] : [...new Set(simulations.flatMap(({ simulado }) => simulado.questions.map(q => q.topic)))];
  app.innerHTML = `
    <section class="hero">
      <div>
        <span class="eyebrow">Preparação inteligente</span>
        <h1>Teste seu domínio em <em>${COURSES[course].title}</em></h1>
        <p>${isITIL ? `Três simulados completos, um módulo com ${SlidesModule.total} slides em alta resolução e uma biblioteca de vídeos. Responda no seu ritmo, revise o gabarito comentado e consulte o material de apoio.` : `${simulations.length} simulados com ${questionCount} questões de alternativa única, múltipla seleção e Sim/Não. Pratique os ${topics.length} tópicos, confira as explicações e retome de onde parou.`}</p>
      </div>
      <div class="hero-visual">
        <span class="mini-label">${isITIL ? 'Meta de aprovação' : 'Meta de estudo'}</span>
        <div class="big-score">${COURSES[course].target}%</div>
        <div class="mini-bars">${'<i class="on"></i>'.repeat(isITIL ? 7 : 8)}${'<i></i>'.repeat(isITIL ? 3 : 2)}</div>
        ${isITIL ? '' : '<p class="target-note">Referência de treino do material fornecido.</p>'}
      </div>
    </section>
    <h2 class="choose-title">Escolha o que estudar</h2>
    <section class="cards">
      ${simulations.map(({ simulado, i }, position) => `
        <button class="sim-card" data-action="start" data-index="${i}">
          <h3>${isITIL ? `Simulado ${position + 1}` : escapeHTML(simulado.title.replace('AI-901 · ', ''))}</h3>
          <div class="meta"><span>${simulado.questions.length} questões</span></div>
          <span class="start">Começar agora</span>
        </button>`).join('')}
      ${isITIL ? `<button class="sim-card slide-card" data-action="slides">
        <h3>Slide</h3>
        <div class="meta"><span>${SlidesModule.total} slides</span></div>
        <span class="start">Abrir módulo</span>
      </button>
      <button class="sim-card video-menu-card" data-action="videos">
        <h3>Vídeos</h3>
        <div class="meta"><span>${VideosModule.total} vídeos</span></div>
        <span class="start">Assistir agora</span>
      </button>` : ''}
    </section>
    ${isITIL ? '' : `<section class="course-topics" aria-label="Tópicos do simulado"><h2>Conteúdo para praticar</h2><div class="topic-list">${topics.map(topic => `<span>${escapeHTML(topic)}</span>`).join('')}</div></section>`}`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCourseNavigation() {
  homeBtn.classList.remove('hidden');
  homeBtn.textContent = `← ${COURSES[activeCourse].title}`;
  coursesBtn.classList.remove('hidden');
}

function beginNewQuiz(i) {
  activeCourse = courseFor(i);
  quizFinished = false;
  active = i;
  activeQuiz = createQuizSession(i);
  index = 0;
  answers = Array(activeQuiz.questions.length).fill(null);
  selections = Array(activeQuiz.questions.length).fill(null);
  showCourseNavigation();
  renderQuestion(true);
}

function showResumeChoice(i, progress) {
  activeCourse = courseFor(i);
  active = i;
  activeQuiz = null;
  showCourseNavigation();
  const sim = SIMULADOS[i];
  const answeredCount = progress.answers.filter(Boolean).length;
  const percentage = Math.round(answeredCount / sim.questions.length * 100);
  const lastAccess = progress.updatedAt ? new Date(progress.updatedAt).toLocaleString('pt-BR') : 'acesso anterior';
  app.innerHTML = `<section class="resume-shell"><article class="resume-card"><span class="resume-icon" aria-hidden="true">↻</span><span class="eyebrow">Progresso encontrado</span><h1>Você já iniciou o ${escapeHTML(sim.title)}</h1><p>Foram respondidas <strong>${answeredCount} de ${sim.questions.length} questões</strong>. Você pode continuar exatamente de onde parou, mantendo respostas, correções e a ordem sorteada anteriormente.</p><div class="resume-progress"><div><span>Progresso salvo</span><strong>${percentage}%</strong></div><div class="track"><span></span></div><small>Último acesso: ${lastAccess}</small></div><div class="resume-actions"><button class="primary" data-action="resume" data-index="${i}">Continuar de onde parei →</button><button class="ghost" data-action="restart-saved" data-index="${i}">Recomeçar o simulado</button><button class="text-button" data-action="course-home">Escolher outro simulado</button></div></article></section>`;
  app.querySelector('.resume-progress .track span').style.width = `${percentage}%`;
}

function start(i) {
  if (!Number.isInteger(i) || !SIMULADOS[i]) return;
  saveProgress();
  const progress = readProgress(i);
  if (progress?.answers.some(Boolean)) return showResumeChoice(i, progress);
  if (progress) clearProgress(i);
  beginNewQuiz(i);
}

function resumeQuiz(i) {
  const progress = readProgress(i);
  if (!progress) return beginNewQuiz(i);
  active = i;
  activeCourse = courseFor(i);
  quizFinished = false;
  activeQuiz = buildQuizSession(i, progress.layout);
  answers = progress.answers.slice();
  selections = progress.selections.slice();
  index = progress.index;
  showCourseNavigation();
  renderQuestion(true);
}

function restartSavedQuiz(i) {
  clearProgress(i);
  beginNewQuiz(i);
}

function navigator(s) {
  return `<aside class="question-nav" aria-label="Navegação entre questões"><div class="nav-title"><strong>Questões</strong><span>${answers.filter(Boolean).length}/${s.questions.length}</span></div><div class="number-grid">${s.questions.map((q, i) => {
    const answered = answers[i];
    const status = hasAnswer(answered) ? (isCorrectAnswer(q, answered) ? 'correct' : 'wrong') : '';
    return `<button class="question-number ${status} ${i === index ? 'current' : ''}" data-action="go-to" data-index="${i}" aria-label="Ir para a questão ${i + 1}" ${i === index ? 'aria-current="true"' : ''}>${i + 1}</button>`;
  }).join('')}</div><div class="nav-legend"><span><i class="legend-current"></i>Atual</span><span><i class="legend-correct"></i>Correta</span><span><i class="legend-wrong"></i>Incorreta</span></div>${answers.every(Boolean) ? '<button class="primary finish-button" data-action="result">Finalizar simulado</button>' : ''}</aside>`;
}

function sourcesMarkup(q) {
  if (!q.references?.length) return '';
  return `<details class="answer-sources"><summary>Fontes e documentação</summary><ul>${q.references.map(source => `<li><a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.title)} ↗</a></li>`).join('')}</ul></details>`;
}

function alternativeAnalysis(q, chosen) {
  const yesno = questionType(q) === 'yesno';
  return `<div class="alternative-analysis">${q.o.map((option, i) => {
    const letter = 'ABCD'[i];
    const correct = yesno ? chosen[i] === q.a[i] : questionType(q) === 'multi' ? q.a.includes(letter) : letter === q.a;
    return `<article class="analysis-item ${correct ? 'analysis-correct' : 'analysis-wrong'}"><div class="analysis-label"><span>${yesno ? i + 1 : letter}</span><strong>${yesno ? `Gabarito: ${q.a[i] ? 'Sim' : 'Não'}` : correct ? 'Correta' : 'Incorreta'}</strong></div><p><b>${richText(option)}</b></p>${yesno ? `<p class="statement-answer">Sua resposta: ${chosen[i] ? 'Sim' : 'Não'} — ${correct ? 'Correta' : 'Incorreta'}.</p>` : ''}<p class="option-explanation">${richText(yesno ? q.x[i] : optionExplanation(q, option, letter))}</p></article>`;
  }).join('')}</div>`;
}

function feedback(q, chosen) {
  if (!hasAnswer(chosen)) return '';
  const isCorrect = isCorrectAnswer(q, chosen);
  return `<section class="answer-feedback ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}" aria-live="polite"><div class="feedback-heading"><span class="feedback-icon">${isCorrect ? '✓' : '×'}</span><div><strong>${isCorrect ? 'Resposta correta!' : 'Resposta incorreta'}</strong><p>${isCorrect ? 'Muito bem. Confira a correção comentada abaixo.' : `Você marcou ${escapeHTML(answerLabel(q, chosen))}. Gabarito: ${escapeHTML(answerLabel(q, q.a))}. Veja a análise completa.`}</p></div></div>${alternativeAnalysis(q, chosen)}${sourcesMarkup(q)}</section>`;
}

function optionsMarkup(q, chosen, selected) {
  const answered = hasAnswer(chosen);
  if (questionType(q) === 'yesno') {
    return `<div class="yesno-options">${q.o.map((statement, i) => `<div class="yesno-row ${answered ? chosen[i] === q.a[i] ? 'statement-correct' : 'statement-wrong' : ''}"><p><b>${i + 1}.</b> ${richText(statement)}</p><div class="yesno-choices" role="group" aria-label="Resposta da afirmação ${i + 1}">${[true, false].map(value => `<button class="option ${selected?.[i] === value ? 'selected' : ''} ${answered && q.a[i] === value ? 'correct-option' : answered && chosen[i] === value ? 'wrong-option' : ''}" data-action="choose-yesno" data-statement="${i}" data-value="${value}" aria-pressed="${selected?.[i] === value}" ${answered ? 'disabled' : ''}>${value ? 'Sim' : 'Não'}</button>`).join('')}</div></div>`).join('')}</div>`;
  }
  const multi = questionType(q) === 'multi';
  return `<div class="options">${q.o.map((option, i) => {
    const letter = 'ABCD'[i];
    const correct = multi ? q.a.includes(letter) : q.a === letter;
    const isSelected = multi ? selected?.includes(letter) : selected === letter;
    const wasChosen = multi ? chosen?.includes(letter) : chosen === letter;
    const state = answered ? correct ? 'correct-option' : wasChosen ? 'wrong-option' : 'dimmed-option' : '';
    return `<button class="option ${isSelected ? 'selected' : ''} ${state}" data-action="choose" data-letter="${letter}" aria-pressed="${Boolean(isSelected)}" ${answered ? 'disabled' : ''}><span class="letter">${letter}</span><span>${richText(option)}</span>${answered && correct ? '<span class="option-result">✓</span>' : answered && wasChosen ? '<span class="option-result">×</span>' : ''}</button>`;
  }).join('')}</div>`;
}

function renderQuestion(scrollToTop = false) {
  const previousScroll = window.scrollY;
  const s = activeQuiz;
  const q = s.questions[index];
  const chosen = answers[index];
  const selected = hasAnswer(chosen) ? chosen : selections[index];
  const answeredCount = answers.filter(Boolean).length;
  const pct = answeredCount / s.questions.length * 100;
  const hint = questionType(q) === 'multi' ? `Selecione ${q.a.length} alternativas (${selected?.length || 0}/${q.a.length}).`
    : questionType(q) === 'yesno' ? 'Responda Sim ou Não em todas as afirmações.' : 'Selecione uma alternativa e clique em Responder.';
  app.innerHTML = `<section class="quiz-shell"><div class="quiz-head"><div class="quiz-row"><div><span class="quiz-kicker">Simulado em andamento</span><h1>${escapeHTML(s.title)}</h1></div><span class="counter">${answeredCount} de ${s.questions.length} respondidas</span></div><div class="track"><span></span></div></div><div class="quiz-layout">${navigator(s)}<div class="question-column"><article class="question-card"><span class="qtag">Questão ${String(index + 1).padStart(2, '0')}${q.topic ? ` · ${escapeHTML(q.topic)}` : ''}</span><h2>${richText(q.q)}</h2>${q.code ? `<pre class="question-code"><code>${escapeHTML(q.code)}</code></pre>` : ''}<p class="question-hint">${hint}</p>${optionsMarkup(q, chosen, selected)}${feedback(q, chosen)}</article><div class="quiz-actions"><button class="ghost" data-action="prev" ${index === 0 ? 'disabled' : ''}>← Anterior</button>${hasAnswer(chosen) ? '<button class="primary" data-action="next">Próxima →</button>' : `<button class="primary" data-action="answer" ${selectionComplete(q, selected) ? '' : 'disabled'}>Responder</button>`}</div></div></div></section>`;
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
  if (hasAnswer(answers[index]) || !'ABCD'.includes(letter)) return;
  const question = activeQuiz.questions[index];
  if (questionType(question) === 'yesno') return;
  if (questionType(question) === 'multi') {
    const selected = selections[index] || [];
    if (selected.includes(letter)) selections[index] = selected.filter(answer => answer !== letter);
    else if (selected.length < question.a.length) selections[index] = [...selected, letter].sort();
  } else selections[index] = letter;
  renderQuestion(false);
}

function chooseYesNo(statement, value) {
  const question = activeQuiz.questions[index];
  if (hasAnswer(answers[index]) || questionType(question) !== 'yesno'
    || !Number.isInteger(statement) || statement < 0 || statement >= question.o.length || typeof value !== 'boolean') return;
  const selected = selections[index] || Array(question.o.length).fill(null);
  selections[index] = selected.map((answer, i) => i === statement ? value : answer);
  renderQuestion(false);
}

function answer() {
  if (hasAnswer(answers[index]) || !selectionComplete(activeQuiz.questions[index], selections[index])) return;
  answers[index] = Array.isArray(selections[index]) ? selections[index].slice() : selections[index];
  renderQuestion(false);
}

function goTo(questionIndex, scrollToTop = false) {
  if (!Number.isInteger(questionIndex) || questionIndex < 0 || questionIndex >= activeQuiz.questions.length) return;
  index = questionIndex;
  renderQuestion(scrollToTop);
}
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
  if (!activeQuiz || !answers.every(hasAnswer)) return;
  const qs = activeQuiz.questions;
  const correct = qs.reduce((total, q, i) => total + isCorrectAnswer(q, answers[i]), 0);
  const pct = Math.round(correct / qs.length * 100);
  const pass = pct >= COURSES[activeCourse].target;
  quizFinished = true;
  clearProgress(active);
  const topics = [...new Set(qs.map(q => q.topic).filter(Boolean))];
  const topicSummary = topics.length ? `<section class="topic-results"><h2>Desempenho por tópico</h2><div class="topic-table-wrap"><table><thead><tr><th scope="col">Tópico</th><th scope="col">Acertos</th><th scope="col">Resultado</th></tr></thead><tbody>${topics.map(topic => {
    const topicQuestions = qs.map((q, i) => ({ q, i })).filter(({ q }) => q.topic === topic);
    const topicCorrect = topicQuestions.filter(({ q, i }) => isCorrectAnswer(q, answers[i])).length;
    return `<tr><th scope="row">${escapeHTML(topic)}</th><td>${topicCorrect}/${topicQuestions.length}</td><td>${Math.round(topicCorrect / topicQuestions.length * 100)}%</td></tr>`;
  }).join('')}</tbody></table></div></section>` : '';
  app.innerHTML = `<section class="result"><div class="result-top"><div class="score-ring"><strong>${pct}%</strong></div><span class="eyebrow">Resultado final · ${escapeHTML(activeQuiz.title)}</span><h1>${pass ? 'Parabéns, você atingiu a meta!' : 'Continue praticando — você está avançando.'}</h1><p>${correct} acertos de ${qs.length} questões • ${qs.length - correct} para revisar</p>${activeCourse === 'ai901' ? '<p class="target-note">Meta de estudo: 80%. Este percentual é uma referência de treino, não a pontuação oficial do exame.</p>' : ''}<div class="result-actions"><button class="primary" data-action="restart">Refazer simulado</button><button class="ghost" data-action="course-home">Escolher outro</button></div></div>${topicSummary}<div class="review"><h2>Revisão comentada</h2>${qs.map((q, i) => {
    const correct = isCorrectAnswer(q, answers[i]);
    return `<article class="review-item ${correct ? 'ok' : ''}"><strong>${i + 1}. ${correct ? 'Correta' : 'Incorreta'} — gabarito ${escapeHTML(answerLabel(q, q.a))}</strong><p>${richText(q.q)}</p>${q.code ? `<pre class="question-code"><code>${escapeHTML(q.code)}</code></pre>` : ''}${alternativeAnalysis(q, answers[i])}${sourcesMarkup(q)}${correct ? '' : `<small>Sua resposta: ${escapeHTML(answerLabel(q, answers[i]))}</small>`}</article>`;
  }).join('')}</div></section>`;
  document.querySelector('.score-ring').style.setProperty('--score', `${pct * 3.6}deg`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

app.addEventListener('click', event => {
  const control = event.target.closest('[data-action]');
  if (!control || control.disabled || !AuthGate.isAuthenticated()) return;
  const actions = {
    course: () => courseHome(control.dataset.course),
    'course-home': () => courseHome(),
    start: () => start(Number(control.dataset.index)),
    slides: () => { if (activeCourse === 'itil') { showCourseNavigation(); SlidesModule.open(); } },
    videos: () => { if (activeCourse === 'itil') { showCourseNavigation(); VideosModule.open(); } },
    resume: () => resumeQuiz(Number(control.dataset.index)),
    'restart-saved': () => restartSavedQuiz(Number(control.dataset.index)),
    'go-to': () => goTo(Number(control.dataset.index)),
    choose: () => choose(control.dataset.letter),
    'choose-yesno': () => chooseYesNo(Number(control.dataset.statement), control.dataset.value === 'true'),
    answer,
    prev,
    next,
    result,
    restart: () => beginNewQuiz(active),
    home
  };
  actions[control.dataset.action]?.();
});

homeBtn.addEventListener('click', () => {
  if (!AuthGate.isAuthenticated()) return;
  if (active !== null || app.querySelector('.slides-module, .videos-module')) courseHome();
  else home();
});
coursesBtn.addEventListener('click', () => { if (AuthGate.isAuthenticated()) home(); });
document.querySelector('.brand').addEventListener('click', event => {
  event.preventDefault();
  if (AuthGate.isAuthenticated()) home();
});
document.querySelector('#logoutBtn').addEventListener('click', () => {
  saveProgress();
  active = null;
  activeQuiz = null;
  activeCourse = null;
});
window.addEventListener('pagehide', saveProgress);
AuthGate.initialize(home);
