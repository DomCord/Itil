import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import vm from 'node:vm';
import {webcrypto} from 'node:crypto';
const root=new URL('../',import.meta.url);
const read=file=>readFile(new URL(file,root),'utf8');
const storage=new Map();
const nodes=new Map();
const node=selector=>{
  if(!nodes.has(selector)) nodes.set(selector,{innerHTML:'',classList:{add(){},remove(){}},style:{setProperty(){}},addEventListener(){},querySelector(){return null;}});
  return nodes.get(selector);
};
const createContext=()=>vm.createContext({document:{querySelector:node,documentElement:{style:{}}},window:{scrollY:0,scrollTo(){},addEventListener(){}},requestAnimationFrame:f=>f(),AuthGate:{initialize(){},isAuthenticated:()=>true},SlidesModule:{total:233},crypto:webcrypto,URL,localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,String(v)),removeItem:k=>storage.delete(k)}});
const siteHTML=await read('index.html');
const siteScripts=[...siteHTML.matchAll(/<script src="([^"]+)"/g)].map(match=>match[1].split('?')[0]);
const integration='Tenable/Simulados/Banco_complementar/integracao.js';
const rationales='Tenable/Simulados/Banco_complementar/explicacoes_alternativas.js';
assert.ok(siteScripts.includes(integration));
assert.ok(siteScripts.includes(rationales));
assert.ok(siteScripts.indexOf(integration)<siteScripts.indexOf(rationales));
assert.ok(siteScripts.indexOf(rationales)<siteScripts.indexOf('app.js'));
assert.ok(!siteHTML.includes('carregar_pessoal.js'));
const files=siteScripts.filter(file=>!['auth.js','slides.js','app.js'].includes(file));
async function load(hostname='domcord.github.io'){
  const context=createContext();
  context.location=new URL(`https://${hostname}/Itil/`);
  context.window.location=context.location;
  for(const file of [...files,'app.js']) vm.runInContext(await read(file),context,{filename:file});
  return code=>vm.runInContext(code,context);
}
const run=await load();
const plain=v=>JSON.parse(JSON.stringify(v));
const all=run('SIMULADOS');
assert.deepEqual(plain(all.slice(0,6).map(s=>s.questions.length)),[40,40,114,54,23,24]);
const tenable=all.filter(s=>s.course==='tenable');
assert.equal(tenable.length,13);
assert.equal(run('TenableStudy.uniqueCount()'),260);
const bank=JSON.parse(await read('Tenable/Simulados/banco_questoes.json'));
const extra=JSON.parse(await read('Tenable/Simulados/Banco_complementar/banco_complementar_100.json'));
bank.questions.push(...extra.questions);bank.exams.push(...extra.exams);
const byId=new Map(bank.questions.map(q=>[q.id,q]));
const union=new Map(tenable.flatMap(s=>s.questions).map(q=>[q.id,q]));
assert.equal(union.size,260);
assert.equal([...union.values()].reduce((n,q)=>n+q.x.length,0),976);
for(const q of union.values()){
  const original=byId.get(q.id);
  assert.equal(q.q,original.stem);assert.equal(q.e,original.explanation);
  assert.deepEqual(plain(q.o),original.options);assert.equal(q.a,'ABCD'[original.answer]);
  assert.equal(q.o.length,original.type==='tf'?2:4);
}
for(const exam of bank.exams){
  const sim=tenable.find(s=>s.id==='tenable-'+exam.id);
  assert.deepEqual(plain(sim.questions.map(q=>q.id)),exam.ids);
  assert.equal(sim.minutes,exam.minutes);
}
const a=tenable.find(s=>s.id==='tenable-A'),b=tenable.find(s=>s.id==='tenable-B');
assert.ok(a.questions.every(q=>!b.questions.some(other=>other.id===q.id)));
for(let sim=6;sim<all.length;sim++){
  for(let attempt=0;attempt<5;attempt++){
    const session=run(`createQuizSession(${sim})`);
    session.questions.forEach((q,i)=>{
      const original=all[sim].questions[session.layout.questionOrder[i]];
      assert.equal(q.o['ABCD'.indexOf(q.a)],original.o['ABCD'.indexOf(original.a)]);
      assert.equal(q.e,original.e);assert.equal(run('isCorrectAnswer')(q,q.a),true);
      const html=run('feedback')(q,q.a);
      assert.equal(q.x.length,q.o.length);
      assert.equal(new Set(q.x).size,q.o.length);
      assert.deepEqual(plain(q.x),plain(session.layout.optionOrders[session.layout.questionOrder[i]].map(j=>original.x[j])));
      for(const text of q.x) { assert.ok(text.length>45); assert.ok(html.includes(run('richText')(text))); assert.ok(!/\b(alternativa|correta|incorreta|porque|vulnerabilidade)\b/i.test(text)); }
      assert.equal((html.match(/class="analysis-item /g)||[]).length,q.o.length);
      assert.ok(!html.includes('conceito válido do ITIL'));
    });
  }
}
const randomIndex=all.findIndex(s=>s.random);
run(`beginNewQuiz(${randomIndex})`);
const randomIds=plain(run('SIMULADOS['+randomIndex+'].questions.map(q=>q.id)'));
assert.equal(new Set(randomIds).size,60);assert.ok(randomIds.every(id=>id.startsWith('T')));
run("choose(activeQuiz.questions[0].a); answer(); courseHome('tenable')");
const saved=JSON.parse(storage.get('itil-quiz-progress-v1-'+randomIndex));
const reload=await load();
assert.deepEqual(plain(reload('SIMULADOS['+randomIndex+'].questions.map(q=>q.id)')),randomIds);
reload(`resumeQuiz(${randomIndex})`);
assert.deepEqual(plain(reload('answers')),saved.answers);
assert.deepEqual(plain(reload('activeQuiz.layout')),saved.layout);
reload('answers=activeQuiz.questions.map(q=>q.a); result()');
assert.ok(node('#app').innerHTML.includes('<strong>100%</strong>'));
assert.ok(node('#app').innerHTML.includes('Desempenho por tópico'));
// O banco complementar mantém o mesmo índice e progresso na hospedagem pública.
const complementaryIndex=all.findIndex(s=>s.id==='tenable-complementar100');
assert.equal(complementaryIndex,18);
assert.equal(all[complementaryIndex].questions.length,100);
run(`beginNewQuiz(${complementaryIndex}); choose(activeQuiz.questions[0].a); answer(); courseHome('tenable')`);
const complementarySaved=JSON.parse(storage.get('itil-quiz-progress-v1-'+complementaryIndex));
const resumedComplementary=await load();
resumedComplementary(`resumeQuiz(${complementaryIndex})`);
assert.deepEqual(plain(resumedComplementary('answers')),complementarySaved.answers);
assert.deepEqual(plain(resumedComplementary('activeQuiz.layout')),complementarySaved.layout);
for(let i=1;i<100;i++){
  resumedComplementary(`goTo(${i})`);
  const q=resumedComplementary('activeQuiz.questions[index]');
  const selected=i%2===0?q.a:[...'ABCD'].find(letter=>letter!==q.a);
  resumedComplementary(`choose('${selected}'); answer()`);
  assert.ok(node('#app').innerHTML.includes(i%2===0?'feedback-correct':'feedback-wrong'));
  for(const text of q.x) assert.ok(node('#app').innerHTML.includes(resumedComplementary('richText')(text)));
}
resumedComplementary('result()');
assert.ok(node('#app').innerHTML.includes('<strong>50%</strong>'));
assert.equal((node('#app').innerHTML.match(/class="option-explanation"/g)||[]).length,400);
assert.equal(storage.has('itil-quiz-progress-v1-'+complementaryIndex),false);
const decks=run('TenableStudy.decks');
assert.equal(decks.length,9);assert.equal(decks.reduce((n,d)=>n+d.count,0),73);
for(const deck of decks){
  await access(new URL(deck.pptx,root));assert.equal(deck.notes.length,deck.count);
  for(let n=1;n<=deck.count;n++) await access(new URL(deck.path+'/slide-'+String(n).padStart(3,'0')+'.png',root));
}
const publicRun=await load();
assert.equal(publicRun('courseSimulations("tenable").length'),13);
assert.equal(publicRun('TenableStudy.uniqueCount()'),260);
assert.equal(publicRun('VideosModule.total'),32);
assert.equal(publicRun('VideosModule.countFor("tenable")'),1);
publicRun('home(); courseHome("tenable")');
assert.ok(node('#app').innerHTML.includes('data-action="videos"'));
assert.ok(node('#app').innerHTML.includes('1 vídeo'));
publicRun('courseHome("ai901")');
assert.ok(!node('#app').innerHTML.includes('data-action="videos"'));
publicRun('courseHome("itil")');
assert.ok(node('#app').innerHTML.includes('32 vídeos'));
publicRun('courseHome("tenable"); tenableMaterials()');
assert.ok(node('#app').innerHTML.includes('Banco complementar — 100 questions (English)'));
assert.ok(!node('#app').innerHTML.includes('cópia pessoal local'));
for(const match of node('#app').innerHTML.matchAll(/href="(Tenable\/[^"]+)"/g)) await access(new URL(match[1],root));
const localRun=await load('localhost');
assert.equal(localRun('courseSimulations("tenable").length'),13);
assert.equal(localRun('TenableStudy.uniqueCount()'),260);
const ignore=await read('.gitignore');
assert.ok(!ignore.includes('/Tenable/Simulados/Banco_complementar/'));
assert.ok(ignore.includes('/Tenable/Simulados/banco_combinado_260.json'));
console.log(`Aprovado: ${union.size} itens íntegros; ${tenable.length} simulados padrão em GitHub Pages e localhost; ordem real dos scripts; 65 embaralhamentos; 100 respostas complementares, 400 justificativas e resultado de 50%; retomada; 9 decks/73 slides; links.`);
