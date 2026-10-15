/* O banco SC pessoal fica fora da publicação. */
(() => {
  const address = globalThis.location;
  if (!address || !(address.protocol === 'file:' || ['localhost','127.0.0.1','[::1]'].includes(address.hostname))) return;
  if (typeof document.write !== 'function') return;
  document.write('<script src="Tenable/Simulados/Security_Center/integracao_pessoal.js?v=20261015-sc-menu"><' + '/script><script src="Tenable/Simulados/Security_Center/traducoes_pt_br.js?v=20261015-scptbr"><' + '/script>');
})();
