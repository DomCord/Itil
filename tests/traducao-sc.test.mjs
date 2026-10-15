import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {webcrypto} from 'node:crypto';
const root=new URL('../',import.meta.url);
const read=f=>readFile(new URL(f,root),'utf8');
const base='Tenable/Simulados/Security_Center/';
const storage=new Map(),nodes=new Map(),handlers=new Map();
const node=s=>{if(!nodes.has(s))nodes.set(s,{innerHTML:'',classList:{add(){},remove(){}},style:{setProperty(){}},addEventListener(t,f){handlers.set(s+':'+t,f);},querySelector(){return null;},focus(){}});return nodes.get(s);};
const scripts=[...(await read('index.html')).matchAll(/<script src="([^"]+)"/g)].map(match=>match[1].split('?')[0]).filter(file=>!['auth.js','slides.js'].includes(file));
async function load(){
 const ctx=vm.createContext({document:{querySelector:node,documentElement:{style:{}}},window:{scrollY:0,scrollTo(){},addEventListener(){}},requestAnimationFrame:f=>f(),AuthGate:{initialize(){},isAuthenticated:()=>true},SlidesModule:{total:233},crypto:webcrypto,URL,localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,String(v)),removeItem:k=>storage.delete(k)}});
 ctx.location=new URL('https://domcord.github.io/Itil/');ctx.window.location=ctx.location;
 for(const f of scripts)vm.runInContext(await read(f),ctx,{filename:f});
 return s=>vm.runInContext(s,ctx);
}
const plain=x=>JSON.parse(JSON.stringify(x));
let run=await load();
const translations=JSON.parse(await read(base+'traducoes_pt_br.json'));
const byId=new Map(translations.questions.map(q=>[q.id,q]));
const canonical=JSON.parse(await read(base+'banco_security_center_150.json')).questions;
const originals=new Map(canonical.map(q=>[q.id,q]));
assert.equal(translations.language,'pt-BR');assert.equal(byId.size,150);
assert.equal([...byId.values()].reduce((n,q)=>n+q.o.length,0),600);
const all=run('SIMULADOS'),n=all.findIndex(s=>s.id==='tenable-sc150');
assert.equal(n,19);assert.equal(run('TenableStudy.uniqueCount()'),260);
for(let i=0;i<all.length;i++){
 run(`beginNewQuiz(${i})`);
 const allowed=['tenable-complementar100','tenable-sc150'].includes(all[i].id);
 assert.equal(node('#app').innerHTML.includes('data-action="toggle-translation"'),allowed);
}
run(`beginNewQuiz(${n})`);
const layout=plain(run('activeQuiz.layout'));
const click=()=>handlers.get('#app:click')({target:{closest:()=>({disabled:false,dataset:{action:'toggle-translation'}})}});
for(let i=0;i<150;i++){
 run(`goTo(${i})`);
 const q=plain(run('activeQuiz.questions[index]')),source=originals.get(q.id),pt=byId.get(q.id);
 assert.equal(q.q,source.q);assert.equal(q.e,source.e);
 assert.equal(q.o['ABCD'.indexOf(q.a)],source.o['ABCD'.indexOf(source.a)]);
 assert.equal(q.ptBR.q,pt.q);
 assert.equal(q.ptBR.o['ABCD'.indexOf(q.a)],pt.o['ABCD'.indexOf(source.a)]);
 for(let j=0;j<4;j++)assert.equal(q.ptBR.o[j],pt.o[source.o.indexOf(q.o[j])]);
 assert.ok(node('#app').innerHTML.includes('aria-expanded="false"'));
 const before=plain(run('({answers,selections,index})'));click();
 assert.deepEqual(plain(run('({answers,selections,index})')),before);
 assert.deepEqual(plain(run('activeQuiz.layout')),layout);
 let html=node('#app').innerHTML;
 assert.ok(html.includes('aria-expanded="true"'));
 assert.ok(html.includes(run('richText')(pt.q)));
 assert.equal((html.match(/class="option-translation"/g)||[]).length,4);
 for(const option of q.ptBR.o)assert.ok(html.includes(run('richText')(option)));
 run(`choose('${q.a}')`);assert.ok(node('#app').innerHTML.includes('aria-expanded="true"'));
 run('answer()');html=node('#app').innerHTML;
 assert.ok(html.includes('feedback-correct'));
 assert.ok(html.includes('alternative-analysis" lang="en"'));
 for(const explanation of q.x)assert.ok(html.includes(run('richText')(explanation)));
 click();assert.ok(!node('#app').innerHTML.includes('class="option-translation"'));
 assert.equal(run('answers[index]'),q.a);
 if(i===0){
  run("courseHome('tenable')");run=await load();run(`resumeQuiz(${n})`);
  assert.deepEqual(plain(run('activeQuiz.layout')),layout);
  assert.equal(run('answers.filter(Boolean).length'),1);
  assert.ok(node('#app').innerHTML.includes('aria-expanded="false"'));
 }
}
run('goTo(0); toggleTranslation(); goTo(1); goTo(0)');assert.ok(node('#app').innerHTML.includes('aria-expanded="true"'));
run('result()');assert.ok(node('#app').innerHTML.includes('<strong>100%</strong>'));
assert.ok((await read('index.html')).includes("connect-src 'none'"));
assert.ok(!(await read(base+'traducoes_pt_br.js')).includes('fetch('));
console.log('Aprovado: 150 enunciados/600 alternativas PT-BR; dados ingleses íntegros; clique, seleção, correção em inglês, embaralhamento, retomada e nota 100%; botão somente nos dois bancos complementares.');
