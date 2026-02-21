// adverbs-db-c1.js
const adverbsC1 = [
  {"base": "gleichwohl", "level": "C1", "category": "general", "translations": ["nevertheless", "nonetheless", "yet"], "examples": ["Er wusste es, gleichwohl schwieg er.", "Das ist riskant, gleichwohl notwendig.", "Gleichwohl muss eine Entscheidung fallen.", "Sie zweifelt, gleichwohl macht sie weiter."], "position_rules": ["Formal synonym of 'dennoch/trotzdem'; typically position 1."], "example_positions": ["Er wusste es, gleichwohl schwieg er.", "Gleichwohl muss eine Entscheidung fallen."]},
  {"base": "demzufolge", "level": "C1", "category": "general", "translations": ["accordingly", "hence"], "examples": ["Die Daten sind eindeutig, demzufolge ist die Entscheidung klar.", "Demzufolge müssen wir handeln.", "Er hat zugestimmt, demzufolge gilt die Vereinbarung.", "Das Gesetz ist in Kraft getreten, demzufolge gelten neue Regeln."], "position_rules": ["Formal logical connector; typically opens a new clause."], "example_positions": ["Die Daten sind eindeutig, demzufolge ist die Entscheidung klar.", "Demzufolge müssen wir handeln."]},
  {"base": "infolgedessen", "level": "C1", "category": "general", "translations": ["as a result", "consequently"], "examples": ["Er verpasste den Zug, infolgedessen kam er zu spät.", "Infolgedessen wurde das Projekt abgebrochen.", "Die Nachfrage stieg, infolgedessen stiegen die Preise.", "Infolgedessen sind weitere Maßnahmen nötig."], "position_rules": ["Formal connector signaling a consequence; typically in position 1."], "example_positions": ["Er verpasste den Zug, infolgedessen kam er zu spät.", "Infolgedessen wurde das Projekt abgebrochen."]},
  {"base": "überdies", "level": "C1", "category": "general", "translations": ["moreover", "furthermore"], "examples": ["Er ist qualifiziert und überdies erfahren.", "Das ist aufwendig und überdies fehleranfällig.", "Überdies fehlen die nötigen Mittel.", "Sie ist kompetent und überdies motiviert."], "position_rules": ["Formal alternative to 'außerdem'; position 1 or after subject."], "example_positions": ["Er ist qualifiziert und überdies erfahren.", "Überdies fehlen die nötigen Mittel."]},
  {"base": "nichtsdestotrotz", "level": "C1", "category": "general", "translations": ["nevertheless", "all the same"], "examples": ["Nichtsdestotrotz hielt er an seinen Überzeugungen fest.", "Es gab Widerstand, nichtsdestotrotz wurde das Gesetz beschlossen.", "Das ist schwierig, nichtsdestotrotz machbar.", "Nichtsdestotrotz bleibt die Frage offen."], "position_rules": ["Emphatic version of 'dennoch'; typically position 1."], "example_positions": ["Nichtsdestotrotz hielt er an seinen Überzeugungen fest.", "Das ist schwierig, nichtsdestotrotz machbar."]},
  {"base": "freilich", "level": "C1", "category": "general", "translations": ["of course", "certainly", "admittedly"], "examples": ["Das ist freilich richtig.", "Er weiß es freilich besser.", "Freilich gibt es Ausnahmen.", "Das klappt, freilich nur unter bestimmten Bedingungen."], "position_rules": ["Southern German / Austrian flavour; can concede a point."], "example_positions": ["Das ist freilich richtig.", "Freilich gibt es Ausnahmen."]},
  {"base": "wenngleich", "level": "C1", "category": "general", "translations": ["although", "even if", "albeit"], "examples": ["Wenngleich es schwer ist, lohnt es sich.", "Das ist wenngleich unwahrscheinlich, nicht unmöglich.", "Wenngleich ich zustimme, habe ich Bedenken.", "Er ist wenngleich krank, trotzdem da."], "position_rules": ["Literary/formal concessive; introduces a subordinate clause."], "example_positions": ["Wenngleich es schwer ist, lohnt es sich.", "Wenngleich ich zustimme, habe ich Bedenken."]},
  {"base": "mitunter", "level": "C1", "category": "general", "translations": ["sometimes", "occasionally", "at times"], "examples": ["Das kann mitunter sehr schwierig sein.", "Mitunter irrt er sich.", "Solche Fehler passieren mitunter.", "Mitunter braucht man Geduld."], "position_rules": ["More formal/literary than 'manchmal'; Mittelfeld or position 1."], "example_positions": ["Das kann mitunter sehr schwierig sein.", "Mitunter irrt er sich."]},
  {"base": "sicherlich", "level": "C1", "category": "modal", "translations": ["certainly", "surely", "undoubtedly"], "examples": ["Das ist sicherlich richtig.", "Er wird sicherlich kommen.", "Sicherlich gibt es bessere Lösungen.", "Das hat sicherlich seine Gründe."], "position_rules": ["Expresses strong probability or assurance; Mittelfeld or position 1."], "example_positions": ["Das ist sicherlich richtig.", "Er wird sicherlich kommen."]},
  {"base": "ausgerechnet", "level": "C1", "category": "general", "translations": ["of all things", "of all people", "precisely"], "examples": ["Ausgerechnet er muss das sagen.", "Das passiert ausgerechnet heute.", "Ausgerechnet in diesem Moment klingelt das Handy.", "Ausgerechnet ihr musste das passieren."], "position_rules": ["Emphasizes irony or unwelcome specificity; usually before what is specified."], "example_positions": ["Ausgerechnet er muss das sagen.", "Das passiert ausgerechnet heute."]},
  {"base": "unbedingt", "level": "C1", "category": "modal", "translations": ["absolutely", "by all means", "without fail"], "examples": ["Das muss unbedingt geklärt werden.", "Ich will das unbedingt sehen.", "Unbedingt einhalten!", "Er will unbedingt gewinnen."], "position_rules": ["Expresses strong necessity or insistence; Mittelfeld or position 1."], "example_positions": ["Das muss unbedingt geklärt werden.", "Ich will das unbedingt sehen."]},
  {"base": "schlechthin", "level": "C1", "category": "general", "translations": ["par excellence", "absolutely", "simply"], "examples": ["Er ist der Künstler schlechthin.", "Das ist Genie schlechthin.", "Kafkas Werke sind schlechthin einzigartig.", "Sie ist die Expertin schlechthin."], "position_rules": ["Placed after noun or adjective to express the quintessential example."], "example_positions": ["Er ist der Künstler schlechthin.", "Das ist Genie schlechthin."]},
  {"base": "gar", "level": "C1", "category": "general", "translations": ["even", "at all", "quite"], "examples": ["Er hat gar nichts gesagt.", "Gar kein Interesse zeigte er.", "Das ist gar nicht so einfach.", "Sie mag es gar nicht."], "position_rules": ["Intensifies negation or surprise; Mittelfeld."], "example_positions": ["Er hat gar nichts gesagt.", "Das ist gar nicht so einfach."]},
  {"base": "wiederum", "level": "C1", "category": "general", "translations": ["in turn", "again", "on the other hand"], "examples": ["Das führt wiederum zu Problemen.", "Wiederum zeigt sich, dass es schwierig ist.", "Er wiederum sieht das anders.", "Das hängt wiederum von der Situation ab."], "position_rules": ["Signals a returning or alternating relationship; Mittelfeld or position 1."], "example_positions": ["Das führt wiederum zu Problemen.", "Er wiederum sieht das anders."]},
  {"base": "hingegen", "level": "C1", "category": "general", "translations": ["whereas", "in contrast"], "examples": ["Er ist ruhig, sie hingegen sehr lebendig.", "Die Theorie ist klar, die Praxis hingegen komplex.", "Hingegen ist die andere Sichtweise überzeugend.", "Manche stimmen zu, andere hingegen lehnen ab."], "position_rules": ["Signals contrast; can appear mid-clause or in position 1."], "example_positions": ["Er ist ruhig, sie hingegen sehr lebendig.", "Die Theorie ist klar, die Praxis hingegen komplex."]},
  {"base": "keineswegs", "level": "C1", "category": "general", "translations": ["by no means", "not in the least"], "examples": ["Das ist keineswegs sicher.", "Keineswegs sollte man das verharmlosen.", "Er ist keineswegs bereit zuzugeben.", "Das war keineswegs beabsichtigt."], "position_rules": ["Emphatic negation; stronger than 'nicht'."], "example_positions": ["Das ist keineswegs sicher.", "Keineswegs sollte man das verharmlosen."]},
  {"base": "zunehmend", "level": "C1", "category": "general", "translations": ["increasingly", "progressively"], "examples": ["Das Problem wird zunehmend ernst.", "Zunehmend mehr Menschen erkennen das Problem.", "Er verhält sich zunehmend merkwürdig.", "Zunehmend verliert er das Vertrauen."], "position_rules": ["Temporal/degree adverb; Mittelfeld or before adjective."], "example_positions": ["Das Problem wird zunehmend ernst.", "Zunehmend mehr Menschen erkennen das Problem."]},
  {"base": "nach eigener Aussage", "level": "C1", "category": "general", "translations": ["by one's own account", "according to one's own statement"], "examples": ["Nach eigener Aussage war er nicht dabei.", "Er ist nach eigener Aussage unschuldig.", "Nach eigener Aussage hat sie alles getan.", "Das sei nach eigener Aussage nie geplant gewesen."], "position_rules": ["Introduces reported speech or claims; position 1 or Mittelfeld."], "example_positions": ["Nach eigener Aussage war er nicht dabei.", "Er ist nach eigener Aussage unschuldig."]},
  {"base": "nachdrücklich", "level": "C1", "category": "general", "translations": ["emphatically", "strongly", "insistently"], "examples": ["Er betonte nachdrücklich seine Unschuld.", "Nachdrücklich forderte sie Rechenschaft.", "Ich empfehle das nachdrücklich.", "Das wurde nachdrücklich abgelehnt."], "position_rules": ["Adds force or insistence to a statement; Mittelfeld."], "example_positions": ["Er betonte nachdrücklich seine Unschuld.", "Ich empfehle das nachdrücklich."]},
  {"base": "allem Anschein nach", "level": "C1", "category": "modal", "translations": ["apparently", "seemingly", "by all appearances"], "examples": ["Allem Anschein nach ist er schuldig.", "Das war allem Anschein nach ein Missverständnis.", "Allem Anschein nach funktioniert es.", "Die Lage ist allem Anschein nach stabil."], "position_rules": ["Formal hedging expression; typically in position 1."], "example_positions": ["Allem Anschein nach ist er schuldig.", "Das war allem Anschein nach ein Missverständnis."]},
,
  {
    "base": "zweifelsohne",
    "level": "C1",
    "category": "modal",
    "translations": [
      "undoubtedly",
      "without doubt"
    ],
    "examples": [
      "Das ist zweifelsohne das beste Ergebnis.",
      "Er ist zweifelsohne der Experte auf diesem Gebiet.",
      "Zweifelsohne hat sie recht."
    ],
    "position_rules": [
      "Sentence-initial or middle field for emphasis."
    ],
    "example_positions": [
      "Zweifelsohne ist er qualifiziert."
    ],
    "tip": "Formal synonym for 'zweifellos'. Favoured in academic writing and speeches."
  },
  {
    "base": "vermutlich",
    "level": "C1",
    "category": "modal",
    "translations": [
      "presumably",
      "probably"
    ],
    "examples": [
      "Er ist vermutlich krank.",
      "Das wird vermutlich laenger dauern.",
      "Vermutlich hat sie die E-Mail noch nicht gelesen."
    ],
    "position_rules": [
      "Flexible position; often in Mittelfeld."
    ],
    "example_positions": [
      "Sie ist vermutlich noch im Buero."
    ],
    "tip": "Similar to 'wahrscheinlich' but slightly more formal and distancing. Common in journalism."
  },
  {
    "base": "ausschliesslich",
    "level": "C1",
    "category": "restrictive",
    "translations": [
      "exclusively",
      "solely"
    ],
    "examples": [
      "Das ist ausschliesslich meine Entscheidung.",
      "Er arbeitet ausschliesslich an diesem Projekt.",
      "Diese Funktion ist ausschliesslich Mitgliedern vorbehalten."
    ],
    "position_rules": [
      "Usually before the element it restricts."
    ],
    "example_positions": [
      "Das gilt ausschliesslich fuer Mitglieder."
    ],
    "tip": "More formal than 'nur' (only). Standard in legal, academic, and business texts.",
    "base_display": "ausschließlich"
  },
  {
    "base": "stattdessen",
    "level": "C1",
    "category": "contrast",
    "translations": [
      "instead",
      "in its place"
    ],
    "examples": [
      "Er ging nicht ins Kino; stattdessen las er ein Buch.",
      "Stattdessen waehlte sie eine andere Loesung.",
      "Kannst du das uebernehmen?"
    ],
    "position_rules": [
      "Often sentence-initial (position 1), causes verb inversion."
    ],
    "example_positions": [
      "Er kam nicht. Stattdessen schickte er eine E-Mail."
    ],
    "tip": "anstatt(dessen) is slightly more formal. Both cause inversion when in position 1."
  },
  {
    "base": "ausnahmsweise",
    "level": "C1",
    "category": "modal",
    "translations": [
      "as an exception",
      "just this once"
    ],
    "examples": [
      "Wir machen das ausnahmsweise so.",
      "Ausnahmsweise darf er laenger aufbleiben.",
      "Das geht ausnahmsweise in Ordnung."
    ],
    "position_rules": [
      "Usually in Mittelfeld or sentence-initial."
    ],
    "example_positions": [
      "Ich mache das ausnahmsweise fuer dich."
    ],
    "tip": "Built from 'Ausnahme' (exception) + '-weise'. Signals you are departing from the norm just once."
  },
  {
    "base": "letztendlich",
    "level": "C1",
    "category": "temporal",
    "translations": [
      "ultimately",
      "in the end",
      "finally"
    ],
    "examples": [
      "Letztendlich hat er doch zugestimmt.",
      "Was zaehlt letztendlich wirklich?",
      "Letztendlich liegt die Entscheidung bei ihm."
    ],
    "position_rules": [
      "Sentence-initial or Mittelfeld."
    ],
    "example_positions": [
      "Letztendlich muss jeder selbst entscheiden."
    ],
    "tip": "Interchangeable with 'letztlich' and 'letzten Endes'. Slightly more emphatic than the others."
  },
  {
    "base": "insbesondere",
    "level": "C1",
    "category": "specifying",
    "translations": [
      "in particular",
      "especially",
      "particularly"
    ],
    "examples": [
      "Das gilt insbesondere fuer junge Fachkraefte.",
      "Ich danke Ihnen, insbesondere fuer Ihre Geduld.",
      "Insbesondere das dritte Kapitel ist sehr interessant."
    ],
    "position_rules": [
      "Often mid-sentence before the element being highlighted."
    ],
    "example_positions": [
      "Er interessiert sich insbesondere fuer Geschichte."
    ],
    "tip": "More formal than 'besonders'. Standard in academic writing, reports, and formal speeches."
  },
  {
    "base": "zugleich",
    "level": "C1",
    "category": "temporal",
    "translations": [
      "at the same time",
      "simultaneously",
      "also"
    ],
    "examples": [
      "Er ist Arzt und zugleich Schriftsteller.",
      "Das ist zugleich eine Chance und ein Risiko.",
      "Sie lachte und weinte zugleich."
    ],
    "position_rules": [
      "Usually in Mittelfeld, linking two parallel elements."
    ],
    "example_positions": [
      "Das Problem ist komplex und zugleich dringend."
    ],
    "tip": "More literary/formal than 'gleichzeitig'. Used to highlight that two qualities coexist."
  },
  {
    "base": "schliesslich",
    "level": "C1",
    "category": "logical",
    "translations": [
      "after all",
      "finally",
      "in the end"
    ],
    "examples": [
      "Schliesslich haben wir uns geeinigt.",
      "Er hat schliesslich doch nachgegeben.",
      "Das ist schliesslich dein Problem."
    ],
    "position_rules": [
      "Sentence-initial (with inversion) or Mittelfeld."
    ],
    "example_positions": [
      "Schliesslich ist er der Chef.",
      "Er hat sich schliesslich entschuldigt."
    ],
    "tip": "Two uses: 1) temporal 'finally/eventually', 2) logical 'after all' (reasoning). Context is key.",
    "base_display": "schließlich"
  },
  {
    "base": "wohlgemerkt",
    "level": "C1",
    "category": "modal",
    "translations": [
      "mind you",
      "note well",
      "it should be noted"
    ],
    "examples": [
      "Er ist bereit zu helfen, wohlgemerkt nur unter bestimmten Bedingungen.",
      "Wohlgemerkt habe ich das nicht gesagt.",
      "Das ist meine Meinung — wohlgemerkt keine Tatsache."
    ],
    "position_rules": [
      "Often parenthetical, set off by commas, or sentence-initial."
    ],
    "example_positions": [
      "Das ist erlaubt — wohlgemerkt nur einmal."
    ],
    "tip": "Used to add a caveat or draw attention to a condition. Equivalent to 'mind you' in English."
  },
{"base":"nolens volens","level":"C1","category":"modal","translations":["willy-nilly","whether one likes it or not","perforce"],"examples":["Nolens volens musste er zustimmen.","Er akzeptierte nolens volens die Bedingungen.","Nolens volens passiert das.","Das Schicksal, nolens volens."],"position_rules":["Position 1 or parenthetical; Latin loanphrase, formal/literary; signals unwilling acceptance"],"example_positions":["Nolens volens fügte er sich."]},
  {"base":"ex post","level":"C1","category":"temporal","translations":["after the fact","retrospectively","ex post"],"examples":["Ex post lässt sich das leicht sagen.","Die Analyse erfolgt ex post.","Ex post ist man immer klüger.","Eine ex-post-Betrachtung."],"position_rules":["Position 1 or attributive; often hyphenated before noun: ex-post-Analyse"],"example_positions":["Ex post ist die Entscheidung leicht zu kritisieren."]},
  {"base":"de facto","level":"C1","category":"modal","translations":["de facto","in practice","in fact"],"examples":["Das ist de facto verboten.","De facto hat er die Kontrolle.","De facto gibt es keine Wahl.","Eine de-facto-Grenze."],"position_rules":["Position 1 or Mittelfeld; often hyphenated attributively: de-facto-Regelung"],"example_positions":["De facto regiert er das Land."]},
  {"base":"de jure","level":"C1","category":"modal","translations":["de jure","legally","in law"],"examples":["De jure ist er noch Eigentümer.","De jure ist es verboten, de facto nicht.","Die de-jure-Situation.","Das gilt de jure, aber nicht de facto."],"position_rules":["Often contrasted with de facto; hyphenated before noun"],"example_positions":["De jure haben alle das gleiche Recht."]},
  {"base":"a priori","level":"C1","category":"modal","translations":["a priori","prior to experience","inherently","from the outset"],"examples":["Das kann man nicht a priori ausschließen.","A-priori-Annahmen.","A priori ist das fraglich.","Das ist a priori nicht möglich."],"position_rules":["Before verb or noun (hyphenated attributively); philosophical/academic register"],"example_positions":["A priori lässt sich das nicht beurteilen."]},
  {"base":"a posteriori","level":"C1","category":"modal","translations":["a posteriori","from experience","empirically"],"examples":["A posteriori lässt sich das beurteilen.","A-posteriori-Erkenntnis.","Das wissen wir nur a posteriori.","Eine a posteriori gewonnene Erkenntnis."],"position_rules":["After verb or attributively; contrasted with a priori; academic register"],"example_positions":["A posteriori war die Entscheidung richtig."]},
  {"base":"mutatis mutandis","level":"C1","category":"modal","translations":["mutatis mutandis","with the necessary changes","with appropriate modifications"],"examples":["Mutatis mutandis gilt das auch hier.","Das Prinzip gilt, mutatis mutandis, auch in diesem Fall.","Mutatis mutandis lässt sich das übertragen.","Die Regel gilt mutatis mutandis."],"position_rules":["Position 1 or parenthetical; Latin; used in legal, academic, and formal contexts"],"example_positions":["Mutatis mutandis kann man das auch hier anwenden."]},
  {"base":"ipso facto","level":"C1","category":"causal","translations":["ipso facto","by the very fact","automatically"],"examples":["Er verstieß gegen die Regeln und wurde ipso facto ausgeschlossen.","Das ist ipso facto ungültig.","Ipso facto ergibt sich daraus...","Er war schuldig, ipso facto wurde er verurteilt."],"position_rules":["Mittelfeld or position 1; Latin; marks automatic/logical consequence"],"example_positions":["Das macht ihn ipso facto zum Vorsitzenden."]},
  {"base":"per definitionem","level":"C1","category":"modal","translations":["by definition","definitionally"],"examples":["Das ist per definitionem ausgeschlossen.","Per definitionem ist das ein Fehler.","Das ist, per definitionem, unmöglich.","Kreis ist per definitionem rund."],"position_rules":["Position 1 or Mittelfeld; academic/logical; often abbreviated 'per def.'"],"example_positions":["Das ist per definitionem nicht möglich."]},
  {"base":"cum grano salis","level":"C1","category":"modal","translations":["with a grain of salt","with reservations","not to be taken too literally"],"examples":["Das ist cum grano salis zu verstehen.","Man sollte das cum grano salis nehmen.","Die Zahlen sind cum grano salis zu interpretieren.","Cum grano salis ist die Aussage richtig."],"position_rules":["Often parenthetical or before/after the statement being qualified; signals need for critical perspective"],"example_positions":["Das stimmt, cum grano salis, schon."]},
  {"base":"notabene","level":"C1","category":"focusing","translations":["nota bene","note well","mind you","please note"],"examples":["Nota bene: Das gilt nur für Ausnahmen.","Nota bene, er hat nicht zugestimmt.","Das ist, nota bene, meine persönliche Meinung.","Nota bene: Hier liegt ein Fehler vor."],"position_rules":["Position 1 or parenthetical; Latin; draws attention to an important nuance; often abbreviated NB"],"example_positions":["Nota bene: Das ändert sich nächstes Jahr."]},
  {"base":"wenngleich","level":"C1","category":"concessive","translations":["although","even though","albeit"],"examples":["Wenngleich er müde war, arbeitete er weiter.","Das ist richtig, wenngleich vereinfacht.","Wenngleich schwierig, ist es machbar.","Wenngleich dagegen, stimmte er schließlich zu."],"position_rules":["Subordinating conjunction/adverb at position 1 followed by inversion; concedes a point"],"example_positions":["Wenngleich das stimmt, muss man Einschränkungen machen."]},
  {"base":"inständig","level":"C1","category":"degree","translations":["urgently","earnestly","fervently","insistently"],"examples":["Ich bitte Sie inständig.","Er bat inständig um Hilfe.","Inständig hoffen.","Sie flehten ihn inständig an."],"position_rules":["Mittelfeld; intensifies plea or hope; formal/emotional register"],"example_positions":["Er bat inständig darum."]},
  {"base":"gleichsam","level":"C1","category":"modal","translations":["as it were","so to speak","in a manner of speaking"],"examples":["Er ist gleichsam ein Experte.","Das war gleichsam ein Signal.","Gleichsam wie ein Vorbote.","Das ist, gleichsam, das Fundament."],"position_rules":["Mittelfeld or parenthetical; signals a metaphor or approximation; literary/formal"],"example_positions":["Er fungierte gleichsam als Vermittler."]},
  {"base":"sinngemäß","level":"C1","category":"modal","translations":["in essence","in substance","paraphrased","to that effect"],"examples":["Er sagte sinngemäß, er sei dagegen.","Sinngemäß bedeutet das...","Der Inhalt, sinngemäß wiedergegeben.","Das wurde sinngemäß zitiert."],"position_rules":["Mittelfeld or before paraphrased content; signals paraphrase rather than verbatim quote"],"example_positions":["Er sagte sinngemäß, dass das unmöglich sei."]},
  {"base":"dementsprechend","level":"C1","category":"causal","translations":["accordingly","correspondingly","to that effect"],"examples":["Dementsprechend haben wir gehandelt.","Dementsprechend sind die Regeln.","Das Ergebnis war schlecht, dementsprechend reagierten wir.","Bitte handeln Sie dementsprechend."],"position_rules":["Position 1 (inverts) or Mittelfeld; formal connector aligning action with preceding information"],"example_positions":["Die Lage ist ernst, dementsprechend reagieren wir."]},
  {"base":"dergestalt","level":"C1","category":"modal","translations":["in such a way","to such an extent","of this nature"],"examples":["Dergestalt, dass alles unklar bleibt.","Das Problem ist dergestalt beschaffen.","Er handelte dergestalt, dass...","Eine dergestaltige Lösung."],"position_rules":["Often followed by 'dass' clause; formal/archaic; marks manner or nature of something"],"example_positions":["Er formulierte es dergestalt, dass niemand verstand."]},
  {"base":"fürwahr","level":"C1","category":"modal","translations":["truly","indeed","in truth","verily"],"examples":["Das ist fürwahr überraschend.","Fürwahr, er hat Recht.","Das war fürwahr ein Meisterstück.","Fürwahr, das ist schön."],"position_rules":["Position 1 or Mittelfeld; archaic/elevated; signals genuine affirmation; rare in modern usage but found in literary texts"],"example_positions":["Das ist fürwahr eine große Leistung."]},
  {"base":"schwerlich","level":"C1","category":"modal","translations":["hardly","scarcely","with great difficulty","unlikely"],"examples":["Das wird schwerlich gelingen.","Schwerlich lässt sich das beweisen.","Das kann schwerlich stimmen.","Schwerlich wird er zustimmen."],"position_rules":["Mittelfeld or position 1; more elevated than 'kaum'; expresses near-impossibility or improbability"],"example_positions":["Das ist schwerlich zu rechtfertigen."]},
  {"base":"wozu","level":"C1","category":"general","translations":["to what end","for what purpose","what for","wherefore"],"examples":["Wozu das alles?","Wozu dient das?","Wozu das nötig ist.","Wozu haben wir das getan?"],"position_rules":["Question word at position 1; or relative pronoun within clause: das Ziel, wozu wir streben"],"example_positions":["Wozu das alles? Das frage ich mich auch."]}
];

window.adverbsC1 = adverbsC1;
