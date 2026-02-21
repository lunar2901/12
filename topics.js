// topics.js
// Drop this file next to grammar.html. It provides: window.TOPICS = [ ... ].

window.TOPICS = [
  // --------------------------
  // A1 / A2 — FOUNDATION
  // --------------------------
  {
    id: "v2-main",
    level: "A1",
    tags: ["Word order","Basics"],
    title: "Verb-Second (V2) in Main Clauses",
    summary: "In a German main clause, the conjugated verb is in position 2. Position 1 can be any element (time/place/object) for emphasis.",
    deep: `
      <div class="box">
        <p><strong>Rule:</strong> In main clauses, the <strong>finite verb</strong> (conjugated verb) is always in position 2.</p>
        <ol>
          <li>Choose what you want to emphasize → put it in position 1.</li>
          <li>Put the conjugated verb in position 2.</li>
          <li>Everything else follows.</li>
        </ol>
        <p><strong>Why it matters:</strong> German can move elements around; cases + verb position keep meaning clear.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich <strong>gehe</strong> heute ins Kino.</p>
        <p>Heute <strong>gehe</strong> ich ins Kino.</p>
        <p>Ins Kino <strong>gehe</strong> ich heute.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Wrong:</strong> Heute ich gehe ins Kino.</p>
        <p><strong>Right:</strong> Heute <strong>gehe</strong> ich ins Kino.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Reorder into correct German (keep meaning):</p>
        <ul>
          <li>Tomorrow / I / go / to the doctor.</li>
          <li>In the evening / we / watch / a film.</li>
        </ul>
      </div>
    `
  },

  {
    id: "questions-negation",
    level: "A1",
    tags: ["Word order","Basics"],
    title: "Questions + Negation (nicht vs kein)",
    summary: "Yes/no questions: verb first. W-questions: question word first, verb second. Negation: nicht for verbs/phrases; kein for 'no' + noun.",
    deep: `
      <div class="box">
        <p><strong>Questions:</strong></p>
        <ul>
          <li><strong>Yes/No:</strong> verb in position 1.</li>
          <li><strong>W-question:</strong> W-word in position 1 → verb position 2.</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Negation:</strong></p>
        <ul>
          <li><strong>kein</strong> negates a noun (≈ “not a/any”): Ich habe <strong>kein</strong> Auto.</li>
          <li><strong>nicht</strong> negates the verb or a phrase: Ich komme <strong>nicht</strong>. / Ich gehe <strong>nicht</strong> ins Kino.</li>
        </ul>
        <p><strong>Meaning nuance:</strong> “Ich habe kein Geld.” (I have no money.) vs “Ich habe das Geld nicht.” (I don’t have <em>that</em> money.)</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p><strong>Gehst</strong> du heute ins Kino?</p>
        <p><strong>Wann</strong> gehst du ins Kino?</p>
        <p>Ich habe <strong>kein</strong> Geld.</p>
        <p>Ich bin <strong>nicht</strong> müde.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Wrong:</strong> Ich habe nicht Auto.</p>
        <p><strong>Right:</strong> Ich habe <strong>kein</strong> Auto.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Choose <strong>nicht</strong> or <strong>kein</strong>:</p>
        <ul>
          <li>Ich habe ____ Zeit.</li>
          <li>Das ist ____ gut.</li>
          <li>Wir gehen heute ____ schwimmen.</li>
        </ul>
      </div>
    `
  },

  {
    id: "articles-cases-overview",
    level: "A1",
    tags: ["Cases","Articles"],
    title: "Articles Across Cases (der/die/das → den/dem/des)",
    summary: "Articles show a noun’s grammatical role. Learn the definite articles across all cases early — they unlock reading comprehension.",
    deep: `
      <div class="box">
        <p><strong>Core idea:</strong> German uses case marking on articles to show function (subject, object, etc.).</p>
        <p>Even when word order changes, the articles keep roles clear.</p>
        <table class="grammar-table">
          <tr><th>Case</th><th>Masculine</th><th>Feminine</th><th>Neuter</th><th>Plural</th></tr>
          <tr><td>Nominative</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
          <tr><td>Accusative</td><td><strong>den</strong></td><td>die</td><td>das</td><td>die</td></tr>
          <tr><td>Dative</td><td>dem</td><td>der</td><td>dem</td><td>den (+n)</td></tr>
          <tr><td>Genitive</td><td>des (+s/es)</td><td>der</td><td>des (+s/es)</td><td>der</td></tr>
        </table>
        <p class="muted"><strong>High payoff:</strong> memorize “der → den → dem → des”.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p><strong>Der</strong> Mann (Nom)</p>
        <p>Ich sehe <strong>den</strong> Mann. (Akk)</p>
        <p>Ich helfe <strong>dem</strong> Mann. (Dat)</p>
        <p>Das Auto <strong>des</strong> Mannes. (Gen)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common:</strong> relying on English word order.</p>
        <p><strong>Fix:</strong> identify roles by article/case, not by position.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Choose the correct definite article form (der/den/dem/des):</p>
        <ul>
          <li>Ich sehe ___ Hund. (Akk)</li>
          <li>Ich helfe ___ Hund. (Dat)</li>
          <li>Das Spiel ___ Hundes ist lustig. (Gen)</li>
        </ul>
      </div>
    `
  },

  {
    id: "cases-nom-akk",
    level: "A1",
    tags: ["Cases","Articles"],
    title: "Cases: Nominative & Accusative (der → den)",
    summary: "Nominative is usually the subject. Accusative is the direct object. Masculine articles change in accusative: der → den.",
    deep: `
      <div class="box">
        <p><strong>How to decide the case:</strong></p>
        <ul>
          <li><strong>Who does the action?</strong> → nominative.</li>
          <li><strong>Who/what is directly affected?</strong> → accusative.</li>
        </ul>
        <p><strong>Key change:</strong> masculine accusative: <strong>der → den</strong>.</p>
        <table class="grammar-table">
          <tr><th></th><th>masc</th><th>fem</th><th>neut</th><th>plural</th></tr>
          <tr><td>Nominative</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
          <tr><td>Accusative</td><td><strong>den</strong></td><td>die</td><td>das</td><td>die</td></tr>
        </table>
      </div>
    `,
    examples: `
      <div class="box">
        <p><strong>Der</strong> Mann sieht <strong>den</strong> Hund.</p>
        <p><strong>Den</strong> Hund sieht <strong>der</strong> Mann. (same meaning)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> “der” everywhere.</p>
        <p><strong>Fix:</strong> drill: der (Nom) → den (Akk) → dem (Dat) → des (Gen).</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Mark subject (NOM) and object (AKK):</p>
        <ul>
          <li>Den Film sieht die Frau.</li>
          <li>Der Junge besucht den Lehrer.</li>
        </ul>
      </div>
    `
  },

  {
    id: "dative",
    level: "A2",
    tags: ["Cases","Verbs"],
    title: "Dative (Wem?) + Dative Verbs + Plural -n",
    summary: "Dative marks the indirect object and is required by many verbs and prepositions. Plural dative often adds -n.",
    deep: `
      <div class="box">
        <p><strong>Two major uses:</strong></p>
        <ul>
          <li><strong>Recipient/beneficiary:</strong> Ich gebe <em>dem Mann</em> das Buch.</li>
          <li><strong>Dative verbs:</strong> the verb demands dative (helfen, danken, gefallen, gehören…).</li>
        </ul>
        <table class="grammar-table">
          <tr><th></th><th>masc</th><th>fem</th><th>neut</th><th>plural</th></tr>
          <tr><td>Dative</td><td>dem</td><td>der</td><td>dem</td><td>den (+n)</td></tr>
        </table>
        <p><strong>Plural -n rule:</strong> Add -n in dative plural unless plural already ends in -n/-s.</p>
        <p class="muted">mit den Kind<strong>ern</strong>, in den Wohnung<strong>en</strong>, bei den Freund<strong>en</strong>, aber: mit den Auto<strong>s</strong>.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich gebe <strong>dem</strong> Mann <strong>das</strong> Buch.</p>
        <p>Ich helfe <strong>der</strong> Frau.</p>
        <p>Das Hemd <strong>gefällt</strong> mir.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Wrong:</strong> Ich helfe den Mann.</p>
        <p><strong>Right:</strong> Ich helfe <strong>dem</strong> Mann.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Fill in the correct article (DAT):</p>
        <ul>
          <li>Ich danke ____ Lehrer.</li>
          <li>Wir helfen ____ Kindern.</li>
        </ul>
      </div>
    `
  },

  {
    id: "prepositions-cases",
    level: "A2",
    tags: ["Prepositions","Cases"],
    title: "Prepositions + Case (Akk / Dat / Two-way)",
    summary: "Many prepositions require a fixed case. Two-way prepositions use dative for location and accusative for direction.",
    deep: `
      <div class="box">
        <p><strong>Accusative:</strong> für, ohne, durch, gegen, um</p>
        <p><strong>Dative:</strong> mit, nach, bei, seit, von, zu</p>
        <div class="divider"></div>
        <p><strong>Two-way:</strong> in, an, auf, unter, über, vor, hinter, neben, zwischen</p>
        <ul>
          <li><strong>Dative</strong> = location (Wo?)</li>
          <li><strong>Accusative</strong> = direction (Wohin?)</li>
        </ul>
        <p><strong>Contractions:</strong> in dem → <strong>im</strong>, zu dem → <strong>zum</strong>, zu der → <strong>zur</strong>, an dem → <strong>am</strong></p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich gehe <strong>in den</strong> Park. (direction → AKK)</p>
        <p>Ich bin <strong>im</strong> Park. (location → DAT)</p>
        <p>Ich fahre <strong>mit dem</strong> Bus. (DAT)</p>
        <p>Das ist <strong>für den</strong> Lehrer. (AKK)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> mixing Wo/Wohin.</p>
        <p><strong>Fix:</strong> always ask the question: “Wo?” (DAT) vs “Wohin?” (AKK).</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Choose DAT or AKK:</p>
        <ul>
          <li>Ich stelle die Tasche ____ Tisch. (Wohin?)</li>
          <li>Die Tasche liegt ____ Tisch. (Wo?)</li>
        </ul>
      </div>
    `
  },

  {
    id: "separable-inseparable",
    level: "A2",
    tags: ["Verbs","Word order"],
    title: "Separable vs Inseparable Prefix Verbs (and participles)",
    summary: "Separable prefixes split in main clauses; inseparable prefixes never split and usually avoid 'ge-' in participles.",
    deep: `
      <div class="box">
        <p><strong>Separable:</strong> prefix goes to the end in main clauses.</p>
        <p><strong>Inseparable:</strong> prefix stays attached (be-, ver-, er-, ent-, zer-, miss-, ge-).</p>
        <div class="divider"></div>
        <p><strong>Participles:</strong></p>
        <ul>
          <li>Separable: prefix + ge + stem → <em>aufgemacht</em>, <em>eingekauft</em></li>
          <li>Inseparable: no ge- → <em>besucht</em>, <em>verstanden</em></li>
        </ul>
        <p class="muted"><strong>Tip:</strong> often separable prefixes are stressed (AUSgehen), inseparable are not (beSUchen) — not perfect but helpful.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich <strong>stehe</strong> um 7 Uhr <strong>auf</strong>. → Ich bin um 7 Uhr <strong>aufgestanden</strong>.</p>
        <p>Ich <strong>besuche</strong> meine Oma. → Ich habe meine Oma <strong>besucht</strong>.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Wrong participle:</strong> *gebesucht</p>
        <p><strong>Right:</strong> besucht (inseparable prefix → no ge-)</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Convert to Perfekt:</p>
        <ul>
          <li>Ich stehe früh auf. → …</li>
          <li>Ich besuche meine Tante. → …</li>
          <li>Ich mache die Tür auf. → …</li>
        </ul>
      </div>
    `
  },

  {
    id: "reflexive-akk-dat",
    level: "B1",
    tags: ["Verbs","Cases"],
    title: "Reflexive Verbs: Accusative vs Dative Reflexive (mich vs mir)",
    summary: "Some reflexive verbs are always accusative; others become dative when another accusative object is present (mir die Hände waschen).",
    deep: `
      <div class="box">
        <p><strong>Accusative reflexive:</strong> subject acts on itself as direct object.</p>
        <p class="muted">Ich wasche <strong>mich</strong>. (me = direct object)</p>
        <div class="divider"></div>
        <p><strong>Dative reflexive:</strong> often when there is another accusative object (body parts, things).</p>
        <p class="muted">Ich wasche <strong>mir</strong> die Hände. (Hände = accusative object)</p>
        <div class="divider"></div>
        <p><strong>Common dative reflexive pattern:</strong> <em>sich (Dat) + body part (Akk)</em></p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich ziehe <strong>mich</strong> an. (akk reflexive)</p>
        <p>Ich ziehe <strong>mir</strong> eine Jacke an. (dat reflexive + akk object)</p>
        <p>Er putzt <strong>sich</strong> die Zähne. (dat reflexive + teeth as akk)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common:</strong> *Ich wasche mich die Hände.</p>
        <p><strong>Right:</strong> Ich wasche <strong>mir</strong> die Hände.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Choose <strong>mich</strong> or <strong>mir</strong>:</p>
        <ul>
          <li>Ich wasche ____ .</li>
          <li>Ich wasche ____ das Gesicht.</li>
          <li>Ich putze ____ die Zähne.</li>
        </ul>
      </div>
    `
  },

  {
    id: "perfekt",
    level: "A2",
    tags: ["Tenses","Verbs"],
    title: "Perfekt: haben/sein + Partizip II (spoken past)",
    summary: "Most common past tense in speech. Auxiliary in position 2; participle at the end.",
    deep: `
      <div class="box">
        <p><strong>Form:</strong> subject + haben/sein + … + Partizip II</p>
        <p><strong>Choosing auxiliaries:</strong></p>
        <ul>
          <li><strong>sein</strong> with movement/change of state: gehen, kommen, fahren, aufstehen, einschlafen, sterben, werden…</li>
          <li><strong>haben</strong> with most other verbs.</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Partizip II building:</strong></p>
        <ul>
          <li>regular: ge + stem + t → gemacht</li>
          <li>irregular: often ge + stem + en → gegangen</li>
          <li>inseparable prefixes: no ge- → besucht, verstanden</li>
          <li>separable prefixes: prefix + ge- → aufgemacht</li>
        </ul>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich <strong>habe</strong> Deutsch <strong>gelernt</strong>.</p>
        <p>Ich <strong>bin</strong> nach Hause <strong>gegangen</strong>.</p>
        <p>Wir <strong>haben</strong> ihn <strong>besucht</strong>.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Wrong:</strong> Ich bin das Buch gelesen.</p>
        <p><strong>Right:</strong> Ich <strong>habe</strong> das Buch <strong>gelesen</strong>.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Build Perfekt sentences:</p>
        <ul>
          <li>gestern / wir / (gehen) / ins Museum</li>
          <li>ich / (kaufen) / ein neues Handy</li>
          <li>sie / (besuchen) / ihre Freundin</li>
        </ul>
      </div>
    `
  },

  {
    id: "praeteritum-vs-perfekt",
    level: "B1",
    tags: ["Tenses","Style","Verbs"],
    title: "Präteritum vs Perfekt (usage, register, storytelling)",
    summary: "Perfekt dominates spoken German; Präteritum is common in writing and with a few frequent verbs in speech (war/hatte/wurde…).",
    deep: `
      <div class="box">
        <p><strong>Typical usage:</strong></p>
        <ul>
          <li><strong>Perfekt</strong>: everyday conversation, spoken narratives.</li>
          <li><strong>Präteritum</strong>: written stories, reports; also common in speech for: <em>sein, haben, werden</em> (and sometimes more).</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Why Germans do this:</strong> Präteritum feels “narrative/written”; Perfekt feels “spoken/experienced”.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Gestern <strong>war</strong> ich müde. (Präteritum in speech)</p>
        <p>Ich <strong>habe</strong> gestern viel <strong>gearbeitet</strong>. (Perfekt)</p>
        <p>Dann <strong>ging</strong> er nach Hause und <strong>sah</strong> einen Hund. (narrative Präteritum)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common learner issue:</strong> forcing one tense everywhere.</p>
        <p><strong>Better:</strong> use Perfekt for speaking; learn the common Präteritum forms (war, hatte, wurde) for natural speech.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Rewrite into natural spoken German:</p>
        <ul>
          <li>Gestern ging ich nach Hause und aß Pizza.</li>
        </ul>
      </div>
    `
  },

  {
    id: "plusquamperfekt",
    level: "B2",
    tags: ["Tenses","Verbs"],
    title: "Plusquamperfekt (past of the past)",
    summary: "Used to show an event happened before another past event. Form: hatten/waren + Partizip II.",
    deep: `
      <div class="box">
        <p><strong>Use:</strong> When you tell a past story and need to step back to an earlier past moment.</p>
        <p><strong>Form:</strong> ich <strong>hatte</strong> gemacht / ich <strong>war</strong> gegangen</p>
        <div class="divider"></div>
        <p><strong>Timeline:</strong></p>
        <ul>
          <li>Earlier past: Plusquamperfekt</li>
          <li>Later past: Perfekt/Präteritum</li>
        </ul>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Als ich ankam, <strong>hatte</strong> der Film schon <strong>begonnen</strong>.</p>
        <p>Ich <strong>war</strong> schon <strong>eingeschlafen</strong>, bevor du angerufen hast.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> using it when no “past-before-past” relation exists.</p>
        <p><strong>Check:</strong> Can you say “already” / “before that” logically? If yes, Plusquamperfekt likely fits.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Combine into one story sentence:</p>
        <ul>
          <li>Ich kam nach Hause. Ich aß schon. → …</li>
          <li>Der Zug fuhr ab. Ich kaufte das Ticket nicht. → …</li>
        </ul>
      </div>
    `
  },

  {
    id: "future-present-futur1",
    level: "A2",
    tags: ["Tenses","Verbs"],
    title: "Future: Present vs Futur I (werden + infinitive)",
    summary: "German often uses the present tense for future with time words. Futur I is used for emphasis, promises, or assumptions.",
    deep: `
      <div class="box">
        <p><strong>Most common:</strong> Present + time expression.</p>
        <p><strong>Futur I:</strong> <em>werden</em> + infinitive can sound more formal or emphatic.</p>
        <div class="divider"></div>
        <p><strong>Also used for assumptions:</strong> “Er wird schon zu Hause sein.” ≈ “He’s probably at home.”</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich <strong>gehe</strong> morgen zum Arzt. (very common)</p>
        <p>Ich <strong>werde</strong> morgen zum Arzt <strong>gehen</strong>. (more emphatic)</p>
        <p>Er <strong>wird</strong> jetzt im Büro <strong>sein</strong>. (assumption)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common:</strong> overusing Futur I because English does.</p>
        <p><strong>Better:</strong> default to present for future; use Futur I when you want that extra tone.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Rewrite as natural German future (use present + time word):</p>
        <ul>
          <li>I will meet you tomorrow.</li>
          <li>We will travel next week.</li>
        </ul>
      </div>
    `
  },

  {
    id: "futur2",
    level: "C1",
    tags: ["Tenses","Verbs","Style"],
    title: "Futur II (will have done / assumption about the past)",
    summary: "Futur II expresses completion before a future point or assumptions about the past: werden + Partizip II + haben/sein.",
    deep: `
      <div class="box">
        <p><strong>Two main uses:</strong></p>
        <ul>
          <li><strong>Completion in the future:</strong> Bis morgen <em>werde</em> ich das <em>geschafft haben</em>.</li>
          <li><strong>Assumption about the past:</strong> Er <em>wird</em> das <em>vergessen haben</em>. (He probably forgot.)</li>
        </ul>
        <p class="muted"><strong>Form:</strong> werden + Partizip II + haben/sein</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Bis 18 Uhr <strong>werde</strong> ich alles <strong>erledigt haben</strong>.</p>
        <p>Sie <strong>wird</strong> den Zug <strong>verpasst haben</strong>. (assumption)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> using it when simple future is enough.</p>
        <p><strong>Check:</strong> Is there “by then / already” or “probably”? If not, Futur II may be overkill.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Make Futur II sentences:</p>
        <ul>
          <li>by tomorrow / I / finish / the report</li>
          <li>he / probably / forget / it</li>
        </ul>
      </div>
    `
  },

  {
    id: "modals",
    level: "A2",
    tags: ["Word order","Verbs"],
    title: "Modal Verbs: word order + meaning differences",
    summary: "Modal in position 2, main verb at the end in infinitive. Nuance: müssen vs sollen; dürfen vs können.",
    deep: `
      <div class="box">
        <p><strong>Structure:</strong> conjugated modal (pos. 2) + … + infinitive at the end.</p>
        <p><strong>Meaning nuance:</strong></p>
        <ul>
          <li><strong>müssen</strong> = obligation</li>
          <li><strong>sollen</strong> = external expectation / recommendation</li>
          <li><strong>dürfen</strong> = permission</li>
          <li><strong>können</strong> = ability / possibility</li>
          <li><strong>wollen</strong> = intention</li>
          <li><strong>möchten</strong> = polite desire</li>
        </ul>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich <strong>muss</strong> heute <strong>arbeiten</strong>.</p>
        <p>Ich <strong>soll</strong> mehr Wasser <strong>trinken</strong>.</p>
        <p><strong>Darf</strong> ich hier <strong>sitzen</strong>?</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common:</strong> forgetting infinitive at the end.</p>
        <p><strong>Fix:</strong> always “close the sentence” with the main infinitive.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Choose the best modal:</p>
        <ul>
          <li>Doctor’s advice: Du ____ mehr schlafen. (sollen)</li>
          <li>Permission: ____ ich hier sitzen? (dürfen)</li>
          <li>Ability: Ich ____ gut schwimmen. (können)</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // A2 / B1 — CLAUSES + ORDER
  // --------------------------
  {
    id: "subordinate",
    level: "A2",
    tags: ["Clauses","Word order","Punctuation"],
    title: "Subordinate Clauses: weil / dass / wenn (verb-final)",
    summary: "Subordinating conjunction sends the conjugated verb to the end of its clause. A comma is usually required.",
    deep: `
      <div class="box">
        <p><strong>Rule:</strong> In subordinate clauses, the conjugated verb goes to the end.</p>
        <p><strong>Common conjunctions:</strong> weil, dass, wenn, obwohl, während, bevor, nachdem, falls</p>
        <div class="divider"></div>
        <p><strong>Two patterns:</strong></p>
        <ul>
          <li>Main clause + comma + subordinate clause</li>
          <li>Subordinate clause + comma + main clause (then main clause is still V2)</li>
        </ul>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich bleibe zu Hause, <strong>weil</strong> ich krank <strong>bin</strong>.</p>
        <p><strong>Wenn</strong> es regnet, <strong>bleibe</strong> ich zu Hause.</p>
        <p>Ich denke, <strong>dass</strong> er heute <strong>kommt</strong>.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Wrong:</strong> …weil ich <em>bin</em> krank.</p>
        <p><strong>Right:</strong> …weil ich krank <strong>bin</strong>.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Combine with <strong>weil</strong>:</p>
        <ul>
          <li>Ich komme nicht. Ich bin müde.</li>
          <li>Wir bleiben hier. Es ist zu spät.</li>
        </ul>
      </div>
    `
  },

  {
    id: "commas-rules",
    level: "B2",
    tags: ["Punctuation","Clauses","Writing"],
    title: "Comma Rules (high-impact for clarity)",
    summary: "Commas are required with subordinate clauses and relative clauses, optional/structured with infinitive clauses, and rule-based in lists.",
    deep: `
      <div class="box">
        <p><strong>Commas are required:</strong></p>
        <ul>
          <li>Subordinate clauses: Ich bleibe, weil ich krank bin.</li>
          <li>Relative clauses: Das ist der Mann, den ich kenne.</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Infinitive clauses:</strong> commas often used when:</p>
        <ul>
          <li>introduced by <strong>um / ohne / statt</strong>: Ich komme, um zu helfen.</li>
          <li>they are long or have their own objects: Er versprach, mir sofort zu antworten.</li>
          <li>they depend on a noun/adjective: Es ist eine gute Idee, früher zu gehen.</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Lists:</strong> comma between items; no comma before “und/oder” in simple lists.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich glaube, <strong>dass</strong> er heute kommt.</p>
        <p>Das ist die Frau, <strong>die</strong> hier wohnt.</p>
        <p>Ich gehe einkaufen, <strong>um</strong> Essen zu kaufen.</p>
        <p>Ich kaufe Brot, Käse und Obst.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common:</strong> forgetting comma before subordinate/relative clauses.</p>
        <p><strong>Fix:</strong> if there’s a verb-final clause with a conjunction/relative pronoun, add the comma.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Add commas where necessary:</p>
        <ul>
          <li>Ich bleibe zu Hause weil ich krank bin.</li>
          <li>Das ist ein Buch das ich gern lese.</li>
          <li>Er hat versprochen mir zu helfen.</li>
        </ul>
      </div>
    `
  },

  {
    id: "relative-clauses",
    level: "B1",
    tags: ["Clauses","Cases","Punctuation"],
    title: "Relative Clauses: case depends on function inside clause",
    summary: "Gender/number comes from the noun; case comes from the pronoun’s role in the relative clause.",
    deep: `
      <div class="box">
        <p><strong>Two-step method:</strong></p>
        <ol>
          <li>Noun → gives gender/number.</li>
          <li>Role inside relative clause → gives case (Nom/Akk/Dat/Gen).</li>
        </ol>
        <p><strong>Remember:</strong> relative clauses always take commas.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Das ist der Mann, <strong>der</strong> hier wohnt. (subject → Nom)</p>
        <p>Das ist der Mann, <strong>den</strong> ich kenne. (object → Akk)</p>
        <p>Das ist der Mann, <strong>dem</strong> ich helfe. (Dat)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> choosing case from the main clause.</p>
        <p><strong>Fix:</strong> decide case only by the relative clause’s internal role.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Fill the relative pronoun:</p>
        <ul>
          <li>Das ist die Frau, ____ ich gestern gesehen habe.</li>
          <li>Das ist der Mann, ____ ich vertraue. (vertrauen = dative)</li>
        </ul>
      </div>
    `
  },

  {
    id: "zu-infinitive",
    level: "B1",
    tags: ["Clauses","Verbs","Punctuation"],
    title: "Infinitive Clauses with zu (um…zu / ohne…zu / statt…zu)",
    summary: "Use zu-infinitives when the subject is the same or implied. Use 'damit' when subjects differ.",
    deep: `
      <div class="box">
        <p><strong>Main idea:</strong> a compact alternative to full subordinate clauses.</p>
        <p><strong>Core forms:</strong></p>
        <ul>
          <li><strong>zu</strong> + infinitive: Ich versuche, früher <strong>zu schlafen</strong>.</li>
          <li><strong>um … zu</strong> (purpose): Ich lerne, <strong>um</strong> die Prüfung <strong>zu bestehen</strong>.</li>
          <li><strong>ohne … zu</strong>: Er ging, <strong>ohne</strong> etwas <strong>zu sagen</strong>.</li>
          <li><strong>statt … zu</strong>: Sie schaut Serien, <strong>statt</strong> zu lernen.</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Subject test:</strong></p>
        <ul>
          <li>Same subject → um…zu works.</li>
          <li>Different subject → use <strong>damit</strong>: Ich lerne, <strong>damit</strong> meine Eltern stolz sind.</li>
        </ul>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich rufe an, <strong>um</strong> einen Termin <strong>zu machen</strong>.</p>
        <p>Er ging, <strong>ohne</strong> sich <strong>zu verabschieden</strong>.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> wrong subject with um…zu.</p>
        <p><strong>Better:</strong> Ich lerne, <strong>damit</strong> meine Eltern stolz <strong>sind</strong>.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Choose <strong>um…zu</strong> or <strong>damit</strong>:</p>
        <ul>
          <li>Ich spare Geld, ____ ich ein Auto kaufen kann.</li>
          <li>Ich spare Geld, ____ ein Auto zu kaufen.</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // B1 / B2 — GENITIVE
  // --------------------------
  {
    id: "genitive",
    level: "B1",
    tags: ["Cases","Prepositions","Writing"],
    title: "Genitive (Wessen?) + genitive prepositions (wegen, trotz, während …)",
    summary: "Genitive marks possession/association and is important in formal German. Many prepositions require genitive (especially in writing).",
    deep: `
      <div class="box">
        <p><strong>Genitive meaning:</strong> “of / 's”.</p>
        <p><strong>Forms (definite articles):</strong> des (masc/neut), der (fem/pl).</p>
        <p class="muted">Often masc/neut nouns add -s/-es: des Mann<strong>es</strong>, des Kind<strong>es</strong>.</p>
        <div class="divider"></div>
        <p><strong>Genitive prepositions (common):</strong> wegen, trotz, während, statt/anstatt, (außerhalb/innerhalb)</p>
        <p><strong>Everyday alternative:</strong> “von + dative” often replaces genitive in speech.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Das ist das Auto <strong>des</strong> Mann<strong>es</strong>.</p>
        <p>Die Tasche <strong>der</strong> Frau.</p>
        <p><strong>Wegen</strong> des Wetters bleiben wir zu Hause.</p>
        <p>Das Auto <strong>von dem</strong> Mann. (more spoken)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> mixing dative with genitive prepositions in formal writing.</p>
        <p><strong>Better:</strong> In writing, prefer: wegen <strong>des</strong> / trotz <strong>der</strong> …</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Fill in genitive:</p>
        <ul>
          <li>Wegen ____ (der Lärm) konnte ich nicht schlafen.</li>
          <li>Trotz ____ (das Problem) haben wir gewonnen.</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // B1 / B2 — PASSIVE
  // --------------------------
  {
    id: "passive-action-state",
    level: "B2",
    tags: ["Voice","Verbs"],
    title: "Passive: Action (werden) vs State (sein)",
    summary: "werden + Partizip II = action/process; sein + Partizip II = resulting state/condition.",
    deep: `
      <div class="box">
        <p><strong>Action passive (Vorgangspassiv):</strong> focuses on what is happening (process).</p>
        <p><strong>State passive (Zustandspassiv):</strong> describes the result/state.</p>
        <div class="divider"></div>
        <p><strong>Agent:</strong> use <em>von</em> for people/agents and <em>durch</em> for means/cause.</p>
        <p class="muted">Das Haus wird <strong>von</strong> einer Firma renoviert. / Der Fehler wird <strong>durch</strong> Stress verursacht.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Die Tür <strong>wird</strong> (gerade) <strong>geöffnet</strong>. (process)</p>
        <p>Die Tür <strong>ist</strong> <strong>geöffnet</strong>. (state)</p>
        <p>Der Text <strong>wird</strong> korrigiert. → Der Text <strong>ist</strong> korrigiert.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> translating “is opened” as “ist geöffnet” when you mean “is being opened”.</p>
        <p><strong>Fix:</strong> “is being opened” → <strong>wird geöffnet</strong>.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Choose werden or sein:</p>
        <ul>
          <li>Das Essen ____ gekocht. (state)</li>
          <li>Das Essen ____ gerade gekocht. (process)</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // B1 / B2 — KONJUNKTIV I/II
  // --------------------------
  {
    id: "konjunktiv2",
    level: "B1",
    tags: ["Mood","Politeness","Tenses"],
    title: "Konjunktiv II: politeness, wishes, unreal conditions (present & past)",
    summary: "Use for polite requests, hypotheticals, and unreal present/past. Often: würde + infinitive; common forms: wäre/hätte/könnte/müsste.",
    deep: `
      <div class="box">
        <p><strong>Politeness:</strong> Könnten Sie…? Würden Sie…?</p>
        <p><strong>Unreal present:</strong> Wenn ich Zeit <strong>hätte</strong>, <strong>würde</strong> ich…</p>
        <p><strong>Unreal past:</strong> Wenn ich Zeit <strong>gehabt hätte</strong>, <strong>wäre</strong> ich gekommen.</p>
        <div class="divider"></div>
        <p><strong>Why not only “würde”:</strong> Using real K II forms (wäre/hätte/könnte/müsste) sounds more natural.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p><strong>Könnten</strong> Sie mir helfen?</p>
        <p>Wenn ich Geld <strong>hätte</strong>, <strong>würde</strong> ich reisen.</p>
        <p>Wenn ich früher aufgestanden <strong>wäre</strong>, <strong>hätte</strong> ich den Zug bekommen.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common:</strong> *Wenn ich Geld hätte, ich würde reisen.</p>
        <p><strong>Right:</strong> Wenn ich Geld hätte, <strong>würde</strong> ich reisen. (verb second in main clause)</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Finish the sentence:</p>
        <ul>
          <li>Wenn ich mehr Zeit ____, ____ ich jeden Tag Deutsch.</li>
          <li>____ Sie bitte das Fenster schließen?</li>
        </ul>
      </div>
    `
  },

  {
    id: "konjunktiv1",
    level: "B2",
    tags: ["Mood","Style","Writing"],
    title: "Konjunktiv I: reported speech (journalistic distance)",
    summary: "Used to report statements neutrally (news/reporting). Especially common with sein/haben/werden; if ambiguous, German often uses Konjunktiv II.",
    deep: `
      <div class="box">
        <p><strong>Function:</strong> distance the narrator from the claim: “this is reported, not confirmed by me.”</p>
        <p><strong>Common forms:</strong> er <strong>sei</strong>, er <strong>habe</strong>, er <strong>werde</strong></p>
        <div class="divider"></div>
        <p><strong>Fallback options:</strong></p>
        <ul>
          <li>Konjunktiv II distancing: er <em>wäre</em>, er <em>hätte</em>…</li>
          <li>Reporting verb + dass: Er sagte, dass… (less journalistic)</li>
        </ul>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Er sagt, er <strong>sei</strong> krank.</p>
        <p>Sie behauptet, sie <strong>habe</strong> nichts gesehen.</p>
        <p>Der Sprecher erklärte, die Lage <strong>werde</strong> sich verbessern.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common:</strong> overusing Konjunktiv I in casual speaking (sounds too formal).</p>
        <p><strong>Tip:</strong> treat it as a “news/reporting” tool.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Rewrite into reported speech (Konj. I):</p>
        <ul>
          <li>Er: „Ich bin müde.“</li>
          <li>Sie: „Ich habe keine Zeit.“</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // B2 — ADJECTIVE ENDINGS (FULL)
  // --------------------------
  {
    id: "adjective-endings",
    level: "B2",
    tags: ["Adjectives","Cases","Articles"],
    title: "Adjective Endings: strong / weak / mixed (complete system)",
    summary: "Adjective endings encode case+gender+number. Pattern depends on article type: der-words (weak), ein-words (mixed), no article (strong).",
    deep: `
      <div class="box">
        <p><strong>Big picture:</strong> the adjective ending carries grammatical information when the article doesn’t show enough.</p>
        <ul>
          <li><strong>Weak</strong> (der-words): article shows case → adjective mostly -e/-en.</li>
          <li><strong>Mixed</strong> (ein-words): adjective supplies missing signals (esp. Nom masc/neut, Akk neut).</li>
          <li><strong>Strong</strong> (no article): adjective carries full case signal.</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Mixed (ein-words) table (high frequency):</strong></p>
        <table class="grammar-table">
          <tr><th></th><th>masc</th><th>fem</th><th>neut</th><th>plural</th></tr>
          <tr><td>Nom</td><td>ein gut<strong>er</strong></td><td>eine gut<strong>e</strong></td><td>ein gut<strong>es</strong></td><td>keine gut<strong>en</strong></td></tr>
          <tr><td>Akk</td><td>einen gut<strong>en</strong></td><td>eine gut<strong>e</strong></td><td>ein gut<strong>es</strong></td><td>keine gut<strong>en</strong></td></tr>
          <tr><td>Dat</td><td>einem gut<strong>en</strong></td><td>einer gut<strong>en</strong></td><td>einem gut<strong>en</strong></td><td>keinen gut<strong>en</strong></td></tr>
        </table>
        <p class="muted"><strong>Shortcut:</strong> dative is “-en heavy” (often -en everywhere).</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich kaufe <strong>einen frischen</strong> Apfel. (Akk masc)</p>
        <p>Wir helfen <strong>einer netten</strong> Frau. (Dat fem)</p>
        <p>Das sind <strong>keine guten</strong> Ideen. (Nom plural)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> memorizing all tables at once.</p>
        <p><strong>Better:</strong> master mixed + dative first, then weak, then strong.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Add correct endings:</p>
        <ul>
          <li>Ich habe ein neu__ Auto.</li>
          <li>Wir sprechen mit einem freundlich__ Mann.</li>
          <li>Das sind die interessant__ Bücher.</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // B2/C1 — DA-/WO- COMPOUNDS
  // --------------------------
  {
    id: "da-wo-compounds",
    level: "B2",
    tags: ["Pronouns","Prepositions","Clauses"],
    title: "Da- / Wo- Compounds (daran, worauf, wovon…)",
    summary: "When a preposition refers to a thing/idea (not a person), German often uses da- compounds (daran, damit, darauf). Questions use wo- (woran?).",
    deep: `
      <div class="box">
        <p><strong>Use da- compounds:</strong> for “about it / to it / with it” when “it” is not a person.</p>
        <p class="muted">Ich denke <strong>daran</strong>. / Ich freue mich <strong>darauf</strong>.</p>
        <div class="divider"></div>
        <p><strong>Questions use wo-:</strong></p>
        <p class="muted">Woran denkst du? Worauf freust du dich?</p>
        <div class="divider"></div>
        <p><strong>People:</strong> typically use preposition + pronoun:</p>
        <p class="muted">Ich denke <strong>an ihn</strong>. / Ich spreche <strong>mit ihr</strong>.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich freue mich <strong>darauf</strong>, dich zu sehen.</p>
        <p>Woran denkst du?</p>
        <p>Ich spreche <strong>mit ihm</strong>. (person)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common:</strong> *Ich denke an es.</p>
        <p><strong>Better:</strong> Ich denke <strong>daran</strong>.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Rewrite using da-/wo-:</p>
        <ul>
          <li>Ich warte auf es. → …</li>
          <li>An was denkst du? → …</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // C1 — VERB CLUSTERS + DOUBLE INFINITIVE
  // --------------------------
  {
    id: "verb-clusters",
    level: "C1",
    tags: ["Word order","Verbs","Clauses"],
    title: "Verb clusters & double infinitive (Ersatzinfinitiv)",
    summary: "At C1, multiple verbs stack at clause end. With modals in Perfekt, German often uses a double infinitive (sagen können).",
    deep: `
      <div class="box">
        <p><strong>Verb clusters:</strong> several verbs appear at the end (especially in subordinate clauses).</p>
        <p><strong>Ersatzinfinitiv:</strong> with modals, the modal remains infinitive in Perfekt:</p>
        <ul>
          <li>Ich habe es nicht <strong>sagen können</strong>. (NOT: gesagt gekonnt)</li>
          <li>Er hat kommen <strong>müssen</strong>.</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Reading strategy:</strong> in long sentences, scan from the end to decode tense/mood/voice.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Er sagt, dass das Problem schnell <strong>gelöst werden muss</strong>.</p>
        <p>Sie meint, dass er das nicht <strong>gesehen haben kann</strong>.</p>
        <p>Ich habe früher gehen <strong>müssen</strong>.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> forcing “one verb at a time” English logic.</p>
        <p><strong>Fix:</strong> treat the verb cluster as one “ending package”.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Identify the meaning by reading from the end:</p>
        <ul>
          <li>…, dass er das Problem nicht hätte lösen können.</li>
          <li>…, weil die Daten ausgewertet worden sein sollen.</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // C1 — NOMINALIZATION
  // --------------------------
  {
    id: "c1-style-nominalization",
    level: "C1",
    tags: ["Style","Writing"],
    title: "Nominalization (Nominalstil) and academic phrasing",
    summary: "Formal German often turns verbs into nouns (Analyse der Entwicklung), increasing density and abstraction. Great for reports; easy to overdo.",
    deep: `
      <div class="box">
        <p><strong>When it helps:</strong> academic writing, reports, official communication.</p>
        <p><strong>When it hurts:</strong> too many nouns make text heavy and harder to read.</p>
        <div class="divider"></div>
        <p><strong>Common patterns:</strong></p>
        <ul>
          <li>-ung: entwickeln → Entwicklung</li>
          <li>-keit/-heit: möglich → Möglichkeit</li>
          <li>-tion: informieren → Information</li>
          <li>support verb phrases: eine Entscheidung treffen, eine Untersuchung durchführen</li>
        </ul>
      </div>
    `,
    examples: `
      <div class="box">
        <p><strong>Verb style:</strong> Wir analysieren, wie sich der Markt entwickelt.</p>
        <p><strong>Nominal style:</strong> Wir führen eine Analyse der Marktentwicklung durch.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> nominalizing everything (stiff, hard to read).</p>
        <p><strong>Better:</strong> nominalize key concepts; keep supporting sentences verbal.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Make these more formal:</p>
        <ul>
          <li>Wir untersuchen, wie sich das Klima verändert.</li>
          <li>Wir entscheiden, ob das Projekt weiterläuft.</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // C1/C2 — MODAL PARTICLES
  // --------------------------
  {
    id: "modal-particles",
    level: "C1",
    tags: ["Style","Spoken German"],
    title: "Modal Particles (doch, ja, mal, denn, halt, eben, wohl…)",
    summary: "Modal particles add tone and attitude (often untranslatable). They are key for natural spoken German and pragmatic nuance.",
    deep: `
      <div class="box">
        <p><strong>What they do:</strong> soften requests, express surprise, signal shared knowledge, add persuasion or resignation.</p>
        <div class="divider"></div>
        <p><strong>High-frequency meanings (rough):</strong></p>
        <ul>
          <li><strong>doch</strong>: “come on / after all” (encouragement or contradiction)</li>
          <li><strong>ja</strong>: “as you know / indeed” (shared knowledge or surprise)</li>
          <li><strong>mal</strong>: softens (try it / just)</li>
          <li><strong>denn</strong> (in questions): friendly curiosity (“so…?”)</li>
          <li><strong>halt/eben</strong>: resignation (“that’s just how it is”)</li>
          <li><strong>wohl</strong>: probability (“probably”)</li>
        </ul>
        <p class="muted"><strong>Note:</strong> the same particle can change meaning based on intonation and context.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Komm <strong>doch</strong> rein!</p>
        <p>Das ist <strong>ja</strong> interessant! (surprise)</p>
        <p>Warte <strong>mal</strong> kurz.</p>
        <p>Wie heißt du <strong>denn</strong>?</p>
        <p>Er kommt <strong>wohl</strong> später.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> using particles in formal writing.</p>
        <p><strong>Tip:</strong> particles are mainly spoken/informal; use them to sound natural in dialogue.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Add a particle to match the intention:</p>
        <ul>
          <li>Encouragement: Komm ____ mit!</li>
          <li>Soft request: Hör ____ zu.</li>
          <li>Probability: Er hat es ____ vergessen.</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // C2 — IDIOMATIC LOGIC
  // --------------------------

  {
    id: "n-declension",
    level: "B2",
    tags: ["Nouns","Cases","Writing"],
    title: "N-Declension (weak masculine nouns)",
    summary: "Some masculine nouns take -(e)n in all cases except nominative singular (der Student → des Studenten, dem Studenten, den Studenten).",
    deep: `
      <div class="box">
        <p><strong>Core rule:</strong> Weak masculine nouns add <strong>-(e)n</strong> in Akk/Dat/Gen singular (and usually in plural too).</p>
        <p><strong>Typical groups:</strong></p>
        <ul>
          <li>People/roles: der Student, der Kollege, der Junge, der Kunde, der Mensch</li>
          <li>Animals: der Hase, der Löwe</li>
          <li>Some -e nouns: der Name (special), der Gedanke (often)</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Special:</strong> der Name → des Namens / dem Namen / den Namen (Gen has -ns).</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>NOM: der Student</p>
        <p>AKK: Ich sehe den Student<strong>en</strong>.</p>
        <p>DAT: Ich helfe dem Student<strong>en</strong>.</p>
        <p>GEN: Das ist das Buch des Student<strong>en</strong>.</p>
        <p>Special: der Name → der Name / den Namen / dem Namen / des Namens</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common:</strong> *Ich sehe den Student.</p>
        <p><strong>Right:</strong> Ich sehe den Student<strong>en</strong>.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Add the correct form:</p>
        <ul>
          <li>Ich kenne den ____ (Kollege).</li>
          <li>Das ist der Hund des ____ (Junge).</li>
          <li>Ich helfe dem ____ (Student).</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // B1/B2 — VERB + PREPOSITION (FIXED COMBINATIONS)
  // --------------------------
  {
    id: "verb-prep-combos",
    level: "B1",
    tags: ["Prepositions","Verbs","Cases"],
    title: "Verb + Preposition (fixed combinations you must learn)",
    summary: "Many verbs require a specific preposition + case (warten auf + Akk, teilnehmen an + Dat). Treat them as one vocabulary unit.",
    deep: `
      <div class="box">
        <p><strong>Rule:</strong> The preposition is part of the verb’s “frame.” Don’t translate word-by-word.</p>
        <p><strong>High-frequency sets:</strong></p>
        <ul>
          <li><strong>warten auf</strong> (+ Akk)</li>
          <li><strong>sich freuen auf</strong> (+ Akk) vs <strong>sich freuen über</strong> (+ Akk)</li>
          <li><strong>teilnehmen an</strong> (+ Dat)</li>
          <li><strong>sprechen mit</strong> (+ Dat) / <strong>sprechen über</strong> (+ Akk)</li>
          <li><strong>denken an</strong> (+ Akk)</li>
          <li><strong>sich interessieren für</strong> (+ Akk)</li>
          <li><strong>abhängen von</strong> (+ Dat)</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Clause objects:</strong> use da-/wo- compounds:</p>
        <p class="muted">Ich freue mich <strong>darauf</strong>, dass… / Woran denkst du?</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich warte <strong>auf den</strong> Bus.</p>
        <p>Wir nehmen <strong>an der</strong> Sitzung teil.</p>
        <p>Ich freue mich <strong>auf den</strong> Urlaub. (looking forward)</p>
        <p>Ich freue mich <strong>über das</strong> Geschenk. (happy about)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> wrong case after the preposition.</p>
        <p><strong>Fix:</strong> learn it as “warten auf + Akk”, not just “warten auf”.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Choose the correct preposition + case:</p>
        <ul>
          <li>Ich interessiere mich ____ Kunst. (für + Akk)</li>
          <li>Wir nehmen ____ Kurs teil. (an + Dat)</li>
          <li>Das hängt ____ Wetter ab. (von + Dat)</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // B2/C1 — MITTELFELD ORDER + TEKAMOLO + PRONOUNS
  // --------------------------
  {
    id: "mittelfeld-tekamolo",
    level: "B2",
    tags: ["Word order","Style","Clauses"],
    title: "Mittelfeld Word Order: TEKAMOLO + pronoun ordering",
    summary: "In the “middle field” (between finite verb and verb ending), German prefers a default order: Time–Cause–Manner–Place (TEKAMOLO) and pronouns early.",
    deep: `
      <div class="box">
        <p><strong>Sentence zones (simplified):</strong></p>
        <ul>
          <li><strong>Left bracket:</strong> finite verb (V2)</li>
          <li><strong>Mittelfeld:</strong> subjects/objects/adverbs</li>
          <li><strong>Right bracket:</strong> infinitives/participles/separable prefix</li>
        </ul>
        <div class="divider"></div>
        <p><strong>TEKAMOLO (common default):</strong> <strong>Te</strong>mporal → <strong>Ka</strong>usal → <strong>Mo</strong>dal (manner) → <strong>Lo</strong>kal</p>
        <p class="muted">Ich arbeite <strong>heute</strong> <strong>wegen der Prüfung</strong> <strong>konzentriert</strong> <strong>zu Hause</strong>.</p>
        <div class="divider"></div>
        <p><strong>Pronoun tendency:</strong> pronouns usually come before full noun objects.</p>
        <p class="muted">Ich gebe <strong>es</strong> dem Mann. / Ich gebe dem Mann <strong>das Buch</strong>.</p>
        <p><strong>When you break it:</strong> emphasis/focus, contrast, rhythm. (Advanced writing uses this deliberately.)</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Ich habe <strong>heute</strong> <strong>mit großer Freude</strong> <strong>in Berlin</strong> gearbeitet.</p>
        <p>Ich gebe <strong>ihm</strong> das Buch. (pronoun first)</p>
        <p>Ich gebe <strong>es</strong> dem Lehrer. (Akk pronoun before Dat noun)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Common:</strong> random adverb order.</p>
        <p><strong>Fix:</strong> default to TEKAMOLO, then deviate only for emphasis.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Put in natural order (TEKAMOLO):</p>
        <ul>
          <li>Ich lerne (in der Bibliothek) (heute) (konzentriert).</li>
          <li>Wir treffen uns (wegen des Projekts) (morgen) (im Büro).</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // B2/C1 — PASSIVE PERFECT/PLUPERFECT + ALTERNATIVES
  // --------------------------
  {
    id: "passive-perfect-forms",
    level: "C1",
    tags: ["Voice","Tenses","Writing"],
    title: "Passive in Perfekt/Plusquamperfekt + alternatives (man / sich lassen)",
    summary: "Advanced passive forms appear often in reports. Also learn alternatives: man-constructions and 'sich lassen + Infinitiv'.",
    deep: `
      <div class="box">
        <p><strong>Action passive (werden) recap:</strong> wird gemacht.</p>
        <p><strong>Perfekt passive:</strong> ist gemacht <strong>worden</strong> (NOT: ist gemacht).</p>
        <p><strong>Plusquamperfekt passive:</strong> war gemacht <strong>worden</strong>.</p>
        <div class="divider"></div>
        <p><strong>Alternatives (often better style):</strong></p>
        <ul>
          <li><strong>man</strong>: Man hat die Daten ausgewertet. (clear, active-ish)</li>
          <li><strong>sich lassen</strong>: Das lässt sich leicht erklären. (can be explained)</li>
          <li><strong>sein + adjective</strong>: Die Tür ist offen. (state)</li>
        </ul>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Der Vertrag <strong>ist</strong> gestern unterschrieben <strong>worden</strong>.</p>
        <p>Der Vertrag <strong>war</strong> bereits unterschrieben <strong>worden</strong>, als wir ankamen.</p>
        <p><strong>Man</strong> hat die Daten ausgewertet.</p>
        <p>Das <strong>lässt sich</strong> leicht erklären.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> confusing state passive with Perfekt passive.</p>
        <p><strong>State:</strong> Die Tür ist geöffnet. (open)</p>
        <p><strong>Perfekt action passive:</strong> Die Tür ist geöffnet <strong>worden</strong>. (was opened)</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Rewrite using a passive alternative:</p>
        <ul>
          <li>Die Firma repariert das Gerät. → (man / sich lassen / passive)</li>
          <li>Jemand kann das Problem leicht lösen. → (sich lassen)</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // B2/C1 — PARTICIPLES + REDUCED RELATIVE CLAUSES
  // --------------------------
  {
    id: "participle-adjectives",
    level: "B2",
    tags: ["Participles","Adjectives","Writing"],
    title: "Participles as Adjectives (Partizip I vs II)",
    summary: "Partizip I describes an active ongoing quality (lachend), Partizip II a completed/passive/resulting quality (geschlossen).",
    deep: `
      <div class="box">
        <p><strong>Partizip I</strong> (present participle): verb + -d → <em>lachend, schlafend, wartend</em></p>
        <p class="muted">Usually means “doing X” / ongoing: ein <strong>lachendes</strong> Kind (a child that is laughing).</p>
        <div class="divider"></div>
        <p><strong>Partizip II</strong> (past participle): often means result/passive: eine <strong>geschlossene</strong> Tür (a closed door).</p>
        <p><strong>They behave like adjectives:</strong> adjective endings apply.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>ein <strong>wartender</strong> Kunde (waiting customer)</p>
        <p>die <strong>geschriebene</strong> E-Mail (written email)</p>
        <p>ein <strong>interessierendes</strong> Thema (interesting topic)</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> mixing meaning.</p>
        <p><strong>Hint:</strong> Partizip I ≈ active/ongoing; Partizip II ≈ result/passive.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Choose Partizip I or II:</p>
        <ul>
          <li>eine (öffnende/geöffnete) Tür (the door is being opened vs is open/was opened)</li>
          <li>ein (lächelnder/gelächelter) Mann (only Partizip I makes sense here)</li>
        </ul>
      </div>
    `
  },

  {
    id: "reduced-relative-clauses",
    level: "C1",
    tags: ["Participles","Clauses","Writing"],
    title: "Reduced Relative Clauses (participial constructions)",
    summary: "German often shortens relative clauses into participle phrases in writing: 'die in Berlin lebenden Menschen' instead of 'die Menschen, die in Berlin leben'.",
    deep: `
      <div class="box">
        <p><strong>Why it appears:</strong> academic/journalistic style prefers compact information packaging.</p>
        <p><strong>Two common patterns:</strong></p>
        <ul>
          <li><strong>Partizip I</strong> for ongoing/action: die <strong>in Berlin lebenden</strong> Menschen</li>
          <li><strong>Partizip II</strong> for completed/passive: die <strong>von Experten geprüften</strong> Daten</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Important:</strong> participle phrases still need adjective endings and can get long — use carefully for readability.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Die Menschen, die in Berlin leben → die <strong>in Berlin lebenden</strong> Menschen</p>
        <p>Die Daten, die von Experten geprüft wurden → die <strong>von Experten geprüften</strong> Daten</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> creating huge noun stacks.</p>
        <p><strong>Fix:</strong> if the phrase becomes hard to parse, switch back to a normal relative clause.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Rewrite shorter (participial):</p>
        <ul>
          <li>Die Studenten, die auf die Prüfung warten, …</li>
          <li>Die Ergebnisse, die gestern veröffentlicht wurden, …</li>
        </ul>
      </div>
    `
  },

  // --------------------------
  // C1 — ADVANCED CONNECTORS
  // --------------------------
  {
    id: "advanced-connectors",
    level: "C1",
    tags: ["Clauses","Style","Writing"],
    title: "Advanced Connectors (wenngleich, alldieweil, insofern, zumal, sofern …)",
    summary: "C1/C2 texts use connectors that express precise logic (concession, limitation, justification). Learn meaning + clause type (subordinate vs adverbial).",
    deep: `
      <div class="box">
        <p><strong>Key idea:</strong> many advanced connectors introduce subordinate clauses → verb-final + comma.</p>
        <p><strong>High-value connectors:</strong></p>
        <ul>
          <li><strong>wenngleich</strong> = although (formal concession)</li>
          <li><strong>zumal</strong> = especially since (adds strong reason)</li>
          <li><strong>sofern</strong> = provided that (condition)</li>
          <li><strong>insofern (als …)</strong> = insofar as (scope/limitation)</li>
          <li><strong>alldieweil</strong> = because/while (very formal/rare; recognize in reading)</li>
        </ul>
        <div class="divider"></div>
        <p><strong>Register tip:</strong> Some are mostly written. Use them in writing after you can use the simpler ones correctly.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p><strong>Wenngleich</strong> die Daten begrenzt <strong>sind</strong>, lassen sich Trends erkennen.</p>
        <p>Wir sollten gehen, <strong>zumal</strong> es schon spät <strong>ist</strong>.</p>
        <p><strong>Sofern</strong> du Zeit <strong>hast</strong>, können wir uns treffen.</p>
        <p>Das ist richtig, <strong>insofern als</strong> die Annahmen plausibel <strong>sind</strong>.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p><strong>Trap:</strong> forgetting verb-final in subordinate clauses.</p>
        <p><strong>Fix:</strong> treat them like weil/dass: comma + verb at end.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Complete with a connector (choose one): wenngleich / sofern / zumal</p>
        <ul>
          <li>____ du morgen Zeit hast, können wir telefonieren.</li>
          <li>Wir bleiben zu Hause, ____ es stark regnet.</li>
          <li>____ er wenig Erfahrung hat, hat er gute Ideen.</li>
        </ul>
      </div>
    `
  },



  // ════════════════════════════════════════════════════════
  //  C2 — MASTERY
  // ════════════════════════════════════════════════════════

  {
    id: "c2-idiomatic-logic",
    level: "C2",
    tags: ["Style","Connectors","Writing"],
    title: "C2 Logic Templates: je…desto, es sei denn, geschweige denn, nicht nur…sondern auch",
    summary: "C2 connectors and logical templates for nuanced argumentation: je…desto, es sei denn (unless), geschweige denn (let alone), nicht zuletzt (not least), demzufolge (consequently).",
    deep: `
      <div class="box">
        <p><strong>je … desto/umso:</strong> the more … the more. Main clause after desto is inverted.</p>
        <p class="muted">Je mehr ich lerne, <strong>desto</strong> besser werde ich.</p>
        <div class="divider"></div>
        <p><strong>es sei denn(, dass):</strong> unless</p>
        <p class="muted">Ich komme morgen, <strong>es sei denn</strong>, es regnet.</p>
        <div class="divider"></div>
        <p><strong>geschweige denn:</strong> let alone (follows something even more impossible)</p>
        <p class="muted">Er kann kaum lesen, <strong>geschweige denn</strong> schreiben.</p>
        <div class="divider"></div>
        <p><strong>nicht nur … sondern auch:</strong> not only … but also</p>
        <p class="muted">Das ist <strong>nicht nur</strong> falsch, <strong>sondern auch</strong> gefährlich.</p>
        <div class="divider"></div>
        <p><strong>nicht zuletzt:</strong> not least (adds a final, weighty reason)</p>
        <p class="muted">Das gelingt, <strong>nicht zuletzt</strong> wegen seiner Geduld.</p>
        <div class="divider"></div>
        <p><strong>demzufolge / infolgedessen:</strong> consequently, as a result</p>
        <p class="muted">Die Studie war fehlerhaft. <strong>Demzufolge</strong> wurden die Ergebnisse zurückgezogen.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Je früher du anfängst, <strong>desto</strong> mehr Zeit hast du.</p>
        <p>Wir machen weiter, <strong>es sei denn</strong>, du hast Einwände.</p>
        <p>Er spricht kaum Englisch, <strong>geschweige denn</strong> Japanisch.</p>
        <p>Das Projekt war <strong>nicht nur</strong> teuer, <strong>sondern auch</strong> ineffizient.</p>
        <p>Die Daten fehlten. <strong>Demzufolge</strong> musste die Analyse wiederholt werden.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p>❌ Je mehr ich lerne, ich werde besser. → ✅ Je mehr ich lerne, <strong>desto besser werde</strong> ich. (inverted main clause)</p>
        <p>❌ geschweige denn + conjugated verb → ✅ geschweige denn + infinitive/noun: geschweige denn schreiben.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Fill in the connector:</p>
        <ul>
          <li>Er hat keine Zeit zu essen, ___ zu schlafen. (let alone)</li>
          <li>Ich komme, ___ du brauchst mich. (unless you need me)</li>
          <li>___ mehr wir üben, ___ besser werden wir.</li>
        </ul>
        <p class="muted">Answers: geschweige denn / es sei denn / Je / desto</p>
      </div>
    `
  },

  {
    id: "c2-advanced-passive",
    level: "C2",
    tags: ["Voice","Passive","Style"],
    title: "C2 Passive Mastery: All Tenses, Passiv mit Modalverb, bekommen-Passiv",
    summary: "Complete passive command: passive in all 7 tenses, passive with modal verbs, the bekommen/erhalten/kriegen-Passiv (dative passive), and stylistic choice between active/passive.",
    deep: `
      <div class="box">
        <p><strong>Full Vorgangspassiv tense chart:</strong></p>
        <table class="grammar-table">
          <tr><th>Tense</th><th>Formula</th><th>Example</th></tr>
          <tr><td>Präsens</td><td>wird + PPII</td><td>Das Haus wird gebaut.</td></tr>
          <tr><td>Präteritum</td><td>wurde + PPII</td><td>Das Haus wurde gebaut.</td></tr>
          <tr><td>Perfekt</td><td>ist + PPII + <strong>worden</strong></td><td>Das Haus ist gebaut worden.</td></tr>
          <tr><td>Plusquamperfekt</td><td>war + PPII + worden</td><td>Das Haus war gebaut worden.</td></tr>
          <tr><td>Futur I</td><td>wird + PPII + werden</td><td>Das Haus wird gebaut werden.</td></tr>
          <tr><td>Futur II</td><td>wird + PPII + worden + sein</td><td>Das Haus wird gebaut worden sein.</td></tr>
          <tr><td>Konjunktiv II</td><td>würde + PPII + werden</td><td>Das Haus würde gebaut werden.</td></tr>
        </table>
        <div class="divider"></div>
        <p><strong>Passiv + Modalverb:</strong> modal in pos. 2, PPII + werden at end.</p>
        <p class="muted">Das muss gemacht <strong>werden</strong>. / Das musste gemacht <strong>werden</strong>. / Das hat gemacht <strong>werden müssen</strong>.</p>
        <div class="divider"></div>
        <p><strong>bekommen-Passiv (dative passive):</strong> dative subject receives something.</p>
        <p class="muted">Ich <strong>bekomme</strong> das Paket <strong>geschickt</strong>. (= Das Paket wird mir geschickt.)</p>
        <p class="muted">Er <strong>bekam</strong> eine Medaille <strong>verliehen</strong>.</p>
        <p class="muted">Also: kriegen-Passiv (informal) and erhalten-Passiv (formal).</p>
        <div class="divider"></div>
        <p><strong>Stylistic alternatives (prefer in conversation):</strong></p>
        <p class="muted">man + aktiv | sich lassen + Infinitiv (Das lässt sich lösen.) | sein + zu + Inf. (Das ist zu beachten.)</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Das Gesetz <strong>ist</strong> letztes Jahr <strong>verabschiedet worden</strong>. <span class="muted">/ Perfekt passive</span></p>
        <p>Das Projekt <strong>muss abgeschlossen werden</strong>. <span class="muted">/ modal + passive</span></p>
        <p>Er <strong>bekam</strong> den Preis <strong>verliehen</strong>. <span class="muted">/ bekommen-Passiv</span></p>
        <p>Das <strong>lässt sich</strong> nicht beweisen. <span class="muted">/ natural alternative</span></p>
        <p>Das <strong>ist zu beachten</strong>. <span class="muted">/ sein+zu alternative</span></p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p>❌ ist gebaut <strong>geworden</strong> → ✅ ist gebaut <strong>worden</strong> (passive Perfekt: worden, not geworden!)</p>
        <p>❌ Das muss werden gemacht → ✅ Das muss gemacht <strong>werden</strong>.</p>
        <p>❌ Ich bekomme geschickt das Paket → ✅ Ich bekomme das Paket <strong>geschickt</strong>. (PPII at end)</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Transform:</p>
        <ul>
          <li>Active → Passive: Man hat das Auto repariert. → Das Auto ___.</li>
          <li>Active → bekommen-Passiv: Der Arzt verschreibt mir ein Medikament. → Ich ___ ein Medikament ___.</li>
          <li>Passive → sich lassen: Das Problem kann gelöst werden. → Das Problem ___.</li>
        </ul>
        <p class="muted">Answers: ist repariert worden / bekomme ... verschrieben / lässt sich lösen</p>
      </div>
    `
  },

  {
    id: "c2-extended-participial",
    level: "C2",
    tags: ["Clauses","Style","Reading","Writing"],
    title: "Extended Participial Attributes & Long Noun Phrases (newspaper/academic German)",
    summary: "German compresses entire relative clauses into pre-noun participial phrases. Essential for reading newspapers, law texts, and academic German. The longer the phrase between article and noun, the more formal the register.",
    deep: `
      <div class="box">
        <p><strong>The principle:</strong> Everything that would be a relative clause in English can sit between the article and the noun in German.</p>
        <div class="divider"></div>
        <table class="grammar-table">
          <tr><th>Type</th><th>Relative clause</th><th>Compressed attribute</th></tr>
          <tr><td>Active ongoing (PI)</td><td>die Studenten, die kommen</td><td>die <strong>kommenden</strong> Studenten</td></tr>
          <tr><td>Passive/completed (PII)</td><td>das Gesetz, das verabschiedet wurde</td><td>das <strong>verabschiedete</strong> Gesetz</td></tr>
          <tr><td>Must-be-done (zu+PI)</td><td>das Problem, das gelöst werden muss</td><td>das zu <strong>lösende</strong> Problem</td></tr>
        </table>
        <div class="divider"></div>
        <p><strong>Extended attributes</strong> include the full participial phrase:</p>
        <p class="muted">das von der Regierung im Jahr 2023 mit großer Mehrheit <strong>verabschiedete</strong> Gesetz</p>
        <p class="muted">(the law passed by the government in 2023 with a large majority)</p>
        <div class="divider"></div>
        <p><strong>Reading strategy:</strong> find the article → jump to the noun (it's always right before the verb or after the long phrase) → read the middle phrase as the relative clause.</p>
        <div class="divider"></div>
        <p><strong>Stacked noun phrases</strong> (very dense formal German):</p>
        <p class="muted">die anhaltende Diskussion über die mit dem Klimawandel verbundenen wirtschaftlichen Folgen</p>
        <p class="muted">(the ongoing discussion about the economic consequences associated with climate change)</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>die aus vielen Ländern <strong>stammenden</strong> Teilnehmer <span class="muted">/ the participants coming from many countries</span></p>
        <p>das noch zu <strong>lösende</strong> Problem <span class="muted">/ the problem still to be solved</span></p>
        <p>die in den letzten Jahren stark <strong>gestiegenen</strong> Energiepreise <span class="muted">/ energy prices that have risen sharply in recent years</span></p>
        <p>ein in der Öffentlichkeit kaum <strong>diskutiertes</strong> Thema <span class="muted">/ a topic barely discussed in public</span></p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p>❌ Missing adjective ending on participle: das gestartete Projekt<strong>e</strong> → ✅ das gestartete Projekt</p>
        <p>❌ Participial attribute after the noun → ✅ it must come BEFORE the noun.</p>
        <p>Tip: these constructions are almost exclusively written German. In speech, use relative clauses.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Compress to participial attribute:</p>
        <ul>
          <li>die Studie, die letztes Jahr veröffentlicht wurde → die letztes Jahr ___ Studie</li>
          <li>das Problem, das noch gelöst werden muss → das noch zu ___ Problem</li>
          <li>der Politiker, der die Rede hält → der die Rede ___ Politiker</li>
        </ul>
        <p class="muted">Answers: veröffentlichte / lösende / haltende</p>
      </div>
    `
  },

  {
    id: "c2-syntax-inversion",
    level: "C2",
    tags: ["Word order","Style","Emphasis"],
    title: "C2 Syntax: Topicalization, Emphasis & Information Structure",
    summary: "At C2, you control emphasis through deliberate fronting, right-dislocation, cleft sentences, and the position of nicht/nur/sogar/selbst. These are what make writing and speech stylistically precise.",
    deep: `
      <div class="box">
        <p><strong>Topicalization (Fronting):</strong> Move any element to position 1 to make it the topic/focus. The verb stays in position 2.</p>
        <p class="muted">Den Bericht habe ich gestern fertiggestellt. (It's the report I'm talking about.)</p>
        <p class="muted">Gestern habe ich den Bericht fertiggestellt. (Yesterday is the focus.)</p>
        <div class="divider"></div>
        <p><strong>nicht / nur / sogar / selbst / auch position:</strong> these particles always precede the element they modify.</p>
        <p class="muted">Ich habe <strong>nicht den Bericht</strong> gelesen. (not the report — something else)</p>
        <p class="muted">Ich habe den Bericht <strong>nicht</strong> gelesen. (didn't read it at all)</p>
        <p class="muted"><strong>Sogar</strong> der Chef hat applaudiert. (even the boss)</p>
        <div class="divider"></div>
        <p><strong>Cleft sentence (Spaltsatz):</strong> Es ist X, der/die/das … — emphatic identification.</p>
        <p class="muted"><strong>Es ist</strong> der Fahrer, der schuld ist. (It's the driver who is at fault.)</p>
        <p class="muted"><strong>Es war</strong> diese Entscheidung, die alles veränderte.</p>
        <div class="divider"></div>
        <p><strong>Right-dislocation:</strong> element mentioned then restated with pronoun — spoken emphasis.</p>
        <p class="muted">Der Müller, <strong>der</strong> hat das gesagt. (It's Müller who said that.)</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p><strong>Fronting:</strong> Dieses Problem haben wir schon lange diskutiert. <span class="muted">/ This problem is what we've been discussing.</span></p>
        <p><strong>Contrast:</strong> Nicht ich, sondern er hat das gesagt.</p>
        <p><strong>Sogar:</strong> Sogar er hat es nicht verstanden.</p>
        <p><strong>Cleft:</strong> Es war diese Entscheidung, die zum Erfolg geführt hat.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p>❌ Placing nicht at end when negating a specific element: Ich habe den Bericht nicht gelesen ≠ Ich habe nicht den Bericht gelesen (different meaning!)</p>
        <p>Tip: the position of <em>nicht</em> changes the scope of negation — very important for precision at C2.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Rewrite with emphasis on the underlined element:</p>
        <ul>
          <li>Ich habe <u>gestern</u> den Brief geschrieben. → start with Gestern…</li>
          <li>Identify the difference: "Ich lese nicht das Buch." vs "Ich lese das Buch nicht."</li>
        </ul>
        <p class="muted">Answer 1: Gestern habe ich den Brief geschrieben. | Answer 2: First = I'm not reading THE book (something else). Second = I don't read the book at all.</p>
      </div>
    `
  },

  {
    id: "c2-concession-argumentation",
    level: "C2",
    tags: ["Connectors","Argumentation","Writing"],
    title: "C2 Argumentation: Concession, Limitation, Apparent Contradiction",
    summary: "Master the connectors that handle nuance: wenngleich, nichtsdestotrotz, insofern als, sofern, allem Anschein nach, je nachdem, wohingegen, unbeschadet, ungeachtet.",
    deep: `
      <div class="box">
        <p><strong>Concession (although/even though):</strong></p>
        <table class="grammar-table">
          <tr><th>Connector</th><th>Type</th><th>Register</th></tr>
          <tr><td>obwohl</td><td>subordinate</td><td>neutral</td></tr>
          <tr><td>wenngleich / wiewohl</td><td>subordinate</td><td>formal/written</td></tr>
          <tr><td>zwar … aber</td><td>main + main</td><td>neutral spoken</td></tr>
          <tr><td>trotzdem / dennoch / nichtsdestotrotz</td><td>adverb</td><td>formal (latter very formal)</td></tr>
          <tr><td>ungeachtet (+ GEN)</td><td>preposition</td><td>very formal/legal</td></tr>
        </table>
        <div class="divider"></div>
        <p><strong>Limitation/Condition:</strong></p>
        <p class="muted"><strong>insofern als:</strong> insofar as, to the degree that: Das stimmt, <strong>insofern als</strong> die Daten korrekt sind.</p>
        <p class="muted"><strong>sofern:</strong> provided that: <strong>Sofern</strong> keine Einwände bestehen, fahren wir fort.</p>
        <p class="muted"><strong>soweit:</strong> as far as: <strong>Soweit</strong> ich weiß, ist er noch hier.</p>
        <div class="divider"></div>
        <p><strong>Apparent evidence / assumption:</strong></p>
        <p class="muted"><strong>allem Anschein nach:</strong> apparently: <strong>Allem Anschein nach</strong> hat er gewonnen.</p>
        <p class="muted"><strong>angeblich:</strong> allegedly: Er hat <strong>angeblich</strong> betrogen.</p>
        <div class="divider"></div>
        <p><strong>Depending on:</strong></p>
        <p class="muted"><strong>je nachdem, ob/wie/was:</strong> <strong>Je nachdem</strong>, wie viel Zeit bleibt, entscheiden wir vor Ort.</p>
        <div class="divider"></div>
        <p><strong>es sei denn:</strong> unless (C2 alternative to wenn … nicht)</p>
        <p class="muted">Wir fahren, <strong>es sei denn</strong>, es regnet.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p><strong>Wenngleich</strong> die Ergebnisse positiv sind, besteht noch Handlungsbedarf.</p>
        <p>Das Gesetz gilt, <strong>ungeachtet</strong> der Nationalität.</p>
        <p>Das ist richtig, <strong>insofern als</strong> man es isoliert betrachtet.</p>
        <p><strong>Allem Anschein nach</strong> hat die Partei die Wahl verloren.</p>
        <p>Wir starten pünktlich, <strong>es sei denn</strong>, es gibt technische Probleme.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p>❌ nichtsdestotrotz in casual speech → sounds stiff; use trotzdem instead</p>
        <p>❌ je nachdem without ob/wie/was → ✅ je nachdem, <strong>ob</strong> er kommt (not just "je nachdem er kommt")</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Fill in the most precise connector:</p>
        <ul>
          <li>The results are good, <em>insofar as</em> they are based on correct data. → ___ die Daten korrekt sind.</li>
          <li><em>Apparently</em> no agreement was reached. → ___ wurde keine Einigung erzielt.</li>
          <li>We continue, <em>unless</em> there are objections. → Wir machen weiter, ___.</li>
        </ul>
        <p class="muted">Answers: insofern als / Allem Anschein nach / es sei denn, es gibt Einwände</p>
      </div>
    `
  },

  {
    id: "c2-style-register",
    level: "C2",
    tags: ["Style","Register","Writing"],
    title: "C2 Style & Register: Formal, Neutral, Colloquial — Knowing the Difference",
    summary: "At C2, you choose register deliberately. Understand what distinguishes academic, journalistic, bureaucratic, and colloquial German — and switch between them. Key: verb-noun ratio, passive frequency, sentence length, modal particles.",
    deep: `
      <div class="box">
        <p><strong>Four registers compared:</strong></p>
        <table class="grammar-table">
          <tr><th>Feature</th><th>Academic</th><th>Journalistic</th><th>Bureaucratic</th><th>Colloquial</th></tr>
          <tr><td>Nouns vs verbs</td><td>noun-heavy (Nominalstil)</td><td>balanced</td><td>very noun-heavy</td><td>verb-heavy</td></tr>
          <tr><td>Passive</td><td>frequent</td><td>moderate</td><td>very frequent</td><td>rare (man instead)</td></tr>
          <tr><td>Sentence length</td><td>very long</td><td>medium</td><td>very long</td><td>short</td></tr>
          <tr><td>Modal particles</td><td>never</td><td>rarely</td><td>never</td><td>always</td></tr>
          <tr><td>Konjunktiv I</td><td>sometimes</td><td>frequent</td><td>rare</td><td>never</td></tr>
        </table>
        <div class="divider"></div>
        <p><strong>Same idea, 4 registers:</strong></p>
        <p class="muted"><em>Colloquial:</em> "Man hat das einfach nicht gut geplant."</p>
        <p class="muted"><em>Journalistic:</em> "Die Planung wurde von vielen als unzureichend kritisiert."</p>
        <p class="muted"><em>Academic:</em> "Die mangelhafte Vorbereitung führte zu strukturellen Defiziten bei der Umsetzung."</p>
        <p class="muted"><em>Bureaucratic:</em> "Aufgrund unzureichender Maßnahmen zur Planung konnten die vorgesehenen Ziele nicht erreicht werden."</p>
        <div class="divider"></div>
        <p><strong>Nominalstil key patterns (academic/formal):</strong></p>
        <p class="muted">in Betracht ziehen | zur Verfügung stellen | in Frage stellen | Maßnahmen ergreifen | einen Beitrag leisten | Rechenschaft ablegen | Rücksicht nehmen auf</p>
        <div class="divider"></div>
        <p><strong>Bureaucratic formulae:</strong></p>
        <p class="muted">hiermit | im Rahmen von | bezüglich | vorbehaltlich | gemäß | unbeschadet</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p><em>Academic opener:</em> Im Folgenden wird untersucht, inwiefern…</p>
        <p><em>Journalistic opener:</em> Wie aus aktuellen Berichten hervorgeht…</p>
        <p><em>Formal objection:</em> Es sei darauf hingewiesen, dass…</p>
        <p><em>Bureaucratic approval:</em> Hiermit wird bestätigt, dass… / Gemäß § 3 Abs. 2…</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p>❌ Using modal particles (ja, doch, halt) in academic writing.</p>
        <p>❌ Using Nominalstil in casual conversation — unnatural and pompous.</p>
        <p>❌ Using Konjunktiv I in everyday speech — sounds like you're quoting someone.</p>
        <p>Tip: Read one article from each: a German Wikipedia article (academic), Der Spiegel (journalistic), a Bürgeramt letter (bureaucratic), and a German WhatsApp chat (colloquial). The differences are immediately obvious.</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Rewrite in a different register:</p>
        <ul>
          <li><em>Colloquial → Academic:</em> "Das Problem ist echt groß und die Leute sind sauer."</li>
          <li><em>Academic → Colloquial:</em> "Die unzureichende Ressourcenallokation hat zu negativen Konsequenzen geführt."</li>
        </ul>
        <p class="muted">Example Academic: Das Problem ist von erheblicher Tragweite und ruft in der Bevölkerung berechtigte Bedenken hervor. | Example Colloquial: Es wurden nicht genug Ressourcen bereitgestellt, und das hatte Folgen.</p>
      </div>
    `
  },

  {
    id: "c2-subjunctive-reported",
    level: "C2",
    tags: ["Mood","Reported speech","Style"],
    title: "C2 Reported Speech: Konjunktiv I in All Forms + Indirect Questions + Distance Markers",
    summary: "Full command of Konjunktiv I (all persons, all tenses), the fallback to KII when KI = indicative, indirect questions with ob/W-word, and epistemic distance markers (angeblich, vermeintlich, mutmaßlich).",
    deep: `
      <div class="box">
        <p><strong>Full Konjunktiv I paradigm (key forms):</strong></p>
        <table class="grammar-table">
          <tr><th>Verb</th><th>ich</th><th>du</th><th>er/sie/es</th><th>wir/sie</th></tr>
          <tr><td>sein</td><td>sei</td><td>sei(e)st</td><td><strong>sei</strong></td><td>seien</td></tr>
          <tr><td>haben</td><td>habe</td><td>habest</td><td><strong>habe</strong></td><td>haben (→KII: hätten)</td></tr>
          <tr><td>werden</td><td>werde</td><td>werdest</td><td><strong>werde</strong></td><td>werden (→KII: würden)</td></tr>
          <tr><td>können</td><td>könne</td><td>könnest</td><td><strong>könne</strong></td><td>können (→KII: könnten)</td></tr>
        </table>
        <p class="muted">Rule: if KI = indicative (wir haben = wir haben), use KII instead (wir hätten).</p>
        <div class="divider"></div>
        <p><strong>KI tenses:</strong></p>
        <p class="muted">Present → KI present: er sagt, er <strong>komme</strong>.</p>
        <p class="muted">Past → KI perfect: er sagt, er <strong>sei</strong> schon <strong>gegangen</strong>.</p>
        <p class="muted">Future → KI of werden: er sagt, er <strong>werde</strong> kommen.</p>
        <div class="divider"></div>
        <p><strong>Indirect questions:</strong></p>
        <p class="muted">Direct: "Kommst du?" → Indirect: Er fragte, <strong>ob</strong> er komme/käme.</p>
        <p class="muted">Direct: "Wann kommst du?" → Indirect: Er fragte, <strong>wann</strong> er komme/käme.</p>
        <div class="divider"></div>
        <p><strong>Distance markers (hedging words):</strong></p>
        <p class="muted"><strong>angeblich</strong> = allegedly | <strong>vermeintlich</strong> = supposedly | <strong>mutmaßlich</strong> = presumably | <strong>anscheinend</strong> = apparently | <strong>offenbar</strong> = evidently</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>Der Zeuge sagt, er <strong>habe</strong> nichts gesehen. <span class="muted">/ KI present</span></p>
        <p>Die Ministerin erklärte, die Maßnahmen <strong>seien</strong> notwendig.</p>
        <p>Sie behaupteten, sie <strong>hätten</strong> gewonnen. <span class="muted">/ KII — wir-form clashes</span></p>
        <p>Er fragte, <strong>ob</strong> sie kommen <strong>könne</strong>.</p>
        <p>Der <strong>angeblich</strong> gefundene Beweis war gefälscht.</p>
        <p>Der <strong>mutmaßliche</strong> Täter wurde verhaftet.</p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p>❌ Using KI where it's identical to indicative → ✅ switch to KII: wir kommen (ind.) → wir <strong>kämen</strong> (KII reported)</p>
        <p>❌ Indirect question with verb-second: Er fragte, wann <strong>kommt</strong> er. → ✅ Er fragte, wann er <strong>komme/käme</strong>. (verb-final in indirect question)</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Convert to reported speech (use KI where possible, KII as fallback):</p>
        <ul>
          <li>"Ich bin nicht schuldig." → Er sagt, er ___.</li>
          <li>"Wir haben das nicht gewusst." → Sie sagten, sie ___.</li>
          <li>"Werden wir rechtzeitig fertig?" → Er fragte, ob sie ___.</li>
        </ul>
        <p class="muted">Answers: sei nicht schuldig / hätten das nicht gewusst (KII — wir-form) / rechtzeitig fertig werden würden / werden könnten</p>
      </div>
    `
  },

  {
    id: "c2-n-declension-advanced",
    level: "C2",
    tags: ["Nouns","Cases","Advanced"],
    title: "C2 Noun Declension Edge Cases: n-Declension, Heteronyms & Tricky Genitives",
    summary: "Master the edge cases: full n-declension list including irregular nouns (Herr, Name, Buchstabe), nouns with two genitives, heteronyms (Wörter vs Worte), and formal genitive -es vs -s.",
    deep: `
      <div class="box">
        <p><strong>n-Declension (weak masculine nouns):</strong> add -en/-n in all cases except NOM singular.</p>
        <table class="grammar-table">
          <tr><th>Case</th><th>der Mensch</th><th>der Student</th><th>der Herr</th></tr>
          <tr><td>NOM</td><td>der Mensch</td><td>der Student</td><td>der Herr</td></tr>
          <tr><td>AKK</td><td>den Menschen</td><td>den Studenten</td><td>den Herrn</td></tr>
          <tr><td>DAT</td><td>dem Menschen</td><td>dem Studenten</td><td>dem Herrn</td></tr>
          <tr><td>GEN</td><td>des Menschen</td><td>des Studenten</td><td>des Herrn</td></tr>
          <tr><td>PL (all)</td><td>die Menschen</td><td>die Studenten</td><td>die Herren</td></tr>
        </table>
        <p class="muted">Common n-declension: Mensch, Junge, Kollege, Kunde, Herr, Student, Präsident, Journalist, Tourist, Soldat, Held, Bauer, Nachbar, Zeuge, Name*, Buchstabe*, Gedanke*</p>
        <p class="muted">*Name, Gedanke, Glaube, Buchstabe, Funke also add -ns in Genitive: des Namen<strong>s</strong></p>
        <div class="divider"></div>
        <p><strong>Heteronyms (different plurals = different meanings):</strong></p>
        <table class="grammar-table">
          <tr><th>Singular</th><th>Plural 1</th><th>Plural 2</th></tr>
          <tr><td>das Wort</td><td>die Wörter (individual words)</td><td>die Worte (words with meaning/quotation)</td></tr>
          <tr><td>das Band</td><td>die Bänder (ribbons/tapes)</td><td>die Bande (bonds/ties)</td></tr>
          <tr><td>der Rat</td><td>die Räte (councils)</td><td>die Ratschläge (pieces of advice)</td></tr>
        </table>
        <div class="divider"></div>
        <p><strong>Genitive -s vs -es:</strong> both are correct for most masc/neut nouns. -es preferred after -s, -sch, -tz, -x: des Hauses, des Platzes. -s preferred in compound nouns and foreign words.</p>
      </div>
    `,
    examples: `
      <div class="box">
        <p>An <strong>Herrn</strong> Müller, ... <span class="muted">/ formal letter: Herrn = AKK/DAT of Herr</span></p>
        <p>des Name<strong>ns</strong> (NOT des Namens → actually des Namens IS correct — gen. adds -ns)</p>
        <p>Das Wörterbuch enthält 50.000 <strong>Wörter</strong>. <span class="muted">/ individual dictionary entries</span></p>
        <p>Seine letzten <strong>Worte</strong> werden unvergessen bleiben. <span class="muted">/ meaningful final words</span></p>
      </div>
    `,
    mistakes: `
      <div class="box">
        <p>❌ An Herr Müller (in a letter) → ✅ An <strong>Herrn</strong> Müller</p>
        <p>❌ des Gedankees → ✅ des Gedankens (n-decl. + -ns in GEN)</p>
        <p>❌ Die letzten Wörter des Sterbenden → ✅ Die letzten <strong>Worte</strong> des Sterbenden (meaningful final words)</p>
      </div>
    `,
    practice: `
      <div class="box">
        <p>Decline correctly:</p>
        <ul>
          <li>Ich schreibe an ___ (der Herr Müller).</li>
          <li>Das sind die Ideen ___ (der Mensch, GEN PL).</li>
          <li>Wörter or Worte? "The last __ of the president."</li>
        </ul>
        <p class="muted">Answers: Herrn Müller / der Menschen / Worte</p>
      </div>
    `
  },

];
];