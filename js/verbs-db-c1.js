// verbs-db-c1.js
const verbsC1 = [
  {"base": "abwägen", "level": "C1", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to weigh up", "to consider carefully", "to balance"], "conjugation": {"present_3sg": "wägt ab", "past_participle": "abgewogen"}, "examples": ["Man muss Vor- und Nachteile abwägen.", "Er wog seine Worte sorgfältig ab.", "Alle Faktoren wurden abgewogen.", "Bitte wägen Sie das gut ab."], "tip": "Separable: wägt ab."},
  {"base": "einräumen", "level": "C1", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to concede", "to admit", "to grant"], "conjugation": {"present_3sg": "räumt ein", "past_participle": "eingeräumt"}, "examples": ["Er räumte ein, einen Fehler gemacht zu haben.", "Das muss ich einräumen.", "Sie räumte ein, dass die Kritik berechtigt war.", "Ich räume ein, dass ich Unrecht hatte."], "tip": "Separable: räumt ein. Conceding a point in argument."},
  {"base": "aufrechterhalten", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to maintain", "to uphold", "to sustain"], "conjugation": {"present_3sg": "erhält aufrecht", "past_participle": "aufrechterhalten"}, "examples": ["Der Druck muss aufrechterhalten werden.", "Die Ordnung wurde aufrechterhalten.", "Den Kontakt aufrechterhalten ist wichtig.", "Das System wurde trotz aller Schwierigkeiten aufrechterhalten."], "tip": "Complex separable compound."},
  {"base": "einwenden", "level": "C1", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to object", "to raise an objection"], "conjugation": {"present_3sg": "wendet ein", "past_participle": "eingewandt"}, "examples": ["Er wandte ein, dass die Zeit nicht reiche.", "Was lässt sich dagegen einwenden?", "Sie wandte ein, dass das so nicht funktioniert.", "Niemand konnte etwas einwenden."], "tip": "Separable: wendet ein."},
  {"base": "veranschaulichen", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to illustrate", "to demonstrate", "to make clear"], "conjugation": {"present_3sg": "veranschaulicht", "past_participle": "veranschaulicht"}, "examples": ["Das Beispiel veranschaulicht das Prinzip gut.", "Ein Diagramm kann das veranschaulichen.", "Lassen Sie mich das veranschaulichen.", "Der Vortrag veranschaulichte die Zusammenhänge."], "tip": "Used in academic and explanatory contexts."},
  {"base": "in Frage stellen", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to question", "to call into question", "to challenge"], "conjugation": {"present_3sg": "stellt in Frage", "past_participle": "in Frage gestellt"}, "examples": ["Er stellte die Entscheidung in Frage.", "Das stellt unsere Annahmen in Frage.", "Die Ergebnisse wurden in Frage gestellt.", "Grundannahmen sollte man regelmäßig in Frage stellen."], "tip": "Idiomatic phrase functioning as a verb."},
  {"base": "erörtern", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to discuss", "to examine", "to analyse"], "conjugation": {"present_3sg": "erörtert", "past_participle": "erörtert"}, "examples": ["Das Thema wurde ausführlich erörtert.", "Wir müssen die Möglichkeiten erörtern.", "Die Frage wird im Bericht erörtert.", "Bitte erörtern Sie Ihre Position."], "tip": "Formal; common in academic writing."},
  {"base": "differenzieren", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to differentiate", "to make distinctions", "to nuance"], "conjugation": {"present_3sg": "differenziert", "past_participle": "differenziert"}, "examples": ["Man muss hier differenzieren.", "Er differenziert klar zwischen den Konzepten.", "Das lässt sich nicht so einfach differenzieren.", "Ein differenziertes Urteil ist wichtig."], "tip": "Also reflexive: sich differenzieren."},
  {"base": "einschränken", "level": "C1", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to restrict", "to limit", "to qualify"], "conjugation": {"present_3sg": "schränkt ein", "past_participle": "eingeschränkt"}, "examples": ["Das schränkt uns stark ein.", "Die Freiheit wird eingeschränkt.", "Er schränkte seine Aussage ein.", "Haushaltskürzungen schränken die Möglichkeiten ein."], "tip": "Separable: schränkt ein."},
  {"base": "abwenden", "level": "C1", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to avert", "to ward off", "to turn away"], "conjugation": {"present_3sg": "wendet ab", "past_participle": "abgewendet"}, "examples": ["Eine Katastrophe wurde abgewendet.", "Er wandte den Blick ab.", "Die Krise konnte abgewendet werden.", "Sie wendete das Schlimmste ab."], "tip": "Separable: wendet ab."},
  {"base": "bekräftigen", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to confirm", "to reinforce", "to reaffirm"], "conjugation": {"present_3sg": "bekräftigt", "past_participle": "bekräftigt"}, "examples": ["Er bekräftigte seine Aussage.", "Das bekräftigt meinen Verdacht.", "Die Ergebnisse bekräftigen die Theorie.", "Sie bekräftigte ihre Forderungen."], "tip": "Emphasizing or strengthening a claim."},
  {"base": "darlegen", "level": "C1", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to set out", "to present", "to explain", "to expound"], "conjugation": {"present_3sg": "legt dar", "past_participle": "dargelegt"}, "examples": ["Er legte seine Position dar.", "Bitte legen Sie Ihre Sichtweise dar.", "Die Argumente wurden klar dargelegt.", "Sie legte die Risiken ausführlich dar."], "tip": "Separable: legt dar. Formal presentation of a position."},
  {"base": "hinterfragen", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to question critically", "to examine", "to scrutinize"], "conjugation": {"present_3sg": "hinterfragt", "past_participle": "hinterfragt"}, "examples": ["Man sollte seine Überzeugungen hinterfragen.", "Das System muss hinterfragt werden.", "Niemand hinterfragt das.", "Er hinterfragt alles."], "tip": "Implies critical examination, not just questioning."},
  {"base": "überwiegen", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to predominate", "to outweigh", "to prevail"], "conjugation": {"present_3sg": "überwiegt", "past_participle": "überwogen"}, "examples": ["Die Vorteile überwiegen.", "In diesem Fall überwiegen die Risiken.", "Positive Aspekte überwiegen die negativen.", "Skepsis überwiegt momentan."], "tip": "Common in comparative analysis."},
  {"base": "veranlassen", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to cause", "to prompt", "to arrange"], "conjugation": {"present_3sg": "veranlasst", "past_participle": "veranlasst"}, "examples": ["Was hat Sie dazu veranlasst?", "Er veranlasste die nötigen Schritte.", "Das veranlasste mich zum Nachdenken.", "Eine Überprüfung wurde veranlasst."], "tip": "Formal; often used in passive."},
  {"base": "verdeutlichen", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to clarify", "to make clear", "to illustrate"], "conjugation": {"present_3sg": "verdeutlicht", "past_participle": "verdeutlicht"}, "examples": ["Das verdeutlicht das Problem.", "Können Sie das verdeutlichen?", "Ein Beispiel soll das verdeutlichen.", "Die Grafik verdeutlicht die Entwicklung."], "tip": "Slightly stronger than 'erklären'."},
  {"base": "widerlegen", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to refute", "to disprove", "to rebut"], "conjugation": {"present_3sg": "widerlegt", "past_participle": "widerlegt"}, "examples": ["Die Theorie wurde widerlegt.", "Er konnte die Behauptung nicht widerlegen.", "Das Argument ist leicht zu widerlegen.", "Neue Beweise widerlegten die Hypothese."], "tip": "Used in academic and logical argumentation."},
  {"base": "nahelegen", "level": "C1", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to suggest", "to imply", "to recommend strongly"], "conjugation": {"present_3sg": "legt nahe", "past_participle": "nahegelegt"}, "examples": ["Die Daten legen nahe, dass er recht hat.", "Was legt das nahe?", "Der Befund legt eine weitere Untersuchung nahe.", "Es liegt nahe, dass..."], "tip": "Separable: legt nahe. Implies a strong suggestion without commanding."},
  {"base": "unterstreichen", "level": "C1", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to underline", "to emphasize", "to highlight"], "conjugation": {"present_3sg": "unterstreicht", "past_participle": "unterstrichen"}, "examples": ["Das unterstreicht die Bedeutung des Themas.", "Er unterstrich seine Worte mit Gesten.", "Die Ergebnisse unterstreichen die Notwendigkeit.", "Sie unterstrich ihre Forderungen."], "tip": "Both literal (underlining text) and figurative use."},
  {"base": "abzielen", "level": "C1", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to aim at", "to target", "to be directed at"], "conjugation": {"present_3sg": "zielt ab", "past_participle": "abgezielt"}, "examples": ["Das Gesetz zielt auf Chancengleichheit ab.", "Worauf zielt diese Frage ab?", "Die Maßnahme zielt auf eine Verhaltensänderung ab.", "Die Kampagne zielte auf junge Wähler ab."], "tip": "Separable: zielt ab. Always with 'auf + Akkusativ'."},
,
  {
    "base": "implizieren",
    "level": "C1",
    "conjugation": {
      "present": {
        "ich": "impliziere",
        "du": "implizierst",
        "er": "impliziert"
      },
      "perfect": "hat impliziert",
      "preterite": "implizierte"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to imply",
      "to entail"
    ],
    "examples": [
      "Das impliziert, dass er luegt.",
      "Deine Aussage impliziert einen Widerspruch.",
      "Was impliziert das fuer die Forschung?"
    ],
    "tip": "Academic/formal. Use 'bedeuten' or 'andeuten' in everyday speech instead."
  },
  {
    "base": "ueberwaeltigen",
    "level": "C1",
    "conjugation": {
      "present": {
        "ich": "ueberwaeltige",
        "du": "ueberwaeltigst",
        "er": "ueberwaeltigt"
      },
      "perfect": "hat ueberwaeltigt",
      "preterite": "ueberwaeltigte"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to overwhelm",
      "to overpower"
    ],
    "examples": [
      "Die Schoenheit der Landschaft ueberwaeltigte sie.",
      "Er wurde von seinen Gefuehlen ueberwaeltigt.",
      "Das Ergebnis hat mich ueberwaeltigt."
    ],
    "tip": "Often used in passive or reflexive constructions. Emotional impact is key connotation.",
    "base_display": "überwältigen"
  },
  {
    "base": "hervorgehen",
    "level": "C1",
    "conjugation": {
      "present": {
        "ich": "gehe hervor",
        "du": "gehst hervor",
        "er": "geht hervor"
      },
      "perfect": "ist hervorgegangen",
      "preterite": "ging hervor"
    },
    "auxiliary": "sein",
    "is_separable": true,
    "translations": [
      "to emerge from",
      "to result from",
      "to follow from"
    ],
    "examples": [
      "Aus der Studie geht hervor, dass der Ansatz funktioniert.",
      "Daraus geht hervor, dass er recht hat.",
      "Was geht aus dem Dokument hervor?"
    ],
    "tip": "Uses SEIN. Key phrase: 'Aus X geht hervor, dass...' = it emerges from X that. Essential for academic writing."
  },
  {
    "base": "praegen",
    "level": "C1",
    "conjugation": {
      "present": {
        "ich": "praege",
        "du": "praegst",
        "er": "praegt"
      },
      "perfect": "hat geplaegt",
      "preterite": "praegte"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to shape",
      "to characterise",
      "to coin a term"
    ],
    "examples": [
      "Die Kindheit praegt den Menschen.",
      "Er hat diesen Begriff geplaegt.",
      "Das Erlebnis hat sie tief geplaegt."
    ],
    "tip": "Three meanings: shape/influence, characterise, and coin a term. All common in academic writing.",
    "base_display": "prägen"
  },
  {
    "base": "reflektieren",
    "level": "C1",
    "conjugation": {
      "present": {
        "ich": "reflektiere",
        "du": "reflektierst",
        "er": "reflektiert"
      },
      "perfect": "hat reflektiert",
      "preterite": "reflektierte"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to reflect on",
      "to reflect light"
    ],
    "examples": [
      "Wir muessen ueber unser Handeln reflektieren.",
      "Das Glas reflektiert das Licht.",
      "Er reflektiert seine eigenen Fehler kaum."
    ],
    "tip": "ueber + acc: to reflect on something. Also literal (light/mirror). Key word for academic and philosophical texts."
  },
  {
    "base": "verwerfen",
    "level": "C1",
    "conjugation": {
      "present": {
        "ich": "verwerfe",
        "du": "verwirfst",
        "er": "verwirft"
      },
      "perfect": "hat verworfen",
      "preterite": "verwarf"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to reject",
      "to dismiss",
      "to discard"
    ],
    "examples": [
      "Das Gericht hat die Klage verworfen.",
      "Wir muessen diesen Plan verwerfen.",
      "Ihre Theorie wurde von der Gemeinschaft verworfen."
    ],
    "tip": "More decisive/final than 'ablehnen'. Used in legal, scientific, and formal decision-making contexts."
  },
  {
    "base": "erschliessen",
    "level": "C1",
    "conjugation": {
      "present": {
        "ich": "erschliesse",
        "du": "erschliesst",
        "er": "erschliesst"
      },
      "perfect": "hat erschlossen",
      "preterite": "erschloss"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to develop",
      "to open up",
      "to infer"
    ],
    "examples": [
      "Das Unternehmen erschliesst neue Maerkte.",
      "Neue Erkenntnisse lassen sich daraus erschliessen.",
      "Das Gebiet wurde erschlossen."
    ],
    "tip": "Three uses: 1) develop territory/market, 2) infer/deduce, 3) sich erschliessen = become clear. Academic and economic contexts.",
    "base_display": "erschließen"
  },
  {
    "base": "begruenden",
    "level": "C1",
    "conjugation": {
      "present": {
        "ich": "begruende",
        "du": "begruendest",
        "er": "begruendet"
      },
      "perfect": "hat begruendet",
      "preterite": "begruendete"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to justify",
      "to give reasons for",
      "to found (an institution)"
    ],
    "examples": [
      "Sie hat ihre Entscheidung gut begruendet.",
      "Das Unternehmen wurde 1990 begruendet.",
      "Wie begruenden Sie Ihre These?"
    ],
    "tip": "Two meanings: 1) justify/give reasons (very common in formal writing), 2) found/establish an organisation.",
    "base_display": "begründen"
  },
{
    "base": "inbetrachtziehen",
    "level": "C1",
    "separable": false,
    "translations": ["to consider", "to take into consideration"],
    "tip": "Often written as 'in Betracht ziehen' (two words). Formal and used in written/academic German.",
    "present": {"ich": "ziehe in Betracht", "du": "ziehst in Betracht", "er_sie_es": "zieht in Betracht", "wir": "ziehen in Betracht", "ihr": "zieht in Betracht", "sie_Sie": "ziehen in Betracht"},
    "past_tenses": {"präteritum": "zog in Betracht", "partizip_ii": "in Betracht gezogen"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat in Betracht gezogen"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "in Betracht ziehen + Akkusativ", "prepositions": [], "explanation": "Take something into consideration.", "examples": ["Wir ziehen alle Optionen in Betracht.", "Das muss in Betracht gezogen werden.", "Haben Sie das in Betracht gezogen?"]}]
  },
  {
    "base": "gewährleisten",
    "level": "C1",
    "translations": ["to ensure", "to guarantee", "to safeguard"],
    "tip": "Formal verb, common in legal, political, and official contexts. Stronger than sicherstellen.",
    "present": {"ich": "gewährleiste", "du": "gewährleistest", "er_sie_es": "gewährleistet", "wir": "gewährleisten", "ihr": "gewährleistet", "sie_Sie": "gewährleisten"},
    "past_tenses": {"präteritum": "gewährleistete", "partizip_ii": "gewährleistet"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat gewährleistet"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "gewährleisten + Akkusativ", "prepositions": [], "explanation": "Guarantee or ensure something.", "examples": ["Das Gesetz gewährleistet die Grundrechte.", "Die Sicherheit muss gewährleistet werden.", "Das kann ich nicht gewährleisten."]}]
  },
  {
    "base": "herbeiführen",
    "level": "C1",
    "separable": true,
    "separable_prefix": "herbei",
    "translations": ["to bring about", "to cause", "to produce"],
    "tip": "Formal. Refers to causing or producing a change, outcome, or situation.",
    "present": {"ich": "führe herbei", "du": "führst herbei", "er_sie_es": "führt herbei", "wir": "führen herbei", "ihr": "führt herbei", "sie_Sie": "führen herbei"},
    "past_tenses": {"präteritum": "führte herbei", "partizip_ii": "herbeigeführt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat herbeigeführt"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "herbeiführen + Akkusativ", "prepositions": [], "explanation": "Bring about or cause a result.", "examples": ["Die Reform hat Veränderungen herbeigeführt.", "Er hat den Wandel herbeigeführt.", "Das kann eine Einigung herbeiführen."]}]
  },
  {
    "base": "veranschaulichen",
    "level": "C1",
    "translations": ["to illustrate", "to demonstrate", "to make clear"],
    "tip": "Academic and formal. Used to clarify abstract ideas with examples or visuals.",
    "present": {"ich": "veranschauliche", "du": "veranschaulichst", "er_sie_es": "veranschaulicht", "wir": "veranschaulichen", "ihr": "veranschaulicht", "sie_Sie": "veranschaulichen"},
    "past_tenses": {"präteritum": "veranschaulichte", "partizip_ii": "veranschaulicht"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat veranschaulicht"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "veranschaulichen + Akkusativ", "prepositions": [], "explanation": "Illustrate or make something concrete.", "examples": ["Das Beispiel veranschaulicht den Punkt.", "Er veranschaulicht das Prinzip mit Grafiken.", "Diese Statistik veranschaulicht das Problem."]}]
  },
  {
    "base": "abwägen",
    "level": "C1",
    "separable": true,
    "separable_prefix": "ab",
    "translations": ["to weigh up", "to consider carefully", "to balance"],
    "tip": "Used for carefully weighing pros and cons. Vor- und Nachteile abwägen = to weigh up advantages and disadvantages.",
    "present": {"ich": "wäge ab", "du": "wägst ab", "er_sie_es": "wägt ab", "wir": "wägen ab", "ihr": "wägt ab", "sie_Sie": "wägen ab"},
    "past_tenses": {"präteritum": "wog ab", "partizip_ii": "abgewogen"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat abgewogen"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "abwägen + Akkusativ (gegen)", "prepositions": ["gegen"], "explanation": "Carefully weigh up options.", "examples": ["Ich wäge die Optionen ab.", "Er hat die Vor- und Nachteile abgewogen.", "Man muss Risiken und Chancen abwägen."]}]
  },
  {
    "base": "einwenden",
    "level": "C1",
    "separable": true,
    "separable_prefix": "ein",
    "translations": ["to object", "to raise an objection"],
    "tip": "Formal. Often in legal, academic, or debate contexts. Etwas einwenden gegen = to object to something.",
    "present": {"ich": "wende ein", "du": "wendest ein", "er_sie_es": "wendet ein", "wir": "wenden ein", "ihr": "wendet ein", "sie_Sie": "wenden ein"},
    "past_tenses": {"präteritum": "wandte ein", "partizip_ii": "eingewandt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat eingewandt"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "einwenden + dass / gegen + Akkusativ", "prepositions": ["gegen"], "explanation": "Raise an objection.", "examples": ["Er wendet ein, dass das zu teuer ist.", "Ich habe nichts einzuwenden.", "Sie wandte ein, dass das falsch sei."]}]
  },
{"base":"antizipieren","level":"C1","translations":["to anticipate"],"tip":"Formal verb. etwas antizipieren = to anticipate/foresee something. Common in strategic and academic language.","present":{"ich":"antizipiere","du":"antizipierst","er_sie_es":"antizipiert","wir":"antizipieren","ihr":"antizipiert","sie_Sie":"antizipieren"},"past_tenses":{"präteritum":"antizipierte","partizip_ii":"antizipiert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat antizipiert"}],"dual_auxiliary":false,"patterns":[{"label":"antizipieren + Akkusativ","prepositions":[],"explanation":"Anticipate or foresee something.","examples":["Wir haben das antizipiert.","Er antizipiert Schwierigkeiten.","Das war nicht zu antizipieren."]}]},
  {"base":"hinterfragen","level":"C1","translations":["to question","to critically examine","to challenge"],"tip":"etwas hinterfragen = to critically question something. Stronger than 'infrage stellen'. Academic and philosophical usage.","present":{"ich":"hinterfrage","du":"hinterfragst","er_sie_es":"hinterfragt","wir":"hinterfragen","ihr":"hinterfragt","sie_Sie":"hinterfragen"},"past_tenses":{"präteritum":"hinterfragte","partizip_ii":"hinterfragt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat hinterfragt"}],"dual_auxiliary":false,"patterns":[{"label":"hinterfragen + Akkusativ","prepositions":[],"explanation":"Critically question or challenge something.","examples":["Man muss das hinterfragen.","Die Prämissen wurden hinterfragt.","Grundannahmen hinterfragen."]}]},
  {"base":"implementieren","level":"C1","translations":["to implement"],"tip":"Technical and formal. etwas implementieren = to implement (a system, policy, plan). Common in IT and policy contexts.","present":{"ich":"implementiere","du":"implementierst","er_sie_es":"implementiert","wir":"implementieren","ihr":"implementiert","sie_Sie":"implementieren"},"past_tenses":{"präteritum":"implementierte","partizip_ii":"implementiert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat implementiert"}],"dual_auxiliary":false,"patterns":[{"label":"implementieren + Akkusativ","prepositions":[],"explanation":"Implement a system or policy.","examples":["Die Software wurde implementiert.","Eine Strategie implementieren.","Das System ist implementiert."]}]},
  {"base":"interagieren","level":"C1","translations":["to interact"],"tip":"mit jemandem/etwas interagieren = to interact with. Academic and professional usage.","present":{"ich":"interagiere","du":"interagierst","er_sie_es":"interagiert","wir":"interagieren","ihr":"interagiert","sie_Sie":"interagieren"},"past_tenses":{"präteritum":"interagierte","partizip_ii":"interagiert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat interagiert"}],"dual_auxiliary":false,"patterns":[{"label":"interagieren mit + Dativ","prepositions":["mit"],"explanation":"Interact with someone or something.","examples":["Die Nutzer interagieren mit der App.","Wie interagieren die Systeme?","Die Teilnehmer interagierten gut."]}]},
  {"base":"konsolidieren","level":"C1","translations":["to consolidate"],"tip":"etwas konsolidieren = to consolidate. eine Position konsolidieren = to consolidate a position. Common in finance and strategy.","present":{"ich":"konsolidiere","du":"konsolidierst","er_sie_es":"konsolidiert","wir":"konsolidieren","ihr":"konsolidiert","sie_Sie":"konsolidieren"},"past_tenses":{"präteritum":"konsolidierte","partizip_ii":"konsolidiert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat konsolidiert"}],"dual_auxiliary":false,"patterns":[{"label":"konsolidieren + Akkusativ","prepositions":[],"explanation":"Consolidate something.","examples":["Die Position konsolidieren.","Der Haushalt wurde konsolidiert.","Das Unternehmen konsolidiert."]}]},
  {"base":"manifestieren","level":"C1","reflexive":true,"translations":["to manifest","to demonstrate","to show itself"],"tip":"sich manifestieren in + Dativ = to manifest in. etwas manifestieren = to demonstrate/show something clearly. Academic usage.","present":{"ich":"manifestiere","du":"manifestierst","er_sie_es":"manifestiert","wir":"manifestieren","ihr":"manifestiert","sie_Sie":"manifestieren"},"past_tenses":{"präteritum":"manifestierte","partizip_ii":"manifestiert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat manifestiert"}],"dual_auxiliary":false,"patterns":[{"label":"sich manifestieren in + Dativ","prepositions":["in"],"explanation":"Manifest or become apparent in something.","examples":["Das Problem manifestiert sich.","Die Krise manifestiert sich in Zahlen.","Probleme manifestieren sich langsam."]}]},
  {"base":"operationalisieren","level":"C1","translations":["to operationalise","to make measurable/workable"],"tip":"Formal/academic. einen Begriff operationalisieren = to define a concept in measurable terms. Common in research methodology.","present":{"ich":"operationalisiere","du":"operationalisierst","er_sie_es":"operationalisiert","wir":"operationalisieren","ihr":"operationalisiert","sie_Sie":"operationalisieren"},"past_tenses":{"präteritum":"operationalisierte","partizip_ii":"operationalisiert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat operationalisiert"}],"dual_auxiliary":false,"patterns":[{"label":"operationalisieren + Akkusativ","prepositions":[],"explanation":"Make a concept measurable or workable.","examples":["Ein Konzept operationalisieren.","Das Ziel wurde operationalisiert.","Wie operationalisiert man das?"]}]},
  {"base":"perpetuieren","level":"C1","translations":["to perpetuate"],"tip":"etwas perpetuieren = to perpetuate or maintain something (often negative: perpetuate injustice). Formal/academic.","present":{"ich":"perpetuiere","du":"perpetuierst","er_sie_es":"perpetuiert","wir":"perpetuieren","ihr":"perpetuiert","sie_Sie":"perpetuieren"},"past_tenses":{"präteritum":"perpetuierte","partizip_ii":"perpetuiert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat perpetuiert"}],"dual_auxiliary":false,"patterns":[{"label":"perpetuieren + Akkusativ","prepositions":[],"explanation":"Perpetuate or maintain something indefinitely.","examples":["Stereotypen werden perpetuiert.","Das System perpetuiert die Ungleichheit.","Strukturen perpetuieren sich."]}]},
  {"base":"synthetisieren","level":"C1","translations":["to synthesise","to combine"],"tip":"Informationen synthetisieren = to synthesise information. Academic and scientific usage.","present":{"ich":"synthetisiere","du":"synthetisierst","er_sie_es":"synthetisiert","wir":"synthetisieren","ihr":"synthetisiert","sie_Sie":"synthetisieren"},"past_tenses":{"präteritum":"synthetisierte","partizip_ii":"synthetisiert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat synthetisiert"}],"dual_auxiliary":false,"patterns":[{"label":"synthetisieren + Akkusativ","prepositions":[],"explanation":"Synthesise information or elements.","examples":["Die Ergebnisse synthetisieren.","Erkenntnisse wurden synthetisiert.","Daten synthetisieren und auswerten."]}]},
  {"base":"transformieren","level":"C1","translations":["to transform","to convert"],"tip":"etwas transformieren = to transform or fundamentally change something. Also in maths/physics: transform. Common in academic contexts.","present":{"ich":"transformiere","du":"transformierst","er_sie_es":"transformiert","wir":"transformieren","ihr":"transformiert","sie_Sie":"transformieren"},"past_tenses":{"präteritum":"transformierte","partizip_ii":"transformiert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat transformiert"}],"dual_auxiliary":false,"patterns":[{"label":"transformieren + Akkusativ (in + Akkusativ)","prepositions":["in"],"explanation":"Transform something into something else.","examples":["Die Industrie wurde transformiert.","Das transformiert die Gesellschaft.","Energie in Wärme transformieren."]}]},
  {"base":"abstrahieren","level":"C1","translations":["to abstract","to generalise","to extract the essence"],"tip":"von etwas abstrahieren = to abstract away from specifics. Common in philosophy, science, and academic writing.","present":{"ich":"abstrahiere","du":"abstrahierst","er_sie_es":"abstrahiert","wir":"abstrahieren","ihr":"abstrahiert","sie_Sie":"abstrahieren"},"past_tenses":{"präteritum":"abstrahierte","partizip_ii":"abstrahiert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat abstrahiert"}],"dual_auxiliary":false,"patterns":[{"label":"abstrahieren (von + Dativ)","prepositions":["von"],"explanation":"Abstract away from details or generalise.","examples":["Von Einzelfällen abstrahieren.","Er abstrahiert das Konzept.","Man muss hier abstrahieren."]}]},
  {"base":"differenziert betrachten","level":"C1","translations":["to consider in a nuanced way"],"tip":"Phrase. etwas differenziert betrachten = to take a nuanced view. Common in academic and journalistic language.","present":{"ich":"betrachte differenziert","du":"betrachtst differenziert","er_sie_es":"betrachtet differenziert","wir":"betrachten differenziert","ihr":"betrachtet differenziert","sie_Sie":"betrachten differenziert"},"past_tenses":{"präteritum":"betrachtete differenziert","partizip_ii":"differenziert betrachtet"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat differenziert betrachtet"}],"dual_auxiliary":false,"patterns":[{"label":"differenziert betrachten + Akkusativ","prepositions":[],"explanation":"View or analyse something with nuance.","examples":["Das muss differenziert betrachtet werden.","Er betrachtet das differenziert.","Die Frage differenziert betrachten."]}]},
  {"base":"subsumieren","level":"C1","translations":["to subsume","to classify under","to include under"],"tip":"etwas unter etwas subsumieren = to classify/include something under a broader category. Common in legal and academic texts.","present":{"ich":"subsumiere","du":"subsumierst","er_sie_es":"subsumiert","wir":"subsumieren","ihr":"subsumiert","sie_Sie":"subsumieren"},"past_tenses":{"präteritum":"subsumierte","partizip_ii":"subsumiert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat subsumiert"}],"dual_auxiliary":false,"patterns":[{"label":"subsumieren + Akkusativ + unter + Akkusativ","prepositions":["unter"],"explanation":"Classify something under a broader concept.","examples":["Das wird unter Paragraf 5 subsumiert.","Man kann das darunter subsumieren.","Der Begriff lässt sich subsumieren."]}]},
  {"base":"implizieren","level":"C1","translations":["to imply","to entail"],"tip":"etwas impliziert etwas = something implies something. Different from voraussetzen: implication is logical consequence, not precondition.","present":{"ich":"impliziere","du":"implizierst","er_sie_es":"impliziert","wir":"implizieren","ihr":"impliziert","sie_Sie":"implizieren"},"past_tenses":{"präteritum":"implizierte","partizip_ii":"impliziert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat impliziert"}],"dual_auxiliary":false,"patterns":[{"label":"implizieren + Akkusativ","prepositions":[],"explanation":"Imply or logically entail something.","examples":["Das impliziert einen Widerspruch.","Was impliziert diese Aussage?","Das wurde nicht explizit gesagt, aber impliziert."]}]},
  {"base":"generieren","level":"C1","translations":["to generate","to produce"],"tip":"etwas generieren = to generate (data, income, ideas). More formal/technical than erzeugen. Common in business and academic language.","present":{"ich":"generiere","du":"generierst","er_sie_es":"generiert","wir":"generieren","ihr":"generiert","sie_Sie":"generieren"},"past_tenses":{"präteritum":"generierte","partizip_ii":"generiert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat generiert"}],"dual_auxiliary":false,"patterns":[{"label":"generieren + Akkusativ","prepositions":[],"explanation":"Generate or produce something.","examples":["Einnahmen generieren.","Daten werden generiert.","Neue Ideen generieren."]}]},
{
    "base": "subsumieren",
    "level": "C1",
    "translations": ["to subsume", "to include under", "to classify under"],
    "tip": "Academic/legal. etw. unter etw. subsumieren = to classify or include something under a broader category.",
    "present": {"ich": "subsumiere", "du": "subsumierst", "er_sie_es": "subsumiert", "wir": "subsumieren", "ihr": "subsumiert", "sie_Sie": "subsumieren"},
    "past_tenses": {"präteritum": "subsumierte", "partizip_ii": "subsumiert"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat subsumiert"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "subsumieren + Akkusativ + unter + Dativ", "prepositions": ["unter"], "explanation": "Classify something under a broader category.", "examples": ["Das lässt sich unter diesen Begriff subsumieren.", "Er subsumiert beide Fälle unter eine Regel.", "Das kann man nicht einfach subsumieren."]}]
  },
  {
    "base": "postulieren",
    "level": "C1",
    "translations": ["to postulate", "to posit", "to claim"],
    "tip": "Academic. Used in philosophy, science, and formal argumentation. Stronger and more technical than 'behaupten'.",
    "present": {"ich": "postuliere", "du": "postulierst", "er_sie_es": "postuliert", "wir": "postulieren", "ihr": "postuliert", "sie_Sie": "postulieren"},
    "past_tenses": {"präteritum": "postulierte", "partizip_ii": "postuliert"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat postuliert"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "postulieren + Akkusativ / dass-Satz", "prepositions": [], "explanation": "Postulate or formally claim something.", "examples": ["Er postulierte, dass das Universum unendlich ist.", "Die Theorie postuliert eine neue Partikeleigenschaft.", "Was die Theorie postuliert."]}]
  },
  {
    "base": "perpetuieren",
    "level": "C1",
    "translations": ["to perpetuate", "to maintain indefinitely", "to sustain"],
    "tip": "Academic/critical discourse. Often used to describe the continuation of negative patterns.",
    "present": {"ich": "perpetuiere", "du": "perpetuierst", "er_sie_es": "perpetuiert", "wir": "perpetuieren", "ihr": "perpetuiert", "sie_Sie": "perpetuieren"},
    "past_tenses": {"präteritum": "perpetuierte", "partizip_ii": "perpetuiert"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat perpetuiert"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "perpetuieren + Akkusativ", "prepositions": [], "explanation": "Perpetuate or sustain something (often problematic).", "examples": ["Das perpetuiert Ungleichheiten.", "Die Struktur perpetuiert Macht.", "Vorurteile werden so perpetuiert."]}]
  },
  {
    "base": "konzeptualisieren",
    "level": "C1",
    "translations": ["to conceptualize", "to frame conceptually"],
    "tip": "Academic. Used to describe the process of framing or thinking through concepts systematically.",
    "present": {"ich": "konzeptualisiere", "du": "konzeptualisierst", "er_sie_es": "konzeptualisiert", "wir": "konzeptualisieren", "ihr": "konzeptualisiert", "sie_Sie": "konzeptualisieren"},
    "past_tenses": {"präteritum": "konzeptualisierte", "partizip_ii": "konzeptualisiert"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat konzeptualisiert"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "konzeptualisieren + Akkusativ", "prepositions": [], "explanation": "Conceptualize or frame something.", "examples": ["Das Problem wird anders konzeptualisiert.", "Wie konzeptualisiert man das?", "Der Begriff wurde neu konzeptualisiert."]}]
  },
  {
    "base": "operationalisieren",
    "level": "C1",
    "translations": ["to operationalize", "to make measurable", "to put into practice"],
    "tip": "Research methodology. Converting abstract concepts into measurable indicators.",
    "present": {"ich": "operationalisiere", "du": "operationalisierst", "er_sie_es": "operationalisiert", "wir": "operationalisieren", "ihr": "operationalisiert", "sie_Sie": "operationalisieren"},
    "past_tenses": {"präteritum": "operationalisierte", "partizip_ii": "operationalisiert"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat operationalisiert"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "operationalisieren + Akkusativ", "prepositions": [], "explanation": "Make a concept measurable or put a plan into practice.", "examples": ["Das Konzept wird operationalisiert.", "Wie operationalisieren wir das?", "Die Strategie muss operationalisiert werden."]}]
  },
  {
    "base": "rezipieren",
    "level": "C1",
    "translations": ["to receive", "to absorb", "to take in", "to perceive critically"],
    "tip": "Academic. Describes how texts, art, or ideas are received and interpreted by an audience.",
    "present": {"ich": "rezipiere", "du": "rezipierst", "er_sie_es": "rezipiert", "wir": "rezipieren", "ihr": "rezipiert", "sie_Sie": "rezipieren"},
    "past_tenses": {"präteritum": "rezipierte", "partizip_ii": "rezipiert"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat rezipiert"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "rezipieren + Akkusativ", "prepositions": [], "explanation": "Receive or critically engage with a work/idea.", "examples": ["Wie wurde das Werk rezipiert?", "Der Text wird positiv rezipiert.", "Philosophische Werke rezipieren."]}]
  },
  {
    "base": "konstatieren",
    "level": "C1",
    "translations": ["to state", "to establish", "to note", "to observe"],
    "tip": "Formal. Used to state something as an established fact. More objective and distanced than 'sagen'.",
    "present": {"ich": "konstatiere", "du": "konstatierst", "er_sie_es": "konstatiert", "wir": "konstatieren", "ihr": "konstatiert", "sie_Sie": "konstatieren"},
    "past_tenses": {"präteritum": "konstatierte", "partizip_ii": "konstatiert"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat konstatiert"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "konstatieren + Akkusativ / dass-Satz", "prepositions": [], "explanation": "State or establish a fact.", "examples": ["Er konstatierte, dass die Lage ernst ist.", "Die Studie konstatiert einen Rückgang.", "Wir konstatieren Verbesserungen."]}]
  },
  {
    "base": "inferieren",
    "level": "C1",
    "translations": ["to infer", "to draw a conclusion"],
    "tip": "Logical/academic. Drawing a logical inference from given information.",
    "present": {"ich": "inferiere", "du": "inferierst", "er_sie_es": "inferiert", "wir": "inferieren", "ihr": "inferiert", "sie_Sie": "inferieren"},
    "past_tenses": {"präteritum": "inferierte", "partizip_ii": "inferiert"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat inferiert"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "inferieren + Akkusativ / dass-Satz", "prepositions": [], "explanation": "Infer or deduce something from evidence.", "examples": ["Daraus kann man inferieren, dass...", "Er inferiert falsche Schlüsse.", "Was lässt sich daraus inferieren?"]}]
  },
  {
    "base": "kontextualisieren",
    "level": "C1",
    "translations": ["to contextualize", "to put into context"],
    "tip": "Academic/journalistic. Placing something in its broader context to aid understanding.",
    "present": {"ich": "kontextualisiere", "du": "kontextualisierst", "er_sie_es": "kontextualisiert", "wir": "kontextualisieren", "ihr": "kontextualisiert", "sie_Sie": "kontextualisieren"},
    "past_tenses": {"präteritum": "kontextualisierte", "partizip_ii": "kontextualisiert"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat kontextualisiert"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "kontextualisieren + Akkusativ", "prepositions": [], "explanation": "Put something into context.", "examples": ["Man muss das historisch kontextualisieren.", "Die Aussage wurde kontextualisiert.", "Bitte kontextualisieren Sie das."]}]
  },
  {
    "base": "kumulieren",
    "level": "C1",
    "translations": ["to accumulate", "to add up", "to cumulate"],
    "tip": "Used in finance, statistics, and science. Kumulierte Daten = cumulative data.",
    "present": {"ich": "kumuliere", "du": "kumulierst", "er_sie_es": "kumuliert", "wir": "kumulieren", "ihr": "kumuliert", "sie_Sie": "kumulieren"},
    "past_tenses": {"präteritum": "kumulierte", "partizip_ii": "kumuliert"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat kumuliert"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "kumulieren + Akkusativ / sich kumulieren", "prepositions": [], "explanation": "Accumulate or add up over time.", "examples": ["Die Fehler kumulieren sich.", "Kumulierte Risiken.", "Schulden kumulieren sich über Jahre."]}]
  },
  {
    "base": "destillieren",
    "level": "C1",
    "translations": ["to distill", "to extract the essence of", "to boil down to"],
    "tip": "Both literal (chemistry) and figurative (extract key ideas from complex material).",
    "present": {"ich": "destilliere", "du": "destillierst", "er_sie_es": "destilliert", "wir": "destillieren", "ihr": "destilliert", "sie_Sie": "destillieren"},
    "past_tenses": {"präteritum": "destillierte", "partizip_ii": "destilliert"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat destilliert"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "destillieren + Akkusativ", "prepositions": [], "explanation": "Distill (literal or figurative – extract essence).", "examples": ["Den Kern destillieren.", "Die Essenz wurde destilliert.", "Aus dem Chaos wurde ein Plan destilliert."]}]
  },
  {
    "base": "manifestieren",
    "level": "C1",
    "reflexive": true,
    "translations": ["to manifest", "to express", "to reveal itself"],
    "tip": "sich manifestieren in + Dativ = to manifest itself in something. Both active and reflexive uses.",
    "present": {"ich": "manifestiere", "du": "manifestierst", "er_sie_es": "manifestiert", "wir": "manifestieren", "ihr": "manifestiert", "sie_Sie": "manifestieren"},
    "past_tenses": {"präteritum": "manifestierte", "partizip_ii": "manifestiert"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat manifestiert"}],
    "dual_auxiliary": false,
    "patterns": [
      {"label": "sich manifestieren in + Dativ", "prepositions": ["in"], "explanation": "Manifest itself in something.", "examples": ["Das Problem manifestiert sich in sinkenden Zahlen.", "Die Krise manifestierte sich in Armut.", "Wie manifestiert sich das?"]},
      {"label": "manifestieren + Akkusativ", "prepositions": [], "explanation": "Express or realize something.", "examples": ["Sie manifestierten ihren Widerstand.", "Das Kunstwerk manifestiert Stärke."]}
    ]
  },
  {
    "base": "differenzieren",
    "level": "C1",
    "reflexive": false,
    "translations": ["to differentiate", "to distinguish", "to nuance"],
    "tip": "zwischen etw. differenzieren = to differentiate between. sehr academic / precise communication.",
    "present": {"ich": "differenziere", "du": "differenzierst", "er_sie_es": "differenziert", "wir": "differenzieren", "ihr": "differenziert", "sie_Sie": "differenzieren"},
    "past_tenses": {"präteritum": "differenzierte", "partizip_ii": "differenziert"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat differenziert"}],
    "dual_auxiliary": false,
    "patterns": [
      {"label": "differenzieren zwischen + Dativ", "prepositions": ["zwischen"], "explanation": "Distinguish between things.", "examples": ["Man muss zwischen den Fällen differenzieren.", "Bitte differenzieren Sie."]},
      {"label": "differenzieren + Akkusativ", "prepositions": [], "explanation": "Make more nuanced.", "examples": ["Das Bild muss differenziert werden.", "Eine differenzierte Sichtweise."]}
    ]
  },
  {
    "base": "überdenken",
    "level": "C1",
    "translations": ["to reconsider", "to rethink", "to think over"],
    "tip": "Strong verb. Etw. überdenken = to reconsider. Often used for reconsidering a position or plan.",
    "present": {"ich": "überdenke", "du": "überdenkst", "er_sie_es": "überdenkt", "wir": "überdenken", "ihr": "überdenkt", "sie_Sie": "überdenken"},
    "past_tenses": {"präteritum": "überdachte", "partizip_ii": "überdacht"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat überdacht"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "überdenken + Akkusativ", "prepositions": [], "explanation": "Rethink or reconsider something.", "examples": ["Das muss ich überdenken.", "Wir sollten unsere Strategie überdenken.", "Er hat seinen Entschluss überdacht."]}]
  },
  {
    "base": "präzisieren",
    "level": "C1",
    "translations": ["to specify", "to refine", "to clarify with precision"],
    "tip": "Academic/formal. More precise than 'genau machen'. Used to sharpen or specify a statement.",
    "present": {"ich": "präzisiere", "du": "präzisierst", "er_sie_es": "präzisiert", "wir": "präzisieren", "ihr": "präzisiert", "sie_Sie": "präzisieren"},
    "past_tenses": {"präteritum": "präzisierte", "partizip_ii": "präzisiert"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat präzisiert"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "präzisieren + Akkusativ", "prepositions": [], "explanation": "Specify or refine a statement.", "examples": ["Können Sie das präzisieren?", "Die Frage wurde präzisiert.", "Er präzisierte seine Aussage."]}]
  }
];

window.verbsC1 = verbsC1;
