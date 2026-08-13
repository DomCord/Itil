const app = document.querySelector('#app');
const homeBtn = document.querySelector('#homeBtn');

let active = null;
let index = 0;
let answers = [];

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
  const specific = q.e && !q.e.startsWith('A alternativa ') ? q.e : '';
  return specific || definitionFor(option) || `“${option}” corresponde diretamente ao conceito e às condições apresentadas no enunciado.`;
}

function optionExplanation(q, option, letter) {
  if (letter === q.a) return correctExplanation(q, option);
  const definition = definitionFor(option);
  const correctOption = q.o['ABCD'.indexOf(q.a)];
  if (definition) return `${definition} Apesar de ser um conceito válido do ITIL, ele não atende ao que esta questão pede; aqui, a resposta aplicável é “${correctOption}”.`;
  return `“${option}” não se aplica às condições do enunciado e confunde o foco do conceito avaliado. A referência correta é “${correctOption}”: ${correctExplanation(q, correctOption)}`;
}

function home() {
  active = null;
  homeBtn.classList.add('hidden');
  app.innerHTML = `<section class="hero"><div><span class="eyebrow">Preparação inteligente</span><h1>Teste seu domínio em <em>ITIL</em></h1><p>Dois simulados completos com 40 questões cada. Responda no seu ritmo, acompanhe o progresso e revise o gabarito comentado ao final.</p></div><div class="hero-visual"><span class="mini-label">Meta de aprovação</span><div class="big-score">65%</div><div class="mini-bars">${'<i class="on"></i>'.repeat(7)}${'<i></i>'.repeat(3)}</div></div></section><h2 class="choose-title">Escolha seu simulado</h2><section class="cards">${SIMULADOS.map((s, i) => `<button class="sim-card" onclick="start(${i})"><span class="num">0${i + 1}</span><h3>${s.title}</h3><div class="meta"><span>40 questões</span><span>•</span><span>aprovação: 65%</span></div><span class="start">Começar agora →</span></button>`).join('')}</section>`;
}

function start(i) {
  active = i;
  index = 0;
  answers = Array(SIMULADOS[i].questions.length).fill(null);
  homeBtn.classList.remove('hidden');
  renderQuestion();
}

function navigator(s) {
  return `<aside class="question-nav" aria-label="Navegação entre questões"><div class="nav-title"><strong>Questões</strong><span>${answers.filter(Boolean).length}/${s.questions.length}</span></div><div class="number-grid">${s.questions.map((q, i) => {
    const answered = answers[i];
    const status = answered ? (answered === q.a ? 'correct' : 'wrong') : '';
    return `<button class="question-number ${status} ${i === index ? 'current' : ''}" onclick="goTo(${i})" aria-label="Ir para a questão ${i + 1}" ${i === index ? 'aria-current="true"' : ''}>${i + 1}</button>`;
  }).join('')}</div><div class="nav-legend"><span><i class="legend-current"></i>Atual</span><span><i class="legend-correct"></i>Correta</span><span><i class="legend-wrong"></i>Incorreta</span></div>${answers.every(Boolean) ? '<button class="primary" style="width:100%;margin-top:15px" onclick="result()">Finalizar simulado</button>' : ''}</aside>`;
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

function renderQuestion() {
  const s = SIMULADOS[active];
  const q = s.questions[index];
  const chosen = answers[index];
  const answeredCount = answers.filter(Boolean).length;
  const pct = answeredCount / s.questions.length * 100;
  app.innerHTML = `<section class="quiz-shell"><div class="quiz-head"><div class="quiz-row"><div><span class="quiz-kicker">Simulado em andamento</span><h1>${s.title}</h1></div><span class="counter">${answeredCount} de ${s.questions.length} respondidas</span></div><div class="track"><span style="width:${pct}%"></span></div></div><div class="quiz-layout">${navigator(s)}<div class="question-column"><article class="question-card"><span class="qtag">Questão ${String(index + 1).padStart(2, '0')}</span><h2>${q.q}</h2><div class="options">${q.o.map((option, i) => {
    const letter = 'ABCD'[i];
    let state = '';
    if (chosen) state = letter === q.a ? 'correct-option' : (letter === chosen ? 'wrong-option' : 'dimmed-option');
    return `<button class="option ${chosen === letter ? 'selected' : ''} ${state}" onclick="choose('${letter}')" ${chosen ? 'disabled' : ''}><span class="letter">${letter}</span><span>${option}</span>${chosen && letter === q.a ? '<span class="option-result">✓</span>' : chosen === letter && letter !== q.a ? '<span class="option-result">×</span>' : ''}</button>`;
  }).join('')}</div>${feedback(q, chosen)}</article><div class="quiz-actions"><button class="ghost" onclick="prev()" ${index === 0 ? 'disabled' : ''}>← Anterior</button><button class="primary" onclick="next()">${index === s.questions.length - 1 ? (answeredCount === s.questions.length ? 'Ver resultado' : 'Ir para pendente') : 'Próxima →'}</button></div></div></div></section>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function choose(letter) {
  if (answers[index]) return;
  answers[index] = letter;
  renderQuestion();
}

function goTo(questionIndex) { index = questionIndex; renderQuestion(); }
function prev() { if (index > 0) goTo(index - 1); }
function next() {
  const total = SIMULADOS[active].questions.length;
  if (index < total - 1) return goTo(index + 1);
  const pending = answers.findIndex(answer => !answer);
  if (pending !== -1) return goTo(pending);
  result();
}

function result() {
  const qs = SIMULADOS[active].questions;
  const correct = qs.reduce((total, q, i) => total + (answers[i] === q.a), 0);
  const pct = Math.round(correct / qs.length * 100);
  const pass = pct >= 65;
  app.innerHTML = `<section class="result"><div class="result-top"><div class="score-ring" style="--score:${pct * 3.6}deg"><strong>${pct}%</strong></div><span class="eyebrow">Resultado final</span><h1>${pass ? 'Parabéns, você atingiu a meta!' : 'Continue praticando — você está avançando.'}</h1><p>${correct} acertos de ${qs.length} questões • ${qs.length - correct} para revisar</p><div class="result-actions"><button class="primary" onclick="start(${active})">Refazer simulado</button><button class="ghost" onclick="home()">Escolher outro</button></div></div><div class="review"><h2>Revisão comentada</h2>${qs.map((q, i) => `<article class="review-item ${answers[i] === q.a ? 'ok' : ''}"><strong>${i + 1}. ${answers[i] === q.a ? 'Correta' : 'Incorreta'} — resposta ${q.a}</strong><p>${correctExplanation(q, q.o['ABCD'.indexOf(q.a)])}</p>${answers[i] !== q.a ? `<small>Sua resposta: ${answers[i]}</small>` : ''}</article>`).join('')}</div></section>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

homeBtn.onclick = home;
home();
