/* Contas locais do portal estático. A autorização efetiva exige um backend. */
const PortalAccounts = (() => {
  const STORE_KEY = 'study-accounts-v1';
  const SESSION_KEY = 'study-session-v1';
  const ITERATIONS = 210000;
  const COURSE_IDS = ['itil', 'ai901', 'tenable'];
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit'
  });
  let writeQueue = Promise.resolve();

  function today() {
    const parts = Object.fromEntries(formatter.formatToParts(new Date()).map(part => [part.type, part.value]));
    return `${parts.year}-${parts.month}-${parts.day}`;
  }

  function isExpired(user) { return Boolean(user.expiresOn && user.expiresOn < today()); }
  function publicUser(user) {
    const { id, username, role, courses, expiresOn, createdAt } = user;
    return { id, username, role, courses: [...courses], expiresOn, createdAt, expired: isExpired(user) };
  }

  function readStore() {
    let store;
    try { store = JSON.parse(localStorage.getItem(STORE_KEY)); }
    catch { throw new Error('Não foi possível ler os cadastros deste navegador.'); }
    if (store?.version !== 1 || !Array.isArray(store.users) || !Array.isArray(store.audit)) {
      throw new Error('Os cadastros locais estão indisponíveis. Não serão substituídos automaticamente.');
    }
    return store;
  }

  function writeStore(store) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); }
    catch { throw new Error('Não foi possível salvar. Verifique o espaço e a permissão de armazenamento do navegador.'); }
  }

  function withWrite(callback) {
    if (globalThis.navigator?.locks?.request) return navigator.locks.request('study-accounts-write', callback);
    const operation = writeQueue.then(callback);
    writeQueue = operation.catch(() => {});
    return operation;
  }

  function initialStore() {
    const createdAt = new Date().toISOString();
    const base = { courses: COURSE_IDS, expiresOn: null, createdAt, authVersion: 1 };
    return { version: 1, users: [
      { ...base, id: 'admin', username: 'admin', role: 'admin', password: {
        salt: 'study-admin-v1-2026', iterations: ITERATIONS,
        hash: '383ccd94104f561200a7af766cb1ab0f98baafae601d2582f7fd85b8be06cec6'
      } },
      { ...base, id: 'hasleane', username: 'hasleane', role: 'user', password: {
        salt: 'itil-study-v1-2026', iterations: ITERATIONS,
        hash: '6e1580212d470eef17740bc5950c8413592a4d5d9e76546776bc53a4e1a7afb9'
      } }
    ], audit: [] };
  }

  async function initialize() {
    await withWrite(() => {
      const store = localStorage.getItem(STORE_KEY) === null ? initialStore() : readStore();
      const migration = 'william-tenable-v1';
      const migrations = Array.isArray(store.appliedMigrations) ? store.appliedMigrations : [];
      if (migrations.includes(migration)) return;
      // Inclui a conta uma vez, sem substituir um cadastro já criado pelo administrador.
      if (!store.users.some(user => user.username.trim().toLowerCase() === 'william')) {
        store.users.push({ id: 'william', username: 'william', role: 'user', courses: ['tenable'],
          expiresOn: null, createdAt: new Date().toISOString(), authVersion: 1, password: {
            salt: '022dddab59da960bd3cae08b49853c75852858c8bd9e56c1', iterations: ITERATIONS,
            hash: '69220c61c7e10cd317edf9859cd4d9a32f4db80c110398ef6a70169c20327891'
          } });
      }
      store.appliedMigrations = [...migrations, migration];
      writeStore(store);
    });
    // A antiga marca booleana não identifica uma conta e não é uma sessão válida.
    sessionStorage.removeItem('itil-authenticated');
  }

  function sessionUser(store = readStore()) {
    let session;
    try { session = JSON.parse(sessionStorage.getItem(SESSION_KEY)); } catch { return null; }
    const user = store.users.find(candidate => candidate.id === session?.userId);
    return user && user.authVersion === session.authVersion && !isExpired(user) ? user : null;
  }

  function currentUser() { const user = sessionUser(); return user ? publicUser(user) : null; }
  function requireAdmin(store) {
    const actor = sessionUser(store);
    if (!actor || actor.role !== 'admin') throw new Error('Acesso permitido somente a administradores.');
    return actor;
  }

  async function passwordHash(value, salt, iterations = ITERATIONS) {
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey('raw', encoder.encode(value), 'PBKDF2', false, ['deriveBits']);
    const bits = await crypto.subtle.deriveBits({
      name: 'PBKDF2', hash: 'SHA-256', salt: encoder.encode(salt), iterations
    }, key, 256);
    return Array.from(new Uint8Array(bits), byte => byte.toString(16).padStart(2, '0')).join('');
  }

  function validatePassword(value) {
    if (typeof value !== 'string' || value.length < 6 || value.length > 128) {
      throw new Error('Use uma senha com 6 a 128 caracteres.');
    }
  }

  async function newPassword(value) {
    validatePassword(value);
    const bytes = crypto.getRandomValues(new Uint8Array(24));
    const salt = Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
    return { salt, iterations: ITERATIONS, hash: await passwordHash(value, salt) };
  }

  function validateFields(input) {
    const username = String(input.username || '').trim().toLowerCase();
    if (!/^[a-z0-9._-]{3,64}$/.test(username)) throw new Error('O usuário deve ter 3 a 64 letras sem acento, números, ponto, hífen ou sublinhado.');
    if (!['admin', 'user'].includes(input.role)) throw new Error('Perfil inválido.');
    if (!Array.isArray(input.courses) || input.courses.some(course => !COURSE_IDS.includes(course))) throw new Error('Curso inválido.');
    const expiresOn = input.expiresOn || null;
    if (expiresOn && (!/^\d{4}-\d{2}-\d{2}$/.test(expiresOn) ||
      !Number.isFinite(Date.parse(`${expiresOn}T00:00:00Z`)) ||
      new Date(`${expiresOn}T00:00:00Z`).toISOString().slice(0, 10) !== expiresOn)) throw new Error('Data de expiração inválida.');
    return { username, role: input.role, courses: input.role === 'admin' ? [...COURSE_IDS] : [...new Set(input.courses)], expiresOn };
  }

  async function login(username, password) {
    return withWrite(async () => {
      const store = readStore();
      const normalized = String(username).trim().toLowerCase();
      const user = store.users.find(candidate => candidate.username === normalized);
      // Usa a mesma derivação para uma conta inexistente.
      const credentials = user?.password || store.users[0].password;
      const hash = await passwordHash(password, credentials.salt, credentials.iterations);
      if (!user || hash !== user.password.hash) throw new Error('Nome de usuário ou senha inválidos.');
      if (isExpired(user)) throw new Error('Seu acesso à plataforma expirou. Solicite a renovação ao administrador.');
      const timestamp = new Date().toISOString();
      store.audit.push({ id: crypto.randomUUID(), userId: user.id, username: user.username, role: user.role, timestamp });
      // Só conclui o login quando seu registro de auditoria puder ser salvo.
      writeStore(store);
      sessionStorage.setItem(SESSION_KEY, JSON.stringify({ userId: user.id, authVersion: user.authVersion }));
      return publicUser(user);
    });
  }

  function logout() { sessionStorage.removeItem(SESSION_KEY); }
  function canAccessCourse(course) {
    const user = currentUser();
    return COURSE_IDS.includes(course) && Boolean(user && (user.role === 'admin' || user.courses.includes(course)));
  }
  function listUsers() { const store = readStore(); requireAdmin(store); return store.users.map(publicUser); }
  function auditLog() { const store = readStore(); requireAdmin(store); return store.audit.map(entry => ({ ...entry })).reverse(); }

  async function createUser(input) {
    return withWrite(async () => {
      const store = readStore(); requireAdmin(store);
      const fields = validateFields(input);
      if (store.users.some(user => user.username === fields.username)) throw new Error('Este nome de usuário já está cadastrado.');
      const password = await newPassword(input.password);
      const user = { ...fields, id: crypto.randomUUID(), createdAt: new Date().toISOString(), authVersion: 1, password };
      store.users.push(user); writeStore(store);
      return publicUser(user);
    });
  }

  async function updateUser(id, input) {
    return withWrite(async () => {
      const store = readStore(); const actor = requireAdmin(store);
      const user = store.users.find(candidate => candidate.id === id);
      if (!user) throw new Error('Usuário não encontrado. Atualize a lista.');
      const fields = validateFields({ ...input, username: user.username });
      if (actor.id === id && (fields.role !== 'admin' || fields.expiresOn !== user.expiresOn)) {
        throw new Error('Use outro administrador para alterar seu próprio perfil ou definir sua expiração.');
      }
      if (input.password) {
        user.password = await newPassword(input.password);
        user.authVersion += 1;
      }
      Object.assign(user, fields); writeStore(store);
      // Uma troca de senha própria mantém somente a sessão que fez a alteração.
      if (actor.id === id) sessionStorage.setItem(SESSION_KEY, JSON.stringify({ userId: id, authVersion: user.authVersion }));
      return publicUser(user);
    });
  }

  async function deleteUser(id) {
    return withWrite(() => {
      const store = readStore(); const actor = requireAdmin(store);
      if (actor.id === id) throw new Error('Você não pode remover a conta que está utilizando.');
      const user = store.users.find(candidate => candidate.id === id);
      if (!user) throw new Error('Usuário não encontrado. Atualize a lista.');
      store.users = store.users.filter(candidate => candidate.id !== id);
      // O histórico mantém o nome registrado no momento do login.
      writeStore(store);
    });
  }

  function progressKey(key) {
    const user = currentUser();
    return user?.id === 'hasleane' ? key : `study-user-${user?.id || 'guest'}:${key}`;
  }

  return { initialize, login, logout, currentUser, canAccessCourse, listUsers, auditLog,
    createUser, updateUser, deleteUser, progressKey, today, storageKey: STORE_KEY, mode: 'local' };
})();
