// idioms.js — Daily idiom home page logic
const idiomsDB = window.idiomsDB || [];

/* ── Seeded daily shuffle ─────────────────────────────────────────── */
function seededShuffle(arr, seed) {
  let s = seed >>> 0;
  const rand = () => { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 0xffffffff; };
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const today    = new Date();
const dateSeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
const order    = seededShuffle(idiomsDB, dateSeed);
let idx = 0;

/* ── DOM refs ────────────────────────────────────────────────────── */
const $           = id => document.getElementById(id);
const idiomTextEl = $('idiomText');
const infoLitEl   = $('infoLiteral');
const infoCatEl   = $('infoCategory');
const infoMeanEl  = $('infoMeaning');
const infoExEl    = $('infoExample');
const typePillEl  = $('typePill');
const heroDateEl  = $('heroDate');
const cNumEl      = $('cNum');
const cTotalEl    = $('cTotal');
const progressEl  = $('progressFill');
const btnPrev     = $('btnPrev');
const btnNext     = $('btnNext');
const btnSave     = $('btnSaveIdiom');
const saveHeartEl = $('saveHeart');
const saveLabelEl = $('saveLabel');

/* ── Date label ──────────────────────────────────────────────────── */
if (heroDateEl) {
  heroDateEl.textContent = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  }).format(today);
}

/* ── Helpers ─────────────────────────────────────────────────────── */
const TYPE_LABEL = { idiom: 'Idiom', proverb: 'Sprichwort', saying: 'Redewendung' };
const CAT_EMOJI  = {
  everyday:'☕', attitude:'🧠', problem:'🔧', mistakes:'❌', distance:'📍',
  luck:'🍀', secrets:'🤫', society:'👥', action:'⚡', futility:'🌀',
  money:'💶', work:'💼', family:'👨‍👩‍👧', learning:'📚', honesty:'✅',
  relationships:'❤️', hope:'🌅', time:'⏰', patience:'⌛', communication:'💬',
  conflict:'⚔️', fear:'😨', courage:'🦁', humor:'😄', happiness:'🌟',
  food:'🍽️', wisdom:'🦉', culture:'🌍', independence:'🦅', anger:'🔥',
  emotion:'💭', celebration:'🎉', caution:'⚠️', laziness:'🛋️', love:'💕',
  death:'🌑', age:'🎂', surprise:'😲', indifference:'🤷', deception:'🃏',
  persistence:'💪', fate:'⭐', default:'✦'
};
const catEmoji  = c => CAT_EMOJI[c] || CAT_EMOJI.default;
const getSaveId = item => `idiom:${item.id}`;

function updateSave(item) {
  if (!btnSave) return;
  const saved = SharedApp.getSaved().has(getSaveId(item));
  if (saveHeartEl) saveHeartEl.textContent = saved ? '♥' : '♡';
  if (saveLabelEl) saveLabelEl.textContent  = saved ? 'Saved' : 'Save';
  btnSave.classList.toggle('saved', saved);
}

/* ── Render ──────────────────────────────────────────────────────── */
function applyRender(item) {
  if (idiomTextEl) idiomTextEl.textContent = item.german;
  if (infoLitEl)   infoLitEl.textContent   = item.literal;
  if (infoCatEl)   infoCatEl.textContent   = `${catEmoji(item.category)} ${item.category || '—'}`;
  if (infoMeanEl)  infoMeanEl.textContent  = item.meaning;
  if (infoExEl)    infoExEl.textContent    = item.example;
  if (typePillEl)  typePillEl.textContent  = TYPE_LABEL[item.type] || item.type || 'Phrase';
  if (cNumEl)      cNumEl.textContent      = idx + 1;
  if (cTotalEl)    cTotalEl.textContent    = `of ${order.length}`;
  if (progressEl)  progressEl.style.width  = `${((idx + 1) / order.length) * 100}%`;
  updateSave(item);
}

function render(animate) {
  const item = order[idx];
  if (!item) return;
  if (animate && idiomTextEl) {
    idiomTextEl.classList.add('anim-out');
    setTimeout(() => { applyRender(item); idiomTextEl.classList.remove('anim-out'); }, 230);
  } else {
    applyRender(item);
  }
}

/* ── Navigation ──────────────────────────────────────────────────── */
const prev = () => { idx = (idx - 1 + order.length) % order.length; render(true); };
const next = () => { idx = (idx + 1) % order.length; render(true); };
btnPrev?.addEventListener('click', prev);
btnNext?.addEventListener('click', next);

/* ── Save ────────────────────────────────────────────────────────── */
btnSave?.addEventListener('click', () => {
  const item = order[idx];
  const id = getSaveId(item);
  const s = SharedApp.getSaved(), m = SharedApp.getMeta();
  if (s.has(id)) { s.delete(id); delete m[id]; }
  else { s.add(id); m[id] = { label: item.german, translation: item.meaning.slice(0, 70), url: 'index.html', category: 'Idioms' }; }
  SharedApp.setSaved(s); SharedApp.setMeta(m);
  updateSave(item);
});

/* ── Keyboard ────────────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === 'ArrowLeft')               { e.preventDefault(); prev(); }
  else if (e.key === 'ArrowRight')         { e.preventDefault(); next(); }
  else if (e.key === 's' || e.key === 'S') { btnSave?.click(); }
});

/* ── Swipe ───────────────────────────────────────────────────────── */
let tx = 0;
document.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - tx;
  if (Math.abs(dx) > 55) { dx < 0 ? next() : prev(); }
}, { passive: true });

/* ── #jump hash handler ──────────────────────────────────────────── */
const hash = window.location.hash;
if (hash.startsWith('#jump:')) {
  const parts = hash.slice(1).split(':');
  const jumpIdx = parseInt(parts[2], 10);
  if (!isNaN(jumpIdx) && jumpIdx >= 0 && jumpIdx < order.length) idx = jumpIdx;
  history.replaceState(null, '', window.location.pathname);
}

/* ── RENDER NOW (before any async word DB loading) ───────────────── */
render(false);

/* ── Register idiom search items ─────────────────────────────────── */
const idiomItems = idiomsDB.map((item, i) => ({
  id: getSaveId(item), label: item.german,
  translation: item.meaning.slice(0, 60),
  index: i, level: item.type || 'idiom',
  category: 'Idioms', url: 'index.html',
}));
SharedApp.registerPageItems?.(idiomItems);

/* Word DBs loaded as <script> tags — registerSearchItems called by page JS files */
