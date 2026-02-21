// verbs-db-a1.js — A1 Beginner German Verbs (comprehensive)
const verbsA1 = [
  {
    "base": "sein",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to be"],
    "tip": "Most important verb in German — irregular in all forms. Used as auxiliary for movement/state-change verbs in perfect tense.",
    "common_mistakes": ["Don't say 'ich bin haben' — use 'ich habe' for possession.", "'Sein' Perfekt uses itself: 'ich bin gewesen'."],
    "present": { "ich": "bin", "du": "bist", "er_sie_es": "ist", "wir": "sind", "ihr": "seid", "sie_Sie": "sind" },
    "imperative": { "du": "sei!", "ihr": "seid!", "Sie": "seien Sie!" },
    "past_tenses": { "präteritum": "war", "partizip_ii": "gewesen" },
    "auxiliaries": [{ "aux": "sein", "condition": "always", "perfekt": "ist gewesen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "sein + Nominativ", "prepositions": [], "explanation": "Links subject to a noun or adjective.", "examples": ["Ich bin Student.", "Das Haus ist groß."], "derived": null }
    ]
  },
  {
    "base": "haben",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to have"],
    "tip": "Second most important verb. Also used as the main auxiliary for Perfekt of most verbs.",
    "common_mistakes": ["'Ich habe Hunger' not 'Ich bin hungrig' (both exist but mean subtly different things).", "Don't confuse with 'sein' as auxiliary."],
    "present": { "ich": "habe", "du": "hast", "er_sie_es": "hat", "wir": "haben", "ihr": "habt", "sie_Sie": "haben" },
    "imperative": { "du": "hab! / habe!", "ihr": "habt!", "Sie": "haben Sie!" },
    "past_tenses": { "präteritum": "hatte", "partizip_ii": "gehabt" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gehabt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "haben + Akkusativ", "prepositions": [], "explanation": "Express possession or states.", "examples": ["Ich habe ein Auto.", "Sie hat Hunger.", "Er hat Zeit."], "derived": null }
    ]
  },
  {
    "base": "werden",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to become", "will (future auxiliary)"],
    "tip": "Used to form the future tense AND as a main verb meaning 'to become'. Also used in Passiv constructions.",
    "common_mistakes": ["Don't use 'werden' for 'to get' in the sense of receiving — use 'bekommen' for that."],
    "present": { "ich": "werde", "du": "wirst", "er_sie_es": "wird", "wir": "werden", "ihr": "werdet", "sie_Sie": "werden" },
    "imperative": { "du": "werde!", "ihr": "werdet!", "Sie": "werden Sie!" },
    "past_tenses": { "präteritum": "wurde", "partizip_ii": "geworden" },
    "auxiliaries": [{ "aux": "sein", "condition": "always", "perfekt": "ist geworden" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "werden + Nominativ (main verb)", "prepositions": [], "explanation": "To become something.", "examples": ["Sie wird Ärztin.", "Es wird kalt."], "derived": null },
      { "label": "werden + Infinitiv (future)", "prepositions": [], "explanation": "Forms the future tense.", "examples": ["Ich werde kommen.", "Es wird regnen."], "derived": null }
    ]
  },
  {
    "base": "können",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["can", "to be able to"],
    "tip": "Modal verb — always used with an infinitive at the end of the clause. No 'zu' needed.",
    "common_mistakes": ["Don't add 'zu': say 'Ich kann schwimmen' not 'Ich kann zu schwimmen'."],
    "present": { "ich": "kann", "du": "kannst", "er_sie_es": "kann", "wir": "können", "ihr": "könnt", "sie_Sie": "können" },
    "imperative": { "du": "—", "ihr": "—", "Sie": "—" },
    "past_tenses": { "präteritum": "konnte", "partizip_ii": "gekonnt / können" },
    "auxiliaries": [{ "aux": "haben", "condition": "with dependent infinitive", "perfekt": "hat können" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "können + Infinitiv", "prepositions": [], "explanation": "Ability or possibility.", "examples": ["Ich kann Deutsch sprechen.", "Kannst du schwimmen?", "Das kann nicht stimmen."], "derived": null }
    ]
  },
  {
    "base": "müssen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["must", "to have to"],
    "tip": "Expresses necessity or obligation. Negation: 'nicht müssen' = don't have to (not 'must not' — that's 'nicht dürfen').",
    "common_mistakes": ["'Du musst nicht' = you don't have to. 'Du darfst nicht' = you must not. These are very different!"],
    "present": { "ich": "muss", "du": "musst", "er_sie_es": "muss", "wir": "müssen", "ihr": "müsst", "sie_Sie": "müssen" },
    "imperative": { "du": "—", "ihr": "—", "Sie": "—" },
    "past_tenses": { "präteritum": "musste", "partizip_ii": "gemusst / müssen" },
    "auxiliaries": [{ "aux": "haben", "condition": "default", "perfekt": "hat müssen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "müssen + Infinitiv", "prepositions": [], "explanation": "Necessity or obligation.", "examples": ["Ich muss arbeiten.", "Du musst nicht kommen.", "Er muss früh aufstehen."], "derived": null }
    ]
  },
  {
    "base": "wollen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to want"],
    "tip": "Expresses intention or desire. More determined than 'möchten' (would like).",
    "common_mistakes": ["'Ich will' sounds direct/strong. In polite requests, use 'Ich möchte' instead."],
    "present": { "ich": "will", "du": "willst", "er_sie_es": "will", "wir": "wollen", "ihr": "wollt", "sie_Sie": "wollen" },
    "imperative": { "du": "—", "ihr": "—", "Sie": "—" },
    "past_tenses": { "präteritum": "wollte", "partizip_ii": "gewollt / wollen" },
    "auxiliaries": [{ "aux": "haben", "condition": "default", "perfekt": "hat wollen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "wollen + Infinitiv", "prepositions": [], "explanation": "Desire or intention.", "examples": ["Ich will Deutsch lernen.", "Wir wollen nach Berlin fahren.", "Was willst du essen?"], "derived": null }
    ]
  },
  {
    "base": "mögen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to like"],
    "tip": "The subjunctive form 'möchte' (would like) is more common at A1 than the indicative. 'Ich mag Kaffee' = I like coffee.",
    "common_mistakes": ["'Möchten' is the Konjunktiv II form of 'mögen' — it's used as a polite 'would like'."],
    "present": { "ich": "mag", "du": "magst", "er_sie_es": "mag", "wir": "mögen", "ihr": "mögt", "sie_Sie": "mögen" },
    "imperative": { "du": "—", "ihr": "—", "Sie": "—" },
    "past_tenses": { "präteritum": "mochte", "partizip_ii": "gemocht" },
    "auxiliaries": [{ "aux": "haben", "condition": "default", "perfekt": "hat gemocht" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "mögen + Akkusativ", "prepositions": [], "explanation": "To like something/someone.", "examples": ["Ich mag Schokolade.", "Sie mag ihren Lehrer.", "Magst du Sport?"], "derived": null },
      { "label": "möchten + Infinitiv (Konjunktiv II)", "prepositions": [], "explanation": "Polite 'would like'.", "examples": ["Ich möchte einen Kaffee.", "Wir möchten reisen."], "derived": null }
    ]
  },
  {
    "base": "dürfen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["may", "to be allowed to"],
    "tip": "Expresses permission. Negative 'nicht dürfen' = must not, is forbidden.",
    "common_mistakes": ["'Ich darf nicht rauchen' = I must not smoke (it's forbidden). Don't confuse with 'müssen'."],
    "present": { "ich": "darf", "du": "darfst", "er_sie_es": "darf", "wir": "dürfen", "ihr": "dürft", "sie_Sie": "dürfen" },
    "imperative": { "du": "—", "ihr": "—", "Sie": "—" },
    "past_tenses": { "präteritum": "durfte", "partizip_ii": "gedurft / dürfen" },
    "auxiliaries": [{ "aux": "haben", "condition": "default", "perfekt": "hat dürfen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "dürfen + Infinitiv", "prepositions": [], "explanation": "Permission or prohibition.", "examples": ["Hier darf man nicht rauchen.", "Darf ich reinkommen?", "Du darfst das nicht."], "derived": null }
    ]
  },
  {
    "base": "sollen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["should", "to be supposed to"],
    "tip": "Expresses an obligation given by someone else (not self-imposed). 'Du sollst nicht lügen' = Thou shalt not lie.",
    "present": { "ich": "soll", "du": "sollst", "er_sie_es": "soll", "wir": "sollen", "ihr": "sollt", "sie_Sie": "sollen" },
    "imperative": { "du": "—", "ihr": "—", "Sie": "—" },
    "past_tenses": { "präteritum": "sollte", "partizip_ii": "gesollt / sollen" },
    "auxiliaries": [{ "aux": "haben", "condition": "default", "perfekt": "hat sollen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "sollen + Infinitiv", "prepositions": [], "explanation": "Obligation from an external source.", "examples": ["Du sollst pünktlich sein.", "Er soll zum Chef kommen.", "Was soll ich machen?"], "derived": null }
    ]
  },
  {
    "base": "machen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to make", "to do"],
    "tip": "Extremely versatile verb. Appears in many fixed phrases: Urlaub machen, Hausaufgaben machen, einen Spaziergang machen.",
    "present": { "ich": "mache", "du": "machst", "er_sie_es": "macht", "wir": "machen", "ihr": "macht", "sie_Sie": "machen" },
    "imperative": { "du": "mach!", "ihr": "macht!", "Sie": "machen Sie!" },
    "past_tenses": { "präteritum": "machte", "partizip_ii": "gemacht" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gemacht" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "machen + Akkusativ", "prepositions": [], "explanation": "To do/make something.", "examples": ["Ich mache Hausaufgaben.", "Er macht Urlaub.", "Was machst du?"], "derived": null }
    ]
  },
  {
    "base": "gehen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to go", "to walk"],
    "tip": "Uses 'sein' in Perfekt. Also used impersonally: 'Wie geht es Ihnen?' (How are you?).",
    "common_mistakes": ["Use 'sein': 'Ich bin gegangen', not 'Ich habe gegangen'."],
    "present": { "ich": "gehe", "du": "gehst", "er_sie_es": "geht", "wir": "gehen", "ihr": "geht", "sie_Sie": "gehen" },
    "imperative": { "du": "geh!", "ihr": "geht!", "Sie": "gehen Sie!" },
    "past_tenses": { "präteritum": "ging", "partizip_ii": "gegangen" },
    "auxiliaries": [{ "aux": "sein", "condition": "always", "perfekt": "ist gegangen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "gehen + nach/in/zu", "prepositions": ["nach", "in", "zu"], "explanation": "Direction of movement.", "examples": ["Ich gehe nach Hause.", "Sie geht ins Kino.", "Er geht zur Schule."], "derived": null },
      { "label": "es geht (jemandem)", "prepositions": [], "explanation": "Impersonal: to be doing (health/feeling).", "examples": ["Wie geht es dir?", "Es geht mir gut."], "derived": null }
    ]
  },
  {
    "base": "kommen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to come"],
    "tip": "Uses 'sein' in Perfekt. 'Kommen aus' = to come from (origin).",
    "common_mistakes": ["Use 'sein': 'Er ist gekommen', not 'Er hat gekommen'."],
    "present": { "ich": "komme", "du": "kommst", "er_sie_es": "kommt", "wir": "kommen", "ihr": "kommt", "sie_Sie": "kommen" },
    "imperative": { "du": "komm!", "ihr": "kommt!", "Sie": "kommen Sie!" },
    "past_tenses": { "präteritum": "kam", "partizip_ii": "gekommen" },
    "auxiliaries": [{ "aux": "sein", "condition": "always", "perfekt": "ist gekommen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "kommen + aus", "prepositions": ["aus"], "explanation": "Origin or source.", "examples": ["Ich komme aus Deutschland.", "Das Wasser kommt aus dem Hahn."], "derived": null },
      { "label": "kommen + nach / in", "prepositions": ["nach", "in"], "explanation": "Destination (arriving).", "examples": ["Wann kommst du nach Berlin?", "Er kommt ins Büro."], "derived": null }
    ]
  },
  {
    "base": "sehen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to see"],
    "tip": "Stem vowel change: e→ie (du siehst, er sieht). 'Auf Wiedersehen!' = Goodbye (literally: until seeing again).",
    "present": { "ich": "sehe", "du": "siehst", "er_sie_es": "sieht", "wir": "sehen", "ihr": "seht", "sie_Sie": "sehen" },
    "imperative": { "du": "sieh!", "ihr": "seht!", "Sie": "sehen Sie!" },
    "past_tenses": { "präteritum": "sah", "partizip_ii": "gesehen" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gesehen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "sehen + Akkusativ", "prepositions": [], "explanation": "To see/perceive something.", "examples": ["Ich sehe einen Vogel.", "Hast du den Film gesehen?"], "derived": null }
    ]
  },
  {
    "base": "sprechen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to speak", "to talk"],
    "tip": "Stem vowel change: e→i (du sprichst, er spricht). 'Sprechen mit' = to talk to someone.",
    "present": { "ich": "spreche", "du": "sprichst", "er_sie_es": "spricht", "wir": "sprechen", "ihr": "sprecht", "sie_Sie": "sprechen" },
    "imperative": { "du": "sprich!", "ihr": "sprecht!", "Sie": "sprechen Sie!" },
    "past_tenses": { "präteritum": "sprach", "partizip_ii": "gesprochen" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gesprochen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "sprechen + mit", "prepositions": ["mit"], "explanation": "To talk to someone.", "examples": ["Ich spreche mit meiner Lehrerin.", "Er spricht mit dem Chef."], "derived": null },
      { "label": "sprechen + über", "prepositions": ["über"], "explanation": "To talk about a topic.", "examples": ["Wir sprechen über das Wetter.", "Kannst du über dich sprechen?"], "derived": null }
    ]
  },
  {
    "base": "lernen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to learn", "to study"],
    "tip": "Regular verb. 'Lernen' is for learning facts/skills. 'Studieren' is for studying at university.",
    "common_mistakes": ["'Ich lerne Deutsch' (learn German) vs. 'Ich studiere Medizin' (study Medicine at university)."],
    "present": { "ich": "lerne", "du": "lernst", "er_sie_es": "lernt", "wir": "lernen", "ihr": "lernt", "sie_Sie": "lernen" },
    "imperative": { "du": "lern!", "ihr": "lernt!", "Sie": "lernen Sie!" },
    "past_tenses": { "präteritum": "lernte", "partizip_ii": "gelernt" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gelernt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "lernen + Akkusativ / Infinitiv", "prepositions": [], "explanation": "To learn something or to learn how to do something.", "examples": ["Ich lerne Deutsch.", "Er lernt schwimmen.", "Wir lernen für die Prüfung."], "derived": null }
    ]
  },
  {
    "base": "arbeiten",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to work"],
    "tip": "Regular verb but adds -e- before endings starting with consonant+t: arbeitet, arbeitest.",
    "present": { "ich": "arbeite", "du": "arbeitest", "er_sie_es": "arbeitet", "wir": "arbeiten", "ihr": "arbeitet", "sie_Sie": "arbeiten" },
    "imperative": { "du": "arbeite!", "ihr": "arbeitet!", "Sie": "arbeiten Sie!" },
    "past_tenses": { "präteritum": "arbeitete", "partizip_ii": "gearbeitet" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gearbeitet" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "arbeiten + als / bei / in", "prepositions": ["als", "bei", "in"], "explanation": "To work as / at / in.", "examples": ["Ich arbeite als Lehrer.", "Sie arbeitet bei einer Bank.", "Er arbeitet in Berlin."], "derived": null }
    ]
  },
  {
    "base": "wohnen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to live", "to reside"],
    "tip": "Regular verb. Use 'wohnen' for your address/place of residence. 'Leben' is broader (to live/be alive).",
    "common_mistakes": ["'Wo wohnst du?' (Where do you live?) expects a place: 'Ich wohne in München'."],
    "present": { "ich": "wohne", "du": "wohnst", "er_sie_es": "wohnt", "wir": "wohnen", "ihr": "wohnt", "sie_Sie": "wohnen" },
    "imperative": { "du": "wohn!", "ihr": "wohnt!", "Sie": "wohnen Sie!" },
    "past_tenses": { "präteritum": "wohnte", "partizip_ii": "gewohnt" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gewohnt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "wohnen + in/bei/an", "prepositions": ["in", "bei", "an"], "explanation": "Where you live.", "examples": ["Ich wohne in Hamburg.", "Sie wohnt bei ihren Eltern.", "Er wohnt am See."], "derived": null }
    ]
  },
  {
    "base": "essen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to eat"],
    "tip": "Stem vowel change: e→i (du isst, er isst). Note: 'du isst' and 'er isst' look the same.",
    "present": { "ich": "esse", "du": "isst", "er_sie_es": "isst", "wir": "essen", "ihr": "esst", "sie_Sie": "essen" },
    "imperative": { "du": "iss!", "ihr": "esst!", "Sie": "essen Sie!" },
    "past_tenses": { "präteritum": "aß", "partizip_ii": "gegessen" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gegessen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "essen + Akkusativ", "prepositions": [], "explanation": "To eat something.", "examples": ["Ich esse ein Brötchen.", "Was möchtest du essen?", "Wir essen zusammen."], "derived": null }
    ]
  },
  {
    "base": "trinken",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to drink"],
    "tip": "Strong verb with vowel change: trinkt → trank → getrunken.",
    "present": { "ich": "trinke", "du": "trinkst", "er_sie_es": "trinkt", "wir": "trinken", "ihr": "trinkt", "sie_Sie": "trinken" },
    "imperative": { "du": "trink!", "ihr": "trinkt!", "Sie": "trinken Sie!" },
    "past_tenses": { "präteritum": "trank", "partizip_ii": "getrunken" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat getrunken" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "trinken + Akkusativ", "prepositions": [], "explanation": "To drink something.", "examples": ["Ich trinke Kaffee.", "Er trinkt Wasser.", "Was trinkst du gern?"], "derived": null }
    ]
  },
  {
    "base": "kaufen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to buy"],
    "tip": "Regular verb. 'Kaufen' takes Akkusativ for the item. 'Kaufen bei' = to buy from a store.",
    "present": { "ich": "kaufe", "du": "kaufst", "er_sie_es": "kauft", "wir": "kaufen", "ihr": "kauft", "sie_Sie": "kaufen" },
    "imperative": { "du": "kauf!", "ihr": "kauft!", "Sie": "kaufen Sie!" },
    "past_tenses": { "präteritum": "kaufte", "partizip_ii": "gekauft" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gekauft" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "kaufen + Akkusativ", "prepositions": [], "explanation": "To buy something.", "examples": ["Ich kaufe ein Buch.", "Sie kauft Lebensmittel.", "Er hat ein Auto gekauft."], "derived": null }
    ]
  },
  {
    "base": "fahren",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to drive", "to travel (by vehicle)"],
    "tip": "Stem vowel change: a→ä (du fährst, er fährt). Uses 'sein' in Perfekt for travel.",
    "common_mistakes": ["Use 'sein': 'Ich bin gefahren' not 'Ich habe gefahren' (when expressing movement from A to B)."],
    "present": { "ich": "fahre", "du": "fährst", "er_sie_es": "fährt", "wir": "fahren", "ihr": "fahrt", "sie_Sie": "fahren" },
    "imperative": { "du": "fahr!", "ihr": "fahrt!", "Sie": "fahren Sie!" },
    "past_tenses": { "präteritum": "fuhr", "partizip_ii": "gefahren" },
    "auxiliaries": [{ "aux": "sein", "condition": "movement A to B", "perfekt": "ist gefahren" }, { "aux": "haben", "condition": "transitive (driving a vehicle)", "perfekt": "hat gefahren" }],
    "dual_auxiliary": true,
    "patterns": [
      { "label": "fahren + nach/in/zu", "prepositions": ["nach", "in", "zu"], "explanation": "To travel to a place.", "examples": ["Wir fahren nach Berlin.", "Er fährt in die Stadt.", "Sie fährt zum Supermarkt."], "derived": null }
    ]
  },
  {
    "base": "lesen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to read"],
    "tip": "Stem vowel change: e→ie (du liest, er liest). 'Lesen' takes Akkusativ.",
    "present": { "ich": "lese", "du": "liest", "er_sie_es": "liest", "wir": "lesen", "ihr": "lest", "sie_Sie": "lesen" },
    "imperative": { "du": "lies!", "ihr": "lest!", "Sie": "lesen Sie!" },
    "past_tenses": { "präteritum": "las", "partizip_ii": "gelesen" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gelesen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "lesen + Akkusativ", "prepositions": [], "explanation": "To read something.", "examples": ["Ich lese ein Buch.", "Er liest die Zeitung.", "Liest du gern?"], "derived": null }
    ]
  },
  {
    "base": "schreiben",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to write"],
    "tip": "Strong verb: schreibt → schrieb → geschrieben.",
    "present": { "ich": "schreibe", "du": "schreibst", "er_sie_es": "schreibt", "wir": "schreiben", "ihr": "schreibt", "sie_Sie": "schreiben" },
    "imperative": { "du": "schreib!", "ihr": "schreibt!", "Sie": "schreiben Sie!" },
    "past_tenses": { "präteritum": "schrieb", "partizip_ii": "geschrieben" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat geschrieben" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "schreiben + an + Dativ", "prepositions": ["an"], "explanation": "To write to someone.", "examples": ["Ich schreibe einen Brief an meine Oma.", "Schreib mir eine E-Mail."], "derived": null }
    ]
  },
  {
    "base": "hören",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to hear", "to listen"],
    "tip": "Regular verb. 'Zuhören' (separable) = to listen attentively. 'Musik hören' = to listen to music.",
    "present": { "ich": "höre", "du": "hörst", "er_sie_es": "hört", "wir": "hören", "ihr": "hört", "sie_Sie": "hören" },
    "imperative": { "du": "hör!", "ihr": "hört!", "Sie": "hören Sie!" },
    "past_tenses": { "präteritum": "hörte", "partizip_ii": "gehört" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gehört" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "hören + Akkusativ", "prepositions": [], "explanation": "To hear/listen to.", "examples": ["Ich höre Musik.", "Hörst du das?", "Er hört Radio."], "derived": null }
    ]
  },
  {
    "base": "heißen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to be called", "to mean"],
    "tip": "Used for names: 'Ich heiße Maria'. Also means 'to mean': 'Was heißt das auf Deutsch?'",
    "present": { "ich": "heiße", "du": "heißt", "er_sie_es": "heißt", "wir": "heißen", "ihr": "heißt", "sie_Sie": "heißen" },
    "imperative": { "du": "heiß!", "ihr": "heißt!", "Sie": "heißen Sie!" },
    "past_tenses": { "präteritum": "hieß", "partizip_ii": "geheißen" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat geheißen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "heißen + Nominativ", "prepositions": [], "explanation": "Name or meaning.", "examples": ["Ich heiße Thomas.", "Wie heißt du?", "Was heißt 'Haus' auf Englisch?"], "derived": null }
    ]
  },
  {
    "base": "fragen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to ask"],
    "tip": "Regular verb. 'Fragen nach' = to ask about something. The person asked is in Akkusativ.",
    "common_mistakes": ["'Ich frage ihn' (I ask him — Akkusativ), not 'Ich frage ihm' (Dativ)."],
    "present": { "ich": "frage", "du": "fragst", "er_sie_es": "fragt", "wir": "fragen", "ihr": "fragt", "sie_Sie": "fragen" },
    "imperative": { "du": "frag!", "ihr": "fragt!", "Sie": "fragen Sie!" },
    "past_tenses": { "präteritum": "fragte", "partizip_ii": "gefragt" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gefragt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "fragen + Akkusativ", "prepositions": [], "explanation": "To ask someone.", "examples": ["Ich frage den Lehrer.", "Frag mich!", "Er fragt nach dem Weg."], "derived": null }
    ]
  },
  {
    "base": "antworten",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to answer", "to reply"],
    "tip": "Takes Dativ for the person: 'Ich antworte ihm' (I answer him). On a question: 'auf eine Frage antworten'.",
    "common_mistakes": ["The person answered is Dativ: 'Ich antworte dir', not 'Ich antworte dich'."],
    "present": { "ich": "antworte", "du": "antwortest", "er_sie_es": "antwortet", "wir": "antworten", "ihr": "antwortet", "sie_Sie": "antworten" },
    "imperative": { "du": "antworte!", "ihr": "antwortet!", "Sie": "antworten Sie!" },
    "past_tenses": { "präteritum": "antwortete", "partizip_ii": "geantwortet" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat geantwortet" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "antworten + Dativ / auf Akkusativ", "prepositions": ["auf"], "explanation": "To answer someone / to respond to something.", "examples": ["Ich antworte dem Lehrer.", "Er antwortet auf die Frage.", "Antworte mir!"], "derived": null }
    ]
  },
  {
    "base": "nehmen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to take"],
    "tip": "Stem vowel change: e→i (du nimmst, er nimmt). Very common in everyday German.",
    "present": { "ich": "nehme", "du": "nimmst", "er_sie_es": "nimmt", "wir": "nehmen", "ihr": "nehmt", "sie_Sie": "nehmen" },
    "imperative": { "du": "nimm!", "ihr": "nehmt!", "Sie": "nehmen Sie!" },
    "past_tenses": { "präteritum": "nahm", "partizip_ii": "genommen" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat genommen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "nehmen + Akkusativ", "prepositions": [], "explanation": "To take something.", "examples": ["Ich nehme den Bus.", "Nimm eine Tablette!", "Er hat das Buch genommen."], "derived": null }
    ]
  },
  {
    "base": "geben",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to give"],
    "tip": "Stem vowel change: e→i (du gibst, er gibt). Double-object verb: Dativ (to whom) + Akkusativ (what). Also: 'es gibt' = there is/are.",
    "common_mistakes": ["'Gib mir das Buch.' Person = Dativ, thing = Akkusativ. Don't mix them up."],
    "present": { "ich": "gebe", "du": "gibst", "er_sie_es": "gibt", "wir": "geben", "ihr": "gebt", "sie_Sie": "geben" },
    "imperative": { "du": "gib!", "ihr": "gebt!", "Sie": "geben Sie!" },
    "past_tenses": { "präteritum": "gab", "partizip_ii": "gegeben" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gegeben" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "geben + Dativ + Akkusativ", "prepositions": [], "explanation": "To give someone something.", "examples": ["Ich gebe dir das Buch.", "Er gibt mir sein Telefon.", "Gib mir bitte Salz."], "derived": null },
      { "label": "es gibt + Akkusativ", "prepositions": [], "explanation": "There is / there are.", "examples": ["Es gibt viele Restaurants hier.", "Gibt es noch Milch?"], "derived": null }
    ]
  },
  {
    "base": "stehen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to stand"],
    "tip": "Strong verb. 'Im Stau stehen' = to be stuck in traffic. Can describe where something is located.",
    "present": { "ich": "stehe", "du": "stehst", "er_sie_es": "steht", "wir": "stehen", "ihr": "steht", "sie_Sie": "stehen" },
    "imperative": { "du": "steh!", "ihr": "steht!", "Sie": "stehen Sie!" },
    "past_tenses": { "präteritum": "stand", "partizip_ii": "gestanden" },
    "auxiliaries": [{ "aux": "haben", "condition": "default (in most regions)", "perfekt": "hat gestanden" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "stehen + location", "prepositions": ["auf", "an", "in", "vor"], "explanation": "To stand somewhere / to be located.", "examples": ["Das Buch steht im Regal.", "Er steht an der Tür.", "Ich stehe vor dem Supermarkt."], "derived": null }
    ]
  },
  {
    "base": "sitzen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to sit"],
    "tip": "Strong verb. 'Sitzen' describes a seated state, 'sich setzen' is the act of sitting down.",
    "common_mistakes": ["'Ich sitze' = I am sitting. 'Ich setze mich' = I am sitting down (action)."],
    "present": { "ich": "sitze", "du": "sitzt", "er_sie_es": "sitzt", "wir": "sitzen", "ihr": "sitzt", "sie_Sie": "sitzen" },
    "imperative": { "du": "sitz!", "ihr": "sitzt!", "Sie": "sitzen Sie!" },
    "past_tenses": { "präteritum": "saß", "partizip_ii": "gesessen" },
    "auxiliaries": [{ "aux": "haben", "condition": "default", "perfekt": "hat gesessen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "sitzen + location", "prepositions": ["auf", "an", "in", "neben"], "explanation": "To sit somewhere.", "examples": ["Ich sitze auf einem Stuhl.", "Sie sitzt am Tisch.", "Er sitzt im Auto."], "derived": null }
    ]
  },
  {
    "base": "schlafen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to sleep"],
    "tip": "Stem vowel change: a→ä (du schläfst, er schläft). 'Gut schlafen' = to sleep well.",
    "present": { "ich": "schlafe", "du": "schläfst", "er_sie_es": "schläft", "wir": "schlafen", "ihr": "schlaft", "sie_Sie": "schlafen" },
    "imperative": { "du": "schlaf!", "ihr": "schlaft!", "Sie": "schlafen Sie!" },
    "past_tenses": { "präteritum": "schlief", "partizip_ii": "geschlafen" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat geschlafen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "schlafen + gut/schlecht", "prepositions": [], "explanation": "Quality of sleep.", "examples": ["Ich schlafe gut.", "Er schläft schlecht.", "Hast du gut geschlafen?"], "derived": null }
    ]
  },
  {
    "base": "suchen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to search", "to look for"],
    "tip": "Regular verb. Takes Akkusativ for what is being searched for. 'Suche' is also used in job ads.",
    "present": { "ich": "suche", "du": "suchst", "er_sie_es": "sucht", "wir": "suchen", "ihr": "sucht", "sie_Sie": "suchen" },
    "imperative": { "du": "such!", "ihr": "sucht!", "Sie": "suchen Sie!" },
    "past_tenses": { "präteritum": "suchte", "partizip_ii": "gesucht" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gesucht" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "suchen + Akkusativ", "prepositions": [], "explanation": "To look for something.", "examples": ["Ich suche meine Schlüssel.", "Er sucht eine Wohnung.", "Gesucht: Koch!"], "derived": null }
    ]
  },
  {
    "base": "finden",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to find", "to think (opinion)"],
    "tip": "Strong verb. Also used for opinions: 'Ich finde das gut' = I think that's good.",
    "present": { "ich": "finde", "du": "findest", "er_sie_es": "findet", "wir": "finden", "ihr": "findet", "sie_Sie": "finden" },
    "imperative": { "du": "find!", "ihr": "findet!", "Sie": "finden Sie!" },
    "past_tenses": { "präteritum": "fand", "partizip_ii": "gefunden" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gefunden" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "finden + Akkusativ", "prepositions": [], "explanation": "To find or to consider.", "examples": ["Ich finde das interessant.", "Hast du deinen Schlüssel gefunden?", "Wie findest du das?"], "derived": null }
    ]
  },
  {
    "base": "spielen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to play"],
    "tip": "Regular verb. Used for sports: 'Fußball spielen', instruments: 'Klavier spielen', games: 'Karten spielen'.",
    "present": { "ich": "spiele", "du": "spielst", "er_sie_es": "spielt", "wir": "spielen", "ihr": "spielt", "sie_Sie": "spielen" },
    "imperative": { "du": "spiel!", "ihr": "spielt!", "Sie": "spielen Sie!" },
    "past_tenses": { "präteritum": "spielte", "partizip_ii": "gespielt" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gespielt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "spielen + Akkusativ", "prepositions": [], "explanation": "To play something.", "examples": ["Ich spiele Fußball.", "Sie spielt Gitarre.", "Wir spielen Karten."], "derived": null }
    ]
  },
  {
    "base": "wissen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to know (a fact)"],
    "tip": "Different from 'kennen' (to know a person/place). 'Wissen' is for facts and information.",
    "common_mistakes": ["'Ich weiß seinen Namen' (I know his name — fact). 'Ich kenne ihn' (I know him — person). Don't swap them!"],
    "present": { "ich": "weiß", "du": "weißt", "er_sie_es": "weiß", "wir": "wissen", "ihr": "wisst", "sie_Sie": "wissen" },
    "imperative": { "du": "wisse!", "ihr": "wisst!", "Sie": "wissen Sie!" },
    "past_tenses": { "präteritum": "wusste", "partizip_ii": "gewusst" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gewusst" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "wissen + dass-Satz / W-Frage", "prepositions": [], "explanation": "To know a fact.", "examples": ["Ich weiß, dass er kommt.", "Weißt du, wo er wohnt?", "Ich weiß es nicht."], "derived": null }
    ]
  },
  {
    "base": "kennen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to know (a person/place)"],
    "tip": "Use for people, places, things you are familiar with. 'Kennst du Berlin?' 'Kennen Sie Herrn Müller?'",
    "common_mistakes": ["Don't use 'kennen' for facts. 'Ich kenne die Antwort' is unusual — say 'Ich weiß die Antwort'."],
    "present": { "ich": "kenne", "du": "kennst", "er_sie_es": "kennt", "wir": "kennen", "ihr": "kennt", "sie_Sie": "kennen" },
    "imperative": { "du": "kenn!", "ihr": "kennt!", "Sie": "kennen Sie!" },
    "past_tenses": { "präteritum": "kannte", "partizip_ii": "gekannt" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gekannt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "kennen + Akkusativ", "prepositions": [], "explanation": "To know a person or place.", "examples": ["Ich kenne diesen Mann.", "Kennst du München?", "Wir kennen uns schon lange."], "derived": null }
    ]
  },
  {
    "base": "laufen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to run", "to walk"],
    "tip": "Stem vowel change: a→äu (du läufst, er läuft). Uses 'sein' in Perfekt for movement.",
    "present": { "ich": "laufe", "du": "läufst", "er_sie_es": "läuft", "wir": "laufen", "ihr": "lauft", "sie_Sie": "laufen" },
    "imperative": { "du": "lauf!", "ihr": "lauft!", "Sie": "laufen Sie!" },
    "past_tenses": { "präteritum": "lief", "partizip_ii": "gelaufen" },
    "auxiliaries": [{ "aux": "sein", "condition": "movement", "perfekt": "ist gelaufen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "laufen + direction/location", "prepositions": ["zu", "in", "durch"], "explanation": "To run/walk somewhere.", "examples": ["Ich laufe jeden Morgen.", "Er läuft in den Park.", "Sie ist nach Hause gelaufen."], "derived": null }
    ]
  },
  {
    "base": "bringen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to bring"],
    "tip": "Mixed verb (like 'kennen'). Double-object: Dativ (for whom) + Akkusativ (what).",
    "present": { "ich": "bringe", "du": "bringst", "er_sie_es": "bringt", "wir": "bringen", "ihr": "bringt", "sie_Sie": "bringen" },
    "imperative": { "du": "bring!", "ihr": "bringt!", "Sie": "bringen Sie!" },
    "past_tenses": { "präteritum": "brachte", "partizip_ii": "gebracht" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gebracht" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "bringen + Dativ + Akkusativ", "prepositions": [], "explanation": "To bring someone something.", "examples": ["Ich bringe dir Kaffee.", "Kannst du mir die Zeitung bringen?", "Er bringt uns das Essen."], "derived": null }
    ]
  },
  {
    "base": "öffnen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to open"],
    "tip": "Regular verb. Adds -e- before t-endings: öffnest, öffnet. Opposite: schließen (to close).",
    "present": { "ich": "öffne", "du": "öffnest", "er_sie_es": "öffnet", "wir": "öffnen", "ihr": "öffnet", "sie_Sie": "öffnen" },
    "imperative": { "du": "öffne!", "ihr": "öffnet!", "Sie": "öffnen Sie!" },
    "past_tenses": { "präteritum": "öffnete", "partizip_ii": "geöffnet" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat geöffnet" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "öffnen + Akkusativ", "prepositions": [], "explanation": "To open something.", "examples": ["Öffne bitte die Tür.", "Das Geschäft öffnet um 9 Uhr.", "Er öffnet das Fenster."], "derived": null }
    ]
  },
  {
    "base": "schließen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to close", "to shut"],
    "tip": "Strong verb. Note spelling: 'schließen' has 'ie'. Opposite: öffnen.",
    "present": { "ich": "schließe", "du": "schließt", "er_sie_es": "schließt", "wir": "schließen", "ihr": "schließt", "sie_Sie": "schließen" },
    "imperative": { "du": "schließ!", "ihr": "schließt!", "Sie": "schließen Sie!" },
    "past_tenses": { "präteritum": "schloss", "partizip_ii": "geschlossen" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat geschlossen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "schließen + Akkusativ", "prepositions": [], "explanation": "To close something.", "examples": ["Bitte schließ die Tür.", "Das Museum schließt um 18 Uhr.", "Er schließt das Fenster."], "derived": null }
    ]
  },
  {
    "base": "helfen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to help"],
    "tip": "Stem vowel change: e→i (du hilfst, er hilft). Takes Dativ for the person helped!",
    "common_mistakes": ["The person you help is Dativ: 'Ich helfe dir', not 'Ich helfe dich'."],
    "present": { "ich": "helfe", "du": "hilfst", "er_sie_es": "hilft", "wir": "helfen", "ihr": "helft", "sie_Sie": "helfen" },
    "imperative": { "du": "hilf!", "ihr": "helft!", "Sie": "helfen Sie!" },
    "past_tenses": { "präteritum": "half", "partizip_ii": "geholfen" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat geholfen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "helfen + Dativ", "prepositions": [], "explanation": "To help someone (Dativ).", "examples": ["Ich helfe dir.", "Kann ich Ihnen helfen?", "Er hilft seiner Mutter."], "derived": null }
    ]
  },
  {
    "base": "verstehen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to understand"],
    "tip": "Strong verb. 'Ich verstehe das nicht.' Very useful phrase when learning German!",
    "present": { "ich": "verstehe", "du": "verstehst", "er_sie_es": "versteht", "wir": "verstehen", "ihr": "versteht", "sie_Sie": "verstehen" },
    "imperative": { "du": "versteh!", "ihr": "versteht!", "Sie": "verstehen Sie!" },
    "past_tenses": { "präteritum": "verstand", "partizip_ii": "verstanden" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat verstanden" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "verstehen + Akkusativ", "prepositions": [], "explanation": "To understand something.", "examples": ["Ich verstehe das nicht.", "Verstehst du mich?", "Er hat die Frage nicht verstanden."], "derived": null }
    ]
  },
  {
    "base": "bezahlen",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to pay"],
    "tip": "Regular verb. 'Bezahlen' takes Akkusativ for the amount. 'Für etwas bezahlen' = to pay for something.",
    "present": { "ich": "bezahle", "du": "bezahlst", "er_sie_es": "bezahlt", "wir": "bezahlen", "ihr": "bezahlt", "sie_Sie": "bezahlen" },
    "imperative": { "du": "bezahl!", "ihr": "bezahlt!", "Sie": "bezahlen Sie!" },
    "past_tenses": { "präteritum": "bezahlte", "partizip_ii": "bezahlt" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat bezahlt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "bezahlen + Akkusativ / für + Akkusativ", "prepositions": ["für"], "explanation": "To pay (for) something.", "examples": ["Ich bezahle die Rechnung.", "Er bezahlt für das Essen.", "Kann ich mit Karte bezahlen?"], "derived": null }
    ]
  },
  {
    "base": "kosten",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to cost"],
    "tip": "The subject is the thing being bought, and the price is in Akkusativ.",
    "present": { "ich": "koste", "du": "kostest", "er_sie_es": "kostet", "wir": "kosten", "ihr": "kostet", "sie_Sie": "kosten" },
    "imperative": { "du": "—", "ihr": "—", "Sie": "—" },
    "past_tenses": { "präteritum": "kostete", "partizip_ii": "gekostet" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gekostet" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "kosten + Akkusativ (price)", "prepositions": [], "explanation": "To cost a certain amount.", "examples": ["Das kostet 10 Euro.", "Was kostet das?", "Der Kaffee kostet 3 Euro."], "derived": null }
    ]
  },
  {
    "base": "warten",
    "level": "A1",
    "reflexive": false,
    "separable": false,
    "separable_prefix": null,
    "translations": ["to wait"],
    "tip": "Regular verb. 'Warten auf' = to wait for someone/something (takes Akkusativ).",
    "present": { "ich": "warte", "du": "wartest", "er_sie_es": "wartet", "wir": "warten", "ihr": "wartet", "sie_Sie": "warten" },
    "imperative": { "du": "warte!", "ihr": "wartet!", "Sie": "warten Sie!" },
    "past_tenses": { "präteritum": "wartete", "partizip_ii": "gewartet" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gewartet" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "warten + auf + Akkusativ", "prepositions": ["auf"], "explanation": "To wait for someone/something.", "examples": ["Ich warte auf den Bus.", "Warte auf mich!", "Er hat lang auf sie gewartet."], "derived": null }
    ]
  },
{
    "base": "schlafen",
    "level": "A1",
    "translations": ["to sleep"],
    "tip": "Strong verb. Irregular in present: ich schlafe, du schläfst, er schläft.",
    "common_mistakes": ["Don't confuse einschlafen (to fall asleep) with schlafen (to sleep)"],
    "present": {"ich": "schlafe", "du": "schläfst", "er_sie_es": "schläft", "wir": "schlafen", "ihr": "schlaft", "sie_Sie": "schlafen"},
    "past_tenses": {"präteritum": "schlief", "partizip_ii": "geschlafen"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat geschlafen"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "schlafen + (duration/place)", "prepositions": [], "explanation": "Describes sleeping with time or location.", "examples": ["Ich schlafe acht Stunden.", "Sie schläft im Bett."]}]
  },
  {
    "base": "aufwachen",
    "level": "A1",
    "separable": true,
    "separable_prefix": "auf",
    "translations": ["to wake up"],
    "tip": "Separable verb: Ich wache auf. Motion toward a new state → uses sein in Perfekt.",
    "present": {"ich": "wache auf", "du": "wachst auf", "er_sie_es": "wacht auf", "wir": "wachen auf", "ihr": "wacht auf", "sie_Sie": "wachen auf"},
    "past_tenses": {"präteritum": "wachte auf", "partizip_ii": "aufgewacht"},
    "auxiliaries": [{"aux": "sein", "condition": "always", "perfekt": "ist aufgewacht"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "aufwachen + time", "prepositions": [], "explanation": "Waking at a specific time.", "examples": ["Ich wache um 7 Uhr auf.", "Er ist früh aufgewacht."]}]
  },
  {
    "base": "brauchen",
    "level": "A1",
    "translations": ["to need", "to require"],
    "tip": "Very common. 'Ich brauche' = I need. Don't confuse with möchten (to want/would like).",
    "common_mistakes": ["'Ich brauche ein Buch' (accusative), not 'Ich brauche einem Buch'"],
    "present": {"ich": "brauche", "du": "brauchst", "er_sie_es": "braucht", "wir": "brauchen", "ihr": "braucht", "sie_Sie": "brauchen"},
    "past_tenses": {"präteritum": "brauchte", "partizip_ii": "gebraucht"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat gebraucht"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "brauchen + Akkusativ", "prepositions": [], "explanation": "Need something (accusative).", "examples": ["Ich brauche Hilfe.", "Sie braucht mehr Zeit.", "Wir brauchen ein Taxi."]}]
  },
  {
    "base": "öffnen",
    "level": "A1",
    "translations": ["to open"],
    "tip": "Regular verb. Transitive: öffnen (to open something). Intransitive: sich öffnen (to open/open up).",
    "present": {"ich": "öffne", "du": "öffnest", "er_sie_es": "öffnet", "wir": "öffnen", "ihr": "öffnet", "sie_Sie": "öffnen"},
    "past_tenses": {"präteritum": "öffnete", "partizip_ii": "geöffnet"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat geöffnet"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "öffnen + Akkusativ", "prepositions": [], "explanation": "Open something.", "examples": ["Ich öffne die Tür.", "Sie öffnet das Fenster.", "Der Laden öffnet um 9 Uhr."]}]
  },
  {
    "base": "schließen",
    "level": "A1",
    "translations": ["to close", "to shut", "to conclude"],
    "tip": "Strong irregular verb. Partizip II: geschlossen (note double s→ssen).",
    "present": {"ich": "schließe", "du": "schließt", "er_sie_es": "schließt", "wir": "schließen", "ihr": "schließt", "sie_Sie": "schließen"},
    "past_tenses": {"präteritum": "schloss", "partizip_ii": "geschlossen"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat geschlossen"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "schließen + Akkusativ", "prepositions": [], "explanation": "Close something.", "examples": ["Ich schließe die Tür.", "Das Geschäft schließt um 20 Uhr.", "Schließen Sie bitte das Fenster."]}]
  },
  {
    "base": "bezahlen",
    "level": "A1",
    "translations": ["to pay", "to pay for"],
    "tip": "Can be used with or without an object. Die Rechnung bezahlen = to pay the bill. Also: zahlen (slightly more informal).",
    "present": {"ich": "bezahle", "du": "bezahlst", "er_sie_es": "bezahlt", "wir": "bezahlen", "ihr": "bezahlt", "sie_Sie": "bezahlen"},
    "past_tenses": {"präteritum": "bezahlte", "partizip_ii": "bezahlt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat bezahlt"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "bezahlen + Akkusativ", "prepositions": [], "explanation": "Pay for something.", "examples": ["Ich bezahle die Rechnung.", "Hast du bezahlt?", "Das habe ich schon bezahlt."]}]
  },
  {
    "base": "warten",
    "level": "A1",
    "translations": ["to wait"],
    "tip": "warten auf + Akkusativ = to wait for someone/something.",
    "common_mistakes": ["warten auf takes Akkusativ: 'Ich warte auf dich' not 'Ich warte auf dir'"],
    "present": {"ich": "warte", "du": "wartest", "er_sie_es": "wartet", "wir": "warten", "ihr": "wartet", "sie_Sie": "warten"},
    "past_tenses": {"präteritum": "wartete", "partizip_ii": "gewartet"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat gewartet"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "warten auf + Akkusativ", "prepositions": ["auf"], "explanation": "Wait for someone or something.", "examples": ["Ich warte auf den Bus.", "Worauf wartest du?", "Wir warten auf dich."]}]
  },
  {
    "base": "fragen",
    "level": "A1",
    "translations": ["to ask"],
    "tip": "fragen + Akkusativ (person asked). fragen nach + Dativ (what is asked about).",
    "present": {"ich": "frage", "du": "fragst", "er_sie_es": "fragt", "wir": "fragen", "ihr": "fragt", "sie_Sie": "fragen"},
    "past_tenses": {"präteritum": "fragte", "partizip_ii": "gefragt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat gefragt"}],
    "dual_auxiliary": false,
    "patterns": [
      {"label": "fragen + Person (Akk.)", "prepositions": [], "explanation": "Ask a person something.", "examples": ["Ich frage den Lehrer.", "Sie fragt mich nach dem Weg."]},
      {"label": "fragen nach + Dativ", "prepositions": ["nach"], "explanation": "Ask about something.", "examples": ["Er fragt nach dem Preis.", "Sie fragte nach dem Weg."]}
    ]
  },
  {
    "base": "antworten",
    "level": "A1",
    "translations": ["to answer", "to reply"],
    "tip": "antworten + Dativ (person answered) OR antworten auf + Akkusativ (what is answered).",
    "common_mistakes": ["antworten takes Dative for the person: 'Ich antworte ihm' not 'Ich antworte ihn'"],
    "present": {"ich": "antworte", "du": "antwortest", "er_sie_es": "antwortet", "wir": "antworten", "ihr": "antwortet", "sie_Sie": "antworten"},
    "past_tenses": {"präteritum": "antwortete", "partizip_ii": "geantwortet"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat geantwortet"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "antworten + Dativ", "prepositions": [], "explanation": "Answer a person.", "examples": ["Ich antworte ihm.", "Antwort mir bitte!", "Sie hat auf seine Frage geantwortet."]}]
  },
  {
    "base": "zeigen",
    "level": "A1",
    "translations": ["to show", "to point", "to demonstrate"],
    "tip": "zeigen + Dativ (person shown) + Akkusativ (thing shown). jemandem etwas zeigen.",
    "present": {"ich": "zeige", "du": "zeigst", "er_sie_es": "zeigt", "wir": "zeigen", "ihr": "zeigt", "sie_Sie": "zeigen"},
    "past_tenses": {"präteritum": "zeigte", "partizip_ii": "gezeigt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat gezeigt"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "jemandem etwas zeigen", "prepositions": [], "explanation": "Show someone something (Dative + Accusative).", "examples": ["Zeig mir das!", "Er zeigt ihr den Weg.", "Ich zeige dir mein Zimmer."]}]
  },
  {
    "base": "hören",
    "level": "A1",
    "translations": ["to hear", "to listen"],
    "tip": "hören = to hear (passively). zuhören = to listen (actively). Radio hören = to listen to the radio.",
    "present": {"ich": "höre", "du": "hörst", "er_sie_es": "hört", "wir": "hören", "ihr": "hört", "sie_Sie": "hören"},
    "past_tenses": {"präteritum": "hörte", "partizip_ii": "gehört"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat gehört"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "hören + Akkusativ", "prepositions": [], "explanation": "Hear something.", "examples": ["Ich höre Musik.", "Hörst du das?", "Wir hören Radio."]}]
  },
  {
    "base": "sehen",
    "level": "A1",
    "translations": ["to see", "to look", "to watch"],
    "tip": "Strong verb. Irregular present: du siehst, er sieht. Fernsehen = to watch TV.",
    "present": {"ich": "sehe", "du": "siehst", "er_sie_es": "sieht", "wir": "sehen", "ihr": "seht", "sie_Sie": "sehen"},
    "past_tenses": {"präteritum": "sah", "partizip_ii": "gesehen"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat gesehen"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "sehen + Akkusativ", "prepositions": [], "explanation": "See something or someone.", "examples": ["Ich sehe einen Hund.", "Hast du ihn gesehen?", "Wir sehen fern."]}]
  },
  {
    "base": "kennen",
    "level": "A1",
    "translations": ["to know (a person/place)", "to be familiar with"],
    "tip": "kennen = to know (be acquainted with). Don't confuse with wissen = to know (a fact).",
    "common_mistakes": ["'Ich kenne ihn' (I know him) vs 'Ich weiß es' (I know it/that). Kennen for people/places, wissen for facts."],
    "present": {"ich": "kenne", "du": "kennst", "er_sie_es": "kennt", "wir": "kennen", "ihr": "kennt", "sie_Sie": "kennen"},
    "past_tenses": {"präteritum": "kannte", "partizip_ii": "gekannt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat gekannt"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "kennen + Akkusativ", "prepositions": [], "explanation": "Know someone or a place.", "examples": ["Ich kenne ihn gut.", "Kennst du Berlin?", "Sie kennt die Antwort nicht."]}]
  },
  {
    "base": "verstehen",
    "level": "A1",
    "translations": ["to understand"],
    "tip": "Strong irregular verb. Very useful for language learning: 'Ich verstehe das nicht.' = 'I don't understand.'",
    "present": {"ich": "verstehe", "du": "verstehst", "er_sie_es": "versteht", "wir": "verstehen", "ihr": "versteht", "sie_Sie": "verstehen"},
    "past_tenses": {"präteritum": "verstand", "partizip_ii": "verstanden"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat verstanden"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "verstehen + Akkusativ", "prepositions": [], "explanation": "Understand something.", "examples": ["Ich verstehe das nicht.", "Verstehst du mich?", "Sie hat alles verstanden."]}]
  },
  {
    "base": "vergessen",
    "level": "A1",
    "translations": ["to forget"],
    "tip": "Strong verb with irregular present: du vergisst, er vergisst. Very common in daily life.",
    "common_mistakes": ["Don't say 'Ich habe vergessen es' — correct: 'Ich habe es vergessen' (object before Partizip)."],
    "present": {"ich": "vergesse", "du": "vergisst", "er_sie_es": "vergisst", "wir": "vergessen", "ihr": "vergesst", "sie_Sie": "vergessen"},
    "past_tenses": {"präteritum": "vergaß", "partizip_ii": "vergessen"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat vergessen"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "vergessen + Akkusativ / zu-Infinitiv", "prepositions": [], "explanation": "Forget something or to do something.", "examples": ["Ich habe meinen Schlüssel vergessen.", "Er vergaß anzurufen.", "Vergiss es nicht!"]}]
  },
{"base":"spielen","level":"A1","translations":["to play"],"tip":"Very versatile: Klavier spielen (play piano), Fußball spielen (play football), eine Rolle spielen (play a role).","present":{"ich":"spiele","du":"spielst","er_sie_es":"spielt","wir":"spielen","ihr":"spielt","sie_Sie":"spielen"},"past_tenses":{"präteritum":"spielte","partizip_ii":"gespielt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat gespielt"}],"dual_auxiliary":false,"patterns":[{"label":"spielen + Akkusativ","prepositions":[],"explanation":"Play something.","examples":["Ich spiele Gitarre.","Wir spielen Fußball.","Er spielt eine wichtige Rolle."]}]},
  {"base":"lachen","level":"A1","translations":["to laugh"],"tip":"lachen über + Akkusativ = to laugh about something. Don't confuse with lächeln (to smile).","present":{"ich":"lache","du":"lachst","er_sie_es":"lacht","wir":"lachen","ihr":"lacht","sie_Sie":"lachen"},"past_tenses":{"präteritum":"lachte","partizip_ii":"gelacht"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat gelacht"}],"dual_auxiliary":false,"patterns":[{"label":"lachen (über + Akk.)","prepositions":["über"],"explanation":"Laugh (about something).","examples":["Er lacht laut.","Wir lachen über den Witz.","Sie hat herzlich gelacht."]}]},
  {"base":"weinen","level":"A1","translations":["to cry","to weep"],"tip":"weinen über + Akkusativ = to cry about something. vor Freude weinen = to cry with joy.","present":{"ich":"weine","du":"weinst","er_sie_es":"weint","wir":"weinen","ihr":"weint","sie_Sie":"weinen"},"past_tenses":{"präteritum":"weinte","partizip_ii":"geweint"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat geweint"}],"dual_auxiliary":false,"patterns":[{"label":"weinen (über + Akk.)","prepositions":["über"],"explanation":"Cry about something.","examples":["Das Kind weint.","Sie weint vor Freude.","Er hat über den Film geweint."]}]},
  {"base":"singen","level":"A1","translations":["to sing"],"tip":"Strong irregular verb. ein Lied singen = to sing a song.","present":{"ich":"singe","du":"singst","er_sie_es":"singt","wir":"singen","ihr":"singt","sie_Sie":"singen"},"past_tenses":{"präteritum":"sang","partizip_ii":"gesungen"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat gesungen"}],"dual_auxiliary":false,"patterns":[{"label":"singen + (Akkusativ)","prepositions":[],"explanation":"Sing a song.","examples":["Sie singt wunderschön.","Wir singen ein Lied.","Er sang im Chor."]}]},
  {"base":"tanzen","level":"A1","translations":["to dance"],"tip":"tanzen gehen = to go dancing. Uses haben in Perfekt (activity), but sein if movement is emphasised.","present":{"ich":"tanze","du":"tanzt","er_sie_es":"tanzt","wir":"tanzen","ihr":"tanzt","sie_Sie":"tanzen"},"past_tenses":{"präteritum":"tanzte","partizip_ii":"getanzt"},"auxiliaries":[{"aux":"haben","condition":"activity","perfekt":"hat getanzt"},{"aux":"sein","condition":"movement across space (rare)","perfekt":"ist getanzt"}],"dual_auxiliary":true,"patterns":[{"label":"tanzen (auf/bei)","prepositions":[],"explanation":"Dance.","examples":["Sie tanzt gut.","Wir gehen tanzen.","Er hat auf der Party getanzt."]}]},
  {"base":"malen","level":"A1","translations":["to paint","to draw"],"tip":"malen = to paint/draw (art). Don't confuse with streichen (to paint walls) or zeichnen (to draw technically).","present":{"ich":"male","du":"malst","er_sie_es":"malt","wir":"malen","ihr":"malt","sie_Sie":"malen"},"past_tenses":{"präteritum":"malte","partizip_ii":"gemalt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat gemalt"}],"dual_auxiliary":false,"patterns":[{"label":"malen + Akkusativ","prepositions":[],"explanation":"Paint or draw something.","examples":["Sie malt ein Bild.","Das Kind malt.","Er hat ein Porträt gemalt."]}]},
  {"base":"zeichnen","level":"A1","translations":["to draw","to sketch"],"tip":"zeichnen = technical/precise drawing. unterschreiben = to sign. Interesting: unterschreiben literally contains zeichnen.","present":{"ich":"zeichne","du":"zeichnest","er_sie_es":"zeichnet","wir":"zeichnen","ihr":"zeichnet","sie_Sie":"zeichnen"},"past_tenses":{"präteritum":"zeichnete","partizip_ii":"gezeichnet"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat gezeichnet"}],"dual_auxiliary":false,"patterns":[{"label":"zeichnen + Akkusativ","prepositions":[],"explanation":"Draw something.","examples":["Ich zeichne ein Haus.","Er zeichnet gut.","Sie hat einen Plan gezeichnet."]}]},
  {"base":"lesen","level":"A1","translations":["to read"],"tip":"Strong irregular verb. Irregular present: du liest, er liest. lesen lernen = to learn to read.","present":{"ich":"lese","du":"liest","er_sie_es":"liest","wir":"lesen","ihr":"lest","sie_Sie":"lesen"},"past_tenses":{"präteritum":"las","partizip_ii":"gelesen"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat gelesen"}],"dual_auxiliary":false,"patterns":[{"label":"lesen + Akkusativ","prepositions":[],"explanation":"Read something.","examples":["Ich lese ein Buch.","Was liest du gerade?","Sie hat die Zeitung gelesen."]}]},
  {"base":"schreiben","level":"A1","translations":["to write"],"tip":"Strong irregular verb. schreiben an + Akkusativ = to write to someone.","present":{"ich":"schreibe","du":"schreibst","er_sie_es":"schreibt","wir":"schreiben","ihr":"schreibt","sie_Sie":"schreiben"},"past_tenses":{"präteritum":"schrieb","partizip_ii":"geschrieben"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat geschrieben"}],"dual_auxiliary":false,"patterns":[{"label":"schreiben + Akkusativ","prepositions":[],"explanation":"Write something.","examples":["Ich schreibe einen Brief.","Schreib das auf!","Er hat eine E-Mail geschrieben."]}]},
  {"base":"rechnen","level":"A1","translations":["to calculate","to count","to do maths"],"tip":"mit etwas rechnen = to expect/reckon with something. rechnen auf + Akkusativ = to count on.","present":{"ich":"rechne","du":"rechnest","er_sie_es":"rechnet","wir":"rechnen","ihr":"rechnet","sie_Sie":"rechnen"},"past_tenses":{"präteritum":"rechnete","partizip_ii":"gerechnet"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat gerechnet"}],"dual_auxiliary":false,"patterns":[{"label":"rechnen + mit (Dativ)","prepositions":["mit"],"explanation":"Calculate, or reckon/expect something.","examples":["Ich kann schnell rechnen.","Damit habe ich nicht gerechnet.","Mit Verzögerungen rechnen."]}]},
  {"base":"zählen","level":"A1","translations":["to count","to number"],"tip":"zählen zu + Dativ = to count among, to belong to a category.","present":{"ich":"zähle","du":"zählst","er_sie_es":"zählt","wir":"zählen","ihr":"zählt","sie_Sie":"zählen"},"past_tenses":{"präteritum":"zählte","partizip_ii":"gezählt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat gezählt"}],"dual_auxiliary":false,"patterns":[{"label":"zählen (bis/von/zu)","prepositions":["zu"],"explanation":"Count up to, or belong to a group.","examples":["Zähl bis zehn!","Er zählt zu den besten.","Wir zählen die Teilnehmer."]}]},
  {"base":"suchen","level":"A1","translations":["to look for","to search","to seek"],"tip":"suchen nach + Dativ = to search for. nach etwas suchen vs. etwas suchen — both common.","present":{"ich":"suche","du":"suchst","er_sie_es":"sucht","wir":"suchen","ihr":"sucht","sie_Sie":"suchen"},"past_tenses":{"präteritum":"suchte","partizip_ii":"gesucht"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat gesucht"}],"dual_auxiliary":false,"patterns":[{"label":"suchen + Akkusativ / nach + Dativ","prepositions":["nach"],"explanation":"Look for something.","examples":["Ich suche meinen Schlüssel.","Wir suchen nach einer Lösung.","Gesucht: Mitarbeiter."]}]},
  {"base":"finden","level":"A1","translations":["to find","to think/consider"],"tip":"Strong verb. Ich finde das gut = I think that's good (opinion). finden can express opinions!","present":{"ich":"finde","du":"findest","er_sie_es":"findet","wir":"finden","ihr":"findet","sie_Sie":"finden"},"past_tenses":{"präteritum":"fand","partizip_ii":"gefunden"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat gefunden"}],"dual_auxiliary":false,"patterns":[{"label":"finden + Akkusativ","prepositions":[],"explanation":"Find something, or find it (+ adjective) = have an opinion.","examples":["Ich finde den Schlüssel.","Wie findest du das?","Er hat eine Lösung gefunden."]}]},
  {"base":"nehmen","level":"A1","translations":["to take","to have (food/transport)"],"tip":"Strong verb, very irregular: du nimmst, er nimmt. nimm! (imperative). Zug nehmen = to take the train.","common_mistakes":["Very irregular present: ich nehme, du nimmst, er nimmt"],"present":{"ich":"nehme","du":"nimmst","er_sie_es":"nimmt","wir":"nehmen","ihr":"nehmt","sie_Sie":"nehmen"},"past_tenses":{"präteritum":"nahm","partizip_ii":"genommen"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat genommen"}],"dual_auxiliary":false,"patterns":[{"label":"nehmen + Akkusativ","prepositions":[],"explanation":"Take something.","examples":["Nehmen Sie Platz!","Ich nehme den Bus.","Nimmst du Zucker?"]}]},
  {"base":"geben","level":"A1","translations":["to give"],"tip":"Strong verb. Dative + Accusative structure: jemandem etwas geben. es gibt = there is/there are.","present":{"ich":"gebe","du":"gibst","er_sie_es":"gibt","wir":"geben","ihr":"gebt","sie_Sie":"geben"},"past_tenses":{"präteritum":"gab","partizip_ii":"gegeben"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat gegeben"}],"dual_auxiliary":false,"patterns":[{"label":"geben + Dativ + Akkusativ","prepositions":[],"explanation":"Give someone something.","examples":["Gib mir das Buch!","Er gibt ihr ein Geschenk.","Es gibt viele Möglichkeiten."]}]},
  {"base":"stellen","level":"A1","translations":["to place","to put (upright)","to pose"],"tip":"stellen = place upright. legen = lay flat. setzen = seat. eine Frage stellen = to ask a question.","present":{"ich":"stelle","du":"stellst","er_sie_es":"stellt","wir":"stellen","ihr":"stellt","sie_Sie":"stellen"},"past_tenses":{"präteritum":"stellte","partizip_ii":"gestellt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat gestellt"}],"dual_auxiliary":false,"patterns":[{"label":"stellen + Akkusativ + (wohin)","prepositions":[],"explanation":"Place something upright, or pose a question.","examples":["Stell die Flasche auf den Tisch.","Eine Frage stellen.","Das stellt ein Problem dar."]}]},
  {"base":"legen","level":"A1","translations":["to lay","to put (flat)"],"tip":"legen = lay flat. stellen = place upright. sich legen = to lie down.","reflexive":true,"present":{"ich":"lege","du":"legst","er_sie_es":"legt","wir":"legen","ihr":"legt","sie_Sie":"legen"},"past_tenses":{"präteritum":"legte","partizip_ii":"gelegt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat gelegt"}],"dual_auxiliary":false,"patterns":[{"label":"legen + Akkusativ + wohin","prepositions":[],"explanation":"Lay something flat somewhere.","examples":["Leg das Buch auf den Tisch.","Er legte sich hin.","Sie hat das Baby ins Bett gelegt."]}]},
  {"base":"stehen","level":"A1","translations":["to stand","to be (standing)"],"tip":"Strong verb. zu jemandem stehen = to stand by someone. Wie steht es? = How are things going?","present":{"ich":"stehe","du":"stehst","er_sie_es":"steht","wir":"stehen","ihr":"steht","sie_Sie":"stehen"},"past_tenses":{"präteritum":"stand","partizip_ii":"gestanden"},"auxiliaries":[{"aux":"haben","condition":"most contexts"},{"aux":"sein","condition":"S. German/Austrian dialect"}],"dual_auxiliary":true,"patterns":[{"label":"stehen + (Ort)","prepositions":[],"explanation":"Stand somewhere, or be standing.","examples":["Er steht vor der Tür.","Ich stehe früh auf.","Das Buch steht im Regal."]}]},
  {"base":"liegen","level":"A1","translations":["to lie","to be located"],"tip":"Strong verb. es liegt an + Dativ = it's due to. Das liegt daran, dass... = That's because...","present":{"ich":"liege","du":"liegst","er_sie_es":"liegt","wir":"liegen","ihr":"liegt","sie_Sie":"liegen"},"past_tenses":{"präteritum":"lag","partizip_ii":"gelegen"},"auxiliaries":[{"aux":"haben","condition":"most contexts"},{"aux":"sein","condition":"S. German/Austrian dialect"}],"dual_auxiliary":true,"patterns":[{"label":"liegen + (Ort)","prepositions":[],"explanation":"Lie (flat) or be located somewhere.","examples":["Das Buch liegt auf dem Tisch.","Berlin liegt in Deutschland.","Es liegt an dir."]}]},
  {"base":"sitzen","level":"A1","translations":["to sit","to be sitting"],"tip":"Strong verb. The prison meaning also exists: Er sitzt im Gefängnis = He is in prison.","present":{"ich":"sitze","du":"sitzt","er_sie_es":"sitzt","wir":"sitzen","ihr":"sitzt","sie_Sie":"sitzen"},"past_tenses":{"präteritum":"saß","partizip_ii":"gesessen"},"auxiliaries":[{"aux":"haben","condition":"most contexts"},{"aux":"sein","condition":"S. German/Austrian dialect"}],"dual_auxiliary":true,"patterns":[{"label":"sitzen + (Ort)","prepositions":[],"explanation":"Sit somewhere.","examples":["Setz dich! / Sitz!","Er sitzt am Schreibtisch.","Wir sitzen auf der Terrasse."]}]}
];

window.verbsA1 = verbsA1;
