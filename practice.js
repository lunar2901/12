// practice.js — Full 2000-word practice engine (verbs, nouns, adjectives, adverbs)

// ─── Data pools ─────────────────────────────────────────────────────────────
const DB = {
  verbs:      { a1: window.verbsA1,      a2: window.verbsA2,      b1: window.verbsB1,      b2: window.verbsB2,      c1: window.verbsC1      },
  nouns:      { a1: window.nounsA1,      a2: window.nounsA2,      b1: window.nounsB1,      b2: window.nounsB2,      c1: window.nounsC1      },
  adjectives: { a1: window.adjectivesA1, a2: window.adjectivesA2, b1: window.adjectivesB1, b2: window.adjectivesB2, c1: window.adjectivesC1 },
  adverbs:    { a1: window.adverbsA1,    a2: window.adverbsA2,    b1: window.adverbsB1,    b2: window.adverbsB2,    c1: window.adverbsC1    }
};
const LEVELS = ['a1','a2','b1','b2','c1'];

// ─── DOM ─────────────────────────────────────────────────────────────────────
const levelSel    = document.getElementById('practice-level');
const catSel      = document.getElementById('word-category');
const typeSel     = document.getElementById('exercise-type');
const exerciseBox = document.getElementById('exercise-box');
const answerInput = document.getElementById('answer-input');
const optionsCont = document.getElementById('options-container');
const feedbackEl  = document.getElementById('feedback');
const nextBtn     = document.getElementById('new-exercise');
const checkBtn    = document.getElementById('check-answer');
const showBtn     = document.getElementById('show-answer');
const scoreEl     = document.getElementById('score');
const streakEl    = document.getElementById('streak');

// ─── State ───────────────────────────────────────────────────────────────────
let correct  = null;
let score    = { ok: 0, total: 0 };
let streak   = 0;
let answered = false;

// ─── Helpers ─────────────────────────────────────────────────────────────────
const pick    = arr => arr[Math.floor(Math.random() * arr.length)];
const shuffle = arr => [...arr].sort(() => Math.random() - .5);

function getPool(catOverride) {
  const cat  = catOverride || catSel.value;
  const lvl  = levelSel.value;
  const cats = cat === 'all' ? ['verbs','nouns','adjectives','adverbs'] : [cat];
  const lvls = lvl === 'all' ? LEVELS : [lvl];
  let pool = [];
  for (const c of cats) {
    for (const l of lvls) {
      const data = DB[c]?.[l];
      if (Array.isArray(data)) pool.push(...data.map(w => ({...w, _cat: c})));
    }
  }
  return shuffle(pool);
}

function pickWord(catOverride) {
  const pool = getPool(catOverride);
  return pool.length ? pick(pool) : null;
}

function othersFrom(cat, lvl, n) {
  const lvls = lvl === 'all' ? LEVELS : [lvl];
  let pool = [];
  for (const l of lvls) {
    const data = DB[cat]?.[l];
    if (Array.isArray(data)) pool.push(...data);
  }
  return shuffle(pool).slice(0, n);
}

// ─── Render helpers ──────────────────────────────────────────────────────────
function setQuestion(html) { exerciseBox.innerHTML = html; }

function badge(text, color) {
  return `<span style="display:inline-block;font-size:11px;font-weight:700;padding:2px 9px;border-radius:99px;background:${color};color:#fff;letter-spacing:.4px;margin-bottom:10px;">${text}</span>`;
}

function showMultipleChoice(options, answer) {
  answerInput.style.display = 'none';
  optionsCont.style.display = 'grid';
  optionsCont.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => selectOption(btn, opt, answer));
    optionsCont.appendChild(btn);
  });
}

function showTextInput(placeholder) {
  answerInput.style.display = 'block';
  answerInput.placeholder   = placeholder || 'Type your answer…';
  optionsCont.style.display = 'none';
  optionsCont.innerHTML     = '';
  answerInput.value         = '';
  setTimeout(() => answerInput.focus(), 50);
}

function resetUI() {
  feedbackEl.textContent = '';
  feedbackEl.className   = 'feedback';
  answerInput.value      = '';
  answerInput.style.display = 'block';
  optionsCont.style.display = 'none';
  optionsCont.innerHTML = '';
  checkBtn.textContent  = 'Check Answer';
  checkBtn.disabled     = false;
  answered              = false;
}

// ─── VERB EXERCISES ──────────────────────────────────────────────────────────
function exVerbForms(v) {
  const forms = [
    v.past_tenses?.präteritum    && { q:`Präteritum of <strong>${v.base}</strong>?`, a: v.past_tenses.präteritum, hint:'Simple past' },
    v.past_tenses?.partizip_ii   && { q:`Partizip II of <strong>${v.base}</strong>?`, a: v.past_tenses.partizip_ii, hint:'Past participle' },
    v.present?.er_sie_es         && { q:`<em>er/sie/es</em> present of <strong>${v.base}</strong>?`, a: v.present.er_sie_es, hint:'3rd person singular' },
    v.present?.du                && { q:`<em>du</em> present of <strong>${v.base}</strong>?`, a: v.present.du, hint:'2nd person singular' },
  ].filter(Boolean);
  if (!forms.length) return exVerbTranslation(v);
  const f = pick(forms);
  setQuestion(`${badge('Verb Forms','#2563eb')}<p class="question">${f.q}</p><p style="font-size:12px;color:#999;margin-top:6px;">${f.hint}</p>`);
  showTextInput('Type the verb form…');
  correct = f.a.toLowerCase().trim();
}

function exVerbTranslation(v) {
  const deToEn = Math.random() > .5;
  if (deToEn) {
    setQuestion(`${badge('Verbs','#2563eb')}<p class="question">Translate to English:<br><strong>${v.base}</strong></p>`);
    correct = v.translations.map(t => t.toLowerCase());
    showTextInput('Type the English meaning…');
  } else {
    setQuestion(`${badge('Verbs','#2563eb')}<p class="question">Translate to German:<br><strong>${pick(v.translations)}</strong></p>`);
    correct = v.base.toLowerCase();
    showTextInput('Type the German infinitive…');
  }
}

function exVerbMC(v, lvl) {
  const deToEn = Math.random() > .5;
  const others = othersFrom('verbs', lvl, 30).filter(x => x.base !== v.base);
  if (deToEn) {
    const ans = pick(v.translations);
    const opts = shuffle([ans, ...others.slice(0,3).map(x => pick(x.translations)).filter(t => t !== ans)]).slice(0,4);
    setQuestion(`${badge('Verbs','#2563eb')}<p class="question">What does <strong>${v.base}</strong> mean?</p>`);
    showMultipleChoice(opts, ans); correct = ans.toLowerCase();
  } else {
    const ans = v.base;
    const opts = shuffle([ans, ...others.slice(0,3).map(x => x.base)]);
    setQuestion(`${badge('Verbs','#2563eb')}<p class="question">Which verb means <strong>"${pick(v.translations)}"</strong>?</p>`);
    showMultipleChoice(opts, ans); correct = ans.toLowerCase();
  }
}

function exVerbPrep(v) {
  const pat = v.patterns?.find(p => p.prepositions?.length);
  if (!pat) return exVerbForms(v);
  const prep = pick(pat.prepositions);
  const pool = ['an','auf','für','mit','von','zu','über','nach','bei','gegen','durch','in','um'];
  const opts = shuffle([prep, ...shuffle(pool.filter(p => p !== prep)).slice(0,3)]);
  setQuestion(`
    ${badge('Prepositions','#7c3aed')}
    <p class="question"><strong>${v.base}</strong> + which preposition?</p>
    <p style="font-size:13px;color:#666;font-style:italic;margin-top:8px;">${pat.explanation}</p>
    <p style="font-size:12px;color:#888;">e.g. <em>${pick(pat.examples)}</em></p>
  `);
  showMultipleChoice(opts, prep); correct = prep;
}

// ─── NOUN EXERCISES ──────────────────────────────────────────────────────────
function exNounArticle(n) {
  if (!n.article) return exNounTranslation(n);
  const art = n.article.split('/')[0].trim().toLowerCase();
  if (!['der','die','das'].includes(art)) return exNounTranslation(n);
  const opts = shuffle(['der','die','das']);
  setQuestion(`
    ${badge('Noun Articles','#059669')}
    <p class="question">Which article does <strong>${n.base}</strong> take?</p>
    <p style="font-size:13px;color:#777;margin-top:6px;">Meaning: ${n.translations[0]}</p>
  `);
  showMultipleChoice(opts, art); correct = art;
}

function exNounPlural(n) {
  if (!n.plural) return exNounArticle(n);
  setQuestion(`
    ${badge('Noun Plurals','#059669')}
    <p class="question">What is the plural of <strong>${n.article} ${n.base}</strong>?</p>
    <p style="font-size:12px;color:#888;margin-top:6px;">Include <em>die</em> + plural form</p>
  `);
  showTextInput('Type: die + plural form…');
  correct = [`die ${n.plural}`.toLowerCase(), n.plural.toLowerCase()];
}

function exNounTranslation(n) {
  const deToEn = Math.random() > .5;
  if (deToEn) {
    setQuestion(`${badge('Nouns','#059669')}<p class="question">What does <strong>${n.article} ${n.base}</strong> mean in English?</p>`);
    correct = n.translations.map(t => t.toLowerCase());
    showTextInput('Type the English translation…');
  } else {
    setQuestion(`${badge('Nouns','#059669')}<p class="question">Translate to German (article + noun):<br><strong>${pick(n.translations)}</strong></p>`);
    correct = [`${n.article.split('/')[0].trim()} ${n.base}`.toLowerCase(), n.base.toLowerCase()];
    showTextInput('Type: article + noun…');
  }
}

function exNounMC(n, lvl) {
  const type = pick(['article','translation']);
  if (type === 'article') return exNounArticle(n);
  const others = othersFrom('nouns', lvl, 30).filter(x => x.base !== n.base);
  const ans = pick(n.translations);
  const opts = shuffle([ans, ...others.slice(0,3).map(x => pick(x.translations)).filter(t => t !== ans)]).slice(0,4);
  setQuestion(`${badge('Nouns','#059669')}<p class="question">What does <strong>${n.article} ${n.base}</strong> mean?</p>`);
  showMultipleChoice(opts, ans); correct = ans.toLowerCase();
}

// ─── ADJECTIVE EXERCISES ─────────────────────────────────────────────────────
function exAdjTranslation(a) {
  const deToEn = Math.random() > .5;
  if (deToEn) {
    setQuestion(`${badge('Adjectives','#d97706')}<p class="question">What does <strong>${a.base}</strong> mean in English?</p>`);
    correct = a.translations.map(t => t.toLowerCase());
    showTextInput('Type the English translation…');
  } else {
    setQuestion(`${badge('Adjectives','#d97706')}<p class="question">Translate to German:<br><strong>${pick(a.translations)}</strong></p>`);
    correct = a.base.toLowerCase();
    showTextInput('Type the German adjective…');
  }
}

function exAdjComparison(a) {
  const comp = a.comparison;
  const forms = [
    comp?.comparative            && { label:'comparative',  q:`Comparative of <strong>${a.base}</strong>?`, a: comp.comparative },
    comp?.superlative_predicative && { label:'superlative', q:`Superlative of <strong>${a.base}</strong>? (am …)`, a: comp.superlative_predicative },
  ].filter(Boolean);
  if (!forms.length) return exAdjTranslation(a);
  const f = pick(forms);
  setQuestion(`
    ${badge('Adj. Comparison','#d97706')}
    <p class="question">${f.q}</p>
    <p style="font-size:13px;color:#777;margin-top:6px;">Meaning: <em>${pick(a.translations)}</em></p>
  `);
  showTextInput(`Type the ${f.label}…`);
  correct = f.a.toLowerCase().trim();
}

function exAdjMC(a, lvl) {
  const deToEn = Math.random() > .5;
  const others = othersFrom('adjectives', lvl, 30).filter(x => x.base !== a.base);
  if (deToEn) {
    const ans = pick(a.translations);
    const opts = shuffle([ans, ...others.slice(0,3).map(x => pick(x.translations)).filter(t => t !== ans)]).slice(0,4);
    setQuestion(`${badge('Adjectives','#d97706')}<p class="question">What does <strong>${a.base}</strong> mean?</p>`);
    showMultipleChoice(opts, ans); correct = ans.toLowerCase();
  } else {
    const ans = a.base;
    const opts = shuffle([ans, ...others.slice(0,3).map(x => x.base)]);
    setQuestion(`${badge('Adjectives','#d97706')}<p class="question">Which adjective means <strong>"${pick(a.translations)}"</strong>?</p>`);
    showMultipleChoice(opts, ans); correct = ans.toLowerCase();
  }
}

// ─── ADVERB EXERCISES ────────────────────────────────────────────────────────
function exAdvTranslation(a) {
  const deToEn = Math.random() > .5;
  if (deToEn) {
    setQuestion(`${badge('Adverbs','#be185d')}<p class="question">What does <strong>${a.base}</strong> mean in English?</p>
      ${a.tip ? `<p style="font-size:12px;color:#888;margin-top:6px;">💡 ${a.tip}</p>` : ''}`);
    correct = a.translations.map(t => t.toLowerCase());
    showTextInput('Type the English translation…');
  } else {
    setQuestion(`${badge('Adverbs','#be185d')}<p class="question">Translate to German:<br><strong>${pick(a.translations)}</strong></p>`);
    correct = a.base.toLowerCase();
    showTextInput('Type the German adverb…');
  }
}

function exAdvMC(a, lvl) {
  const deToEn = Math.random() > .5;
  const others = othersFrom('adverbs', lvl, 30).filter(x => x.base !== a.base);
  if (deToEn) {
    const ans = pick(a.translations);
    const opts = shuffle([ans, ...others.slice(0,3).map(x => pick(x.translations)).filter(t => t !== ans)]).slice(0,4);
    setQuestion(`${badge('Adverbs','#be185d')}<p class="question">What does <strong>${a.base}</strong> mean?</p>`);
    showMultipleChoice(opts, ans); correct = ans.toLowerCase();
  } else {
    const ans = a.base;
    const opts = shuffle([ans, ...others.slice(0,3).map(x => x.base)]);
    setQuestion(`${badge('Adverbs','#be185d')}<p class="question">Which adverb means <strong>"${pick(a.translations)}"</strong>?</p>`);
    showMultipleChoice(opts, ans); correct = ans.toLowerCase();
  }
}

// ─── Main dispatcher ──────────────────────────────────────────────────────────
function generateExercise() {
  resetUI();

  const cat = catSel.value;
  const lvl = levelSel.value;
  const type = typeSel.value;

  // Pick category & word
  let wordCat = cat === 'all' ? pick(['verbs','nouns','adjectives','adverbs']) : cat;
  let word = pickWord(wordCat);
  if (!word) {
    exerciseBox.innerHTML = '<p style="color:#999;text-align:center;padding:20px;">No words available for this selection.</p>';
    return;
  }

  // Resolve exercise type
  const mixMap = {
    verbs:      ['verb-forms','translation','multiple-choice','preposition'],
    nouns:      ['article','plural','translation','multiple-choice'],
    adjectives: ['translation','comparison','multiple-choice'],
    adverbs:    ['translation','multiple-choice'],
  };
  let resolvedType = type === 'mixed' ? pick(mixMap[wordCat]) : type;

  // Graceful degradation: unsupported type for category → translation
  const requires = { 'article':'nouns','plural':'nouns','verb-forms':'verbs','preposition':'verbs','comparison':'adjectives' };
  if (requires[resolvedType] && requires[resolvedType] !== wordCat) resolvedType = 'translation';

  // Dispatch
  switch(resolvedType) {
    case 'verb-forms':     return exVerbForms(word);
    case 'preposition':    return exVerbPrep(word);
    case 'article':        return exNounArticle(word);
    case 'plural':         return exNounPlural(word);
    case 'comparison':     return exAdjComparison(word);
    case 'multiple-choice':
      if (wordCat==='verbs')      return exVerbMC(word, lvl);
      if (wordCat==='nouns')      return exNounMC(word, lvl);
      if (wordCat==='adjectives') return exAdjMC(word, lvl);
      if (wordCat==='adverbs')    return exAdvMC(word, lvl);
      return exVerbMC(word, lvl);
    case 'translation':
    default:
      if (wordCat==='verbs')      return exVerbTranslation(word);
      if (wordCat==='nouns')      return exNounTranslation(word);
      if (wordCat==='adjectives') return exAdjTranslation(word);
      if (wordCat==='adverbs')    return exAdvTranslation(word);
  }
}

// ─── Checking ─────────────────────────────────────────────────────────────────
function norm(s) {
  return s.toLowerCase().trim().replace(/\(.*?\)/g,'').replace(/[.,;!?]/g,'').replace(/\//g,'|').trim();
}

function isMatch(userRaw) {
  const u = norm(userRaw);
  const answers = Array.isArray(correct) ? correct : [correct];
  return answers.some(c => {
    const cn = norm(c);
    if (cn === u) return true;
    // "die Häuser" → accept "Häuser"
    const parts = cn.split(' ');
    if (parts.length > 1 && parts.some(p => p === u && p.length > 3)) return true;
    return false;
  });
}

function checkAnswer() {
  if (answered) { generateExercise(); return; }
  const user = answerInput.value.trim();
  if (!user) return;
  doCheck(isMatch(user), Array.isArray(correct) ? correct[0] : correct);
}

function selectOption(btn, chosen, answer) {
  if (answered) return;
  optionsCont.querySelectorAll('.option-btn').forEach(b => {
    b.disabled = true;
    if (b.textContent === answer) b.classList.add('correct');
  });
  if (chosen !== answer) btn.classList.add('incorrect');
  doCheck(chosen === answer, answer);
}

function doCheck(ok, displayAnswer) {
  answered = true;
  score.total++;
  if (ok) {
    score.ok++; streak++;
    feedbackEl.className = 'feedback correct';
    feedbackEl.textContent = ['✓ Correct!','✓ Right!','✓ Exactly!','✓ Perfect!'][Math.floor(Math.random()*4)];
  } else {
    streak = 0;
    feedbackEl.className = 'feedback incorrect';
    feedbackEl.innerHTML = `✗ Answer: <strong>${displayAnswer}</strong>`;
  }
  updateScore();
  checkBtn.textContent = 'Next →';
}

function showAnswer() {
  if (answered) { generateExercise(); return; }
  answered = true;
  score.total++;
  streak = 0;
  const display = Array.isArray(correct) ? correct.join(' / ') : correct;
  feedbackEl.className = 'feedback show-answer';
  feedbackEl.innerHTML = `Answer: <strong>${display}</strong>`;
  optionsCont.querySelectorAll('.option-btn').forEach(b => {
    b.disabled = true;
    if (norm(b.textContent) === norm(display)) b.classList.add('correct');
  });
  updateScore();
  checkBtn.textContent = 'Next →';
}

function updateScore() {
  const pct = score.total ? Math.round(score.ok / score.total * 100) : 0;
  scoreEl.textContent  = `${score.ok}/${score.total} (${pct}%)`;
  streakEl.textContent = streak;
}

// ─── Events ──────────────────────────────────────────────────────────────────
nextBtn.addEventListener('click', generateExercise);
checkBtn.addEventListener('click', checkAnswer);
showBtn.addEventListener('click', showAnswer);
answerInput.addEventListener('keydown', e => { if (e.key === 'Enter') checkAnswer(); });
[levelSel, catSel, typeSel].forEach(el => el.addEventListener('change', () => {
  score = { ok: 0, total: 0 }; streak = 0; updateScore(); generateExercise();
}));

// Boot
generateExercise();
