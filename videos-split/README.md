# Vídeos oficiais ITIL

Os trechos abaixo são cópias locais geradas anteriormente. O player atual usa os quatro vídeos completos incorporados do OneDrive/SharePoint. Os MP4 desta pasta estão ignorados pelo Git e não precisam ser publicados.

Esta pasta contém 18 MP4 independentes, preparados para envio pelo Git:

| Original | Trechos |
| --- | ---: |
| Parte 1.mp4 | 4 |
| Parte 2.mp4 | 4 |
| Parte 3.mp4 | 6 |
| Parte 4.mp4 | 4 |

Cada arquivo tem menos de 100.000.000 bytes, abaixo do limite de 100 MiB do GitHub. Arquivos deste tamanho devem ser enviados por Git; o upload pelo navegador tem limite de 25 MiB.

Os trechos somam aproximadamente 1,70 GB. Estar abaixo do limite individual do Git não garante publicação no GitHub Pages: o site publicado tem limite total de 1 GB. Para publicar todos os vídeos no Pages, será necessário reduzir o tamanho total por recodificação ou servir os vídeos por outra hospedagem. Referências: [arquivos grandes no GitHub](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github) e [limites do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).

Os cortes foram feitos em quadros-chave, com cópia dos fluxos de áudio e vídeo, sem recodificação. Cada MP4 tem metadados no início (`faststart`) e pode ser reproduzido individualmente. Os limites são balanceados pelo tamanho, portanto as durações dos trechos podem variar.

`manifest.json` registra o tamanho e a duração de cada trecho, além do ponto de corte no original. Esses trechos não aparecem mais na biblioteca do site, que agora incorpora os vídeos completos do OneDrive/SharePoint. Os originais no OneDrive não foram alterados.

O teste `node tests/videos-oficiais.test.mjs` verifica a integração atual com OneDrive/SharePoint.
