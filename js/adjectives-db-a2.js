// adjectives-db-a2.js — A2 Elementary German Adjectives (comprehensive)
const adjectivesA2 = [
  {
    "base": "krank", "level": "A2",
    "comparison": { "positive": "krank", "comparative": "kränker", "superlative_predicative": "am kränksten", "superlative_attributive": "kränkste" },
    "irregular": true,
    "declension_examples": { "strong": "kranker (m)", "weak": "kranke (f)", "mixed": "krankes (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["sick", "ill"],
    "tip": "Comparative with umlaut: krank → kränker. Common phrase: 'Ich bin krank' (I am sick).",
    "examples": ["Ich bin krank.", "Das kranke Kind bleibt zu Hause.", "Er ist kränker als gestern."]
  },
  {
    "base": "gesund", "level": "A2",
    "comparison": { "positive": "gesund", "comparative": "gesünder", "superlative_predicative": "am gesündesten", "superlative_attributive": "gesündeste" },
    "irregular": true,
    "declension_examples": { "strong": "gesunder (m)", "weak": "gesunde (f)", "mixed": "gesundes (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["healthy", "wholesome"],
    "tip": "Comparative: gesünder (umlaut). Used for people, food, and lifestyle.",
    "examples": ["Iss gesund!", "Er führt ein gesundes Leben.", "Das ist sehr gesund."]
  },
  {
    "base": "müde", "level": "A2",
    "comparison": { "positive": "müde", "comparative": "müder", "superlative_predicative": "am müdesten", "superlative_attributive": "müdeste" },
    "irregular": false,
    "declension_examples": { "strong": "müder (m)", "weak": "müde (f)", "mixed": "müdes (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["tired", "weary"],
    "tip": "Very common at A2. Superlative adds -est- (stem ends in -d).",
    "examples": ["Ich bin sehr müde.", "Das müde Kind schläft.", "Er sieht müde aus."]
  },
  {
    "base": "froh", "level": "A2",
    "comparison": { "positive": "froh", "comparative": "froher", "superlative_predicative": "am frohsten", "superlative_attributive": "frohste" },
    "irregular": false,
    "declension_examples": { "strong": "froher (m)", "weak": "frohe (f)", "mixed": "frohes (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["glad", "happy", "pleased"],
    "tip": "Used for mild happiness or relief. 'Ich bin froh, dass...' = I'm glad that... Less intense than 'glücklich'.",
    "examples": ["Ich bin froh, dass du da bist.", "Sie ist froh über das Ergebnis.", "Frohe Weihnachten!"]
  },
  {
    "base": "traurig", "level": "A2",
    "comparison": { "positive": "traurig", "comparative": "trauriger", "superlative_predicative": "am traurigsten", "superlative_attributive": "traurigste" },
    "irregular": false,
    "declension_examples": { "strong": "trauriger (m)", "weak": "traurige (f)", "mixed": "trauriges (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["sad"],
    "tip": "Opposite of froh/glücklich. 'Ich bin traurig, weil...' = I am sad because...",
    "examples": ["Ich bin sehr traurig.", "Warum bist du so traurig?", "Das ist eine traurige Geschichte."]
  },
  {
    "base": "satt", "level": "A2",
    "comparison": { "positive": "satt", "comparative": "satter", "superlative_predicative": "am sattsten", "superlative_attributive": "sattste" },
    "irregular": false,
    "declension_examples": { "strong": "satter (m)", "weak": "satte (f)", "mixed": "sattes (n)" },
    "position": ["predicative"],
    "translations": ["full (after eating)", "satiated"],
    "tip": "'Ich bin satt' = I'm full (after eating). Different from 'voll' which means physically full/filled.",
    "common_mistakes": ["'Ich bin satt' (after eating) vs 'Das Glas ist voll' (the glass is full). Don't confuse these!"],
    "examples": ["Ich bin satt, danke.", "Bist du noch hungrig oder schon satt?", "Nach dem Essen bin ich immer satt."]
  },
  {
    "base": "fertig", "level": "A2",
    "comparison": { "positive": "fertig", "comparative": "fertiger", "superlative_predicative": "am fertigsten", "superlative_attributive": "fertigste" },
    "irregular": false,
    "declension_examples": { "strong": "fertiger (m)", "weak": "fertige (f)", "mixed": "fertiges (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["finished", "done", "ready"],
    "tip": "Very common word. 'Bist du fertig?' = Are you done/ready? Can also mean 'exhausted' colloquially.",
    "examples": ["Ich bin fertig!", "Das Essen ist fertig.", "Bist du schon fertig?"]
  },
  {
    "base": "wichtig", "level": "A2",
    "comparison": { "positive": "wichtig", "comparative": "wichtiger", "superlative_predicative": "am wichtigsten", "superlative_attributive": "wichtigste" },
    "irregular": false,
    "declension_examples": { "strong": "wichtiger (m)", "weak": "wichtige (f)", "mixed": "wichtiges (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["important"],
    "tip": "Very common at A2+. 'Das ist wichtig!' = That's important! Used in many contexts.",
    "examples": ["Das ist sehr wichtig.", "Er ist eine wichtige Person.", "Was ist das Wichtigste für dich?"]
  },
  {
    "base": "nett", "level": "A2",
    "comparison": { "positive": "nett", "comparative": "netter", "superlative_predicative": "am nettesten", "superlative_attributive": "netteste" },
    "irregular": false,
    "declension_examples": { "strong": "netter (m)", "weak": "nette (f)", "mixed": "nettes (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["nice", "kind", "pleasant"],
    "tip": "A friendly but somewhat mild compliment. Stronger: 'freundlich' (friendly), 'nett' can sometimes be faint praise.",
    "examples": ["Er ist sehr nett.", "Das ist nett von dir.", "Sie hat nette Nachbarn."]
  },
  {
    "base": "freundlich", "level": "A2",
    "comparison": { "positive": "freundlich", "comparative": "freundlicher", "superlative_predicative": "am freundlichsten", "superlative_attributive": "freundlichste" },
    "irregular": false,
    "declension_examples": { "strong": "freundlicher (m)", "weak": "freundliche (f)", "mixed": "freundliches (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["friendly", "kind", "pleasant"],
    "tip": "More formal/professional than 'nett'. Used in customer service: 'sehr freundlich' = very friendly.",
    "examples": ["Die Bedienung ist sehr freundlich.", "Er lächelt freundlich.", "Mit freundlichen Grüßen (formal letter closing)."]
  },
  {
    "base": "besonders", "level": "A2",
    "comparison": { "positive": "besonders", "comparative": "—", "superlative_predicative": "—", "superlative_attributive": "besondere" },
    "irregular": false,
    "declension_examples": { "strong": "besonderer (m)", "weak": "besondere (f)", "mixed": "besonderes (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["special", "particular", "especially"],
    "tip": "As adverb: 'besonders gut' = especially good. As adjective: 'ein besonderer Tag' = a special day.",
    "examples": ["Heute ist ein besonderer Tag.", "Das schmeckt besonders gut.", "Er ist nicht besonders groß."]
  },
  {
    "base": "weit", "level": "A2",
    "comparison": { "positive": "weit", "comparative": "weiter", "superlative_predicative": "am weitesten", "superlative_attributive": "weiteste" },
    "irregular": false,
    "declension_examples": { "strong": "weiter (m)", "weak": "weite (f)", "mixed": "weites (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["far", "wide", "distant"],
    "tip": "Used for distance and width. 'Wie weit ist es?' = How far is it? Also: 'weiter' = further/continue.",
    "examples": ["Das ist weit weg.", "Wie weit ist es zum Bahnhof?", "Er wohnt weit von hier."]
  },
  {
    "base": "nah", "level": "A2",
    "comparison": { "positive": "nah", "comparative": "näher", "superlative_predicative": "am nächsten", "superlative_attributive": "nächste" },
    "irregular": true,
    "declension_examples": { "strong": "naher (m)", "weak": "nahe (f)", "mixed": "nahes (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["near", "close"],
    "tip": "Highly irregular superlative: nah → näher → am nächsten / nächste. 'In der Nähe' = nearby.",
    "common_mistakes": ["Superlative: 'am nächsten' (not 'am nahsten'). 'Der nächste Bahnhof' = the nearest station."],
    "examples": ["Das Hotel ist nah.", "In der Nähe gibt es einen Supermarkt.", "Das nächste Café ist um die Ecke."]
  },
  {
    "base": "pünktlich", "level": "A2",
    "comparison": { "positive": "pünktlich", "comparative": "pünktlicher", "superlative_predicative": "am pünktlichsten", "superlative_attributive": "pünktlichste" },
    "irregular": false,
    "declension_examples": { "strong": "pünktlicher (m)", "weak": "pünktliche (f)", "mixed": "pünktliches (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["punctual", "on time"],
    "tip": "Germans are famous for valuing punctuality. 'Bitte sei pünktlich!' = Please be on time!",
    "examples": ["Der Zug ist pünktlich.", "Sei bitte pünktlich!", "Er kommt immer pünktlich."]
  },
  {
    "base": "dunkel", "level": "A2",
    "comparison": { "positive": "dunkel", "comparative": "dunkler", "superlative_predicative": "am dunkelsten", "superlative_attributive": "dunkelste" },
    "irregular": false,
    "declension_examples": { "strong": "dunkler (m)", "weak": "dunkle (f)", "mixed": "dunkles (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["dark"],
    "tip": "Drops -e- before endings: dunkel → dunkle (not 'dunkele'). Opposite: hell (bright/light).",
    "common_mistakes": ["'Eine dunkle Nacht' not 'eine dunkele Nacht'. The -e- in the stem drops before endings."],
    "examples": ["Es ist sehr dunkel.", "Er trägt dunkle Kleidung.", "Das Zimmer ist dunkel."]
  },
  {
    "base": "hell", "level": "A2",
    "comparison": { "positive": "hell", "comparative": "heller", "superlative_predicative": "am hellsten", "superlative_attributive": "hellste" },
    "irregular": false,
    "declension_examples": { "strong": "heller (m)", "weak": "helle (f)", "mixed": "helles (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["bright", "light", "fair"],
    "tip": "Opposite of dunkel. Used for rooms, colors, hair, and skin. 'Helles Bier' = light beer.",
    "examples": ["Das Zimmer ist hell.", "Sie hat helle Haare.", "Es wird langsam hell."]
  },
  {
    "base": "sauber", "level": "A2",
    "comparison": { "positive": "sauber", "comparative": "sauberer", "superlative_predicative": "am saubersten", "superlative_attributive": "sauberste" },
    "irregular": false,
    "declension_examples": { "strong": "sauberer (m)", "weak": "saubere (f)", "mixed": "sauberes (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["clean", "tidy"],
    "tip": "Opposite: schmutzig (dirty). 'Sauber machen' = to clean. Also used informally to mean 'great': 'Das ist sauber!' (colloquial).",
    "examples": ["Das Zimmer ist sauber.", "Wasch dir die Hände — sie sind nicht sauber.", "Eine saubere Lösung."]
  },
  {
    "base": "schmutzig", "level": "A2",
    "comparison": { "positive": "schmutzig", "comparative": "schmutziger", "superlative_predicative": "am schmutzigsten", "superlative_attributive": "schmutzigste" },
    "irregular": false,
    "declension_examples": { "strong": "schmutziger (m)", "weak": "schmutzige (f)", "mixed": "schmutziges (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["dirty", "filthy"],
    "tip": "Opposite of sauber. 'Schmutzige Wäsche' = dirty laundry.",
    "examples": ["Deine Hände sind schmutzig.", "Das schmutzige Geschirr liegt in der Spüle.", "Der Hund ist schmutzig."]
  },
  {
    "base": "hungrig", "level": "A2",
    "comparison": { "positive": "hungrig", "comparative": "hungriger", "superlative_predicative": "am hungrigsten", "superlative_attributive": "hungrigste" },
    "irregular": false,
    "declension_examples": { "strong": "hungriger (m)", "weak": "hungrige (f)", "mixed": "hungriges (n)" },
    "position": ["predicative"],
    "translations": ["hungry"],
    "tip": "Both 'Ich bin hungrig' and 'Ich habe Hunger' are correct. 'Ich habe Hunger' is very common.",
    "examples": ["Ich bin total hungrig.", "Die hungrigen Kinder essen schnell.", "Bist du noch hungrig?"]
  },
  {
    "base": "voll", "level": "A2",
    "comparison": { "positive": "voll", "comparative": "voller", "superlative_predicative": "am vollsten", "superlative_attributive": "vollste" },
    "irregular": false,
    "declension_examples": { "strong": "voller (m)", "weak": "volle (f)", "mixed": "volles (n)" },
    "position": ["attributive", "predicative", "adverbial"],
    "translations": ["full", "crowded", "completely"],
    "tip": "Used for containers, places (crowds). Colloquial intensifier: 'voll cool' = totally cool. 'Voll' + adj = very (slang).",
    "examples": ["Das Glas ist voll.", "Der Zug ist voll.", "Er ist voll müde (colloquial)."]
  },
  {
    "base": "leer", "level": "A2",
    "comparison": { "positive": "leer", "comparative": "leerer", "superlative_predicative": "am leersten", "superlative_attributive": "leerste" },
    "irregular": false,
    "declension_examples": { "strong": "leerer (m)", "weak": "leere (f)", "mixed": "leeres (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["empty"],
    "tip": "Opposite of voll. 'Das Glas ist leer.' 'Leere Flasche' = empty bottle.",
    "examples": ["Das Glas ist leer.", "Der Saal war fast leer.", "Er hat eine leere Flasche."]
  },
  {
    "base": "schwierig", "level": "A2",
    "comparison": { "positive": "schwierig", "comparative": "schwieriger", "superlative_predicative": "am schwierigsten", "superlative_attributive": "schwierigste" },
    "irregular": false,
    "declension_examples": { "strong": "schwieriger (m)", "weak": "schwierige (f)", "mixed": "schwieriges (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["difficult", "tricky"],
    "tip": "Synonym: 'schwer'. 'Schwierig' often implies complexity/nuance; 'schwer' implies weight/effort.",
    "examples": ["Die Aufgabe ist schwierig.", "Das ist eine schwierige Situation.", "Grammatik ist manchmal schwierig."]
  },
  {
    "base": "beliebt", "level": "A2",
    "comparison": { "positive": "beliebt", "comparative": "beliebter", "superlative_predicative": "am beliebtesten", "superlative_attributive": "beliebteste" },
    "irregular": false,
    "declension_examples": { "strong": "beliebter (m)", "weak": "beliebte (f)", "mixed": "beliebtes (n)" },
    "position": ["attributive", "predicative"],
    "translations": ["popular", "well-liked"],
    "tip": "'Beliebt bei' = popular with. 'Das beliebteste Restaurant' = the most popular restaurant.",
    "examples": ["Das ist sehr beliebt.", "Er ist bei seinen Kollegen beliebt.", "Das beliebteste Gericht ist Schnitzel."]
  }
,
  {
    "base": "laut",
    "level": "A2",
    "comparison": {
      "positive": "laut",
      "comparative": "lauter",
      "superlative_predicative": "am lautesten",
      "superlative_attributive": "lauteste"
    },
    "translations": [
      "loud",
      "noisy"
    ],
    "category": "sound",
    "examples": [
      "Die Musik ist sehr laut.",
      "Sprich nicht so laut!",
      "Der Laerm ist zu laut."
    ],
    "tip": "Antonym: leise (quiet). Essential for describing sounds and environments.",
    "antonym": "leise"
  },
  {
    "base": "leise",
    "level": "A2",
    "comparison": {
      "positive": "leise",
      "comparative": "leiser",
      "superlative_predicative": "am leisesten",
      "superlative_attributive": "leiseste"
    },
    "translations": [
      "quiet",
      "soft (sound)"
    ],
    "category": "sound",
    "examples": [
      "Bitte sei leise!",
      "Das Baby schlaeft — sprich leise.",
      "Die Musik ist zu leise."
    ],
    "tip": "Antonym: laut (loud). Also means 'softly' when used as adverb.",
    "antonym": "laut"
  },
  {
    "base": "einfach",
    "level": "A2",
    "comparison": {
      "positive": "einfach",
      "comparative": "einfacher",
      "superlative_predicative": "am einfachsten",
      "superlative_attributive": "einfachste"
    },
    "translations": [
      "simple",
      "easy",
      "just"
    ],
    "category": "degree",
    "examples": [
      "Das ist einfach zu machen.",
      "Hast du eine einfache Erklaerung?",
      "Das ist ganz einfach."
    ],
    "tip": "Very versatile. As an adjective: easy/simple. As a particle: 'just' (einfach toll = just great)."
  },
  {
    "base": "kompliziert",
    "level": "A2",
    "comparison": {
      "positive": "kompliziert",
      "comparative": "komplizierter",
      "superlative_predicative": "am kompliziertesten",
      "superlative_attributive": "komplizierteste"
    },
    "translations": [
      "complicated",
      "complex"
    ],
    "category": "degree",
    "examples": [
      "Die Aufgabe ist kompliziert.",
      "Das ist nicht so kompliziert, wie es aussieht.",
      "Er macht alles kompliziert."
    ],
    "tip": "Antonym: einfach (simple). Loan word, cognate to English complicated.",
    "antonym": "einfach"
  },
  {
    "base": "gleich",
    "level": "A2",
    "comparison": {
      "positive": "gleich",
      "comparative": "gleicher",
      "superlative_predicative": "am gleichsten",
      "superlative_attributive": "gleiche"
    },
    "translations": [
      "same",
      "equal",
      "in a moment"
    ],
    "category": "relation",
    "examples": [
      "Wir haben die gleiche Meinung.",
      "Ich komme gleich.",
      "Das ist das Gleiche."
    ],
    "tip": "Watch context: as adjective means same/equal; as adverb means in a moment / right away."
  },
  {
    "base": "anders",
    "level": "A2",
    "comparison": {
      "positive": "anders",
      "comparative": "—",
      "superlative_predicative": "—",
      "superlative_attributive": "ander-"
    },
    "translations": [
      "different",
      "other"
    ],
    "category": "relation",
    "examples": [
      "Ich denke anders darueber.",
      "Das ist etwas ganz anderes.",
      "Er ist heute irgendwie anders."
    ],
    "tip": "Note: attributive form is 'ander-' (ein anderes Auto). 'anders' is typically used predicatively or as adverb."
  },
  {
    "base": "genug",
    "level": "A2",
    "comparison": {
      "positive": "genug",
      "comparative": "—",
      "superlative_predicative": "—",
      "superlative_attributive": "—"
    },
    "translations": [
      "enough",
      "sufficient"
    ],
    "category": "degree",
    "examples": [
      "Ich habe genug gegessen.",
      "Das ist genug.",
      "Hast du genug Geld?"
    ],
    "tip": "Indeclinable — does not change form. Always placed AFTER the adjective: alt genug (old enough)."
  },
{"base":"pünktlich","level":"A2","translations":["punctual","on time"],"examples":["Er ist immer pünktlich.","Bitte komm pünktlich.","Der Zug ist pünktlich."],"comparison":{"positive":"pünktlich","comparative":"pünktlicher","superlative_predicative":"am pünktlichsten"},"tip":"Germans value Pünktlichkeit highly. Being late is considered disrespectful."},
  {"base":"höflich","level":"A2","translations":["polite","courteous"],"examples":["Sei bitte höflich.","Er ist immer höflich.","Das war nicht sehr höflich."],"comparison":{"positive":"höflich","comparative":"höflicher","superlative_predicative":"am höflichsten"}},
  {"base":"unhöflich","level":"A2","translations":["rude","impolite"],"examples":["Das war unhöflich.","Er ist manchmal unhöflich.","Unterbrich mich nicht – das ist unhöflich."],"comparison":{"positive":"unhöflich","comparative":"unhöflicher","superlative_predicative":"am unhöflichsten"}},
  {"base":"günstig","level":"A2","translations":["cheap","affordable","favourable"],"examples":["Das ist günstig.","Ein günstiges Angebot.","Der Preis ist sehr günstig."],"comparison":{"positive":"günstig","comparative":"günstiger","superlative_predicative":"am günstigsten"},"tip":"günstig ≠ billig. Günstig = good value; billig = cheap/low quality."},
  {"base":"teuer","level":"A2","translations":["expensive"],"examples":["Das ist zu teuer.","Das Kleid ist sehr teuer.","Ist das wirklich so teuer?"],"comparison":{"positive":"teuer","comparative":"teurer","superlative_predicative":"am teuersten"}},
  {"base":"billig","level":"A2","translations":["cheap","inexpensive","low-quality"],"examples":["Das ist sehr billig.","Die Qualität ist billig.","Ein billiges Hotel."],"comparison":{"positive":"billig","comparative":"billiger","superlative_predicative":"am billigsten"},"tip":"billig carries a slightly negative connotation (cheap-feeling). Use günstig for 'good value'."},
  {"base":"frisch","level":"A2","translations":["fresh"],"examples":["Das Brot ist frisch.","Die Luft ist frisch.","Frische Tomaten bitte."],"comparison":{"positive":"frisch","comparative":"frischer","superlative_predicative":"am frischesten"}},
  {"base":"leer","level":"A2","translations":["empty"],"examples":["Das Glas ist leer.","Der Kühlschrank ist leer.","Die Straße ist leer."],"comparison":{"positive":"leer","comparative":"leerer","superlative_predicative":"am leersten"}},
  {"base":"voll","level":"A2","translations":["full"],"examples":["Das Glas ist voll.","Der Zug ist voll.","Ich bin voll – ich habe genug gegessen."],"comparison":{"positive":"voll","comparative":"voller","superlative_predicative":"am vollsten"}},
  {"base":"bequem","level":"A2","translations":["comfortable","convenient"],"examples":["Das Sofa ist bequem.","Bequeme Schuhe sind wichtig.","Das ist sehr bequem."],"comparison":{"positive":"bequem","comparative":"bequemer","superlative_predicative":"am bequemsten"}},
{"base":"fleißig","level":"A2","translations":["hardworking","diligent"],"examples":["Sie ist sehr fleißig.","Ein fleißiger Schüler.","Fleißig lernen."],"comparison":{"positive":"fleißig","comparative":"fleißiger","superlative_predicative":"am fleißigsten"}},
  {"base":"faul","level":"A2","translations":["lazy"],"examples":["Er ist zu faul.","Ein fauler Tag.","Sei nicht so faul!"],"comparison":{"positive":"faul","comparative":"fauler","superlative_predicative":"am faulsten"}},
  {"base":"klug","level":"A2","translations":["clever","smart","intelligent"],"examples":["Sie ist klug.","Eine kluge Antwort.","Klug vorgehen."],"comparison":{"positive":"klug","comparative":"klüger","superlative_predicative":"am klügsten"}},
  {"base":"dumm","level":"A2","translations":["stupid","silly","dumb"],"examples":["Das war dumm.","Eine dumme Frage.","Stell dich nicht so dumm!"],"comparison":{"positive":"dumm","comparative":"dümmer","superlative_predicative":"am dümmsten"}},
  {"base":"freundlich","level":"A2","translations":["friendly","kind","pleasant"],"examples":["Sie ist sehr freundlich.","Ein freundliches Lächeln.","Bitte sei freundlich."],"comparison":{"positive":"freundlich","comparative":"freundlicher","superlative_predicative":"am freundlichsten"}},
  {"base":"gefährlich","level":"A2","translations":["dangerous","hazardous"],"examples":["Das ist gefährlich!","Eine gefährliche Straße.","Sei vorsichtig – es ist gefährlich."],"comparison":{"positive":"gefährlich","comparative":"gefährlicher","superlative_predicative":"am gefährlichsten"}},
  {"base":"sicher","level":"A2","translations":["safe","secure","certain"],"examples":["Das ist sicher.","Ein sicherer Weg.","Ich bin sicher, dass..."],"comparison":{"positive":"sicher","comparative":"sicherer","superlative_predicative":"am sichersten"}},
  {"base":"spät","level":"A2","translations":["late"],"examples":["Ich bin spät.","Es ist spät.","Zu spät kommen."],"comparison":{"positive":"spät","comparative":"später","superlative_predicative":"am spätesten"}},
  {"base":"früh","level":"A2","translations":["early"],"examples":["Ich stehe früh auf.","Zu früh aufwachen.","Früh ins Bett gehen."],"comparison":{"positive":"früh","comparative":"früher","superlative_predicative":"am frühesten"}},
  {"base":"direkt","level":"A2","translations":["direct","straight"],"examples":["Geh direkt nach Hause.","Eine direkte Frage.","Sei direkt!"],"comparison":{"positive":"direkt","comparative":"direkter","superlative_predicative":"am direktesten"}},
  {"base":"möglich","level":"A2","translations":["possible"],"examples":["Ist das möglich?","So schnell wie möglich.","Alles ist möglich."],"comparison":{"positive":"möglich","comparative":"möglicher","superlative_predicative":"am möglichsten"}},
  {"base":"nötig","level":"A2","translations":["necessary","needed"],"examples":["Das ist nötig.","Ist das wirklich nötig?","Keine weiteren Erklärungen nötig."],"comparison":{"positive":"nötig","comparative":"nötiger","superlative_predicative":"am nötigsten"}},
  {"base":"kostenlos","level":"A2","translations":["free (of charge)","complimentary"],"examples":["Das ist kostenlos.","Ein kostenloses Angebot.","Der Eintritt ist kostenlos."],"comparison":{"positive":"kostenlos"}},
  {"base":"öffentlich","level":"A2","translations":["public"],"examples":["Ein öffentlicher Platz.","Öffentliche Verkehrsmittel.","Das ist öffentlich bekannt."],"comparison":{"positive":"öffentlich","comparative":"öffentlicher","superlative_predicative":"am öffentlichsten"}},
  {"base":"privat","level":"A2","translations":["private","personal"],"examples":["Das ist privat.","Ein privates Gespräch.","Privates Eigentum."],"comparison":{"positive":"privat","comparative":"privater","superlative_predicative":"am privatsten"}},
  {"base":"regelmäßig","level":"A2","translations":["regular","regular"],"examples":["Regelmäßig Sport treiben.","Ein regelmäßiger Bus.","Regelmäßig essen."],"comparison":{"positive":"regelmäßig","comparative":"regelmäßiger","superlative_predicative":"am regelmäßigsten"}},
  {"base":"täglich","level":"A2","translations":["daily","every day"],"examples":["Täglich Deutsch üben.","Meine tägliche Routine.","Dreimal täglich."],"comparison":{"positive":"täglich"}},
  {"base":"wöchentlich","level":"A2","translations":["weekly"],"examples":["Wöchentlich trainieren.","Ein wöchentliches Meeting.","Wöchentlich erscheint die Zeitung."],"comparison":{"positive":"wöchentlich"}},
  {"base":"monatlich","level":"A2","translations":["monthly"],"examples":["Monatlich zahlen.","Eine monatliche Rate.","Monatlich kommen."],"comparison":{"positive":"monatlich"}},
  {"base":"jährlich","level":"A2","translations":["annual","yearly"],"examples":["Jährlich wachsen.","Ein jährliches Fest.","Die jährliche Prüfung."],"comparison":{"positive":"jährlich"}},
{"base":"sorgfältig","level":"A2","translations":["careful","thorough","painstaking"],"examples":["Er arbeitet sorgfältig.","Eine sorgfältige Analyse.","Sei sorgfältig!"],"comparison":{"positive":"sorgfältig","comparative":"sorgfältiger","superlative_predicative":"am sorgfältigsten"}},
  {"base":"ruhig","level":"A2","translations":["quiet","calm","peaceful","still"],"examples":["Sei ruhig!","Die Gegend ist ruhig.","Er ist ein ruhiger Mensch."],"comparison":{"positive":"ruhig","comparative":"ruhiger","superlative_predicative":"am ruhigsten"}},
  {"base":"laut","level":"A2","translations":["loud","noisy"],"examples":["Die Musik ist zu laut.","Sei nicht so laut!","Ein lauter Nachbar."],"comparison":{"positive":"laut","comparative":"lauter","superlative_predicative":"am lautesten"}},
  {"base":"freundlich","level":"A2","translations":["friendly","kind","pleasant"],"examples":["Sie ist sehr freundlich.","Ein freundliches Lächeln.","Bitte sei freundlich."],"comparison":{"positive":"freundlich","comparative":"freundlicher","superlative_predicative":"am freundlichsten"}},
  {"base":"unfreundlich","level":"A2","translations":["unfriendly","unkind","rude"],"examples":["Er war sehr unfreundlich.","Das war unfreundlich.","Sei nicht so unfreundlich!"],"comparison":{"positive":"unfreundlich","comparative":"unfreundlicher","superlative_predicative":"am unfreundlichsten"}},
  {"base":"ehrlich","level":"A2","translations":["honest","sincere","frank"],"examples":["Er ist sehr ehrlich.","Sei ehrlich mit mir.","Eine ehrliche Antwort."],"comparison":{"positive":"ehrlich","comparative":"ehrlicher","superlative_predicative":"am ehrlichsten"}},
  {"base":"fleißig","level":"A2","translations":["hardworking","diligent","industrious"],"examples":["Sie ist fleißig.","Ein fleißiger Schüler.","Er arbeitet fleißig."],"comparison":{"positive":"fleißig","comparative":"fleißiger","superlative_predicative":"am fleißigsten"}},
  {"base":"faul","level":"A2","translations":["lazy","rotten"],"examples":["Er ist faul.","Sei nicht so faul!","Das Obst ist faul."],"comparison":{"positive":"faul","comparative":"fauler","superlative_predicative":"am faulsten"},"tip":"faul = lazy AND rotten (food). Context determines meaning."},
  {"base":"geduldig","level":"A2","translations":["patient"],"examples":["Sie ist sehr geduldig.","Hab Geduld!","Geduldig warten."],"comparison":{"positive":"geduldig","comparative":"geduldiger","superlative_predicative":"am geduldigsten"}},
  {"base":"ungeduldig","level":"A2","translations":["impatient"],"examples":["Er ist ungeduldig.","Warte, sei nicht ungeduldig!","Sie wird ungeduldig."],"comparison":{"positive":"ungeduldig","comparative":"ungeduldiger","superlative_predicative":"am ungeduldigsten"}}
];

window.adjectivesA2 = adjectivesA2;
