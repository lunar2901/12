// nouns.js - Focus mode with level dropdowns + save

const DB = { a1: window.nounsA1, a2: window.nounsA2, b1: window.nounsB1, b2: window.nounsB2, c1: window.nounsC1 };
const levelBtns = document.querySelectorAll('.level-btn');
let currentLevel = 'a1'; let focusApi = null;
const { getSaved, setSaved, setSaveBtnState, initSearchModal, registerPageItems, registerSearchItems } = window.SharedApp;

function getArticle(n) { return n.gender==='m'?'der':n.gender==='f'?'die':n.gender==='n'?'das':''; }
function getLabel(n) {
  const base = n.base || n.word || '—';
  if (/^(der|die|das)\s/i.test(base)) return base;
  const art = getArticle(n); return art ? `${art} ${base}` : base;
}
function getBase(n) { return n.base || n.word || '—'; }

function buildPageItems(level) {
  return (DB[level]||[]).map((n,i)=>({ id:`nouns:${level}:${getBase(n)}`, label:getLabel(n), translation:(n.translations||[])[0]||'', index:i, level, category:'Nouns', url:'nouns.html' }));
}
function buildAllPageItems() { return Object.keys(DB).flatMap(l=>buildPageItems(l)); }
function buildCrossPageItems() {
  const vDB={a1:window.verbsA1,a2:window.verbsA2,b1:window.verbsB1,b2:window.verbsB2,c1:window.verbsC1};
  const aDB={a1:window.adjectivesA1,a2:window.adjectivesA2,b1:window.adjectivesB1,b2:window.adjectivesB2,c1:window.adjectivesC1};
  const advDB={a1:window.adverbsA1,a2:window.adverbsA2,b1:window.adverbsB1,b2:window.adverbsB2,c1:window.adverbsC1};
  return [
    ...Object.keys(vDB).flatMap(l=>(vDB[l]||[]).map((v,i)=>({id:`verbs:${l}:${v.base||''}`,label:v.base||'—',translation:((v.translations||[])[0])||'',index:i,level:l,category:'Verbs',url:'verbs.html'}))),
    ...Object.keys(aDB).flatMap(l=>(aDB[l]||[]).map((a,i)=>({id:`adjectives:${l}:${a.base||''}`,label:a.base||'—',translation:(a.translations||[])[0]||'',index:i,level:l,category:'Adjectives',url:'adjectives.html'}))),
    ...Object.keys(advDB).flatMap(l=>(advDB[l]||[]).map((a,i)=>({id:`adverbs:${l}:${a.base||''}`,label:a.base||'—',translation:(a.translations||[])[0]||'',index:i,level:l,category:'Adverbs',url:'adverbs.html'}))),
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
    window.SharedApp.openLevelSheet(btn,items,(idx)=>{if(level!==currentLevel){currentLevel=level;renderCurrent();}setTimeout(()=>focusApi?.jumpTo(idx),40);},`${level.toUpperCase()} — ${items.length} nouns`);
  });
});

function renderCurrent() {
  const root=document.getElementById('study-root'); if(!root) return;
  root.classList.add('study-root');
  const list=DB[currentLevel]||[];
  const countEl=document.getElementById('noun-count');
  if(countEl) countEl.textContent=`${list.length} ${list.length===1?'noun':'nouns'}`;
  if(!list.length){root.innerHTML='<div class="no-results"><p>No nouns in this level yet.</p></div>';return;}
  focusApi=window.initFocusMode({rootId:'study-root',items:list,level:currentLevel,storageKey:'nouns',
    getId:(n)=>`nouns:${currentLevel}:${getBase(n)}`, getLabel:(n)=>getLabel(n), renderCard:(n)=>createCard(n)});
  wireDrawerReview(focusApi);
  if(focusApi) focusApi.onChange=()=>wireDrawerReview(focusApi);
}

function buildAllDropdowns() {
  Object.entries(DB).forEach(([level,items])=>{
    const dd=document.getElementById(`dropdown-${level}`); if(!dd||!items?.length) return;
    const frag=document.createDocumentFragment();
    items.forEach((noun,i)=>{
      const btn=document.createElement('button'); btn.type='button'; btn.className='level-dropdown-item';
      btn.innerHTML=`${esc(getLabel(noun))}<span class="ddi-translation">${esc((noun.translations||[])[0]||'')}</span>`;
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

function createCard(noun) {
  const card = document.createElement('div'); card.className='verb-card';
  const base   = getBase(noun);
  const label  = getLabel(noun);
  const saveId = `nouns:${currentLevel}:${base}`;
  const trans  = (noun.translations||[]).join(', ')||'—';
  const art    = getArticle(noun);
  const register = noun.register||'';

  // Declension fields
  const pluralW   = noun.plural_with_article   || (noun.plural  ? 'die '+noun.plural  : '—');
  const genitiveW = noun.genitive_with_article || (noun.genitive? art+' '+base+noun.genitive : '—');
  const pluralPat = noun.plural_pattern || '';
  const nDeclension = noun.n_declension || false;

  // Full declension table
  const declTable = noun.declension || null;

  // Linked variants
  const linkedVariants = Array.isArray(noun.variants) ? noun.variants : [];
  const derivedFrom    = noun.derived_from || null;

  // C1 fields
  const collocations   = Array.isArray(noun.collocations)   ? noun.collocations   : [];
  const wordFamily     = noun.word_family     || null;
  const prepositions   = noun.prepositions_with || noun.prepositions || '';
  const tip            = noun.tip || '';
  const commonMistakes = Array.isArray(noun.common_mistakes) ? noun.common_mistakes : [];

  let derivedHtml = '';
  if (derivedFrom) {
    const dLevel = (derivedFrom.level||'a1').toLowerCase();
    const dBase  = (derivedFrom.base||'');
    const dArr   = (DB[dLevel]||[]);
    const dIdx   = dArr.findIndex(x=>(x.base||x.word||x.noun||'')===dBase);
    const dHref  = dIdx>=0 ? 'nouns.html#jump:'+dLevel+':'+dIdx : 'nouns.html';
    derivedHtml = `
    <div class="verb-info" style="background:rgba(80,120,255,.07);border-radius:10px;padding:6px 10px;margin-top:8px">
      <span class="label">Base word:</span>
      <a href="${dHref}" class="value" style="color:#3a60d4;text-decoration:none;font-weight:600">
        ${esc(dBase)} <span style="opacity:.5;font-size:11px;">[${(derivedFrom.level||'').toUpperCase()}]</span>
        ${derivedFrom.type ? `<span style="opacity:.4;font-size:11px;"> · ${esc(derivedFrom.type)}</span>` : ''} →
      </a>
    </div>`;
  }

  const formsHtml = `
    <div class="verb-forms" style="margin-top:10px">
      <div class="form-item"><span class="form-label">Singular</span><span class="form-value">${esc(label)}</span></div>
      <div class="form-item"><span class="form-label">Plural</span><span class="form-value">${esc(pluralW)}</span></div>
      <div class="form-item" style="grid-column:1/-1"><span class="form-label">Genitive</span><span class="form-value">${esc(genitiveW)}</span></div>
      ${pluralPat ? `<div class="form-item" style="grid-column:1/-1"><span class="form-label">Plural pattern</span><span class="form-value">${esc(pluralPat)}</span></div>` : ''}
      ${nDeclension ? `<div class="form-item" style="grid-column:1/-1"><span class="form-label">N-declension</span><span class="form-value">Yes — adds -n/-en in all cases except Nom.Sg.</span></div>` : ''}
    </div>`;

  // Full 4-case declension table
  const declFullHtml = declTable ? (()=>{
    const cases=['nominative','accusative','dative','genitive'];
    const articles=['singular','plural'];
    const rows=cases.map(c=>{
      const row=declTable[c]||{};
      return `<tr><td style="font-weight:800;padding:4px 8px;opacity:.7;font-size:11px">${c.slice(0,3).toUpperCase()}</td>
        ${articles.map(g=>`<td style="padding:4px 8px;font-size:12px">${esc(row[g]||'—')}</td>`).join('')}</tr>`;
    }).join('');
    return `<div class="section-title" style="margin-top:12px">Declension table</div>
      <div style="overflow-x:auto;margin-top:4px">
        <table style="border-collapse:collapse;width:100%;font-size:12px">
          <tr style="opacity:.5;font-size:11px">${['','Singular','Plural'].map(h=>`<th style="padding:4px 8px;text-align:left">${h}</th>`).join('')}</tr>
          ${rows}
        </table>
      </div>`;
  })() : '';

  const prepsHtml = prepositions ? `<div class="verb-info" style="margin-top:6px"><span class="label">Prepositions:</span><span class="value">${esc(prepositions)}</span></div>` : '';

  const collocHtml = collocations.length ? `
    <div class="section-title" style="margin-top:12px">Collocations</div>
    <div class="pill-row">${collocations.map(c=>`<span class="meta-chip">${esc(c)}</span>`).join('')}</div>` : '';

  const wordFamilyHtml = wordFamily ? `
    <div class="verb-info" style="flex-wrap:wrap;gap:6px;margin-top:8px">
      <span class="label">Word family:</span>
      <span class="value">${[...(wordFamily.verbs||[]),...(wordFamily.adjectives||[])].map(w=>`<span class="meta-chip">${esc(w)}</span>`).join(' ')}</span>
    </div>` : '';

  const linkedHtml = linkedVariants.length ? `
    <div class="section-title" style="margin-top:12px">Derived forms</div>
    ${linkedVariants.map(lv=>`<div class="verb-info" style="gap:8px">
      <span class="label" style="min-width:70px">${esc(lv.type||'compound')}</span>
      <span class="value">${esc(lv.base)} <span style="opacity:.5;font-size:11px;">[${(lv.level||'').toUpperCase()}]</span></span>
      <span style="font-size:11px;opacity:.5">${esc((lv.translations||[]).slice(0,2).join(', '))}</span>
    </div>`).join('')}` : '';

  const examplesHtml = (noun.examples||[]).length ? `
    <div class="section-title" style="margin-top:12px">Examples</div>
    <ul class="variety-examples">${(noun.examples||[]).map(ex=>`<li>${esc(ex)}</li>`).join('')}</ul>` : '';

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
        ${register ? `<div class="reflexive-marker">${esc(register)}</div>` : ''}
      </div>
      <button class="save-btn" type="button" data-save-id="${esc(saveId)}" data-save-label="${esc(label)}" data-save-trans="${esc((noun.translations||[])[0]||'')}" data-save-url="nouns.html" aria-label="Save">♡</button>
    </div>
    <div class="verb-info"><span class="label">Translation:</span><span class="value">${esc(trans)}</span></div>
    ${derivedHtml}${formsHtml}${declFullHtml}${prepsHtml}${collocHtml}${linkedHtml}${wordFamilyHtml}${examplesHtml}${tipHtml}${mistakesHtml}
  `;

  const btn=card.querySelector('.save-btn');
  if(btn){
    setSaveBtnState(btn,getSaved().has(saveId));
    btn.addEventListener('click',()=>{
      const s=getSaved();const m=window.SharedApp.getMeta();
      if(s.has(saveId)){s.delete(saveId);delete m[saveId];}else{s.add(saveId);m[saveId]={label,translation:(noun.translations||[])[0]||'',url:'nouns.html'};}
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
