import type { MaturaShortQuestion, MaturaStructuredTask } from './maturaQuestionTypes'

export const maturaShortQuestions: MaturaShortQuestion[] = [
  {
    "id": "p231-1-01",
    "examId": "p231",
    "examCode": "P231",
    "part": 1,
    "questionNumber": 1,
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "short_answer",
    "mode": "kratki_odgovor",
    "category": "programiranje_algoritmi",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Ob pogledu na zaslon lahko vidimo tri barve, ki sestavljajo posamezno slikovno točko (angl. pixel)\nza prikaz. Kateri barvni model je običajno uporabljen pri prikazovanju slike na zaslonu? Odgovor\nnapišite na črto.",
    "options": [],
    "correctOptions": [],
    "answer": "RGB",
    "gradingNotes": " RGB",
    "tags": [
      "kratki_odgovor",
      "programiranje_algoritmi",
      "short_answer"
    ]
  },
  {
    "id": "p231-1-02",
    "examId": "p231",
    "examCode": "P231",
    "part": 1,
    "questionNumber": 2,
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "short_answer",
    "mode": "kratki_odgovor",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Računalnik je v omrežje priključen na 230 V izmenične omrežne napetosti. Katero vrsto napetosti\nrazličnih vrednosti (+3,3 V, +5 V, +12 V, ...) potrebujejo računalniške komponente za svoje\ndelovanje? Odgovor napišite na črto.",
    "options": [],
    "correctOptions": [],
    "answer": "Računalniške komponente potrebujejo\nenosmerno napetost.",
    "gradingNotes": " Računalniške komponente potrebujejo\nenosmerno napetost.",
    "tags": [
      "kratki_odgovor",
      "short_answer",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p231-1-03",
    "examId": "p231",
    "examCode": "P231",
    "part": 1,
    "questionNumber": 3,
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "pretvorbe_enote_racunanje",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Izračunajte vsoto dveh števil, in sicer 11110011[2] + 0×AB[16]. Obkrožite črko pred pravilnim\nodgovorom.",
    "options": [
      {
        "id": "A",
        "text": "ABC[16]"
      },
      {
        "id": "B",
        "text": "19E[16]"
      },
      {
        "id": "C",
        "text": "10101010[2]"
      },
      {
        "id": "D",
        "text": "11111111[2]"
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "pretvorbe_enote_racunanje"
    ]
  },
  {
    "id": "p231-1-04",
    "examId": "p231",
    "examCode": "P231",
    "part": 1,
    "questionNumber": 4,
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": true,
    "prompt": "Če vemo, da vrednost 01000001 glede na kodno tabelo predstavlja črko A, kaj predstavlja\nprikazani vzorec danih vrednosti? Obkrožite črko pred pravilnim odgovorom.\n01000011 01000010 01000001",
    "options": [
      {
        "id": "A",
        "text": "ABC"
      },
      {
        "id": "B",
        "text": "BAC"
      },
      {
        "id": "C",
        "text": "CAB"
      },
      {
        "id": "D",
        "text": "CBA"
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p231-1-05",
    "examId": "p231",
    "examCode": "P231",
    "part": 1,
    "questionNumber": 5,
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "pretvorbe_enote_racunanje",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Podano imamo hitrost prenosa 8 Mb/s. Prenos datoteke je trajal 2 min 53 s. Kako veliko datoteko\nprenašamo? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "1,3 MB"
      },
      {
        "id": "B",
        "text": "173 MB"
      },
      {
        "id": "C",
        "text": "1384 MB"
      },
      {
        "id": "D",
        "text": "1,3 GB"
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "pretvorbe_enote_racunanje"
    ]
  },
  {
    "id": "p231-1-06",
    "examId": "p231",
    "examCode": "P231",
    "part": 1,
    "questionNumber": 6,
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Polde je v računalnik na priključek vrste M.2 dodal novo napravo. Katere vrste napravo je dodal v\nračunalnik? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Trdi disk."
      },
      {
        "id": "B",
        "text": "Grafično kartico."
      },
      {
        "id": "C",
        "text": "Delovni pomnilnik."
      },
      {
        "id": "D",
        "text": "Optično enoto."
      }
    ],
    "correctOptions": [
      "A"
    ],
    "answer": "A",
    "gradingNotes": " A",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p231-1-07",
    "examId": "p231",
    "examCode": "P231",
    "part": 1,
    "questionNumber": 7,
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "pretvorbe_enote_racunanje",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Imamo računalnik, ki v celoti podpira 64-bitno arhitekturo. Vaša stranka nanj namesti 32-bitni\nOS Windows 10 PRO. Čeprav je vgradila 16 GB delovnega pomnilnika (RAM), vidi zgolj 4 GB\ndelovnega pomnilnika. Kaj bi bil lahko glavni razlog za to? Obkrožite črko pred pravilnim\nodgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Niso nameščeni ustrezni gonilniki."
      },
      {
        "id": "B",
        "text": "Procesor ne podpira tolikšne količine delovnega pomnilnika."
      },
      {
        "id": "C",
        "text": "32-bitni OS lahko naslovi zgolj 4 GB pomnilnega prostora."
      },
      {
        "id": "D",
        "text": "Dodati je treba trdi disk vrste SSD."
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "pretvorbe_enote_racunanje"
    ]
  },
  {
    "id": "p231-1-08",
    "examId": "p231",
    "examCode": "P231",
    "part": 1,
    "questionNumber": 8,
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Procesor računalnika (CPE) obdeluje različne vrste ukazov. Katera izmed danih kratic predstavlja\nnabor kompleksnejših ukazov glede na način naslavljanja operandov, sorodnih značilnosti in\nkompleksnost nabora ukazov? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "MISC"
      },
      {
        "id": "B",
        "text": "KISC"
      },
      {
        "id": "C",
        "text": "RISC"
      },
      {
        "id": "D",
        "text": "CISC"
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p231-1-09",
    "examId": "p231",
    "examCode": "P231",
    "part": 1,
    "questionNumber": 9,
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "omrezja",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "V katerem izmed danih primerov bi uporabili omrežni usmerjevalnik? Obkrožite črko pred\npravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Povezovanje računalnikov v lokalno omrežje."
      },
      {
        "id": "B",
        "text": "Ko želimo povezati dodatne naprave v isto lokalno omrežje."
      },
      {
        "id": "C",
        "text": "Povezovanje več različnih omrežij med seboj."
      },
      {
        "id": "D",
        "text": "Spletno gostovanje."
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "omrezja"
    ]
  },
  {
    "id": "p231-1-10",
    "examId": "p231",
    "examCode": "P231",
    "part": 1,
    "questionNumber": 10,
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "omrezja",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Katera programska vrata (angl. port) moramo zapreti na požarnem zidu, če želimo onemogočiti\npošiljanje e-pošte po protokolu smtp? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "23"
      },
      {
        "id": "B",
        "text": "25"
      },
      {
        "id": "C",
        "text": "53"
      },
      {
        "id": "D",
        "text": "80"
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "omrezja"
    ]
  },
  {
    "id": "p231-1-11",
    "examId": "p231",
    "examCode": "P231",
    "part": 1,
    "questionNumber": 11,
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 6
    },
    "points": 2,
    "type": "multiple_choice_multi",
    "mode": "kviz",
    "category": "splosno_racunalnistvo",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Katera izmed naštetih naslovov sta zasebna naslova IP? Obkrožite črki pred pravilnima\nodgovoroma.",
    "options": [
      {
        "id": "A",
        "text": "10.21.143.8"
      },
      {
        "id": "B",
        "text": "25.1.89.4"
      },
      {
        "id": "C",
        "text": "147.19.1.246"
      },
      {
        "id": "D",
        "text": "162.220.112.8"
      },
      {
        "id": "E",
        "text": "192.168.1.100"
      },
      {
        "id": "F",
        "text": "195.72.96.251"
      }
    ],
    "correctOptions": [
      "A",
      "E"
    ],
    "answer": "A\n E",
    "gradingNotes": " A\n E\nVsak pravilen odgovor 1 točka.\nČe kandidat obkroži več kot dva\nodgovora, dobi 0 točk.",
    "tags": [
      "kviz",
      "multiple_choice_multi",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p231-1-12",
    "examId": "p231",
    "examCode": "P231",
    "part": 1,
    "questionNumber": 12,
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "podatkovne_baze_sql",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Ko se konča faza logičnega načrtovanja, je treba oceniti kakovost logičnega modela. Kako se\nimenuje postopek, ki sledi in pomaga pri doseganju boljše kakovosti načrta podatkovne baze?\nObkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Relacija."
      },
      {
        "id": "B",
        "text": "Normalizacija."
      },
      {
        "id": "C",
        "text": "Kardinalnost."
      },
      {
        "id": "D",
        "text": "Integritetne omejitve."
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "podatkovne_baze_sql"
    ]
  },
  {
    "id": "p231-1-13",
    "examId": "p231",
    "examCode": "P231",
    "part": 1,
    "questionNumber": 13,
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "podatkovne_baze_sql",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Stavke SQL delimo v več skupin. V katero skupino uvrščamo stavek DROP? Obkrožite črko pred\npravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "DML"
      },
      {
        "id": "B",
        "text": "DCL"
      },
      {
        "id": "C",
        "text": "TCL"
      },
      {
        "id": "D",
        "text": "DDL"
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "podatkovne_baze_sql"
    ]
  },
  {
    "id": "p231-1-14",
    "examId": "p231",
    "examCode": "P231",
    "part": 1,
    "questionNumber": 14,
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 6
    },
    "points": 2,
    "type": "sql_open",
    "mode": "sql_vaja",
    "category": "podatkovne_baze_sql",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Pri kreiranju tabele s stavkom SQL bi želeli, da je vrednost stolpca ID samoštevilo, stolpec Ime pa\nne sme vključevati prazne vrednosti. Kaj moramo dodati/spremeniti v spodnjem stavku SQL, da\nto dosežemo?\nCREATE TABLE Dijak\n(ID integer _____,\nIme varchar (30) _____,\nPriimek varchar (30)\n);",
    "options": [],
    "correctOptions": [],
    "answer": "auto_increment\n not null",
    "gradingNotes": " auto_increment\n not null\nVsak pravilen odgovor 1 točka.",
    "tags": [
      "podatkovne_baze_sql",
      "sql_open",
      "sql_vaja"
    ]
  },
  {
    "id": "p231-1-15",
    "examId": "p231",
    "examCode": "P231",
    "part": 1,
    "questionNumber": 15,
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 7
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "html_css",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Obkrožite črko pred odgovorom, ki prek kode v jeziku CSS pri vseh odstavkih (<p>) določi modro\nbarvo ozadja.",
    "options": [
      {
        "id": "A",
        "text": ".p {background-color: blue;}"
      },
      {
        "id": "B",
        "text": "#p {background-color: blue;}"
      },
      {
        "id": "C",
        "text": "p {background-color: blue;}"
      },
      {
        "id": "D",
        "text": "p {color: blue;}"
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "html_css",
      "kviz",
      "multiple_choice_single"
    ]
  },
  {
    "id": "p231-1-16",
    "examId": "p231",
    "examCode": "P231",
    "part": 1,
    "questionNumber": 16,
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 7
    },
    "points": 2,
    "type": "html_css_open",
    "mode": "html_css_vaja",
    "category": "html_css",
    "difficulty": "srednje",
    "needsVisualContext": true,
    "prompt": "V dokument HTML želimo vstaviti sliko slika.png, ki je v mapi, v kateri je dokument HTML. Sliki\nželimo nastaviti širino 200 px in nastaviti besedilo »Tukaj je slika«, ki se bo pokazalo, ko bo\nkazalec miške na sliki. Dopolnite spodnjo kodo.\n<_____ src='slika.png' width='200px' _____>",
    "options": [],
    "correctOptions": [],
    "answer": "img\n title=\"Tukaj je slika\"",
    "gradingNotes": " img\n title=\"Tukaj je slika\"\nVsak pravilen odgovor 1 točka.",
    "tags": [
      "html_css",
      "html_css_open",
      "html_css_vaja"
    ]
  },
  {
    "id": "p231-1-17",
    "examId": "p231",
    "examCode": "P231",
    "part": 1,
    "questionNumber": 17,
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 7
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "programiranje_algoritmi",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kolikokrat se v splošnem izvede zanka do while? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Nikoli se ne izvede."
      },
      {
        "id": "B",
        "text": "Izvede se vsaj enkrat."
      },
      {
        "id": "C",
        "text": "Ne izvede se ali se izvede večkrat."
      },
      {
        "id": "D",
        "text": "Vedno se izvede večkrat."
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "programiranje_algoritmi"
    ]
  },
  {
    "id": "p231-1-18",
    "examId": "p231",
    "examCode": "P231",
    "part": 1,
    "questionNumber": 18,
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 7
    },
    "points": 2,
    "type": "calculation",
    "mode": "racunska_naloga",
    "category": "programiranje_algoritmi",
    "difficulty": "srednje",
    "needsVisualContext": true,
    "prompt": "Spodnjo kodo pretvorite v enakovredno zanko while. Podprogram izpis (...) izpiše na standardni\nizhod vrednost vhodne spremenljivke.\nObkrožite izbrani programski/skriptni jezik:\nC, C++, C#, Java, Python, PHP\nC, C#, C++, Java\nPHP\nPython\nfor(int i=15;i>5;i-=2)\n{\nizpis(i);\n}\nfor($i=15;$i>5;$i-=2)\n{\nizpis($i);\n}\nfor i in range(15,5,-2):\nizpis(i)",
    "options": [],
    "correctOptions": [],
    "answer": "int i=15;\nwhile(i>5)\n{\nizpis(i);\ni=i-2;\n}",
    "gradingNotes": "Primer:\n int i=15;\nwhile(i>5)\n{\nizpis(i);\ni=i-2;\n}\nPravilna inicializacija\nspremenljivke in robni pogoj\nzanke 1 točka.\nIzpis spremenljivke in\ndekrementalni korak 1 točka.",
    "tags": [
      "calculation",
      "programiranje_algoritmi",
      "racunska_naloga"
    ]
  },
  {
    "id": "p232-1-01",
    "examId": "p232",
    "examCode": "P232",
    "part": 1,
    "questionNumber": 1,
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "short_answer",
    "mode": "kratki_odgovor",
    "category": "programiranje_algoritmi",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Stranka bi rada tiskala fotografije z brizgalnim tiskalnikom. Kateri barvni model se uporablja pri\ntiskanju? Odgovor zapišite na črto.",
    "options": [],
    "correctOptions": [],
    "answer": "CMY oz. CMYK",
    "gradingNotes": " CMY oz. CMYK",
    "tags": [
      "kratki_odgovor",
      "programiranje_algoritmi",
      "short_answer"
    ]
  },
  {
    "id": "p232-1-02",
    "examId": "p232",
    "examCode": "P232",
    "part": 1,
    "questionNumber": 2,
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "short_answer",
    "mode": "kratki_odgovor",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kako bi s strokovnim terminom skupaj poimenovali oz. zapisali funkcionalnost operacijskega\nsistema ReFS, UFS2 in ext4? Odgovor zapišite na črto.",
    "options": [],
    "correctOptions": [],
    "answer": "datotečni sistemi\nUpoštevamo tudi angleški izraz\n»File System«.",
    "gradingNotes": " datotečni sistemi\nUpoštevamo tudi angleški izraz\n»File System«.",
    "tags": [
      "kratki_odgovor",
      "short_answer",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p232-1-03",
    "examId": "p232",
    "examCode": "P232",
    "part": 1,
    "questionNumber": 3,
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kaj predstavlja pojem ostranjevalne datoteke (angl. pagefile)? Obkrožite črko pred pravilnim\nodgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Datoteka, pripravljena za brisanje."
      },
      {
        "id": "B",
        "text": "Datoteka, shranjena v delovnem pomnilniku."
      },
      {
        "id": "C",
        "text": "Del trdega diska, namenjenega za navidezni pomnilnik."
      },
      {
        "id": "D",
        "text": "Datoteka, shranjena na svetovnem spletu."
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p232-1-04",
    "examId": "p232",
    "examCode": "P232",
    "part": 1,
    "questionNumber": 4,
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Na voljo imamo različne vrste pomnilnikov. Vsebine katerega izmed naštetih pomnilnikov ni\nmogoče spreminjati? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "RAM"
      },
      {
        "id": "B",
        "text": "ROM"
      },
      {
        "id": "C",
        "text": "EPROM"
      },
      {
        "id": "D",
        "text": "EEPROM"
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p232-1-05",
    "examId": "p232",
    "examCode": "P232",
    "part": 1,
    "questionNumber": 5,
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Na katerem izmed naštetih pomnilnih medijev bi lahko izvedli postopek defragmentacije?\nObkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "RAM"
      },
      {
        "id": "B",
        "text": "ROM"
      },
      {
        "id": "C",
        "text": "CD/DVD"
      },
      {
        "id": "D",
        "text": "HDD"
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p232-1-06",
    "examId": "p232",
    "examCode": "P232",
    "part": 1,
    "questionNumber": 6,
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Katero izmed naštetih naprav bi lahko še vedno našli na priključku vrste PS/2? Obkrožite črko\npred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Miško/tipkovnico."
      },
      {
        "id": "B",
        "text": "Grafično tablico."
      },
      {
        "id": "C",
        "text": "Zunanji trdi disk."
      },
      {
        "id": "D",
        "text": "Tiskalnik."
      }
    ],
    "correctOptions": [
      "A"
    ],
    "answer": "A",
    "gradingNotes": " A",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p232-1-07",
    "examId": "p232",
    "examCode": "P232",
    "part": 1,
    "questionNumber": 7,
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Na računalniku želimo vzpostaviti diskovno polje (angl. RAID). Vgradili smo tri trde diske\nkapacitete 1 TB. Stranka želi hitrejše branje in pisanje podatkov ter hkrati večjo zanesljivost ob\nodpovedi katerega izmed diskov. Katero polje RAID bo najbolje zadostilo zahtevam stranke?\nObkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "RAID 0"
      },
      {
        "id": "B",
        "text": "RAID 1"
      },
      {
        "id": "C",
        "text": "RAID 5"
      },
      {
        "id": "D",
        "text": "RAID 10"
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p232-1-08",
    "examId": "p232",
    "examCode": "P232",
    "part": 1,
    "questionNumber": 8,
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Procesor računalnika (CPE) obdeluje različne vrste ukazov. Katera izmed spodnjih kratic pomeni\nnabor enostavnejših ukazov glede na način naslavljanja operandov, sorodne značilnosti in\nkompleksnost nabora ukazov? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "RISC"
      },
      {
        "id": "B",
        "text": "KISC"
      },
      {
        "id": "C",
        "text": "MISC"
      },
      {
        "id": "D",
        "text": "CISC"
      }
    ],
    "correctOptions": [
      "A"
    ],
    "answer": "A",
    "gradingNotes": " A",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p232-1-09",
    "examId": "p232",
    "examCode": "P232",
    "part": 1,
    "questionNumber": 9,
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kateri je ustrezen desetiški zapis omrežne pripone /28? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "255.255.255.128"
      },
      {
        "id": "B",
        "text": "255.255.255.192"
      },
      {
        "id": "C",
        "text": "255.255.255.224"
      },
      {
        "id": "D",
        "text": "255.255.255.240"
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p232-1-10",
    "examId": "p232",
    "examCode": "P232",
    "part": 1,
    "questionNumber": 10,
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "html_css",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Na požarnem zidu je pravilo, da ne prepušča prometa spletnih strani. V kateri plasti modela OSI\nse izvaja to pravilo? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Povezavni."
      },
      {
        "id": "B",
        "text": "Omrežni."
      },
      {
        "id": "C",
        "text": "Transportni."
      },
      {
        "id": "D",
        "text": "Aplikacijski."
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "html_css",
      "kviz",
      "multiple_choice_single"
    ]
  },
  {
    "id": "p232-1-11",
    "examId": "p232",
    "examCode": "P232",
    "part": 1,
    "questionNumber": 11,
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 6
    },
    "points": 2,
    "type": "multiple_choice_multi",
    "mode": "kviz",
    "category": "omrezja",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Obkrožite črki pred protokolom aplikacijske plasti in protokolom transportne plasti, ki sta\nuporabljena pri pošiljanju elektronske pošte od odjemalca na strežnik.",
    "options": [
      {
        "id": "A",
        "text": "IMAP"
      },
      {
        "id": "B",
        "text": "SMTP"
      },
      {
        "id": "C",
        "text": "HTTP"
      },
      {
        "id": "D",
        "text": "TCP"
      },
      {
        "id": "E",
        "text": "POP"
      },
      {
        "id": "F",
        "text": "UDP"
      }
    ],
    "correctOptions": [
      "B",
      "D"
    ],
    "answer": "B\n D",
    "gradingNotes": " B\n D\nVsak pravilen odgovor 1 točka.\nČe kandidat obkroži več kot dva\nodgovora, dobi 0 točk.",
    "tags": [
      "kviz",
      "multiple_choice_multi",
      "omrezja"
    ]
  },
  {
    "id": "p232-1-12",
    "examId": "p232",
    "examCode": "P232",
    "part": 1,
    "questionNumber": 12,
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "sql_open",
    "mode": "sql_vaja",
    "category": "podatkovne_baze_sql",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Zapišite ukaz SQL, ki izbriše tabelo Novatabela.",
    "options": [],
    "correctOptions": [],
    "answer": "DROP TABLE Novatabela",
    "gradingNotes": " DROP TABLE Novatabela",
    "tags": [
      "podatkovne_baze_sql",
      "sql_open",
      "sql_vaja"
    ]
  },
  {
    "id": "p232-1-13",
    "examId": "p232",
    "examCode": "P232",
    "part": 1,
    "questionNumber": 13,
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "podatkovne_baze_sql",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Stavke SQL delimo v več skupin. V katero skupino uvrščamo stavek ALTER TABLE? Obkrožite\nčrko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "DML"
      },
      {
        "id": "B",
        "text": "DDL"
      },
      {
        "id": "C",
        "text": "DCL"
      },
      {
        "id": "D",
        "text": "TCL"
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "podatkovne_baze_sql"
    ]
  },
  {
    "id": "p232-1-14",
    "examId": "p232",
    "examCode": "P232",
    "part": 1,
    "questionNumber": 14,
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 6
    },
    "points": 2,
    "type": "sql_open",
    "mode": "sql_vaja",
    "category": "podatkovne_baze_sql",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Pri kreiranju tabele s stavkom SQL bi želeli, da so vsi dijaki privzeto iz občine Maribor. Kaj\nmoramo dodati/spremeniti v spodnjem stavku SQL, da to dosežemo?\nCREATE TABLE Dijak\n(ID integer smallint(5),\nIme varchar(30),\nPriimek varchar(30),\nPosta varchar _____ );",
    "options": [],
    "correctOptions": [],
    "answer": "DEFAULT 'Maribor'",
    "gradingNotes": " DEFAULT 'Maribor'\nPravilno izbrana omejitev\nDEFAULT 1 točka,\npravilno nastavljena vrednost\nMaribor 1 točka.",
    "tags": [
      "podatkovne_baze_sql",
      "sql_open",
      "sql_vaja"
    ]
  },
  {
    "id": "p232-1-15",
    "examId": "p232",
    "examCode": "P232",
    "part": 1,
    "questionNumber": 15,
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "html_css",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Obkrožite črko pred odgovorom, ki prek kode v jeziku CSS pri vseh glavnih naslovih (<h1>) določi\nrdečo barvo ozadja.",
    "options": [
      {
        "id": "A",
        "text": "#h1 {background-color: red;}"
      },
      {
        "id": "B",
        "text": ".h1 {background-color: red;}"
      },
      {
        "id": "C",
        "text": "h1 {background-color: red;}"
      },
      {
        "id": "D",
        "text": "h1 {color: red;}"
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "html_css",
      "kviz",
      "multiple_choice_single"
    ]
  },
  {
    "id": "p232-1-16",
    "examId": "p232",
    "examCode": "P232",
    "part": 1,
    "questionNumber": 16,
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 7
    },
    "points": 2,
    "type": "html_css_open",
    "mode": "html_css_vaja",
    "category": "html_css",
    "difficulty": "srednje",
    "needsVisualContext": true,
    "prompt": "V dokument HTML želimo vstaviti sliko slika.png, ki je v mapi, v kateri je dokument HTML. Sliki\nželimo nastaviti širino 200 px in besedilo »Tukaj je slika«, ki se bo pokazalo, ko bo miškin kazalec\nna sliki. Dopolnite spodnjo kodo.\n<_____ src='slika.png' width='200px' _____>",
    "options": [],
    "correctOptions": [],
    "answer": "img\n title='Tukaj je slika'",
    "gradingNotes": " img\n title='Tukaj je slika'\nVsak pravilen odgovor 1 točka.",
    "tags": [
      "html_css",
      "html_css_open",
      "html_css_vaja"
    ]
  },
  {
    "id": "p232-1-17",
    "examId": "p232",
    "examCode": "P232",
    "part": 1,
    "questionNumber": 17,
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 7
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "programiranje_algoritmi",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kolikokrat se v splošnem izvede zanka do while? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Nikoli se ne izvede."
      },
      {
        "id": "B",
        "text": "Ne izvede se ali se izvede večkrat."
      },
      {
        "id": "C",
        "text": "Vedno se izvede večkrat."
      },
      {
        "id": "D",
        "text": "Izvede se vsaj enkrat."
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "programiranje_algoritmi"
    ]
  },
  {
    "id": "p232-1-18",
    "examId": "p232",
    "examCode": "P232",
    "part": 1,
    "questionNumber": 18,
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 7
    },
    "points": 2,
    "type": "calculation",
    "mode": "racunska_naloga",
    "category": "programiranje_algoritmi",
    "difficulty": "srednje",
    "needsVisualContext": true,
    "prompt": "Spodnjo kodo pretvorite v enakovreden zapis algoritma z diagramom poteka. Podprogram izpis(...)\nizpiše na standardni izhod vrednost vhodne spremenljivke.\nObkrožite izbrani programski/skriptni jezik: C, C++, C#, Java, Python, PHP\nC, C#, C++, Java\nPHP\nPython\nfor(int i=5;i<20;i+=2)\n{\nizpis(i);\n}\nfor($i=5;$i<20;$i+=2)\n{\nizpis($i);\n}\nfor i in range(5,20,2):\nizpis(i)",
    "options": [],
    "correctOptions": [],
    "answer": "",
    "gradingNotes": "Primer:\n\nPravilna inicializacija\nspremenljivke in robni pogoj\nzanke 1 točka.\nIzpis spremenljivke in\ninkrementalni korak 1 točka.",
    "tags": [
      "calculation",
      "programiranje_algoritmi",
      "racunska_naloga"
    ]
  },
  {
    "id": "p233-1-01",
    "examId": "p233",
    "examCode": "P233",
    "part": 1,
    "questionNumber": 1,
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "short_answer",
    "mode": "kratki_odgovor",
    "category": "pretvorbe_enote_racunanje",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Na ključek USB kapacitete 16 GB želimo shraniti datoteko veliko 15 GiB. Datotečni sistem ključka\nje NTFS. Ali lahko pričakujemo kakšne težave pri shranjevanju datoteke? Odgovor zapišite na\nčrto.",
    "options": [],
    "correctOptions": [],
    "answer": "Da.",
    "gradingNotes": " Da.\nUpošteva se vsaka rešitev, kjer\nkandidat zazna, da bodo težave\npri shranjevanju zaradi velikosti\ndatoteke.",
    "tags": [
      "kratki_odgovor",
      "pretvorbe_enote_racunanje",
      "short_answer"
    ]
  },
  {
    "id": "p233-1-02",
    "examId": "p233",
    "examCode": "P233",
    "part": 1,
    "questionNumber": 2,
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "short_answer",
    "mode": "kratki_odgovor",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Na matični plošči je integrirana grafična kartica s priključkom VGA. Na priključek želimo priključiti\nzaslon LCD, ki ima na voljo zgolj priključek DVI. Pojasnite, kaj lahko svetujete stranki. Odgovor\nzapišite na črto.",
    "options": [],
    "correctOptions": [],
    "answer": "Vgradimo lahko dodatno grafično kartico s\npriključkom DVI.\nUporabimo lahko tudi ustrezen\nzaslon s priključkom VGA ali\nkabel VGA-DVI ali drugo\nustrezno rešitev.",
    "gradingNotes": " Vgradimo lahko dodatno grafično kartico s\npriključkom DVI.\nUporabimo lahko tudi ustrezen\nzaslon s priključkom VGA ali\nkabel VGA-DVI ali drugo\nustrezno rešitev.",
    "tags": [
      "kratki_odgovor",
      "short_answer",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p233-1-03",
    "examId": "p233",
    "examCode": "P233",
    "part": 1,
    "questionNumber": 3,
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "pretvorbe_enote_racunanje",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Ob izbiri zaslona LCD je za stranko pomembno, da bi bila vrednost svetilnosti čim višja. Na\nkatero izmed naštetih enot morate biti glede na zapisano še posebno pozorni? Obkrožite črko\npred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "cd/m2"
      },
      {
        "id": "B",
        "text": "MHz"
      },
      {
        "id": "C",
        "text": "TB"
      },
      {
        "id": "D",
        "text": "W"
      }
    ],
    "correctOptions": [
      "A"
    ],
    "answer": "A",
    "gradingNotes": " A",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "pretvorbe_enote_racunanje"
    ]
  },
  {
    "id": "p233-1-04",
    "examId": "p233",
    "examCode": "P233",
    "part": 1,
    "questionNumber": 4,
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Podano imamo vrednost\n]\n16\n[\n0 1A0\n×\n. Od podane vrednosti odštejete vrednost\n]\n2\n[\n11010001\n.\nKatero vrednost dobimo? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "200"
      },
      {
        "id": "B",
        "text": "207"
      },
      {
        "id": "C",
        "text": "209"
      },
      {
        "id": "D",
        "text": "416"
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p233-1-05",
    "examId": "p233",
    "examCode": "P233",
    "part": 1,
    "questionNumber": 5,
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "programiranje_algoritmi",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Skrbnik računalnika želi na novo namestiti operacijski sistem Linux. Namestitev je na ključku\nUSB, ki je ustrezno pripravljen. Kaj oziroma kje mora spremeniti skrbnik, da bo lahko na novo\nnamestil operacijski sistem prek ključka USB, če se trenutno ob zagonu računalnika samodejno\nzažene trenutni operacijski sistem Windows? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Namestiti mora nov trdi disk."
      },
      {
        "id": "B",
        "text": "Namestitev mora izvesti prek ploščka DVD."
      },
      {
        "id": "C",
        "text": "Izvesti mora nadgradnjo BIOS/UEFI."
      },
      {
        "id": "D",
        "text": "V BIOS/UEFI mora spremeniti zagonsko sekvenco naprav."
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "programiranje_algoritmi"
    ]
  },
  {
    "id": "p233-1-06",
    "examId": "p233",
    "examCode": "P233",
    "part": 1,
    "questionNumber": 6,
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "V računalnik želimo vgraditi dodatno grafično kartico, saj je trenutno na voljo le integrirana\ngrafična kartica. Katero vodilo nam bo omogočilo priklop grafične kartice v novejšem računalniku?\nObkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "AGP"
      },
      {
        "id": "B",
        "text": "PCI"
      },
      {
        "id": "C",
        "text": "PCI-e"
      },
      {
        "id": "D",
        "text": "SATA"
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p233-1-07",
    "examId": "p233",
    "examCode": "P233",
    "part": 1,
    "questionNumber": 7,
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Katero izmed naštetih naprav bi lahko priključili na vodilo tipa M.2? Obkrožite črko pred pravilnim\nodgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Brezžično omrežno kartico."
      },
      {
        "id": "B",
        "text": "RAM."
      },
      {
        "id": "C",
        "text": "Optično enoto."
      },
      {
        "id": "D",
        "text": "Miško."
      }
    ],
    "correctOptions": [
      "A"
    ],
    "answer": "A",
    "gradingNotes": " A",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p233-1-08",
    "examId": "p233",
    "examCode": "P233",
    "part": 1,
    "questionNumber": 8,
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kaj pomeni pojem particija na trdem disku? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Fizična razdelitev trdega diska na več delov."
      },
      {
        "id": "B",
        "text": "Logična razdelitev trdega diska na več delov."
      },
      {
        "id": "C",
        "text": "Prostor na disku, ki je namenjen ostranjevalni datoteki."
      },
      {
        "id": "D",
        "text": "Hitrejši del diska za zapis podatka."
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p233-1-09",
    "examId": "p233",
    "examCode": "P233",
    "part": 1,
    "questionNumber": 9,
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "omrezja",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kateri protokol vsebuje ukaza ping in traceroute (tracert)? Obkrožite črko pred pravilnim\nodgovorom.",
    "options": [
      {
        "id": "A",
        "text": "ARP"
      },
      {
        "id": "B",
        "text": "IMAP"
      },
      {
        "id": "C",
        "text": "ICMP"
      },
      {
        "id": "D",
        "text": "TCP"
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "omrezja"
    ]
  },
  {
    "id": "p233-1-10",
    "examId": "p233",
    "examCode": "P233",
    "part": 1,
    "questionNumber": 10,
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "omrezja",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "S katero vrsto vezave vodnika UTP povežemo dva usmerjevalnika? Obkrožite črko pred pravilnim\nodgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Ravna."
      },
      {
        "id": "B",
        "text": "Obratna."
      },
      {
        "id": "C",
        "text": "Naključna."
      },
      {
        "id": "D",
        "text": "Križna."
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "omrezja"
    ]
  },
  {
    "id": "p233-1-11",
    "examId": "p233",
    "examCode": "P233",
    "part": 1,
    "questionNumber": 11,
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 6
    },
    "points": 2,
    "type": "multiple_choice_multi",
    "mode": "kviz",
    "category": "omrezja",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Katere informacije lahko preberemo iz izpisa ukaza ipconfig na računalniku? Obkrožite črki\npred pravilnima odgovoroma.",
    "options": [
      {
        "id": "A",
        "text": "Naslov IP našega računalnika."
      },
      {
        "id": "B",
        "text": "Naslov IP sosednje naprave."
      },
      {
        "id": "C",
        "text": "Naslov IP omrežnega prehoda."
      },
      {
        "id": "D",
        "text": "Naslov MAC omrežnega prehoda."
      },
      {
        "id": "E",
        "text": "Naslov MAC sosednje naprave."
      },
      {
        "id": "F",
        "text": "Številko vrat za izdani ukaz."
      }
    ],
    "correctOptions": [
      "A",
      "C"
    ],
    "answer": "A\n C",
    "gradingNotes": " A\n C\nVsak pravilen odgovor 1 točka.\nČe kandidat obkroži več kot dva\nodgovora, dobi 0 točk.",
    "tags": [
      "kviz",
      "multiple_choice_multi",
      "omrezja"
    ]
  },
  {
    "id": "p233-1-12",
    "examId": "p233",
    "examCode": "P233",
    "part": 1,
    "questionNumber": 12,
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "sql_open",
    "mode": "sql_vaja",
    "category": "podatkovne_baze_sql",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Prikazati želimo vse podatkovne baze, ki smo jih do sedaj ustvarili. Kateri ukaz SQL omogoča\nprikaz/izpis podatkovnih baz?",
    "options": [],
    "correctOptions": [],
    "answer": "SHOW DATABASES;",
    "gradingNotes": "Primer:\n SHOW DATABASES;\nUpošteva se tudi druga ustrezna\nrešitev.",
    "tags": [
      "podatkovne_baze_sql",
      "sql_open",
      "sql_vaja"
    ]
  },
  {
    "id": "p233-1-13",
    "examId": "p233",
    "examCode": "P233",
    "part": 1,
    "questionNumber": 13,
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "podatkovne_baze_sql",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Stavke SQL delimo na več skupin. V katero skupino uvrščamo stavek INSERT? Obkrožite črko\npred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "DML"
      },
      {
        "id": "B",
        "text": "DCL"
      },
      {
        "id": "C",
        "text": "TCL"
      },
      {
        "id": "D",
        "text": "DDL"
      }
    ],
    "correctOptions": [
      "A"
    ],
    "answer": "A",
    "gradingNotes": " A",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "podatkovne_baze_sql"
    ]
  },
  {
    "id": "p233-1-14",
    "examId": "p233",
    "examCode": "P233",
    "part": 1,
    "questionNumber": 14,
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 6
    },
    "points": 2,
    "type": "sql_open",
    "mode": "sql_vaja",
    "category": "podatkovne_baze_sql",
    "difficulty": "srednje",
    "needsVisualContext": true,
    "prompt": "Pri ustvarjanju tabele Dijak želimo določiti atribut, ki je primarni ključ v drugi tabeli Kraji. Dopolnite\nspodnji stavek SQL in dopolnitvi zapišite na črti.\nCREATE TABLE Dijak\n(ID integer smallint(5),\nIme varchar (30),\nPriimek varchar (30),\nPostna_stevilka integer,\n_____(Postna_stevilka)\nREFERENCES Kraji (_____));",
    "options": [],
    "correctOptions": [],
    "answer": "FOREIGN KEY\n Postna_stevilka",
    "gradingNotes": "Primer:\n FOREIGN KEY\n Postna_stevilka\nPravilna nastavitev omejitve za\ntuj ključ 1 točka,\npoljubno poimenovan atribut\n1 točka.",
    "tags": [
      "podatkovne_baze_sql",
      "sql_open",
      "sql_vaja"
    ]
  },
  {
    "id": "p233-1-15",
    "examId": "p233",
    "examCode": "P233",
    "part": 1,
    "questionNumber": 15,
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 7
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "html_css",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Obkrožite črko pred odgovorom, ki v jeziku HTML označuje začetek vrstice, ki je del tabele.",
    "options": [
      {
        "id": "A",
        "text": "td"
      },
      {
        "id": "B",
        "text": "th"
      },
      {
        "id": "C",
        "text": "tr"
      },
      {
        "id": "D",
        "text": "table"
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "html_css",
      "kviz",
      "multiple_choice_single"
    ]
  },
  {
    "id": "p233-1-16",
    "examId": "p233",
    "examCode": "P233",
    "part": 1,
    "questionNumber": 16,
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 7
    },
    "points": 2,
    "type": "html_css_open",
    "mode": "html_css_vaja",
    "category": "html_css",
    "difficulty": "srednje",
    "needsVisualContext": true,
    "prompt": "V dokument HTML želimo vstaviti povezavo na spletni naslov https://www.ric.si/. Prav tako bi\nradi, da bi se povezava odprla v novem zavihku. Dopolnite spodnjo kodo.\n<a _____=\"https://www.ric.si/\" _____>povezava</a>",
    "options": [],
    "correctOptions": [],
    "answer": "href\n target=\"_blank\"",
    "gradingNotes": " href\n target=\"_blank\"\nVsak pravilen odgovor 1 točka.",
    "tags": [
      "html_css",
      "html_css_open",
      "html_css_vaja"
    ]
  },
  {
    "id": "p233-1-17",
    "examId": "p233",
    "examCode": "P233",
    "part": 1,
    "questionNumber": 17,
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 7
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "programiranje_algoritmi",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kaj predstavlja rezultat izraza 15 % 7 oziroma 15 mod 7 v nekem programskem jeziku?\nObkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Količnik."
      },
      {
        "id": "B",
        "text": "Izračun odstotka."
      },
      {
        "id": "C",
        "text": "Zmnožek."
      },
      {
        "id": "D",
        "text": "Ostanek celoštevilskega deljenja."
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "programiranje_algoritmi"
    ]
  },
  {
    "id": "p233-1-18",
    "examId": "p233",
    "examCode": "P233",
    "part": 1,
    "questionNumber": 18,
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 7
    },
    "points": 2,
    "type": "calculation",
    "mode": "racunska_naloga",
    "category": "programiranje_algoritmi",
    "difficulty": "srednje",
    "needsVisualContext": true,
    "prompt": "Spodnjo kodo pretvorite v enakovredno zanko for. Podprogram izpis (...) izpiše na standardni\nizhod vrednost vhodne spremenljivke.\nObkrožite izbrani programski/skriptni jezik: C, C++, C#, Java, Python, PHP\nC, C#, C++, Java\nPHP\nPython\nint i=16;\nwhile(i > 1)\n{\nizpis(i);\ni=i-2;\n}\n$i=16;\nwhile($i > 1)\n{\nizpis($i);\n$i=$i-2;\n}\ni=16\nwhile(i > 1):\nizpis(i)\ni=i-2",
    "options": [],
    "correctOptions": [],
    "answer": "for(int i=16;i>1;i-=2)\n{\nizpis(i);\n}",
    "gradingNotes": "\nfor(int i=16;i>1;i-=2)\n{\nizpis(i);\n}\nPravilna inicializacija\nspremenljivke in robni pogoj\nzanke 1 točka,\nizpis spremenljivke in\ndekrementalni korak 1 točka.",
    "tags": [
      "calculation",
      "programiranje_algoritmi",
      "racunska_naloga"
    ]
  },
  {
    "id": "p241-1-01",
    "examId": "p241",
    "examCode": "P241",
    "part": 1,
    "questionNumber": 1,
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "short_answer",
    "mode": "kratki_odgovor",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Izvedli smo test delovanja delovnega pomnilnika. Kateri tip delovnega pomnilnika smo testirali?\nOdgovor zapišite na črto.",
    "options": [],
    "correctOptions": [],
    "answer": "DDR2",
    "gradingNotes": " DDR2\nUpošteva se tudi DDR.",
    "tags": [
      "kratki_odgovor",
      "short_answer",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p241-1-02",
    "examId": "p241",
    "examCode": "P241",
    "part": 1,
    "questionNumber": 2,
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "short_answer",
    "mode": "kratki_odgovor",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Katera komponenta računalnika za delovanje uporablja VRAM? Odgovor zapišite na črto.",
    "options": [],
    "correctOptions": [],
    "answer": "grafična kartica",
    "gradingNotes": " grafična kartica\nUpošteva se tudi GPE ali GPU.",
    "tags": [
      "kratki_odgovor",
      "short_answer",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p241-1-03",
    "examId": "p241",
    "examCode": "P241",
    "part": 1,
    "questionNumber": 3,
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "pretvorbe_enote_racunanje",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Jožek nam dostavi novi ključek USB kapacitete 64 GB. Nanj želi kopirati arhivske dokumente\nv skupni datoteki ZIP velikosti 5 GiB. Pri tem naleti na napako, saj naj bi bilo na voljo premalo\nprostora za izvedeno operacijo. Pred poskusom kopiranja je bilo izvedeno formatiranje ključka.\nKaj je razlog, da se kopiranje ne izvede? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Kapaciteta ključka USB je premajhna."
      },
      {
        "id": "B",
        "text": "Hitrost ključka USB je prenizka."
      },
      {
        "id": "C",
        "text": "V postopku formatiranja je bil izbran datotečni sistem NTFS."
      },
      {
        "id": "D",
        "text": "V postopku formatiranja je bil izbran datotečni sistem FAT32."
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "pretvorbe_enote_racunanje"
    ]
  },
  {
    "id": "p241-1-04",
    "examId": "p241",
    "examCode": "P241",
    "part": 1,
    "questionNumber": 4,
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Izvedli smo postopek defragmentacije (angl. defragmentation) trdega diska. Kaj predstavlja\nzapisani postopek? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Izvedemo brisanje vseh podatkov."
      },
      {
        "id": "B",
        "text": "Podatke, ki tvorijo datoteke, zapišemo bliže skupaj na disku (združujemo v bloke)."
      },
      {
        "id": "C",
        "text": "Podatke, ki tvorijo datoteke, razbijemo na manjše dele (razdružujemo v manjše bloke)."
      },
      {
        "id": "D",
        "text": "Povečamo kapaciteto trdega diska."
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p241-1-05",
    "examId": "p241",
    "examCode": "P241",
    "part": 1,
    "questionNumber": 5,
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": true,
    "prompt": "Katero vrsto signala lahko prenaša prikazani vmesnik? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Analogni."
      },
      {
        "id": "B",
        "text": "Digitalni."
      },
      {
        "id": "C",
        "text": "Analogni in digitalni."
      },
      {
        "id": "D",
        "text": "Nič od naštetega."
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p241-1-06",
    "examId": "p241",
    "examCode": "P241",
    "part": 1,
    "questionNumber": 6,
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "V BIOS/UEFI smo izvedli konfiguracijo štirih diskov v diskovnem polju RAID6. Katera izmed\npodanih trditev ni resnična? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "En disk v polju RAID6 je na čakanju (angl. spare disc)."
      },
      {
        "id": "B",
        "text": "Podatki so zavarovani pred izgubo v primeru okvare dveh diskov."
      },
      {
        "id": "C",
        "text": "Polje RAID6 je nadgradnja polja RAID5 z dodatnim paritetnim diskom."
      },
      {
        "id": "D",
        "text": "Polja RAID6 ne moremo preprosto razširiti z novimi diski."
      }
    ],
    "correctOptions": [
      "A"
    ],
    "answer": "A",
    "gradingNotes": " A",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p241-1-07",
    "examId": "p241",
    "examCode": "P241",
    "part": 1,
    "questionNumber": 7,
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "pretvorbe_enote_racunanje",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Stereo zvok z zunanje mešalne mize želimo povezati na vhod računalnika, kjer bomo izvajali\nsnemanje zvoka. Kateri vhod zvočne kartice moramo uporabiti? Obkrožite črko pred pravilnim\nodgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Mikrofonski vhod."
      },
      {
        "id": "B",
        "text": "Linijski vhod."
      },
      {
        "id": "C",
        "text": "Zvočni izhod."
      },
      {
        "id": "D",
        "text": "Nič od naštetega."
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "pretvorbe_enote_racunanje"
    ]
  },
  {
    "id": "p241-1-08",
    "examId": "p241",
    "examCode": "P241",
    "part": 1,
    "questionNumber": 8,
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "S katero izmed naštetih naprav izvaja procesor neposredno komunikacijo?\nObkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Trdi disk."
      },
      {
        "id": "B",
        "text": "Optična enota."
      },
      {
        "id": "C",
        "text": "Delovni pomnilnik (RAM)."
      },
      {
        "id": "D",
        "text": "Tipkovnica."
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p241-1-09",
    "examId": "p241",
    "examCode": "P241",
    "part": 1,
    "questionNumber": 9,
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "pretvorbe_enote_racunanje",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Imamo naslovno območje 189.23.1.. Koliko bitov naslova je namenjeno za gostitelje?\nObkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "24"
      },
      {
        "id": "D",
        "text": "32"
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "pretvorbe_enote_racunanje"
    ]
  },
  {
    "id": "p241-1-10",
    "examId": "p241",
    "examCode": "P241",
    "part": 1,
    "questionNumber": 10,
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "omrezja",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Katera naprava omogoča povezovanje v brezžično omrežje? Obkrožite črko pred pravilnim\nodgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Požarni zid."
      },
      {
        "id": "B",
        "text": "Stikalo."
      },
      {
        "id": "C",
        "text": "Dostopna točka."
      },
      {
        "id": "D",
        "text": "Most."
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "omrezja"
    ]
  },
  {
    "id": "p241-1-11",
    "examId": "p241",
    "examCode": "P241",
    "part": 1,
    "questionNumber": 11,
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 6
    },
    "points": 2,
    "type": "multiple_choice_multi",
    "mode": "kviz",
    "category": "omrezja",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Kaj se nahaja v tabeli MAC na mrežnem stikalu? Obkrožite črki pred pravilnima odgovoroma.",
    "options": [
      {
        "id": "A",
        "text": "Naslov IP."
      },
      {
        "id": "B",
        "text": "Fizična vrata (angl. port)."
      },
      {
        "id": "C",
        "text": "Omrežni prehod."
      },
      {
        "id": "D",
        "text": "Fizični naslov."
      },
      {
        "id": "E",
        "text": "Metrika."
      }
    ],
    "correctOptions": [
      "B",
      "D"
    ],
    "answer": "B in D",
    "gradingNotes": " B in D\nVsak pravilen odgovor 1 točka,\nče kandidat obkroži več kot dva\nodgovora, dobi 0 točk.",
    "tags": [
      "kviz",
      "multiple_choice_multi",
      "omrezja"
    ]
  },
  {
    "id": "p241-1-12",
    "examId": "p241",
    "examCode": "P241",
    "part": 1,
    "questionNumber": 12,
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "podatkovne_baze_sql",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kateri stavki SQL sodijo v skupino ukazov SQL DML? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "CREATE, ALTER, DELETE"
      },
      {
        "id": "B",
        "text": "UPDATE, DELETE, CREATE"
      },
      {
        "id": "C",
        "text": "INSERT, UPDATE, DELETE"
      },
      {
        "id": "D",
        "text": "CREATE, ALTER, DROP"
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "podatkovne_baze_sql"
    ]
  },
  {
    "id": "p241-1-13",
    "examId": "p241",
    "examCode": "P241",
    "part": 1,
    "questionNumber": 13,
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "sql_open",
    "mode": "sql_vaja",
    "category": "podatkovne_baze_sql",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "V katero skupino ukazov spada stavek DROP? Odgovor zapišite na spodnjo črto.",
    "options": [],
    "correctOptions": [],
    "answer": "SQL DDL",
    "gradingNotes": " SQL DDL\nUpošteva se tudi DDL.",
    "tags": [
      "podatkovne_baze_sql",
      "sql_open",
      "sql_vaja"
    ]
  },
  {
    "id": "p241-1-14",
    "examId": "p241",
    "examCode": "P241",
    "part": 1,
    "questionNumber": 14,
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 7
    },
    "points": 2,
    "type": "sql_open",
    "mode": "sql_vaja",
    "category": "podatkovne_baze_sql",
    "difficulty": "srednje",
    "needsVisualContext": true,
    "prompt": "Popravite spodnji stavek SELECT tako, da bo izpisal vse stolpce iz tabele avtomobili. Izpišite\nsamo vrstice, ki nimajo podatka o izpustu CO2. Na spodnje črte na novo zapišite celoten\npopravljeni stavek.\nSELECT naziv_avta\nFROM avtomobili\nWHERE izpust = NULL;",
    "options": [],
    "correctOptions": [],
    "answer": "SELECT *\nFROM avtomobili\nWHERE izpust IS NULL;\nPopravek * namesto naziv_avta\n1 točka, popravek IS namesto =\n1 točka.",
    "gradingNotes": " SELECT *\nFROM avtomobili\nWHERE izpust IS NULL;\nPopravek * namesto naziv_avta\n1 točka, popravek IS namesto =\n1 točka.",
    "tags": [
      "podatkovne_baze_sql",
      "sql_open",
      "sql_vaja"
    ]
  },
  {
    "id": "p241-1-15",
    "examId": "p241",
    "examCode": "P241",
    "part": 1,
    "questionNumber": 15,
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 7
    },
    "points": 1,
    "type": "html_css_open",
    "mode": "html_css_vaja",
    "category": "html_css",
    "difficulty": "srednje",
    "needsVisualContext": true,
    "prompt": "Skicirajte tabelo glede na spodnjo kodo HTML.\n<table border=\"1px\">\n<tr><td>A</td><td rowspan=\"2\">G</td><td>F</td></tr>\n<tr><td>B</td><td>E</td></tr>\n<tr><td>C</td><td colspan=\"2\">D</td></tr>\n</table>\nSkica:",
    "options": [],
    "correctOptions": [],
    "answer": "",
    "gradingNotes": "Primer:\n\nPravilna skica 1 točka.",
    "tags": [
      "html_css",
      "html_css_open",
      "html_css_vaja"
    ]
  },
  {
    "id": "p241-1-16",
    "examId": "p241",
    "examCode": "P241",
    "part": 1,
    "questionNumber": 16,
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 7
    },
    "points": 2,
    "type": "html_css_open",
    "mode": "html_css_vaja",
    "category": "html_css",
    "difficulty": "srednje",
    "needsVisualContext": true,
    "prompt": "V dokument HTML želimo dodati meta oznako za ključne besede spletne strani. Dopolnite\nspodnjo kodo.\n<meta _____=\"keywords\" _____=\"matura, racunalnistvo\">",
    "options": [],
    "correctOptions": [],
    "answer": "name\n content",
    "gradingNotes": " name\n content\nVsak pravilen odgovor 1 točka.",
    "tags": [
      "html_css",
      "html_css_open",
      "html_css_vaja"
    ]
  },
  {
    "id": "p241-1-17",
    "examId": "p241",
    "examCode": "P241",
    "part": 1,
    "questionNumber": 17,
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 7
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "programiranje_algoritmi",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kaj je rezultat izraza 16 % 3 oziroma 16 mod 3 v izbranem programskem/skriptnem jeziku?\nObkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "5,333"
      }
    ],
    "correctOptions": [
      "A"
    ],
    "answer": "A",
    "gradingNotes": " A",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "programiranje_algoritmi"
    ]
  },
  {
    "id": "p241-1-18",
    "examId": "p241",
    "examCode": "P241",
    "part": 1,
    "questionNumber": 18,
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 8
    },
    "points": 2,
    "type": "calculation",
    "mode": "racunska_naloga",
    "category": "programiranje_algoritmi",
    "difficulty": "srednje",
    "needsVisualContext": true,
    "prompt": "Spodnjo kodo pretvorite v enakovredno zanko while v izbranem računalniškem jeziku.\nPodprogram izpis(...) izpiše vrednost vhodne spremenljivke na standardni izhod. Rešitev\nzapišite na spodnje črte.\nC, C#, C++, Java\nPHP\nPython\nfor(int i=11;i>0;i-=3)\n{\nizpis(i);\n}\nfor($i=11;$i>0;$i-=3)\n{\nizpis($i);\n}\nfor i in range(11,0,-3):\nizpis(i)",
    "options": [],
    "correctOptions": [],
    "answer": "int i=11;\nwhile(i > 0)\n{\nizpis(i);\ni=i-3;\n}",
    "gradingNotes": "Primer:\n int i=11;\nwhile(i > 0)\n{\nizpis(i);\ni=i-3;\n}\nUstrezna inicializacija 1 točka,\nustrezen pogoj in dekrementalni\nkorak 1 točka.",
    "tags": [
      "calculation",
      "programiranje_algoritmi",
      "racunska_naloga"
    ]
  },
  {
    "id": "p242-1-01",
    "examId": "p242",
    "examCode": "P242",
    "part": 1,
    "questionNumber": 1,
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "short_answer",
    "mode": "kratki_odgovor",
    "category": "omrezja",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Zapišite primer procesorskosistemskega vodila, ki običajno povezuje CPE in pomnilnik. Odgovor\nzapišite na črto.",
    "options": [],
    "correctOptions": [],
    "answer": "FSB",
    "gradingNotes": " FSB\nPravilni odgovor je tudi QPI ali\nHyperTransport (HT).",
    "tags": [
      "kratki_odgovor",
      "omrezja",
      "short_answer"
    ]
  },
  {
    "id": "p242-1-02",
    "examId": "p242",
    "examCode": "P242",
    "part": 1,
    "questionNumber": 2,
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "short_answer",
    "mode": "kratki_odgovor",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Zapišite primer shranjevanja podatkov, pri katerem se podatki shranijo trajno, vendar zaradi\nzaporednega zapisa do njih dostopamo razmeroma počasi. Odgovor zapišite na črto.",
    "options": [],
    "correctOptions": [],
    "answer": "kaseta",
    "gradingNotes": " kaseta\nPravilni odgovor je tudi magnetni\ntrak.",
    "tags": [
      "kratki_odgovor",
      "short_answer",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p242-1-03",
    "examId": "p242",
    "examCode": "P242",
    "part": 1,
    "questionNumber": 3,
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kaj pomeni izraz kotna vidljivost, kadar se pogovarjamo o specifikaciji zaslona LCD? Obkrožite\nčrko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Najmanjši kot, pri katerem lahko gledamo zaslon s sprejemljivo kakovostjo."
      },
      {
        "id": "B",
        "text": "Optimalni kot, pri katerem lahko gledamo zaslon s sprejemljivo kakovostjo."
      },
      {
        "id": "C",
        "text": "Maksimalni kot, pri katerem lahko gledamo zaslon s sprejemljivo kakovostjo."
      },
      {
        "id": "D",
        "text": "Tovarniško določen kot gledanja na zaslon."
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p242-1-04",
    "examId": "p242",
    "examCode": "P242",
    "part": 1,
    "questionNumber": 4,
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "pretvorbe_enote_racunanje",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Polde je kupil ključek USB s kapaciteto 64 GB. Nanj je želel kopirati datoteko velikosti 6,32 GiB.\nOb tem je prejel obvestilo o napaki, da tega ni mogoče narediti. Kaj bi lahko bil najverjetnejši\nrazlog za to? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Uporabljen je bil datotečni sistem ReFS."
      },
      {
        "id": "B",
        "text": "Uporabljen je bil datotečni sistem ext4."
      },
      {
        "id": "C",
        "text": "Uporabljen je bil datotečni sistem NTFS."
      },
      {
        "id": "D",
        "text": "Uporabljen je bil datotečni sistem FAT32."
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "pretvorbe_enote_racunanje"
    ]
  },
  {
    "id": "p242-1-05",
    "examId": "p242",
    "examCode": "P242",
    "part": 1,
    "questionNumber": 5,
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kaj predstavlja pojem particioniranje trdega diska? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Fizično razdelitev trdega diska na dva ali več delov."
      },
      {
        "id": "B",
        "text": "Logično razdelitev diska na dva ali več delov."
      },
      {
        "id": "C",
        "text": "Hitro brisanje trdega diska."
      },
      {
        "id": "D",
        "text": "Ponovni zapis tabele MBR."
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p242-1-06",
    "examId": "p242",
    "examCode": "P242",
    "part": 1,
    "questionNumber": 6,
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Imamo trdi disk kapacitete 1 TB. Koliko podatkov lahko zapišemo nanj? Obkrožite črko pred\npravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "931,32 GiB"
      },
      {
        "id": "B",
        "text": "1000 GiB"
      },
      {
        "id": "C",
        "text": "1000 MiB"
      },
      {
        "id": "D",
        "text": "1 000 000 000 000 000 b"
      }
    ],
    "correctOptions": [
      "A"
    ],
    "answer": "A",
    "gradingNotes": " A",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p242-1-07",
    "examId": "p242",
    "examCode": "P242",
    "part": 1,
    "questionNumber": 7,
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "programiranje_algoritmi",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kateri barvni model se običajno uporablja v postopku tiska na tiskalniku? Obkrožite črko pred\npravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "RGB"
      },
      {
        "id": "B",
        "text": "HSL"
      },
      {
        "id": "C",
        "text": "HSV"
      },
      {
        "id": "D",
        "text": "CMYK"
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "programiranje_algoritmi"
    ]
  },
  {
    "id": "p242-1-08",
    "examId": "p242",
    "examCode": "P242",
    "part": 1,
    "questionNumber": 8,
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "S pomočjo zvočne kartice izvajamo zajem zvoka. S katero enoto označujemo pogostost zajema\nali frekvenco vzorčenja? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "dB"
      },
      {
        "id": "B",
        "text": "ms"
      },
      {
        "id": "C",
        "text": "Hz"
      },
      {
        "id": "D",
        "text": "ANSI"
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p242-1-09",
    "examId": "p242",
    "examCode": "P242",
    "part": 1,
    "questionNumber": 9,
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Podan je naslov omrežja 200.2.1.. Kateri izmed spodnjih naslovov IP je v obsegu naslovov\ntega omrežja? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "200.2.2.130"
      },
      {
        "id": "B",
        "text": "200.2.1.152"
      },
      {
        "id": "C",
        "text": "202.2.1.140"
      },
      {
        "id": "D",
        "text": "200.2.1.188"
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p242-1-10",
    "examId": "p242",
    "examCode": "P242",
    "part": 1,
    "questionNumber": 10,
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "omrezja",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "V katerem primeru bi v omrežju uporabili omrežno stikalo L2? Obkrožite črko pred pravilnim\nodgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Namesto modema, če ta odpove."
      },
      {
        "id": "B",
        "text": "Za povezavo različnih podomrežij podjetja."
      },
      {
        "id": "C",
        "text": "Za povezovanje računalnikov v omrežje."
      },
      {
        "id": "D",
        "text": "Za filtriranje paketov v omrežju."
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "omrezja"
    ]
  },
  {
    "id": "p242-1-11",
    "examId": "p242",
    "examCode": "P242",
    "part": 1,
    "questionNumber": 11,
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 6
    },
    "points": 2,
    "type": "multiple_choice_multi",
    "mode": "kviz",
    "category": "omrezja",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Katera od spodaj naštetih protokolov sta protokola transportne plasti modela OSI? Obkrožite črki\npred pravilnima odgovoroma.",
    "options": [
      {
        "id": "A",
        "text": "SFTP"
      },
      {
        "id": "B",
        "text": "SMTP"
      },
      {
        "id": "C",
        "text": "HTTP"
      },
      {
        "id": "D",
        "text": "TCP"
      },
      {
        "id": "E",
        "text": "FTP"
      },
      {
        "id": "F",
        "text": "UDP"
      }
    ],
    "correctOptions": [
      "D",
      "F"
    ],
    "answer": "D\n F",
    "gradingNotes": " D\n F\nVsak pravilen odgovor 1 točka.\nČe kandidat obkroži več kot dva\nodgovora, dobi 0 točk.",
    "tags": [
      "kviz",
      "multiple_choice_multi",
      "omrezja"
    ]
  },
  {
    "id": "p242-1-12",
    "examId": "p242",
    "examCode": "P242",
    "part": 1,
    "questionNumber": 12,
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "short_answer",
    "mode": "kratki_odgovor",
    "category": "podatkovne_baze_sql",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Pravkar smo s stavkom CREATE kreirali podatkovno bazo Ljubljana2105, a ker smo\npodatkovno bazo že imeli, bi pravkar kreirano želeli izbrisati. Kateri ukaz bi uporabili? Odgovor\nzapišite na črto.",
    "options": [],
    "correctOptions": [],
    "answer": "DROP DATABASE Ljubljana2105;",
    "gradingNotes": " DROP DATABASE Ljubljana2105;",
    "tags": [
      "kratki_odgovor",
      "podatkovne_baze_sql",
      "short_answer"
    ]
  },
  {
    "id": "p242-1-13",
    "examId": "p242",
    "examCode": "P242",
    "part": 1,
    "questionNumber": 13,
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "podatkovne_baze_sql",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Stavki jezika SQL so razdeljeni v več skupin. Kateri stavki SQL sodijo v skupino DDL? Obkrožite\nčrko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "GRANT, REVOKE, COMMIT"
      },
      {
        "id": "B",
        "text": "UPDATE, DELETE, CREATE"
      },
      {
        "id": "C",
        "text": "SELECT, UPDATE, DELETE"
      },
      {
        "id": "D",
        "text": "CREATE, ALTER, DROP"
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "podatkovne_baze_sql"
    ]
  },
  {
    "id": "p242-1-14",
    "examId": "p242",
    "examCode": "P242",
    "part": 1,
    "questionNumber": 14,
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 6
    },
    "points": 2,
    "type": "multiple_choice_multi",
    "mode": "kviz",
    "category": "podatkovne_baze_sql",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Katera izmed spodnjih podatkovnih tipov sta numerična podatkovna tipa? Obkrožite črki pred\npravilnima odgovoroma.",
    "options": [
      {
        "id": "A",
        "text": "char"
      },
      {
        "id": "B",
        "text": "int"
      },
      {
        "id": "C",
        "text": "varchar"
      },
      {
        "id": "D",
        "text": "date"
      },
      {
        "id": "E",
        "text": "decimal"
      },
      {
        "id": "F",
        "text": "text"
      }
    ],
    "correctOptions": [
      "B",
      "E"
    ],
    "answer": "B\n E",
    "gradingNotes": " B\n E\nVsak pravilen odgovor 1 točka.\nČe kandidat obkroži več kot dva\nodgovora, dobi 0 točk.",
    "tags": [
      "kviz",
      "multiple_choice_multi",
      "podatkovne_baze_sql"
    ]
  },
  {
    "id": "p242-1-15",
    "examId": "p242",
    "examCode": "P242",
    "part": 1,
    "questionNumber": 15,
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "html_css",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Obkrožite črko pred odgovorom, ki označuje začetek neurejenega seznama v spletnem\ndokumentu.",
    "options": [
      {
        "id": "A",
        "text": "<os>"
      },
      {
        "id": "B",
        "text": "<us>"
      },
      {
        "id": "C",
        "text": "<ol>"
      },
      {
        "id": "D",
        "text": "<ul>"
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "html_css",
      "kviz",
      "multiple_choice_single"
    ]
  },
  {
    "id": "p242-1-16",
    "examId": "p242",
    "examCode": "P242",
    "part": 1,
    "questionNumber": 16,
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 7
    },
    "points": 2,
    "type": "html_css_open",
    "mode": "html_css_vaja",
    "category": "html_css",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "V dokument HTML želimo vstaviti povezavo, ki se bo odprla v novem zavihku. Dopolnite spodnjo\nkodo.\n<a _____ ='https://mojaStran.si' _____ >povezava</a>",
    "options": [],
    "correctOptions": [],
    "answer": "href\n target=\"_blank\"",
    "gradingNotes": " href\n target=\"_blank\"\nVsak pravilen odgovor 1 točka.",
    "tags": [
      "html_css",
      "html_css_open",
      "html_css_vaja"
    ]
  },
  {
    "id": "p242-1-17",
    "examId": "p242",
    "examCode": "P242",
    "part": 1,
    "questionNumber": 17,
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 7
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Spremenljivki X, ki je celoštevilskega tipa, želimo prirediti sedemkratnik števila X. Katera izmed\nmožnosti je ustrezna? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "X = X + 6 * X"
      },
      {
        "id": "B",
        "text": "X = X / 7"
      },
      {
        "id": "C",
        "text": "X = X % 7"
      },
      {
        "id": "D",
        "text": "Vse rešitve so ustrezne."
      }
    ],
    "correctOptions": [
      "A"
    ],
    "answer": "A",
    "gradingNotes": " A",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p242-1-18",
    "examId": "p242",
    "examCode": "P242",
    "part": 1,
    "questionNumber": 18,
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 7
    },
    "points": 2,
    "type": "calculation",
    "mode": "racunska_naloga",
    "category": "programiranje_algoritmi",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Spodnji algoritem (diagram poteka) pretvorite v enakovredno kodo z zanko while v poljubnem\nprogramskem/skriptnem jeziku.\nZAČETEK\nA\n121\n=\nA\nA\n11\n=\n-\nNE\nDA\nA\nKONEC\nA ˃ 80",
    "options": [],
    "correctOptions": [],
    "answer": "A = 121\nwhile(A > 80):\nprint(A)\nA -= 11",
    "gradingNotes": "Primer:\n A = 121\nwhile(A > 80):\nprint(A)\nA -= 11\nPravilna inicializacija\nspremenljivke in robni pogoj\nzanke 1 točka.\nIzpis spremenljivke in\ninkrementalni korak 1 točka.",
    "tags": [
      "calculation",
      "programiranje_algoritmi",
      "racunska_naloga"
    ]
  },
  {
    "id": "p243-1-01",
    "examId": "p243",
    "examCode": "P243",
    "part": 1,
    "questionNumber": 1,
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "calculation",
    "mode": "racunska_naloga",
    "category": "pretvorbe_enote_racunanje",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Računalnik ima frekvenco vodila QPI 3200 MHz s širino 32 bitov. Kakšna je prepustnost vodila,\nče upoštevamo podano hitrost? Rešitev naj bo podana v GB/s za enosmerno komunikacijo.\nOdgovor zapišite na črto.",
    "options": [],
    "correctOptions": [],
    "answer": "25,6 GB/s",
    "gradingNotes": " 25,6 GB/s",
    "tags": [
      "calculation",
      "pretvorbe_enote_racunanje",
      "racunska_naloga"
    ]
  },
  {
    "id": "p243-1-02",
    "examId": "p243",
    "examCode": "P243",
    "part": 1,
    "questionNumber": 2,
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "calculation",
    "mode": "racunska_naloga",
    "category": "strojna_oprema_os",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Koliko naprav lahko teoretično priključimo na priključek USB tretje generacije? Odgovor zapišite\nna črto.",
    "options": [],
    "correctOptions": [],
    "answer": "Katerakoli vrednost od 1 do 127.",
    "gradingNotes": " Katerakoli vrednost od 1 do 127.",
    "tags": [
      "calculation",
      "racunska_naloga",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p243-1-03",
    "examId": "p243",
    "examCode": "P243",
    "part": 1,
    "questionNumber": 3,
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kateri izmed datotečnih sistemov načeloma ne potrebuje postopka defragmentacije trdega diska?\nObkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "FAT32"
      },
      {
        "id": "B",
        "text": "NTFS"
      },
      {
        "id": "C",
        "text": "ReFS"
      },
      {
        "id": "D",
        "text": "Ext4"
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p243-1-04",
    "examId": "p243",
    "examCode": "P243",
    "part": 1,
    "questionNumber": 4,
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Katero vodilo bi uporabili na prenosnem računalniku, da bi lahko priključili pogon SSD manjših\ndimenzij? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "SATA"
      },
      {
        "id": "B",
        "text": "eSATA"
      },
      {
        "id": "C",
        "text": "USB"
      },
      {
        "id": "D",
        "text": "mSATA"
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p243-1-05",
    "examId": "p243",
    "examCode": "P243",
    "part": 1,
    "questionNumber": 5,
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kako se imenuje integrirano vezje, ki upravlja s prekinitvami naprav, da se CPE ustrezno\nodzove? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "IOAPIC"
      },
      {
        "id": "B",
        "text": "INT"
      },
      {
        "id": "C",
        "text": "IRQ"
      },
      {
        "id": "D",
        "text": "PCI"
      }
    ],
    "correctOptions": [
      "A"
    ],
    "answer": "A",
    "gradingNotes": " A",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p243-1-06",
    "examId": "p243",
    "examCode": "P243",
    "part": 1,
    "questionNumber": 6,
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Katera izmed naštetih kratic ponazarja kompleksnost nabora ukazov, načina naslavljanja\noperandov in sorodnih značilnosti procesorjev? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "BISC"
      },
      {
        "id": "B",
        "text": "CISC"
      },
      {
        "id": "C",
        "text": "DISC"
      },
      {
        "id": "D",
        "text": "PISC"
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p243-1-07",
    "examId": "p243",
    "examCode": "P243",
    "part": 1,
    "questionNumber": 7,
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Na računalniku želimo vzpostaviti diskovno polje (angl. RAID). Stranki glede na želje in potrebe\npriporočimo diskovno polje tipa RAID 10 (znan tudi kot 1 + 0). Koliko diskov najmanj potrebujemo,\nda bomo vzpostavili takšno diskovno polje? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correctOptions": [
      "A"
    ],
    "answer": "A",
    "gradingNotes": " A",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p243-1-08",
    "examId": "p243",
    "examCode": "P243",
    "part": 1,
    "questionNumber": 8,
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "pretvorbe_enote_racunanje",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Na novo kupljen računalnik ima procesor s hitrostjo 4200 MHz. Koliko časa potrebuje procesor\n(CPE), da izvede en strojni cikel? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "0,1 ns"
      },
      {
        "id": "B",
        "text": "0,24 ns"
      },
      {
        "id": "C",
        "text": "0,42 ns"
      },
      {
        "id": "D",
        "text": "4,2 ms"
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "pretvorbe_enote_racunanje"
    ]
  },
  {
    "id": "p243-1-09",
    "examId": "p243",
    "examCode": "P243",
    "part": 1,
    "questionNumber": 9,
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "omrezja",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kateri izmed naštetih naslovov je zasebni naslov IP? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "147.19.1.246"
      },
      {
        "id": "B",
        "text": "162.220.112.8"
      },
      {
        "id": "C",
        "text": "172.30.1.100"
      },
      {
        "id": "D",
        "text": "195.72.96.251"
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "omrezja"
    ]
  },
  {
    "id": "p243-1-10",
    "examId": "p243",
    "examCode": "P243",
    "part": 1,
    "questionNumber": 10,
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "omrezja",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Na požarnem zidu imamo pravilo, da ne prepušča prometa na določen naslov IP. Na kateri plasti\nmodela OSI se izvaja to pravilo? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Povezavni."
      },
      {
        "id": "B",
        "text": "Omrežni."
      },
      {
        "id": "C",
        "text": "Transportni."
      },
      {
        "id": "D",
        "text": "Aplikacijski."
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "omrezja"
    ]
  },
  {
    "id": "p243-1-11",
    "examId": "p243",
    "examCode": "P243",
    "part": 1,
    "questionNumber": 11,
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 6
    },
    "points": 2,
    "type": "multiple_choice_multi",
    "mode": "kviz",
    "category": "omrezja",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Inženir je dal priporočilo, da v omrežju podjetja onemogočimo promet protokolov HTTP in FTP.\nKaj od spodaj naštetega potem ne bo več delovalo v omrežju podjetja? Obkrožite črki pred\npravilnima odgovoroma.",
    "options": [
      {
        "id": "A",
        "text": "Prejemanje e-pošte."
      },
      {
        "id": "B",
        "text": "Pošiljanje e-pošte."
      },
      {
        "id": "C",
        "text": "Dostop do spletnega strežnika, ki ima nameščen certifikat SSL."
      },
      {
        "id": "D",
        "text": "Pošiljanje na FTP-strežnik podjetja."
      },
      {
        "id": "E",
        "text": "Dostop do portala http://podpora.podjetje.si."
      },
      {
        "id": "F",
        "text": "Dostop do deljenega tiskalnika v omrežju."
      }
    ],
    "correctOptions": [
      "D",
      "E"
    ],
    "answer": "D\n E",
    "gradingNotes": " D\n E\nVsak pravilen odgovor 1 točka.\nČe kandidat obkroži več kot dva\nodgovora, dobi 0 točk.",
    "tags": [
      "kviz",
      "multiple_choice_multi",
      "omrezja"
    ]
  },
  {
    "id": "p243-1-12",
    "examId": "p243",
    "examCode": "P243",
    "part": 1,
    "questionNumber": 12,
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "short_answer",
    "mode": "kratki_odgovor",
    "category": "podatkovne_baze_sql",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Pravkar smo s stavkom CREATE kreirali tabelo Novatabela. Radi bi preverili opis pravkar\nkreirane tabele. Na črto zapišite ustrezen ukaz.",
    "options": [],
    "correctOptions": [],
    "answer": "DESCRIBE Nova tabela;",
    "gradingNotes": "Primer:\n DESCRIBE Nova tabela;",
    "tags": [
      "kratki_odgovor",
      "podatkovne_baze_sql",
      "short_answer"
    ]
  },
  {
    "id": "p243-1-13",
    "examId": "p243",
    "examCode": "P243",
    "part": 1,
    "questionNumber": 13,
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "podatkovne_baze_sql",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Izberite stavek SQL, ki ne vpliva na vsebino podatkov v tabeli. Obkrožite črko pred pravilnim\nodgovorom.",
    "options": [
      {
        "id": "A",
        "text": "DROP"
      },
      {
        "id": "B",
        "text": "DELETE"
      },
      {
        "id": "C",
        "text": "ALTER"
      },
      {
        "id": "D",
        "text": "SELECT"
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "podatkovne_baze_sql"
    ]
  },
  {
    "id": "p243-1-14",
    "examId": "p243",
    "examCode": "P243",
    "part": 1,
    "questionNumber": 14,
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 6
    },
    "points": 2,
    "type": "short_answer",
    "mode": "kratki_odgovor",
    "category": "podatkovne_baze_sql",
    "difficulty": "srednje",
    "needsVisualContext": true,
    "prompt": "V tabeli Novatabela smo ustvarili stolpec EMSO podatkovnega tipa celo število. Spodnjo kodo\ndopolnite tako, da atributu EMSO spremenimo podatkovni tip v varchar(13).\n_____ TABLE Novatabela\nMODIFY EMSO _____",
    "options": [],
    "correctOptions": [],
    "answer": "ALTER\n varchar(13)",
    "gradingNotes": " ALTER\n varchar(13)\nVsak pravilen odgovor 1 točka.",
    "tags": [
      "kratki_odgovor",
      "podatkovne_baze_sql",
      "short_answer"
    ]
  },
  {
    "id": "p243-1-15",
    "examId": "p243",
    "examCode": "P243",
    "part": 1,
    "questionNumber": 15,
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "html_css",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Obkrožite črko pred odgovorom, ki v jeziku HTML označuje začetek neurejenega seznama.",
    "options": [
      {
        "id": "A",
        "text": "li"
      },
      {
        "id": "B",
        "text": "ls"
      },
      {
        "id": "C",
        "text": "ol"
      },
      {
        "id": "D",
        "text": "ul"
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "html_css",
      "kviz",
      "multiple_choice_single"
    ]
  },
  {
    "id": "p243-1-16",
    "examId": "p243",
    "examCode": "P243",
    "part": 1,
    "questionNumber": 16,
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 7
    },
    "points": 2,
    "type": "html_css_open",
    "mode": "html_css_vaja",
    "category": "html_css",
    "difficulty": "srednje",
    "needsVisualContext": true,
    "prompt": "V dokument HTML želimo vstaviti sliko. Prav tako pa bi radi nastavili tudi nadomestno besedilo,\nče slike ni mogoče prikazati. Dopolnite spodnjo kodo.\n<img _____=\"slika.png\" _____=\"Nadomestno besedilo.\">",
    "options": [],
    "correctOptions": [],
    "answer": "src\n alt",
    "gradingNotes": " src\n alt\nVsak pravilen odgovor 1 točka.",
    "tags": [
      "html_css",
      "html_css_open",
      "html_css_vaja"
    ]
  },
  {
    "id": "p243-1-17",
    "examId": "p243",
    "examCode": "P243",
    "part": 1,
    "questionNumber": 17,
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 7
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kateri izmed spodnjih odgovorov ne sodi med osnovne gradnike/elemente diagrama poteka?\nObkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Tok algoritma."
      },
      {
        "id": "B",
        "text": "Zanka."
      },
      {
        "id": "C",
        "text": "Odločitveni blok."
      },
      {
        "id": "D",
        "text": "Vhodni/izhodni blok."
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p243-1-18",
    "examId": "p243",
    "examCode": "P243",
    "part": 1,
    "questionNumber": 18,
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 7
    },
    "points": 2,
    "type": "calculation",
    "mode": "racunska_naloga",
    "category": "programiranje_algoritmi",
    "difficulty": "srednje",
    "needsVisualContext": true,
    "prompt": "Spodnjo kodo pretvorite v enakovredno zanko while. Podprogram izpis(...) izpiše na standardni\nizhod vrednost vhodne spremenljivke.\nObkrožite izbran programski/skriptni jezik.\nC, C++, C#, Java, Python, PHP\nC, C#, C++, Java\nPHP\nPython\nfor(int i=18;i>1;i-=2)\n{\nizpis(i);\n}\nfor(int $i=18;$i>1;$i-=2)\n{\nizpis($i);\n}\nfor i in range(18,1,-2):\nizpis(i)",
    "options": [],
    "correctOptions": [],
    "answer": "int i=18;\nwhile(i>1)\n{\nizpis(i);\ni-=2;\n}",
    "gradingNotes": "Primer:\n int i=18;\nwhile(i>1)\n{\nizpis(i);\ni-=2;\n}\nPravilna inicializacija\nspremenljivke in robni pogoj\nzanke 1 točka.\nIzpis spremenljivke in\ndekrementalni korak (odštevanje\ns številom 2) 1 točka.",
    "tags": [
      "calculation",
      "programiranje_algoritmi",
      "racunska_naloga"
    ]
  },
  {
    "id": "p251-1-01",
    "examId": "p251",
    "examCode": "P251",
    "part": 1,
    "questionNumber": 1,
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "short_answer",
    "mode": "kratki_odgovor",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kaj je značilno za pomnilnike ECC? Odgovor zapišite na spodnje črte.",
    "options": [],
    "correctOptions": [],
    "answer": "Pomnilnik samodejno odkriva in popravlja\nnapake, ki nastanejo med shranjevanjem ali\nprenosom podatkov.",
    "gradingNotes": " Pomnilnik samodejno odkriva in popravlja\nnapake, ki nastanejo med shranjevanjem ali\nprenosom podatkov.\nKot pravilno se upošteva tudi\nkatero drugo značilnost, ki velja\nza pomnilnike ECC.",
    "tags": [
      "kratki_odgovor",
      "short_answer",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p251-1-02",
    "examId": "p251",
    "examCode": "P251",
    "part": 1,
    "questionNumber": 2,
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "short_answer",
    "mode": "kratki_odgovor",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "S kratkim odgovorom pojasnite, kaj izvede ukaz CHKDSK C: /F znotraj ukaznega poziva.\nOdgovor zapišite na spodnje črte.",
    "options": [],
    "correctOptions": [],
    "answer": "Na pogonu C: se izvede testiranje diska.",
    "gradingNotes": " Na pogonu C: se izvede testiranje diska.",
    "tags": [
      "kratki_odgovor",
      "short_answer",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p251-1-03",
    "examId": "p251",
    "examCode": "P251",
    "part": 1,
    "questionNumber": 3,
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "V kateri merski enoti merimo hitrost delovanja centralne procesne enote? Obkrožite črko pred\npravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "bit/s (bit na sekundo)."
      },
      {
        "id": "B",
        "text": "W (watt)."
      },
      {
        "id": "C",
        "text": "V (volt)."
      },
      {
        "id": "D",
        "text": "Hz (hertz)."
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p251-1-04",
    "examId": "p251",
    "examCode": "P251",
    "part": 1,
    "questionNumber": 4,
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kateri odgovor vključuje naprave, ki samo sprejemajo podatke v računalnik? Obkrožite črko pred\npravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Tipkovnica, miška, ethernetni vmesnik."
      },
      {
        "id": "B",
        "text": "Tipkovnica, miška, mikrofon."
      },
      {
        "id": "C",
        "text": "Tiskalnik, zaslon, optični čitalnik."
      },
      {
        "id": "D",
        "text": "Tiskalnik, tipkovnica, optični čitalnik."
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p251-1-05",
    "examId": "p251",
    "examCode": "P251",
    "part": 1,
    "questionNumber": 5,
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "pretvorbe_enote_racunanje",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Proizvajalec podaja kapaciteto trdega diska kot 1 TB. Izračunajte, kolikšna je kapaciteta\npomnilnika binarno. Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "899,99 GiB."
      },
      {
        "id": "B",
        "text": "1 TiB."
      },
      {
        "id": "C",
        "text": "931,32 GiB."
      },
      {
        "id": "D",
        "text": "1,09 TiB."
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "pretvorbe_enote_racunanje"
    ]
  },
  {
    "id": "p251-1-06",
    "examId": "p251",
    "examCode": "P251",
    "part": 1,
    "questionNumber": 6,
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "programiranje_algoritmi",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kaj je funkcija naslovnega vodila? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Prenos navodil med CPE in pomnilnikom."
      },
      {
        "id": "B",
        "text": "Zagotavljanje napajanja za periferne naprave."
      },
      {
        "id": "C",
        "text": "Določanje pomnilniškega naslova za prenos podatkov."
      },
      {
        "id": "D",
        "text": "Nadzor nad pretokom podatkov v centralnoprocesni enoti."
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "programiranje_algoritmi"
    ]
  },
  {
    "id": "p251-1-07",
    "examId": "p251",
    "examCode": "P251",
    "part": 1,
    "questionNumber": 7,
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kaj je treba najprej narediti, če se računalnik ves čas ponovno zaganja? Obkrožite črko pred\npravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Preveriti napajanje in temperaturo CPE."
      },
      {
        "id": "B",
        "text": "Preveriti, ali se je pregrela grafična kartica."
      },
      {
        "id": "C",
        "text": "Ponovno namestiti operacijski sistem."
      },
      {
        "id": "D",
        "text": "Formatirati trdi disk."
      }
    ],
    "correctOptions": [
      "A"
    ],
    "answer": "A",
    "gradingNotes": " A",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p251-1-08",
    "examId": "p251",
    "examCode": "P251",
    "part": 1,
    "questionNumber": 8,
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Na plošče klasičnega trdega diska je nanesena posebna snov, ki omogoča shranjevanje\npodatkov na disk. Kakšna je ta snov? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Snov je iz bakra."
      },
      {
        "id": "B",
        "text": "Snov je feromagnetna."
      },
      {
        "id": "C",
        "text": "Snov je aluminijasta."
      },
      {
        "id": "D",
        "text": "Snov je iz srebra."
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p251-1-09",
    "examId": "p251",
    "examCode": "P251",
    "part": 1,
    "questionNumber": 9,
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kateri ukaz lahko uporabimo za preverjanje dosegljivosti naprave v omrežju? Obkrožite črko pred\npravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Prompt"
      },
      {
        "id": "B",
        "text": "Ping"
      },
      {
        "id": "C",
        "text": "Select"
      },
      {
        "id": "D",
        "text": "Connect"
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p251-1-10",
    "examId": "p251",
    "examCode": "P251",
    "part": 1,
    "questionNumber": 10,
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "html_css",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "V omrežju želimo filtrirati promet spletnih strani. Katera naprava nam po svoji osnovni\nfunkcionalnosti to omogoča? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Usmerjevalnik (angl. router)."
      },
      {
        "id": "B",
        "text": "Stikalo (angl. switch)."
      },
      {
        "id": "C",
        "text": "Požarni zid (angl. firewall)."
      },
      {
        "id": "D",
        "text": "Obnavljalnik (angl. repeater)."
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "html_css",
      "kviz",
      "multiple_choice_single"
    ]
  },
  {
    "id": "p251-1-11",
    "examId": "p251",
    "examCode": "P251",
    "part": 1,
    "questionNumber": 11,
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 6
    },
    "points": 2,
    "type": "multiple_choice_multi",
    "mode": "kviz",
    "category": "omrezja",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Katera dva izmed spodnjih naslovov IPv6 sta del istega podomrežja? Obkrožite črki pred\npravilnima odgovoroma.",
    "options": [
      {
        "id": "A",
        "text": "2023:12:AB:10::"
      },
      {
        "id": "B",
        "text": "2023:12:AB:1::1:"
      },
      {
        "id": "C",
        "text": "2023:1200:AB0:1::"
      },
      {
        "id": "D",
        "text": "2023:1200:AB:1::"
      },
      {
        "id": "E",
        "text": "2023:12:AB:1::A:"
      },
      {
        "id": "F",
        "text": "2023:12:AB0:10::"
      }
    ],
    "correctOptions": [
      "B",
      "E"
    ],
    "answer": "B\n E",
    "gradingNotes": " B\n E\nVsak pravilni odgovor 1 točka.\nČe kandidat obkroži več kot dva\nodgovora, dobi 0 točk.",
    "tags": [
      "kviz",
      "multiple_choice_multi",
      "omrezja"
    ]
  },
  {
    "id": "p251-1-12",
    "examId": "p251",
    "examCode": "P251",
    "part": 1,
    "questionNumber": 12,
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "V bazi podatkov bi radi shranili osebne podatke vseh prebivalcev Slovenije. Kateri atribut je\nnajprimernejša izbira za primarni ključ? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Ime in priimek."
      },
      {
        "id": "B",
        "text": "Datum rojstva."
      },
      {
        "id": "C",
        "text": "Kraj rojstva."
      },
      {
        "id": "D",
        "text": "Davčna številka."
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p251-1-13",
    "examId": "p251",
    "examCode": "P251",
    "part": 1,
    "questionNumber": 13,
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "podatkovne_baze_sql",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kaj naredi naslednji stavek SQL? Obkrožite črko pred pravilnim odgovorom.\nUPDATE izdelki\nSET cena = cena * 0.9\nWHERE kategorija = \"Akcija\";",
    "options": [
      {
        "id": "A",
        "text": "Zniža ceno vseh izdelkov v kategoriji »Akcija« za 10 %."
      },
      {
        "id": "B",
        "text": "Zviša ceno vseh izdelkov v kategoriji »Akcija« za 10 %."
      },
      {
        "id": "C",
        "text": "Nastavi ceno vseh izdelkov v kategoriji »Akcija« na 0,9."
      },
      {
        "id": "D",
        "text": "Za vse izdelke, ki imajo 0,9-kratnik cene, določi kategorijo »Akcija«."
      }
    ],
    "correctOptions": [
      "A"
    ],
    "answer": "A",
    "gradingNotes": " A",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "podatkovne_baze_sql"
    ]
  },
  {
    "id": "p251-1-14",
    "examId": "p251",
    "examCode": "P251",
    "part": 1,
    "questionNumber": 14,
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 6
    },
    "points": 2,
    "type": "sql_open",
    "mode": "sql_vaja",
    "category": "podatkovne_baze_sql",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "S stavkom SQL bi želeli izpisati podatke dijakov, katerih priimek se začne z »A« in imajo podatek\no naslovu. Vstavite manjkajoča izraza, tako da bo stavek pravilen.\nSELECT *\nFROM dijaki\nWHERE (priimek _____ 'A%') AND (naslov _____);",
    "options": [],
    "correctOptions": [],
    "answer": "LIKE\n IS NOT NULL",
    "gradingNotes": " LIKE\n IS NOT NULL\nVsak pravilni odgovor 1 točka.",
    "tags": [
      "podatkovne_baze_sql",
      "sql_open",
      "sql_vaja"
    ]
  },
  {
    "id": "p251-1-15",
    "examId": "p251",
    "examCode": "P251",
    "part": 1,
    "questionNumber": 15,
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 7
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "pretvorbe_enote_racunanje",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Katero barvo predstavlja zapis RGB(0,0,255)? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Modro."
      },
      {
        "id": "B",
        "text": "Zeleno."
      },
      {
        "id": "C",
        "text": "Rdečo."
      },
      {
        "id": "D",
        "text": "Rumeno."
      }
    ],
    "correctOptions": [
      "A"
    ],
    "answer": "A",
    "gradingNotes": " A",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "pretvorbe_enote_racunanje"
    ]
  },
  {
    "id": "p251-1-16",
    "examId": "p251",
    "examCode": "P251",
    "part": 1,
    "questionNumber": 16,
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 7
    },
    "points": 2,
    "type": "html_css_open",
    "mode": "html_css_vaja",
    "category": "html_css",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Katera dva elementa HTML najbolj pogosto obdajata elemente li? Odgovora zapišite na spodnjo\nčrto.\n<?>\n<li>ponedeljek</li>\n<li>sreda</li>\n<li>petek</li>\n</?>",
    "options": [],
    "correctOptions": [],
    "answer": "ul\n ol",
    "gradingNotes": " ul\n ol\nVsak pravilni odgovor 1 točka.",
    "tags": [
      "html_css",
      "html_css_open",
      "html_css_vaja"
    ]
  },
  {
    "id": "p251-1-17",
    "examId": "p251",
    "examCode": "P251",
    "part": 1,
    "questionNumber": 17,
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 7
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Obkrožite črko pred vrstico, ki ne vključuje zanke.",
    "options": [
      {
        "id": "A",
        "text": "else, for, case"
      },
      {
        "id": "B",
        "text": "int, for, string"
      },
      {
        "id": "C",
        "text": "case, while, break"
      },
      {
        "id": "D",
        "text": "float, int, if"
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p251-1-18",
    "examId": "p251",
    "examCode": "P251",
    "part": 1,
    "questionNumber": 18,
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 7
    },
    "points": 2,
    "type": "calculation",
    "mode": "racunska_naloga",
    "category": "programiranje_algoritmi",
    "difficulty": "srednje",
    "needsVisualContext": true,
    "prompt": "Spodnjo kodo pretvorite v enakovredno zanko while. Podprogram izpis(...) izpiše na standardni\nizhod vrednost vhodne spremenljivke.\nC, C#, C++, Java\nPHP\nPython\nfor(int a=10;a<90;a+=10)\n{\nizpis(a);\n}\nfor($a=10;$a<90;$a+=10)\n{\nizpis($a);\n}\nfor a in range(10,90,10):\nizpis(a)",
    "options": [],
    "correctOptions": [],
    "answer": "int a = 10;\nwhile(a < 90)\n{\nizpis(a);\na = a + 10;\n}",
    "gradingNotes": "Primer:\n int a = 10;\nwhile(a < 90)\n{\nizpis(a);\na = a + 10;\n}\nUstrezna inicializacija 1 točka,\nustrezen pogoj in povečevanje\nvrednosti spremenljivke a\n1 točka.",
    "tags": [
      "calculation",
      "programiranje_algoritmi",
      "racunska_naloga"
    ]
  },
  {
    "id": "p252-1-01",
    "examId": "p252",
    "examCode": "P252",
    "part": 1,
    "questionNumber": 1,
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "calculation",
    "mode": "racunska_naloga",
    "category": "pretvorbe_enote_racunanje",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Procesor RISC deluje s taktom 3,0 GHz. Koliko ukazov lahko procesor izvede v 3 ns? Odgovor\nnapišite na črto.",
    "options": [],
    "correctOptions": [],
    "answer": "9",
    "gradingNotes": " 9",
    "tags": [
      "calculation",
      "pretvorbe_enote_racunanje",
      "racunska_naloga"
    ]
  },
  {
    "id": "p252-1-02",
    "examId": "p252",
    "examCode": "P252",
    "part": 1,
    "questionNumber": 2,
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "short_answer",
    "mode": "kratki_odgovor",
    "category": "pretvorbe_enote_racunanje",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kolikšen je povprečni dostopni čas trdega diska, ki se vrti s 5400 rpm in ima povprečni iskalni čas\n4 ms? Odgovor napišite na črto.",
    "options": [],
    "correctOptions": [],
    "answer": "9,56 ms",
    "gradingNotes": " 9,56 ms\nUpošteva se tudi rezultat\n0,00956 s.",
    "tags": [
      "kratki_odgovor",
      "pretvorbe_enote_racunanje",
      "short_answer"
    ]
  },
  {
    "id": "p252-1-03",
    "examId": "p252",
    "examCode": "P252",
    "part": 1,
    "questionNumber": 3,
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kaj pomeni izraz odzivni čas pri monitorjih? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Čas, potreben za vklop monitorja."
      },
      {
        "id": "B",
        "text": "Čas, potreben za odziv na ukaze z miško."
      },
      {
        "id": "C",
        "text": "Čas, potreben za prikaz slike na celotnem zaslonu."
      },
      {
        "id": "D",
        "text": "Čas, potreben za prehod iz ene barve v drugo."
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p252-1-04",
    "examId": "p252",
    "examCode": "P252",
    "part": 1,
    "questionNumber": 4,
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "html_css",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kaj pomeni izraz »bad sector« v povezavi s trdim diskom? Obkrožite črko pred pravilnim\nodgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Sektorji, ki so počasnejši pri branju podatkov."
      },
      {
        "id": "B",
        "text": "Območje diska, kjer je shranjena varnostna kopija in do katerega ni mogoče dostopati."
      },
      {
        "id": "C",
        "text": "Poškodovani sektorji, ki ne morejo zanesljivo shranjevati podatkov."
      },
      {
        "id": "D",
        "text": "Novi sektorji, ki so še neuporabljeni."
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "html_css",
      "kviz",
      "multiple_choice_single"
    ]
  },
  {
    "id": "p252-1-05",
    "examId": "p252",
    "examCode": "P252",
    "part": 1,
    "questionNumber": 5,
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "pretvorbe_enote_racunanje",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kapaciteta trdega diska je 931,32 GiB. Izračunajte, kolikšna je kapaciteta pomnilnika, ki jo podaja\nproizvajalec. Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "900 GB."
      },
      {
        "id": "B",
        "text": "1 TB."
      },
      {
        "id": "C",
        "text": "1100 GB."
      },
      {
        "id": "D",
        "text": "1,09 TB."
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "pretvorbe_enote_racunanje"
    ]
  },
  {
    "id": "p252-1-06",
    "examId": "p252",
    "examCode": "P252",
    "part": 1,
    "questionNumber": 6,
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kateri priključek omogoča povezovanje različnih zunanjih naprav in omogoča prenos podatkov,\nnapajanje ter video izhod? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "USB-C."
      },
      {
        "id": "B",
        "text": "HDMI."
      },
      {
        "id": "C",
        "text": "USB 2.0."
      },
      {
        "id": "D",
        "text": "DisplayPort."
      }
    ],
    "correctOptions": [
      "A"
    ],
    "answer": "A",
    "gradingNotes": " A",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p252-1-07",
    "examId": "p252",
    "examCode": "P252",
    "part": 1,
    "questionNumber": 7,
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kateri del matične plošče je ob izgubi napajanja odgovoren za ohranjanje nastavitev sistema, kot\nso datum, ura in vrstni red zagona naprav? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Čip BIOS/UEFI."
      },
      {
        "id": "B",
        "text": "Baterija CMOS."
      },
      {
        "id": "C",
        "text": "VRM (angl. voltage regulator module)."
      },
      {
        "id": "D",
        "text": "Severni most."
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p252-1-08",
    "examId": "p252",
    "examCode": "P252",
    "part": 1,
    "questionNumber": 8,
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kateri izraz označuje tip pomnilnika, ki jih SSD-ji uporabljajo za shranjevanje podatkov?\nObkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "DDR3 SDRAM."
      },
      {
        "id": "B",
        "text": "EPROM."
      },
      {
        "id": "C",
        "text": "Bliskovni pomnilnik NAND."
      },
      {
        "id": "D",
        "text": "SDRAM."
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p252-1-09",
    "examId": "p252",
    "examCode": "P252",
    "part": 1,
    "questionNumber": 9,
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "omrezja",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Imamo omrežje 200.2.1.. Kateri izmed spodnjih naslovov IP je prvi uporabni naslov IP\nv omrežju, ki ga dodelimo privzetemu prehodu (angl. default gateway)? Obkrožite črko pred\npravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "200.2.2.1"
      },
      {
        "id": "B",
        "text": "200.2.1.64"
      },
      {
        "id": "C",
        "text": "202.2.1.27"
      },
      {
        "id": "D",
        "text": "200.2.1.65"
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "omrezja"
    ]
  },
  {
    "id": "p252-1-10",
    "examId": "p252",
    "examCode": "P252",
    "part": 1,
    "questionNumber": 10,
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "omrezja",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Katera naprava za odločitev o posredovanju podatkov uporabi naslov MAC? Obkrožite črko pred\npravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Usmerjevalnik (angl. router)."
      },
      {
        "id": "B",
        "text": "Stikalo (angl. switch)."
      },
      {
        "id": "C",
        "text": "Zvezdišče (angl. hub)."
      },
      {
        "id": "D",
        "text": "Obnavljalnik (angl. repeater)."
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "omrezja"
    ]
  },
  {
    "id": "p252-1-11",
    "examId": "p252",
    "examCode": "P252",
    "part": 1,
    "questionNumber": 11,
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 6
    },
    "points": 2,
    "type": "multiple_choice_multi",
    "mode": "kviz",
    "category": "html_css",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Z ukazom ping smo preverili dosegljivost spletnega strežnika in dobili uspešen odziv, spletna\nstran pa se nam ne prikaže. Na katerih slojih modela OSI zagotovo ni težav? Obkrožite črki pred\npravilnima odgovoroma.",
    "options": [
      {
        "id": "A",
        "text": "Na fizičnem."
      },
      {
        "id": "B",
        "text": "Na povezavnem."
      },
      {
        "id": "C",
        "text": "Na transportnem."
      },
      {
        "id": "D",
        "text": "Na sejnem."
      },
      {
        "id": "E",
        "text": "Na predstavitvenem."
      },
      {
        "id": "F",
        "text": "Na aplikacijskem."
      }
    ],
    "correctOptions": [
      "A",
      "B"
    ],
    "answer": "A\n B",
    "gradingNotes": " A\n B\nVsak pravilen odgovor 1 točka.\nČe kandidat obkroži več kot dva\nodgovora, dobi 0 točk.",
    "tags": [
      "html_css",
      "kviz",
      "multiple_choice_multi"
    ]
  },
  {
    "id": "p252-1-12",
    "examId": "p252",
    "examCode": "P252",
    "part": 1,
    "questionNumber": 12,
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "podatkovne_baze_sql",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kateri izraz SQL se uporablja za urejanje rezultatov v posameznem stolpcu? Obkrožite črko pred\npravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "SORT BY stolpec."
      },
      {
        "id": "B",
        "text": "ORDER BY stolpec."
      },
      {
        "id": "C",
        "text": "GROUP BY stolpec."
      },
      {
        "id": "D",
        "text": "ARRANGE BY stolpec."
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "podatkovne_baze_sql"
    ]
  },
  {
    "id": "p252-1-13",
    "examId": "p252",
    "examCode": "P252",
    "part": 1,
    "questionNumber": 13,
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "podatkovne_baze_sql",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kaj naredi naslednji stavek SQL? Obkrožite črko pred pravilnim odgovorom.\nSELECT tblDijaki.*\nFROM tblDijaki\nWHERE Kraj LIKE \"d%\";",
    "options": [
      {
        "id": "A",
        "text": "Prikaže imena vseh dijakov v tabeli tblDijaki, ki so iz Domžal."
      },
      {
        "id": "B",
        "text": "Prikaže vse podatke o dijakih v tabeli tblDijaki, ki so iz kraja, ki se začne s črko d."
      },
      {
        "id": "C",
        "text": "Prikaže število vseh dijakov v tabeli tblDijaki, katerih ime se začne s črko d."
      },
      {
        "id": "D",
        "text": "Prikaže podatke o dijakih v tabeli tblDijaki, ki niso iz Doba."
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "podatkovne_baze_sql"
    ]
  },
  {
    "id": "p252-1-14",
    "examId": "p252",
    "examCode": "P252",
    "part": 1,
    "questionNumber": 14,
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 6
    },
    "points": 2,
    "type": "multiple_choice_multi",
    "mode": "kviz",
    "category": "podatkovne_baze_sql",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Obkrožite črki pred stavkoma SQL, ki se uvrščata v skupino stavkov DDL.",
    "options": [
      {
        "id": "A",
        "text": "UPDATE"
      },
      {
        "id": "B",
        "text": "INSERT"
      },
      {
        "id": "C",
        "text": "CREATE"
      },
      {
        "id": "D",
        "text": "DELETE"
      },
      {
        "id": "E",
        "text": "ALTER"
      }
    ],
    "correctOptions": [
      "C",
      "E"
    ],
    "answer": "C\n E",
    "gradingNotes": " C\n E\nVsak pravilen odgovor 1 točka.\nČe kandidat obkroži več kot dva\nodgovora, dobi 0 točk.",
    "tags": [
      "kviz",
      "multiple_choice_multi",
      "podatkovne_baze_sql"
    ]
  },
  {
    "id": "p252-1-15",
    "examId": "p252",
    "examCode": "P252",
    "part": 1,
    "questionNumber": 15,
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 7
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "html_css",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kateri odgovor ponuja samo vrstične (angl. inline) elemente HTML? Obkrožite črko pred pravilnim\nodgovorom.",
    "options": [
      {
        "id": "A",
        "text": "div, span, a, img"
      },
      {
        "id": "B",
        "text": "span, img, h1, ol"
      },
      {
        "id": "C",
        "text": "input, span, img, a"
      },
      {
        "id": "D",
        "text": "li, input, h4, p"
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "html_css",
      "kviz",
      "multiple_choice_single"
    ]
  },
  {
    "id": "p252-1-16",
    "examId": "p252",
    "examCode": "P252",
    "part": 1,
    "questionNumber": 16,
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 7
    },
    "points": 2,
    "type": "html_css_open",
    "mode": "html_css_vaja",
    "category": "html_css",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Zapišite štiri različne elemente HTML in štiri različne atribute HTML, ki opisujejo vpisane\nelemente HTML.\nIme elementa HTML\nIme atributa\n<img>\nsrc",
    "options": [],
    "correctOptions": [],
    "answer": "<a> href\n <div> class\n <img> alt\n <html> lang\n4 pravilne vrstice 2 točki.\n3 ali 2 pravilni vrstici 1 točka.",
    "gradingNotes": "Primer:\n <a> href\n <div> class\n <img> alt\n <html> lang\n4 pravilne vrstice 2 točki.\n3 ali 2 pravilni vrstici 1 točka.",
    "tags": [
      "html_css",
      "html_css_open",
      "html_css_vaja"
    ]
  },
  {
    "id": "p252-1-17",
    "examId": "p252",
    "examCode": "P252",
    "part": 1,
    "questionNumber": 17,
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 7
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "programiranje_algoritmi",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Obkrožite črko pred vrstico, ki vsebuje zanko.",
    "options": [
      {
        "id": "A",
        "text": "else, for, case"
      },
      {
        "id": "B",
        "text": "int, break, string"
      },
      {
        "id": "C",
        "text": "case, switch, break"
      },
      {
        "id": "D",
        "text": "float, int, if"
      }
    ],
    "correctOptions": [
      "A"
    ],
    "answer": "A",
    "gradingNotes": " A",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "programiranje_algoritmi"
    ]
  },
  {
    "id": "p252-1-18",
    "examId": "p252",
    "examCode": "P252",
    "part": 1,
    "questionNumber": 18,
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 7
    },
    "points": 2,
    "type": "calculation",
    "mode": "racunska_naloga",
    "category": "programiranje_algoritmi",
    "difficulty": "srednje",
    "needsVisualContext": true,
    "prompt": "Spodnjo kodo pretvorite v enakovredno zanko while. Podprogram izpis(...) izpiše na\nstandardnem izhodu vrednost vhodne spremenljivke.\nObkrožite izbrani programski/skriptni jezik:\nC, C++, C#, Java, Python, PHP\nC, C#, C++, Java\nPHP\nPython\nfor(int x=200;x>0;x-=10)\n{\nizpis(x);\n}\nfor($x=200;$x>0;$x-=10)\n{\nizpis($x);\n}\nfor x in range(200,0,-10):\nizpis(x)",
    "options": [],
    "correctOptions": [],
    "answer": "int x = 200;\nwhile(x > 0)\n{\nizpis(x);\nx=x - 10;\n}",
    "gradingNotes": "Primer:\n int x = 200;\nwhile(x > 0)\n{\nizpis(x);\nx=x - 10;\n}\nUstrezna inicializacija 1 točka,\nustrezen pogoj in zmanjševanje\nvrednosti spremenljivke x\n1 točka.",
    "tags": [
      "calculation",
      "programiranje_algoritmi",
      "racunska_naloga"
    ]
  },
  {
    "id": "p253-1-01",
    "examId": "p253",
    "examCode": "P253",
    "part": 1,
    "questionNumber": 1,
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "calculation",
    "mode": "racunska_naloga",
    "category": "pretvorbe_enote_racunanje",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Proizvajalec je deklariral velikost delovnega pomnilnika kot 4 GB. Ker operacijski sistem pretvori\nkapaciteto pomnilnika v dvojiškem sistemu, prikaže manjšo vrednost. Izračunajte jo na tri\ndecimalna mesta natančno. Odgovor napišite na črto.",
    "options": [],
    "correctOptions": [],
    "answer": "3,725 GiB",
    "gradingNotes": " 3,725 GiB",
    "tags": [
      "calculation",
      "pretvorbe_enote_racunanje",
      "racunska_naloga"
    ]
  },
  {
    "id": "p253-1-02",
    "examId": "p253",
    "examCode": "P253",
    "part": 1,
    "questionNumber": 2,
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "calculation",
    "mode": "racunska_naloga",
    "category": "pretvorbe_enote_racunanje",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Imamo procesor RISC s taktom 3,30 GHz. Koliko časa potrebuje procesor za izvedbo desetih\nukazov? Odgovor napišite na črto.",
    "options": [],
    "correctOptions": [],
    "answer": "3,03 ns",
    "gradingNotes": " 3,03 ns",
    "tags": [
      "calculation",
      "pretvorbe_enote_racunanje",
      "racunska_naloga"
    ]
  },
  {
    "id": "p253-1-03",
    "examId": "p253",
    "examCode": "P253",
    "part": 1,
    "questionNumber": 3,
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "strojna_oprema_os",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Katera komponenta matične plošče nadzoruje in usmerja tok podatkov med različnimi\nkomponentami računalnika, hkrati pa omogoča komunikacijo med procesorjem in pomnilnikom?\nObkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Severni most."
      },
      {
        "id": "B",
        "text": "Južni most."
      },
      {
        "id": "C",
        "text": "ALE (aritmetično logična enota)."
      },
      {
        "id": "D",
        "text": "Predpomnilnik."
      }
    ],
    "correctOptions": [
      "A"
    ],
    "answer": "A",
    "gradingNotes": " A",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "strojna_oprema_os"
    ]
  },
  {
    "id": "p253-1-04",
    "examId": "p253",
    "examCode": "P253",
    "part": 1,
    "questionNumber": 4,
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "programiranje_algoritmi",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Katera je ena od glavnih funkcij grafične kartice v sodobnih računalnikih? Obkrožite črko pred\npravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Izvajanje operacijskega sistema."
      },
      {
        "id": "B",
        "text": "Izvajanje kompleksnih matematičnih operacij."
      },
      {
        "id": "C",
        "text": "Upravljanje napajanja."
      },
      {
        "id": "D",
        "text": "Povezovanje zunanje vhodne opreme."
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "programiranje_algoritmi"
    ]
  },
  {
    "id": "p253-1-05",
    "examId": "p253",
    "examCode": "P253",
    "part": 1,
    "questionNumber": 5,
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 4
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kaj pomeni izraz navijanje (angl. overclocking) v kontekstu računalniške strojne opreme?\nObkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Zmanjšanje porabe energije."
      },
      {
        "id": "B",
        "text": "Dodajanje več pomnilnika RAM."
      },
      {
        "id": "C",
        "text": "Povečanje zmogljivosti trdega diska."
      },
      {
        "id": "D",
        "text": "Povečanje taktne frekvence komponent."
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p253-1-06",
    "examId": "p253",
    "examCode": "P253",
    "part": 1,
    "questionNumber": 6,
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "html_css",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Katera tehnologija omogoča brezžično povezavo vhodno-izhodnih naprav, kot so tipkovnica,\nmiška in slušalke, z računalnikom? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Bluetooth."
      },
      {
        "id": "B",
        "text": "NFC (Near Field Communication)."
      },
      {
        "id": "C",
        "text": "Wi-Fi."
      },
      {
        "id": "D",
        "text": "Infrardeča tehnologija."
      }
    ],
    "correctOptions": [
      "A"
    ],
    "answer": "A",
    "gradingNotes": " A",
    "tags": [
      "html_css",
      "kviz",
      "multiple_choice_single"
    ]
  },
  {
    "id": "p253-1-07",
    "examId": "p253",
    "examCode": "P253",
    "part": 1,
    "questionNumber": 7,
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "programiranje_algoritmi",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Katera funkcija BIOS je odgovorna za zagon operacijskega sistema? Obkrožite črko pred\npravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "POST."
      },
      {
        "id": "B",
        "text": "Nastavitev CMOS."
      },
      {
        "id": "C",
        "text": "Nalagalnik bootstrap."
      },
      {
        "id": "D",
        "text": "Firmware bliskovnega pomnilnika."
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "programiranje_algoritmi"
    ]
  },
  {
    "id": "p253-1-08",
    "examId": "p253",
    "examCode": "P253",
    "part": 1,
    "questionNumber": 8,
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "pretvorbe_enote_racunanje",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Katera računalniška komponenta izvaja pretvorbo analognega signala v digitalni format in\nnasprotno? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Omrežni vmesnik."
      },
      {
        "id": "B",
        "text": "Zvočna kartica."
      },
      {
        "id": "C",
        "text": "Krmilnik RAID."
      },
      {
        "id": "D",
        "text": "CPE."
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "pretvorbe_enote_racunanje"
    ]
  },
  {
    "id": "p253-1-09",
    "examId": "p253",
    "examCode": "P253",
    "part": 1,
    "questionNumber": 9,
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kaj je značilno za naslov za razpršeno oddajanje (angl. broadcast)? Obkrožite črko pred\npravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Vsi biti gostiteljskega dela naslova (angl. Host ID) imajo vrednost 1."
      },
      {
        "id": "B",
        "text": "Omrežni del naslova (angl. Net ID) ima vrednost 0."
      },
      {
        "id": "C",
        "text": "To je zadnji možni naslov, ki ga lahko določimo eni napravi."
      },
      {
        "id": "D",
        "text": "To je naslov, ki označuje začetek omrežja."
      }
    ],
    "correctOptions": [
      "A"
    ],
    "answer": "A",
    "gradingNotes": " A",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p253-1-10",
    "examId": "p253",
    "examCode": "P253",
    "part": 1,
    "questionNumber": 10,
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 5
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "omrezja",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "V katerem primeru je uporabljen protokol UDP? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Ogled spletne strani."
      },
      {
        "id": "B",
        "text": "Ogled pretočnega videa."
      },
      {
        "id": "C",
        "text": "Pošiljanje e-pošte."
      },
      {
        "id": "D",
        "text": "Prenos datoteke."
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "omrezja"
    ]
  },
  {
    "id": "p253-1-11",
    "examId": "p253",
    "examCode": "P253",
    "part": 1,
    "questionNumber": 11,
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 6
    },
    "points": 2,
    "type": "multiple_choice_multi",
    "mode": "kviz",
    "category": "omrezja",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Kaj od spodaj naštetega je del tabele, ki jo stikalo uporabi za odločanje o posredovanju okvirjev?\nObkrožite črki pred pravilnima odgovoroma.",
    "options": [
      {
        "id": "A",
        "text": "Naslov IP."
      },
      {
        "id": "B",
        "text": "Vrata TCP."
      },
      {
        "id": "C",
        "text": "Maska omrežja."
      },
      {
        "id": "D",
        "text": "Naslov MAC."
      },
      {
        "id": "E",
        "text": "Fizična vrata."
      },
      {
        "id": "F",
        "text": "Vrata UDP."
      }
    ],
    "correctOptions": [
      "D",
      "E"
    ],
    "answer": "D\n E",
    "gradingNotes": " D\n E\nVsak pravilen odgovor 1 točka.\nČe kandidat obkroži več kot dva\nodgovora, dobi 0 točk.",
    "tags": [
      "kviz",
      "multiple_choice_multi",
      "omrezja"
    ]
  },
  {
    "id": "p253-1-12",
    "examId": "p253",
    "examCode": "P253",
    "part": 1,
    "questionNumber": 12,
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "podatkovne_baze_sql",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kaj je primarni ključ v podatkovni bazi? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Ključ, ki odpre glavna vrata baze."
      },
      {
        "id": "B",
        "text": "Ključ, ki ga uporablja administrator za dostop do podatkov."
      },
      {
        "id": "C",
        "text": "Enoličen identifikator vrstice v tabeli."
      },
      {
        "id": "D",
        "text": "Identifikator, ki odklene zaklenjen stolpec v tabeli."
      }
    ],
    "correctOptions": [
      "C"
    ],
    "answer": "C",
    "gradingNotes": " C",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "podatkovne_baze_sql"
    ]
  },
  {
    "id": "p253-1-13",
    "examId": "p253",
    "examCode": "P253",
    "part": 1,
    "questionNumber": 13,
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "podatkovne_baze_sql",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kaj pomeni izraz normalizacija v kontekstu podatkovnih baz? Obkrožite črko pred pravilnim\nodgovorom.",
    "options": [
      {
        "id": "A",
        "text": "Način, kako omejiti dostop do določenih stolpcev v tabeli."
      },
      {
        "id": "B",
        "text": "Proces dodajanja novih vrstic v tabelo."
      },
      {
        "id": "C",
        "text": "Proces spreminjanja pravic uporabnikov podatkovne baze brez izgube podatkov."
      },
      {
        "id": "D",
        "text": "Proces organiziranja podatkov z namenom zmanjšanja redundance."
      }
    ],
    "correctOptions": [
      "D"
    ],
    "answer": "D",
    "gradingNotes": " D",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "podatkovne_baze_sql"
    ]
  },
  {
    "id": "p253-1-14",
    "examId": "p253",
    "examCode": "P253",
    "part": 1,
    "questionNumber": 14,
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 6
    },
    "points": 2,
    "type": "sql_open",
    "mode": "sql_vaja",
    "category": "podatkovne_baze_sql",
    "difficulty": "srednje",
    "needsVisualContext": true,
    "prompt": "Pri kreiranju tabele dijak s stavkom SQL manjkata dve integritetni omejitvi. Atribut ime_priimek je\nobvezen in atribut id enolično določa zapise v tabeli. Dopolnite spodnji stavek SQL.\nCREATE TABLE dijak\n(id INT,\nime_priimek VARCHAR(30) _____,\nposta NUMERIC(4,0),\n_____)\n;",
    "options": [],
    "correctOptions": [],
    "answer": "NOT NULL\n PRIMARY KEY (id)",
    "gradingNotes": " NOT NULL\n PRIMARY KEY (id)\nPravilno izbrana omejitev NOT\nNULL 1 točka, pravilno\npostavljen primarni ključ 1 točka.",
    "tags": [
      "podatkovne_baze_sql",
      "sql_open",
      "sql_vaja"
    ]
  },
  {
    "id": "p253-1-15",
    "examId": "p253",
    "examCode": "P253",
    "part": 1,
    "questionNumber": 15,
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 6
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "html_css",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Kateri element HTML se uporablja za ustvarjanje hiperpovezave (hiperlinka)? Obkrožite črko pred\npravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "<url>"
      },
      {
        "id": "B",
        "text": "<a>"
      },
      {
        "id": "C",
        "text": "<href>"
      },
      {
        "id": "D",
        "text": "<link>"
      }
    ],
    "correctOptions": [
      "B"
    ],
    "answer": "B",
    "gradingNotes": " B",
    "tags": [
      "html_css",
      "kviz",
      "multiple_choice_single"
    ]
  },
  {
    "id": "p253-1-16",
    "examId": "p253",
    "examCode": "P253",
    "part": 1,
    "questionNumber": 16,
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 7
    },
    "points": 2,
    "type": "short_answer",
    "mode": "kratki_odgovor",
    "category": "html_css",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Nastaviti želimo dva ločena odmika za naslov »Jesensko listje«. Pod naslovom je rob, ki pripada\nnaslovu. Na črto napišite dve različni oblikovni lastnosti, ki nastavita označena odmika (A, B).\nJesensko listje\nAA\nBB\nSredi poznih jesenskih dni se barve razbohotijo. Odtenki rdeče, rumene, rjave božajo oči in nas vabijo pod krošnje.\nPlavamo po mehkem listju. Problemi se zataknejo na robu gozda.\nA _____\nB _____",
    "options": [],
    "correctOptions": [],
    "answer": "padding-left\n margin-bottom",
    "gradingNotes": "Primer:\n padding-left\n margin-bottom\nVsak pravilen odgovor 1 točka.",
    "tags": [
      "html_css",
      "kratki_odgovor",
      "short_answer"
    ]
  },
  {
    "id": "p253-1-17",
    "examId": "p253",
    "examCode": "P253",
    "part": 1,
    "questionNumber": 17,
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 7
    },
    "points": 1,
    "type": "multiple_choice_single",
    "mode": "kviz",
    "category": "splosno_racunalnistvo",
    "difficulty": "osnovno",
    "needsVisualContext": false,
    "prompt": "Spremenljivki x, ki je celoštevilskega tipa, želimo prirediti ostanek pri deljenju števila x s številom\n11. Katera izmed možnosti je ustrezna? Obkrožite črko pred pravilnim odgovorom.",
    "options": [
      {
        "id": "A",
        "text": "x = x % 11"
      },
      {
        "id": "B",
        "text": "x = x / 11"
      },
      {
        "id": "C",
        "text": "x = x \\ 11"
      },
      {
        "id": "D",
        "text": "Vse rešitve so ustrezne."
      }
    ],
    "correctOptions": [
      "A"
    ],
    "answer": "A",
    "gradingNotes": " A",
    "tags": [
      "kviz",
      "multiple_choice_single",
      "splosno_racunalnistvo"
    ]
  },
  {
    "id": "p253-1-18",
    "examId": "p253",
    "examCode": "P253",
    "part": 1,
    "questionNumber": 18,
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 7
    },
    "points": 2,
    "type": "code_open",
    "mode": "programiranje_vaja",
    "category": "programiranje_algoritmi",
    "difficulty": "srednje",
    "needsVisualContext": false,
    "prompt": "Dopolnite spodnji algoritem (diagram poteka) tako, da bo izpisoval vrednosti spremenljivke A,\nnato pa bo spremenljivko zmanjšal za vrednost 11, dokler je A večji od števila 80.\nZAČETEK\nA\n121\n=\nX\nX\n2\n=\n+\nNE\nDA\nX\nKONEC\nA ˃ 80",
    "options": [],
    "correctOptions": [],
    "answer": "A\nA\n11\n=\n-\nA\nIzhodni blok za izpis\nspremenljivke A 1 točka,\nprireditveni blok z ustreznim\nzmanjševanjem spremenljivke A\n1 točka.",
    "gradingNotes": "Primer:\n\nA\nA\n11\n=\n-\nA\nIzhodni blok za izpis\nspremenljivke A 1 točka,\nprireditveni blok z ustreznim\nzmanjševanjem spremenljivke A\n1 točka.",
    "tags": [
      "code_open",
      "programiranje_algoritmi",
      "programiranje_vaja"
    ]
  }
]
