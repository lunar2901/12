// verbs-db-a2.js — A2 Elementary German Verbs (comprehensive)
const verbsA2 = [
  {
    "base": "anfangen",
    "level": "A2", "reflexive": false, "separable": true, "separable_prefix": "an",
    "translations": ["to begin", "to start"],
    "tip": "Separable: 'Ich fange an'. Stem vowel change: a→ä (du fängst an, er fängt an).",
    "present": { "ich": "fange an", "du": "fängst an", "er_sie_es": "fängt an", "wir": "fangen an", "ihr": "fangt an", "sie_Sie": "fangen an" },
    "imperative": { "du": "fang an!", "ihr": "fangt an!", "Sie": "fangen Sie an!" },
    "past_tenses": { "präteritum": "fing an", "partizip_ii": "angefangen" },
    "auxiliaries": [{ "aux": "haben", "condition": "default", "perfekt": "hat angefangen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "anfangen + mit + Dativ", "prepositions": ["mit"], "explanation": "To start with something.", "examples": ["Ich fange mit der Aufgabe an.", "Wann fängst du an?"], "derived": null },
      { "label": "anfangen + zu + Infinitiv", "prepositions": ["zu"], "explanation": "To begin to do something.", "examples": ["Er fängt an zu singen.", "Es fängt an zu regnen."], "derived": null }
    ]
  },
  {
    "base": "aufhören",
    "level": "A2", "reflexive": false, "separable": true, "separable_prefix": "auf",
    "translations": ["to stop", "to quit"],
    "tip": "Separable. 'Hör auf!' = Stop it! Used with 'mit' or 'zu + Infinitiv'.",
    "present": { "ich": "höre auf", "du": "hörst auf", "er_sie_es": "hört auf", "wir": "hören auf", "ihr": "hört auf", "sie_Sie": "hören auf" },
    "imperative": { "du": "hör auf!", "ihr": "hört auf!", "Sie": "hören Sie auf!" },
    "past_tenses": { "präteritum": "hörte auf", "partizip_ii": "aufgehört" },
    "auxiliaries": [{ "aux": "haben", "condition": "default", "perfekt": "hat aufgehört" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "aufhören + mit + Dativ", "prepositions": ["mit"], "explanation": "To stop doing something.", "examples": ["Hör mit dem Rauchen auf!", "Er hört mit der Arbeit auf."], "derived": null },
      { "label": "aufhören + zu + Infinitiv", "prepositions": ["zu"], "explanation": "To stop doing something.", "examples": ["Es hört auf zu regnen.", "Hör auf zu weinen!"], "derived": null }
    ]
  },
  {
    "base": "aufstehen",
    "level": "A2", "reflexive": false, "separable": true, "separable_prefix": "auf",
    "translations": ["to get up", "to stand up"],
    "tip": "Separable. Uses 'sein' in Perfekt (movement change of state).",
    "present": { "ich": "stehe auf", "du": "stehst auf", "er_sie_es": "steht auf", "wir": "stehen auf", "ihr": "steht auf", "sie_Sie": "stehen auf" },
    "imperative": { "du": "steh auf!", "ihr": "steht auf!", "Sie": "stehen Sie auf!" },
    "past_tenses": { "präteritum": "stand auf", "partizip_ii": "aufgestanden" },
    "auxiliaries": [{ "aux": "sein", "condition": "always", "perfekt": "ist aufgestanden" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "aufstehen (intransitive)", "prepositions": [], "explanation": "To get out of bed / to stand up.", "examples": ["Ich stehe um 7 Uhr auf.", "Er steht früh auf.", "Steh auf!"], "derived": null }
    ]
  },
  {
    "base": "einschlafen",
    "level": "A2", "reflexive": false, "separable": true, "separable_prefix": "ein",
    "translations": ["to fall asleep"],
    "tip": "Separable. Uses 'sein' in Perfekt. Stem vowel change: a→ä.",
    "present": { "ich": "schlafe ein", "du": "schläfst ein", "er_sie_es": "schläft ein", "wir": "schlafen ein", "ihr": "schlaft ein", "sie_Sie": "schlafen ein" },
    "imperative": { "du": "schlaf ein!", "ihr": "schlaft ein!", "Sie": "schlafen Sie ein!" },
    "past_tenses": { "präteritum": "schlief ein", "partizip_ii": "eingeschlafen" },
    "auxiliaries": [{ "aux": "sein", "condition": "always", "perfekt": "ist eingeschlafen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "einschlafen (intransitive)", "prepositions": [], "explanation": "To fall asleep.", "examples": ["Das Kind schläft ein.", "Ich bin sofort eingeschlafen.", "Er schläft beim Lesen ein."], "derived": null }
    ]
  },
  {
    "base": "ankommen",
    "level": "A2", "reflexive": false, "separable": true, "separable_prefix": "an",
    "translations": ["to arrive"],
    "tip": "Separable. Uses 'sein'. 'Ankommen in/auf' = to arrive in a place.",
    "present": { "ich": "komme an", "du": "kommst an", "er_sie_es": "kommt an", "wir": "kommen an", "ihr": "kommt an", "sie_Sie": "kommen an" },
    "imperative": { "du": "komm an!", "ihr": "kommt an!", "Sie": "kommen Sie an!" },
    "past_tenses": { "präteritum": "kam an", "partizip_ii": "angekommen" },
    "auxiliaries": [{ "aux": "sein", "condition": "always", "perfekt": "ist angekommen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "ankommen + in + Dativ", "prepositions": ["in"], "explanation": "To arrive somewhere.", "examples": ["Ich komme um 8 Uhr an.", "Wann kommst du in Berlin an?", "Der Zug ist pünktlich angekommen."], "derived": null }
    ]
  },
  {
    "base": "abfahren",
    "level": "A2", "reflexive": false, "separable": true, "separable_prefix": "ab",
    "translations": ["to depart", "to leave (by vehicle)"],
    "tip": "Separable. Uses 'sein'. Stem vowel change: a→ä. Opposite: ankommen.",
    "present": { "ich": "fahre ab", "du": "fährst ab", "er_sie_es": "fährt ab", "wir": "fahren ab", "ihr": "fahrt ab", "sie_Sie": "fahren ab" },
    "imperative": { "du": "fahr ab!", "ihr": "fahrt ab!", "Sie": "fahren Sie ab!" },
    "past_tenses": { "präteritum": "fuhr ab", "partizip_ii": "abgefahren" },
    "auxiliaries": [{ "aux": "sein", "condition": "always", "perfekt": "ist abgefahren" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "abfahren (intransitive)", "prepositions": [], "explanation": "To depart, leave by transport.", "examples": ["Der Zug fährt um 9 Uhr ab.", "Wann fährt der Bus ab?", "Wir fahren morgen früh ab."], "derived": null }
    ]
  },
  {
    "base": "umziehen",
    "level": "A2", "reflexive": false, "separable": true, "separable_prefix": "um",
    "translations": ["to move (house)", "to change clothes"],
    "tip": "Two meanings: (1) reflexive: 'sich umziehen' = to change clothes; (2) intransitive: 'umziehen' = to move to a new place.",
    "present": { "ich": "ziehe um", "du": "ziehst um", "er_sie_es": "zieht um", "wir": "ziehen um", "ihr": "zieht um", "sie_Sie": "ziehen um" },
    "imperative": { "du": "zieh um!", "ihr": "zieht um!", "Sie": "ziehen Sie um!" },
    "past_tenses": { "präteritum": "zog um", "partizip_ii": "umgezogen" },
    "auxiliaries": [{ "aux": "sein", "condition": "to move house", "perfekt": "ist umgezogen" }, { "aux": "haben", "condition": "to change clothes", "perfekt": "hat sich umgezogen" }],
    "dual_auxiliary": true,
    "patterns": [
      { "label": "umziehen (nach/in)", "prepositions": ["nach", "in"], "explanation": "To move to a new place.", "examples": ["Ich ziehe nach München um.", "Sie sind letztes Jahr umgezogen."], "derived": null },
      { "label": "sich umziehen", "prepositions": [], "explanation": "To change clothes.", "examples": ["Ich ziehe mich schnell um.", "Er zieht sich vor dem Sport um."], "derived": null }
    ],
    "reflexive_uses": [{ "label": "sich umziehen", "prepositions": [], "explanation": "To change clothes.", "examples": ["Ich ziehe mich um."] }]
  },
  {
    "base": "einladen",
    "level": "A2", "reflexive": false, "separable": true, "separable_prefix": "ein",
    "translations": ["to invite"],
    "tip": "Separable. Stem vowel change: a→ä. 'Einladen zu' = to invite to something.",
    "present": { "ich": "lade ein", "du": "lädst ein", "er_sie_es": "lädt ein", "wir": "laden ein", "ihr": "ladet ein", "sie_Sie": "laden ein" },
    "imperative": { "du": "lad ein!", "ihr": "ladet ein!", "Sie": "laden Sie ein!" },
    "past_tenses": { "präteritum": "lud ein", "partizip_ii": "eingeladen" },
    "auxiliaries": [{ "aux": "haben", "condition": "default", "perfekt": "hat eingeladen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "einladen + Akkusativ + zu + Dativ", "prepositions": ["zu"], "explanation": "To invite someone to something.", "examples": ["Ich lade dich zu meiner Party ein.", "Er hat uns zum Essen eingeladen."], "derived": null }
    ]
  },
  {
    "base": "treffen",
    "level": "A2", "reflexive": true, "separable": false, "separable_prefix": null,
    "translations": ["to meet", "to hit", "to affect"],
    "tip": "Stem vowel change: e→i (du triffst, er trifft). Reflexive: 'sich treffen mit' = to meet with someone.",
    "present": { "ich": "treffe", "du": "triffst", "er_sie_es": "trifft", "wir": "treffen", "ihr": "trefft", "sie_Sie": "treffen" },
    "imperative": { "du": "triff!", "ihr": "trefft!", "Sie": "treffen Sie!" },
    "past_tenses": { "präteritum": "traf", "partizip_ii": "getroffen" },
    "auxiliaries": [{ "aux": "haben", "condition": "default", "perfekt": "hat getroffen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "sich treffen + mit + Dativ", "prepositions": ["mit"], "explanation": "To meet someone.", "examples": ["Ich treffe mich mit Maria.", "Wir treffen uns um 8 Uhr.", "Wann trefft ihr euch?"], "derived": null }
    ],
    "reflexive_uses": [{ "label": "sich treffen mit", "prepositions": ["mit"], "explanation": "To meet with someone.", "examples": ["Ich treffe mich mit Freunden."] }]
  },
  {
    "base": "besuchen",
    "level": "A2", "reflexive": false, "separable": false, "separable_prefix": null,
    "translations": ["to visit"],
    "tip": "Regular verb with inseparable prefix 'be-'. Takes Akkusativ for the person/place visited.",
    "present": { "ich": "besuche", "du": "besuchst", "er_sie_es": "besucht", "wir": "besuchen", "ihr": "besucht", "sie_Sie": "besuchen" },
    "imperative": { "du": "besuch!", "ihr": "besucht!", "Sie": "besuchen Sie!" },
    "past_tenses": { "präteritum": "besuchte", "partizip_ii": "besucht" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat besucht" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "besuchen + Akkusativ", "prepositions": [], "explanation": "To visit a person or place.", "examples": ["Ich besuche meine Großeltern.", "Wir besuchen ein Museum.", "Er hat mich gestern besucht."], "derived": null }
    ]
  },
  {
    "base": "aufmachen",
    "level": "A2", "reflexive": false, "separable": true, "separable_prefix": "auf",
    "translations": ["to open"],
    "tip": "Separable and colloquial alternative to 'öffnen'. Commonly used in everyday speech.",
    "present": { "ich": "mache auf", "du": "machst auf", "er_sie_es": "macht auf", "wir": "machen auf", "ihr": "macht auf", "sie_Sie": "machen auf" },
    "imperative": { "du": "mach auf!", "ihr": "macht auf!", "Sie": "machen Sie auf!" },
    "past_tenses": { "präteritum": "machte auf", "partizip_ii": "aufgemacht" },
    "auxiliaries": [{ "aux": "haben", "condition": "default", "perfekt": "hat aufgemacht" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "aufmachen + Akkusativ", "prepositions": [], "explanation": "To open something (colloquial).", "examples": ["Mach die Tür auf!", "Er macht das Fenster auf.", "Kannst du die Flasche aufmachen?"], "derived": null }
    ]
  },
  {
    "base": "zumachen",
    "level": "A2", "reflexive": false, "separable": true, "separable_prefix": "zu",
    "translations": ["to close", "to shut"],
    "tip": "Separable and colloquial alternative to 'schließen'. Common in everyday speech.",
    "present": { "ich": "mache zu", "du": "machst zu", "er_sie_es": "macht zu", "wir": "machen zu", "ihr": "macht zu", "sie_Sie": "machen zu" },
    "imperative": { "du": "mach zu!", "ihr": "macht zu!", "Sie": "machen Sie zu!" },
    "past_tenses": { "präteritum": "machte zu", "partizip_ii": "zugemacht" },
    "auxiliaries": [{ "aux": "haben", "condition": "default", "perfekt": "hat zugemacht" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "zumachen + Akkusativ", "prepositions": [], "explanation": "To close something (colloquial).", "examples": ["Mach die Tür zu!", "Er macht das Fenster zu.", "Mach deinen Mund zu!"], "derived": null }
    ]
  },
  {
    "base": "anrufen",
    "level": "A2", "reflexive": false, "separable": true, "separable_prefix": "an",
    "translations": ["to call (on the phone)", "to phone"],
    "tip": "Separable. Takes Akkusativ for the person called. Very common in daily communication.",
    "present": { "ich": "rufe an", "du": "rufst an", "er_sie_es": "ruft an", "wir": "rufen an", "ihr": "ruft an", "sie_Sie": "rufen an" },
    "imperative": { "du": "ruf an!", "ihr": "ruft an!", "Sie": "rufen Sie an!" },
    "past_tenses": { "präteritum": "rief an", "partizip_ii": "angerufen" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat angerufen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "anrufen + Akkusativ", "prepositions": [], "explanation": "To call someone by phone.", "examples": ["Ich rufe dich morgen an.", "Er hat mich angerufen.", "Ruf mich bitte an!"], "derived": null }
    ]
  },
  {
    "base": "einkaufen",
    "level": "A2", "reflexive": false, "separable": true, "separable_prefix": "ein",
    "translations": ["to shop", "to go shopping"],
    "tip": "Separable. 'Einkaufen gehen' = to go shopping. Noun: der Einkauf (purchase/shopping trip).",
    "present": { "ich": "kaufe ein", "du": "kaufst ein", "er_sie_es": "kauft ein", "wir": "kaufen ein", "ihr": "kauft ein", "sie_Sie": "kaufen ein" },
    "imperative": { "du": "kauf ein!", "ihr": "kauft ein!", "Sie": "kaufen Sie ein!" },
    "past_tenses": { "präteritum": "kaufte ein", "partizip_ii": "eingekauft" },
    "auxiliaries": [{ "aux": "haben", "condition": "default", "perfekt": "hat eingekauft" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "einkaufen (gehen)", "prepositions": [], "explanation": "To go shopping / to buy groceries.", "examples": ["Ich kaufe im Supermarkt ein.", "Sie geht einkaufen.", "Hast du eingekauft?"], "derived": null }
    ]
  },
  {
    "base": "fernsehen",
    "level": "A2", "reflexive": false, "separable": true, "separable_prefix": "fern",
    "translations": ["to watch TV"],
    "tip": "Separable. The noun 'der Fernseher' = television set. The prefix 'fern' separates: 'Ich sehe fern'.",
    "present": { "ich": "sehe fern", "du": "siehst fern", "er_sie_es": "sieht fern", "wir": "sehen fern", "ihr": "seht fern", "sie_Sie": "sehen fern" },
    "imperative": { "du": "sieh fern!", "ihr": "seht fern!", "Sie": "sehen Sie fern!" },
    "past_tenses": { "präteritum": "sah fern", "partizip_ii": "ferngesehen" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat ferngesehen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "fernsehen (intransitive)", "prepositions": [], "explanation": "To watch television.", "examples": ["Ich sehe jeden Abend fern.", "Siehst du gern fern?", "Wie lange hast du ferngesehen?"], "derived": null }
    ]
  },
  {
    "base": "abholen",
    "level": "A2", "reflexive": false, "separable": true, "separable_prefix": "ab",
    "translations": ["to pick up", "to collect"],
    "tip": "Separable. Used for picking someone/something up from a location. Takes Akkusativ.",
    "present": { "ich": "hole ab", "du": "holst ab", "er_sie_es": "holt ab", "wir": "holen ab", "ihr": "holt ab", "sie_Sie": "holen ab" },
    "imperative": { "du": "hol ab!", "ihr": "holt ab!", "Sie": "holen Sie ab!" },
    "past_tenses": { "präteritum": "holte ab", "partizip_ii": "abgeholt" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat abgeholt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "abholen + Akkusativ (+ von + Dativ)", "prepositions": ["von"], "explanation": "To pick someone/something up from somewhere.", "examples": ["Ich hole dich vom Bahnhof ab.", "Er holt seine Kinder von der Schule ab.", "Kannst du mich abholen?"], "derived": null }
    ]
  },
  {
    "base": "mitnehmen",
    "level": "A2", "reflexive": false, "separable": true, "separable_prefix": "mit",
    "translations": ["to take along", "to bring along"],
    "tip": "Separable. Stem vowel change: e→i. 'Nimm mich mit!' = Take me along!",
    "present": { "ich": "nehme mit", "du": "nimmst mit", "er_sie_es": "nimmt mit", "wir": "nehmen mit", "ihr": "nehmt mit", "sie_Sie": "nehmen mit" },
    "imperative": { "du": "nimm mit!", "ihr": "nehmt mit!", "Sie": "nehmen Sie mit!" },
    "past_tenses": { "präteritum": "nahm mit", "partizip_ii": "mitgenommen" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat mitgenommen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "mitnehmen + Akkusativ", "prepositions": [], "explanation": "To take/bring something or someone along.", "examples": ["Nimm einen Regenschirm mit!", "Er nimmt seine Schwester mit.", "Kann ich das mitnehmen?"], "derived": null }
    ]
  },
  {
    "base": "vorstellen",
    "level": "A2", "reflexive": true, "separable": true, "separable_prefix": "vor",
    "translations": ["to introduce", "to imagine"],
    "tip": "Separable with two main meanings: (1) 'sich vorstellen' = to introduce yourself; (2) 'sich etwas vorstellen' = to imagine something.",
    "present": { "ich": "stelle vor", "du": "stellst vor", "er_sie_es": "stellt vor", "wir": "stellen vor", "ihr": "stellt vor", "sie_Sie": "stellen vor" },
    "imperative": { "du": "stell vor!", "ihr": "stellt vor!", "Sie": "stellen Sie vor!" },
    "past_tenses": { "präteritum": "stellte vor", "partizip_ii": "vorgestellt" },
    "auxiliaries": [{ "aux": "haben", "condition": "default", "perfekt": "hat vorgestellt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "sich vorstellen", "prepositions": [], "explanation": "To introduce oneself.", "examples": ["Ich stelle mich vor: Mein Name ist Ana.", "Darf ich mich vorstellen?"], "derived": null },
      { "label": "sich etwas vorstellen", "prepositions": [], "explanation": "To imagine something.", "examples": ["Ich kann mir das gut vorstellen.", "Stell dir vor!"], "derived": null }
    ],
    "reflexive_uses": [{ "label": "sich vorstellen", "prepositions": [], "explanation": "To introduce oneself / to imagine.", "examples": ["Ich stelle mich vor.", "Das kann ich mir vorstellen."] }]
  },
  {
    "base": "spazieren gehen",
    "level": "A2", "reflexive": false, "separable": false, "separable_prefix": null,
    "translations": ["to go for a walk"],
    "tip": "Fixed expression. In the infinitive written as two words. Partizip II: spazieren gegangen.",
    "present": { "ich": "gehe spazieren", "du": "gehst spazieren", "er_sie_es": "geht spazieren", "wir": "gehen spazieren", "ihr": "geht spazieren", "sie_Sie": "gehen spazieren" },
    "imperative": { "du": "geh spazieren!", "ihr": "geht spazieren!", "Sie": "gehen Sie spazieren!" },
    "past_tenses": { "präteritum": "ging spazieren", "partizip_ii": "spazieren gegangen" },
    "auxiliaries": [{ "aux": "sein", "condition": "always", "perfekt": "ist spazieren gegangen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "spazieren gehen", "prepositions": [], "explanation": "To go for a walk, to stroll.", "examples": ["Ich gehe jeden Tag spazieren.", "Wir sind im Park spazieren gegangen.", "Gehen wir spazieren!"], "derived": null }
    ]
  },
  {
    "base": "kochen",
    "level": "A2", "reflexive": false, "separable": false, "separable_prefix": null,
    "translations": ["to cook", "to boil"],
    "tip": "Regular verb. Used for cooking in general and for boiling liquids. 'Wasser kochen' = to boil water.",
    "present": { "ich": "koche", "du": "kochst", "er_sie_es": "kocht", "wir": "kochen", "ihr": "kocht", "sie_Sie": "kochen" },
    "imperative": { "du": "koch!", "ihr": "kocht!", "Sie": "kochen Sie!" },
    "past_tenses": { "präteritum": "kochte", "partizip_ii": "gekocht" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gekocht" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "kochen + Akkusativ", "prepositions": [], "explanation": "To cook something.", "examples": ["Ich koche heute Abend.", "Er kocht Nudeln.", "Was kochst du?"], "derived": null }
    ]
  },
  {
    "base": "backen",
    "level": "A2", "reflexive": false, "separable": false, "separable_prefix": null,
    "translations": ["to bake"],
    "tip": "Strong verb. Stem vowel change in present: a→ä (du bäckst / backst, er bäckt / backt — both forms accepted).",
    "present": { "ich": "backe", "du": "bäckst / backst", "er_sie_es": "bäckt / backt", "wir": "backen", "ihr": "backt", "sie_Sie": "backen" },
    "imperative": { "du": "back!", "ihr": "backt!", "Sie": "backen Sie!" },
    "past_tenses": { "präteritum": "buk / backte", "partizip_ii": "gebacken" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gebacken" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "backen + Akkusativ", "prepositions": [], "explanation": "To bake something.", "examples": ["Ich backe einen Kuchen.", "Sie bäckt Brot.", "Wir haben Kekse gebacken."], "derived": null }
    ]
  },
  {
    "base": "aufräumen",
    "level": "A2", "reflexive": false, "separable": true, "separable_prefix": "auf",
    "translations": ["to tidy up", "to clean up"],
    "tip": "Separable. 'Räum dein Zimmer auf!' = Clean up your room! Common household task verb.",
    "present": { "ich": "räume auf", "du": "räumst auf", "er_sie_es": "räumt auf", "wir": "räumen auf", "ihr": "räumt auf", "sie_Sie": "räumen auf" },
    "imperative": { "du": "räum auf!", "ihr": "räumt auf!", "Sie": "räumen Sie auf!" },
    "past_tenses": { "präteritum": "räumte auf", "partizip_ii": "aufgeräumt" },
    "auxiliaries": [{ "aux": "haben", "condition": "default", "perfekt": "hat aufgeräumt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "aufräumen (Akkusativ optional)", "prepositions": [], "explanation": "To tidy up a space.", "examples": ["Ich räume mein Zimmer auf.", "Räum auf!", "Sie hat die Küche aufgeräumt."], "derived": null }
    ]
  },
  {
    "base": "putzen",
    "level": "A2", "reflexive": false, "separable": false, "separable_prefix": null,
    "translations": ["to clean", "to polish"],
    "tip": "Regular verb. 'Zähne putzen' = to brush teeth. 'Die Wohnung putzen' = to clean the apartment.",
    "present": { "ich": "putze", "du": "putzt", "er_sie_es": "putzt", "wir": "putzen", "ihr": "putzt", "sie_Sie": "putzen" },
    "imperative": { "du": "putz!", "ihr": "putzt!", "Sie": "putzen Sie!" },
    "past_tenses": { "präteritum": "putzte", "partizip_ii": "geputzt" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat geputzt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "putzen + Akkusativ", "prepositions": [], "explanation": "To clean something.", "examples": ["Ich putze die Zähne.", "Er putzt das Auto.", "Sie putzt jeden Samstag die Wohnung."], "derived": null }
    ]
  },
  {
    "base": "waschen",
    "level": "A2", "reflexive": true, "separable": false, "separable_prefix": null,
    "translations": ["to wash"],
    "tip": "Stem vowel change: a→ä (du wäschst, er wäscht). Reflexive: 'sich waschen' = to wash oneself.",
    "present": { "ich": "wasche", "du": "wäschst", "er_sie_es": "wäscht", "wir": "waschen", "ihr": "wascht", "sie_Sie": "waschen" },
    "imperative": { "du": "wasch!", "ihr": "wascht!", "Sie": "waschen Sie!" },
    "past_tenses": { "präteritum": "wusch", "partizip_ii": "gewaschen" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat gewaschen" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "waschen + Akkusativ", "prepositions": [], "explanation": "To wash something.", "examples": ["Ich wasche das Auto.", "Sie wäscht ihre Wäsche.", "Er wäscht sich die Hände."], "derived": null }
    ],
    "reflexive_uses": [{ "label": "sich waschen", "prepositions": [], "explanation": "To wash oneself.", "examples": ["Ich wasche mich.", "Hast du dich gewaschen?"] }]
  },
  {
    "base": "reservieren",
    "level": "A2", "reflexive": false, "separable": false, "separable_prefix": null,
    "translations": ["to reserve", "to book"],
    "tip": "Regular -ieren verb (no ge- in Partizip II!). Used for tables, rooms, tickets, etc.",
    "common_mistakes": ["Partizip II: 'reserviert', NOT 'ge-reserviert'. All -ieren verbs drop the ge- prefix."],
    "present": { "ich": "reserviere", "du": "reservierst", "er_sie_es": "reserviert", "wir": "reservieren", "ihr": "reserviert", "sie_Sie": "reservieren" },
    "imperative": { "du": "reservier!", "ihr": "reserviert!", "Sie": "reservieren Sie!" },
    "past_tenses": { "präteritum": "reservierte", "partizip_ii": "reserviert" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat reserviert" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "reservieren + Akkusativ", "prepositions": [], "explanation": "To reserve or book something.", "examples": ["Ich möchte einen Tisch reservieren.", "Er hat ein Zimmer reserviert.", "Haben Sie reserviert?"], "derived": null }
    ]
  },
  {
    "base": "bestellen",
    "level": "A2", "reflexive": false, "separable": false, "separable_prefix": null,
    "translations": ["to order"],
    "tip": "Regular verb with inseparable prefix 'be-'. Used in restaurants and for online orders.",
    "present": { "ich": "bestelle", "du": "bestellst", "er_sie_es": "bestellt", "wir": "bestellen", "ihr": "bestellt", "sie_Sie": "bestellen" },
    "imperative": { "du": "bestell!", "ihr": "bestellt!", "Sie": "bestellen Sie!" },
    "past_tenses": { "präteritum": "bestellte", "partizip_ii": "bestellt" },
    "auxiliaries": [{ "aux": "haben", "condition": "always", "perfekt": "hat bestellt" }],
    "dual_auxiliary": false,
    "patterns": [
      { "label": "bestellen + Akkusativ", "prepositions": [], "explanation": "To order something.", "examples": ["Ich bestelle einen Kaffee.", "Haben Sie schon bestellt?", "Er hat online bestellt."], "derived": null }
    ]
  }
,
  {
    "base": "vergessen",
    "level": "A2",
    "conjugation": {
      "present": {
        "ich": "vergesse",
        "du": "vergisst",
        "er": "vergisst"
      },
      "perfect": "hat vergessen",
      "preterite": "vergass"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to forget"
    ],
    "examples": [
      "Ich habe meinen Schluessel vergessen.",
      "Vergiss das nicht!",
      "Er vergisst immer alles."
    ],
    "tip": "Strong irregular verb. Pattern: vergessen vergass vergessen. Very common!"
  },
  {
    "base": "erklaeren",
    "level": "A2",
    "conjugation": {
      "present": {
        "ich": "erklaere",
        "du": "erklaerst",
        "er": "erklaert"
      },
      "perfect": "hat erklaert",
      "preterite": "erklaerte"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to explain"
    ],
    "examples": [
      "Kannst du das erklaeren?",
      "Er erklaert die Aufgabe sehr gut.",
      "Sie hat uns den Weg erklaert."
    ],
    "tip": "Regular verb. jemandem etwas erklaeren = to explain something to someone. Dative + Accusative.",
    "base_display": "erklären"
  },
  {
    "base": "waehlen",
    "level": "A2",
    "conjugation": {
      "present": {
        "ich": "waehle",
        "du": "waehlst",
        "er": "waehlt"
      },
      "perfect": "hat gewaehlt",
      "preterite": "waehlte"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to choose",
      "to vote",
      "to dial"
    ],
    "examples": [
      "Ich waehle die rote Option.",
      "Wir haben einen neuen Praesident gewaehlt.",
      "Welches Gericht waehlst du?"
    ],
    "tip": "Three meanings depending on context: choose from options, vote in an election, or dial a phone number.",
    "base_display": "wählen"
  },
  {
    "base": "bezahlen",
    "level": "A2",
    "conjugation": {
      "present": {
        "ich": "bezahle",
        "du": "bezahlst",
        "er": "bezahlt"
      },
      "perfect": "hat bezahlt",
      "preterite": "bezahlte"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to pay",
      "to pay for"
    ],
    "examples": [
      "Ich moechte bezahlen, bitte.",
      "Kannst du das fuer mich bezahlen?",
      "Er hat die Rechnung bezahlt."
    ],
    "tip": "Use 'bezahlen' for paying a bill or item. Use 'zahlen' for more general paying. Both are common."
  },
  {
    "base": "wiederholen",
    "level": "A2",
    "conjugation": {
      "present": {
        "ich": "wiederhole",
        "du": "wiederholst",
        "er": "wiederholt"
      },
      "perfect": "hat wiederholt",
      "preterite": "wiederholte"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to repeat",
      "to revise"
    ],
    "examples": [
      "Koennen Sie das bitte wiederholen?",
      "Wir haben die Grammatik wiederholt.",
      "Ich muss das Vokabular wiederholen."
    ],
    "tip": "NOT separable even though 'wieder' looks like a prefix. One word: wiederholen, wiederholte, wiederholt."
  },
  {
    "base": "zeigen",
    "level": "A2",
    "conjugation": {
      "present": {
        "ich": "zeige",
        "du": "zeigst",
        "er": "zeigt"
      },
      "perfect": "hat gezeigt",
      "preterite": "zeigte"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to show",
      "to point"
    ],
    "examples": [
      "Zeig mir dein Buch!",
      "Er hat mir den Weg gezeigt.",
      "Das zeigt, dass er recht hat."
    ],
    "tip": "Pattern: jemandem etwas zeigen (dative + accusative). 'Das zeigt...' is very useful for arguments."
  },
  {
    "base": "glauben",
    "level": "A2",
    "conjugation": {
      "present": {
        "ich": "glaube",
        "du": "glaubst",
        "er": "glaubt"
      },
      "perfect": "hat geglaubt",
      "preterite": "glaubte"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to believe",
      "to think"
    ],
    "examples": [
      "Ich glaube dir.",
      "Glaubst du das wirklich?",
      "Ich glaube, es wird regnen."
    ],
    "tip": "Two patterns: jemandem glauben (dat) = believe a person. an etwas glauben = believe in something."
  },
{
    "base": "aufräumen",
    "level": "A2",
    "separable": true,
    "separable_prefix": "auf",
    "translations": ["to tidy up", "to clean up"],
    "tip": "Separable: ich räume auf. Commonly used for tidying a room or clearing a mess.",
    "present": {"ich": "räume auf", "du": "räumst auf", "er_sie_es": "räumt auf", "wir": "räumen auf", "ihr": "räumt auf", "sie_Sie": "räumen auf"},
    "past_tenses": {"präteritum": "räumte auf", "partizip_ii": "aufgeräumt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat aufgeräumt"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "aufräumen + (Akkusativ)", "prepositions": [], "explanation": "Tidy/clean up a place.", "examples": ["Ich räume mein Zimmer auf.", "Räum bitte auf!", "Wir haben aufgeräumt."]}]
  },
  {
    "base": "einkaufen",
    "level": "A2",
    "separable": true,
    "separable_prefix": "ein",
    "translations": ["to shop", "to go shopping"],
    "tip": "Separable: ich kaufe ein. einkaufen gehen = to go shopping.",
    "present": {"ich": "kaufe ein", "du": "kaufst ein", "er_sie_es": "kauft ein", "wir": "kaufen ein", "ihr": "kauft ein", "sie_Sie": "kaufen ein"},
    "past_tenses": {"präteritum": "kaufte ein", "partizip_ii": "eingekauft"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat eingekauft"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "einkaufen + (place/items)", "prepositions": [], "explanation": "Buy groceries or shop.", "examples": ["Ich kaufe im Supermarkt ein.", "Wir sind einkaufen gegangen.", "Was soll ich einkaufen?"]}]
  },
  {
    "base": "kochen",
    "level": "A2",
    "translations": ["to cook", "to boil"],
    "tip": "Very versatile: Ich koche Nudeln = I'm boiling pasta. Ich koche Abendessen = I'm cooking dinner.",
    "present": {"ich": "koche", "du": "kochst", "er_sie_es": "kocht", "wir": "kochen", "ihr": "kocht", "sie_Sie": "kochen"},
    "past_tenses": {"präteritum": "kochte", "partizip_ii": "gekocht"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat gekocht"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "kochen + Akkusativ", "prepositions": [], "explanation": "Cook a meal or boil food.", "examples": ["Ich koche Suppe.", "Was kochst du heute?", "Das Wasser kocht."]}]
  },
  {
    "base": "spülen",
    "level": "A2",
    "translations": ["to rinse", "to wash (dishes)"],
    "tip": "Geschirr spülen = to wash the dishes. Also used in the dishwasher context: die Spülmaschine.",
    "present": {"ich": "spüle", "du": "spülst", "er_sie_es": "spült", "wir": "spülen", "ihr": "spült", "sie_Sie": "spülen"},
    "past_tenses": {"präteritum": "spülte", "partizip_ii": "gespült"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat gespült"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "Geschirr spülen", "prepositions": [], "explanation": "Wash the dishes.", "examples": ["Ich spüle das Geschirr.", "Hast du gespült?", "Die Maschine spült."]}]
  },
  {
    "base": "putzen",
    "level": "A2",
    "translations": ["to clean", "to brush"],
    "tip": "Zähne putzen = to brush teeth. Fenster putzen = to clean windows. Sehr vielseitig.",
    "present": {"ich": "putze", "du": "putzt", "er_sie_es": "putzt", "wir": "putzen", "ihr": "putzt", "sie_Sie": "putzen"},
    "past_tenses": {"präteritum": "putzte", "partizip_ii": "geputzt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat geputzt"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "putzen + Akkusativ", "prepositions": [], "explanation": "Clean or brush something.", "examples": ["Ich putze meine Zähne.", "Wir putzen die Wohnung.", "Er putzt das Auto."]}]
  },
  {
    "base": "waschen",
    "level": "A2",
    "translations": ["to wash"],
    "tip": "Strong verb, irregular present: du wäschst, er wäscht. sich waschen = to wash oneself.",
    "reflexive": true,
    "present": {"ich": "wasche", "du": "wäschst", "er_sie_es": "wäscht", "wir": "waschen", "ihr": "wascht", "sie_Sie": "waschen"},
    "past_tenses": {"präteritum": "wusch", "partizip_ii": "gewaschen"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat gewaschen"}],
    "dual_auxiliary": false,
    "patterns": [
      {"label": "waschen + Akkusativ", "prepositions": [], "explanation": "Wash something or someone.", "examples": ["Ich wasche das Auto.", "Sie wäscht die Wäsche.", "Wasch die Hände!"]},
      {"label": "sich waschen", "prepositions": [], "explanation": "Wash oneself.", "examples": ["Ich wasche mich.", "Er hat sich gewaschen."]}
    ]
  },
  {
    "base": "bestellen",
    "level": "A2",
    "translations": ["to order", "to book"],
    "tip": "Used in restaurants (food), online shopping, and booking services.",
    "present": {"ich": "bestelle", "du": "bestellst", "er_sie_es": "bestellt", "wir": "bestellen", "ihr": "bestellt", "sie_Sie": "bestellen"},
    "past_tenses": {"präteritum": "bestellte", "partizip_ii": "bestellt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat bestellt"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "bestellen + Akkusativ", "prepositions": [], "explanation": "Order something (food, products).", "examples": ["Ich bestelle eine Pizza.", "Hast du schon bestellt?", "Ich habe online bestellt."]}]
  },
  {
    "base": "reservieren",
    "level": "A2",
    "translations": ["to reserve", "to book"],
    "tip": "Common in restaurants, hotels, cinemas. Einen Tisch reservieren = to book a table.",
    "present": {"ich": "reserviere", "du": "reservierst", "er_sie_es": "reserviert", "wir": "reservieren", "ihr": "reserviert", "sie_Sie": "reservieren"},
    "past_tenses": {"präteritum": "reservierte", "partizip_ii": "reserviert"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat reserviert"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "reservieren + Akkusativ", "prepositions": [], "explanation": "Book/reserve in advance.", "examples": ["Ich reserviere einen Tisch.", "Haben Sie reserviert?", "Ein Zimmer reservieren."]}]
  },
  {
    "base": "packen",
    "level": "A2",
    "translations": ["to pack", "to grab", "to manage"],
    "tip": "den Koffer packen = to pack a suitcase. Das packe ich! = I can handle it! / I'll manage!",
    "present": {"ich": "packe", "du": "packst", "er_sie_es": "packt", "wir": "packen", "ihr": "packt", "sie_Sie": "packen"},
    "past_tenses": {"präteritum": "packte", "partizip_ii": "gepackt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat gepackt"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "packen + Akkusativ", "prepositions": [], "explanation": "Pack something, or grab/seize.", "examples": ["Ich packe den Koffer.", "Pack das ein!", "Er packte ihr am Arm."]}]
  },
  {
    "base": "umziehen",
    "level": "A2",
    "separable": true,
    "separable_prefix": "um",
    "translations": ["to move (house)", "to change clothes"],
    "tip": "Separable verb with two meanings: umziehen = to relocate OR to change clothes (sich umziehen).",
    "reflexive": true,
    "present": {"ich": "ziehe um", "du": "ziehst um", "er_sie_es": "zieht um", "wir": "ziehen um", "ihr": "zieht um", "sie_Sie": "ziehen um"},
    "past_tenses": {"präteritum": "zog um", "partizip_ii": "umgezogen"},
    "auxiliaries": [{"aux": "sein", "condition": "moving house"}, {"aux": "haben", "condition": "changing clothes (sich umziehen)"}],
    "dual_auxiliary": true,
    "patterns": [
      {"label": "umziehen (relocate)", "prepositions": ["nach", "in"], "explanation": "Move to a new place.", "examples": ["Ich ziehe nach Berlin um.", "Sie sind umgezogen."]},
      {"label": "sich umziehen (change clothes)", "prepositions": [], "explanation": "Change one's clothes.", "examples": ["Ich ziehe mich um.", "Er hat sich umgezogen."]}
    ]
  },
  {
    "base": "erklären",
    "level": "A2",
    "translations": ["to explain", "to declare"],
    "tip": "jemandem etwas erklären = to explain something to someone. Very common in academic and daily contexts.",
    "present": {"ich": "erkläre", "du": "erklärst", "er_sie_es": "erklärt", "wir": "erklären", "ihr": "erklärt", "sie_Sie": "erklären"},
    "past_tenses": {"präteritum": "erklärte", "partizip_ii": "erklärt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat erklärt"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "erklären + Dativ + Akkusativ", "prepositions": [], "explanation": "Explain something to someone.", "examples": ["Er erklärt mir die Regel.", "Kannst du das erklären?", "Sie hat alles erklärt."]}]
  },
  {
    "base": "einladen",
    "level": "A2",
    "separable": true,
    "separable_prefix": "ein",
    "translations": ["to invite"],
    "tip": "Separable strong verb: ich lade ein, du lädst ein. jemanden einladen = to invite someone.",
    "present": {"ich": "lade ein", "du": "lädst ein", "er_sie_es": "lädt ein", "wir": "laden ein", "ihr": "ladet ein", "sie_Sie": "laden ein"},
    "past_tenses": {"präteritum": "lud ein", "partizip_ii": "eingeladen"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat eingeladen"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "einladen + Akkusativ + (zu)", "prepositions": ["zu"], "explanation": "Invite someone to something.", "examples": ["Ich lade dich ein.", "Er lädt uns zur Party ein.", "Sie hat alle eingeladen."]}]
  },
  {
    "base": "vorstellen",
    "level": "A2",
    "separable": true,
    "separable_prefix": "vor",
    "reflexive": true,
    "translations": ["to introduce", "to imagine"],
    "tip": "jemanden vorstellen = to introduce someone. sich vorstellen = to introduce oneself OR to imagine.",
    "present": {"ich": "stelle vor", "du": "stellst vor", "er_sie_es": "stellt vor", "wir": "stellen vor", "ihr": "stellt vor", "sie_Sie": "stellen vor"},
    "past_tenses": {"präteritum": "stellte vor", "partizip_ii": "vorgestellt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat vorgestellt"}],
    "dual_auxiliary": false,
    "patterns": [
      {"label": "sich vorstellen (introduce)", "prepositions": [], "explanation": "Introduce oneself.", "examples": ["Ich stelle mich vor.", "Darf ich mich vorstellen?"]},
      {"label": "sich (Dat.) etwas vorstellen (imagine)", "prepositions": [], "explanation": "Imagine something.", "examples": ["Ich kann mir das gut vorstellen.", "Stell dir vor!"]}
    ]
  },
  {
    "base": "gefallen",
    "level": "A2",
    "translations": ["to please", "to like (be pleasing to)"],
    "tip": "Reversed structure! 'Das gefällt mir' = 'I like that' (lit. 'That pleases me'). Subject is the thing liked.",
    "common_mistakes": ["'Das gefällt mir' NOT 'Ich gefalle das'. The thing liked is the subject; the person is Dative."],
    "present": {"ich": "gefalle", "du": "gefällst", "er_sie_es": "gefällt", "wir": "gefallen", "ihr": "gefallt", "sie_Sie": "gefallen"},
    "past_tenses": {"präteritum": "gefiel", "partizip_ii": "gefallen"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat gefallen"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "Etwas gefällt + Dativ", "prepositions": [], "explanation": "Something is pleasing to someone (i.e. someone likes something).", "examples": ["Das gefällt mir sehr.", "Gefällt dir der Film?", "Das hat mir gut gefallen."]}]
  },
  {
    "base": "fehlen",
    "level": "A2",
    "translations": ["to be missing", "to be absent", "to lack", "to miss (be missed)"],
    "tip": "Reversed structure like gefallen! 'Du fehlst mir' = 'I miss you' (lit. 'You are missing to me').",
    "common_mistakes": ["'Du fehlst mir' (I miss you) NOT 'Ich vermisse dich fehlt'. Both constructions exist but differ in nuance."],
    "present": {"ich": "fehle", "du": "fehlst", "er_sie_es": "fehlt", "wir": "fehlen", "ihr": "fehlt", "sie_Sie": "fehlen"},
    "past_tenses": {"präteritum": "fehlte", "partizip_ii": "gefehlt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat gefehlt"}],
    "dual_auxiliary": false,
    "patterns": [
      {"label": "Etwas fehlt + Dativ", "prepositions": [], "explanation": "Something is missing to someone.", "examples": ["Mir fehlt das Geld.", "Was fehlt dir?", "Es fehlt an Zeit."]},
      {"label": "Person fehlt + Dativ (to miss)", "prepositions": [], "explanation": "Someone is missed by someone.", "examples": ["Du fehlst mir.", "Er fehlt uns sehr."]}
    ]
  },
{"base":"abholen","level":"A2","separable":true,"separable_prefix":"ab","translations":["to pick up","to collect"],"tip":"Separable: ich hole ab. jemanden abholen = to pick someone up (from a place).","present":{"ich":"hole ab","du":"holst ab","er_sie_es":"holt ab","wir":"holen ab","ihr":"holt ab","sie_Sie":"holen ab"},"past_tenses":{"präteritum":"holte ab","partizip_ii":"abgeholt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat abgeholt"}],"dual_auxiliary":false,"patterns":[{"label":"abholen + Akkusativ (von + Dativ)","prepositions":["von"],"explanation":"Pick someone/something up.","examples":["Ich hole dich ab.","Er holt sie vom Bahnhof ab.","Kannst du das Paket abholen?"]}]},
  {"base":"ankommen","level":"A2","separable":true,"separable_prefix":"an","translations":["to arrive"],"tip":"Separable motion verb → always uses sein in Perfekt. ankommen auf + Akkusativ = to depend on.","present":{"ich":"komme an","du":"kommst an","er_sie_es":"kommt an","wir":"kommen an","ihr":"kommt an","sie_Sie":"kommen an"},"past_tenses":{"präteritum":"kam an","partizip_ii":"angekommen"},"auxiliaries":[{"aux":"sein","condition":"always","perfekt":"ist angekommen"}],"dual_auxiliary":false,"patterns":[{"label":"ankommen (in + Dativ / auf + Akk.)","prepositions":["in","auf"],"explanation":"Arrive somewhere, or depend on.","examples":["Ich komme um 10 Uhr an.","Der Zug ist angekommen.","Es kommt auf dich an."]}]},
  {"base":"abfahren","level":"A2","separable":true,"separable_prefix":"ab","translations":["to depart","to leave (vehicle)"],"tip":"Separable motion verb → sein in Perfekt. Wann fährt der Zug ab? = When does the train leave?","present":{"ich":"fahre ab","du":"fährst ab","er_sie_es":"fährt ab","wir":"fahren ab","ihr":"fahrt ab","sie_Sie":"fahren ab"},"past_tenses":{"präteritum":"fuhr ab","partizip_ii":"abgefahren"},"auxiliaries":[{"aux":"sein","condition":"always","perfekt":"ist abgefahren"}],"dual_auxiliary":false,"patterns":[{"label":"abfahren (von + Dativ)","prepositions":["von"],"explanation":"Depart from a place.","examples":["Der Zug fährt in zehn Minuten ab.","Wann fährt der Bus ab?","Er ist schon abgefahren."]}]},
  {"base":"ankündigen","level":"A2","separable":true,"separable_prefix":"an","translations":["to announce","to give notice of"],"tip":"Separable. ankündigen dass... = announce that... Very common in formal and everyday contexts.","present":{"ich":"kündige an","du":"kündigst an","er_sie_es":"kündigt an","wir":"kündigen an","ihr":"kündigt an","sie_Sie":"kündigen an"},"past_tenses":{"präteritum":"kündigte an","partizip_ii":"angekündigt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat angekündigt"}],"dual_auxiliary":false,"patterns":[{"label":"ankündigen + Akkusativ / dass","prepositions":[],"explanation":"Announce or give notice of something.","examples":["Er kündigt seinen Besuch an.","Das Konzert wurde angekündigt.","Sie kündigten an, dass sie kommen."]}]},
  {"base":"aufhören","level":"A2","separable":true,"separable_prefix":"auf","translations":["to stop","to cease","to quit"],"tip":"Separable. aufhören mit + Dativ = to stop doing something. aufhören zu + Infinitiv also common.","present":{"ich":"höre auf","du":"hörst auf","er_sie_es":"hört auf","wir":"hören auf","ihr":"hört auf","sie_Sie":"hören auf"},"past_tenses":{"präteritum":"hörte auf","partizip_ii":"aufgehört"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat aufgehört"}],"dual_auxiliary":false,"patterns":[{"label":"aufhören mit + Dativ / zu + Inf.","prepositions":["mit"],"explanation":"Stop doing something.","examples":["Hör auf!","Er hört mit dem Rauchen auf.","Sie hat aufgehört zu weinen."]}]},
  {"base":"anfangen","level":"A2","separable":true,"separable_prefix":"an","translations":["to start","to begin"],"tip":"Separable strong verb. anfangen mit + Dativ = start with something. anfangen zu + Inf. = start to do.","present":{"ich":"fange an","du":"fängst an","er_sie_es":"fängt an","wir":"fangen an","ihr":"fangt an","sie_Sie":"fangen an"},"past_tenses":{"präteritum":"fing an","partizip_ii":"angefangen"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat angefangen"}],"dual_auxiliary":false,"patterns":[{"label":"anfangen mit + Dativ / zu + Inf.","prepositions":["mit"],"explanation":"Begin or start something.","examples":["Wann fängst du an?","Er fängt mit der Arbeit an.","Sie hat angefangen zu lernen."]}]},
  {"base":"aufstehen","level":"A2","separable":true,"separable_prefix":"auf","translations":["to get up","to stand up","to rise"],"tip":"Motion/change of state → sein in Perfekt. früh aufstehen = to get up early.","present":{"ich":"stehe auf","du":"stehst auf","er_sie_es":"steht auf","wir":"stehen auf","ihr":"steht auf","sie_Sie":"stehen auf"},"past_tenses":{"präteritum":"stand auf","partizip_ii":"aufgestanden"},"auxiliaries":[{"aux":"sein","condition":"always","perfekt":"ist aufgestanden"}],"dual_auxiliary":false,"patterns":[{"label":"aufstehen (um + Uhrzeit)","prepositions":[],"explanation":"Get up (from bed) or stand up.","examples":["Ich stehe um 7 Uhr auf.","Steh bitte auf!","Er ist früh aufgestanden."]}]},
  {"base":"einschlafen","level":"A2","separable":true,"separable_prefix":"ein","translations":["to fall asleep"],"tip":"Separable, change of state → sein in Perfekt. Opposite: aufwachen (to wake up).","present":{"ich":"schlafe ein","du":"schläfst ein","er_sie_es":"schläft ein","wir":"schlafen ein","ihr":"schlaft ein","sie_Sie":"schlafen ein"},"past_tenses":{"präteritum":"schlief ein","partizip_ii":"eingeschlafen"},"auxiliaries":[{"aux":"sein","condition":"always","perfekt":"ist eingeschlafen"}],"dual_auxiliary":false,"patterns":[{"label":"einschlafen (vor + Dativ)","prepositions":[],"explanation":"Fall asleep.","examples":["Ich schlafe schnell ein.","Das Baby ist eingeschlafen.","Er schläft vor dem Fernseher ein."]}]},
  {"base":"aufmachen","level":"A2","separable":true,"separable_prefix":"auf","translations":["to open","to open up"],"tip":"Separable, very colloquial alternative to öffnen. Mach die Tür auf! = Open the door! (casual)","present":{"ich":"mache auf","du":"machst auf","er_sie_es":"macht auf","wir":"machen auf","ihr":"macht auf","sie_Sie":"machen auf"},"past_tenses":{"präteritum":"machte auf","partizip_ii":"aufgemacht"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat aufgemacht"}],"dual_auxiliary":false,"patterns":[{"label":"aufmachen + Akkusativ","prepositions":[],"explanation":"Open something (casual/colloquial).","examples":["Mach die Tür auf!","Das Café macht um 8 auf.","Sie hat das Fenster aufgemacht."]}]},
  {"base":"zumachen","level":"A2","separable":true,"separable_prefix":"zu","translations":["to close","to shut"],"tip":"Separable, colloquial alternative to schließen. Opposite of aufmachen.","present":{"ich":"mache zu","du":"machst zu","er_sie_es":"macht zu","wir":"machen zu","ihr":"macht zu","sie_Sie":"machen zu"},"past_tenses":{"präteritum":"machte zu","partizip_ii":"zugemacht"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat zugemacht"}],"dual_auxiliary":false,"patterns":[{"label":"zumachen + Akkusativ","prepositions":[],"explanation":"Close something (casual).","examples":["Mach die Tür zu!","Das Geschäft macht um 20 Uhr zu.","Sie hat das Fenster zugemacht."]}]},
  {"base":"ausfüllen","level":"A2","separable":true,"separable_prefix":"aus","translations":["to fill in","to fill out","to complete"],"tip":"Separable. ein Formular ausfüllen = to fill in a form. Very common in bureaucratic contexts.","present":{"ich":"fülle aus","du":"füllst aus","er_sie_es":"füllt aus","wir":"füllen aus","ihr":"füllt aus","sie_Sie":"füllen aus"},"past_tenses":{"präteritum":"füllte aus","partizip_ii":"ausgefüllt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat ausgefüllt"}],"dual_auxiliary":false,"patterns":[{"label":"ausfüllen + Akkusativ","prepositions":[],"explanation":"Fill in a form or document.","examples":["Bitte das Formular ausfüllen.","Hast du das Formular ausgefüllt?","Die Felder ausfüllen."]}]},
  {"base":"nachschlagen","level":"A2","separable":true,"separable_prefix":"nach","translations":["to look up (in a reference)"],"tip":"Separable strong verb. in einem Wörterbuch nachschlagen = to look up in a dictionary.","present":{"ich":"schlage nach","du":"schlägst nach","er_sie_es":"schlägt nach","wir":"schlagen nach","ihr":"schlagt nach","sie_Sie":"schlagen nach"},"past_tenses":{"präteritum":"schlug nach","partizip_ii":"nachgeschlagen"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat nachgeschlagen"}],"dual_auxiliary":false,"patterns":[{"label":"nachschlagen + Akkusativ (in + Dativ)","prepositions":["in"],"explanation":"Look up a word or fact in a reference.","examples":["Im Wörterbuch nachschlagen.","Das Wort habe ich nachgeschlagen.","Schlag es nach!"]}]},
  {"base":"aufschreiben","level":"A2","separable":true,"separable_prefix":"auf","translations":["to write down","to note down"],"tip":"Separable. etwas aufschreiben = to jot something down. Very useful for learning vocabulary!","present":{"ich":"schreibe auf","du":"schreibst auf","er_sie_es":"schreibt auf","wir":"schreiben auf","ihr":"schreibt auf","sie_Sie":"schreiben auf"},"past_tenses":{"präteritum":"schrieb auf","partizip_ii":"aufgeschrieben"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat aufgeschrieben"}],"dual_auxiliary":false,"patterns":[{"label":"aufschreiben + Akkusativ","prepositions":[],"explanation":"Write something down.","examples":["Schreib das auf!","Ich habe die Adresse aufgeschrieben.","Hast du es aufgeschrieben?"]}]},
  {"base":"ausgeben","level":"A2","separable":true,"separable_prefix":"aus","translations":["to spend (money)","to distribute","to give out"],"tip":"Separable strong verb. Geld ausgeben = to spend money. sich als jemand ausgeben = to pretend to be someone.","present":{"ich":"gebe aus","du":"gibst aus","er_sie_es":"gibt aus","wir":"geben aus","ihr":"gebt aus","sie_Sie":"geben aus"},"past_tenses":{"präteritum":"gab aus","partizip_ii":"ausgegeben"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat ausgegeben"}],"dual_auxiliary":false,"patterns":[{"label":"ausgeben + Akkusativ (für + Akkusativ)","prepositions":["für"],"explanation":"Spend money on something.","examples":["Ich gebe viel Geld aus.","Sie gibt 100 Euro für Kleidung aus.","Er hat alles ausgegeben."]}]},
  {"base":"verdienen","level":"A2","translations":["to earn","to deserve"],"tip":"Geld verdienen = to earn money. Du hast es verdient! = You deserved it!","present":{"ich":"verdiene","du":"verdienst","er_sie_es":"verdient","wir":"verdienen","ihr":"verdient","sie_Sie":"verdienen"},"past_tenses":{"präteritum":"verdiente","partizip_ii":"verdient"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat verdient"}],"dual_auxiliary":false,"patterns":[{"label":"verdienen + Akkusativ","prepositions":[],"explanation":"Earn money or deserve something.","examples":["Ich verdiene 3000 Euro im Monat.","Das hast du verdient!","Er verdient gut."]}]},
  {"base":"benutzen","level":"A2","translations":["to use","to utilize"],"tip":"benutzen and verwenden are nearly synonymous. benutzen = use (an object/transport/tool).","present":{"ich":"benutze","du":"benutzt","er_sie_es":"benutzt","wir":"benutzen","ihr":"benutzt","sie_Sie":"benutzen"},"past_tenses":{"präteritum":"benutzte","partizip_ii":"benutzt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat benutzt"}],"dual_auxiliary":false,"patterns":[{"label":"benutzen + Akkusativ","prepositions":[],"explanation":"Use or utilize something.","examples":["Ich benutze das Internet täglich.","Benutze den Aufzug!","Das Wörterbuch wurde benutzt."]}]},
  {"base":"sich beeilen","level":"A2","reflexive":true,"translations":["to hurry","to rush"],"tip":"Always reflexive. Beeil dich! = Hurry up! Wir müssen uns beeilen = We need to hurry.","present":{"ich":"beeile mich","du":"beeilst dich","er_sie_es":"beeilt sich","wir":"beeilen uns","ihr":"beeilt euch","sie_Sie":"beeilen sich"},"past_tenses":{"präteritum":"beeilte sich","partizip_ii":"beeilt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat sich beeilt"}],"dual_auxiliary":false,"patterns":[{"label":"sich beeilen","prepositions":[],"explanation":"Hurry up.","examples":["Beeil dich!","Wir müssen uns beeilen.","Sie hat sich beeilt."]}]},
  {"base":"sich freuen","level":"A2","reflexive":true,"translations":["to be happy","to look forward to","to be pleased"],"tip":"sich freuen auf + Akkusativ = look forward to. sich freuen über + Akkusativ = be pleased about.","present":{"ich":"freue mich","du":"freust dich","er_sie_es":"freut sich","wir":"freuen uns","ihr":"freut euch","sie_Sie":"freuen sich"},"past_tenses":{"präteritum":"freute sich","partizip_ii":"gefreut"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat sich gefreut"}],"dual_auxiliary":false,"patterns":[{"label":"sich freuen auf/über + Akkusativ","prepositions":["auf","über"],"explanation":"Look forward to (auf) or be pleased about (über).","examples":["Ich freue mich auf den Urlaub.","Er freut sich über das Geschenk.","Wir freuen uns!"]}]},
  {"base":"sich ärgern","level":"A2","reflexive":true,"translations":["to be annoyed","to get angry"],"tip":"sich ärgern über + Akkusativ = to be annoyed about something/someone.","present":{"ich":"ärgere mich","du":"ärgerst dich","er_sie_es":"ärgert sich","wir":"ärgern uns","ihr":"ärgert euch","sie_Sie":"ärgern sich"},"past_tenses":{"präteritum":"ärgerte sich","partizip_ii":"geärgert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat sich geärgert"}],"dual_auxiliary":false,"patterns":[{"label":"sich ärgern über + Akkusativ","prepositions":["über"],"explanation":"Be annoyed or angry about something.","examples":["Ich ärgere mich über den Stau.","Er hat sich sehr geärgert.","Ärgere dich nicht!"]}]},
  {"base":"sich interessieren","level":"A2","reflexive":true,"translations":["to be interested in"],"tip":"sich interessieren für + Akkusativ. Very common structure for expressing interests.","present":{"ich":"interessiere mich","du":"interessierst dich","er_sie_es":"interessiert sich","wir":"interessieren uns","ihr":"interessiert euch","sie_Sie":"interessieren sich"},"past_tenses":{"präteritum":"interessierte sich","partizip_ii":"interessiert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat sich interessiert"}],"dual_auxiliary":false,"patterns":[{"label":"sich interessieren für + Akkusativ","prepositions":["für"],"explanation":"Be interested in something.","examples":["Ich interessiere mich für Musik.","Wofür interessierst du dich?","Er interessiert sich nicht dafür."]}]}
];

window.verbsA2 = verbsA2;
