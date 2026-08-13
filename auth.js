const AuthGate = (() => {
  const USER_HASH = '27a28afba96d9fef54dd94a71c8e7b50b221c54d81fcd92ee5d0986a20f7d158';
  const PASSWORD_HASH = '6e1580212d470eef17740bc5950c8413592a4d5d9e76546776bc53a4e1a7afb9';
  const PASSWORD_SALT = 'itil-study-v1-2026';
  const PASSWORD_ITERATIONS = 210000;
  const SESSION_KEY = 'itil-authenticated';
  const ATTEMPTS_KEY = 'itil-login-attempts';
  const LOCK_KEY = 'itil-login-locked-until';
  const LOCK_SECONDS = 30;
  const MAX_ATTEMPTS = 3;

  let captchaAnswer = 0;
  let countdown = null;
  let onAuthenticated = null;

  async function digest(value) {
    const bytes = new TextEncoder().encode(value);
    const hash = await crypto.subtle.digest('SHA-256', bytes);
    return Array.from(new Uint8Array(hash), byte => byte.toString(16).padStart(2, '0')).join('');
  }

  async function derivePassword(value) {
    const key = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(value),
      'PBKDF2',
      false,
      ['deriveBits']
    );
    const bits = await crypto.subtle.deriveBits({
      name: 'PBKDF2',
      hash: 'SHA-256',
      salt: new TextEncoder().encode(PASSWORD_SALT),
      iterations: PASSWORD_ITERATIONS
    }, key, 256);
    return Array.from(new Uint8Array(bits), byte => byte.toString(16).padStart(2, '0')).join('');
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
    if (getLockRemaining() > 0) return beginCountdown();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value;
    const captcha = Number(document.querySelector('#captcha').value);

    if (!Number.isInteger(captcha) || captcha !== captchaAnswer) {
      registerFailure('Resultado do CAPTCHA incorreto.');
      return;
    }

    const [userHash, passwordHash] = await Promise.all([digest(username), derivePassword(password)]);
    if (userHash !== USER_HASH || passwordHash !== PASSWORD_HASH) {
      registerFailure('Nome de usuário ou senha inválidos.');
      return;
    }

    localStorage.removeItem(ATTEMPTS_KEY);
    localStorage.removeItem(LOCK_KEY);
    sessionStorage.setItem(SESSION_KEY, 'true');
    clearInterval(countdown);
    document.querySelector('#logoutBtn').classList.remove('hidden');
    onAuthenticated();
  }

  function renderLogin() {
    document.querySelector('#homeBtn').classList.add('hidden');
    document.querySelector('#logoutBtn').classList.add('hidden');
    document.querySelector('#app').innerHTML = `<section class="login-page"><div class="login-intro"><span class="eyebrow">Área protegida</span><h1>Entre para acessar seus <em>simulados</em></h1><p>Informe suas credenciais e resolva a soma para continuar seus estudos.</p><div class="security-note"><span>✓</span><p><strong>Acesso temporário</strong>Sua autenticação permanece somente nesta aba.</p></div></div><div class="login-card"><div class="login-card-head"><span class="lock-icon" aria-hidden="true">⌁</span><div><h2>Boas-vindas</h2><p>Acesse sua área de estudos</p></div></div><form id="loginForm" novalidate><label for="username">Nome de usuário</label><input id="username" name="username" type="text" autocomplete="username" required maxlength="64" spellcheck="false"><label for="password">Senha</label><div class="password-wrap"><input id="password" name="password" type="password" autocomplete="current-password" required maxlength="128"><button type="button" id="togglePassword" aria-label="Mostrar senha">Exibir</button></div><label for="captcha">Resolva a soma</label><div class="captcha-row"><strong id="captchaChallenge" aria-label="Equação matemática"></strong><input id="captcha" name="captcha" type="number" inputmode="numeric" min="2" max="9" required autocomplete="off" aria-describedby="loginStatus"></div><p id="loginStatus" class="login-status" role="status" aria-live="polite"></p><button id="loginSubmit" class="login-submit" type="submit">Entrar nos simulados →</button></form></div></section>`;
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

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    renderLogin();
  }

  function initialize(callback) {
    onAuthenticated = callback;
    document.querySelector('#logoutBtn').addEventListener('click', logout);
    if (sessionStorage.getItem(SESSION_KEY) === 'true') {
      document.querySelector('#logoutBtn').classList.remove('hidden');
      callback();
    } else {
      renderLogin();
    }
  }

  return { initialize };
})();
