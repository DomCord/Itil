import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { webcrypto } from 'node:crypto';
import { TextEncoder } from 'node:util';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const source = await readFile(new URL('accounts.js', root), 'utf8');
const storage = new Map();
let instant = '2026-10-15T15:00:00Z';
class TestDate extends Date {
  constructor(...values) { super(...(values.length ? values : [instant])); }
  static now() { return new Date(instant).getTime(); }
}
function createClient(shared = storage) {
  const session = new Map();
  const context = vm.createContext({ Date: TestDate, crypto: webcrypto, TextEncoder,
    localStorage: { getItem: key => shared.get(key) ?? null, setItem: (key, value) => shared.set(key, value) },
    sessionStorage: { getItem: key => session.get(key) ?? null, setItem: (key, value) => session.set(key, value), removeItem: key => session.delete(key) }
  });
  vm.runInContext(source, context);
  return { context, session, accounts: vm.runInContext('PortalAccounts', context) };
}
const adminClient = createClient();
const admin = adminClient.accounts;
await admin.initialize();
assert.equal(storage.size, 1);
const initial = JSON.parse(storage.get(admin.storageKey));
assert.deepEqual(initial.users.map(user => [user.username, user.role]), [['admin', 'admin'], ['hasleane', 'user']]);
assert.equal(initial.users[1].password.hash, '6e1580212d470eef17740bc5950c8413592a4d5d9e76546776bc53a4e1a7afb9');
assert.equal(initial.users[1].password.salt, 'itil-study-v1-2026');
assert.equal(initial.users[1].password.iterations, 210000);
assert.equal(admin.currentUser(), null);
await assert.rejects(() => admin.login('admin', 'incorreta'), /inválidos/);
assert.equal(JSON.parse(storage.get(admin.storageKey)).audit.length, 0);
assert.equal((await admin.login('ADMIN', 'domcord')).role, 'admin');
assert.equal(admin.auditLog().length, 1);
assert.ok(admin.auditLog()[0].timestamp.endsWith('Z'));
assert.equal(admin.canAccessCourse('itil'), true);
assert.equal(admin.canAccessCourse('inexistente'), false);
await assert.rejects(() => admin.deleteUser('admin'), /própria|utilizando/);
await assert.rejects(() => admin.updateUser('admin', { role: 'user', courses: [], expiresOn: null }), /outro administrador/);
await assert.rejects(() => admin.createUser({ username: 'HASLEANE', password: 'teste123', role: 'user', courses: [] }), /já está cadastrado/);
await assert.rejects(() => admin.createUser({ username: '<script>', password: 'teste123', role: 'user', courses: [] }), /usuário deve/);
await assert.rejects(() => admin.createUser({ username: 'data-invalida', password: 'teste123', role: 'user', courses: [], expiresOn: '2026-02-30' }), /Data/);
await assert.rejects(() => admin.createUser({ username: 'senha-curta', password: '123', role: 'user', courses: [] }), /senha/);
await assert.rejects(() => admin.createUser({ username: 'curso-invalido', password: 'teste123', role: 'user', courses: ['outro'] }), /Curso/);

const user = await admin.createUser({ username: 'aluno.teste', password: 'senhaTeste123', role: 'user', courses: ['tenable'], expiresOn: '2026-10-15' });
const readerClient = createClient();
const reader = readerClient.accounts;
await reader.initialize();
await reader.login('aluno.teste', 'senhaTeste123');
assert.equal(reader.currentUser().username, 'aluno.teste');
assert.equal(reader.canAccessCourse('tenable'), true);
assert.equal(reader.canAccessCourse('itil'), false);
assert.equal(reader.canAccessCourse('ai901'), false);
assert.ok(!Object.hasOwn(reader.currentUser(), 'password'));
assert.match(reader.progressKey('itil-quiz-progress-v1-6'), /^study-user-/);
assert.throws(() => reader.listUsers(), /administradores/);
assert.throws(() => reader.auditLog(), /administradores/);
await assert.rejects(() => reader.createUser({}), /administradores/);
await assert.rejects(() => reader.updateUser(user.id, {}), /administradores/);
await assert.rejects(() => reader.deleteUser('admin'), /administradores/);

// Permissões são relidas, inclusive em outra aba com sessão já aberta.
await admin.updateUser(user.id, { role: 'user', courses: ['ai901'], expiresOn: '2026-10-15' });
assert.equal(reader.canAccessCourse('tenable'), false);
assert.equal(reader.canAccessCourse('ai901'), true);
instant = '2026-10-16T02:59:59Z'; // Ainda é dia 15 em Brasília.
assert.equal(reader.currentUser().expired, false);
instant = '2026-10-16T03:00:00Z';
assert.equal(reader.currentUser(), null);
assert.equal(reader.canAccessCourse('ai901'), false);
await assert.rejects(() => reader.login('aluno.teste', 'senhaTeste123'), /expirou/);
assert.equal(admin.auditLog().length, 2);
await admin.updateUser(user.id, { role: 'user', courses: [], expiresOn: null, password: 'novaSenha456' });
assert.equal(reader.currentUser(), null); // A senha alterada revoga a sessão anterior.
await assert.rejects(() => reader.login('aluno.teste', 'senhaTeste123'), /inválidos/);
await reader.login('aluno.teste', 'novaSenha456');
assert.equal(reader.canAccessCourse('ai901'), false);
assert.equal(reader.canAccessCourse('tenable'), false);
assert.equal(admin.auditLog().length, 3);
const snapshot = storage.get(admin.storageKey);
assert.ok(!snapshot.includes('senhaTeste123') && !snapshot.includes('novaSenha456') && !snapshot.includes('domcord'));

// Incluir simultaneamente a mesma conta não cria duplicatas.
const concurrent = await Promise.allSettled([1, 2].map(() => admin.createUser({ username: 'duplicado', password: 'senhaTeste789', role: 'user', courses: [] })));
assert.equal(concurrent.filter(result => result.status === 'fulfilled').length, 1);
await admin.deleteUser(user.id);
assert.equal(reader.currentUser(), null);
assert.equal(admin.auditLog().filter(entry => entry.username === 'aluno.teste').length, 2);
await assert.rejects(() => reader.login('aluno.teste', 'novaSenha456'), /inválidos/);
const replacement = await admin.createUser({ username: 'aluno.teste', password: 'outraSenha789', role: 'user', courses: ['itil'] });
assert.notEqual(replacement.id, user.id);
assert.equal(reader.currentUser(), null);

// Recarregar não duplica auditoria nem recria contas removidas.
await admin.initialize();
assert.equal(admin.auditLog().length, 3);
await admin.updateUser('admin', { role: 'admin', courses: [], expiresOn: null, password: 'adminNova123' });
assert.equal(admin.currentUser().role, 'admin');
assert.equal(admin.currentUser().courses.length, 3);
admin.logout();
assert.equal(admin.currentUser(), null);
await admin.login('admin', 'adminNova123');
assert.equal(admin.auditLog().length, 4);

const damaged = new Map([[admin.storageKey, '{broken']]);
const brokenClient = createClient(damaged).accounts;
await assert.rejects(() => brokenClient.initialize(), /ler os cadastros/);
assert.equal(damaged.get(admin.storageKey), '{broken');

// Integração com o motor: um aluno só vê e inicia os cursos liberados.
const nodes = new Map();
const node = selector => {
  if (!nodes.has(selector)) nodes.set(selector, { innerHTML: '', classList: { add() {}, remove() {} }, style: {}, addEventListener() {}, querySelector() { return null; } });
  return nodes.get(selector);
};
await reader.login('aluno.teste', 'outraSenha789');
const context = readerClient.context;
Object.assign(context, { document: { querySelector: node, documentElement: { style: {} } }, window: { scrollY: 0, scrollTo() {}, addEventListener() {} },
  requestAnimationFrame: callback => callback(),
  AuthGate: { initialize() {}, isAuthenticated: () => Boolean(reader.currentUser()), canAccessCourse: reader.canAccessCourse,
    currentUser: reader.currentUser, progressKey: reader.progressKey, isAdministrator: () => reader.currentUser()?.role === 'admin' },
  SlidesModule: { total: 233 }, VideosModule: { total: 32, countFor: () => 1 }, TenableStudy: { uniqueCount: () => 260 }
});
for (const file of ['questions.js', 'simulado3.js', 'ai901.js', 'app.js']) vm.runInContext(await readFile(new URL(file, root), 'utf8'), context);
const run = code => vm.runInContext(code, context);
run('home()');
assert.ok(node('#app').innerHTML.includes('data-course="itil"'));
assert.ok(!node('#app').innerHTML.includes('data-course="ai901"'));
run('beginNewQuiz(3)');
assert.equal(run('activeQuiz'), null);
run('beginNewQuiz(0); choose(activeQuiz.questions[0].a); answer()');
assert.equal(run('isCorrectAnswer(activeQuiz.questions[0], answers[0])'), true);
assert.ok(storage.has(reader.progressKey('itil-quiz-progress-v1-0')));
assert.ok(!storage.has('itil-quiz-progress-v1-0'));
console.log('Aprovado: contas iniciais, credenciais, perfis, CRUD, permissões por curso, expiração em Brasília, revogação de sessões, auditoria persistente, concorrência, recuperação sem perda e integração com simulados.');
