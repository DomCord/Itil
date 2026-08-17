const SlidesModule = (() => {
  const DECKS = [
    { id: 'introducao', title: 'Introdução', count: 10 },
    { id: 'modulo-1', title: 'Módulo 1', count: 19, exercise: true },
    { id: 'modulo-2', title: 'Módulo 2', count: 26 },
    { id: 'modulo-3', title: 'Módulo 3', count: 8 },
    { id: 'modulo-4', title: 'Módulo 4', count: 6 },
    { id: 'modulo-5', title: 'Módulo 5', count: 40 },
    { id: 'modulo-6', title: 'Módulo 6', count: 69 },
    { id: 'modulo-7', title: 'Módulo 7', count: 10 },
    { id: 'modulo-8', title: 'Módulo 8', count: 17 },
    { id: 'modulo-9', title: 'Módulo 9', count: 27 },
    { id: 'modulo-10', title: 'Módulo 10', count: 8 }
  ];
  const MODULE_ONE_EXERCISE = [
    {
      question: 'O que é um serviço digital?',
      options: [
        'Um serviço que depende total ou amplamente de produtos digitais',
        'Uma combinação de recursos de tecnologia projetados para consumidores',
        'A transferência de bens do provedor para o consumidor',
        'Um catálogo de serviços para consumidores'
      ],
      answer: 'A',
      explanation: 'Serviço digital é um serviço que depende total ou amplamente de produtos digitais. Referência: seção 3.1.2.'
    },
    {
      question: 'O que influencia a percepção do consumidor de que um serviço é valioso?',
      options: [
        'A capacidade do provedor de serviços de minimizar seus custos operacionais',
        'O número de provedores que entregam o serviço ao consumidor',
        'A extensão em que os efeitos positivos do serviço superam os negativos',
        'A quantidade de dinheiro que o provedor de serviços investe em recursos'
      ],
      answer: 'C',
      explanation: 'Os serviços são percebidos pelos consumidores como valiosos quando seus efeitos positivos superam os efeitos negativos, incluindo custos e riscos introduzidos. Referência: seção 3.1.1.'
    },
    {
      question: 'O que é um produto digital?',
      options: [
        'Uma descrição formal de um ou mais serviços projetados para atender às necessidades do consumidor',
        'O acesso aos recursos do provedor de serviços e seu uso conforme os termos e condições acordados',
        'Uma combinação dos recursos de uma organização baseada em tecnologia digital e projetada para oferecer valor aos consumidores',
        'Ações realizadas por um provedor de serviços ou, conjuntamente, por um consumidor e um provedor de serviços'
      ],
      answer: 'C',
      explanation: 'Produto digital é uma combinação dos recursos de uma organização baseada em tecnologia digital e projetada para oferecer valor aos consumidores. Referência: seção 4.5.1.'
    }
  ];
  const TOTAL_SLIDES = DECKS.reduce((total, deck) => total + deck.count, 0);
  const MIN_ZOOM = 75;
  const MAX_ZOOM = 200;
  const ZOOM_STEP = 25;
  let activeDeckIndex = 0;
  let currentSlide = 1;
  let zoom = 100;
  let exerciseAnswers = MODULE_ONE_EXERCISE.map(() => null);

  const activeDeck = () => DECKS[activeDeckIndex];
  const lastStep = deck => deck.count + (deck.exercise ? 1 : 0);
  const isExercise = () => Boolean(activeDeck().exercise && currentSlide > activeDeck().count);
  const slidePath = (deck, number) => `slides/${deck.id}/slide-${String(number).padStart(3, '0')}.webp`;
  const clampSlide = number => Math.min(lastStep(activeDeck()), Math.max(1, Number(number) || 1));
  const globalSlideNumber = () => DECKS.slice(0, activeDeckIndex).reduce((total, deck) => total + deck.count, 0) + currentSlide;

  function preload(deckIndex, number) {
    const deck = DECKS[deckIndex];
    if (!deck || number < 1 || number > deck.count) return;
    const image = new Image();
    image.src = slidePath(deck, number);
  }

  function preloadNeighbors() {
    const deck = activeDeck();
    preload(activeDeckIndex, currentSlide - 1);
    preload(activeDeckIndex, currentSlide + 1);
    if (currentSlide === lastStep(deck)) preload(activeDeckIndex + 1, 1);
    if (currentSlide === 1 && activeDeckIndex > 0) preload(activeDeckIndex - 1, DECKS[activeDeckIndex - 1].count);
  }

  function slideStageMarkup(deck) {
    if (isExercise()) {
      const answered = exerciseAnswers.filter(Boolean).length;
      const score = MODULE_ONE_EXERCISE.reduce((total, question, index) => total + (exerciseAnswers[index] === question.answer ? 1 : 0), 0);
      const complete = answered === MODULE_ONE_EXERCISE.length;
      return `<button class="slide-edge slide-edge-left" data-slide-action="previous" aria-label="Slide anterior">‹</button><section class="module-exercise" aria-labelledby="exerciseTitle"><header class="module-exercise-head"><span class="exercise-badge">Módulo 1</span><h2 id="exerciseTitle">Exercício de fixação</h2><p>Responda às três questões para revisar os conceitos essenciais deste módulo.</p><div class="exercise-progress"><span style="width:${answered / MODULE_ONE_EXERCISE.length * 100}%"></span></div><small>${answered} de ${MODULE_ONE_EXERCISE.length} respondidas</small></header><div class="exercise-questions">${MODULE_ONE_EXERCISE.map((question, questionIndex) => {
        const selected = exerciseAnswers[questionIndex];
        const letters = 'ABCD';
        return `<article class="exercise-question ${selected ? 'answered' : ''}"><div class="exercise-question-title"><span>${String(questionIndex + 1).padStart(2, '0')}</span><h3>${question.question}</h3></div><div class="exercise-options">${question.options.map((option, optionIndex) => {
          const letter = letters[optionIndex];
          const correct = letter === question.answer;
          const chosen = letter === selected;
          const state = selected ? (correct ? 'correct' : chosen ? 'wrong' : 'dimmed') : '';
          return `<button class="exercise-option ${state}" data-slide-action="exercise-answer" data-question-index="${questionIndex}" data-answer="${letter}" ${selected ? 'disabled' : ''}><span>${letter}</span><strong>${option}</strong>${selected && correct ? '<i>✓</i>' : selected && chosen ? '<i>×</i>' : ''}</button>`;
        }).join('')}</div>${selected ? `<div class="exercise-feedback ${selected === question.answer ? 'correct' : 'wrong'}"><strong>${selected === question.answer ? 'Resposta correta!' : `Resposta incorreta. A alternativa correta é ${question.answer}.`}</strong><p>${question.explanation}</p></div>` : ''}</article>`;
      }).join('')}</div>${complete ? `<div class="exercise-result"><span>Resultado da fixação</span><strong>${score}/${MODULE_ONE_EXERCISE.length}</strong><p>${score === MODULE_ONE_EXERCISE.length ? 'Excelente! Você consolidou os conceitos do Módulo 1.' : 'Revise as explicações acima e tente novamente para consolidar o conteúdo.'}</p><button class="primary" data-slide-action="exercise-restart">Refazer exercício</button></div>` : ''}</section><button class="slide-edge slide-edge-right" data-slide-action="next" aria-label="Próxima apresentação">›</button>`;
    }
    return `<button class="slide-edge slide-edge-left" data-slide-action="previous" aria-label="Slide anterior">‹</button><div class="slide-canvas"><img id="currentSlideImage" src="${slidePath(deck, currentSlide)}" alt="${deck.title}, slide ${currentSlide} de ${deck.count}" decoding="async" style="width:${zoom}%"></div><button class="slide-edge slide-edge-right" data-slide-action="next" aria-label="Próximo slide">›</button>`;
  }

  function updateControls() {
    const root = document.querySelector('.slides-module');
    if (!root) return;
    const deck = activeDeck();
    const exerciseActive = isExercise();
    const stage = root.querySelector('.slide-stage');
    stage.classList.toggle('slide-exercise-stage', exerciseActive);
    stage.innerHTML = slideStageMarkup(deck);
    const input = root.querySelector('#slideCurrent');
    input.value = Math.min(currentSlide, deck.count);
    input.disabled = exerciseActive;
    input.classList.toggle('hidden', exerciseActive);
    root.querySelector('#slideCounter').textContent = exerciseActive ? 'Fixação' : `de ${deck.count}`;
    root.querySelector('#slideStatus').textContent = exerciseActive
      ? `${deck.title}: exercício de fixação — ${exerciseAnswers.filter(Boolean).length} de ${MODULE_ONE_EXERCISE.length} questões respondidas.`
      : `${deck.title}: slide ${currentSlide} de ${deck.count} — slide ${globalSlideNumber()} de ${TOTAL_SLIDES} no total — zoom ${zoom}%.`;
    root.querySelector('#slideZoom').textContent = `${zoom}%`;
    const atStart = activeDeckIndex === 0 && currentSlide === 1;
    const atEnd = activeDeckIndex === DECKS.length - 1 && currentSlide === lastStep(deck);
    root.querySelectorAll('[data-slide-action="previous"]').forEach(button => { button.disabled = atStart; });
    root.querySelectorAll('[data-slide-action="next"]').forEach(button => { button.disabled = atEnd; });
    root.querySelector('[data-slide-action="zoom-out"]').disabled = exerciseActive || zoom === MIN_ZOOM;
    root.querySelector('[data-slide-action="zoom-in"]').disabled = exerciseActive || zoom === MAX_ZOOM;
    root.querySelectorAll('.slide-thumbnail').forEach(button => {
      const selected = Number(button.dataset.slideNumber) === currentSlide;
      button.classList.toggle('active', selected);
      if (selected) {
        button.setAttribute('aria-current', 'true');
        button.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        button.removeAttribute('aria-current');
      }
    });
    preloadNeighbors();
  }

  function goTo(number) {
    currentSlide = clampSlide(number);
    updateControls();
  }

  function selectDeck(deckIndex, slideNumber = 1) {
    const parsedIndex = Number(deckIndex);
    if (!Number.isInteger(parsedIndex) || parsedIndex < 0 || parsedIndex >= DECKS.length) return;
    activeDeckIndex = parsedIndex;
    currentSlide = Math.min(lastStep(DECKS[activeDeckIndex]), Math.max(1, slideNumber));
    render();
  }

  function move(direction) {
    const deck = activeDeck();
    if (direction > 0 && currentSlide === lastStep(deck) && activeDeckIndex < DECKS.length - 1) return selectDeck(activeDeckIndex + 1, 1);
    if (direction < 0 && currentSlide === 1 && activeDeckIndex > 0) return selectDeck(activeDeckIndex - 1, lastStep(DECKS[activeDeckIndex - 1]));
    goTo(currentSlide + direction);
  }

  function changeZoom(direction) {
    if (isExercise()) return;
    zoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoom + direction * ZOOM_STEP));
    updateControls();
  }

  function answerExercise(questionIndex, answer) {
    const parsedIndex = Number(questionIndex);
    if (!isExercise() || !MODULE_ONE_EXERCISE[parsedIndex] || exerciseAnswers[parsedIndex]) return;
    const stage = document.querySelector('.slide-stage');
    const scrollTop = stage?.scrollTop || 0;
    exerciseAnswers[parsedIndex] = answer;
    updateControls();
    requestAnimationFrame(() => {
      const updatedStage = document.querySelector('.slide-stage');
      if (updatedStage) updatedStage.scrollTop = scrollTop;
    });
  }

  function restartExercise() {
    exerciseAnswers = MODULE_ONE_EXERCISE.map(() => null);
    updateControls();
    document.querySelector('.slide-stage')?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function toggleFullscreen() {
    const stage = document.querySelector('.slide-stage');
    if (!stage) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else stage.requestFullscreen?.();
  }

  function render() {
    const deck = activeDeck();
    document.querySelector('#homeBtn').classList.remove('hidden');
    const exerciseThumbnail = deck.exercise
      ? `<button class="slide-thumbnail exercise-thumbnail ${isExercise() ? 'active' : ''}" data-slide-action="go" data-slide-number="${deck.count + 1}" aria-label="Abrir exercício de fixação do ${deck.title}" ${isExercise() ? 'aria-current="true"' : ''}><strong>?</strong><small>Fixação</small><span>FIX</span></button>`
      : '';
    document.querySelector('#app').innerHTML = `
      <section class="slides-module">
        <header class="slides-head">
          <div>
            <span class="eyebrow">Módulo Slide</span>
            <h1>Apresentações ITIL Foundation</h1>
            <p>${TOTAL_SLIDES} slides em alta resolução, organizados por etapa do curso.</p>
          </div>
          <div class="slides-head-actions">
            <button class="slide-tool" data-slide-action="zoom-out" aria-label="Diminuir zoom">−</button>
            <strong id="slideZoom">${zoom}%</strong>
            <button class="slide-tool" data-slide-action="zoom-in" aria-label="Aumentar zoom">+</button>
            <button class="slide-tool fullscreen-tool" data-slide-action="fullscreen">Tela cheia</button>
          </div>
        </header>
        <nav class="deck-picker" aria-label="Escolha a apresentação">
          ${DECKS.map((item, index) => `<button class="deck-button ${index === activeDeckIndex ? 'active' : ''}" data-slide-action="deck" data-deck-index="${index}" ${index === activeDeckIndex ? 'aria-current="true"' : ''}><span>${item.title}</span><small>${item.count} slides${item.exercise ? ' + fixação' : ''}</small></button>`).join('')}
        </nav>
        <div class="slides-layout">
          <aside class="slides-sidebar" aria-label="Lista de slides de ${deck.title}">
            <div class="slides-sidebar-title"><strong>${deck.title}</strong><span>${deck.count} slides${deck.exercise ? ' + fixação' : ''}</span></div>
            <div class="slides-thumbnails">
              ${Array.from({ length: deck.count }, (_, index) => {
                const number = index + 1;
                return `<button class="slide-thumbnail ${number === currentSlide ? 'active' : ''}" data-slide-action="go" data-slide-number="${number}" aria-label="Abrir ${deck.title}, slide ${number}" ${number === currentSlide ? 'aria-current="true"' : ''}><img src="${slidePath(deck, number)}" alt="" loading="lazy" decoding="async"><span>${String(number).padStart(2, '0')}</span></button>`;
              }).join('')}
              ${exerciseThumbnail}
            </div>
          </aside>
          <section class="slide-viewer">
            <div class="slide-toolbar">
              <button class="slide-nav" data-slide-action="previous">← Anterior</button>
              <label class="slide-position">
                <span class="sr-only">Número do slide</span>
                <input id="slideCurrent" data-slide-jump type="number" min="1" max="${deck.count}" value="${Math.min(currentSlide, deck.count)}">
                <strong id="slideCounter">de ${deck.count}</strong>
              </label>
              <button class="slide-nav" data-slide-action="next">Próximo →</button>
            </div>
            <figure class="slide-stage"></figure>
            <p id="slideStatus" class="slide-status" aria-live="polite"></p>
          </section>
        </div>
      </section>`;
    updateControls();
  }

  function open() {
    activeDeckIndex = 0;
    currentSlide = 1;
    zoom = 100;
    exerciseAnswers = MODULE_ONE_EXERCISE.map(() => null);
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.addEventListener('click', event => {
    const control = event.target.closest('[data-slide-action]');
    if (!control || !document.querySelector('.slides-module')) return;
    const actions = {
      previous: () => move(-1),
      next: () => move(1),
      go: () => goTo(control.dataset.slideNumber),
      deck: () => selectDeck(control.dataset.deckIndex),
      'zoom-out': () => changeZoom(-1),
      'zoom-in': () => changeZoom(1),
      fullscreen: toggleFullscreen,
      'exercise-answer': () => answerExercise(control.dataset.questionIndex, control.dataset.answer),
      'exercise-restart': restartExercise
    };
    actions[control.dataset.slideAction]?.();
  });

  document.addEventListener('change', event => {
    if (event.target.matches('[data-slide-jump]') && document.querySelector('.slides-module')) goTo(event.target.value);
  });

  document.addEventListener('keydown', event => {
    const isTyping = event.target instanceof Element && event.target.matches('input, textarea, select');
    if (!document.querySelector('.slides-module') || isTyping) return;
    if (event.key === 'ArrowLeft') move(-1);
    if (event.key === 'ArrowRight') move(1);
    if (event.key === 'Home') selectDeck(0, 1);
    if (event.key === 'End') selectDeck(DECKS.length - 1, DECKS[DECKS.length - 1].count);
  });

  return { open, total: TOTAL_SLIDES, decks: DECKS };
})();
