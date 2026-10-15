import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { webcrypto } from 'node:crypto';
import { TextEncoder } from 'node:util';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const source = await readFile(new URL('accounts.js', root), 'utf8');
function client(storage = new Map()) {
  const session = new Map();
  const context = vm.createContext({ crypto: webcrypto, TextEncoder, URL,
    localStorage: { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) },
    sessionStorage: { getItem: key => session.get(key) ?? null, setItem: (key, value) => session.set(key, value), removeItem: key => session.delete(key) }
  });
  vm.runInContext(source, context);
  return { accounts: vm.runInContext('PortalAccounts', context), context, storage };
}
const plain = value => JSON.parse(JSON.stringify(value));
const fresh = client();
const accounts = fresh.accounts;
await accounts.initialize();
const original = JSON.parse(fresh.storage.get(accounts.storageKey));
assert.equal(original.users.filter(user => user.username === 'william').length, 1);
assert.equal(original.audit.length, 0); // Migração não é um login.
const william = await accounts.login('william', 'william');
assert.equal(william.role, 'user');
assert.deepEqual(plain(william.courses), ['tenable']);
assert.equal(william.expiresOn, null);
assert.equal(william.expired, false);
assert.equal(accounts.canAccessCourse('tenable'), true);
assert.equal(accounts.canAccessCourse('itil'), false);
assert.equal(accounts.canAccessCourse('ai901'), false);
assert.throws(() => accounts.listUsers(), /administradores/);
assert.throws(() => accounts.auditLog(), /administradores/);
await assert.rejects(() => accounts.createUser({}), /administradores/);
assert.equal(JSON.parse(fresh.storage.get(accounts.storageKey)).audit.length, 1);
assert.match(accounts.progressKey('itil-quiz-progress-v1-6'), /^study-user-william:/);
await accounts.initialize();
assert.equal(JSON.parse(fresh.storage.get(accounts.storageKey)).users.filter(user => user.username === 'william').length, 1);

// Uma instalação anterior recebe William e conserva cadastros, auditoria e progresso.
const legacy = plain(original);
legacy.users = legacy.users.filter(user => user.username !== 'william');
delete legacy.appliedMigrations;
legacy.audit = [{ id: 'old-login', userId: 'hasleane', username: 'hasleane', role: 'user', timestamp: '2026-10-14T12:00:00Z' }];
const legacyStorage = new Map([[accounts.storageKey, JSON.stringify(legacy)], ['itil-quiz-progress-v1-0', 'progresso anterior']]);
const upgraded = client(legacyStorage);
await upgraded.accounts.initialize();
const migrated = JSON.parse(legacyStorage.get(accounts.storageKey));
assert.deepEqual(migrated.users.slice(0, legacy.users.length), legacy.users);
assert.deepEqual(migrated.audit, legacy.audit);
assert.equal(legacyStorage.get('itil-quiz-progress-v1-0'), 'progresso anterior');
assert.equal((await upgraded.accounts.login('william', 'william')).role, 'user');

// Uma conta William anterior não tem senha, perfil, cursos ou validade substituídos.
const existing = plain(legacy);
const customWilliam = { ...plain(original.users.find(user => user.username === 'william')),
  id: 'legacy-william', courses: ['itil'], expiresOn: '2099-12-31', authVersion: 7,
  password: plain(legacy.users[0].password) };
existing.users.push(customWilliam);
const existingClient = client(new Map([[accounts.storageKey, JSON.stringify(existing)]]));
await existingClient.accounts.initialize();
const existingStore = JSON.parse(existingClient.storage.get(accounts.storageKey));
assert.deepEqual(existingStore.users, existing.users);
assert.deepEqual(existingStore.audit, existing.audit);
assert.equal(existingStore.users.filter(user => user.username === 'william').length, 1);
await assert.rejects(() => existingClient.accounts.login('william', 'william'), /inválidos/);
assert.equal((await existingClient.accounts.login('william', 'domcord')).id, 'legacy-william');

// Depois da migração, alterações e remoção do administrador não são desfeitas.
await upgraded.accounts.login('admin', 'domcord');
await upgraded.accounts.updateUser('william', { role: 'user', courses: ['ai901'], expiresOn: null, password: 'alterada123' });
await upgraded.accounts.initialize();
assert.deepEqual(plain(upgraded.accounts.listUsers().find(user => user.id === 'william').courses), ['ai901']);
await upgraded.accounts.deleteUser('william');
await upgraded.accounts.initialize();
assert.ok(!upgraded.accounts.listUsers().some(user => user.username === 'william'));
assert.equal(upgraded.accounts.auditLog().filter(entry => entry.username === 'william').length, 1);

// A autorização de William é aplicada ao menu e ao motor de questões reais.
const nodes = new Map();
const node = selector => {
  if (!nodes.has(selector)) nodes.set(selector, { innerHTML: '', classList: { add() {}, remove() {} }, style: {}, addEventListener() {}, querySelector() { return null; } });
  return nodes.get(selector);
};
Object.assign(fresh.context, { document: { querySelector: node, documentElement: { style: {} } },
  window: { scrollY: 0, scrollTo() {}, addEventListener() {} }, requestAnimationFrame: callback => callback(),
  AuthGate: { initialize() {}, isAuthenticated: () => Boolean(accounts.currentUser()), currentUser: accounts.currentUser,
    canAccessCourse: accounts.canAccessCourse, progressKey: accounts.progressKey, isAdministrator: () => accounts.currentUser()?.role === 'admin' },
  SlidesModule: { total: 233 }, VideosModule: { total: 32, countFor: () => 1 }
});
for (const file of ['questions.js', 'explanations.js', 'simulado3.js', 'ai901.js', 'ai901-explanations.js', 'Tenable/tenable.js',
  'Tenable/explicacoes_alternativas.js', 'Tenable/Simulados/Banco_complementar/integracao.js',
  'Tenable/Simulados/Banco_complementar/explicacoes_alternativas.js', 'app.js']) {
  vm.runInContext(await readFile(new URL(file, root), 'utf8'), fresh.context, { filename: file });
}
const run = code => vm.runInContext(code, fresh.context);
run('home()');
assert.equal((node('#app').innerHTML.match(/data-action="course"/g) || []).length, 1);
assert.ok(node('#app').innerHTML.includes('data-course="tenable"'));
run("courseHome('itil'); beginNewQuiz(0); beginNewQuiz(3)");
assert.equal(run('activeQuiz'), null);
run("courseHome('tenable')");
assert.equal((node('#app').innerHTML.match(/data-action="start"/g) || []).length, 13);
run('beginNewQuiz(18); choose(activeQuiz.questions[0].a); answer()');
assert.equal(run('isCorrectAnswer(activeQuiz.questions[0], answers[0])'), true);
assert.ok(node('#app').innerHTML.includes('analysis-item'));
assert.ok(fresh.storage.has(accounts.progressKey('itil-quiz-progress-v1-18')));
console.log('Aprovado: William/william, somente Tenable, sem expiração, auditoria, 13 simulados, correção de questões, migração de cadastro anterior, preservação de conta existente e respeito a edição/remoção.');
