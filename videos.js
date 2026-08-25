const VideosModule = (() => {
  const VIDEOS = [
    {
      title: 'Itil® Fund v5 | Introdução',
      embedUrl: 'https://www.youtube.com/embed/vbCxB-uBj5E',
      youtubeUrl: 'https://www.youtube.com/watch?v=vbCxB-uBj5E'
    },
    {
      title: 'Itil® Fund v5 | Termos e Definições Essenciais 1',
      embedUrl: 'https://www.youtube.com/embed/LhydPc-pZqE?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=LhydPc-pZqE&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Termos e Definições Essenciais 2',
      embedUrl: 'https://www.youtube.com/embed/XGNYob1gJtQ?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=XGNYob1gJtQ&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Termos e Definições Essenciais 3',
      embedUrl: 'https://www.youtube.com/embed/jO2_isY704A?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=jO2_isY704A&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Termos e Definições Essenciais 4',
      embedUrl: 'https://www.youtube.com/embed/VvHoNw_8UAI?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=VvHoNw_8UAI&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Termos e Definições Essenciais 5',
      embedUrl: 'https://www.youtube.com/embed/y-4HIwNcOhM?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=y-4HIwNcOhM&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Resumo de Termos e Definições Essenciais',
      embedUrl: 'https://www.youtube.com/embed/qsd-DOWHNys?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=qsd-DOWHNys&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | As 4 Dimensões',
      embedUrl: 'https://www.youtube.com/embed/0GXsP4CcNl0?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=0GXsP4CcNl0&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Resumo das 4 Dimensões',
      embedUrl: 'https://www.youtube.com/embed/N11xgWjiHT0?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=N11xgWjiHT0&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Ciclo de Vida do Produto e do Serviço',
      embedUrl: 'https://www.youtube.com/embed/s0kItKeqbKY?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=s0kItKeqbKY&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Sistema de Valor',
      embedUrl: 'https://www.youtube.com/embed/YWRjTfD9Ask?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=YWRjTfD9Ask&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Os Princípios Orientadores 1',
      embedUrl: 'https://www.youtube.com/embed/j_5aWJJ6ucM?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=j_5aWJJ6ucM&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Os Princípios Orientadores 2',
      embedUrl: 'https://www.youtube.com/embed/4Kf5U2V7MWU?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=4Kf5U2V7MWU&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Governança de tecnologia digital',
      embedUrl: 'https://www.youtube.com/embed/7ox18qIqt0g?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=7ox18qIqt0g&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Práticas e Guias Práticos',
      embedUrl: 'https://www.youtube.com/embed/i4QX_hS4xcI?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=i4QX_hS4xcI&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Melhoria Contínua',
      embedUrl: 'https://www.youtube.com/embed/bLULqrghPPs?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=bLULqrghPPs&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Atividade de Cadeia de Valor - Descubra',
      embedUrl: 'https://www.youtube.com/embed/xb08iuldhoQ?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=xb08iuldhoQ&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Atividade de Cadeia de Valor - Design',
      embedUrl: 'https://www.youtube.com/embed/W0D6vk631ck?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=W0D6vk631ck&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Atividade da Cadeia de Valor - Adquirir',
      embedUrl: 'https://www.youtube.com/embed/6saxFBHQfrY?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=6saxFBHQfrY&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Atividade de Cadeia de Valor - Construção',
      embedUrl: 'https://www.youtube.com/embed/l3c3MO8tpHE?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=l3c3MO8tpHE&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Atividade de Cadeia de Valor - Transição',
      embedUrl: 'https://www.youtube.com/embed/U5CkYT-5oBI?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=U5CkYT-5oBI&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Atividade da cadeia de valor - Operar',
      embedUrl: 'https://www.youtube.com/embed/Zq3TRr_f5z0?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=Zq3TRr_f5z0&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Atividade da cadeia de valor - Entrega',
      embedUrl: 'https://www.youtube.com/embed/p1ql3bMTPvs?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=p1ql3bMTPvs&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Atividade da cadeia de valor - Suporte',
      embedUrl: 'https://www.youtube.com/embed/PGO3An3xaoQ?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=PGO3An3xaoQ&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Resumo do Sistema de Valores',
      embedUrl: 'https://www.youtube.com/embed/DBeckaHW7E4?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=DBeckaHW7E4&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Fluxos de Valor',
      embedUrl: 'https://www.youtube.com/embed/xkPbkxicMlo?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=xkPbkxicMlo&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Tipos e Mapeamento de Fluxos de Valor',
      embedUrl: 'https://www.youtube.com/embed/TVFKjlaTJ6Y?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=TVFKjlaTJ6Y&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Objetivo e Modelo Operacional',
      embedUrl: 'https://www.youtube.com/embed/OFPGmKUpuBU?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=OFPGmKUpuBU&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'Itil® Fund v5 | Resumo dos Fluxos de Valor',
      embedUrl: 'https://www.youtube.com/embed/3GyErcvnY2A?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=3GyErcvnY2A&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'ITIL® (versão 5) Foundation | ITIL® e IA',
      embedUrl: 'https://www.youtube.com/embed/WoqextDpuKg?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=WoqextDpuKg&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    },
    {
      title: 'ITIL® (versão 5) Foundation | ITIL® e outras estruturas',
      embedUrl: 'https://www.youtube.com/embed/s4ffkWwtURM?list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka',
      youtubeUrl: 'https://www.youtube.com/watch?v=s4ffkWwtURM&list=PLVzkjYR3xN1XaFk5lr-xcrdXz64LuM2ka'
    }
  ];

  let activeIndex = 0;

  function playerUrl(video) {
    if (!/^https?:$/.test(window.location.protocol)) return '';
    const url = new URL(video.embedUrl);
    url.searchParams.set('origin', window.location.origin);
    url.searchParams.set('playsinline', '1');
    return url.toString();
  }

  function videoMarkup(video, index) {
    const embedUrl = playerUrl(video);
    return `
      <article class="study-video-card" aria-labelledby="activeVideoTitle">
        <header class="study-video-title">
          <span>Vídeo ${String(index + 1).padStart(2, '0')} de ${String(VIDEOS.length).padStart(2, '0')}</span>
          <h2 id="activeVideoTitle">${video.title}</h2>
        </header>
        ${embedUrl ? `<div class="study-video-frame">
          <iframe
            src="${embedUrl}"
            title="${video.title}"
            loading="lazy"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="origin"
            allowfullscreen></iframe>
        </div>` : `<div class="study-video-http-notice" role="status">
          <span aria-hidden="true">▶</span>
          <div><strong>O player do YouTube exige acesso por HTTP ou HTTPS</strong><p>Abra o projeto por um servidor local, como o Live Server, ou acesse a versão publicada no GitHub Pages. A abertura direta do arquivo por <code>file://</code> não envia a identificação de origem exigida pelo YouTube.</p></div>
        </div>`}
        <footer class="study-video-source">
          <span>Conteúdo reproduzido pelo player oficial do YouTube.</span>
          <a href="${video.youtubeUrl}" target="_blank" rel="noopener noreferrer">Abrir no YouTube ↗</a>
        </footer>
      </article>`;
  }

  function navigationMarkup(video, index) {
    const isActive = index === activeIndex;
    return `
      <button class="video-nav-item${isActive ? ' active' : ''}"
        id="videoTab${index}"
        type="button"
        role="tab"
        data-video-index="${index}"
        aria-selected="${isActive}"
        aria-controls="videoViewer">
        <span class="video-nav-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <rect x="2.5" y="4" width="19" height="16" rx="4"></rect>
            <path d="m10 9 5 3-5 3Z"></path>
          </svg>
          <small>${String(index + 1).padStart(2, '0')}</small>
        </span>
        <span class="video-nav-copy">
          <small>Vídeo ${index + 1}</small>
          <strong>${video.title}</strong>
        </span>
        <span class="video-nav-arrow" aria-hidden="true">›</span>
      </button>`;
  }

  function select(index) {
    if (!Number.isInteger(index) || index < 0 || index >= VIDEOS.length) return;
    activeIndex = index;

    const viewer = document.querySelector('#videoViewer');
    if (!viewer) return;
    viewer.innerHTML = videoMarkup(VIDEOS[index], index);
    viewer.setAttribute('aria-labelledby', `videoTab${index}`);

    document.querySelectorAll('.video-nav-item').forEach((item, itemIndex) => {
      const isActive = itemIndex === index;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });
  }

  function open() {
    activeIndex = 0;
    document.querySelector('#homeBtn').classList.remove('hidden');
    document.querySelector('#app').innerHTML = `
      <section class="videos-module">
        <header class="videos-head">
          <div>
            <span class="eyebrow">Aprendizagem em vídeo</span>
            <h1>Vídeos ITIL Foundation</h1>
            <p>Assista ao conteúdo diretamente no painel e complemente o estudo dos slides e simulados.</p>
          </div>
          <span class="videos-count">${VIDEOS.length.toString().padStart(2, '0')} vídeos</span>
        </header>
        <div class="videos-workspace">
          <aside class="videos-sidebar">
            <div class="videos-sidebar-head">
              <span>Biblioteca</span>
              <strong>Selecione um vídeo</strong>
            </div>
            <nav class="videos-navigation" aria-label="Lista de vídeos" role="tablist">
              ${VIDEOS.map(navigationMarkup).join('')}
            </nav>
          </aside>
          <div class="videos-viewer" id="videoViewer" role="tabpanel" aria-labelledby="videoTab0">
            ${videoMarkup(VIDEOS[activeIndex], activeIndex)}
          </div>
        </div>
      </section>`;

    document.querySelector('.videos-navigation').addEventListener('click', event => {
      const item = event.target.closest('[data-video-index]');
      if (item) select(Number(item.dataset.videoIndex));
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return { open, select, total: VIDEOS.length };
})();
