import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {webcrypto} from 'node:crypto';

const root=new URL('../',import.meta.url);
const read=file=>readFile(new URL(file,root),'utf8');
const source=JSON.parse(await read('Tenable/Simulados/Banco_complementar/traducoes_pt_br.json'));
const translations=new Map(source.questions.map(q=>[q.id,q]));
const storage=new Map();
const nodes=new Map();
const handlers=new Map();
const node=selector=>{
  if(!nodes.has(selector)) nodes.set(selector,{innerHTML:'',classList:{add(){},remove(){}},style:{setProperty(){}},addEventListener(type,handler){handlers.set(selector+':'+type,handler);},querySelector(){return null;},focus(){}});
  return nodes.get(selector);
};
const scripts=[...((await read('index.html')).matchAll(/<script src="([^"]+)"/g))].map(m=>m[1].split('?')[0]).filter(file=>!['auth.js','slides.js'].includes(file));
async function load(){
  const context=vm.createContext({document:{querySelector:node,documentElement:{style:{}}},window:{scrollY:0,scrollTo(){},addEventListener(){}},requestAnimationFrame:f=>f(),AuthGate:{initialize(){},isAuthenticated:()=>true},SlidesModule:{total:233},crypto:webcrypto,URL,localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,String(v)),removeItem:k=>storage.delete(k)}});
  for(const file of scripts) vm.runInContext(await read(file),context,{filename:file});
  return code=>vm.runInContext(code,context);
}
const plain=value=>JSON.parse(JSON.stringify(value));
const run=await load();
const simulations=run('SIMULADOS');
const examIndex=simulations.findIndex(s=>s.id==='tenable-complementar100');
assert.equal(examIndex,18);
assert.equal(source.language,'pt-BR');
assert.equal(translations.size,100);
const originals=new Map(simulations[examIndex].questions.map(q=>[q.id,q]));
for(const [id,translation] of translations){
  assert.ok(originals.has(id));
  assert.ok(translation.q.length>20);
  assert.equal(translation.o.length,4);
  assert.ok(translation.o.every(option=>typeof option==='string'&&option.length>0));
}
for(let i=0;i<simulations.length;i++){
  if(i===examIndex||simulations[i].id==='tenable-sc150') continue;
  assert.ok(simulations[i].questions.every(q=>!q.ptBR));
  run(`beginNewQuiz(${i})`);
  assert.ok(!node('#app').innerHTML.includes('data-action="toggle-translation"'));
  const answers=plain(run('answers'));
  run('toggleTranslation()');
  assert.deepEqual(plain(run('answers')),answers);
}
run(`beginNewQuiz(${examIndex})`);
const layout=plain(run('activeQuiz.layout'));
const clickTranslation=()=>handlers.get('#app:click')({target:{closest:()=>({disabled:false,dataset:{action:'toggle-translation'}})}});
const encoded=value=>String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
for(let i=0;i<100;i++){
  run(`goTo(${i})`);
  const q=plain(run('activeQuiz.questions[index]'));
  const original=originals.get(q.id);
  const translation=translations.get(q.id);
  assert.equal(q.q,original.q);
  assert.equal(q.ptBR.q,translation.q);
  assert.equal(q.o['ABCD'.indexOf(q.a)],original.o['ABCD'.indexOf(original.a)]);
  assert.equal(q.ptBR.o['ABCD'.indexOf(q.a)],translation.o['ABCD'.indexOf(original.a)]);
  q.o.forEach((english,j)=>assert.equal(q.ptBR.o[j],translation.o[original.o.indexOf(english)]));
  assert.ok(node('#app').innerHTML.includes('aria-expanded="false"'));
  assert.ok(!node('#app').innerHTML.includes('class="option-translation"'));
  const before=plain(run('({answers,selections,index})'));
  clickTranslation();
  assert.deepEqual(plain(run('({answers,selections,index})')),before);
  assert.deepEqual(plain(run('activeQuiz.layout')),layout);
  let html=node('#app').innerHTML;
  assert.ok(html.includes('aria-expanded="true"'));
  assert.ok(html.includes('Ocultar tradução'));
  assert.ok(html.includes(encoded(translation.q)));
  assert.equal((html.match(/class="option-translation"/g)||[]).length,4);
  for(const text of q.ptBR.o) assert.ok(html.includes(encoded(text)));
  run(`choose('${q.a}')`);
  assert.ok(node('#app').innerHTML.includes('aria-expanded="true"'));
  run('answer()');
  html=node('#app').innerHTML;
  assert.ok(html.includes('feedback-correct'));
  assert.ok(html.includes('alternative-analysis" lang="en"'));
  for(const explanation of q.x) assert.ok(html.includes(encoded(explanation)));
  const confirmed=plain(run('answers'));
  clickTranslation();
  assert.ok(node('#app').innerHTML.includes('aria-expanded="false"'));
  assert.ok(!node('#app').innerHTML.includes('class="option-translation"'));
  assert.deepEqual(plain(run('answers')),confirmed);
}
run('goTo(0); toggleTranslation(); goTo(1); goTo(0)');
assert.ok(node('#app').innerHTML.includes('aria-expanded="true"'));
// A retomada restaura respostas e ordem do teste; a tradução volta recolhida.
const answered=plain(run('answers'));
run("courseHome('tenable')");
const reloaded=await load();
reloaded(`resumeQuiz(${examIndex})`);
assert.deepEqual(plain(reloaded('answers')),answered);
assert.deepEqual(plain(reloaded('activeQuiz.layout')),layout);
assert.ok(node('#app').innerHTML.includes('aria-expanded="false"'));
const resumedQuestion=plain(reloaded('activeQuiz.questions[index]'));
const original=originals.get(resumedQuestion.id);
assert.equal(resumedQuestion.ptBR.o['ABCD'.indexOf(resumedQuestion.a)],translations.get(resumedQuestion.id).o['ABCD'.indexOf(original.a)]);
reloaded('result()');
assert.ok(node('#app').innerHTML.includes('<strong>100%</strong>'));
assert.ok(!node('#app').innerHTML.includes('data-action="toggle-translation"'));
assert.ok((await read('index.html')).includes("connect-src 'none'"));
console.log('Aprovado: 100 traduções/400 alternativas; ordem e gabaritos; abrir/ocultar pelo clique; escolha e correção em inglês; escopo exclusivo; retomada e resultado preservados.');
