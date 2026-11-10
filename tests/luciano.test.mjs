import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { webcrypto } from 'node:crypto';
import { TextEncoder } from 'node:util';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const source = await readFile(new URL('accounts.js', root), 'utf8');

function client(storage = new Map()) {
  const session = new Map();
  const context = vm.createContext({
    crypto: webcrypto, TextEncoder, URL, Date,
    localStorage: { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) },
    sessionStorage: { getItem: key => session.get(key) ?? null, setItem: (key, value) => session.set(key, value), removeItem: key => session.delete(key) }
  });
  vm.runInContext(source, context);
  return { accounts: vm.runInContext('PortalAccounts', context), context, storage, session };
}

const plain = value => JSON.parse(JSON.stringify(value));

// 1. Instalação inicial limpa
const fresh = client();
const accounts = fresh.accounts;
await accounts.initialize();
const store = JSON.parse(fresh.storage.get(accounts.storageKey));

assert.ok(store.users.some(user => user.username === 'luciano'), 'Usuário luciano ausente no cadastro inicial');
const lucianoUser = store.users.find(user => user.username === 'luciano');
assert.equal(lucianoUser.role, 'user');
assert.deepEqual(plain(lucianoUser.courses), ['itil']);
assert.equal(lucianoUser.expiresOn, null);

const hasleaneUser = store.users.find(user => user.username === 'hasleane');
assert.deepEqual(plain(hasleaneUser.courses), ['itil'], 'Hasleane deve ter permissão mantida apenas em itil');

// 2. Login e permissões de Luciano
const lucianoAuth = await accounts.login('luciano', 'luciano');
assert.equal(lucianoAuth.username, 'luciano');
assert.equal(lucianoAuth.role, 'user');
assert.deepEqual(plain(lucianoAuth.courses), ['itil']);
assert.equal(accounts.canAccessCourse('itil'), true);
assert.equal(accounts.canAccessCourse('ai901'), false);
assert.equal(accounts.canAccessCourse('tenable'), false);
assert.equal(accounts.canAccessCourse('tenable-sc'), false);
assert.throws(() => accounts.listUsers(), /administradores/);
assert.throws(() => accounts.auditLog(), /administradores/);
assert.match(accounts.progressKey('itil-quiz-progress-v1-0'), /^study-user-luciano:/);

// 3. Login e permissões de Hasleane
accounts.logout();
const hasleaneAuth = await accounts.login('hasleane', 'rafael');
assert.equal(hasleaneAuth.username, 'hasleane');
assert.deepEqual(plain(hasleaneAuth.courses), ['itil']);
assert.equal(accounts.canAccessCourse('itil'), true);
assert.equal(accounts.canAccessCourse('ai901'), false);
assert.equal(accounts.canAccessCourse('tenable'), false);
assert.equal(accounts.canAccessCourse('tenable-sc'), false);
assert.equal(accounts.progressKey('itil-quiz-progress-v1-0'), 'itil-quiz-progress-v1-0', 'Hasleane mantém chave histórica');

// 4. Migração em instalação existente com Hasleane tendo cursos anteriores
const legacyStore = {
  version: 1,
  appliedMigrations: ['william-tenable-v1', 'william-security-center-v1'],
  users: [
    { id: 'admin', username: 'admin', role: 'admin', courses: ['itil', 'ai901', 'tenable', 'tenable-sc'], expiresOn: null, authVersion: 1, password: store.users[0].password },
    { id: 'hasleane', username: 'hasleane', role: 'user', courses: ['itil', 'ai901', 'tenable', 'tenable-sc'], expiresOn: null, authVersion: 1, password: store.users[1].password },
    { id: 'william', username: 'william', role: 'user', courses: ['tenable', 'tenable-sc'], expiresOn: null, authVersion: 1, password: store.users[2].password }
  ],
  audit: []
};

const migratedClient = client(new Map([[accounts.storageKey, JSON.stringify(legacyStore)]]));
await migratedClient.accounts.initialize();
const afterMigration = JSON.parse(migratedClient.storage.get(accounts.storageKey));

assert.ok(afterMigration.appliedMigrations.includes('luciano-itil-v1'), 'Migração luciano-itil-v1 não registrada');
assert.ok(afterMigration.users.some(u => u.username === 'luciano'), 'Luciano não foi adicionado na migração');
const migratedHasleane = afterMigration.users.find(u => u.username === 'hasleane');
assert.deepEqual(plain(migratedHasleane.courses), ['itil'], 'Migração não restringiu Hasleane apenas a itil');

console.log('Aprovado: usuário Luciano criado com senha "luciano" e acesso exclusivo ao ITIL v5; Hasleane mantida apenas em ITIL v5.');

