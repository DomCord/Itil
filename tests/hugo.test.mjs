import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { webcrypto } from 'node:crypto';
import { TextEncoder } from 'node:util';
import vm from 'node:vm';

const source = await readFile(new URL('../accounts.js', import.meta.url), 'utf8');
function client(storage = new Map()) {
  const session = new Map();
  const context = vm.createContext({ crypto: webcrypto, TextEncoder,
    localStorage: { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) },
    sessionStorage: { getItem: key => session.get(key) ?? null, setItem: (key, value) => session.set(key, value), removeItem: key => session.delete(key) }
  });
  vm.runInContext(source, context);
  const accounts = vm.runInContext('PortalAccounts', context);
  return { accounts, storage, session, store: () => JSON.parse(storage.get(accounts.storageKey)) };
}
const plain = value => JSON.parse(JSON.stringify(value));
const fresh = client();
await fresh.accounts.initialize();
const initial = fresh.store();
const hugo = initial.users.find(user => user.username === 'hugo');
const william = initial.users.find(user => user.username === 'william');
assert.equal(hugo.role, william.role);
assert.deepEqual(hugo.courses, william.courses);
assert.equal(hugo.expiresOn, null);
assert.equal(hugo.password.iterations, 210000);
assert.notEqual(hugo.password.salt, william.password.salt);
assert.notEqual(hugo.password.hash, 'hugo');
assert.equal(initial.audit.length, 0);
await assert.rejects(() => fresh.accounts.login('hugo', 'errada'), /inválidos/);
assert.equal((await fresh.accounts.login('HUGO', 'hugo')).id, 'hugo');
assert.equal(fresh.accounts.canAccessCourse('tenable'), true);
assert.equal(fresh.accounts.canAccessCourse('tenable-sc'), true);
assert.equal(fresh.accounts.canAccessCourse('itil'), false);
assert.equal(fresh.accounts.canAccessCourse('ai901'), false);
assert.throws(() => fresh.accounts.listUsers(), /administradores/);
assert.throws(() => fresh.accounts.auditLog(), /administradores/);
await assert.rejects(() => fresh.accounts.createUser({}), /administradores/);
assert.match(fresh.accounts.progressKey('quiz'), /^study-user-hugo:/);
const stable = fresh.storage.get(fresh.accounts.storageKey);
await fresh.accounts.initialize();
assert.equal(fresh.storage.get(fresh.accounts.storageKey), stable);

// Navegador anterior: inclui somente Hugo e mantém sessão, progresso e auditoria.
const legacy = plain(initial);
legacy.users = legacy.users.filter(user => user.username !== 'hugo');
legacy.appliedMigrations = legacy.appliedMigrations.filter(id => id !== 'hugo-tenable-v1');
const upgraded = client(new Map([[fresh.accounts.storageKey, JSON.stringify(legacy)],
  ['study-user-william:quiz', 'progresso existente']]));
await upgraded.accounts.login('william', 'william');
const before = upgraded.store();
const sessionBefore = upgraded.session.get('study-session-v1');
await upgraded.accounts.initialize();
assert.deepEqual(upgraded.store().users.filter(user => user.id !== 'hugo'), before.users);
assert.deepEqual(upgraded.store().audit, before.audit);
assert.equal(upgraded.session.get('study-session-v1'), sessionBefore);
assert.equal(upgraded.storage.get('study-user-william:quiz'), 'progresso existente');
assert.equal((await upgraded.accounts.login('hugo', 'hugo')).id, 'hugo');

// Cadastro preexistente não tem senha, perfil ou permissões substituídos.
const custom = plain(legacy);
const existingHugo = { ...plain(hugo), id: 'hugo-existente', courses: ['itil'], authVersion: 3,
  expiresOn: '2099-12-31', password: plain(william.password) };
custom.users.push(existingHugo);
const preserved = client(new Map([[fresh.accounts.storageKey, JSON.stringify(custom)]]));
await preserved.accounts.initialize();
assert.deepEqual(preserved.store().users, custom.users);
assert.equal((await preserved.accounts.login('hugo', 'william')).id, 'hugo-existente');

// Alterações administrativas e remoção continuam valendo após novas aberturas.
await fresh.accounts.login('admin', 'domcord');
await fresh.accounts.updateUser('hugo', { role: 'user', courses: ['ai901'], expiresOn: null });
await fresh.accounts.initialize();
assert.deepEqual(fresh.store().users.find(user => user.id === 'hugo').courses, ['ai901']);
await fresh.accounts.deleteUser('hugo');
await fresh.accounts.initialize();
assert.ok(!fresh.store().users.some(user => user.username === 'hugo'));
console.log('Aprovado: Hugo com login solicitado, permissões de William, sem administração, migração única, preservação de dados e respeito a edição/remoção.');
