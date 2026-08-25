const VideosModule = (() => {
  const VIDEOS = [
    {
      title: 'Vídeo 1 - ITIL® Foundation (versão 5) | Introdução',
      embedUrl: 'https://www.youtube.com/embed/vbCxB-uBj5E',
      youtubeUrl: 'https://www.youtube.com/watch?v=vbCxB-uBj5E'
    }
  ];

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
      <article class="study-video-card">
        <header class="study-video-title">
          <span>Vídeo ${String(index + 1).padStart(2, '0')}</span>
          <h2>${video.title}</h2>
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

  function open() {
    document.querySelector('#homeBtn').classList.remove('hidden');
    document.querySelector('#app').innerHTML = `
      <section class="videos-module">
        <header class="videos-head">
          <div>
            <span class="eyebrow">Aprendizagem em vídeo</span>
            <h1>Vídeos ITIL Foundation</h1>
            <p>Assista ao conteúdo diretamente no painel e complemente o estudo dos slides e simulados.</p>
          </div>
          <span class="videos-count">${VIDEOS.length.toString().padStart(2, '0')} vídeo</span>
        </header>
        <div class="videos-library">
          ${VIDEOS.map(videoMarkup).join('')}
        </div>
      </section>`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return { open, total: VIDEOS.length };
})();
