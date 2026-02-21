// nouns-db-a2.js — A2 Elementary German Nouns (comprehensive)
const nounsA2 = [
  {
    "base": "Wohnung", "article": "die", "gender": "f", "level": "A2",
    "plural": "Wohnungen", "plural_with_article": "die Wohnungen",
    "genitive_with_article": "der Wohnung", "n_declension": false, "plural_pattern": "-en",
    "translations": ["apartment", "flat"],
    "tip": "Difference: 'das Haus' = house (whole building); 'die Wohnung' = apartment/flat (part of a building).",
    "examples": ["Ich suche eine Wohnung.", "Die Wohnung hat drei Zimmer.", "Wie viel kostet die Wohnung?"],
    "declension": {
      "nominativ": { "singular": "die Wohnung", "plural": "die Wohnungen" },
      "akkusativ": { "singular": "die Wohnung", "plural": "die Wohnungen" },
      "dativ": { "singular": "der Wohnung", "plural": "den Wohnungen" },
      "genitiv": { "singular": "der Wohnung", "plural": "der Wohnungen" }
    }
  },
  {
    "base": "Bahnhof", "article": "der", "gender": "m", "level": "A2",
    "plural": "Bahnhöfe", "plural_with_article": "die Bahnhöfe",
    "genitive_with_article": "des Bahnhofs", "n_declension": false, "plural_pattern": "Umlaut + -e",
    "translations": ["train station", "railway station"],
    "tip": "Compound: Bahn (railway) + Hof (yard/court). 'Am Bahnhof' = at the train station.",
    "examples": ["Ich warte am Bahnhof.", "Wie komme ich zum Bahnhof?", "Der Bahnhof ist groß."],
    "declension": {
      "nominativ": { "singular": "der Bahnhof", "plural": "die Bahnhöfe" },
      "akkusativ": { "singular": "den Bahnhof", "plural": "die Bahnhöfe" },
      "dativ": { "singular": "dem Bahnhof", "plural": "den Bahnhöfen" },
      "genitiv": { "singular": "des Bahnhofs", "plural": "der Bahnhöfe" }
    }
  },
  {
    "base": "Supermarkt", "article": "der", "gender": "m", "level": "A2",
    "plural": "Supermärkte", "plural_with_article": "die Supermärkte",
    "genitive_with_article": "des Supermarkts", "n_declension": false, "plural_pattern": "Umlaut + -e",
    "translations": ["supermarket", "grocery store"],
    "tip": "Compound noun. 'In den Supermarkt gehen' = to go to the supermarket. 'Im Supermarkt' = in/at the supermarket.",
    "examples": ["Ich kaufe im Supermarkt ein.", "Der Supermarkt schließt um 20 Uhr.", "Gibt es einen Supermarkt in der Nähe?"],
    "declension": {
      "nominativ": { "singular": "der Supermarkt", "plural": "die Supermärkte" },
      "akkusativ": { "singular": "den Supermarkt", "plural": "die Supermärkte" },
      "dativ": { "singular": "dem Supermarkt", "plural": "den Supermärkten" },
      "genitiv": { "singular": "des Supermarkts", "plural": "der Supermärkte" }
    }
  },
  {
    "base": "Restaurant", "article": "das", "gender": "n", "level": "A2",
    "plural": "Restaurants", "plural_with_article": "die Restaurants",
    "genitive_with_article": "des Restaurants", "n_declension": false, "plural_pattern": "-s",
    "translations": ["restaurant"],
    "tip": "Loanword from French, plural -s. 'Im Restaurant essen' = to eat at a restaurant.",
    "examples": ["Wir essen im Restaurant.", "Empfehlen Sie ein gutes Restaurant?", "Das Restaurant hat Tischreservierung."],
    "declension": {
      "nominativ": { "singular": "das Restaurant", "plural": "die Restaurants" },
      "akkusativ": { "singular": "das Restaurant", "plural": "die Restaurants" },
      "dativ": { "singular": "dem Restaurant", "plural": "den Restaurants" },
      "genitiv": { "singular": "des Restaurants", "plural": "der Restaurants" }
    }
  },
  {
    "base": "Urlaub", "article": "der", "gender": "m", "level": "A2",
    "plural": "Urlaube", "plural_with_article": "die Urlaube",
    "genitive_with_article": "des Urlaubs", "n_declension": false, "plural_pattern": "-e",
    "translations": ["vacation", "holiday"],
    "tip": "'Im Urlaub' = on holiday. 'Urlaub machen' = to go on holiday. 'Urlaub nehmen' = to take time off work.",
    "examples": ["Ich mache Urlaub in Spanien.", "Wo verbringst du deinen Urlaub?", "Er hat zwei Wochen Urlaub."],
    "declension": {
      "nominativ": { "singular": "der Urlaub", "plural": "die Urlaube" },
      "akkusativ": { "singular": "den Urlaub", "plural": "die Urlaube" },
      "dativ": { "singular": "dem Urlaub", "plural": "den Urlauben" },
      "genitiv": { "singular": "des Urlaubs", "plural": "der Urlaube" }
    }
  },
  {
    "base": "Termin", "article": "der", "gender": "m", "level": "A2",
    "plural": "Termine", "plural_with_article": "die Termine",
    "genitive_with_article": "des Termins", "n_declension": false, "plural_pattern": "-e",
    "translations": ["appointment", "deadline", "date"],
    "tip": "'Einen Termin machen' = to make an appointment. 'Einen Termin haben' = to have an appointment.",
    "examples": ["Ich habe einen Termin beim Arzt.", "Kannst du den Termin absagen?", "Wann ist der nächste freie Termin?"],
    "declension": {
      "nominativ": { "singular": "der Termin", "plural": "die Termine" },
      "akkusativ": { "singular": "den Termin", "plural": "die Termine" },
      "dativ": { "singular": "dem Termin", "plural": "den Terminen" },
      "genitiv": { "singular": "des Termins", "plural": "der Termine" }
    }
  },
  {
    "base": "Gesundheit", "article": "die", "gender": "f", "level": "A2",
    "plural": "—", "plural_with_article": "— (uncountable)",
    "genitive_with_article": "der Gesundheit", "n_declension": false, "plural_pattern": "no plural",
    "translations": ["health"],
    "tip": "Also said as 'Bless you!' after someone sneezes. No plural. 'Auf Ihre Gesundheit!' = To your health! (toast)",
    "examples": ["Gesundheit!" , "Er achtet auf seine Gesundheit.", "Gesundheit ist das Wichtigste."],
    "declension": {
      "nominativ": { "singular": "die Gesundheit", "plural": "—" },
      "akkusativ": { "singular": "die Gesundheit", "plural": "—" },
      "dativ": { "singular": "der Gesundheit", "plural": "—" },
      "genitiv": { "singular": "der Gesundheit", "plural": "—" }
    }
  },
  {
    "base": "Krankenhaus", "article": "das", "gender": "n", "level": "A2",
    "plural": "Krankenhäuser", "plural_with_article": "die Krankenhäuser",
    "genitive_with_article": "des Krankenhauses", "n_declension": false, "plural_pattern": "Umlaut + -er",
    "translations": ["hospital"],
    "tip": "Compound: krank (sick) + Haus. 'Ins Krankenhaus' = to the hospital. 'Im Krankenhaus' = in the hospital.",
    "examples": ["Er liegt im Krankenhaus.", "Ich muss ins Krankenhaus.", "Das Krankenhaus ist in der Nähe."],
    "declension": {
      "nominativ": { "singular": "das Krankenhaus", "plural": "die Krankenhäuser" },
      "akkusativ": { "singular": "das Krankenhaus", "plural": "die Krankenhäuser" },
      "dativ": { "singular": "dem Krankenhaus", "plural": "den Krankenhäusern" },
      "genitiv": { "singular": "des Krankenhauses", "plural": "der Krankenhäuser" }
    }
  },
  {
    "base": "Arzt", "article": "der", "gender": "m", "level": "A2",
    "plural": "Ärzte", "plural_with_article": "die Ärzte",
    "genitive_with_article": "des Arztes", "n_declension": false, "plural_pattern": "Umlaut + -e",
    "translations": ["doctor (male)", "physician"],
    "tip": "Female: die Ärztin. 'Zum Arzt gehen' = to go to the doctor. 'Mein Arzt' = my doctor.",
    "examples": ["Ich gehe zum Arzt.", "Der Arzt empfiehlt Ruhe.", "Sie ist Ärztin von Beruf."],
    "declension": {
      "nominativ": { "singular": "der Arzt", "plural": "die Ärzte" },
      "akkusativ": { "singular": "den Arzt", "plural": "die Ärzte" },
      "dativ": { "singular": "dem Arzt", "plural": "den Ärzten" },
      "genitiv": { "singular": "des Arztes", "plural": "der Ärzte" }
    }
  },
  {
    "base": "Küche", "article": "die", "gender": "f", "level": "A2",
    "plural": "Küchen", "plural_with_article": "die Küchen",
    "genitive_with_article": "der Küche", "n_declension": false, "plural_pattern": "-n",
    "translations": ["kitchen", "cuisine"],
    "tip": "Means both 'kitchen' (room) and 'cuisine' (style of cooking). 'Deutsche Küche' = German cuisine.",
    "examples": ["Die Küche ist modern.", "Er steht in der Küche.", "Ich liebe die italienische Küche."],
    "declension": {
      "nominativ": { "singular": "die Küche", "plural": "die Küchen" },
      "akkusativ": { "singular": "die Küche", "plural": "die Küchen" },
      "dativ": { "singular": "der Küche", "plural": "den Küchen" },
      "genitiv": { "singular": "der Küche", "plural": "der Küchen" }
    }
  },
  {
    "base": "Woche", "article": "die", "gender": "f", "level": "A2",
    "plural": "Wochen", "plural_with_article": "die Wochen",
    "genitive_with_article": "der Woche", "n_declension": false, "plural_pattern": "-n",
    "translations": ["week"],
    "tip": "'Diese Woche' = this week. 'Letzte Woche' = last week. 'Nächste Woche' = next week. 'In zwei Wochen' = in two weeks.",
    "examples": ["Ich lerne seit zwei Wochen Deutsch.", "Nächste Woche habe ich Urlaub.", "Die Woche hat sieben Tage."],
    "declension": {
      "nominativ": { "singular": "die Woche", "plural": "die Wochen" },
      "akkusativ": { "singular": "die Woche", "plural": "die Wochen" },
      "dativ": { "singular": "der Woche", "plural": "den Wochen" },
      "genitiv": { "singular": "der Woche", "plural": "der Wochen" }
    }
  },
  {
    "base": "Monat", "article": "der", "gender": "m", "level": "A2",
    "plural": "Monate", "plural_with_article": "die Monate",
    "genitive_with_article": "des Monats", "n_declension": false, "plural_pattern": "-e",
    "translations": ["month"],
    "tip": "'Im Monat' = per month / in the month. 'Letzten Monat' = last month. 'Nächsten Monat' = next month.",
    "examples": ["Ich bin seit einem Monat hier.", "Welcher Monat ist dein Lieblingsmonat?", "Er verdient 3000 Euro im Monat."],
    "declension": {
      "nominativ": { "singular": "der Monat", "plural": "die Monate" },
      "akkusativ": { "singular": "den Monat", "plural": "die Monate" },
      "dativ": { "singular": "dem Monat", "plural": "den Monaten" },
      "genitiv": { "singular": "des Monats", "plural": "der Monate" }
    }
  },
  {
    "base": "Reise", "article": "die", "gender": "f", "level": "A2",
    "plural": "Reisen", "plural_with_article": "die Reisen",
    "genitive_with_article": "der Reise", "n_declension": false, "plural_pattern": "-n",
    "translations": ["trip", "journey", "travel"],
    "tip": "'Eine Reise machen' = to take a trip. 'Gute Reise!' = Have a good journey! 'Auf Reisen sein' = to be traveling.",
    "examples": ["Die Reise nach Berlin war schön.", "Wir machen eine Reise nach Spanien.", "Gute Reise!"],
    "declension": {
      "nominativ": { "singular": "die Reise", "plural": "die Reisen" },
      "akkusativ": { "singular": "die Reise", "plural": "die Reisen" },
      "dativ": { "singular": "der Reise", "plural": "den Reisen" },
      "genitiv": { "singular": "der Reise", "plural": "der Reisen" }
    }
  },
  {
    "base": "Brief", "article": "der", "gender": "m", "level": "A2",
    "plural": "Briefe", "plural_with_article": "die Briefe",
    "genitive_with_article": "des Briefes", "n_declension": false, "plural_pattern": "-e",
    "translations": ["letter"],
    "tip": "For postal letters. Email is 'die E-Mail'. 'Einen Brief schreiben' = to write a letter.",
    "examples": ["Ich schreibe einen Brief.", "Er bekommt viele Briefe.", "Kannst du den Brief abschicken?"],
    "declension": {
      "nominativ": { "singular": "der Brief", "plural": "die Briefe" },
      "akkusativ": { "singular": "den Brief", "plural": "die Briefe" },
      "dativ": { "singular": "dem Brief", "plural": "den Briefen" },
      "genitiv": { "singular": "des Briefes", "plural": "der Briefe" }
    }
  },
  {
    "base": "Preis", "article": "der", "gender": "m", "level": "A2",
    "plural": "Preise", "plural_with_article": "die Preise",
    "genitive_with_article": "des Preises", "n_declension": false, "plural_pattern": "-e",
    "translations": ["price", "prize"],
    "tip": "Two meanings: 'price' (cost of something) and 'prize' (award). Context determines meaning.",
    "examples": ["Was ist der Preis?", "Der Preis ist zu hoch.", "Er hat einen Preis gewonnen."],
    "declension": {
      "nominativ": { "singular": "der Preis", "plural": "die Preise" },
      "akkusativ": { "singular": "den Preis", "plural": "die Preise" },
      "dativ": { "singular": "dem Preis", "plural": "den Preisen" },
      "genitiv": { "singular": "des Preises", "plural": "der Preise" }
    }
  },
  {
    "base": "Kleidung", "article": "die", "gender": "f", "level": "A2",
    "plural": "—", "plural_with_article": "— (uncountable)",
    "genitive_with_article": "der Kleidung", "n_declension": false, "plural_pattern": "no plural",
    "translations": ["clothing", "clothes"],
    "tip": "Usually uncountable. Individual items: 'das Kleidungsstück' or specific words (Jacke, Hose, etc.).",
    "examples": ["Er kauft neue Kleidung.", "Die Kleidung hängt im Schrank.", "Welche Kleidung trägst du gern?"],
    "declension": {
      "nominativ": { "singular": "die Kleidung", "plural": "—" },
      "akkusativ": { "singular": "die Kleidung", "plural": "—" },
      "dativ": { "singular": "der Kleidung", "plural": "—" },
      "genitiv": { "singular": "der Kleidung", "plural": "—" }
    }
  },
  {
    "base": "Hobby", "article": "das", "gender": "n", "level": "A2",
    "plural": "Hobbys", "plural_with_article": "die Hobbys",
    "genitive_with_article": "des Hobbys", "n_declension": false, "plural_pattern": "-s",
    "translations": ["hobby"],
    "tip": "English loanword, plural -s. 'Was sind deine Hobbys?' = What are your hobbies?",
    "examples": ["Mein Hobby ist Lesen.", "Was machst du in deiner Freizeit? — Ich habe viele Hobbys.", "Sport ist sein Hobby."],
    "declension": {
      "nominativ": { "singular": "das Hobby", "plural": "die Hobbys" },
      "akkusativ": { "singular": "das Hobby", "plural": "die Hobbys" },
      "dativ": { "singular": "dem Hobby", "plural": "den Hobbys" },
      "genitiv": { "singular": "des Hobbys", "plural": "der Hobbys" }
    }
  },
  {
    "base": "Sport", "article": "der", "gender": "m", "level": "A2",
    "plural": "Sportarten", "plural_with_article": "die Sportarten",
    "genitive_with_article": "des Sports", "n_declension": false, "plural_pattern": "only 'Sportarten' for types",
    "translations": ["sport", "exercise"],
    "tip": "'Sport treiben / machen' = to do sports. Individual sports: Fußball, Tennis, etc. 'Sportarten' for types of sport.",
    "examples": ["Er treibt viel Sport.", "Sport ist gesund.", "Welche Sportarten magst du?"],
    "declension": {
      "nominativ": { "singular": "der Sport", "plural": "die Sportarten" },
      "akkusativ": { "singular": "den Sport", "plural": "die Sportarten" },
      "dativ": { "singular": "dem Sport", "plural": "den Sportarten" },
      "genitiv": { "singular": "des Sports", "plural": "der Sportarten" }
    }
  },
  {
    "base": "Lärm", "article": "der", "gender": "m", "level": "A2",
    "plural": "—", "plural_with_article": "— (uncountable)",
    "genitive_with_article": "des Lärms", "n_declension": false, "plural_pattern": "no plural",
    "translations": ["noise", "racket"],
    "tip": "Usually uncountable. 'Lärm machen' = to make noise. 'Lärm ist störend' = noise is disturbing.",
    "examples": ["Der Lärm ist zu laut.", "Mach keinen Lärm!", "Der Verkehrslärm nervt."],
    "declension": {
      "nominativ": { "singular": "der Lärm", "plural": "—" },
      "akkusativ": { "singular": "den Lärm", "plural": "—" },
      "dativ": { "singular": "dem Lärm", "plural": "—" },
      "genitiv": { "singular": "des Lärms", "plural": "—" }
    }
  },
  {
    "base": "Nachricht", "article": "die", "gender": "f", "level": "A2",
    "plural": "Nachrichten", "plural_with_article": "die Nachrichten",
    "genitive_with_article": "der Nachricht", "n_declension": false, "plural_pattern": "-en",
    "translations": ["message", "news"],
    "tip": "'Nachrichten' (plural) = the news (as in TV news). 'Eine Nachricht' = a message. 'Nachrichten hören/sehen' = to watch/listen to the news.",
    "examples": ["Er schickt mir eine Nachricht.", "Ich schaue die Nachrichten.", "Hast du meine Nachricht bekommen?"],
    "declension": {
      "nominativ": { "singular": "die Nachricht", "plural": "die Nachrichten" },
      "akkusativ": { "singular": "die Nachricht", "plural": "die Nachrichten" },
      "dativ": { "singular": "der Nachricht", "plural": "den Nachrichten" },
      "genitiv": { "singular": "der Nachricht", "plural": "der Nachrichten" }
    }
  },
  {
    "base": "Geburtstag", "article": "der", "gender": "m", "level": "A2",
    "plural": "Geburtstage", "plural_with_article": "die Geburtstage",
    "genitive_with_article": "des Geburtstags", "n_declension": false, "plural_pattern": "-e",
    "translations": ["birthday"],
    "tip": "Compound: Geburt (birth) + Tag (day). 'Herzlichen Glückwunsch zum Geburtstag!' = Happy Birthday!",
    "examples": ["Wann hast du Geburtstag?", "Herzlichen Glückwunsch zum Geburtstag!", "Er feiert seinen Geburtstag."],
    "declension": {
      "nominativ": { "singular": "der Geburtstag", "plural": "die Geburtstage" },
      "akkusativ": { "singular": "den Geburtstag", "plural": "die Geburtstage" },
      "dativ": { "singular": "dem Geburtstag", "plural": "den Geburtstagen" },
      "genitiv": { "singular": "des Geburtstags", "plural": "der Geburtstage" }
    }
  }
,
  {
    "base": "Zeitung",
    "level": "A2",
    "article": "die",
    "plural": "Zeitungen",
    "category": "media",
    "translations": [
      "newspaper"
    ],
    "examples": [
      "Ich lese jeden Morgen die Zeitung.",
      "Hast du die Zeitung schon gelesen?",
      "Die Zeitung kostet 2 Euro."
    ],
    "tip": "Die Zeitung — daily print news. Use with lesen (to read)."
  },
  {
    "base": "Haustier",
    "level": "A2",
    "article": "das",
    "plural": "Haustiere",
    "category": "animals",
    "translations": [
      "pet"
    ],
    "examples": [
      "Haben Sie ein Haustier?",
      "Mein Haustier ist ein Hund.",
      "Wir haben zwei Haustiere: eine Katze und einen Hund."
    ],
    "tip": "Haustier = Haus + Tier (house animal). Very common in everyday conversation."
  },
  {
    "base": "Nachbar",
    "level": "A2",
    "article": "der",
    "plural": "Nachbarn",
    "category": "people",
    "translations": [
      "neighbour"
    ],
    "examples": [
      "Mein Nachbar ist sehr freundlich.",
      "Die Nachbarn machen viel Lärm.",
      "Ich kenne meinen Nachbarn gut."
    ],
    "tip": "der Nachbar / die Nachbarin. Neighbours are often discussed when talking about apartment life in Germany."
  },
  {
    "base": "Geschaeft",
    "level": "A2",
    "article": "das",
    "plural": "Geschaefte",
    "category": "places",
    "translations": [
      "shop",
      "business"
    ],
    "examples": [
      "Das Geschaeft oeffnet um 9 Uhr.",
      "Ich gehe ins Geschaeft.",
      "Die Geschaefte sind sonntags geschlossen."
    ],
    "tip": "Two meanings: 1) a shop/store, 2) business/dealings. Context usually makes it clear.",
    "base_display": "Geschäft",
    "plural_display": "Geschäfte"
  },
  {
    "base": "Jahreszeit",
    "level": "A2",
    "article": "die",
    "plural": "Jahreszeiten",
    "category": "nature",
    "translations": [
      "season"
    ],
    "examples": [
      "Meine Lieblingsjahrzeit ist der Sommer.",
      "Es gibt vier Jahreszeiten.",
      "Im Fruehling bluehen die Blumen."
    ],
    "tip": "Compound: Jahr (year) + Zeit (time). The four seasons: Fruehling, Sommer, Herbst, Winter."
  },
  {
    "base": "Ausflug",
    "level": "A2",
    "article": "der",
    "plural": "Ausfluge",
    "category": "leisure",
    "translations": [
      "excursion",
      "day trip"
    ],
    "examples": [
      "Wir machen einen Ausflug ins Gruene.",
      "Der Ausflug hat viel Spass gemacht.",
      "Plant ihr einen Ausflug am Wochenende?"
    ],
    "tip": "einen Ausflug machen = to go on a day trip. Common weekend activity vocabulary.",
    "plural_display": "Ausflüge"
  },
  {
    "base": "Formular",
    "level": "A2",
    "article": "das",
    "plural": "Formulare",
    "category": "admin",
    "translations": [
      "form"
    ],
    "examples": [
      "Bitte fuellen Sie das Formular aus.",
      "Das Formular muss unterschrieben werden.",
      "Wo bekomme ich dieses Formular?"
    ],
    "tip": "ein Formular ausfuellen = to fill in a form. Unavoidable in German bureaucracy!"
  },
  {
    "base": "Ticket",
    "level": "A2",
    "article": "das",
    "plural": "Tickets",
    "category": "travel",
    "translations": [
      "ticket"
    ],
    "examples": [
      "Ich habe das Ticket online gekauft.",
      "Zeigen Sie mir bitte Ihr Ticket.",
      "Das Ticket kostet 30 Euro."
    ],
    "tip": "Widely used alongside die Fahrkarte (train ticket). Ticket is used for events, flights, and modern transport."
  },
  {
    "base": "Strassenbahnhaltestelle",
    "level": "A2",
    "article": "die",
    "plural": "Haltestellen",
    "category": "transport",
    "translations": [
      "bus stop",
      "tram stop"
    ],
    "examples": [
      "Wo ist die naechste Haltestelle?",
      "Ich warte an der Haltestelle.",
      "Bis zur Haltestelle sind es 5 Minuten."
    ],
    "tip": "Haltestelle = halt (stop) + Stelle (place). Works for bus, tram, and sometimes U-Bahn stops.",
    "base_display": "Haltestelle"
  },
{"base":"Arzt","article":"der","gender":"m","level":"A2","plural":"Ärzte","plural_with_article":"die Ärzte","genitive_with_article":"des Arztes","translations":["doctor","physician"],"examples":["Ich gehe zum Arzt.","Der Arzt verschreibt Tabletten.","Wann haben Sie einen Termin beim Arzt?"],"tip":"Female: die Ärztin. Plural of Ärztin: die Ärztinnen."},
  {"base":"Krankenhaus","article":"das","gender":"n","level":"A2","plural":"Krankenhäuser","plural_with_article":"die Krankenhäuser","genitive_with_article":"des Krankenhauses","translations":["hospital"],"examples":["Er liegt im Krankenhaus.","Das Krankenhaus ist in der Stadtmitte.","Sie arbeitet im Krankenhaus."]},
  {"base":"Apotheke","article":"die","gender":"f","level":"A2","plural":"Apotheken","plural_with_article":"die Apotheken","genitive_with_article":"der Apotheke","translations":["pharmacy","chemist"],"examples":["Ich hole das Rezept in der Apotheke.","Die Apotheke ist um die Ecke.","In Deutschland dürfen nur Apotheken Medikamente verkaufen."]},
  {"base":"Schule","article":"die","gender":"f","level":"A2","plural":"Schulen","plural_with_article":"die Schulen","genitive_with_article":"der Schule","translations":["school"],"examples":["Ich gehe in die Schule.","Die Schule beginnt um acht Uhr.","Meine Schule ist groß."]},
  {"base":"Lehrer","article":"der","gender":"m","level":"A2","plural":"Lehrer","plural_with_article":"die Lehrer","genitive_with_article":"des Lehrers","translations":["teacher"],"examples":["Mein Lehrer ist nett.","Der Lehrer erklärt die Grammatik.","Die Lehrer streiken heute."],"tip":"Female: die Lehrerin. Plural same as singular: der Lehrer → die Lehrer."},
  {"base":"Schüler","article":"der","gender":"m","level":"A2","plural":"Schüler","plural_with_article":"die Schüler","genitive_with_article":"des Schülers","translations":["pupil","student (school)"],"examples":["Die Schüler lernen Englisch.","Er ist ein guter Schüler.","Die Schüler machen Hausaufgaben."],"tip":"Schüler = school student; Student = university student."},
  {"base":"Unterricht","article":"der","gender":"m","level":"A2","plural":"Unterrichte","plural_with_article":"die Unterrichte","genitive_with_article":"des Unterrichts","translations":["lesson","class","instruction"],"examples":["Der Unterricht beginnt um 8 Uhr.","Heute haben wir keinen Unterricht.","Der Unterricht dauert 45 Minuten."]},
  {"base":"Hausaufgabe","article":"die","gender":"f","level":"A2","plural":"Hausaufgaben","plural_with_article":"die Hausaufgaben","genitive_with_article":"der Hausaufgabe","translations":["homework"],"examples":["Ich mache meine Hausaufgaben.","Hast du die Hausaufgaben gemacht?","Die Hausaufgaben sind schwer."]},
  {"base":"Prüfung","article":"die","gender":"f","level":"A2","plural":"Prüfungen","plural_with_article":"die Prüfungen","genitive_with_article":"der Prüfung","translations":["exam","test"],"examples":["Ich habe morgen eine Prüfung.","Die Prüfung war schwer.","Ich lerne für die Prüfung."]},
  {"base":"Bibliothek","article":"die","gender":"f","level":"A2","plural":"Bibliotheken","plural_with_article":"die Bibliotheken","genitive_with_article":"der Bibliothek","translations":["library"],"examples":["Ich gehe in die Bibliothek.","Die Bibliothek hat viele Bücher.","Bücher aus der Bibliothek ausleihen."]},
  {"base":"Kino","article":"das","gender":"n","level":"A2","plural":"Kinos","plural_with_article":"die Kinos","genitive_with_article":"des Kinos","translations":["cinema","movie theatre"],"examples":["Wir gehen ins Kino.","Das Kino ist ausverkauft.","Welcher Film läuft im Kino?"]},
  {"base":"Theater","article":"das","gender":"n","level":"A2","plural":"Theater","plural_with_article":"die Theater","genitive_with_article":"des Theaters","translations":["theatre"],"examples":["Wir gehen ins Theater.","Das Theater ist in der Stadtmitte.","Das Stück im Theater war toll."],"tip":"Plural same as singular: das Theater → die Theater."},
  {"base":"Museum","article":"das","gender":"n","level":"A2","plural":"Museen","plural_with_article":"die Museen","genitive_with_article":"des Museums","translations":["museum"],"examples":["Wir besuchen das Museum.","Das Museum ist dienstags geschlossen.","Das Museum hat viele Ausstellungen."]},
  {"base":"Konzert","article":"das","gender":"n","level":"A2","plural":"Konzerte","plural_with_article":"die Konzerte","genitive_with_article":"des Konzerts","translations":["concert"],"examples":["Ich gehe zu einem Konzert.","Das Konzert war fantastisch.","Wann ist das Konzert?"]},
  {"base":"Sport","article":"der","gender":"m","level":"A2","plural":null,"plural_with_article":null,"genitive_with_article":"des Sports","translations":["sport","exercise"],"examples":["Ich treibe Sport.","Sport ist gesund.","Welchen Sport machst du?"],"tip":"Usually uncountable as a concept: Sport treiben = to do/play sport."},
  {"base":"Fußball","article":"der","gender":"m","level":"A2","plural":"Fußbälle","plural_with_article":"die Fußbälle","genitive_with_article":"des Fußballs","translations":["football","soccer","football (ball)"],"examples":["Ich spiele Fußball.","Das Fußballspiel beginnt um 18 Uhr.","Deutschland hat die WM gewonnen."]},
  {"base":"Mannschaft","article":"die","gender":"f","level":"A2","plural":"Mannschaften","plural_with_article":"die Mannschaften","genitive_with_article":"der Mannschaft","translations":["team"],"examples":["Die Mannschaft gewinnt.","Welche Mannschaft bevorzugst du?","Die Mannschaft trainiert täglich."]},
  {"base":"Spiel","article":"das","gender":"n","level":"A2","plural":"Spiele","plural_with_article":"die Spiele","genitive_with_article":"des Spiels","translations":["game","match","play"],"examples":["Das Spiel ist interessant.","Wir spielen ein Spiel.","Das Spiel endet 2:1."]},
  {"base":"Urlaub","article":"der","gender":"m","level":"A2","plural":"Urlaube","plural_with_article":"die Urlaube","genitive_with_article":"des Urlaubs","translations":["holiday","vacation"],"examples":["Ich fahre im Urlaub nach Italien.","Der Urlaub war schön.","Wie viel Urlaub hast du?"],"tip":"im Urlaub sein = to be on holiday; in den Urlaub fahren = to go on holiday."},
  {"base":"Koffer","article":"der","gender":"m","level":"A2","plural":"Koffer","plural_with_article":"die Koffer","genitive_with_article":"des Koffers","translations":["suitcase"],"examples":["Ich packe den Koffer.","Der Koffer ist schwer.","Mein Koffer ist weg!"],"tip":"Plural same as singular: der Koffer → die Koffer."},
{"base":"Stadtmitte","article":"die","gender":"f","level":"A2","plural":"Stadtmitten","plural_with_article":"die Stadtmitten","genitive_with_article":"der Stadtmitte","translations":["city centre","downtown"],"examples":["Das Hotel ist in der Stadtmitte.","Wir gehen in die Stadtmitte.","Die Stadtmitte ist belebt."]},
  {"base":"Straße","article":"die","gender":"f","level":"A2","plural":"Straßen","plural_with_article":"die Straßen","genitive_with_article":"der Straße","translations":["street","road"],"examples":["Die Straße ist breit.","Überquere die Straße vorsichtig.","In welcher Straße wohnst du?"]},
  {"base":"Kreuzung","article":"die","gender":"f","level":"A2","plural":"Kreuzungen","plural_with_article":"die Kreuzungen","genitive_with_article":"der Kreuzung","translations":["crossroads","intersection"],"examples":["An der Kreuzung links abbiegen.","Die Kreuzung ist gefährlich.","Warte an der Kreuzung."]},
  {"base":"Ampel","article":"die","gender":"f","level":"A2","plural":"Ampeln","plural_with_article":"die Ampeln","genitive_with_article":"der Ampel","translations":["traffic light"],"examples":["Die Ampel ist rot.","Warte bei der Ampel.","Die Ampel wechselt auf Grün."]},
  {"base":"Brücke","article":"die","gender":"f","level":"A2","plural":"Brücken","plural_with_article":"die Brücken","genitive_with_article":"der Brücke","translations":["bridge"],"examples":["Geh über die Brücke.","Die Brücke ist alt.","Die Brücke über den Fluss."]},
  {"base":"Platz","article":"der","gender":"m","level":"A2","plural":"Plätze","plural_with_article":"die Plätze","genitive_with_article":"des Platzes","translations":["square","place","seat","space"],"examples":["Ist hier noch ein Platz frei?","Wir treffen uns auf dem Marktplatz.","Der Platz ist voll."]},
  {"base":"Park","article":"der","gender":"m","level":"A2","plural":"Parks","plural_with_article":"die Parks","genitive_with_article":"des Parks","translations":["park"],"examples":["Wir gehen in den Park.","Der Park ist grün.","Im Park gibt es viele Bäume."]},
  {"base":"Markt","article":"der","gender":"m","level":"A2","plural":"Märkte","plural_with_article":"die Märkte","genitive_with_article":"des Marktes","translations":["market"],"examples":["Ich gehe auf den Markt.","Der Markt ist samstags.","Auf dem Markt gibt es frisches Gemüse."]},
  {"base":"Geschäft","article":"das","gender":"n","level":"A2","plural":"Geschäfte","plural_with_article":"die Geschäfte","genitive_with_article":"des Geschäfts","translations":["shop","store","business"],"examples":["Das Geschäft ist geschlossen.","Ich gehe ins Geschäft.","Welche Geschäfte magst du?"]},
  {"base":"Einkaufszentrum","article":"das","gender":"n","level":"A2","plural":"Einkaufszentren","plural_with_article":"die Einkaufszentren","genitive_with_article":"des Einkaufszentrums","translations":["shopping centre","mall"],"examples":["Wir gehen ins Einkaufszentrum.","Das Einkaufszentrum hat viele Läden.","Im Einkaufszentrum gibt es ein Café."]},
  {"base":"Kasse","article":"die","gender":"f","level":"A2","plural":"Kassen","plural_with_article":"die Kassen","genitive_with_article":"der Kasse","translations":["checkout","cash desk","till"],"examples":["An der Kasse bezahlen.","Welche Kasse ist frei?","Die Schlange an der Kasse ist lang."]},
  {"base":"Preis","article":"der","gender":"m","level":"A2","plural":"Preise","plural_with_article":"die Preise","genitive_with_article":"des Preises","translations":["price","prize"],"examples":["Was kostet das? – Der Preis ist 20 Euro.","Die Preise steigen.","Er hat den ersten Preis gewonnen."]},
  {"base":"Rabatt","article":"der","gender":"m","level":"A2","plural":"Rabatte","plural_with_article":"die Rabatte","genitive_with_article":"des Rabatts","translations":["discount","reduction"],"examples":["Gibt es einen Rabatt?","10% Rabatt auf alles.","Der Rabatt gilt bis Sonntag."]},
  {"base":"Quittung","article":"die","gender":"f","level":"A2","plural":"Quittungen","plural_with_article":"die Quittungen","genitive_with_article":"der Quittung","translations":["receipt"],"examples":["Möchten Sie eine Quittung?","Ich brauche die Quittung.","Die Quittung aufbewahren."]},
  {"base":"Rucksack","article":"der","gender":"m","level":"A2","plural":"Rucksäcke","plural_with_article":"die Rucksäcke","genitive_with_article":"des Rucksacks","translations":["backpack","rucksack"],"examples":["Ich trage einen Rucksack.","Der Rucksack ist schwer.","Pack deinen Rucksack!"]},
  {"base":"Karte","article":"die","gender":"f","level":"A2","plural":"Karten","plural_with_article":"die Karten","genitive_with_article":"der Karte","translations":["card","map","ticket"],"examples":["Kann ich mit Karte zahlen?","Hier ist eine Stadtkarte.","Zwei Karten fürs Konzert bitte."]},
  {"base":"Fahrkarte","article":"die","gender":"f","level":"A2","plural":"Fahrkarten","plural_with_article":"die Fahrkarten","genitive_with_article":"der Fahrkarte","translations":["ticket (transport)"],"examples":["Ich kaufe eine Fahrkarte.","Die Fahrkarte kostet 3 Euro.","Zeigen Sie Ihre Fahrkarte!"]},
  {"base":"Bahnhof","article":"der","gender":"m","level":"A2","plural":"Bahnhöfe","plural_with_article":"die Bahnhöfe","genitive_with_article":"des Bahnhofs","translations":["train station"],"examples":["Ich bin am Bahnhof.","Der Zug fährt vom Bahnhof ab.","Treffen wir uns am Bahnhof."]},
  {"base":"Flugzeug","article":"das","gender":"n","level":"A2","plural":"Flugzeuge","plural_with_article":"die Flugzeuge","genitive_with_article":"des Flugzeugs","translations":["airplane","aircraft"],"examples":["Das Flugzeug landet in einer Stunde.","Ich fliege mit dem Flugzeug.","Das Flugzeug ist groß."]},
  {"base":"Flughafen","article":"der","gender":"m","level":"A2","plural":"Flughäfen","plural_with_article":"die Flughäfen","genitive_with_article":"des Flughafens","translations":["airport"],"examples":["Wir fahren zum Flughafen.","Der Flughafen ist groß.","Das Taxi zum Flughafen."]},
  {"base":"Hotel","article":"das","gender":"n","level":"A2","plural":"Hotels","plural_with_article":"die Hotels","genitive_with_article":"des Hotels","translations":["hotel"],"examples":["Wir wohnen im Hotel.","Das Hotel hat einen Pool.","Ich buche ein Hotelzimmer."]},
  {"base":"Zimmer","article":"das","gender":"n","level":"A2","plural":"Zimmer","plural_with_article":"die Zimmer","genitive_with_article":"des Zimmers","translations":["room"],"examples":["Das Zimmer ist schön.","Ein Zimmer bitte!","Das Zimmer hat einen Balkon."],"tip":"Plural same as singular."},
  {"base":"Rezept","article":"das","gender":"n","level":"A2","plural":"Rezepte","plural_with_article":"die Rezepte","genitive_with_article":"des Rezepts","translations":["prescription","recipe"],"examples":["Ich brauche ein Rezept vom Arzt.","Das Rezept ist kompliziert.","Hast du das Rezept für diesen Kuchen?"],"tip":"das Rezept = both a doctor's prescription AND a cooking recipe."},
  {"base":"Tablette","article":"die","gender":"f","level":"A2","plural":"Tabletten","plural_with_article":"die Tabletten","genitive_with_article":"der Tablette","translations":["tablet","pill"],"examples":["Nimm die Tablette nach dem Essen.","Der Arzt verschreibt Tabletten.","Zweimal täglich eine Tablette."]},
  {"base":"Schmerz","article":"der","gender":"m","level":"A2","plural":"Schmerzen","plural_with_article":"die Schmerzen","genitive_with_article":"des Schmerzes","translations":["pain","ache"],"examples":["Ich habe Schmerzen.","Der Schmerz ist schlimm.","Schmerzmittel helfen bei Schmerzen."]},
  {"base":"Fieber","article":"das","gender":"n","level":"A2","plural":null,"plural_with_article":null,"genitive_with_article":"des Fiebers","translations":["fever","temperature"],"examples":["Ich habe Fieber.","Das Fieber ist hoch.","Das Fieber sinkt."]},
  {"base":"Erkältung","article":"die","gender":"f","level":"A2","plural":"Erkältungen","plural_with_article":"die Erkältungen","genitive_with_article":"der Erkältung","translations":["cold (illness)"],"examples":["Ich habe eine Erkältung.","Bei Erkältung viel trinken.","Die Erkältung dauert eine Woche."]},
  {"base":"Termin","article":"der","gender":"m","level":"A2","plural":"Termine","plural_with_article":"die Termine","genitive_with_article":"des Termins","translations":["appointment","date","deadline"],"examples":["Ich habe einen Arzttermin.","Der Termin ist um 14 Uhr.","Kann ich einen Termin vereinbaren?"]},
  {"base":"Wetter","article":"das","gender":"n","level":"A2","plural":null,"plural_with_article":null,"genitive_with_article":"des Wetters","translations":["weather"],"examples":["Das Wetter ist schön.","Wie ist das Wetter heute?","Das Wetter ändert sich."]},
  {"base":"Sonne","article":"die","gender":"f","level":"A2","plural":"Sonnen","plural_with_article":"die Sonnen","genitive_with_article":"der Sonne","translations":["sun"],"examples":["Die Sonne scheint.","Ich liebe die Sonne.","Steh nicht zu lange in der Sonne."]},
{"base":"Arztpraxis","article":"die","gender":"f","level":"A2","plural":"Arztpraxen","plural_with_article":"die Arztpraxen","genitive_with_article":"der Arztpraxis","translations":["doctor's surgery","medical practice"],"examples":["Ich gehe in die Arztpraxis.","Die Arztpraxis öffnet um 8 Uhr.","Ich habe einen Termin in der Arztpraxis."]},
  {"base":"Rezept","article":"das","gender":"n","level":"A2","plural":"Rezepte","plural_with_article":"die Rezepte","genitive_with_article":"des Rezepts","translations":["prescription","recipe"],"examples":["Der Arzt schreibt ein Rezept.","Das Rezept hole ich in der Apotheke ab.","Hast du ein Rezept für diesen Kuchen?"],"tip":"Rezept = prescription (medical) OR recipe (cooking). Context determines meaning."},
  {"base":"Medikament","article":"das","gender":"n","level":"A2","plural":"Medikamente","plural_with_article":"die Medikamente","genitive_with_article":"des Medikaments","translations":["medicine","medication","drug"],"examples":["Das Medikament hilft gut.","Nimm das Medikament dreimal täglich.","Hast du das Medikament bekommen?"]},
  {"base":"Allergie","article":"die","gender":"f","level":"A2","plural":"Allergien","plural_with_article":"die Allergien","genitive_with_article":"der Allergie","translations":["allergy"],"examples":["Ich habe eine Allergie.","Hast du eine Allergie gegen Nüsse?","Die Allergie macht Probleme im Frühling."]},
  {"base":"Fieber","article":"das","gender":"n","level":"A2","plural":null,"plural_with_article":null,"genitive_with_article":"des Fiebers","translations":["fever","temperature"],"examples":["Ich habe Fieber.","Das Kind hat 39 Grad Fieber.","Fieber ist ein Zeichen von Infektion."],"tip":"Fieber messen = to take one's temperature."},
  {"base":"Schmerz","article":"der","gender":"m","level":"A2","plural":"Schmerzen","plural_with_article":"die Schmerzen","genitive_with_article":"des Schmerzes","translations":["pain","ache"],"examples":["Ich habe Schmerzen.","Der Schmerz ist stark.","Rückenschmerzen sind häufig."],"tip":"Often used in plural: Schmerzen haben = to be in pain. Specific: Kopfschmerzen, Bauchschmerzen..."},
  {"base":"Unfall","article":"der","gender":"m","level":"A2","plural":"Unfälle","plural_with_article":"die Unfälle","genitive_with_article":"des Unfalls","translations":["accident"],"examples":["Es hat einen Unfall gegeben.","Der Unfall war schwer.","Ich hatte einen kleinen Unfall."]},
  {"base":"Notaufnahme","article":"die","gender":"f","level":"A2","plural":"Notaufnahmen","plural_with_article":"die Notaufnahmen","genitive_with_article":"der Notaufnahme","translations":["emergency room","A&E"],"examples":["Ich muss in die Notaufnahme.","Die Notaufnahme ist 24 Stunden geöffnet.","Er wurde in die Notaufnahme gebracht."]},
  {"base":"Versicherung","article":"die","gender":"f","level":"A2","plural":"Versicherungen","plural_with_article":"die Versicherungen","genitive_with_article":"der Versicherung","translations":["insurance"],"examples":["Ich habe eine Versicherung.","Die Versicherung zahlt den Schaden.","Welche Versicherung haben Sie?"]},
  {"base":"Ausweis","article":"der","gender":"m","level":"A2","plural":"Ausweise","plural_with_article":"die Ausweise","genitive_with_article":"des Ausweises","translations":["ID card","identity card"],"examples":["Zeigen Sie bitte Ihren Ausweis.","Ich habe meinen Ausweis dabei.","Der Ausweis ist abgelaufen."]},
  {"base":"Pass","article":"der","gender":"m","level":"A2","plural":"Pässe","plural_with_article":"die Pässe","genitive_with_article":"des Passes","translations":["passport"],"examples":["Ich brauche meinen Pass.","Der Pass ist noch gültig.","Hast du deinen Pass dabei?"]},
  {"base":"Einladung","article":"die","gender":"f","level":"A2","plural":"Einladungen","plural_with_article":"die Einladungen","genitive_with_article":"der Einladung","translations":["invitation"],"examples":["Ich habe eine Einladung bekommen.","Danke für die Einladung!","Ich schreibe Einladungen."]},
  {"base":"Geschenk","article":"das","gender":"n","level":"A2","plural":"Geschenke","plural_with_article":"die Geschenke","genitive_with_article":"des Geschenks","translations":["gift","present"],"examples":["Das ist ein schönes Geschenk.","Ich kaufe ein Geschenk für Mama.","Was soll ich schenken?"]},
  {"base":"Geburtstag","article":"der","gender":"m","level":"A2","plural":"Geburtstage","plural_with_article":"die Geburtstage","genitive_with_article":"des Geburtstags","translations":["birthday"],"examples":["Herzlichen Glückwunsch zum Geburtstag!","Wann hast du Geburtstag?","Wir feiern seinen Geburtstag."]},
  {"base":"Party","article":"die","gender":"f","level":"A2","plural":"Partys","plural_with_article":"die Partys","genitive_with_article":"der Party","translations":["party"],"examples":["Ich gehe auf eine Party.","Die Party war super.","Wann ist die Party?"]},
{"base":"Supermarkt","article":"der","gender":"m","level":"A2","plural":"Supermärkte","plural_with_article":"die Supermärkte","genitive_with_article":"des Supermarkts","translations":["supermarket"],"examples":["Ich gehe in den Supermarkt.","Der Supermarkt ist um die Ecke.","Was brauchst du aus dem Supermarkt?"]},
  {"base":"Markt","article":"der","gender":"m","level":"A2","plural":"Märkte","plural_with_article":"die Märkte","genitive_with_article":"des Markts","translations":["market","marketplace"],"examples":["Ich kaufe auf dem Markt ein.","Der Wochenmarkt ist samstags.","Frisches Gemüse vom Markt."]},
  {"base":"Preis","article":"der","gender":"m","level":"A2","plural":"Preise","plural_with_article":"die Preise","genitive_with_article":"des Preises","translations":["price","prize"],"examples":["Der Preis ist hoch.","Was kostet das? – Der Preis ist 10 Euro.","Er hat den ersten Preis gewonnen."],"tip":"der Preis = price (cost) AND prize (award). Context determines meaning."},
  {"base":"Größe","article":"die","gender":"f","level":"A2","plural":"Größen","plural_with_article":"die Größen","genitive_with_article":"der Größe","translations":["size","height","greatness"],"examples":["Welche Größe haben Sie?","Das ist meine Größe.","In Größe M oder L?"]},
  {"base":"Farbe","article":"die","gender":"f","level":"A2","plural":"Farben","plural_with_article":"die Farben","genitive_with_article":"der Farbe","translations":["colour"],"examples":["Welche Farbe möchten Sie?","Die Farbe gefällt mir nicht.","In welcher Farbe haben Sie das?"]},
  {"base":"Kleidung","article":"die","gender":"f","level":"A2","plural":null,"plural_with_article":null,"genitive_with_article":"der Kleidung","translations":["clothing","clothes"],"examples":["Ich brauche neue Kleidung.","Die Kleidung ist teuer.","Warme Kleidung im Winter."],"tip":"Usually uncountable as a collective noun. Individual items: das Kleidungsstück."},
  {"base":"Hemd","article":"das","gender":"n","level":"A2","plural":"Hemden","plural_with_article":"die Hemden","genitive_with_article":"des Hemds","translations":["shirt"],"examples":["Er trägt ein weißes Hemd.","Das Hemd ist gebügelt.","Welches Hemd nimmst du?"]},
  {"base":"Hose","article":"die","gender":"f","level":"A2","plural":"Hosen","plural_with_article":"die Hosen","genitive_with_article":"der Hose","translations":["trousers","pants"],"examples":["Ich trage eine Jeans.","Die Hose ist zu eng.","Eine neue Hose kaufen."],"tip":"In German, Hose (singular) refers to one pair of trousers. No plural needed for 'a pair of trousers'."},
  {"base":"Jacke","article":"die","gender":"f","level":"A2","plural":"Jacken","plural_with_article":"die Jacken","genitive_with_article":"der Jacke","translations":["jacket","coat"],"examples":["Ich brauche eine Jacke.","Die Jacke ist warm.","Zieh eine Jacke an!"]},
  {"base":"Schuh","article":"der","gender":"m","level":"A2","plural":"Schuhe","plural_with_article":"die Schuhe","genitive_with_article":"des Schuhs","translations":["shoe"],"examples":["Ich kaufe neue Schuhe.","Welche Schuhe trägst du?","Die Schuhe sind unbequem."]},
  {"base":"Wohnung","article":"die","gender":"f","level":"A2","plural":"Wohnungen","plural_with_article":"die Wohnungen","genitive_with_article":"der Wohnung","translations":["flat","apartment"],"examples":["Ich suche eine Wohnung.","Die Wohnung ist schön.","Wie viele Zimmer hat die Wohnung?"]},
  {"base":"Haus","article":"das","gender":"n","level":"A2","plural":"Häuser","plural_with_article":"die Häuser","genitive_with_article":"des Hauses","translations":["house"],"examples":["Wir haben ein Haus.","Das Haus ist groß.","Er baut ein neues Haus."]},
  {"base":"Miete","article":"die","gender":"f","level":"A2","plural":"Mieten","plural_with_article":"die Mieten","genitive_with_article":"der Miete","translations":["rent"],"examples":["Die Miete ist hoch.","Ich zahle 800 Euro Miete.","Die Miete steigt jedes Jahr."]},
  {"base":"Nachbar","article":"der","gender":"m","level":"A2","plural":"Nachbarn","plural_with_article":"die Nachbarn","genitive_with_article":"des Nachbarn","translations":["neighbour"],"examples":["Mein Nachbar ist nett.","Die Nachbarn machen Lärm.","Kennst du deine Nachbarn?"],"tip":"n-declension: der Nachbar → des Nachbarn → dem Nachbarn. Female: die Nachbarin."},
  {"base":"Stockwerk","article":"das","gender":"n","level":"A2","plural":"Stockwerke","plural_with_article":"die Stockwerke","genitive_with_article":"des Stockwerks","translations":["floor","storey"],"examples":["Im dritten Stockwerk wohne ich.","Das Haus hat vier Stockwerke.","Welches Stockwerk?"],"tip":"Erdgeschoss = ground floor; erstes Stockwerk/erste Etage = first floor."},
{"base":"Antwort","article":"die","gender":"f","level":"A2","plural":"Antworten","plural_with_article":"die Antworten","genitive_with_article":"der Antwort","translations":["answer","reply"],"examples":["Ich warte auf eine Antwort.","Die Antwort ist falsch.","Kannst du mir antworten?"]},
  {"base":"Idee","article":"die","gender":"f","level":"A2","plural":"Ideen","plural_with_article":"die Ideen","genitive_with_article":"der Idee","translations":["idea"],"examples":["Das ist eine gute Idee!","Ich habe eine Idee.","Keine Idee."]},
  {"base":"Problem","article":"das","gender":"n","level":"A2","plural":"Probleme","plural_with_article":"die Probleme","genitive_with_article":"des Problems","translations":["problem","issue"],"examples":["Das ist ein Problem.","Kein Problem!","Wir lösen das Problem."]},
  {"base":"Lösung","article":"die","gender":"f","level":"A2","plural":"Lösungen","plural_with_article":"die Lösungen","genitive_with_article":"der Lösung","translations":["solution"],"examples":["Was ist die Lösung?","Ich finde eine Lösung.","Das ist die beste Lösung."]}
];

window.nounsA2 = nounsA2;
