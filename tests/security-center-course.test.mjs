import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import vm from 'node:vm';
import {webcrypto} from 'node:crypto';
import {TextEncoder} from 'node:util';
const root=new URL('../',import.meta.url),read=f=>readFile(new URL(f,root),'utf8');
const loader=await read('Tenable/carregar_sc_pessoal.js');
for(const address of ['file:///study/index.html','http://localhost:8770/','http://127.0.0.1:8770/','http://[::1]:8770/','https://domcord.github.io/Itil/','https://localhost.example.org/']){
 const written=[];
 vm.runInNewContext(loader,{location:new URL(address),document:{write:html=>written.push(html)}});
 const localAddress=address.startsWith('file:')||['localhost','127.0.0.1','[::1]'].includes(new URL(address).hostname);
 assert.equal(written.length,localAddress?1:0,address);
 if(localAddress){assert.ok(written[0].includes('integracao_pessoal.js'));assert.ok(written[0].includes('traducoes_pt_br.js'));}
}
assert.doesNotThrow(()=>vm.runInNewContext(loader,{document:{}}));
assert.doesNotThrow(()=>vm.runInNewContext(loader,{location:new URL('http://localhost/'),document:{}}));
const local=new Map(),session=new Map();
const storage=map=>({getItem:k=>map.get(k)??null,setItem:(k,v)=>map.set(k,String(v)),removeItem:k=>map.delete(k)});
const ctx=vm.createContext({crypto:webcrypto,TextEncoder,localStorage:storage(local),sessionStorage:storage(session)});
vm.runInContext(await read('accounts.js'),ctx);
const accounts=vm.runInContext('PortalAccounts',ctx);
await accounts.initialize();await accounts.login('admin','domcord');
assert.equal(accounts.canAccessCourse('tenable-sc'),true);
const user=await accounts.createUser({username:'qa.sc-menu',password:'TesteCurso123',role:'user',courses:['tenable'],expiresOn:null});
const adminSession=session.get('study-session-v1');
await accounts.login('qa.sc-menu','TesteCurso123');
assert.equal(accounts.canAccessCourse('tenable'),true);assert.equal(accounts.canAccessCourse('tenable-sc'),false);
const userSession=session.get('study-session-v1');
const nodes=new Map(),events=new Map();
const node=s=>{if(!nodes.has(s))nodes.set(s,{innerHTML:'',elements:{role:{value:'user'}},style:{setProperty(){}},classList:{add(){},remove(){}},addEventListener(t,f){events.set(s+':'+t,f);},querySelector:node,querySelectorAll:()=>[],scrollIntoView(){},focus(){}});return nodes.get(s);};
Object.assign(ctx,{document:{querySelector:node,documentElement:{style:{}}},window:{scrollY:0,scrollTo(){},addEventListener(){}},requestAnimationFrame:f=>f(),URL,
 AuthGate:{initialize(){},isAuthenticated:()=>Boolean(accounts.currentUser()),canAccessCourse:accounts.canAccessCourse,currentUser:accounts.currentUser,progressKey:accounts.progressKey,isAdministrator:()=>accounts.currentUser()?.role==='admin'},SlidesModule:{total:233}});
const files=['questions.js','explanations.js','simulado3.js','ai901.js','ai901-explanations.js','Tenable/tenable.js','Tenable/explicacoes_alternativas.js','Tenable/Simulados/Banco_complementar/integracao.js','Tenable/Simulados/Banco_complementar/explicacoes_alternativas.js','Tenable/Simulados/Banco_complementar/traducoes_pt_br.js','videos.js'];
for(const file of files)vm.runInContext(await read(file),ctx,{filename:file});
const personal=await access(new URL('Tenable/Simulados/Security_Center/integracao_pessoal.js',root)).then(()=>true,()=>false);
if(personal)for(const f of ['integracao_pessoal.js','traducoes_pt_br.js'])vm.runInContext(await read('Tenable/Simulados/Security_Center/'+f),ctx);
vm.runInContext(await read('admin.js'),ctx);const adminClick=events.get('#app:click');
vm.runInContext(await read('app.js'),ctx);
const run=code=>vm.runInContext(code,ctx),plain=v=>JSON.parse(JSON.stringify(v));
run('home()');assert.ok(node('#app').innerHTML.includes('data-course="tenable"'));assert.ok(!node('#app').innerHTML.includes('data-course="tenable-sc"'));
if(personal){run('beginNewQuiz(19)');assert.equal(run('activeQuiz'),null);}
session.set('study-session-v1',adminSession);
await accounts.updateUser(user.id,{role:'user',courses:['tenable-sc'],expiresOn:null});
assert.deepEqual(plain(accounts.listUsers().find(u=>u.id===user.id).courses),['tenable-sc']);
run('AdminModule.open()');let html=node('#app').innerHTML;
assert.ok(html.includes('value="tenable-sc"'));assert.ok(html.includes('Tenable Security Center Specialist'));assert.ok(html.includes('Tenable Vulnerability Management Specialist'));
await adminClick({target:{closest:()=>({disabled:false,dataset:{adminAction:'edit',id:user.id}})}});
assert.match(node('#app').innerHTML,/value="tenable-sc" checked/);
session.set('study-session-v1',userSession);
assert.equal(accounts.canAccessCourse('tenable'),false);assert.equal(accounts.canAccessCourse('tenable-sc'),true);
run('home()');assert.ok(!node('#app').innerHTML.includes('data-course="tenable"'));
assert.equal(node('#app').innerHTML.includes('data-course="tenable-sc"'),personal);
run('beginNewQuiz(6)');assert.equal(run('activeQuiz'),null);
if(personal){
 assert.equal(run('courseSimulations("tenable").length'),13);assert.equal(run('TenableStudy.uniqueCount()'),260);
 assert.equal(run('courseSimulations("tenable-sc").length'),1);
 assert.equal(run('courseFor(19)'),'tenable-sc');assert.equal(run('SIMULADOS[19].questions.length'),150);
 run('courseHome("tenable-sc")');assert.ok(node('#app').innerHTML.includes('Tenable Security Center Specialist'));
 run('beginNewQuiz(19); toggleTranslation(); choose(activeQuiz.questions[0].a); answer()');
 assert.ok(node('#app').innerHTML.includes('feedback-correct'));assert.ok(node('#app').innerHTML.includes('alternative-analysis" lang="en"'));
 assert.ok(node('#app').innerHTML.includes('class="option-translation"'));
 const layout=plain(run('activeQuiz.layout'));run('courseHome("tenable-sc"); resumeQuiz(19)');
 assert.deepEqual(plain(run('activeQuiz.layout')),layout);assert.equal(run('answers.filter(Boolean).length'),1);
 session.set('study-session-v1',adminSession);run('courseHome("tenable")');assert.ok(!node('#app').innerHTML.includes('Security Center Specialist — 150 questions'));
 run('home()');assert.ok(node('#app').innerHTML.includes('Tenable Vulnerability Management Specialist'));assert.ok(node('#app').innerHTML.includes('data-course="tenable-sc"'));
}
// A publicação não inclui o banco pessoal; uma conta somente SC recebe orientação.
run('SIMULADOS.splice(19)');
session.set('study-session-v1',userSession);run('home()');
assert.ok(!node('#app').innerHTML.includes('data-course="tenable-sc"'));
assert.ok(node('#app').innerHTML.includes('disponível somente no ambiente local de estudo'));
assert.ok(!node('#app').innerHTML.includes('Nenhum curso foi liberado'));
session.set('study-session-v1',adminSession);run('home()');
assert.equal((node('#app').innerHTML.match(/class="sim-card course-card"/g)||[]).length,3);
assert.ok(!node('#app').innerHTML.includes('disponível somente no ambiente local de estudo'));
await accounts.updateUser(user.id,{role:'user',courses:[],expiresOn:null});
session.set('study-session-v1',userSession);run('home()');
assert.ok(node('#app').innerHTML.includes('Nenhum curso foi liberado'));
console.log('Aprovado: cursos separados, nomes completos, permissões, carregamento apenas local, publicação sem banco SC e orientação para contas sem curso disponível.'+(personal?' Banco pessoal: 150 questões, PT-BR, correção em inglês e retomada.':''));
