const SlidesModule = (() => {
  const DECKS = [
    { id: 'introducao', title: 'Introdução', count: 10 },
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
  const TOTAL_SLIDES = DECKS.reduce((total, deck) => total + deck.count, 0);
  const MIN_ZOOM = 75;
  const MAX_ZOOM = 200;
  const ZOOM_STEP = 25;
  let activeDeckIndex = 0;
  let currentSlide = 1;
  let zoom = 100;

  const activeDeck = () => DECKS[activeDeckIndex];
  const slidePath = (deck, number) => `slides/${deck.id}/slide-${String(number).padStart(3, '0')}.webp`;
  const clampSlide = number => Math.min(activeDeck().count, Math.max(1, Number(number) || 1));
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
    if (currentSlide === deck.count) preload(activeDeckIndex + 1, 1);
    if (currentSlide === 1 && activeDeckIndex > 0) preload(activeDeckIndex - 1, DECKS[activeDeckIndex - 1].count);
  }

  function updateControls() {
    const root = document.querySelector('.slides-module');
    if (!root) return;
    const deck = activeDeck();
    const image = root.querySelector('#currentSlideImage');
    image.src = slidePath(deck, currentSlide);
    image.alt = `${deck.title}, slide ${currentSlide} de ${deck.count}`;
    image.style.width = `${zoom}%`;
    root.querySelector('#slideCurrent').value = currentSlide;
    root.querySelector('#slideCounter').textContent = `de ${deck.count}`;
    root.querySelector('#slideStatus').textContent = `${deck.title}: slide ${currentSlide} de ${deck.count} — slide ${globalSlideNumber()} de ${TOTAL_SLIDES} no total — zoom ${zoom}%.`;
    root.querySelector('#slideZoom').textContent = `${zoom}%`;
    const atStart = activeDeckIndex === 0 && currentSlide === 1;
    const atEnd = activeDeckIndex === DECKS.length - 1 && currentSlide === deck.count;
    root.querySelectorAll('[data-slide-action="previous"]').forEach(button => { button.disabled = atStart; });
    root.querySelectorAll('[data-slide-action="next"]').forEach(button => { button.disabled = atEnd; });
    root.querySelector('[data-slide-action="zoom-out"]').disabled = zoom === MIN_ZOOM;
    root.querySelector('[data-slide-action="zoom-in"]').disabled = zoom === MAX_ZOOM;
    root.querySelectorAll('.slide-thumbnail').forEach((button, index) => {
      const selected = index + 1 === currentSlide;
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
    currentSlide = Math.min(DECKS[activeDeckIndex].count, Math.max(1, slideNumber));
    render();
  }

  function move(direction) {
    const deck = activeDeck();
    if (direction > 0 && currentSlide === deck.count && activeDeckIndex < DECKS.length - 1) return selectDeck(activeDeckIndex + 1, 1);
    if (direction < 0 && currentSlide === 1 && activeDeckIndex > 0) return selectDeck(activeDeckIndex - 1, DECKS[activeDeckIndex - 1].count);
    goTo(currentSlide + direction);
  }

  function changeZoom(direction) {
    zoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoom + direction * ZOOM_STEP));
    updateControls();
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
    document.querySelector('#app').innerHTML = `<section class="slides-module"><header class="slides-head"><div><span class="eyebrow">Módulo Slide</span><h1>Apresentações ITIL Foundation</h1><p>${TOTAL_SLIDES} slides em alta resolução, organizados por etapa do curso.</p></div><div class="slides-head-actions"><button class="slide-tool" data-slide-action="zoom-out" aria-label="Diminuir zoom">−</button><strong id="slideZoom">${zoom}%</strong><button class="slide-tool" data-slide-action="zoom-in" aria-label="Aumentar zoom">+</button><button class="slide-tool fullscreen-tool" data-slide-action="fullscreen">Tela cheia</button></div></header><nav class="deck-picker" aria-label="Escolha a apresentação">${DECKS.map((item, index) => `<button class="deck-button ${index === activeDeckIndex ? 'active' : ''}" data-slide-action="deck" data-deck-index="${index}" ${index === activeDeckIndex ? 'aria-current="true"' : ''}><span>${item.title}</span><small>${item.count} slides</small></button>`).join('')}</nav><div class="slides-layout"><aside class="slides-sidebar" aria-label="Lista de slides de ${deck.title}"><div class="slides-sidebar-title"><strong>${deck.title}</strong><span>${deck.count} slides</span></div><div class="slides-thumbnails">${Array.from({ length: deck.count }, (_, index) => { const number = index + 1; return `<button class="slide-thumbnail ${number === currentSlide ? 'active' : ''}" data-slide-action="go" data-slide-number="${number}" aria-label="Abrir ${deck.title}, slide ${number}" ${number === currentSlide ? 'aria-current="true"' : ''}><img src="${slidePath(deck, number)}" alt="" loading="lazy" decoding="async"><span>${String(number).padStart(2, '0')}</span></button>`; }).join('')}</div></aside><section class="slide-viewer"><div class="slide-toolbar"><button class="slide-nav" data-slide-action="previous">← Anterior</button><label class="slide-position"><span class="sr-only">Número do slide</span><input id="slideCurrent" data-slide-jump type="number" min="1" max="${deck.count}" value="${currentSlide}"><strong id="slideCounter">de ${deck.count}</strong></label><button class="slide-nav" data-slide-action="next">Próximo →</button></div><figure class="slide-stage"><button class="slide-edge slide-edge-left" data-slide-action="previous" aria-label="Slide anterior">‹</button><div class="slide-canvas"><img id="currentSlideImage" src="${slidePath(deck, currentSlide)}" alt="${deck.title}, slide ${currentSlide} de ${deck.count}" decoding="async" style="width:${zoom}%"></div><button class="slide-edge slide-edge-right" data-slide-action="next" aria-label="Próximo slide">›</button></figure><p id="slideStatus" class="slide-status" aria-live="polite">${deck.title}: slide ${currentSlide} de ${deck.count} — slide ${globalSlideNumber()} de ${TOTAL_SLIDES} no total — zoom ${zoom}%.</p></section></div></section>`;
    updateControls();
  }

  function open() {
    activeDeckIndex = 0;
    currentSlide = 1;
    zoom = 100;
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
      fullscreen: toggleFullscreen
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
