// adverbs-db-a1.js — A1 Beginner German Adverbs (comprehensive)
const adverbsA1 = [
  {
    "base": "hier", "level": "A1", "category": "place",
    "translations": ["here"],
    "tip": "Indicates the speaker's location. Opposite: dort/da (there).",
    "examples": ["Ich wohne hier.", "Hier ist es schön.", "Bleib hier!"],
    "position_rules": ["Usually in the middle field or at the start for emphasis."],
    "example_positions": ["Hier bin ich.", "Ich bin hier."]
  },
  {
    "base": "dort", "level": "A1", "category": "place",
    "translations": ["there (further away)"],
    "tip": "Indicates a place farther from the speaker. 'Da' is more colloquial and also means 'there'.",
    "examples": ["Er wohnt dort.", "Dort ist das Museum.", "Kannst du dort warten?"],
    "position_rules": ["Usually in the middle field or at the start for emphasis."],
    "example_positions": ["Dort ist die Schule.", "Die Schule ist dort."]
  },
  {
    "base": "da", "level": "A1", "category": "place",
    "translations": ["there", "here (colloq.)", "as (conjunction)"],
    "tip": "Very common word with multiple uses: 'there' (place), 'here' (informal), or introduces a reason clause as conjunction.",
    "examples": ["Schau mal da!", "Ich bin da.", "Da er krank ist, kommt er nicht."],
    "position_rules": ["Flexible placement depending on the meaning used."],
    "example_positions": ["Da ist der Bus!", "Er ist nicht da."]
  },
  {
    "base": "jetzt", "level": "A1", "category": "time",
    "translations": ["now"],
    "tip": "Refers to the current moment. Contrast: 'gerade' (right now, in the process) vs 'jetzt' (now, at this point).",
    "examples": ["Ich lerne jetzt Deutsch.", "Jetzt gehen wir!", "Was machst du jetzt?"],
    "position_rules": ["Can appear in position 1 for emphasis or in the middle field."],
    "example_positions": ["Jetzt machen wir eine Pause.", "Wir machen jetzt eine Pause."]
  },
  {
    "base": "heute", "level": "A1", "category": "time",
    "translations": ["today"],
    "tip": "Compounds: heute Morgen (this morning), heute Abend (this evening), heutzutage (nowadays).",
    "examples": ["Heute ist Montag.", "Ich gehe heute ins Kino.", "Heute Abend koche ich."],
    "position_rules": ["Often in position 1 or the middle field after the verb."],
    "example_positions": ["Heute lerne ich.", "Ich lerne heute."]
  },
  {
    "base": "morgen", "level": "A1", "category": "time",
    "translations": ["tomorrow"],
    "tip": "Also means 'morning' as a noun (der Morgen). Context distinguishes them. 'Morgen früh' = tomorrow morning.",
    "common_mistakes": ["'Morgen' (adverb) = tomorrow. 'der Morgen' (noun) = morning. 'Guten Morgen!' = Good morning!"],
    "examples": ["Morgen fahre ich nach Berlin.", "Bis morgen!", "Morgen früh arbeite ich."],
    "position_rules": ["Often in position 1 for emphasis."],
    "example_positions": ["Morgen kommt er.", "Er kommt morgen."]
  },
  {
    "base": "gestern", "level": "A1", "category": "time",
    "translations": ["yesterday"],
    "tip": "Refers to the previous day. 'Gestern Abend' = yesterday evening.",
    "examples": ["Gestern war ich krank.", "Ich habe gestern einen Film gesehen.", "Was hast du gestern gemacht?"],
    "position_rules": ["Often in position 1 or the middle field."],
    "example_positions": ["Gestern war ich müde.", "Ich war gestern müde."]
  },
  {
    "base": "immer", "level": "A1", "category": "time/frequency",
    "translations": ["always"],
    "tip": "'Immer' can intensify comparatives: 'immer größer' = bigger and bigger, 'immer mehr' = more and more.",
    "examples": ["Ich trinke immer Kaffee zum Frühstück.", "Er ist immer freundlich.", "Das wird immer besser!"],
    "position_rules": ["Usually in the middle field after the finite verb."],
    "example_positions": ["Ich bin immer müde.", "Sie ist immer pünktlich."]
  },
  {
    "base": "nie", "level": "A1", "category": "time/frequency",
    "translations": ["never"],
    "tip": "Negative frequency word. 'Noch nie' = never yet, never before. Position: after the verb, before adverbs.",
    "examples": ["Ich trinke nie Alkohol.", "Er kommt nie pünktlich.", "Das habe ich noch nie gemacht."],
    "position_rules": ["Usually in the middle field after the finite verb."],
    "example_positions": ["Ich bin nie krank.", "Er kommt nie."]
  },
  {
    "base": "oft", "level": "A1", "category": "time/frequency",
    "translations": ["often", "frequently"],
    "tip": "Comparative: öfter. 'Ich gehe oft ins Kino' = I often go to the cinema.",
    "examples": ["Ich esse oft Pizza.", "Er ruft oft an.", "Wie oft lernst du Deutsch?"],
    "position_rules": ["Usually in the middle field."],
    "example_positions": ["Ich gehe oft spazieren.", "Er ist oft krank."]
  },
  {
    "base": "manchmal", "level": "A1", "category": "time/frequency",
    "translations": ["sometimes"],
    "tip": "Indicates occasional occurrence. Between 'oft' (often) and 'selten' (rarely).",
    "examples": ["Ich esse manchmal Fastfood.", "Manchmal ist es schwer.", "Er kommt manchmal zu spät."],
    "position_rules": ["Usually in position 1 for emphasis or in the middle field."],
    "example_positions": ["Manchmal laufe ich.", "Ich laufe manchmal."]
  },
  {
    "base": "gern / gerne", "level": "A1", "category": "manner",
    "translations": ["gladly", "with pleasure", "like to"],
    "tip": "Used to express liking an activity. 'Ich esse gern Pizza' = I like eating pizza. Comparative: lieber. Superlative: am liebsten.",
    "common_mistakes": ["Don't translate directly as 'I like pizza'. Use 'gern' with a verb: 'Ich esse gern Pizza' not 'Ich mag Pizza gern'."],
    "examples": ["Ich lerne gern Deutsch.", "Er spielt gern Fußball.", "Was machst du am liebsten?"],
    "position_rules": ["Usually after the object or at the end of the clause."],
    "example_positions": ["Ich helfe gern.", "Ich esse gern Äpfel."]
  },
  {
    "base": "sehr", "level": "A1", "category": "degree",
    "translations": ["very", "very much"],
    "tip": "Intensifier placed directly before the adjective or adverb it modifies. Also used with verbs: 'Ich mag das sehr.'",
    "examples": ["Das ist sehr schön.", "Er ist sehr groß.", "Ich mag Schokolade sehr."],
    "position_rules": ["Immediately before the adjective/adverb it modifies."],
    "example_positions": ["Das Buch ist sehr interessant.", "Sie arbeitet sehr schnell."]
  },
  {
    "base": "auch", "level": "A1", "category": "additive",
    "translations": ["also", "too", "as well"],
    "tip": "Position before the word it modifies: 'Ich auch!' (Me too!). 'Auch' can stand alone for emphasis.",
    "examples": ["Ich komme auch.", "Das ist auch interessant.", "Er lernt auch Deutsch."],
    "position_rules": ["Usually in the middle field, or in position 1 for contrast."],
    "example_positions": ["Ich bin auch müde.", "Auch ich bin müde."]
  },
  {
    "base": "noch", "level": "A1", "category": "time",
    "translations": ["still", "yet"],
    "tip": "Many uses: 'noch' = still (ongoing), 'noch nicht' = not yet, 'noch einmal' = once more/again.",
    "common_mistakes": ["'Noch' vs 'schon': 'Bist du noch hier?' (Are you still here?) vs 'Bist du schon hier?' (Are you already here?)"],
    "examples": ["Ich bin noch müde.", "Er ist noch nicht fertig.", "Noch einmal, bitte!"],
    "position_rules": ["Usually in the middle field."],
    "example_positions": ["Er schläft noch.", "Ich bin noch nicht fertig."]
  },
  {
    "base": "schon", "level": "A1", "category": "time",
    "translations": ["already", "yet"],
    "tip": "Indicates earlier-than-expected occurrence. 'Schon mal' = ever. 'Schon gut' = it's fine / never mind.",
    "common_mistakes": ["'Schon' vs 'noch': 'Bist du schon fertig?' = Are you already done? vs 'Bist du noch nicht fertig?' = Aren't you done yet?"],
    "examples": ["Ich bin schon müde.", "Hast du das schon gemacht?", "Warst du schon in Berlin?"],
    "position_rules": ["Usually in the middle field."],
    "example_positions": ["Er ist schon da.", "Ich habe das schon gehört."]
  },
  {
    "base": "nicht", "level": "A1", "category": "negation",
    "translations": ["not"],
    "tip": "The main negation word. Position depends on what is negated. Negating verbs: usually near the end. Negating adjectives: directly before them.",
    "common_mistakes": ["'Kein' negates nouns, 'nicht' negates everything else. 'Ich habe kein Auto' but 'Ich fahre nicht'."],
    "examples": ["Ich verstehe das nicht.", "Er ist nicht groß.", "Das ist nicht richtig."],
    "position_rules": ["At the end of the clause for verbs, directly before adjectives/adverbs."],
    "example_positions": ["Ich komme nicht.", "Er ist nicht müde."]
  },
  {
    "base": "dann", "level": "A1", "category": "time",
    "translations": ["then", "afterwards"],
    "tip": "Used to show sequence of events. 'Erst... dann...' = first... then...",
    "examples": ["Ich esse, dann gehe ich.", "Was machst du dann?", "Erst lerne ich, dann spiele ich."],
    "position_rules": ["Usually in position 1 or middle field."],
    "example_positions": ["Dann fahren wir nach Hause.", "Ich esse, dann gehe ich."]
  },
  {
    "base": "bitte", "level": "A1", "category": "politeness",
    "translations": ["please", "here you go", "you're welcome"],
    "tip": "Multiple uses: 'please' in requests, 'here you are' when handing something, 'you're welcome' as a response to 'Danke'.",
    "examples": ["Ein Kaffee, bitte.", "Bitte schön! — Danke schön!", "Bitte komm morgen."],
    "position_rules": ["At the end of a request or beginning as a softener."],
    "example_positions": ["Sprich bitte langsamer!", "Komm bitte herein."]
  },
  {
    "base": "ja", "level": "A1", "category": "affirmation",
    "translations": ["yes", "indeed", "of course"],
    "tip": "Besides 'yes', 'ja' is a modal particle with many nuances: surprise, emphasis, shared knowledge. 'Das ist ja toll!' = That is indeed great!",
    "examples": ["Ja, ich komme.", "Das weiß ich ja.", "Ja, natürlich!"],
    "position_rules": ["As modal particle: in the middle field after the verb."],
    "example_positions": ["Ja, das stimmt.", "Das ist ja interessant."]
  },
  {
    "base": "nein", "level": "A1", "category": "negation",
    "translations": ["no"],
    "tip": "Direct negation. Often softened with 'nein, danke' or 'nein, leider nicht'.",
    "examples": ["Nein, das ist falsch.", "Nein, danke.", "Nein, ich komme nicht."],
    "position_rules": ["Usually at the start of an answer."],
    "example_positions": ["Nein, ich will nicht.", "Nein, danke!"]
  },
  {
    "base": "vielleicht", "level": "A1", "category": "modal",
    "translations": ["maybe", "perhaps"],
    "tip": "Expresses uncertainty. 'Vielleicht komme ich' = Maybe I'll come. Also used to soften requests: 'Können Sie vielleicht helfen?'",
    "examples": ["Vielleicht komme ich morgen.", "Das ist vielleicht eine gute Idee.", "Er ist vielleicht krank."],
    "position_rules": ["Can be in position 1 for emphasis or in the middle field."],
    "example_positions": ["Vielleicht regnet es morgen.", "Er kommt vielleicht nicht."]
  },
  {
    "base": "leider", "level": "A1", "category": "modal",
    "translations": ["unfortunately"],
    "tip": "Expresses regret. Very useful for polite refusals: 'Leider kann ich nicht kommen.' = Unfortunately, I can't come.",
    "examples": ["Leider habe ich keine Zeit.", "Er kommt leider nicht.", "Das ist leider falsch."],
    "position_rules": ["Usually in position 1 or middle field."],
    "example_positions": ["Leider kann ich nicht.", "Ich kann leider nicht kommen."]
  },
  {
    "base": "zusammen", "level": "A1", "category": "manner",
    "translations": ["together"],
    "tip": "Also forms separable verb prefixes: zusammenarbeiten (to work together), zusammenkommen (to meet).",
    "examples": ["Wir essen zusammen.", "Kommt ihr zusammen?", "Lass uns zusammen lernen."],
    "position_rules": ["Usually at the end of the clause or after the verb."],
    "example_positions": ["Wir fahren zusammen.", "Können wir das zusammen machen?"]
  },
  {
    "base": "natürlich", "level": "A1", "category": "modal",
    "translations": ["naturally", "of course"],
    "tip": "Very common in conversation to express agreement or obviousness. 'Natürlich!' = Of course!",
    "examples": ["Natürlich komme ich!", "Er kann natürlich Deutsch.", "Das ist natürlich richtig."],
    "position_rules": ["Often in position 1 or middle field."],
    "example_positions": ["Natürlich helfe ich dir.", "Das ist natürlich möglich."]
  },
{"base":"auch","level":"A1","category":"general","translations":["also","too","as well"],"examples":["Ich komme auch.","Das mag ich auch.","Auch du hast Recht."],"position_rules":["Mittelfeld, after the verb"],"tip":"auch vs. noch: auch = also; noch = still/yet."},
  {"base":"noch","level":"A1","category":"temporal","translations":["still","yet","more"],"examples":["Ich lerne noch Deutsch.","Hast du noch Hunger?","Er schläft noch."],"position_rules":["Mittelfeld, after finite verb"],"tip":"noch = still (ongoing); nicht mehr = no longer."},
  {"base":"schon","level":"A1","category":"temporal","translations":["already","ever"],"examples":["Ich habe schon gegessen.","Bist du schon fertig?","Das habe ich schon gemacht."],"position_rules":["Mittelfeld, usually before main content"]},
  {"base":"immer","level":"A1","category":"frequency","translations":["always","all the time"],"examples":["Er ist immer pünktlich.","Das mache ich immer so.","Immer wenn ich komme, regnet es."],"position_rules":["Mittelfeld or position 1"]},
  {"base":"nie","level":"A1","category":"frequency","translations":["never"],"examples":["Ich trinke nie Alkohol.","Das mache ich nie.","Er kommt nie zu spät."],"position_rules":["Mittelfeld, after verb"],"tip":"nie = never. Negative adverb, needs no 'nicht'."},
  {"base":"manchmal","level":"A1","category":"frequency","translations":["sometimes"],"examples":["Manchmal gehe ich ins Kino.","Ich bin manchmal müde.","Sie ruft manchmal an."],"position_rules":["Position 1 or Mittelfeld"]},
  {"base":"oft","level":"A1","category":"frequency","translations":["often","frequently"],"examples":["Ich gehe oft ins Kino.","Er kommt oft zu spät.","Wie oft gehst du ins Fitnessstudio?"],"position_rules":["Mittelfeld or position 1"]},
  {"base":"selten","level":"A1","category":"frequency","translations":["rarely","seldom"],"examples":["Ich esse selten Fleisch.","Er kommt selten zu Besuch.","Das passiert selten."],"position_rules":["Mittelfeld or position 1"]},
  {"base":"bitte","level":"A1","category":"social","translations":["please","you're welcome"],"examples":["Bitte gib mir das Buch.","Ein Wasser, bitte.","Bitte sehr!"],"tip":"bitte = please (request) and also = you're welcome (response to Danke)."},
  {"base":"gern","level":"A1","category":"manner","translations":["gladly","willingly","with pleasure","like to"],"examples":["Ich trinke gern Kaffee.","Er hilft gern.","Gern! (= With pleasure!)"],"tip":"Ich + verb + gern = I like to do something. Gerne is an equally common form."},
{"base":"hier","level":"A1","category":"local","translations":["here"],"examples":["Ich bin hier.","Hier ist es schön.","Komm her!"],"position_rules":["Position 1 or Mittelfeld"]},
  {"base":"dort","level":"A1","category":"local","translations":["there","over there"],"examples":["Er ist dort.","Dort ist das Museum.","Geh dort hin!"],"position_rules":["Position 1 or Mittelfeld"]},
  {"base":"oben","level":"A1","category":"local","translations":["above","upstairs","at the top"],"examples":["Er wohnt oben.","Das Buch ist oben.","Von oben sieht man alles."],"position_rules":["Mittelfeld or position 1"]},
  {"base":"unten","level":"A1","category":"local","translations":["below","downstairs","at the bottom"],"examples":["Das Café ist unten.","Ich warte unten.","Von unten sieht es anders aus."],"position_rules":["Mittelfeld or position 1"]},
  {"base":"links","level":"A1","category":"directional","translations":["left","to the left"],"examples":["Biegen Sie links ab.","Links von der Kirche.","Das Haus ist links."],"position_rules":["Mittelfeld or position 1"]},
  {"base":"rechts","level":"A1","category":"directional","translations":["right","to the right"],"examples":["Rechts abbiegen.","Das ist rechts.","Geh rechts!"],"position_rules":["Mittelfeld or position 1"]},
  {"base":"geradeaus","level":"A1","category":"directional","translations":["straight ahead","straight on"],"examples":["Gehen Sie geradeaus.","Immer geradeaus.","100 Meter geradeaus."],"position_rules":["Usually after verb"]},
  {"base":"überall","level":"A1","category":"local","translations":["everywhere"],"examples":["Er ist überall bekannt.","Überall Schnee!","Das gibt es überall."],"position_rules":["Mittelfeld or position 1"]},
  {"base":"irgendwo","level":"A1","category":"local","translations":["somewhere"],"examples":["Er ist irgendwo.","Das liegt irgendwo.","Irgendwo muss es sein."],"position_rules":["Mittelfeld or position 1"]},
  {"base":"nirgends","level":"A1","category":"local","translations":["nowhere","not anywhere"],"examples":["Es ist nirgends.","Nirgends zu finden.","Das gibt es nirgends."],"position_rules":["Mittelfeld or position 1"]},
  {"base":"heute","level":"A1","category":"temporal","translations":["today"],"examples":["Heute ist Montag.","Was machst du heute?","Heute Abend."],"position_rules":["Position 1 or Mittelfeld"]},
  {"base":"gestern","level":"A1","category":"temporal","translations":["yesterday"],"examples":["Ich war gestern dort.","Was haben wir gestern gemacht?","Gestern war es schön."],"position_rules":["Position 1 or Mittelfeld"]},
  {"base":"morgen","level":"A1","category":"temporal","translations":["tomorrow"],"examples":["Morgen komme ich.","Bis morgen!","Was machst du morgen?"],"position_rules":["Position 1 or Mittelfeld"]},
  {"base":"jetzt","level":"A1","category":"temporal","translations":["now","right now"],"examples":["Ich komme jetzt.","Was machst du jetzt?","Jetzt oder nie!"],"position_rules":["Mittelfeld or position 1"]},
  {"base":"dann","level":"A1","category":"temporal","translations":["then","after that","at that time"],"examples":["Erst lernen, dann spielen.","Bis dann!","Und dann?"],"position_rules":["Position 1 (inverts) or Mittelfeld"]},
  {"base":"gleich","level":"A1","category":"temporal","translations":["soon","right away","immediately","the same"],"examples":["Ich komme gleich.","Das ist gleich ums Eck.","Das ist gleich teuer."],"position_rules":["Mittelfeld"],"tip":"gleich = soon/immediately AND the same. Context determines meaning."},
  {"base":"bald","level":"A1","category":"temporal","translations":["soon"],"examples":["Bis bald!","Er kommt bald.","Das passiert bald."],"position_rules":["Mittelfeld"]},
  {"base":"zuerst","level":"A1","category":"ordering","translations":["first","at first","to begin with"],"examples":["Zuerst lerne ich.","Zuerst war ich überrascht.","Was machst du zuerst?"],"position_rules":["Position 1 (inverts) or Mittelfeld"]},
  {"base":"zuletzt","level":"A1","category":"ordering","translations":["last","finally","most recently"],"examples":["Zuletzt war er hier.","Als zuletzt.","Wann hast du ihn zuletzt gesehen?"],"position_rules":["Position 1 or Mittelfeld"]},
  {"base":"zusammen","level":"A1","category":"manner","translations":["together"],"examples":["Wir gehen zusammen.","Zusammen sind wir stark.","Komm zusammen mit uns."],"position_rules":["Mittelfeld"]},
{"base":"fast","level":"A1","category":"degree","translations":["almost","nearly"],"examples":["Ich bin fast fertig.","Das ist fast richtig.","Es ist fast Mitternacht.","Fast alle waren da."],"position_rules":["Before adjective, adverb, or verb; intensifier of near-completeness"],"tip":"fast = almost. nicht fast = not quite. Very common and interchangeable with 'beinahe'."},
  {"base":"vielleicht","level":"A1","category":"modal","translations":["perhaps","maybe","possibly"],"examples":["Vielleicht komme ich.","Das ist vielleicht zu teuer.","Vielleicht hat er Recht.","Kommst du mit? – Vielleicht."],"position_rules":["Position 1 or Mittelfeld; signals uncertainty"]},
  {"base":"wirklich","level":"A1","category":"modal","translations":["really","truly","actually"],"examples":["Ist das wirklich so?","Ich bin wirklich müde.","Das hat mir wirklich geholfen.","Wirklich? (= Really?)"],"position_rules":["Mittelfeld; emphatic intensifier"]},
  {"base":"wieder","level":"A1","category":"temporal","translations":["again","once more"],"examples":["Mach das nicht wieder!","Ich bin wieder da.","Er ist wieder krank.","Bis später – wiedersehen!"],"position_rules":["Mittelfeld; marks repetition"]},
  {"base":"heute","level":"A1","category":"temporal","translations":["today"],"examples":["Heute ist Montag.","Was machen wir heute?","Heute Abend gehen wir aus.","Das mache ich heute noch."],"position_rules":["Position 1 or Mittelfeld"]},
  {"base":"gestern","level":"A1","category":"temporal","translations":["yesterday"],"examples":["Gestern war es warm.","Ich habe gestern geschlafen.","Das war gestern.","Gestern Abend..."],"position_rules":["Position 1 or Mittelfeld"]},
  {"base":"morgen","level":"A1","category":"temporal","translations":["tomorrow"],"examples":["Morgen ist Dienstag.","Wir sehen uns morgen.","Was machst du morgen?","Morgen früh..."],"position_rules":["Position 1 or Mittelfeld"],"tip":"morgen = tomorrow AND Morgen = morning. Das capitalized noun means morning."},
  {"base":"früh","level":"A1","category":"temporal","translations":["early","in the morning"],"examples":["Ich stehe früh auf.","Es ist noch früh.","Morgen früh komme ich.","Zu früh aufgestanden."],"position_rules":["Mittelfeld or position 1"],"tip":"früh = early. Combine with morgen for 'tomorrow morning': morgen früh."},
  {"base":"spät","level":"A1","category":"temporal","translations":["late"],"examples":["Es ist schon spät.","Du kommst zu spät!","Wie spät ist es?","Er geht spät ins Bett."],"position_rules":["Mittelfeld or after sein/kommen"]},
  {"base":"gleich","level":"A1","category":"temporal","translations":["immediately","in a moment","right away","equal"],"examples":["Ich komme gleich!","Das mache ich gleich.","Das ist gleich um die Ecke.","Gleich nach dem Essen."],"position_rules":["Mittelfeld or position 1; can indicate very near future or proximity"],"tip":"gleich = right away (temporal) AND immediately nearby (spatial). Context determines meaning."},
{"base":"doch","level":"A1","category":"modal","translations":["yet","still","after all","yes (contradicting)"],"examples":["Er kommt doch!","Das ist doch klar.","Doch, ich komme!","Du willst nicht? – Doch!"],"position_rules":["Mittelfeld or as standalone contradicting 'ja'/'nein'"],"tip":"'Doch' contradicts a negative statement. Q: 'Kommst du nicht?' A: 'Doch!' (= Actually yes!)"},
  {"base":"mal","level":"A1","category":"modal","translations":["once","just","sometime"],"examples":["Komm mal her!","Ich schaue mal nach.","Das muss ich mal sehen.","Wart mal!"],"position_rules":["Mittelfeld; softens imperatives and makes requests more casual"],"tip":"'mal' softens commands: 'Komm mal' is much friendlier than 'Komm!' — essential for natural German."},
  {"base":"ja","level":"A1","category":"modal","translations":["yes","indeed","you know","after all"],"examples":["Das ist ja toll!","Du weißt ja, was ich meine.","Das ist ja interessant.","Er ist ja krank."],"position_rules":["Mittelfeld as modal particle; standalone as 'yes'"],"tip":"'ja' as a particle adds shared knowledge or mild surprise: 'Das ist ja schön!' = 'That's really nice, isn't it!'"},
  {"base":"nun","level":"A1","category":"temporal","translations":["now","well (then)","so"],"examples":["Was nun?","Nun gut.","Er ist nun weg.","Nun, was sagst du?"],"position_rules":["Position 1 or Mittelfeld; slightly more formal than 'jetzt'"],"tip":"'nun' is slightly more reflective than 'jetzt'. 'Was nun?' = 'What now?' — a classic moment of uncertainty."},
  {"base":"erst","level":"A1","category":"temporal","translations":["only","not until","first"],"examples":["Ich bin erst 10 Minuten hier.","Er kommt erst morgen.","Erst dann verstand ich.","Erst nach dem Essen."],"position_rules":["Mittelfeld or position 1; marks something happening later than expected or for the first time"],"tip":"erst = only/not until. 'Er kommt erst morgen' = He won't come until tomorrow (later than expected)."},
  {"base":"schon","level":"A1","category":"temporal","translations":["already","yet","ever","indeed"],"examples":["Ich bin schon fertig.","Hast du schon gegessen?","Das ist schon toll!","Er ist schon da."],"position_rules":["Mittelfeld; earlier than expected OR emphasis"],"tip":"schon often implies something happened SOONER than expected. 'Er ist schon da' = He's already there (earlier than expected)."},
  {"base":"noch","level":"A1","category":"temporal","translations":["still","yet","even","more"],"examples":["Ich bin noch hier.","Noch nicht fertig.","Noch eine Frage.","Das ist noch schöner."],"position_rules":["Mittelfeld; indicates continuation or addition"],"tip":"'noch nicht' = not yet. 'noch' alone = still. 'noch ein/eine' = another/one more."},
  {"base":"dann","level":"A1","category":"temporal","translations":["then","afterwards","in that case"],"examples":["Dann gehen wir essen.","Erst Arbeit, dann Spaß.","Wenn du willst, dann machen wir das.","Bis dann!"],"position_rules":["Position 1 (inverts) or Mittelfeld; marks sequence or consequence"]}
];

window.adverbsA1 = adverbsA1;
