// verbs-db-b2.js
const verbsB2 = [
  {"base": "behaupten", "level": "B2", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to claim", "to assert", "to maintain"], "conjugation": {"present_3sg": "behauptet", "past_participle": "behauptet"}, "examples": ["Er behauptet, unschuldig zu sein.", "Sie behauptet, alles gewusst zu haben.", "Das lässt sich nicht behaupten.", "Man kann nicht einfach behaupten, dass das stimmt."], "tip": "Requires 'zu' + infinitive or a subordinate clause."},
  {"base": "begründen", "level": "B2", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to justify", "to give reasons for", "to found"], "conjugation": {"present_3sg": "begründet", "past_participle": "begründet"}, "examples": ["Er begründete seine Entscheidung ausführlich.", "Wie begründen Sie das?", "Die Kritik ist gut begründet.", "Das Unternehmen wurde 1990 begründet."], "tip": "Can also mean 'to establish/found'."},
  {"base": "überzeugen", "level": "B2", "auxiliary": "haben", "separable": false, "reflexive": true, "translations": ["to convince", "to persuade"], "conjugation": {"present_3sg": "überzeugt", "past_participle": "überzeugt"}, "examples": ["Er überzeugte die Gruppe von seiner Idee.", "Ich konnte ihn nicht überzeugen.", "Das Argument überzeugt mich nicht.", "Sie ist von ihrer Meinung überzeugt."], "tip": "Reflexive: sich überzeugen = to satisfy oneself, check."},
  {"base": "vermeiden", "level": "B2", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to avoid", "to prevent"], "conjugation": {"present_3sg": "vermeidet", "past_participle": "vermieden"}, "examples": ["Man sollte Missverständnisse vermeiden.", "Sie vermied es, das Thema anzusprechen.", "Konflikte lassen sich nicht immer vermeiden.", "Ich versuche, Fehler zu vermeiden."], "tip": "Takes 'zu' + infinitive."},
  {"base": "vorschlagen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to suggest", "to propose", "to recommend"], "conjugation": {"present_3sg": "schlägt vor", "past_participle": "vorgeschlagen"}, "examples": ["Er schlug einen Kompromiss vor.", "Ich schlage vor, dass wir pausieren.", "Was würdest du vorschlagen?", "Sie schlug eine neue Strategie vor."], "tip": "Separable: schlägt vor. Takes Dativ of person + Akkusativ of thing."},
  {"base": "ablehnen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to reject", "to refuse", "to decline"], "conjugation": {"present_3sg": "lehnt ab", "past_participle": "abgelehnt"}, "examples": ["Der Antrag wurde abgelehnt.", "Er lehnte das Angebot ab.", "Sie lehnte es ab, das zu kommentieren.", "Den Vorschlag muss ich ablehnen."], "tip": "Separable: lehnt ab."},
  {"base": "genehmigen", "level": "B2", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to approve", "to authorize", "to permit"], "conjugation": {"present_3sg": "genehmigt", "past_participle": "genehmigt"}, "examples": ["Der Antrag wurde genehmigt.", "Das Projekt wurde von der Behörde genehmigt.", "Können Sie das genehmigen?", "Die Baugenehmigung wurde erteilt."], "tip": "Official/formal approval."},
  {"base": "ausdrücken", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": true, "translations": ["to express", "to articulate"], "conjugation": {"present_3sg": "drückt aus", "past_participle": "ausgedrückt"}, "examples": ["Er drückte seine Meinung klar aus.", "Wie kann ich das ausdrücken?", "Sie drückte ihre Dankbarkeit aus.", "Manchmal ist es schwer, Gefühle auszudrücken."], "tip": "Separable: drückt aus. Reflexive possible: sich ausdrücken."},
  {"base": "zunehmen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to increase", "to grow", "to gain weight"], "conjugation": {"present_3sg": "nimmt zu", "past_participle": "zugenommen"}, "examples": ["Die Nachfrage nimmt zu.", "Er hat in letzter Zeit zugenommen.", "Die Probleme nehmen zu.", "Der Verkehr nimmt täglich zu."], "tip": "Separable: nimmt zu. Context determines meaning."},
  {"base": "abnehmen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to decrease", "to lose weight", "to take off"], "conjugation": {"present_3sg": "nimmt ab", "past_participle": "abgenommen"}, "examples": ["Die Zahl der Beschwerden nimmt ab.", "Sie hat fünf Kilo abgenommen.", "Die Temperatur nimmt ab.", "Niemand nimmt das Telefon ab."], "tip": "Separable: nimmt ab. Multiple meanings by context."},
  {"base": "herausfinden", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to find out", "to discover", "to figure out"], "conjugation": {"present_3sg": "findet heraus", "past_participle": "herausgefunden"}, "examples": ["Ich habe herausgefunden, warum das passiert.", "Kannst du herausfinden, wer das war?", "Es wurde herausgefunden, dass sie recht hatte.", "Wie findest du das heraus?"], "tip": "Separable: findet heraus."},
  {"base": "berücksichtigen", "level": "B2", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to take into account", "to consider", "to factor in"], "conjugation": {"present_3sg": "berücksichtigt", "past_participle": "berücksichtigt"}, "examples": ["Bitte berücksichtigen Sie alle Faktoren.", "Dieser Aspekt wurde nicht berücksichtigt.", "Wir müssen die Kosten berücksichtigen.", "Die Bedürfnisse der Mitarbeiter wurden berücksichtigt."], "tip": "Often used in formal/professional contexts."},
  {"base": "anpassen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": true, "translations": ["to adapt", "to adjust", "to tailor"], "conjugation": {"present_3sg": "passt an", "past_participle": "angepasst"}, "examples": ["Er hat seinen Stil angepasst.", "Du musst dich an die neue Situation anpassen.", "Die Pläne wurden angepasst.", "Das Programm lässt sich individuell anpassen."], "tip": "Separable: passt an. Reflexive: sich anpassen."},
  {"base": "auffordern", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to call on", "to ask", "to invite", "to urge"], "conjugation": {"present_3sg": "fordert auf", "past_participle": "aufgefordert"}, "examples": ["Er wurde aufgefordert, das Gebäude zu verlassen.", "Ich fordere Sie auf, Stellung zu nehmen.", "Die Polizei forderte ihn auf anzuhalten.", "Sie wurde aufgefordert, eine Erklärung abzugeben."], "tip": "Separable: fordert auf. Formal request or demand."},
  {"base": "widersprechen", "level": "B2", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to contradict", "to oppose", "to object to"], "conjugation": {"present_3sg": "widerspricht", "past_participle": "widersprochen"}, "examples": ["Er widersprach mir direkt.", "Das widerspricht den Tatsachen.", "Ich muss Ihnen widersprechen.", "Das widerspricht seiner früheren Aussage."], "tip": "Takes Dativ: jemandem widersprechen."},
  {"base": "auswirken", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": true, "translations": ["to affect", "to have an effect on", "to impact"], "conjugation": {"present_3sg": "wirkt aus", "past_participle": "ausgewirkt"}, "examples": ["Das wirkt sich auf die Qualität aus.", "Wie wirkt sich das aus?", "Die Entscheidung hat sich negativ ausgewirkt.", "Stress wirkt sich auf die Gesundheit aus."], "tip": "Always reflexive: sich auswirken auf + Akkusativ."},
  {"base": "einschätzen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to assess", "to evaluate", "to judge", "to estimate"], "conjugation": {"present_3sg": "schätzt ein", "past_participle": "eingeschätzt"}, "examples": ["Ich schätze die Lage falsch ein.", "Wie schätzen Sie das ein?", "Das Risiko wurde unterschätzt.", "Er ist schwer einzuschätzen."], "tip": "Separable: schätzt ein."},
  {"base": "voraussetzen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to presuppose", "to require", "to assume"], "conjugation": {"present_3sg": "setzt voraus", "past_participle": "vorausgesetzt"}, "examples": ["Das setzt bestimmte Kenntnisse voraus.", "Gute Deutschkenntnisse werden vorausgesetzt.", "Ich setze voraus, dass du das weißt.", "Das setzt gegenseitiges Vertrauen voraus."], "tip": "Separable: setzt voraus."},
  {"base": "nachweisen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to prove", "to demonstrate", "to verify"], "conjugation": {"present_3sg": "weist nach", "past_participle": "nachgewiesen"}, "examples": ["Er konnte seine Unschuld nachweisen.", "Das wurde wissenschaftlich nachgewiesen.", "Schuld muss nachgewiesen werden.", "Können Sie das nachweisen?"], "tip": "Separable: weist nach."},
  {"base": "umsetzen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to implement", "to put into practice", "to convert"], "conjugation": {"present_3sg": "setzt um", "past_participle": "umgesetzt"}, "examples": ["Die Pläne wurden umgesetzt.", "Wie setzt man das um?", "Die Strategie wurde erfolgreich umgesetzt.", "Ideen in die Tat umsetzen."], "tip": "Separable: setzt um."},
  {"base": "beitragen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to contribute", "to help bring about"], "conjugation": {"present_3sg": "trägt bei", "past_participle": "beigetragen"}, "examples": ["Er trägt viel zum Erfolg bei.", "Was kann ich beitragen?", "Jeder kann zur Lösung beitragen.", "Das trägt zur Qualität bei."], "tip": "Separable: trägt bei. Takes zu + Dativ."},
  {"base": "vereinbaren", "level": "B2", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to agree on", "to arrange", "to settle"], "conjugation": {"present_3sg": "vereinbart", "past_participle": "vereinbart"}, "examples": ["Wir haben einen Termin vereinbart.", "Das wurde so vereinbart.", "Bitte vereinbaren Sie einen Termin.", "Die Bedingungen wurden vereinbart."], "tip": "Common in professional and planning contexts."},
  {"base": "gewährleisten", "level": "B2", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to ensure", "to guarantee", "to safeguard"], "conjugation": {"present_3sg": "gewährleistet", "past_participle": "gewährleistet"}, "examples": ["Die Sicherheit muss gewährleistet werden.", "Das kann ich nicht gewährleisten.", "Qualität wird gewährleistet.", "Der Vertrag gewährleistet bestimmte Rechte."], "tip": "Formal; often used in legal/official language."},
  {"base": "beeinflussen", "level": "B2", "auxiliary": "haben", "separable": false, "reflexive": false, "translations": ["to influence", "to affect"], "conjugation": {"present_3sg": "beeinflusst", "past_participle": "beeinflusst"}, "examples": ["Das Wetter beeinflusst meine Stimmung.", "Werbung beeinflusst das Kaufverhalten.", "Wer hat ihn beeinflusst?", "Die Entscheidung wird von vielen Faktoren beeinflusst."], "tip": "Common in analytical and descriptive contexts."},
  {"base": "zurückführen", "level": "B2", "auxiliary": "haben", "separable": true, "reflexive": false, "translations": ["to attribute to", "to trace back to"], "conjugation": {"present_3sg": "führt zurück", "past_participle": "zurückgeführt"}, "examples": ["Das lässt sich auf Stress zurückführen.", "Der Fehler wird auf einen Irrtum zurückgeführt.", "Worauf führen Sie das zurück?", "Die Ursache wurde auf einen Mangel zurückgeführt."], "tip": "Separable: führt zurück. Always with 'auf + Akkusativ'."},
,
  {
    "base": "durchsetzen",
    "level": "B2",
    "conjugation": {
      "present": {
        "ich": "setze durch",
        "du": "setzt durch",
        "er": "setzt durch"
      },
      "perfect": "hat durchgesetzt",
      "preterite": "setzte durch"
    },
    "auxiliary": "haben",
    "is_separable": true,
    "translations": [
      "to enforce",
      "to assert",
      "to prevail"
    ],
    "examples": [
      "Er konnte seine Meinung durchsetzen.",
      "Das Gesetz muss durchgesetzt werden.",
      "Sie hat sich in der Diskussion durchgesetzt."
    ],
    "tip": "sich durchsetzen (reflexive) = to prevail / get one's way. Very common in professional and political contexts."
  },
  {
    "base": "gefaehrden",
    "level": "B2",
    "conjugation": {
      "present": {
        "ich": "gefaehrde",
        "du": "gefaehrdest",
        "er": "gefaehrdet"
      },
      "perfect": "hat gefaehrdet",
      "preterite": "gefaehrdete"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to endanger",
      "to threaten",
      "to jeopardise"
    ],
    "examples": [
      "Das gefaehrdet die oeffentliche Sicherheit.",
      "Rauchen gefaehrdet Ihre Gesundheit.",
      "Der Sturm gefaehrdet die Ernte."
    ],
    "tip": "Derived from 'Gefahr' (danger). Common in news media, health, and environment discussions.",
    "base_display": "gefährden"
  },
  {
    "base": "entsprechen",
    "level": "B2",
    "conjugation": {
      "present": {
        "ich": "entspreche",
        "du": "entsprichst",
        "er": "entspricht"
      },
      "perfect": "hat entsprochen",
      "preterite": "entsprach"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to correspond to",
      "to comply with",
      "to meet requirements"
    ],
    "examples": [
      "Das entspricht meinen Erwartungen.",
      "Das Produkt entspricht nicht dem Standard.",
      "Der Bericht entspricht den Fakten."
    ],
    "tip": "Takes DATIVE: etwas (dat) entsprechen. Key phrase: den Anforderungen entsprechen = meet requirements."
  },
  {
    "base": "verleihen",
    "level": "B2",
    "conjugation": {
      "present": {
        "ich": "verleihe",
        "du": "verleihst",
        "er": "verleiht"
      },
      "perfect": "hat verliehen",
      "preterite": "verlieh"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to lend",
      "to award",
      "to confer"
    ],
    "examples": [
      "Die Stadt verleiht ihm den Preis.",
      "Das verleiht dem Wort eine andere Bedeutung.",
      "Man hat ihr die Ehrenbuergerschaft verliehen."
    ],
    "tip": "Different from 'leihen' — verleihen is more formal and also means to award or confer an honour."
  },
  {
    "base": "scheitern",
    "level": "B2",
    "conjugation": {
      "present": {
        "ich": "scheitere",
        "du": "scheiterst",
        "er": "scheitert"
      },
      "perfect": "ist gescheitert",
      "preterite": "scheiterte"
    },
    "auxiliary": "sein",
    "is_separable": false,
    "translations": [
      "to fail",
      "to founder"
    ],
    "examples": [
      "Das Projekt ist gescheitert.",
      "Viele Ehen scheitern an Kommunikationsproblemen.",
      "Der Plan scheiterte an fehlendem Geld."
    ],
    "tip": "Uses SEIN as auxiliary. Often followed by 'an + dative' to give the reason for failure."
  },
  {
    "base": "einbeziehen",
    "level": "B2",
    "conjugation": {
      "present": {
        "ich": "beziehe ein",
        "du": "beziehst ein",
        "er": "bezieht ein"
      },
      "perfect": "hat einbezogen",
      "preterite": "bezog ein"
    },
    "auxiliary": "haben",
    "is_separable": true,
    "translations": [
      "to include",
      "to involve",
      "to factor in"
    ],
    "examples": [
      "Wir muessen alle Faktoren einbeziehen.",
      "Die Bevoelkerung sollte einbezogen werden.",
      "Das wurde nicht einbezogen."
    ],
    "tip": "Separable: bezieht ein. More formal than 'einschliessen'. Key in professional and political language."
  },
  {
    "base": "staerken",
    "level": "B2",
    "conjugation": {
      "present": {
        "ich": "staerke",
        "du": "staerkst",
        "er": "staerkt"
      },
      "perfect": "hat gestaerkt",
      "preterite": "staerkte"
    },
    "auxiliary": "haben",
    "is_separable": false,
    "translations": [
      "to strengthen",
      "to reinforce"
    ],
    "examples": [
      "Das staerkt das Vertrauen.",
      "Sport staerkt den Koerper.",
      "Diese Massnahme soll die Wirtschaft staerken."
    ],
    "tip": "Derived from 'stark' (strong). Common in political, economic, and motivational contexts.",
    "base_display": "stärken"
  },
{
    "base": "auseinandersetzen",
    "level": "B2",
    "separable": true,
    "separable_prefix": "auseinander",
    "reflexive": true,
    "translations": ["to deal with", "to engage with", "to confront"],
    "tip": "sich auseinandersetzen mit + Dativ = to engage with/confront a topic or person.",
    "present": {"ich": "setze auseinander", "du": "setzt auseinander", "er_sie_es": "setzt auseinander", "wir": "setzen auseinander", "ihr": "setzt auseinander", "sie_Sie": "setzen auseinander"},
    "past_tenses": {"präteritum": "setzte auseinander", "partizip_ii": "auseinandergesetzt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat sich auseinandergesetzt"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "sich auseinandersetzen mit + Dativ", "prepositions": ["mit"], "explanation": "Deal with or engage seriously with a topic.", "examples": ["Ich setze mich mit dem Problem auseinander.", "Er hat sich damit auseinandergesetzt.", "Wir müssen uns mit dem Thema auseinandersetzen."]}]
  },
  {
    "base": "einschränken",
    "level": "B2",
    "separable": true,
    "separable_prefix": "ein",
    "translations": ["to restrict", "to limit", "to reduce"],
    "tip": "sich einschränken = to cut back (on spending, habits). Used in economic and health contexts.",
    "reflexive": true,
    "present": {"ich": "schränke ein", "du": "schränkst ein", "er_sie_es": "schränkt ein", "wir": "schränken ein", "ihr": "schränkt ein", "sie_Sie": "schränken ein"},
    "past_tenses": {"präteritum": "schränkte ein", "partizip_ii": "eingeschränkt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat eingeschränkt"}],
    "dual_auxiliary": false,
    "patterns": [
      {"label": "einschränken + Akkusativ", "prepositions": [], "explanation": "Limit/restrict something.", "examples": ["Das Gesetz schränkt die Freiheit ein.", "Die Maßnahmen schränken den Handel ein."]},
      {"label": "sich einschränken", "prepositions": [], "explanation": "Limit oneself / cut back.", "examples": ["Ich muss mich einschränken.", "Sie hat sich sehr eingeschränkt."]}
    ]
  },
  {
    "base": "überwinden",
    "level": "B2",
    "translations": ["to overcome", "to conquer"],
    "tip": "Sich überwinden = to force oneself (to do something difficult). Strong irregular verb.",
    "reflexive": true,
    "present": {"ich": "überwinde", "du": "überwindest", "er_sie_es": "überwindet", "wir": "überwinden", "ihr": "überwindet", "sie_Sie": "überwinden"},
    "past_tenses": {"präteritum": "überwand", "partizip_ii": "überwunden"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat überwunden"}],
    "dual_auxiliary": false,
    "patterns": [
      {"label": "überwinden + Akkusativ", "prepositions": [], "explanation": "Overcome an obstacle/feeling.", "examples": ["Er überwindet seine Angst.", "Wir müssen diese Krise überwinden."]},
      {"label": "sich überwinden + zu-Inf.", "prepositions": [], "explanation": "Force oneself to do something.", "examples": ["Ich habe mich überwunden, anzurufen.", "Sie überwand sich und entschuldigte sich."]}
    ]
  },
  {
    "base": "berücksichtigen",
    "level": "B2",
    "translations": ["to take into account", "to consider", "to bear in mind"],
    "tip": "Formal and widely used in written German. Often appears in official/bureaucratic contexts.",
    "present": {"ich": "berücksichtige", "du": "berücksichtigst", "er_sie_es": "berücksichtigt", "wir": "berücksichtigen", "ihr": "berücksichtigt", "sie_Sie": "berücksichtigen"},
    "past_tenses": {"präteritum": "berücksichtigte", "partizip_ii": "berücksichtigt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat berücksichtigt"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "berücksichtigen + Akkusativ", "prepositions": [], "explanation": "Take something into account.", "examples": ["Bitte berücksichtigen Sie meine Anfrage.", "Das wurde nicht berücksichtigt.", "Alle Aspekte wurden berücksichtigt."]}]
  },
  {
    "base": "widersprechen",
    "level": "B2",
    "translations": ["to contradict", "to object", "to oppose"],
    "tip": "Takes Dative! widersprechen + Dativ. Strong verb.",
    "common_mistakes": ["Takes Dative: 'Ich widerspreche ihm' not 'Ich widerspreche ihn'."],
    "present": {"ich": "widerspreche", "du": "widersprichst", "er_sie_es": "widerspricht", "wir": "widersprechen", "ihr": "widersprecht", "sie_Sie": "widersprechen"},
    "past_tenses": {"präteritum": "widersprach", "partizip_ii": "widersprochen"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat widersprochen"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "widersprechen + Dativ", "prepositions": [], "explanation": "Contradict or oppose someone/something (Dative).", "examples": ["Ich widerspreche dir.", "Das widerspricht dem Gesetz.", "Sie hat ihm klar widersprochen."]}]
  },
  {
    "base": "aufrechterhalten",
    "level": "B2",
    "separable": true,
    "separable_prefix": "aufrecht",
    "translations": ["to maintain", "to uphold", "to preserve"],
    "tip": "Long compound separable verb. Used for maintaining contact, standards, order.",
    "present": {"ich": "erhalte aufrecht", "du": "erhältst aufrecht", "er_sie_es": "erhält aufrecht", "wir": "erhalten aufrecht", "ihr": "erhaltet aufrecht", "sie_Sie": "erhalten aufrecht"},
    "past_tenses": {"präteritum": "erhielt aufrecht", "partizip_ii": "aufrechterhalten"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat aufrechterhalten"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "aufrechterhalten + Akkusativ", "prepositions": [], "explanation": "Maintain or uphold something.", "examples": ["Den Kontakt aufrechterhalten.", "Die Ordnung wurde aufrechterhalten.", "Er erhielt die Hoffnung aufrecht."]}]
  },
{"base":"anpassen","level":"B2","separable":true,"separable_prefix":"an","reflexive":true,"translations":["to adapt","to adjust","to tailor"],"tip":"sich anpassen an + Akkusativ = to adapt to. etwas anpassen = to tailor/adjust something. Common in change management.","present":{"ich":"passe an","du":"passt an","er_sie_es":"passt an","wir":"passen an","ihr":"passt an","sie_Sie":"passen an"},"past_tenses":{"präteritum":"passte an","partizip_ii":"angepasst"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat angepasst"}],"dual_auxiliary":false,"patterns":[{"label":"anpassen + Akkusativ / sich anpassen an + Akk.","prepositions":["an"],"explanation":"Adjust something or adapt to something.","examples":["Er passt sich an die neue Umgebung an.","Den Plan anpassen.","Die Strategie wurde angepasst."]}]},
  {"base":"aufzeigen","level":"B2","separable":true,"separable_prefix":"auf","translations":["to demonstrate","to show","to highlight","to reveal"],"tip":"Separable. etwas aufzeigen = to demonstrate or reveal something. Common in academic and formal discourse.","present":{"ich":"zeige auf","du":"zeigst auf","er_sie_es":"zeigt auf","wir":"zeigen auf","ihr":"zeigt auf","sie_Sie":"zeigen auf"},"past_tenses":{"präteritum":"zeigte auf","partizip_ii":"aufgezeigt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat aufgezeigt"}],"dual_auxiliary":false,"patterns":[{"label":"aufzeigen + Akkusativ","prepositions":[],"explanation":"Show or demonstrate something clearly.","examples":["Die Studie zeigt Schwächen auf.","Er hat Lösungen aufgezeigt.","Probleme wurden aufgezeigt."]}]},
  {"base":"ausschließen","level":"B2","separable":true,"separable_prefix":"aus","translations":["to exclude","to rule out"],"tip":"Separable strong verb. jemanden ausschließen = to exclude someone. das ausschließen = to rule out. Opposite: einschließen.","present":{"ich":"schließe aus","du":"schließt aus","er_sie_es":"schließt aus","wir":"schließen aus","ihr":"schließt aus","sie_Sie":"schließen aus"},"past_tenses":{"präteritum":"schloss aus","partizip_ii":"ausgeschlossen"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat ausgeschlossen"}],"dual_auxiliary":false,"patterns":[{"label":"ausschließen + Akkusativ","prepositions":[],"explanation":"Exclude or rule out someone or something.","examples":["Das kann man nicht ausschließen.","Er wurde aus dem Team ausgeschlossen.","Alle anderen Möglichkeiten ausschließen."]}]},
  {"base":"befürworten","level":"B2","translations":["to support","to advocate","to endorse"],"tip":"etwas befürworten = to be in favour of something. Opposite of ablehnen. Common in political discourse.","present":{"ich":"befürworte","du":"befürwortest","er_sie_es":"befürwortet","wir":"befürworten","ihr":"befürwortet","sie_Sie":"befürworten"},"past_tenses":{"präteritum":"befürwortete","partizip_ii":"befürwortet"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat befürwortet"}],"dual_auxiliary":false,"patterns":[{"label":"befürworten + Akkusativ","prepositions":[],"explanation":"Support or advocate for something.","examples":["Er befürwortet die Reform.","Die Maßnahme wurde befürwortet.","Ich befürworte das."]}]},
  {"base":"beitragen","level":"B2","separable":true,"separable_prefix":"bei","translations":["to contribute"],"tip":"Separable strong verb. zu etwas beitragen = to contribute to something. ein Beitrag leisten = to make a contribution.","present":{"ich":"trage bei","du":"trägst bei","er_sie_es":"trägt bei","wir":"tragen bei","ihr":"tragt bei","sie_Sie":"tragen bei"},"past_tenses":{"präteritum":"trug bei","partizip_ii":"beigetragen"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat beigetragen"}],"dual_auxiliary":false,"patterns":[{"label":"beitragen zu + Dativ","prepositions":["zu"],"explanation":"Contribute to something.","examples":["Das trägt zur Lösung bei.","Er hat viel beigetragen.","Was kann ich beitragen?"]}]},
  {"base":"bewältigen","level":"B2","translations":["to cope with","to master","to overcome"],"tip":"eine Aufgabe bewältigen = to master a task. eine Krise bewältigen = to cope with a crisis. Common in professional and psychological language.","present":{"ich":"bewältige","du":"bewältigst","er_sie_es":"bewältigt","wir":"bewältigen","ihr":"bewältigt","sie_Sie":"bewältigen"},"past_tenses":{"präteritum":"bewältigte","partizip_ii":"bewältigt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat bewältigt"}],"dual_auxiliary":false,"patterns":[{"label":"bewältigen + Akkusativ","prepositions":[],"explanation":"Cope with or overcome a challenge.","examples":["Die Aufgabe bewältigen.","Er hat die Krise gut bewältigt.","Das lässt sich bewältigen."]}]},
  {"base":"charakterisieren","level":"B2","translations":["to characterise","to describe","to define"],"tip":"etwas/jemanden charakterisieren = to characterise. sich charakterisieren durch = to be characterised by. Academic register.","present":{"ich":"charakterisiere","du":"charakterisierst","er_sie_es":"charakterisiert","wir":"charakterisieren","ihr":"charakterisiert","sie_Sie":"charakterisieren"},"past_tenses":{"präteritum":"charakterisierte","partizip_ii":"charakterisiert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat charakterisiert"}],"dual_auxiliary":false,"patterns":[{"label":"charakterisieren + Akkusativ (als / durch)","prepositions":["als","durch"],"explanation":"Characterise or describe something as something.","examples":["Er charakterisiert die Situation als kritisch.","Was charakterisiert diese Epoche?","Die Kultur wird durch Vielfalt charakterisiert."]}]},
  {"base":"differenzieren","level":"B2","translations":["to differentiate","to make distinctions","to nuance"],"tip":"zwischen A und B differenzieren = to differentiate between A and B. More nuanced than unterscheiden.","present":{"ich":"differenziere","du":"differenzierst","er_sie_es":"differenziert","wir":"differenzieren","ihr":"differenziert","sie_Sie":"differenzieren"},"past_tenses":{"präteritum":"differenzierte","partizip_ii":"differenziert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat differenziert"}],"dual_auxiliary":false,"patterns":[{"label":"differenzieren (zwischen + Dativ)","prepositions":["zwischen"],"explanation":"Make distinctions or nuance an argument.","examples":["Man muss differenzieren.","Zwischen den Fällen differenzieren.","Das wurde nicht genug differenziert."]}]},
  {"base":"einräumen","level":"B2","separable":true,"separable_prefix":"ein","translations":["to admit","to grant","to concede","to put away"],"tip":"Separable. etwas einräumen = admit/concede (a point). Also: etwas einräumen = put something away (in cupboard).","present":{"ich":"räume ein","du":"räumst ein","er_sie_es":"räumt ein","wir":"räumen ein","ihr":"räumt ein","sie_Sie":"räumen ein"},"past_tenses":{"präteritum":"räumte ein","partizip_ii":"eingeräumt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat eingeräumt"}],"dual_auxiliary":false,"patterns":[{"label":"einräumen + Akkusativ / dass","prepositions":[],"explanation":"Admit or concede a point; also put something away.","examples":["Er räumt ein, dass er falsch lag.","Das muss ich einräumen.","Das Recht wurde eingeräumt."]}]},
  {"base":"entsprechen","level":"B2","translations":["to correspond to","to match","to comply with"],"tip":"Takes Dative! etwas entspricht etwas (Dativ) = corresponds to. Die Ergebnisse entsprechen den Erwartungen.","common_mistakes":["Takes Dative: 'Das entspricht meinen Erwartungen' not 'meiner Erwartungen' (wait, Dativ is correct) — don't use Akkusativ here."],"present":{"ich":"entspreche","du":"entsprichst","er_sie_es":"entspricht","wir":"entsprechen","ihr":"entsprecht","sie_Sie":"entsprechen"},"past_tenses":{"präteritum":"entsprach","partizip_ii":"entsprochen"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat entsprochen"}],"dual_auxiliary":false,"patterns":[{"label":"entsprechen + Dativ","prepositions":[],"explanation":"Correspond to or match something (Dative).","examples":["Das entspricht der Wahrheit.","Die Ergebnisse entsprechen den Erwartungen.","Das entspricht nicht meinen Vorstellungen."]}]},
  {"base":"erfordern","level":"B2","translations":["to require","to demand","to call for"],"tip":"etwas erfordert etwas = something requires something. Formal synonym for brauchen/verlangen in written language.","present":{"ich":"erfordere","du":"erforderst","er_sie_es":"erfordert","wir":"erfordern","ihr":"erfordert","sie_Sie":"erfordern"},"past_tenses":{"präteritum":"erforderte","partizip_ii":"erfordert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat erfordert"}],"dual_auxiliary":false,"patterns":[{"label":"erfordern + Akkusativ","prepositions":[],"explanation":"Require or call for something.","examples":["Das erfordert Geduld.","Die Aufgabe erfordert Konzentration.","Was erfordert das?"]}]},
  {"base":"erzielen","level":"B2","translations":["to achieve","to attain","to reach"],"tip":"ein Ergebnis erzielen = to achieve a result. Einigung erzielen = to reach an agreement. Common in formal/business contexts.","present":{"ich":"erziele","du":"erzielst","er_sie_es":"erzielt","wir":"erzielen","ihr":"erzielt","sie_Sie":"erzielen"},"past_tenses":{"präteritum":"erzielte","partizip_ii":"erzielt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat erzielt"}],"dual_auxiliary":false,"patterns":[{"label":"erzielen + Akkusativ","prepositions":[],"explanation":"Achieve or attain a result.","examples":["Ein gutes Ergebnis erzielen.","Eine Einigung wurde erzielt.","Er erzielte hohe Punktzahlen."]}]},
  {"base":"infrage stellen","level":"B2","separable":false,"translations":["to question","to call into question"],"tip":"Phrase verb. etwas infrage stellen = to call something into question. Also written: in Frage stellen. Common in critical discourse.","present":{"ich":"stelle infrage","du":"stellst infrage","er_sie_es":"stellt infrage","wir":"stellen infrage","ihr":"stellt infrage","sie_Sie":"stellen infrage"},"past_tenses":{"präteritum":"stellte infrage","partizip_ii":"infrage gestellt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat infrage gestellt"}],"dual_auxiliary":false,"patterns":[{"label":"infrage stellen + Akkusativ","prepositions":[],"explanation":"Call something into question or challenge.","examples":["Das stellt alles infrage.","Die Ergebnisse wurden infrage gestellt.","Er stellte die Methode infrage."]}]},
  {"base":"nachvollziehen","level":"B2","separable":true,"separable_prefix":"nach","translations":["to understand","to comprehend","to trace","to follow"],"tip":"Separable strong verb. etwas nachvollziehen = to understand/follow a line of reasoning. Ich kann das nicht nachvollziehen.","present":{"ich":"vollziehe nach","du":"vollziehst nach","er_sie_es":"vollzieht nach","wir":"vollziehen nach","ihr":"vollzieht nach","sie_Sie":"vollziehen nach"},"past_tenses":{"präteritum":"vollzog nach","partizip_ii":"nachvollzogen"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat nachvollzogen"}],"dual_auxiliary":false,"patterns":[{"label":"nachvollziehen + Akkusativ","prepositions":[],"explanation":"Follow or understand an argument/reasoning.","examples":["Ich kann das nachvollziehen.","Der Prozess lässt sich nachvollziehen.","Das ist schwer nachzuvollziehen."]}]},
  {"base":"präzisieren","level":"B2","translations":["to specify","to clarify","to be more precise"],"tip":"etwas präzisieren = to be more specific about something. Common in academic and professional discourse.","present":{"ich":"präzisiere","du":"präzisierst","er_sie_es":"präzisiert","wir":"präzisieren","ihr":"präzisiert","sie_Sie":"präzisieren"},"past_tenses":{"präteritum":"präzisierte","partizip_ii":"präzisiert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat präzisiert"}],"dual_auxiliary":false,"patterns":[{"label":"präzisieren + Akkusativ","prepositions":[],"explanation":"Be more precise or specific about something.","examples":["Können Sie das präzisieren?","Er präzisierte seine Aussage.","Das muss präzisiert werden."]}]},
  {"base":"relativieren","level":"B2","translations":["to relativise","to put in perspective","to qualify"],"tip":"etwas relativieren = to put something in context, to tone down an absolute statement. Common in intellectual discourse.","present":{"ich":"relativiere","du":"relativierst","er_sie_es":"relativiert","wir":"relativieren","ihr":"relativiert","sie_Sie":"relativieren"},"past_tenses":{"präteritum":"relativierte","partizip_ii":"relativiert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat relativiert"}],"dual_auxiliary":false,"patterns":[{"label":"relativieren + Akkusativ","prepositions":[],"explanation":"Put something in perspective or qualify a statement.","examples":["Das muss man relativieren.","Er relativierte seine Aussagen.","Die Bedeutung wurde relativiert."]}]},
  {"base":"zurückführen","level":"B2","separable":true,"separable_prefix":"zurück","translations":["to attribute to","to trace back to","to lead back"],"tip":"Separable. etwas auf etwas zurückführen = to attribute/trace something to something. auf + Akkusativ.","present":{"ich":"führe zurück","du":"führst zurück","er_sie_es":"führt zurück","wir":"führen zurück","ihr":"führt zurück","sie_Sie":"führen zurück"},"past_tenses":{"präteritum":"führte zurück","partizip_ii":"zurückgeführt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat zurückgeführt"}],"dual_auxiliary":false,"patterns":[{"label":"zurückführen + Akkusativ auf + Akkusativ","prepositions":["auf"],"explanation":"Attribute or trace something back to a cause.","examples":["Das führe ich auf Stress zurück.","Der Erfolg wurde auf die Teamarbeit zurückgeführt.","Worauf führst du das zurück?"]}]},
  {"base":"sicherstellen","level":"B2","separable":true,"separable_prefix":"sicher","translations":["to ensure","to make sure","to guarantee"],"tip":"Separable. dass etwas sichergestellt wird = that something is ensured. Common in quality management and planning.","present":{"ich":"stelle sicher","du":"stellst sicher","er_sie_es":"stellt sicher","wir":"stellen sicher","ihr":"stellt sicher","sie_Sie":"stellen sicher"},"past_tenses":{"präteritum":"stellte sicher","partizip_ii":"sichergestellt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat sichergestellt"}],"dual_auxiliary":false,"patterns":[{"label":"sicherstellen + Akkusativ / dass","prepositions":[],"explanation":"Ensure something is done or achieved.","examples":["Bitte stellen Sie das sicher.","Das muss sichergestellt werden.","Er stellt sicher, dass alles klappt."]}]},
  {"base":"überarbeiten","level":"B2","translations":["to revise","to rework","to overhaul"],"tip":"etwas überarbeiten = to revise or rework something. sich überarbeiten = to overwork oneself (reflexive, different meaning!).","reflexive":true,"present":{"ich":"überarbeite","du":"überarbeitest","er_sie_es":"überarbeitet","wir":"überarbeiten","ihr":"überarbeitet","sie_Sie":"überarbeiten"},"past_tenses":{"präteritum":"überarbeitete","partizip_ii":"überarbeitet"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat überarbeitet"}],"dual_auxiliary":false,"patterns":[{"label":"überarbeiten + Akkusativ / sich überarbeiten","prepositions":[],"explanation":"Revise something, or overwork oneself.","examples":["Den Text überarbeiten.","Das Konzept wurde überarbeitet.","Sie hat sich überarbeitet."]}]},
  {"base":"umsetzen","level":"B2","separable":true,"separable_prefix":"um","translations":["to implement","to put into practice","to execute","to convert"],"tip":"Separable. einen Plan umsetzen = to implement a plan. Ideen umsetzen = to put ideas into practice. Very common in business.","present":{"ich":"setze um","du":"setzt um","er_sie_es":"setzt um","wir":"setzen um","ihr":"setzt um","sie_Sie":"setzen um"},"past_tenses":{"präteritum":"setzte um","partizip_ii":"umgesetzt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat umgesetzt"}],"dual_auxiliary":false,"patterns":[{"label":"umsetzen + Akkusativ","prepositions":[],"explanation":"Implement or put something into practice.","examples":["Den Plan umsetzen.","Die Strategie wurde umgesetzt.","Ideen in die Tat umsetzen."]}]},
  {"base":"verantworten","level":"B2","reflexive":true,"translations":["to be responsible for","to answer for","to justify"],"tip":"etwas verantworten = to be accountable for. sich verantworten müssen = to have to answer for. sich nicht verantworten können = to be unjustifiable.","present":{"ich":"verantworte","du":"verantwortest","er_sie_es":"verantwortet","wir":"verantworten","ihr":"verantwortet","sie_Sie":"verantworten"},"past_tenses":{"präteritum":"verantwortete","partizip_ii":"verantwortet"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat verantwortet"}],"dual_auxiliary":false,"patterns":[{"label":"verantworten + Akkusativ / sich verantworten","prepositions":[],"explanation":"Be responsible/accountable for something.","examples":["Das kann ich nicht verantworten.","Er muss sich verantworten.","Wer verantwortet das?"]}]},
  {"base":"verdeutlichen","level":"B2","translations":["to clarify","to illustrate","to make clear"],"tip":"etwas verdeutlichen = to make something clear. More direct than veranschaulichen. Common in academic writing.","present":{"ich":"verdeutliche","du":"verdeutlichst","er_sie_es":"verdeutlicht","wir":"verdeutlichen","ihr":"verdeutlicht","sie_Sie":"verdeutlichen"},"past_tenses":{"präteritum":"verdeutlichte","partizip_ii":"verdeutlicht"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat verdeutlicht"}],"dual_auxiliary":false,"patterns":[{"label":"verdeutlichen + Akkusativ","prepositions":[],"explanation":"Make something clear or illustrate it.","examples":["Ein Beispiel verdeutlicht das.","Ich möchte das verdeutlichen.","Das wurde anhand von Beispielen verdeutlicht."]}]},
  {"base":"voraussetzen","level":"B2","separable":true,"separable_prefix":"voraus","translations":["to presuppose","to assume","to require as a prerequisite"],"tip":"Separable. etwas voraussetzen = to take something for granted or require as a precondition. Common in academic and formal texts.","present":{"ich":"setze voraus","du":"setzt voraus","er_sie_es":"setzt voraus","wir":"setzen voraus","ihr":"setzt voraus","sie_Sie":"setzen voraus"},"past_tenses":{"präteritum":"setzte voraus","partizip_ii":"vorausgesetzt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat vorausgesetzt"}],"dual_auxiliary":false,"patterns":[{"label":"voraussetzen + Akkusativ / dass","prepositions":[],"explanation":"Presuppose or require as a precondition.","examples":["Das setzt Erfahrung voraus.","Es wird vorausgesetzt, dass...","Vorausgesetzt, dass alles klappt."]}]},
  {"base":"in Frage kommen","level":"B2","separable":false,"translations":["to be a possibility","to qualify","to be eligible","to be considered"],"tip":"Phrase verb. für etwas in Frage kommen = to qualify for something. Das kommt nicht in Frage = That's out of the question.","present":{"ich":"komme in Frage","du":"kommst in Frage","er_sie_es":"kommt in Frage","wir":"kommen in Frage","ihr":"kommt in Frage","sie_Sie":"kommen in Frage"},"past_tenses":{"präteritum":"kam in Frage","partizip_ii":"in Frage gekommen"},"auxiliaries":[{"aux":"sein","condition":"always","perfekt":"ist in Frage gekommen"}],"dual_auxiliary":false,"patterns":[{"label":"in Frage kommen (für + Akkusativ)","prepositions":["für"],"explanation":"Be eligible or possible.","examples":["Das kommt nicht in Frage!","Er kommt für die Stelle in Frage.","Welche Optionen kommen in Frage?"]}]},
  {"base":"abstimmen","level":"B2","separable":true,"separable_prefix":"ab","translations":["to vote","to coordinate","to align"],"tip":"Separable. über etwas abstimmen = to vote on something. sich abstimmen mit = to coordinate with.","reflexive":true,"present":{"ich":"stimme ab","du":"stimmst ab","er_sie_es":"stimmt ab","wir":"stimmen ab","ihr":"stimmt ab","sie_Sie":"stimmen ab"},"past_tenses":{"präteritum":"stimmte ab","partizip_ii":"abgestimmt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat abgestimmt"}],"dual_auxiliary":false,"patterns":[{"label":"abstimmen über + Akkusativ / sich abstimmen mit + Dativ","prepositions":["über","mit"],"explanation":"Vote on something, or coordinate with someone.","examples":["Wir stimmen über den Vorschlag ab.","Ich muss mich mit dir abstimmen.","Das wurde demokratisch abgestimmt."]}]},
  {"base":"hervorheben","level":"B2","separable":true,"separable_prefix":"hervor","translations":["to highlight","to emphasise","to stand out"],"tip":"Separable strong verb. etwas hervorheben = to highlight or emphasise. Common in presentations and writing.","present":{"ich":"hebe hervor","du":"hebst hervor","er_sie_es":"hebt hervor","wir":"heben hervor","ihr":"hebt hervor","sie_Sie":"heben hervor"},"past_tenses":{"präteritum":"hob hervor","partizip_ii":"hervorgehoben"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat hervorgehoben"}],"dual_auxiliary":false,"patterns":[{"label":"hervorheben + Akkusativ","prepositions":[],"explanation":"Highlight or emphasise something.","examples":["Er hebt die Vorteile hervor.","Das wurde besonders hervorgehoben.","Ich möchte hervorheben, dass..."]}]},
  {"base":"legitimieren","level":"B2","translations":["to legitimise","to justify","to authorise"],"tip":"etwas legitimieren = to make legitimate. sich legitimieren = to identify oneself (show ID).","reflexive":true,"present":{"ich":"legitimiere","du":"legitimierst","er_sie_es":"legitimiert","wir":"legitimieren","ihr":"legitimiert","sie_Sie":"legitimieren"},"past_tenses":{"präteritum":"legitimierte","partizip_ii":"legitimiert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat legitimiert"}],"dual_auxiliary":false,"patterns":[{"label":"legitimieren + Akkusativ / sich legitimieren","prepositions":[],"explanation":"Legitimise an action or identify oneself.","examples":["Das legitimiert ihr Vorgehen.","Bitte legitimieren Sie sich.","Das wurde politisch legitimiert."]}]},
  {"base":"reflektieren","level":"B2","translations":["to reflect","to think about","to reflect on"],"tip":"über etwas reflektieren = to reflect on something. etwas reflektieren = to reflect/mirror something. Common in academic and therapeutic contexts.","present":{"ich":"reflektiere","du":"reflektierst","er_sie_es":"reflektiert","wir":"reflektieren","ihr":"reflektiert","sie_Sie":"reflektieren"},"past_tenses":{"präteritum":"reflektierte","partizip_ii":"reflektiert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat reflektiert"}],"dual_auxiliary":false,"patterns":[{"label":"reflektieren über + Akkusativ / + Akkusativ","prepositions":["über"],"explanation":"Reflect on something.","examples":["Über das Ergebnis reflektieren.","Er reflektiert das Geschehene.","Ich sollte das reflektieren."]}]},
  {"base":"vermitteln","level":"B2","translations":["to convey","to mediate","to teach","to arrange"],"tip":"Wissen vermitteln = to convey/impart knowledge. zwischen Parteien vermitteln = to mediate. Arbeit vermitteln = to find/arrange work.","present":{"ich":"vermittle","du":"vermittelst","er_sie_es":"vermittelt","wir":"vermitteln","ihr":"vermittelt","sie_Sie":"vermitteln"},"past_tenses":{"präteritum":"vermittelte","partizip_ii":"vermittelt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat vermittelt"}],"dual_auxiliary":false,"patterns":[{"label":"vermitteln + Akkusativ / (zwischen + Dativ)","prepositions":["zwischen"],"explanation":"Convey knowledge, mediate between parties, or arrange.","examples":["Wissen vermitteln.","Er vermittelt zwischen den Parteien.","Eine Stelle wurde vermittelt."]}]},
  {"base":"verifizieren","level":"B2","translations":["to verify","to confirm the accuracy of"],"tip":"etwas verifizieren = to verify the accuracy of a fact or claim. Formal alternative to bestätigen or prüfen.","present":{"ich":"verifiziere","du":"verifizierst","er_sie_es":"verifiziert","wir":"verifizieren","ihr":"verifiziert","sie_Sie":"verifizieren"},"past_tenses":{"präteritum":"verifizierte","partizip_ii":"verifiziert"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat verifiziert"}],"dual_auxiliary":false,"patterns":[{"label":"verifizieren + Akkusativ","prepositions":[],"explanation":"Verify or confirm the truth of something.","examples":["Die Angaben verifizieren.","Das lässt sich nicht verifizieren.","Die Daten wurden verifiziert."]}]},
  {"base":"voranbringen","level":"B2","separable":true,"separable_prefix":"voran","translations":["to advance","to move forward","to make progress on"],"tip":"Separable. etwas voranbringen = to push something forward, advance a project.","present":{"ich":"bringe voran","du":"bringst voran","er_sie_es":"bringt voran","wir":"bringen voran","ihr":"bringt voran","sie_Sie":"bringen voran"},"past_tenses":{"präteritum":"brachte voran","partizip_ii":"vorangebracht"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat vorangebracht"}],"dual_auxiliary":false,"patterns":[{"label":"voranbringen + Akkusativ","prepositions":[],"explanation":"Move something forward or advance progress.","examples":["Das Projekt voranbringen.","Er bringt die Diskussion voran.","Was bringt uns voran?"]}]},
  {"base":"zusammenhängen","level":"B2","separable":true,"separable_prefix":"zusammen","translations":["to be connected","to be related","to be linked"],"tip":"Separable strong verb. mit etwas zusammenhängen = to be connected to something. Alles hängt zusammen = everything is connected.","present":{"ich":"hänge zusammen","du":"hängst zusammen","er_sie_es":"hängt zusammen","wir":"hängen zusammen","ihr":"hängt zusammen","sie_Sie":"hängen zusammen"},"past_tenses":{"präteritum":"hing zusammen","partizip_ii":"zusammengehangen"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat zusammengehangen"}],"dual_auxiliary":false,"patterns":[{"label":"zusammenhängen mit + Dativ","prepositions":["mit"],"explanation":"Be connected or related to something.","examples":["Das hängt damit zusammen.","Die Probleme hängen zusammen.","Womit hängt das zusammen?"]}]},
  {"base":"zwingen","level":"B2","translations":["to force","to compel","to oblige"],"tip":"Strong verb. jemanden zu etwas zwingen = to force someone to do something. sich gezwungen sehen = to feel compelled.","reflexive":true,"present":{"ich":"zwinge","du":"zwingst","er_sie_es":"zwingt","wir":"zwingen","ihr":"zwingt","sie_Sie":"zwingen"},"past_tenses":{"präteritum":"zwang","partizip_ii":"gezwungen"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat gezwungen"}],"dual_auxiliary":false,"patterns":[{"label":"zwingen + Akkusativ zu + Dativ","prepositions":["zu"],"explanation":"Force or compel someone to do something.","examples":["Er zwingt mich zur Entscheidung.","Niemand kann dich zwingen.","Sie fühlt sich gezwungen."]}]},
  {"base":"aufklären","level":"B2","separable":true,"separable_prefix":"auf","translations":["to clarify","to educate","to solve","to enlighten"],"tip":"Separable. ein Missverständnis aufklären = to clear up a misunderstanding. einen Fall aufklären = to solve a case.","present":{"ich":"kläre auf","du":"klärst auf","er_sie_es":"klärt auf","wir":"klären auf","ihr":"klärt auf","sie_Sie":"klären auf"},"past_tenses":{"präteritum":"klärte auf","partizip_ii":"aufgeklärt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat aufgeklärt"}],"dual_auxiliary":false,"patterns":[{"label":"aufklären + Akkusativ (über + Akkusativ)","prepositions":["über"],"explanation":"Clarify, solve, or educate about something.","examples":["Bitte kläre das auf.","Den Fall aufklären.","Jemanden über Risiken aufklären."]}]},
  {"base":"durchsetzen","level":"B2","separable":true,"separable_prefix":"durch","reflexive":true,"translations":["to push through","to enforce","to prevail","to assert"],"tip":"Separable. sich durchsetzen = to prevail/assert oneself. etwas durchsetzen = to push through a plan/law.","present":{"ich":"setze durch","du":"setzt durch","er_sie_es":"setzt durch","wir":"setzen durch","ihr":"setzt durch","sie_Sie":"setzen durch"},"past_tenses":{"präteritum":"setzte durch","partizip_ii":"durchgesetzt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat durchgesetzt"}],"dual_auxiliary":false,"patterns":[{"label":"durchsetzen + Akkusativ / sich durchsetzen","prepositions":[],"explanation":"Push through/enforce something, or assert oneself.","examples":["Das Gesetz wurde durchgesetzt.","Sie setzt sich durch.","Den Willen durchsetzen."]}]},
  {"base":"einschätzen","level":"B2","separable":true,"separable_prefix":"ein","translations":["to assess","to estimate","to judge"],"tip":"Separable. etwas richtig/falsch einschätzen = to assess correctly/incorrectly. Common in professional and academic language.","present":{"ich":"schätze ein","du":"schätzt ein","er_sie_es":"schätzt ein","wir":"schätzen ein","ihr":"schätzt ein","sie_Sie":"schätzen ein"},"past_tenses":{"präteritum":"schätzte ein","partizip_ii":"eingeschätzt"},"auxiliaries":[{"aux":"haben","condition":"always","perfekt":"hat eingeschätzt"}],"dual_auxiliary":false,"patterns":[{"label":"einschätzen + Akkusativ (als)","prepositions":["als"],"explanation":"Assess or estimate something.","examples":["Wie schätzt du das ein?","Die Lage wurde falsch eingeschätzt.","Er schätzt das Risiko richtig ein."]}]},
{
    "base": "vorweisen",
    "level": "B2",
    "separable": true,
    "separable_prefix": "vor",
    "translations": ["to show", "to produce", "to present (evidence/qualifications)"],
    "tip": "Used in formal/professional contexts. Etwas vorweisen können = to be able to demonstrate something.",
    "present": {"ich": "weise vor", "du": "weist vor", "er_sie_es": "weist vor", "wir": "weisen vor", "ihr": "weist vor", "sie_Sie": "weisen vor"},
    "past_tenses": {"präteritum": "wies vor", "partizip_ii": "vorgewiesen"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat vorgewiesen"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "vorweisen + Akkusativ", "prepositions": [], "explanation": "Present or show something (documents, qualifications).", "examples": ["Können Sie Erfahrung vorweisen?", "Er wies seinen Ausweis vor.", "Was können Sie vorweisen?"]}]
  },
  {
    "base": "nachweisen",
    "level": "B2",
    "separable": true,
    "separable_prefix": "nach",
    "translations": ["to prove", "to demonstrate", "to verify", "to detect"],
    "tip": "Used in scientific, legal, and forensic contexts. Schuld nachweisen = to prove guilt.",
    "present": {"ich": "weise nach", "du": "weist nach", "er_sie_es": "weist nach", "wir": "weisen nach", "ihr": "weist nach", "sie_Sie": "weisen nach"},
    "past_tenses": {"präteritum": "wies nach", "partizip_ii": "nachgewiesen"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat nachgewiesen"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "nachweisen + Akkusativ", "prepositions": [], "explanation": "Prove or demonstrate something.", "examples": ["Die Schuld konnte nicht nachgewiesen werden.", "Der Stoff wurde im Blut nachgewiesen.", "Er konnte seine Identität nachweisen."]}]
  },
  {
    "base": "absehen",
    "level": "B2",
    "separable": true,
    "separable_prefix": "ab",
    "translations": ["to refrain from", "to foresee", "to disregard"],
    "tip": "absehen von + Dativ = to refrain from / to disregard. Abzusehen sein = to be foreseeable.",
    "present": {"ich": "sehe ab", "du": "siehst ab", "er_sie_es": "sieht ab", "wir": "sehen ab", "ihr": "seht ab", "sie_Sie": "sehen ab"},
    "past_tenses": {"präteritum": "sah ab", "partizip_ii": "abgesehen"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat abgesehen"}],
    "dual_auxiliary": false,
    "patterns": [
      {"label": "absehen von + Dativ", "prepositions": ["von"], "explanation": "Refrain from or leave aside something.", "examples": ["Wir sehen von einer Klage ab.", "Von Strafe wird abgesehen.", "Abgesehen davon..."]},
      {"label": "absehbar sein", "prepositions": [], "explanation": "Be foreseeable.", "examples": ["Das war nicht abzusehen.", "In absehbarer Zeit."]}
    ]
  },
  {
    "base": "zunehmen",
    "level": "B2",
    "separable": true,
    "separable_prefix": "zu",
    "translations": ["to increase", "to gain weight", "to grow"],
    "tip": "Stark irregular. Opposite of abnehmen. Used in trends, health, and quantitative contexts.",
    "present": {"ich": "nehme zu", "du": "nimmst zu", "er_sie_es": "nimmt zu", "wir": "nehmen zu", "ihr": "nehmt zu", "sie_Sie": "nehmen zu"},
    "past_tenses": {"präteritum": "nahm zu", "partizip_ii": "zugenommen"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat zugenommen"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "zunehmen (intransitive)", "prepositions": [], "explanation": "Increase, grow, or gain weight.", "examples": ["Die Nachfrage nimmt zu.", "Er hat zugenommen.", "Die Probleme nehmen zu."]}]
  },
  {
    "base": "abnehmen",
    "level": "B2",
    "separable": true,
    "separable_prefix": "ab",
    "translations": ["to decrease", "to lose weight", "to take off", "to answer (phone)"],
    "tip": "Strongly irregular. Multiple meanings in different contexts.",
    "present": {"ich": "nehme ab", "du": "nimmst ab", "er_sie_es": "nimmt ab", "wir": "nehmen ab", "ihr": "nehmt ab", "sie_Sie": "nehmen ab"},
    "past_tenses": {"präteritum": "nahm ab", "partizip_ii": "abgenommen"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat abgenommen"}],
    "dual_auxiliary": false,
    "patterns": [
      {"label": "abnehmen (lose weight / decrease)", "prepositions": [], "explanation": "Decrease or lose weight.", "examples": ["Die Nachfrage nimmt ab.", "Ich möchte abnehmen.", "Die Zahl der Fehler nimmt ab."]},
      {"label": "abnehmen (take off / answer)", "prepositions": [], "explanation": "Remove something or answer the phone.", "examples": ["Nimm das Bild ab!", "Den Hörer abnehmen.", "Hat jemand abgenommen?"]}
    ]
  },
  {
    "base": "vorlegen",
    "level": "B2",
    "separable": true,
    "separable_prefix": "vor",
    "translations": ["to submit", "to present", "to lay before", "to table (a proposal)"],
    "tip": "Formal. Common in legal, academic, bureaucratic contexts. Unterlagen vorlegen = to submit documents.",
    "present": {"ich": "lege vor", "du": "legst vor", "er_sie_es": "legt vor", "wir": "legen vor", "ihr": "legt vor", "sie_Sie": "legen vor"},
    "past_tenses": {"präteritum": "legte vor", "partizip_ii": "vorgelegt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat vorgelegt"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "vorlegen + Akkusativ (+Dativ)", "prepositions": [], "explanation": "Submit or present something formally.", "examples": ["Er legte dem Gericht Beweise vor.", "Die Unterlagen wurden vorgelegt.", "Einen Plan vorlegen."]}]
  },
  {
    "base": "anordnen",
    "level": "B2",
    "separable": true,
    "separable_prefix": "an",
    "translations": ["to order", "to direct", "to arrange"],
    "tip": "Formal. Used for official orders/directives. Different from bestellen (order food/goods).",
    "present": {"ich": "ordne an", "du": "ordnest an", "er_sie_es": "ordnet an", "wir": "ordnen an", "ihr": "ordnet an", "sie_Sie": "ordnen an"},
    "past_tenses": {"präteritum": "ordnete an", "partizip_ii": "angeordnet"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat angeordnet"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "anordnen + Akkusativ / dass-Satz", "prepositions": [], "explanation": "Issue an official directive or order.", "examples": ["Der Richter ordnete Untersuchungshaft an.", "Es wurde angeordnet, dass...", "Die Polizei ordnete eine Razzia an."]}]
  },
  {
    "base": "abwenden",
    "level": "B2",
    "separable": true,
    "separable_prefix": "ab",
    "translations": ["to avert", "to prevent", "to turn away"],
    "tip": "abwenden = to avert (danger) OR to turn away (one's gaze/face). sich abwenden = to turn away from.",
    "reflexive": true,
    "present": {"ich": "wende ab", "du": "wendest ab", "er_sie_es": "wendet ab", "wir": "wenden ab", "ihr": "wendet ab", "sie_Sie": "wenden ab"},
    "past_tenses": {"präteritum": "wandte ab", "partizip_ii": "abgewandt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat abgewandt"}],
    "dual_auxiliary": false,
    "patterns": [
      {"label": "abwenden + Akkusativ (avert)", "prepositions": [], "explanation": "Avert or prevent something.", "examples": ["Die Katastrophe wurde abgewendet.", "Schaden abwenden.", "Die Krise konnte knapp abgewandt werden."]},
      {"label": "sich abwenden (turn away)", "prepositions": ["von"], "explanation": "Turn away physically or figuratively.", "examples": ["Sie wandte sich von ihm ab.", "Er wandte das Gesicht ab."]}
    ]
  },
  {
    "base": "unterliegen",
    "level": "B2",
    "translations": ["to be subject to", "to be governed by", "to lose (to)"],
    "tip": "Takes Dative! unterliegen + Dativ. Dem Gesetz unterliegen = to be subject to the law.",
    "common_mistakes": ["Takes Dative: 'Er unterliegt dem Gesetz' not 'Er unterliegt das Gesetz'"],
    "present": {"ich": "unterliege", "du": "unterliegst", "er_sie_es": "unterliegt", "wir": "unterliegen", "ihr": "unterliegt", "sie_Sie": "unterliegen"},
    "past_tenses": {"präteritum": "unterlag", "partizip_ii": "unterlegen"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat unterlegen"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "unterliegen + Dativ", "prepositions": [], "explanation": "Be subject to something, or lose to someone.", "examples": ["Das unterliegt dem Datenschutz.", "Er unterlag dem Gegner 0:2.", "Das unterliegt der Geheimhaltungspflicht."]}]
  },
  {
    "base": "lauten",
    "level": "B2",
    "translations": ["to read", "to state", "to run (of a text)", "to sound"],
    "tip": "Describes what a text says or how something is formulated. Very common in academic and legal writing.",
    "present": {"ich": "laute", "du": "lautest", "er_sie_es": "lautet", "wir": "lauten", "ihr": "lautet", "sie_Sie": "lauten"},
    "past_tenses": {"präteritum": "lautete", "partizip_ii": "gelautet"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat gelautet"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "lauten + (Prädikativ)", "prepositions": [], "explanation": "State or read (of a text or name).", "examples": ["Die Antwort lautet: Nein.", "Wie lautet sein Name?", "Das Urteil lautete auf Freispruch.", "Der Befehl lautet..."]}]
  },
  {
    "base": "erahnen",
    "level": "B2",
    "translations": ["to sense", "to have an inkling of", "to guess"],
    "tip": "Suggests sensing something intuitively before it becomes clear. Slightly literary.",
    "present": {"ich": "erahne", "du": "erahnst", "er_sie_es": "erahnt", "wir": "erahnen", "ihr": "erahnt", "sie_Sie": "erahnen"},
    "past_tenses": {"präteritum": "erahnte", "partizip_ii": "erahnt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat erahnt"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "erahnen + Akkusativ", "prepositions": [], "explanation": "Have an inkling or sense of something.", "examples": ["Ich erahne, was er meint.", "Das Ende war kaum zu erahnen.", "Sie erahnte das Schlimmste."]}]
  },
  {
    "base": "infrage stellen",
    "level": "B2",
    "separable": false,
    "translations": ["to question", "to call into question", "to challenge"],
    "tip": "Written as one or two words: infrage stellen / in Frage stellen. Common in academic and critical discourse.",
    "present": {"ich": "stelle infrage", "du": "stellst infrage", "er_sie_es": "stellt infrage", "wir": "stellen infrage", "ihr": "stellt infrage", "sie_Sie": "stellen infrage"},
    "past_tenses": {"präteritum": "stellte infrage", "partizip_ii": "infrage gestellt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat infrage gestellt"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "infrage stellen + Akkusativ", "prepositions": [], "explanation": "Question or challenge something.", "examples": ["Das stellt alles infrage.", "Seine Kompetenz wurde infrage gestellt.", "Das darf man infrage stellen."]}]
  },
  {
    "base": "einräumen",
    "level": "B2",
    "separable": true,
    "separable_prefix": "ein",
    "translations": ["to admit", "to concede", "to grant", "to put away"],
    "tip": "einräumen dass = to admit/concede that. Also literal: put things away in a cupboard.",
    "present": {"ich": "räume ein", "du": "räumst ein", "er_sie_es": "räumt ein", "wir": "räumen ein", "ihr": "räumt ein", "sie_Sie": "räumen ein"},
    "past_tenses": {"präteritum": "räumte ein", "partizip_ii": "eingeräumt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat eingeräumt"}],
    "dual_auxiliary": false,
    "patterns": [
      {"label": "einräumen + dass-Satz", "prepositions": [], "explanation": "Admit or concede that something is true.", "examples": ["Er räumte ein, dass er gelogen hatte.", "Ich muss einräumen, dass ich falsch lag.", "Das muss man einräumen."]},
      {"label": "einräumen + Akkusativ (grant/put away)", "prepositions": [], "explanation": "Grant a privilege or put something away.", "examples": ["Ihm wurde Aufschub eingeräumt.", "Ich räume das Geschirr ein."]}
    ]
  },
  {
    "base": "eingestehen",
    "level": "B2",
    "separable": true,
    "separable_prefix": "ein",
    "translations": ["to admit", "to confess", "to acknowledge"],
    "tip": "More personal than einräumen — usually admitting one's own mistakes/feelings to oneself or others.",
    "present": {"ich": "gestehe ein", "du": "gestehst ein", "er_sie_es": "gesteht ein", "wir": "gestehen ein", "ihr": "gesteht ein", "sie_Sie": "gestehen ein"},
    "past_tenses": {"präteritum": "gestand ein", "partizip_ii": "eingestanden"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat eingestanden"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "eingestehen + Akkusativ / dass-Satz", "prepositions": [], "explanation": "Admit something to oneself or others.", "examples": ["Er gestand ein, dass er Angst hatte.", "Sie musste sich eingestehen, dass sie unrecht hatte.", "Den Fehler eingestehen."]}]
  },
  {
    "base": "sicherstellen",
    "level": "B2",
    "separable": true,
    "separable_prefix": "sicher",
    "translations": ["to ensure", "to make sure", "to secure"],
    "tip": "Common in professional and official contexts. Sicherstellen dass = to ensure that.",
    "present": {"ich": "stelle sicher", "du": "stellst sicher", "er_sie_es": "stellt sicher", "wir": "stellen sicher", "ihr": "stellt sicher", "sie_Sie": "stellen sicher"},
    "past_tenses": {"präteritum": "stellte sicher", "partizip_ii": "sichergestellt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat sichergestellt"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "sicherstellen + dass / Akkusativ", "prepositions": [], "explanation": "Ensure or make certain that something happens.", "examples": ["Wir müssen sicherstellen, dass alle informiert sind.", "Die Qualität wird sichergestellt.", "Das muss sichergestellt werden."]}]
  },
  {
    "base": "aufzeigen",
    "level": "B2",
    "separable": true,
    "separable_prefix": "auf",
    "translations": ["to show", "to demonstrate", "to illustrate", "to point out"],
    "tip": "More emphatic than zeigen — implies clearly revealing or demonstrating something significant.",
    "present": {"ich": "zeige auf", "du": "zeigst auf", "er_sie_es": "zeigt auf", "wir": "zeigen auf", "ihr": "zeigt auf", "sie_Sie": "zeigen auf"},
    "past_tenses": {"präteritum": "zeigte auf", "partizip_ii": "aufgezeigt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat aufgezeigt"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "aufzeigen + Akkusativ", "prepositions": [], "explanation": "Point out or demonstrate something clearly.", "examples": ["Der Bericht zeigt Mängel auf.", "Er zeigte Lösungen auf.", "Die Studie zeigt Zusammenhänge auf."]}]
  },
  {
    "base": "vorantreiben",
    "level": "B2",
    "separable": true,
    "separable_prefix": "voran",
    "translations": ["to drive forward", "to push ahead", "to advance"],
    "tip": "Used in project management and leadership contexts. Die Digitalisierung vorantreiben = to drive digitalization forward.",
    "present": {"ich": "treibe voran", "du": "treibst voran", "er_sie_es": "treibt voran", "wir": "treiben voran", "ihr": "treibt voran", "sie_Sie": "treiben voran"},
    "past_tenses": {"präteritum": "trieb voran", "partizip_ii": "vorangetrieben"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat vorangetrieben"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "vorantreiben + Akkusativ", "prepositions": [], "explanation": "Drive something forward/advance.", "examples": ["Das Projekt vorantreiben.", "Die Reform wird vorangetrieben.", "Er treibt die Digitalisierung voran."]}]
  },
  {
    "base": "einbeziehen",
    "level": "B2",
    "separable": true,
    "separable_prefix": "ein",
    "translations": ["to involve", "to include", "to incorporate"],
    "tip": "jemanden einbeziehen = to involve someone. etwas einbeziehen = to factor something in.",
    "present": {"ich": "beziehe ein", "du": "beziehst ein", "er_sie_es": "bezieht ein", "wir": "beziehen ein", "ihr": "bezieht ein", "sie_Sie": "beziehen ein"},
    "past_tenses": {"präteritum": "bezog ein", "partizip_ii": "einbezogen"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat einbezogen"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "einbeziehen + Akkusativ", "prepositions": [], "explanation": "Involve or include someone/something.", "examples": ["Wir beziehen alle Stakeholder ein.", "Diese Faktoren müssen einbezogen werden.", "Die Bevölkerung wurde einbezogen."]}]
  },
  {
    "base": "herausstellen",
    "level": "B2",
    "separable": true,
    "separable_prefix": "heraus",
    "reflexive": true,
    "translations": ["to turn out", "to emerge", "to highlight", "to prove to be"],
    "tip": "Sich herausstellen = to turn out (to be the case). Very common: Es stellt sich heraus, dass...",
    "present": {"ich": "stelle heraus", "du": "stellst heraus", "er_sie_es": "stellt heraus", "wir": "stellen heraus", "ihr": "stellt heraus", "sie_Sie": "stellen heraus"},
    "past_tenses": {"präteritum": "stellte heraus", "partizip_ii": "herausgestellt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat herausgestellt"}],
    "dual_auxiliary": false,
    "patterns": [
      {"label": "sich herausstellen + als / dass", "prepositions": [], "explanation": "Turn out to be something.", "examples": ["Es stellte sich heraus, dass er log.", "Es stellt sich als Problem heraus.", "Das stellte sich als Fehler heraus."]},
      {"label": "herausstellen + Akkusativ", "prepositions": [], "explanation": "Highlight or emphasise something.", "examples": ["Er stellte die Vorteile heraus.", "Die Studie stellt Mängel heraus."]}
    ]
  },
  {
    "base": "abklären",
    "level": "B2",
    "separable": true,
    "separable_prefix": "ab",
    "translations": ["to clarify", "to sort out", "to establish (a fact)"],
    "tip": "Common in professional/administrative contexts. Etwas abklären = to get something sorted/clarified.",
    "present": {"ich": "kläre ab", "du": "klärst ab", "er_sie_es": "klärt ab", "wir": "klären ab", "ihr": "klärt ab", "sie_Sie": "klären ab"},
    "past_tenses": {"präteritum": "klärte ab", "partizip_ii": "abgeklärt"},
    "auxiliaries": [{"aux": "haben", "condition": "always", "perfekt": "hat abgeklärt"}],
    "dual_auxiliary": false,
    "patterns": [{"label": "abklären + Akkusativ", "prepositions": [], "explanation": "Clarify or sort out a matter.", "examples": ["Das müssen wir noch abklären.", "Der Arzt klärt die Diagnose ab.", "Kann ich das mit dir abklären?"]}]
  }
];

window.verbsB2 = verbsB2;
