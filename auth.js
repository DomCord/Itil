const AuthGate = (() => {
  const ATTEMPTS_KEY = 'itil-login-attempts';
  const LOCK_KEY = 'itil-login-locked-until';
  const LOCK_SECONDS = 30;
  const MAX_ATTEMPTS = 3;

  let captchaAnswer = 0;
  let countdown = null;
  let onAuthenticated = null;
  let onSessionEnd = () => {};
  let sessionSignature = '';
  let loginPending = false;

  function currentUser() { return PortalAccounts.currentUser(); }
  function signature(user) { return user ? JSON.stringify([user.id, user.role, user.courses, user.expiresOn]) : ''; }
  function syncHeader(user) {
    document.querySelector('#logoutBtn').classList.toggle('hidden', !user);
    document.querySelector('#adminBtn').classList.toggle('hidden', user?.role !== 'admin');
    const account = document.querySelector('#accountInfo');
    account.textContent = user ? `${user.username} · ${user.role === 'admin' ? 'Administrador' : 'Usuário'}` : '';
    account.classList.toggle('hidden', !user);
  }

  function checkSession() {
    try {
      const user = currentUser();
      if (!user && sessionSignature) {
        logout('Sua sessão foi encerrada. O acesso pode ter expirado ou sido alterado pelo administrador.');
      } else if (user && signature(user) !== sessionSignature) {
        onSessionEnd();
        sessionSignature = signature(user);
        syncHeader(user);
        onAuthenticated();
      }
      return Boolean(user);
    } catch (error) {
      logout(error.message);
      return false;
    }
  }

  function randomInteger(maxExclusive) {
    const value = new Uint32Array(1);
    crypto.getRandomValues(value);
    return value[0] % maxExclusive;
  }

  function generateCaptcha() {
    const total = randomInteger(8) + 2;
    const first = randomInteger(total - 1) + 1;
    captchaAnswer = total;
    const challenge = document.querySelector('#captchaChallenge');
    if (challenge) challenge.textContent = `${first} + ${total - first} =`;
  }

  function getLockRemaining() {
    const lockedUntil = Number(localStorage.getItem(LOCK_KEY) || 0);
    return Math.max(0, Math.ceil((lockedUntil - Date.now()) / 1000));
  }

  function setFormLocked(locked) {
    document.querySelectorAll('#loginForm input, #loginSubmit').forEach(element => {
      element.disabled = locked;
    });
  }

  function showMessage(message, type = 'error') {
    const status = document.querySelector('#loginStatus');
    if (!status) return;
    status.textContent = message;
    status.className = `login-status ${type}`;
  }

  function updateLock() {
    const remaining = getLockRemaining();
    if (remaining > 0) {
      setFormLocked(true);
      showMessage(`Muitas tentativas. Tente novamente em ${remaining}s.`, 'locked');
      return;
    }
    clearInterval(countdown);
    countdown = null;
    localStorage.removeItem(LOCK_KEY);
    localStorage.setItem(ATTEMPTS_KEY, '0');
    setFormLocked(false);
    showMessage('Bloqueio encerrado. Você pode tentar novamente.', 'info');
    generateCaptcha();
  }

  function beginCountdown() {
    clearInterval(countdown);
    updateLock();
    if (getLockRemaining() > 0) countdown = setInterval(updateLock, 250);
  }

  function registerFailure(message) {
    const attempts = Number(localStorage.getItem(ATTEMPTS_KEY) || 0) + 1;
    if (attempts >= MAX_ATTEMPTS) {
      localStorage.setItem(ATTEMPTS_KEY, '0');
      localStorage.setItem(LOCK_KEY, String(Date.now() + LOCK_SECONDS * 1000));
      beginCountdown();
      return;
    }
    localStorage.setItem(ATTEMPTS_KEY, String(attempts));
    showMessage(`${message} Restam ${MAX_ATTEMPTS - attempts} tentativa(s).`);
    generateCaptcha();
    const captcha = document.querySelector('#captcha');
    if (captcha) captcha.value = '';
  }

  async function handleLogin(event) {
    event.preventDefault();
    if (loginPending) return;
    if (getLockRemaining() > 0) return beginCountdown();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value;
    const captcha = Number(document.querySelector('#captcha').value);

    if (!Number.isInteger(captcha) || captcha !== captchaAnswer) {
      registerFailure('Resultado do CAPTCHA incorreto.');
      return;
    }

    loginPending = true;
    document.querySelector('#loginSubmit').disabled = true;
    try {
      const user = await PortalAccounts.login(username, password);
      localStorage.removeItem(ATTEMPTS_KEY);
      localStorage.removeItem(LOCK_KEY);
      clearInterval(countdown);
      sessionSignature = signature(user);
      syncHeader(user);
      onAuthenticated();
    } catch (error) {
      registerFailure(error.message);
    } finally {
      loginPending = false;
      const submit = document.querySelector('#loginSubmit');
      if (submit) submit.disabled = getLockRemaining() > 0;
    }
  }

  function renderLogin() {
    document.querySelector('#homeBtn').classList.add('hidden');
    document.querySelector('#coursesBtn').classList.add('hidden');
    syncHeader(null);
    document.querySelector('#app').innerHTML = `<section class="login-page"><div class="login-intro"><span class="eyebrow">Área protegida</span><h1>Entre para acessar seus <em>simulados</em></h1><p>Informe suas credenciais e resolva a soma para acessar ITIL v5, AI-901 e Tenable.</p><div class="security-note"><span>✓</span><p><strong>Acesso temporário</strong>Sua autenticação permanece somente nesta aba.</p></div></div><div class="login-card"><div class="login-card-head"><span class="lock-icon" aria-hidden="true">⌁</span><div><h2>Boas-vindas</h2><p>Acesse sua área de estudos</p></div></div><form id="loginForm" novalidate><label for="username">Nome de usuário</label><input id="username" name="username" type="text" autocomplete="username" required maxlength="64" spellcheck="false"><label for="password">Senha</label><div class="password-wrap"><input id="password" name="password" type="password" autocomplete="current-password" required maxlength="128"><button type="button" id="togglePassword" aria-label="Mostrar senha">Exibir</button></div><label for="captcha">Resolva a soma</label><div class="captcha-row"><strong id="captchaChallenge" aria-label="Equação matemática"></strong><input id="captcha" name="captcha" type="number" inputmode="numeric" min="2" max="9" required autocomplete="off" aria-describedby="loginStatus"></div><p id="loginStatus" class="login-status" role="status" aria-live="polite"></p><button id="loginSubmit" class="login-submit" type="submit">Acessar cursos →</button></form></div></section>`;
    document.querySelector('#loginForm').addEventListener('submit', handleLogin);
    document.querySelector('#togglePassword').addEventListener('click', event => {
      const password = document.querySelector('#password');
      const reveal = password.type === 'password';
      password.type = reveal ? 'text' : 'password';
      event.currentTarget.textContent = reveal ? 'Ocultar' : 'Exibir';
      event.currentTarget.setAttribute('aria-label', reveal ? 'Ocultar senha' : 'Mostrar senha');
    });
    generateCaptcha();
    if (getLockRemaining() > 0) beginCountdown();
    else document.querySelector('#username').focus();
  }

  function logout(message = '') {
    PortalAccounts.logout();
    sessionSignature = '';
    onSessionEnd();
    renderLogin();
    if (message) showMessage(message);
  }

  async function initialize(callback, sessionEnd = () => {}) {
    onAuthenticated = callback;
    onSessionEnd = sessionEnd;
    document.querySelector('#logoutBtn').addEventListener('click', () => logout());
    try {
      await PortalAccounts.initialize();
      const user = currentUser();
      sessionSignature = signature(user);
      syncHeader(user);
      if (user) callback();
      else renderLogin();
    } catch (error) {
      renderLogin();
      showMessage(error.message);
      document.querySelector('#loginSubmit').disabled = true;
    }
    setInterval(() => { if (sessionSignature) checkSession(); }, 15000);
    window.addEventListener('focus', () => { if (sessionSignature) checkSession(); });
    window.addEventListener('storage', event => {
      if (event.key === PortalAccounts.storageKey || event.key === null) checkSession();
    });
  }

  return { initialize, isAuthenticated: checkSession, currentUser,
    isAdministrator: () => checkSession() && currentUser()?.role === 'admin',
    canAccessCourse: course => checkSession() && PortalAccounts.canAccessCourse(course),
    progressKey: key => PortalAccounts.progressKey(key) };
})();
