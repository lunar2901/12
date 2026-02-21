// adverbs.js - Focus mode with level dropdowns + save

const DB = { a1: window.adverbsA1, a2: window.adverbsA2, b1: window.adverbsB1, b2: window.adverbsB2, c1: window.adverbsC1 };
const levelBtns = document.querySelectorAll('.level-btn');
let currentLevel = 'a1'; let focusApi = null;
const { getSaved, setSaved, setSaveBtnState, initSearchModal, registerPageItems, registerSearchItems } = window.SharedApp;

function getLabel(a) { return a.base || a.word || '—'; }

function buildPageItems(level) {
  return (DB[level]||[]).map((a,i)=>({ id:`adverbs:${level}:${getLabel(a)}`, label:getLabel(a), translation:(a.translations||[])[0]||'', index:i, level, category:'Adverbs', url:'adverbs.html' }));
}
function buildAllPageItems() { return Object.keys(DB).flatMap(l=>buildPageItems(l)); }
function buildCrossPageItems() {
  const vDB={a1:window.verbsA1,a2:window.verbsA2,b1:window.verbsB1,b2:window.verbsB2,c1:window.verbsC1};
  const nDB={a1:window.nounsA1,a2:window.nounsA2,b1:window.nounsB1,b2:window.nounsB2,c1:window.nounsC1};
  const aDB={a1:window.adjectivesA1,a2:window.adjectivesA2,b1:window.adjectivesB1,b2:window.adjectivesB2,c1:window.adjectivesC1};
  return [
    ...Object.keys(vDB).flatMap(l=>(vDB[l]||[]).map((v,i)=>({id:`verbs:${l}:${v.base||''}`,label:v.base||'—',translation:((v.translations||[])[0])||'',index:i,level:l,category:'Verbs',url:'verbs.html'}))),
    ...Object.keys(nDB).flatMap(l=>(nDB[l]||[]).map((n,i)=>({id:`nouns:${l}:${n.base||''}`,label:n.base||'—',translation:(n.translations||[])[0]||'',index:i,level:l,category:'Nouns',url:'nouns.html'}))),
    ...Object.keys(aDB).flatMap(l=>(aDB[l]||[]).map((a,i)=>({id:`adjectives:${l}:${a.base||''}`,label:a.base||'—',translation:(a.translations||[])[0]||'',index:i,level:l,category:'Adjectives',url:'adjectives.html'}))),
  ];
}

renderCurrent(); updateCounts(); buildAllDropdowns();
registerPageItems(buildAllPageItems()); registerSearchItems(buildCrossPageItems());

window.SharedApp.handleJumpHash(()=>currentLevel,(level,index)=>{
  const btn=document.querySelector(`.level-btn[data-level="${level}"]`);
  if(btn){levelBtns.forEach(b=>b.classList.remove('active'));btn.classList.add('active');}
  currentLevel=level;renderCurrent();setTimeout(()=>focusApi?.jumpTo(index),80);
},()=>focusApi);

initSearchModal((item)=>{
  if(item.level!==currentLevel){
    const btn=document.querySelector(`.level-btn[data-level="${item.level}"]`);
    if(btn){levelBtns.forEach(b=>b.classList.remove('active'));btn.classList.add('active');}
    currentLevel=item.level;renderCurrent();setTimeout(()=>focusApi?.jumpTo(item.index),80);
  } else { focusApi?.jumpTo(item.index); }
});

levelBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    const level=btn.dataset.level;
    if(!btn.classList.contains('active')){levelBtns.forEach(b=>b.classList.remove('active'));btn.classList.add('active');currentLevel=level;renderCurrent();}
    const items=buildPageItems(level);
    window.SharedApp.openLevelSheet(btn,items,(idx)=>{if(level!==currentLevel){currentLevel=level;renderCurrent();}setTimeout(()=>focusApi?.jumpTo(idx),40);},`${level.toUpperCase()} — ${items.length} adverbs`);
  });
});

function renderCurrent() {
  const root=document.getElementById('study-root'); if(!root) return;
  root.classList.add('study-root');
  const list=DB[currentLevel]||[];
  const countEl=document.getElementById('adverb-count');
  if(countEl) countEl.textContent=`${list.length} ${list.length===1?'adverb':'adverbs'}`;
  if(!list.length){root.innerHTML='<div class="no-results"><p>No adverbs in this level yet.</p></div>';return;}
  focusApi=window.initFocusMode({rootId:'study-root',items:list,level:currentLevel,storageKey:'adverbs',
    getId:(a)=>`adverbs:${currentLevel}:${getLabel(a)}`, getLabel:(a)=>getLabel(a), renderCard:(a)=>createCard(a)});
  wireDrawerReview(focusApi);
  if(focusApi) focusApi.onChange=()=>wireDrawerReview(focusApi);
}

function buildAllDropdowns() {
  Object.entries(DB).forEach(([level,items])=>{
    const dd=document.getElementById(`dropdown-${level}`); if(!dd||!items?.length) return;
    const frag=document.createDocumentFragment();
    items.forEach((adv,i)=>{
      const btn=document.createElement('button'); btn.type='button'; btn.className='level-dropdown-item';
      btn.innerHTML=`${esc(getLabel(adv))}<span class="ddi-translation">${esc((adv.translations||[])[0]||'')}</span>`;
      btn.addEventListener('click',(e)=>{
        e.stopPropagation();
        if(level!==currentLevel){const lb=document.querySelector(`.level-btn[data-level="${level}"]`);if(lb){levelBtns.forEach(b=>b.classList.remove('active'));lb.classList.add('active');currentLevel=level;renderCurrent();}}
        setTimeout(()=>focusApi?.jumpTo(i),30);
      });
      frag.appendChild(btn);
    });
    dd.appendChild(frag);
  });
}

function createCard(adv) {
  const card = document.createElement('div'); card.className='verb-card';
  const label  = getLabel(adv);
  const saveId = `adverbs:${currentLevel}:${label}`;
  const trans  = (adv.translations||[]).join(', ')||'—';
  const category = adv.category || adv.type || '';
  const subcategory = adv.subcategory || '';
  const register = adv.register || '';

  const positionRules    = Array.isArray(adv.position_rules)    ? adv.position_rules    : [];
  const examplePositions = Array.isArray(adv.example_positions) ? adv.example_positions : [];

  const synonyms       = Array.isArray(adv.synonyms)       ? adv.synonyms       : [];
  const antonym        = adv.antonym || '';
  const tip            = adv.tip || '';
  const commonMistakes = Array.isArray(adv.common_mistakes) ? adv.common_mistakes : [];

  const derivedFrom = adv.derived_from || null;

  let derivedHtml = '';
  if (derivedFrom) {
    const dLevel = (derivedFrom.level||'a1').toLowerCase();
    const dBase  = (derivedFrom.base||'');
    const dArr   = (DB[dLevel]||[]);
    const dIdx   = dArr.findIndex(x=>(x.base||x.word||x.noun||'')===dBase);
    const dHref  = dIdx>=0 ? 'adverbs.html#jump:'+dLevel+':'+dIdx : 'adverbs.html';
    derivedHtml = `
    <div class="verb-info" style="background:rgba(80,120,255,.07);border-radius:10px;padding:6px 10px;margin-top:8px">
      <span class="label">Base word:</span>
      <a href="${dHref}" class="value" style="color:#3a60d4;text-decoration:none;font-weight:600">
        ${esc(dBase)} <span style="opacity:.5;font-size:11px;">[${(derivedFrom.level||'').toUpperCase()}]</span>
        ${derivedFrom.type ? `<span style="opacity:.4;font-size:11px;"> · ${esc(derivedFrom.type)}</span>` : ''} →
      </a>
    </div>`;
  }

  const metaHtml = (category || subcategory || register) ? `
    <div class="pill-row" style="margin-top:8px">
      ${category    ? `<span class="meta-chip">${esc(category)}</span>`    : ''}
      ${subcategory ? `<span class="meta-chip">${esc(subcategory)}</span>` : ''}
      ${register    ? `<span class="meta-chip">${esc(register)}</span>`    : ''}
    </div>` : '';

  const synonymsHtml = synonyms.length ? `
    <div class="verb-info" style="margin-top:8px;flex-wrap:wrap;gap:6px">
      <span class="label">Synonyms:</span>
      <span class="value">${synonyms.map(s=>`<span class="meta-chip">${esc(s)}</span>`).join(' ')}</span>
    </div>` : '';

  const antonymHtml = antonym ? `<div class="verb-info" style="margin-top:4px"><span class="label">Antonym:</span><span class="value">${esc(antonym)}</span></div>` : '';

  const posRulesHtml = positionRules.length ? `
    <div class="section-title" style="margin-top:12px">Position rules</div>
    ${positionRules.map(r=>`<div class="verb-info" style="margin-top:4px"><span style="font-size:13px">${esc(r)}</span></div>`).join('')}` : '';

  const posExHtml = examplePositions.length ? `
    <div class="section-title" style="margin-top:10px">Position examples</div>
    <ul class="variety-examples">${examplePositions.map(ex=>`<li>${esc(ex)}</li>`).join('')}</ul>` : '';

  const examplesHtml = (adv.examples||[]).length ? `
    <div class="section-title" style="margin-top:12px">Examples</div>
    <ul class="variety-examples">${(adv.examples||[]).map(ex=>`<li>${esc(ex)}</li>`).join('')}</ul>` : '';

  const tipHtml = tip ? `
    <div class="verb-info" style="margin-top:8px;background:rgba(255,200,0,.1);border-radius:10px;padding:8px 10px;flex-direction:column;gap:4px">
      <span class="label">💡 Tip</span><span style="font-size:13px">${esc(tip)}</span>
    </div>` : '';

  const mistakesHtml = commonMistakes.length ? `
    <div class="verb-info" style="margin-top:8px;background:rgba(255,60,60,.07);border-radius:10px;padding:8px 10px;flex-direction:column;gap:4px">
      <span class="label">⚠️ Common mistakes</span>
      ${commonMistakes.map(m=>`<span style="font-size:12px">${esc(m)}</span>`).join('')}
    </div>` : '';

  card.innerHTML = `
    <div class="verb-header">
      <div>
        <div class="verb-base">${esc(label)}</div>
      </div>
      <button class="save-btn" type="button" data-save-id="${esc(saveId)}" data-save-label="${esc(label)}" data-save-trans="${esc((adv.translations||[])[0]||'')}" data-save-url="adverbs.html" aria-label="Save">♡</button>
    </div>
    <div class="verb-info"><span class="label">Translation:</span><span class="value">${esc(trans)}</span></div>
    ${derivedHtml}${metaHtml}${synonymsHtml}${antonymHtml}${posRulesHtml}${posExHtml}${examplesHtml}${tipHtml}${mistakesHtml}
  `;

  const btn=card.querySelector('.save-btn');
  if(btn){
    setSaveBtnState(btn,getSaved().has(saveId));
    btn.addEventListener('click',()=>{
      const s=getSaved();const m=window.SharedApp.getMeta();
      if(s.has(saveId)){s.delete(saveId);delete m[saveId];}else{s.add(saveId);m[saveId]={label,translation:(adv.translations||[])[0]||'',url:'adverbs.html'};}
      setSaved(s);window.SharedApp.setMeta(m);setSaveBtnState(btn,s.has(saveId));
    });
  }
  return card;
}

function wireDrawerReview(api) {
  if(!api) return; const st=api.getState?.(); if(!st) return;
  const lh=document.getElementById('drawerLearnedList'); const uh=document.getElementById('drawerUnlearnedList');
  if(lh) lh.innerHTML=st.learned?.length?st.learned.map(x=>`<button class="drawer-item" data-jump="${x.i}">${esc(x.label)}</button>`).join(''):'<div class="drawer-empty">No learned words yet.</div>';
  if(uh) uh.innerHTML=st.unlearned?.length?st.unlearned.map(x=>`<button class="drawer-item" data-jump="${x.i}">${esc(x.label)}</button>`).join(''):'<div class="drawer-empty">All learned 🎉</div>';
  document.querySelectorAll('[data-jump]').forEach(b=>{b.onclick=()=>api.jumpTo(parseInt(b.dataset.jump,10));});
  const ml=document.getElementById('btnMarkLearned'); const mu=document.getElementById('btnMarkUnlearned');
  if(ml) ml.onclick=()=>{api.setLearned?.(true);wireDrawerReview(api);}; if(mu) mu.onclick=()=>{api.setLearned?.(false);wireDrawerReview(api);};
}
function updateCounts() { Object.keys(DB).forEach(level=>{const badge=document.getElementById(`count-${level}`);if(badge)badge.textContent=(DB[level]||[]).length;}); }
function esc(s){return String(s??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');}
