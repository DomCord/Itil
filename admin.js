const AdminModule = (() => {
  const labels = { itil: 'ITIL v5', ai901: 'AI-901', tenable: 'Tenable' };
  const dateTime = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo', dateStyle: 'short', timeStyle: 'medium'
  });
  const escape = value => String(value ?? '').replace(/[&<>"']/g, character =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
  let tab = 'users';
  let users = [];
  let entries = [];
  let editingId = null;
  let pendingDelete = null;
  let search = '';
  let page = 0;
  let busy = false;
  const PAGE_SIZE = 25;

  function status(message, error = false) {
    const node = document.querySelector('#adminStatus');
    if (node) { node.textContent = message; node.className = `admin-status${error ? ' error' : ''}`; }
  }

  function formatDate(value) {
    if (!value) return 'Sem expiração';
    return value.split('-').reverse().join('/');
  }

  function courseFields(selected = []) {
    return Object.entries(labels).map(([id, label]) => `<label class="admin-check"><input type="checkbox" name="courses" value="${id}" ${selected.includes(id) ? 'checked' : ''}><span>${label}</span></label>`).join('');
  }

  function editor() {
    const user = users.find(item => item.id === editingId);
    const ownAccount = user?.id === AuthGate.currentUser().id;
    return `<section class="admin-editor" aria-labelledby="userFormTitle">
      <div class="admin-section-title"><div><span class="eyebrow">${user ? 'Editar acesso' : 'Novo cadastro'}</span><h2 id="userFormTitle">${user ? escape(user.username) : 'Adicionar usuário'}</h2></div>${user ? '<button class="ghost" data-admin-action="new">Novo usuário</button>' : ''}</div>
      <form id="adminUserForm" class="admin-user-form">
        <label>Nome de usuário<input name="username" autocomplete="off" required minlength="3" maxlength="64" pattern="([A-Za-z0-9._]|-){3,64}" value="${escape(user?.username)}" ${user ? 'readonly' : ''}><small>Letras sem acento, números, ponto, hífen ou sublinhado.</small></label>
        <label>${user ? 'Nova senha (opcional)' : 'Senha inicial'}<input name="password" type="password" autocomplete="new-password" minlength="6" maxlength="128" ${user ? '' : 'required'}><small>${user ? 'Deixe em branco para manter a senha. A troca encerra outras sessões desta conta.' : 'De 6 a 128 caracteres.'}</small></label>
        <div class="admin-form-row"><label>Perfil<select name="role" ${ownAccount ? 'disabled' : ''}><option value="user" ${user?.role !== 'admin' ? 'selected' : ''}>Usuário · materiais</option><option value="admin" ${user?.role === 'admin' ? 'selected' : ''}>Administrador</option></select></label>
        <label>Válido até<input name="expiresOn" type="date" value="${escape(user?.expiresOn)}" ${ownAccount ? 'disabled' : ''}><small>Até 23h59 de Brasília. Em branco: sem expiração.</small></label></div>
        <fieldset class="admin-courses"><legend>Cursos liberados</legend><div class="admin-checks">${courseFields(user?.courses)}</div><p>Administradores acessam todos os cursos. Usuários sem curso selecionado aguardam liberação.</p></fieldset>
        ${ownAccount ? '<p class="admin-hint">Seu perfil e validade só podem ser alterados por outro administrador.</p>' : ''}
        <div class="admin-form-actions"><button type="submit" class="primary">${user ? 'Salvar alterações' : 'Adicionar usuário'}</button>${user ? '<button type="button" class="ghost" data-admin-action="new">Cancelar edição</button>' : ''}</div>
      </form></section>`;
  }

  function usersPanel() {
    const currentId = AuthGate.currentUser().id;
    const needle = search.toLowerCase();
    const filtered = users.filter(user => user.username.includes(needle));
    return `<div class="admin-users-grid">${editor()}<section class="admin-user-list" aria-labelledby="usersTitle">
      <div class="admin-section-title"><h2 id="usersTitle">Usuários <span class="admin-count">${users.length}</span></h2></div>
      <label class="admin-search" for="adminSearch">Buscar usuário<input type="search" id="adminSearch" value="${escape(search)}" placeholder="Nome de usuário" autocomplete="off"></label>
      <div class="admin-user-items">${users.map(user => `<article class="admin-user-item" ${filtered.includes(user) ? '' : 'hidden'}>
        <div class="admin-user-heading"><h3>${escape(user.username)}${user.id === currentId ? ' <small>(você)</small>' : ''}</h3><span class="admin-badge ${user.expired ? 'expired' : ''}">${user.expired ? 'Expirado' : 'Ativo'}</span></div>
        <p class="admin-user-role">${user.role === 'admin' ? 'Administrador' : 'Usuário'} · ${user.expiresOn ? `Válido até ${formatDate(user.expiresOn)}` : 'Sem expiração'}</p>
        <div class="admin-course-tags">${user.courses.length ? user.courses.map(course => `<span>${labels[course]}</span>`).join('') : '<span>Nenhum curso liberado</span>'}</div>
        <div class="admin-item-actions"><button class="ghost" data-admin-action="edit" data-id="${escape(user.id)}">Editar <span class="sr-only">${escape(user.username)}</span></button><button class="ghost danger-button" data-admin-action="delete" data-id="${escape(user.id)}" ${user.id === currentId ? 'disabled title="Não é possível remover sua própria conta"' : ''}>Remover <span class="sr-only">${escape(user.username)}</span></button></div>
        ${pendingDelete === user.id ? `<div class="admin-delete-confirm" role="group" aria-label="Confirmar remoção"><p>Remover <strong>${escape(user.username)}</strong>? O acesso será encerrado. Os logins anteriores permanecerão na auditoria.</p><div class="admin-item-actions"><button class="ghost danger-button" data-admin-action="confirm-delete" data-id="${escape(user.id)}">Confirmar remoção</button><button class="ghost" data-admin-action="cancel-delete">Cancelar</button></div></div>` : ''}
      </article>`).join('')}<p id="noUserMatches" class="admin-empty" ${filtered.length ? 'hidden' : ''}>Nenhum usuário encontrado.</p></div>
    </section></div>`;
  }

  function auditPanel() {
    const filtered = entries.filter(entry => entry.username.includes(search.toLowerCase()));
    const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    page = Math.min(page, pages - 1);
    const visible = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
    return `<section class="admin-audit" aria-labelledby="auditTitle"><div class="admin-section-title"><div><h2 id="auditTitle">Histórico de logins</h2><p>Entradas concluídas na plataforma · horário de Brasília (UTC−3).</p></div><span class="admin-count">${entries.length} registros</span></div>
      <label class="admin-search" for="adminSearch">Filtrar por usuário<input type="search" id="adminSearch" value="${escape(search)}" placeholder="Nome de usuário" autocomplete="off"></label>
      <div class="admin-table-wrap"><table><thead><tr><th scope="col">Usuário</th><th scope="col">Perfil no login</th><th scope="col">Data e hora · Brasília</th></tr></thead><tbody>${visible.length ? visible.map(entry => `<tr><td>${escape(entry.username)}</td><td>${entry.role === 'admin' ? 'Administrador' : 'Usuário'}</td><td><time datetime="${escape(entry.timestamp)}">${dateTime.format(new Date(entry.timestamp))}</time></td></tr>`).join('') : '<tr><td colspan="3" class="admin-empty">Nenhum login encontrado.</td></tr>'}</tbody></table></div>
      <div class="admin-pagination"><button class="ghost" data-admin-action="previous" ${page === 0 ? 'disabled' : ''}>Anterior</button><span>Página ${page + 1} de ${pages}</span><button class="ghost" data-admin-action="next" ${page >= pages - 1 ? 'disabled' : ''}>Próxima</button></div>
      <p class="admin-hint">Reabrir uma sessão já autenticada não gera outro login. A remoção de um usuário preserva seus registros anteriores.</p></section>`;
  }

  function render(message = '') {
    if (!AuthGate.isAdministrator()) return;
    const app = document.querySelector('#app');
    app.innerHTML = `<section class="admin-module"><header class="admin-heading"><div><span class="eyebrow">Gestão do portal</span><h1>Painel administrativo</h1><p>Gerencie usuários, cursos e validade dos acessos.</p></div><button class="ghost" data-admin-action="refresh">Atualizar dados</button></header>
      <aside class="admin-storage-note"><strong>Armazenamento neste navegador</strong><p>Cadastros e auditoria ficam neste navegador e nesta origem do site. Não são sincronizados entre computadores e serão perdidos se os dados do site forem apagados. O uso compartilhado exige um backend.</p></aside>
      <div class="admin-tabs" role="tablist" aria-label="Administração"><button id="usersTab" role="tab" aria-selected="${tab === 'users'}" aria-controls="adminPanel" data-admin-action="users">Usuários</button><button id="auditTab" role="tab" aria-selected="${tab === 'audit'}" aria-controls="adminPanel" data-admin-action="audit">Auditoria</button></div>
      <p id="adminStatus" class="admin-status" role="status" aria-live="polite">${escape(message)}</p>
      <div id="adminPanel" role="tabpanel" aria-labelledby="${tab === 'users' ? 'usersTab' : 'auditTab'}">${tab === 'users' ? usersPanel() : auditPanel()}</div></section>`;
    app.querySelector('#adminUserForm')?.addEventListener('submit', submitUser);
    app.querySelector('#adminSearch').addEventListener('input', event => {
      if (tab === 'users') {
        search = event.target.value;
        const matching = new Set(users.filter(user => user.username.includes(search.toLowerCase())).map(user => user.id));
        app.querySelectorAll('.admin-user-item').forEach(item => {
          item.hidden = !matching.has(item.querySelector('[data-id]').dataset.id);
        });
        app.querySelector('#noUserMatches').hidden = matching.size > 0;
        return;
      }
      const position = event.target.selectionStart;
      search = event.target.value; page = 0; render();
      const input = document.querySelector('#adminSearch'); input.focus();
      if (input.type !== 'search') return;
      input.setSelectionRange(position, position);
    });
    const role = app.querySelector('[name="role"]');
    role?.addEventListener('change', syncCourses);
    syncCourses();
  }

  function syncCourses() {
    const form = document.querySelector('#adminUserForm');
    if (!form) return;
    const isAdmin = form.elements.role.value === 'admin';
    form.querySelectorAll('[name="courses"]').forEach(input => {
      input.disabled = isAdmin;
      if (isAdmin) input.checked = true;
    });
  }

  function refresh(message = '') {
    users = PortalAccounts.listUsers(); entries = PortalAccounts.auditLog(); render(message);
  }

  async function submitUser(event) {
    event.preventDefault();
    if (busy || !AuthGate.isAdministrator()) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const input = { username: form.elements.username.value, password: form.elements.password.value,
      role: form.elements.role.value, expiresOn: form.elements.expiresOn.value,
      courses: [...form.querySelectorAll('[name="courses"]:checked')].map(element => element.value) };
    busy = true;
    form.querySelector('[type="submit"]').disabled = true;
    try {
      const updated = editingId ? await PortalAccounts.updateUser(editingId, input) : await PortalAccounts.createUser(input);
      const message = `Usuário ${updated.username} ${editingId ? 'atualizado' : 'adicionado'} com sucesso.`;
      editingId = null; pendingDelete = null; search = ''; refresh(message);
    } catch (error) { status(error.message, true); }
    finally { busy = false; if (form.isConnected) form.querySelector('[type="submit"]').disabled = false; }
  }

  async function handleClick(event) {
    const control = event.target.closest('[data-admin-action]');
    if (!control || control.disabled || busy || !AuthGate.isAdministrator()) return;
    try {
      const action = control.dataset.adminAction;
      if (action === 'refresh') { refresh('Dados atualizados.'); return; }
      if (action === 'users' || action === 'audit') { tab = action; search = ''; page = 0; pendingDelete = null; refresh(); return; }
      if (action === 'new') { editingId = null; pendingDelete = null; render(); }
      if (action === 'edit') { editingId = control.dataset.id; pendingDelete = null; render(); document.querySelector('#userFormTitle').scrollIntoView({ block: 'start', behavior: 'smooth' }); }
      if (action === 'delete') { pendingDelete = control.dataset.id; render(); }
      if (action === 'cancel-delete') { pendingDelete = null; render(); }
      if (action === 'confirm-delete' && pendingDelete === control.dataset.id) {
        busy = true;
        await PortalAccounts.deleteUser(pendingDelete);
        if (editingId === pendingDelete) editingId = null;
        pendingDelete = null; refresh('Usuário removido. O histórico de logins foi preservado.');
      }
      if (action === 'previous' || action === 'next') { page += action === 'next' ? 1 : -1; render(); }
    } catch (error) { status(error.message, true); }
    finally { busy = false; }
  }

  function open() {
    if (!AuthGate.isAdministrator()) return false;
    tab = 'users'; editingId = null; pendingDelete = null; search = ''; page = 0;
    document.querySelector('#homeBtn').classList.remove('hidden');
    document.querySelector('#homeBtn').textContent = '← Menu principal';
    document.querySelector('#coursesBtn').classList.add('hidden');
    try { refresh(); } catch (error) { status(error.message, true); }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return true;
  }

  document.querySelector('#app').addEventListener('click', handleClick);
  return { open };
})();
