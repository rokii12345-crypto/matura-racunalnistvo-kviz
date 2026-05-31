export type MaturaAnswerExplanation = {
  questionId: string
  examId: string
  questionNumber: number
  officialAnswer: string
  shortExplanation: string
  source?: {
    examPdf: string
    solutionsPdf: string
    page?: number
    pageHint?: string
  }
  note?: string
}

export const maturaAnswerExplanations: MaturaAnswerExplanation[] = [
  {
    "questionId": "p231-1-01",
    "examId": "p231",
    "questionNumber": 1,
    "officialAnswer": "RGB",
    "shortExplanation": "Pravilni odgovor je RGB. Zasloni barve običajno prikazujejo z aditivnim modelom RGB, kjer se kombinirajo rdeča, zelena in modra svetloba. Pri tiskanju pa se uporablja drugačen, subtraktiven model.",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p231-1-02",
    "examId": "p231",
    "questionNumber": 2,
    "officialAnswer": "Računalniške komponente potrebujejo enosmerno napetost.",
    "shortExplanation": "Pravilni odgovor je Računalniške komponente potrebujejo enosmerno napetost. Napajalnik v računalniku pretvori 230 V izmenične omrežne napetosti v nižje enosmerne napetosti, kot so 3,3 V, 5 V in 12 V. Računalniške komponente za delovanje potrebujejo stabilno enosmerno napajanje.",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p231-1-03",
    "examId": "p231",
    "questionNumber": 3,
    "officialAnswer": "B – 19E[16]",
    "shortExplanation": "Pravilni odgovor je B – 19E[16]. Število 11110011₂ je 243₁₀, število AB₁₆ pa je 171₁₀. Vsota je 414₁₀, kar je 19E₁₆.",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p231-1-04",
    "examId": "p231",
    "questionNumber": 4,
    "officialAnswer": "D – CBA",
    "shortExplanation": "Pravilni odgovor je D – CBA. Če je 01000001 črka A, potem je 01000010 črka B in 01000011 črka C. Zaporedje zato predstavlja CBA.",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p231-1-05",
    "examId": "p231",
    "questionNumber": 5,
    "officialAnswer": "B – 173 MB",
    "shortExplanation": "Pravilni odgovor je B – 173 MB. 2 minuti in 53 sekund je 173 sekund. Hitrost 8 Mb/s je 1 MB/s, zato se v 173 sekundah prenese približno 173 MB podatkov.",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p231-1-06",
    "examId": "p231",
    "questionNumber": 6,
    "officialAnswer": "A – Trdi disk.",
    "shortExplanation": "Pravilni odgovor je A – Trdi disk. Priključki M.2 oziroma mSATA so namenjeni predvsem manjšim pogonom SSD oziroma napravam za shranjevanje. Zato jih ne povezujemo z delovnim pomnilnikom ali klasičnimi zunanjimi napravami.",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p231-1-07",
    "examId": "p231",
    "questionNumber": 7,
    "officialAnswer": "C – 32-bitni OS lahko naslovi zgolj 4 GB pomnilnega prostora.",
    "shortExplanation": "Pravilni odgovor je C – 32-bitni OS lahko naslovi zgolj 4 GB pomnilnega prostora. Pri računskih nalogah je ključno, da pravilno pretvoriš enote, na primer bite v bajte, GB v GiB ali frekvenco v čas cikla. Rezultat primerjaj z uradno podano enoto.",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p231-1-08",
    "examId": "p231",
    "questionNumber": 8,
    "officialAnswer": "D – CISC",
    "shortExplanation": "Pravilni odgovor je D – CISC. Naloga preverja funkcijo računalniške komponente ali operacijskega sistema. Pravilna izbira je tista, ki neposredno opravlja opisano nalogo, druge možnosti pa opisujejo druge dele računalnika.",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p231-1-09",
    "examId": "p231",
    "questionNumber": 9,
    "officialAnswer": "C – Povezovanje več različnih omrežij med seboj.",
    "shortExplanation": "Pravilni odgovor je C – Povezovanje več različnih omrežij med seboj. Usmerjevalnik deluje na omrežni plasti in povezuje različna omrežja med seboj. Stikalo pa praviloma povezuje naprave znotraj istega lokalnega omrežja.",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p231-1-10",
    "examId": "p231",
    "questionNumber": 10,
    "officialAnswer": "B – 25",
    "shortExplanation": "Pravilni odgovor je B – 25. SMTP je protokol aplikacijske plasti za pošiljanje elektronske pošte, običajno prek TCP vrat 25. Če ta promet blokiramo, pošiljanje po SMTP ne deluje.",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p231-1-11",
    "examId": "p231",
    "questionNumber": 11,
    "officialAnswer": "A – 10.21.143.8; E – 192.168.1.100",
    "shortExplanation": "Pravilni odgovor je A – 10.21.143.8; E – 192.168.1.100. Izberi odgovor, ki neposredno ustreza opisu v vprašanju, in preveri, ali se ujema z uradno rešitvijo.",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p231-1-12",
    "examId": "p231",
    "questionNumber": 12,
    "officialAnswer": "B – Normalizacija.",
    "shortExplanation": "Pravilni odgovor je B – Normalizacija. Normalizacija ureja podatkovni model tako, da zmanjšamo podvajanje podatkov in preprečimo anomalije pri vstavljanju, brisanju ali spreminjanju. Uporablja se po logičnem načrtovanju baze.",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p231-1-13",
    "examId": "p231",
    "questionNumber": 13,
    "officialAnswer": "D – DDL",
    "shortExplanation": "Pravilni odgovor je D – DDL. DDL so ukazi za definiranje in spreminjanje strukture baze, na primer CREATE, ALTER in DROP. Ti ukazi ne predstavljajo klasičnega vnosa ali poizvedovanja po podatkih.",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p231-1-14",
    "examId": "p231",
    "questionNumber": 14,
    "officialAnswer": "auto_increment not null",
    "shortExplanation": "Pravilni odgovor je auto_increment not null. AUTO_INCREMENT poskrbi, da se ID samodejno povečuje, NOT NULL pa prepreči prazno vrednost. Tako sta izpolnjeni zahtevi za samoštevilo in obvezen vnos.",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p231-1-15",
    "examId": "p231",
    "questionNumber": 15,
    "officialAnswer": "C – p {background-color: blue;}",
    "shortExplanation": "Pravilni odgovor je C – p {background-color: blue;}. CSS selektor brez pike in lojtre, na primer p ali h1, izbere vse elemente tega tipa. Lastnost background-color nastavi barvo ozadja, medtem ko color spremeni barvo besedila.",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p231-1-16",
    "examId": "p231",
    "questionNumber": 16,
    "officialAnswer": "img title=\"Tukaj je slika\"",
    "shortExplanation": "Pravilni odgovor je img title=\"Tukaj je slika\". Element img vstavi sliko, atribut title pa prikaže besedilo ob prehodu miške čez sliko. Za nadomestno besedilo ob nedosegljivi sliki bi uporabili alt.",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p231-1-17",
    "examId": "p231",
    "questionNumber": 17,
    "officialAnswer": "B – Izvede se vsaj enkrat.",
    "shortExplanation": "Pravilni odgovor je B – Izvede se vsaj enkrat. Zanka do while najprej izvede telo zanke in šele nato preveri pogoj. Zato se v splošnem izvede vsaj enkrat, tudi če je pogoj že na začetku napačen.",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p231-1-18",
    "examId": "p231",
    "questionNumber": 18,
    "officialAnswer": "int i=15; while(i>5) { izpis(i); i=i-2; }",
    "shortExplanation": "Pravilni odgovor je int i=15; while(i>5) { izpis(i); i=i-2; }. Enakovredna zanka mora ohraniti začetno vrednost spremenljivke, isti pogoj za ponavljanje, izpis znotraj zanke in isti korak spreminjanja. Če se spremeni katerikoli od teh delov, zaporedje izpisov ni več enako.",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p232-1-01",
    "examId": "p232",
    "questionNumber": 1,
    "officialAnswer": "CMY oz. CMYK",
    "shortExplanation": "Pravilni odgovor je CMY oz. CMYK. Tiskalniki barve tvorijo s subtraktivnim mešanjem pigmentov, najpogosteje cian, magenta, rumena in črna. Zato pri tisku ne uporabljamo RGB kot pri zaslonih.",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p232-1-02",
    "examId": "p232",
    "questionNumber": 2,
    "officialAnswer": "datotečni sistemi Upoštevamo tudi angleški izraz »File System«.",
    "shortExplanation": "Pravilni odgovor je datotečni sistemi Upoštevamo tudi angleški izraz »File System«. Izberi odgovor, ki neposredno ustreza opisu v vprašanju, in preveri, ali se ujema z uradno rešitvijo.",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p232-1-03",
    "examId": "p232",
    "questionNumber": 3,
    "officialAnswer": "C – Del trdega diska, namenjenega za navidezni pomnilnik.",
    "shortExplanation": "Pravilni odgovor je C – Del trdega diska, namenjenega za navidezni pomnilnik. Izberi odgovor, ki neposredno ustreza opisu v vprašanju, in preveri, ali se ujema z uradno rešitvijo.",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p232-1-04",
    "examId": "p232",
    "questionNumber": 4,
    "officialAnswer": "B – ROM",
    "shortExplanation": "Pravilni odgovor je B – ROM. ROM je pomnilnik samo za branje, zato njegove vsebine pri običajni uporabi ne spreminjamo. RAM je delovni pomnilnik, EPROM in EEPROM pa omogočata posebne načine ponovnega zapisovanja.",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p232-1-05",
    "examId": "p232",
    "questionNumber": 5,
    "officialAnswer": "D – HDD",
    "shortExplanation": "Pravilni odgovor je D – HDD. Defragmentacija je smiselna predvsem pri klasičnih trdih diskih, kjer razdrobljeni deli datotek povzročijo dodatno premikanje glave. Pri SSD-jih tak postopek ni potreben na enak način.",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p232-1-06",
    "examId": "p232",
    "questionNumber": 6,
    "officialAnswer": "A – Miško/tipkovnico.",
    "shortExplanation": "Pravilni odgovor je A – Miško/tipkovnico. PS/2 je starejši priključek, ki se je uporabljal predvsem za tipkovnice in miške. Za zunanje diske ali tiskalnike se uporabljajo drugi priključki.",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p232-1-07",
    "examId": "p232",
    "questionNumber": 7,
    "officialAnswer": "C – RAID 5",
    "shortExplanation": "Pravilni odgovor je C – RAID 5. RAID 5 uporablja porazdeljeno pariteto, zato lahko s tremi diski zagotovi večjo hitrost in odpornost na odpoved enega diska. RAID 0 ni odporen na odpoved, RAID 1 pa ne izkoristi treh diskov na tak način.",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p232-1-08",
    "examId": "p232",
    "questionNumber": 8,
    "officialAnswer": "A – RISC",
    "shortExplanation": "Pravilni odgovor je A – RISC. Naloga preverja funkcijo računalniške komponente ali operacijskega sistema. Pravilna izbira je tista, ki neposredno opravlja opisano nalogo, druge možnosti pa opisujejo druge dele računalnika.",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p232-1-09",
    "examId": "p232",
    "questionNumber": 9,
    "officialAnswer": "D – 255.255.255.240",
    "shortExplanation": "Pravilni odgovor je D – 255.255.255.240. Pripona /28 pomeni, da je 28 bitov namenjenih omrežnemu delu. Desetiška maska za to pripono je 255.255.255.240.",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p232-1-10",
    "examId": "p232",
    "questionNumber": 10,
    "officialAnswer": "C – Transportni.",
    "shortExplanation": "Pravilni odgovor je C – Transportni. Promet spletnih strani običajno uporablja TCP na vratih 80 ali 443, zato ga požarni zid pogosto filtrira po transportnih vratih. Če filtrira vsebino same aplikacije, pa je lahko vključena tudi aplikacijska plast.",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p232-1-11",
    "examId": "p232",
    "questionNumber": 11,
    "officialAnswer": "B – SMTP; D – TCP",
    "shortExplanation": "Pravilni odgovor je B – SMTP; D – TCP. TCP in UDP sta protokola transportne plasti. TCP zagotavlja zanesljiv prenos s povezavo, UDP pa hitrejši prenos brez potrjevanja vsakega paketa.",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p232-1-12",
    "examId": "p232",
    "questionNumber": 12,
    "officialAnswer": "DROP TABLE Novatabela",
    "shortExplanation": "Pravilni odgovor je DROP TABLE Novatabela. DROP TABLE izbriše celotno tabelo skupaj z njeno strukturo. To ni enako kot DELETE, ki briše vrstice v obstoječi tabeli.",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p232-1-13",
    "examId": "p232",
    "questionNumber": 13,
    "officialAnswer": "B – DDL",
    "shortExplanation": "Pravilni odgovor je B – DDL. DDL so ukazi za definiranje in spreminjanje strukture baze, na primer CREATE, ALTER in DROP. Ti ukazi ne predstavljajo klasičnega vnosa ali poizvedovanja po podatkih.",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p232-1-14",
    "examId": "p232",
    "questionNumber": 14,
    "officialAnswer": "DEFAULT 'Maribor'",
    "shortExplanation": "Pravilni odgovor je DEFAULT 'Maribor'. Omejitev DEFAULT določi privzeto vrednost stolpca, kadar uporabnik pri vstavljanju ne poda druge vrednosti. V tem primeru se za občino uporabi Maribor.",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p232-1-15",
    "examId": "p232",
    "questionNumber": 15,
    "officialAnswer": "C – h1 {background-color: red;}",
    "shortExplanation": "Pravilni odgovor je C – h1 {background-color: red;}. CSS selektor brez pike in lojtre, na primer p ali h1, izbere vse elemente tega tipa. Lastnost background-color nastavi barvo ozadja, medtem ko color spremeni barvo besedila.",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p232-1-16",
    "examId": "p232",
    "questionNumber": 16,
    "officialAnswer": "img title='Tukaj je slika'",
    "shortExplanation": "Pravilni odgovor je img title='Tukaj je slika'. Element img vstavi sliko, atribut title pa prikaže besedilo ob prehodu miške čez sliko. Za nadomestno besedilo ob nedosegljivi sliki bi uporabili alt.",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p232-1-17",
    "examId": "p232",
    "questionNumber": 17,
    "officialAnswer": "D – Izvede se vsaj enkrat.",
    "shortExplanation": "Pravilni odgovor je D – Izvede se vsaj enkrat. Zanka do while najprej izvede telo zanke in šele nato preveri pogoj. Zato se v splošnem izvede vsaj enkrat, tudi če je pogoj že na začetku napačen.",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p232-1-18",
    "examId": "p232",
    "questionNumber": 18,
    "officialAnswer": "Glej uradno rešitev v rešitvah pole",
    "shortExplanation": "Pravilni odgovor je podan v uradni rešitvi kot zapis ali skica. Pri tej nalogi je za natančen prikaz pomemben tudi vizualni kontekst iz izvirne pole.",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p233-1-01",
    "examId": "p233",
    "questionNumber": 1,
    "officialAnswer": "Da.",
    "shortExplanation": "Pravilni odgovor je Da. 16 GB je decimalna kapaciteta, medtem ko je 15 GiB večja binarna vrednost v bajtih. Zato lahko kljub oznaki 16 GB zmanjka prostora za datoteko velikosti 15 GiB.",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p233-1-02",
    "examId": "p233",
    "questionNumber": 2,
    "officialAnswer": "Vgradimo lahko dodatno grafično kartico s priključkom DVI. Uporabimo lahko tudi ustrezen zaslon s priključkom VGA ali kabel VGA-DVI ali drugo ustrezno rešitev.",
    "shortExplanation": "Pravilni odgovor je Vgradimo lahko dodatno grafično kartico s priključkom DVI. Uporabimo lahko tudi ustrezen zaslon s priključkom VGA ali kabel VGA-DVI ali drugo ustrezno rešitev. Naloga preverja funkcijo računalniške komponente ali operacijskega sistema. Pravilna izbira je tista, ki neposredno opravlja opisano nalogo, druge možnosti pa opisujejo druge dele računalnika.",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p233-1-03",
    "examId": "p233",
    "questionNumber": 3,
    "officialAnswer": "A – cd/m2",
    "shortExplanation": "Pravilni odgovor je A – cd/m2. Svetilnost zaslona se meri v kandelah na kvadratni meter, zapisano cd/m². Enote, kot so MHz, TB ali W, merijo druge količine.",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p233-1-04",
    "examId": "p233",
    "questionNumber": 4,
    "officialAnswer": "B – 207",
    "shortExplanation": "Pravilni odgovor je B – 207. Izberi odgovor, ki neposredno ustreza opisu v vprašanju, in preveri, ali se ujema z uradno rešitvijo.",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p233-1-05",
    "examId": "p233",
    "questionNumber": 5,
    "officialAnswer": "D – V BIOS/UEFI mora spremeniti zagonsko sekvenco naprav.",
    "shortExplanation": "Pravilni odgovor je D – V BIOS/UEFI mora spremeniti zagonsko sekvenco naprav. Naloga preverja osnovno programersko pravilo: inicializacijo, pogoj, korak zanke ali pomen operatorja. Pri zankah mora enakovreden zapis ohraniti isti začetni pogoj, enake izpise in enak korak.",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p233-1-06",
    "examId": "p233",
    "questionNumber": 6,
    "officialAnswer": "C – PCI-e",
    "shortExplanation": "Pravilni odgovor je C – PCI-e. Sodobne dodatne grafične kartice se praviloma priključijo na vodilo PCI Express. Starejši AGP je zastarel, SATA pa je namenjen predvsem pomnilniškim napravam.",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p233-1-07",
    "examId": "p233",
    "questionNumber": 7,
    "officialAnswer": "A – Brezžično omrežno kartico.",
    "shortExplanation": "Pravilni odgovor je A – Brezžično omrežno kartico. Priključki M.2 oziroma mSATA so namenjeni predvsem manjšim pogonom SSD oziroma napravam za shranjevanje. Zato jih ne povezujemo z delovnim pomnilnikom ali klasičnimi zunanjimi napravami.",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p233-1-08",
    "examId": "p233",
    "questionNumber": 8,
    "officialAnswer": "B – Logična razdelitev trdega diska na več delov.",
    "shortExplanation": "Pravilni odgovor je B – Logična razdelitev trdega diska na več delov. Particioniranje pomeni logično razdelitev fizičnega diska na več delov, ki jih sistem obravnava kot ločene enote. Ne gre za fizično rezanje diska.",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p233-1-09",
    "examId": "p233",
    "questionNumber": 9,
    "officialAnswer": "C – ICMP",
    "shortExplanation": "Pravilni odgovor je C – ICMP. Ping in traceroute uporabljata sporočila protokola ICMP za preverjanje dosegljivosti in poti do cilja. Zato nista navadna spletna ali poštna protokola.",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p233-1-10",
    "examId": "p233",
    "questionNumber": 10,
    "officialAnswer": "D – Križna.",
    "shortExplanation": "Pravilni odgovor je D – Križna. Naloga preverja osnovno omrežno pravilo, protokol ali naslov. Pomagaj si s tem, na kateri plasti deluje naprava oziroma kateri naslov ali vrata uporablja.",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p233-1-11",
    "examId": "p233",
    "questionNumber": 11,
    "officialAnswer": "A – Naslov IP našega računalnika.; C – Naslov IP omrežnega prehoda.",
    "shortExplanation": "Pravilni odgovor je A – Naslov IP našega računalnika.; C – Naslov IP omrežnega prehoda. Ukaz ipconfig prikaže nastavitve omrežnih vmesnikov, na primer naslov IP, masko in privzeti prehod. Ne prikazuje pa vsebine spletnih strani ali podatkovnih baz.",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p233-1-12",
    "examId": "p233",
    "questionNumber": 12,
    "officialAnswer": "SHOW DATABASES;",
    "shortExplanation": "Pravilni odgovor je SHOW DATABASES;. SHOW DATABASES izpiše seznam podatkovnih baz, ki so na voljo v sistemu. Ukaz je namenjen pregledu, ne spreminjanju podatkov.",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p233-1-13",
    "examId": "p233",
    "questionNumber": 13,
    "officialAnswer": "A – DML",
    "shortExplanation": "Pravilni odgovor je A – DML. DML so ukazi za delo s podatki, na primer SELECT, INSERT, UPDATE in DELETE. Z njimi podatke beremo ali spreminjamo.",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p233-1-14",
    "examId": "p233",
    "questionNumber": 14,
    "officialAnswer": "FOREIGN KEY Postna_stevilka",
    "shortExplanation": "Pravilni odgovor je FOREIGN KEY Postna_stevilka. Primarni ključ enolično določa posamezno vrstico v tabeli. Zato mora biti stabilen, edinstven in ne sme dopuščati dvoumnosti med zapisi.",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p233-1-15",
    "examId": "p233",
    "questionNumber": 15,
    "officialAnswer": "C – tr",
    "shortExplanation": "Pravilni odgovor je C – tr. V HTML tabeli element tr označuje vrstico tabele. Celice v tej vrstici pa zapišemo z td ali th.",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p233-1-16",
    "examId": "p233",
    "questionNumber": 16,
    "officialAnswer": "href target=\"_blank\"",
    "shortExplanation": "Pravilni odgovor je href target=\"_blank\". Element <a> ustvari hiperpovezavo, atribut href pa določi naslov povezave. Atribut target=\"_blank\" poskrbi, da se povezava odpre v novem zavihku.",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p233-1-17",
    "examId": "p233",
    "questionNumber": 17,
    "officialAnswer": "D – Ostanek celoštevilskega deljenja.",
    "shortExplanation": "Pravilni odgovor je D – Ostanek celoštevilskega deljenja. Operator % oziroma mod vrne ostanek pri celoštevilskem deljenju. Zato se uporablja, kadar želimo ugotoviti, kaj ostane po deljenju z izbranim številom.",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p233-1-18",
    "examId": "p233",
    "questionNumber": 18,
    "officialAnswer": "for(int i=16;i>1;i-=2) { izpis(i); }",
    "shortExplanation": "Pravilni odgovor je for(int i=16;i>1;i-=2) { izpis(i); }. Enakovredna zanka mora ohraniti začetno vrednost spremenljivke, isti pogoj za ponavljanje, izpis znotraj zanke in isti korak spreminjanja. Če se spremeni katerikoli od teh delov, zaporedje izpisov ni več enako.",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p241-1-01",
    "examId": "p241",
    "questionNumber": 1,
    "officialAnswer": "DDR2",
    "shortExplanation": "Pravilni odgovor je DDR2. DDR2 je tip delovnega pomnilnika RAM. Naloga preverja prepoznavanje vrste pomnilnika iz prikazanega ali opisanega testa.",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p241-1-02",
    "examId": "p241",
    "questionNumber": 2,
    "officialAnswer": "grafična kartica",
    "shortExplanation": "Pravilni odgovor je grafična kartica. VRAM je namenski video pomnilnik, ki ga uporablja grafična kartica za shranjevanje slikovnih podatkov, tekstur in okvirjev slike. Zato ga ne povezujemo z navadnim sistemskim pomnilnikom.",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p241-1-03",
    "examId": "p241",
    "questionNumber": 3,
    "officialAnswer": "D – V postopku formatiranja je bil izbran datotečni sistem FAT32.",
    "shortExplanation": "Pravilni odgovor je D – V postopku formatiranja je bil izbran datotečni sistem FAT32. FAT32 ima omejitev največje velikosti posamezne datoteke približno 4 GiB. Zato datoteke velikosti 5 GiB ali 6,32 GiB ni mogoče kopirati, čeprav je na ključku dovolj skupne kapacitete.",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p241-1-04",
    "examId": "p241",
    "questionNumber": 4,
    "officialAnswer": "B – Podatke, ki tvorijo datoteke, zapišemo bliže skupaj na disku (združujemo v bloke).",
    "shortExplanation": "Pravilni odgovor je B – Podatke, ki tvorijo datoteke, zapišemo bliže skupaj na disku (združujemo v bloke). Defragmentacija je smiselna predvsem pri klasičnih trdih diskih, kjer razdrobljeni deli datotek povzročijo dodatno premikanje glave. Pri SSD-jih tak postopek ni potreben na enak način.",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p241-1-05",
    "examId": "p241",
    "questionNumber": 5,
    "officialAnswer": "C – Analogni in digitalni.",
    "shortExplanation": "Pravilni odgovor je C – Analogni in digitalni. Izberi odgovor, ki neposredno ustreza opisu v vprašanju, in preveri, ali se ujema z uradno rešitvijo.",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p241-1-06",
    "examId": "p241",
    "questionNumber": 6,
    "officialAnswer": "A – En disk v polju RAID6 je na čakanju (angl. spare disc).",
    "shortExplanation": "Pravilni odgovor je A – En disk v polju RAID6 je na čakanju (angl. spare disc). RAID 6 uporablja dvojno pariteto in lahko prenese odpoved dveh diskov. Pri vprašanju je treba izbrati trditev, ki s temi lastnostmi ni skladna.",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p241-1-07",
    "examId": "p241",
    "questionNumber": 7,
    "officialAnswer": "B – Linijski vhod.",
    "shortExplanation": "Pravilni odgovor je B – Linijski vhod. Zvočna kartica pretvarja analogni zvočni signal v digitalno obliko za računalnik in digitalni signal nazaj v analognega za zvočnike. Zato je povezana z A/D in D/A pretvorbo.",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p241-1-08",
    "examId": "p241",
    "questionNumber": 8,
    "officialAnswer": "C – Delovni pomnilnik (RAM).",
    "shortExplanation": "Pravilni odgovor je C – Delovni pomnilnik (RAM). Naloga preverja funkcijo računalniške komponente ali operacijskega sistema. Pravilna izbira je tista, ki neposredno opravlja opisano nalogo, druge možnosti pa opisujejo druge dele računalnika.",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p241-1-09",
    "examId": "p241",
    "questionNumber": 9,
    "officialAnswer": "B – 8",
    "shortExplanation": "Pravilni odgovor je B – 8. Pri računskih nalogah je ključno, da pravilno pretvoriš enote, na primer bite v bajte, GB v GiB ali frekvenco v čas cikla. Rezultat primerjaj z uradno podano enoto.",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p241-1-10",
    "examId": "p241",
    "questionNumber": 10,
    "officialAnswer": "C – Dostopna točka.",
    "shortExplanation": "Pravilni odgovor je C – Dostopna točka. Naloga preverja osnovno omrežno pravilo, protokol ali naslov. Pomagaj si s tem, na kateri plasti deluje naprava oziroma kateri naslov ali vrata uporablja.",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p241-1-11",
    "examId": "p241",
    "questionNumber": 11,
    "officialAnswer": "B – Fizična vrata (angl. port).; D – Fizični naslov.",
    "shortExplanation": "Pravilni odgovor je B – Fizična vrata (angl. port).; D – Fizični naslov. Naloga preverja osnovno omrežno pravilo, protokol ali naslov. Pomagaj si s tem, na kateri plasti deluje naprava oziroma kateri naslov ali vrata uporablja.",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p241-1-12",
    "examId": "p241",
    "questionNumber": 12,
    "officialAnswer": "C – INSERT, UPDATE, DELETE",
    "shortExplanation": "Pravilni odgovor je C – INSERT, UPDATE, DELETE. Naloga preverja poznavanje osnovnih SQL ukazov, omejitev ali pomena stavka. Pri takih nalogah najprej ugotovi, ali gre za ustvarjanje/spremembo strukture, vnos podatkov ali poizvedbo.",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p241-1-13",
    "examId": "p241",
    "questionNumber": 13,
    "officialAnswer": "SQL DDL",
    "shortExplanation": "Pravilni odgovor je SQL DDL. DDL so ukazi za definiranje in spreminjanje strukture baze, na primer CREATE, ALTER in DROP. Ti ukazi ne predstavljajo klasičnega vnosa ali poizvedovanja po podatkih.",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p241-1-14",
    "examId": "p241",
    "questionNumber": 14,
    "officialAnswer": "SELECT * FROM avtomobili WHERE izpust IS NULL; Popravek * namesto naziv_avta 1 točka, popravek IS namesto = 1 točka.",
    "shortExplanation": "Pravilni odgovor je SELECT * FROM avtomobili WHERE izpust IS NULL; Popravek * namesto naziv_avta 1 točka, popravek IS namesto = 1 točka. Zvezdica pomeni izpis vseh stolpcev, IS NULL pa pravilno preverja manjkajočo vrednost. Primerjava z znakom = za NULL v SQL ni pravilna.",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p241-1-15",
    "examId": "p241",
    "questionNumber": 15,
    "officialAnswer": "Pravilna skica tabele po uradni rešitvi",
    "shortExplanation": "Pravilni odgovor je pravilna skica tabele po podani HTML kodi. Atribut rowspan združi celice po vrsticah, colspan pa po stolpcih, zato je treba pri risanju paziti, katere celice se raztezajo čez več mest.",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p241-1-16",
    "examId": "p241",
    "questionNumber": 16,
    "officialAnswer": "name content",
    "shortExplanation": "Pravilni odgovor je name content. Pri meta oznaki atribut name pove, katero vrsto metapodatka nastavljamo, content pa vsebuje njegovo vrednost. Za ključne besede je zato name='keywords' in content z naštevanjem besed.",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p241-1-17",
    "examId": "p241",
    "questionNumber": 17,
    "officialAnswer": "A – 1",
    "shortExplanation": "Pravilni odgovor je A – 1. Operator % oziroma mod vrne ostanek pri celoštevilskem deljenju. Zato se uporablja, kadar želimo ugotoviti, kaj ostane po deljenju z izbranim številom.",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p241-1-18",
    "examId": "p241",
    "questionNumber": 18,
    "officialAnswer": "int i=11; while(i > 0) { izpis(i); i=i-3; }",
    "shortExplanation": "Pravilni odgovor je int i=11; while(i > 0) { izpis(i); i=i-3; }. Enakovredna zanka mora ohraniti začetno vrednost spremenljivke, isti pogoj za ponavljanje, izpis znotraj zanke in isti korak spreminjanja. Če se spremeni katerikoli od teh delov, zaporedje izpisov ni več enako.",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "page": 8
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p242-1-01",
    "examId": "p242",
    "questionNumber": 1,
    "officialAnswer": "FSB",
    "shortExplanation": "Pravilni odgovor je FSB. Naloga preverja osnovno omrežno pravilo, protokol ali naslov. Pomagaj si s tem, na kateri plasti deluje naprava oziroma kateri naslov ali vrata uporablja.",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p242-1-02",
    "examId": "p242",
    "questionNumber": 2,
    "officialAnswer": "kaseta",
    "shortExplanation": "Pravilni odgovor je kaseta. Izberi odgovor, ki neposredno ustreza opisu v vprašanju, in preveri, ali se ujema z uradno rešitvijo.",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p242-1-03",
    "examId": "p242",
    "questionNumber": 3,
    "officialAnswer": "C – Maksimalni kot, pri katerem lahko gledamo zaslon s sprejemljivo kakovostjo.",
    "shortExplanation": "Pravilni odgovor je C – Maksimalni kot, pri katerem lahko gledamo zaslon s sprejemljivo kakovostjo. Naloga preverja funkcijo računalniške komponente ali operacijskega sistema. Pravilna izbira je tista, ki neposredno opravlja opisano nalogo, druge možnosti pa opisujejo druge dele računalnika.",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p242-1-04",
    "examId": "p242",
    "questionNumber": 4,
    "officialAnswer": "D – Uporabljen je bil datotečni sistem FAT32.",
    "shortExplanation": "Pravilni odgovor je D – Uporabljen je bil datotečni sistem FAT32. FAT32 ima omejitev največje velikosti posamezne datoteke približno 4 GiB. Zato datoteke velikosti 5 GiB ali 6,32 GiB ni mogoče kopirati, čeprav je na ključku dovolj skupne kapacitete.",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p242-1-05",
    "examId": "p242",
    "questionNumber": 5,
    "officialAnswer": "B – Logično razdelitev diska na dva ali več delov.",
    "shortExplanation": "Pravilni odgovor je B – Logično razdelitev diska na dva ali več delov. Particioniranje pomeni logično razdelitev fizičnega diska na več delov, ki jih sistem obravnava kot ločene enote. Ne gre za fizično rezanje diska.",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p242-1-06",
    "examId": "p242",
    "questionNumber": 6,
    "officialAnswer": "A – 931,32 GiB",
    "shortExplanation": "Pravilni odgovor je A – 931,32 GiB. Proizvajalci uporabljajo decimalne enote, kjer je 1 TB = 10¹² bajtov, operacijski sistemi pa pogosto prikažejo binarno vrednost v GiB. Zato 1 TB ustreza približno 931,32 GiB.",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p242-1-07",
    "examId": "p242",
    "questionNumber": 7,
    "officialAnswer": "D – CMYK",
    "shortExplanation": "Pravilni odgovor je D – CMYK. Tiskalniki barve tvorijo s subtraktivnim mešanjem pigmentov, najpogosteje cian, magenta, rumena in črna. Zato pri tisku ne uporabljamo RGB kot pri zaslonih.",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p242-1-08",
    "examId": "p242",
    "questionNumber": 8,
    "officialAnswer": "C – Hz",
    "shortExplanation": "Pravilni odgovor je C – Hz. Zvočna kartica pretvarja analogni zvočni signal v digitalno obliko za računalnik in digitalni signal nazaj v analognega za zvočnike. Zato je povezana z A/D in D/A pretvorbo.",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p242-1-09",
    "examId": "p242",
    "questionNumber": 9,
    "officialAnswer": "B – 200.2.1.152",
    "shortExplanation": "Pravilni odgovor je B – 200.2.1.152. Izberi odgovor, ki neposredno ustreza opisu v vprašanju, in preveri, ali se ujema z uradno rešitvijo.",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p242-1-10",
    "examId": "p242",
    "questionNumber": 10,
    "officialAnswer": "C – Za povezovanje računalnikov v omrežje.",
    "shortExplanation": "Pravilni odgovor je C – Za povezovanje računalnikov v omrežje. Stikalo L2 deluje na povezavni plasti in posreduje okvirje na podlagi naslovov MAC. Uporabimo ga za povezovanje naprav znotraj istega lokalnega omrežja.",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p242-1-11",
    "examId": "p242",
    "questionNumber": 11,
    "officialAnswer": "D – TCP; F – UDP",
    "shortExplanation": "Pravilni odgovor je D – TCP; F – UDP. TCP in UDP sta protokola transportne plasti. TCP zagotavlja zanesljiv prenos s povezavo, UDP pa hitrejši prenos brez potrjevanja vsakega paketa.",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p242-1-12",
    "examId": "p242",
    "questionNumber": 12,
    "officialAnswer": "DROP DATABASE Ljubljana2105;",
    "shortExplanation": "Pravilni odgovor je DROP DATABASE Ljubljana2105;. DROP DATABASE izbriše celotno podatkovno bazo. Uporabi se, kadar želimo odstraniti pravkar ustvarjeno bazo, ne samo posamezne tabele.",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p242-1-13",
    "examId": "p242",
    "questionNumber": 13,
    "officialAnswer": "D – CREATE, ALTER, DROP",
    "shortExplanation": "Pravilni odgovor je D – CREATE, ALTER, DROP. Naloga preverja poznavanje osnovnih SQL ukazov, omejitev ali pomena stavka. Pri takih nalogah najprej ugotovi, ali gre za ustvarjanje/spremembo strukture, vnos podatkov ali poizvedbo.",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p242-1-14",
    "examId": "p242",
    "questionNumber": 14,
    "officialAnswer": "B – int; E – decimal",
    "shortExplanation": "Pravilni odgovor je B – int; E – decimal. Numerični podatkovni tipi so namenjeni shranjevanju števil, na primer celih ali decimalnih vrednosti. Besedilni tipi, kot je VARCHAR, niso numerični.",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p242-1-15",
    "examId": "p242",
    "questionNumber": 15,
    "officialAnswer": "D – <ul>",
    "shortExplanation": "Pravilni odgovor je D – <ul>. Element ul označuje neurejen seznam, element ol pa urejen seznam. Posamezne postavke so zapisane z elementi li.",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p242-1-16",
    "examId": "p242",
    "questionNumber": 16,
    "officialAnswer": "href target=\"_blank\"",
    "shortExplanation": "Pravilni odgovor je href target=\"_blank\". Element <a> ustvari hiperpovezavo, atribut href pa določi naslov povezave. Atribut target=\"_blank\" poskrbi, da se povezava odpre v novem zavihku.",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p242-1-17",
    "examId": "p242",
    "questionNumber": 17,
    "officialAnswer": "A – X = X + 6 * X",
    "shortExplanation": "Pravilni odgovor je A – X = X + 6 * X. Sedemkratnik spremenljivke pomeni, da vrednost pomnožimo s 7 in jo priredimo nazaj spremenljivki. Zato mora biti v izrazu množenje, ne deljenje ali ostanek.",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p242-1-18",
    "examId": "p242",
    "questionNumber": 18,
    "officialAnswer": "A = 121 while(A > 80): print(A) A -= 11",
    "shortExplanation": "Pravilni odgovor je A = 121 while(A > 80): print(A) A -= 11. Enakovredna zanka mora ohraniti začetno vrednost spremenljivke, isti pogoj za ponavljanje, izpis znotraj zanke in isti korak spreminjanja. Če se spremeni katerikoli od teh delov, zaporedje izpisov ni več enako.",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p243-1-01",
    "examId": "p243",
    "questionNumber": 1,
    "officialAnswer": "25,6 GB/s",
    "shortExplanation": "Pravilni odgovor je 25,6 GB/s. Prepustnost dobimo iz frekvence in širine vodila, pri tem pa 32 bitov pretvorimo v 4 bajte. Ker naloga upošteva podano hitrost prenosa, rezultat znaša 25,6 GB/s.",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p243-1-02",
    "examId": "p243",
    "questionNumber": 2,
    "officialAnswer": "Katerakoli vrednost od 1 do 127.",
    "shortExplanation": "Pravilni odgovor je Katerakoli vrednost od 1 do 127. Pri USB je teoretična omejitev števila naprav na enem krmilniku 127. V praksi je število lahko manjše zaradi napajanja, zvezdišč in drugih omejitev.",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p243-1-03",
    "examId": "p243",
    "questionNumber": 3,
    "officialAnswer": "C – ReFS",
    "shortExplanation": "Pravilni odgovor je C – ReFS. Defragmentacija je smiselna predvsem pri klasičnih trdih diskih, kjer razdrobljeni deli datotek povzročijo dodatno premikanje glave. Pri SSD-jih tak postopek ni potreben na enak način.",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p243-1-04",
    "examId": "p243",
    "questionNumber": 4,
    "officialAnswer": "D – mSATA",
    "shortExplanation": "Pravilni odgovor je D – mSATA. SSD-ji podatke hranijo v bliskovnem oziroma flash pomnilniku. Ker nimajo mehanskih plošč in glave, delujejo drugače kot klasični HDD-ji.",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p243-1-05",
    "examId": "p243",
    "questionNumber": 5,
    "officialAnswer": "A – IOAPIC",
    "shortExplanation": "Pravilni odgovor je A – IOAPIC. Naloga preverja funkcijo računalniške komponente ali operacijskega sistema. Pravilna izbira je tista, ki neposredno opravlja opisano nalogo, druge možnosti pa opisujejo druge dele računalnika.",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p243-1-06",
    "examId": "p243",
    "questionNumber": 6,
    "officialAnswer": "B – CISC",
    "shortExplanation": "Pravilni odgovor je B – CISC. Naloga preverja funkcijo računalniške komponente ali operacijskega sistema. Pravilna izbira je tista, ki neposredno opravlja opisano nalogo, druge možnosti pa opisujejo druge dele računalnika.",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p243-1-07",
    "examId": "p243",
    "questionNumber": 7,
    "officialAnswer": "A – 4",
    "shortExplanation": "Pravilni odgovor je A – 4. RAID 10 združuje zrcaljenje in razporejanje podatkov, zato potrebuje najmanj štiri diske. Dva diska sta premalo za kombinacijo RAID 1 + 0.",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p243-1-08",
    "examId": "p243",
    "questionNumber": 8,
    "officialAnswer": "B – 0,24 ns",
    "shortExplanation": "Pravilni odgovor je B – 0,24 ns. Čas enega cikla je obratna vrednost frekvence. Pri 4200 MHz oziroma 4,2 GHz traja cikel približno 1 / 4,2·10⁹ s, to je okoli 0,238 ns.",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p243-1-09",
    "examId": "p243",
    "questionNumber": 9,
    "officialAnswer": "C – 172.30.1.100",
    "shortExplanation": "Pravilni odgovor je C – 172.30.1.100. Zasebni naslovi IPv4 so v obsegih 10.0.0.0/8, 172.16.0.0/12 in 192.168.0.0/16. Ti naslovi se uporabljajo v lokalnih omrežjih in niso neposredno javno usmerjani po internetu.",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p243-1-10",
    "examId": "p243",
    "questionNumber": 10,
    "officialAnswer": "B – Omrežni.",
    "shortExplanation": "Pravilni odgovor je B – Omrežni. Naslov IP spada na omrežno plast modela OSI. Pravila, ki filtrirajo promet glede na IP naslov, zato delujejo na tej plasti.",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p243-1-11",
    "examId": "p243",
    "questionNumber": 11,
    "officialAnswer": "D – Pošiljanje na FTP-strežnik podjetja.; E – Dostop do portala http://podpora.podjetje.si.",
    "shortExplanation": "Pravilni odgovor je D – Pošiljanje na FTP-strežnik podjetja.; E – Dostop do portala http://podpora.podjetje.si. HTTP omogoča dostop do spletnih strani, FTP pa prenos datotek. Če ta protokola onemogočimo, ne bosta več delovala ustrezna spletna in datotečna storitev.",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p243-1-12",
    "examId": "p243",
    "questionNumber": 12,
    "officialAnswer": "DESCRIBE Nova tabela;",
    "shortExplanation": "Pravilni odgovor je DESCRIBE Nova tabela;. DESCRIBE prikaže zgradbo tabele, na primer imena stolpcev, tipe in omejitve. Zato je primeren za preverjanje opisa pravkar ustvarjene tabele.",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p243-1-13",
    "examId": "p243",
    "questionNumber": 13,
    "officialAnswer": "D – SELECT",
    "shortExplanation": "Pravilni odgovor je D – SELECT. Naloga preverja poznavanje osnovnih SQL ukazov, omejitev ali pomena stavka. Pri takih nalogah najprej ugotovi, ali gre za ustvarjanje/spremembo strukture, vnos podatkov ali poizvedbo.",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p243-1-14",
    "examId": "p243",
    "questionNumber": 14,
    "officialAnswer": "ALTER varchar(13)",
    "shortExplanation": "Pravilni odgovor je ALTER varchar(13). ALTER TABLE uporabimo za spremembo strukture obstoječe tabele, VARCHAR(13) pa določi besedilni tip z dolžino 13 znakov. To je primerno za vrednosti, ki jih ne računamo kot števila.",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p243-1-15",
    "examId": "p243",
    "questionNumber": 15,
    "officialAnswer": "D – ul",
    "shortExplanation": "Pravilni odgovor je D – ul. Element ul označuje neurejen seznam, element ol pa urejen seznam. Posamezne postavke so zapisane z elementi li.",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p243-1-16",
    "examId": "p243",
    "questionNumber": 16,
    "officialAnswer": "src alt",
    "shortExplanation": "Pravilni odgovor je src alt. Atribut src določi pot do slike, atribut alt pa nadomestno besedilo, če slike ni mogoče prikazati. Alt je pomemben tudi za dostopnost.",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p243-1-17",
    "examId": "p243",
    "questionNumber": 17,
    "officialAnswer": "B – Zanka.",
    "shortExplanation": "Pravilni odgovor je B – Zanka. Diagram poteka uporablja standardne simbole za začetek/konec, prirejanje, odločanje in vhod/izhod. Element, ki ne sodi med te osnovne simbole, ni pravilen gradnik diagrama.",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p243-1-18",
    "examId": "p243",
    "questionNumber": 18,
    "officialAnswer": "int i=18; while(i>1) { izpis(i); i-=2; }",
    "shortExplanation": "Pravilni odgovor je int i=18; while(i>1) { izpis(i); i-=2; }. Enakovredna zanka mora ohraniti začetno vrednost spremenljivke, isti pogoj za ponavljanje, izpis znotraj zanke in isti korak spreminjanja. Če se spremeni katerikoli od teh delov, zaporedje izpisov ni več enako.",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p251-1-01",
    "examId": "p251",
    "questionNumber": 1,
    "officialAnswer": "Pomnilnik samodejno odkriva in popravlja napake, ki nastanejo med shranjevanjem ali prenosom podatkov.",
    "shortExplanation": "Pravilni odgovor je Pomnilnik samodejno odkriva in popravlja napake, ki nastanejo med shranjevanjem ali prenosom podatkov. ECC pomnilnik vsebuje mehanizem za zaznavanje in popravljanje določenih napak v podatkih. Uporablja se predvsem tam, kjer je pomembna zanesljivost delovanja.",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p251-1-02",
    "examId": "p251",
    "questionNumber": 2,
    "officialAnswer": "Na pogonu C: se izvede testiranje diska.",
    "shortExplanation": "Pravilni odgovor je Na pogonu C: se izvede testiranje diska. CHKDSK preveri datotečni sistem in stanje diska, stikalo /F pa pomeni, da naj poskuša najdene napake tudi popraviti. V nalogi je cilj preverjanje pogona C:.",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p251-1-03",
    "examId": "p251",
    "questionNumber": 3,
    "officialAnswer": "D – Hz (hertz).",
    "shortExplanation": "Pravilni odgovor je D – Hz (hertz). Izberi odgovor, ki neposredno ustreza opisu v vprašanju, in preveri, ali se ujema z uradno rešitvijo.",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p251-1-04",
    "examId": "p251",
    "questionNumber": 4,
    "officialAnswer": "B – Tipkovnica, miška, mikrofon.",
    "shortExplanation": "Pravilni odgovor je B – Tipkovnica, miška, mikrofon. Izberi odgovor, ki neposredno ustreza opisu v vprašanju, in preveri, ali se ujema z uradno rešitvijo.",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p251-1-05",
    "examId": "p251",
    "questionNumber": 5,
    "officialAnswer": "C – 931,32 GiB.",
    "shortExplanation": "Pravilni odgovor je C – 931,32 GiB. Proizvajalci uporabljajo decimalne enote, kjer je 1 TB = 10¹² bajtov, operacijski sistemi pa pogosto prikažejo binarno vrednost v GiB. Zato 1 TB ustreza približno 931,32 GiB.",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p251-1-06",
    "examId": "p251",
    "questionNumber": 6,
    "officialAnswer": "C – Določanje pomnilniškega naslova za prenos podatkov.",
    "shortExplanation": "Pravilni odgovor je C – Določanje pomnilniškega naslova za prenos podatkov. Naslovno vodilo ne prenaša samih podatkov, ampak določa, do katerega pomnilniškega naslova ali naprave se dostopa. Podatki se nato prenašajo po podatkovnem vodilu.",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p251-1-07",
    "examId": "p251",
    "questionNumber": 7,
    "officialAnswer": "A – Preveriti napajanje in temperaturo CPE.",
    "shortExplanation": "Pravilni odgovor je A – Preveriti napajanje in temperaturo CPE. Izberi odgovor, ki neposredno ustreza opisu v vprašanju, in preveri, ali se ujema z uradno rešitvijo.",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p251-1-08",
    "examId": "p251",
    "questionNumber": 8,
    "officialAnswer": "B – Snov je feromagnetna.",
    "shortExplanation": "Pravilni odgovor je B – Snov je feromagnetna. Klasični trdi disk podatke zapisuje magnetno, zato so plošče prekrite z magnetno snovjo. Usmerjenost magnetnih delcev predstavlja zapisane bite.",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p251-1-09",
    "examId": "p251",
    "questionNumber": 9,
    "officialAnswer": "B – Ping",
    "shortExplanation": "Pravilni odgovor je B – Ping. Izberi odgovor, ki neposredno ustreza opisu v vprašanju, in preveri, ali se ujema z uradno rešitvijo.",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p251-1-10",
    "examId": "p251",
    "questionNumber": 10,
    "officialAnswer": "C – Požarni zid (angl. firewall).",
    "shortExplanation": "Pravilni odgovor je C – Požarni zid (angl. firewall). Naloga preverja pravilno izbiro HTML elementa, atributa ali CSS selektorja. Pri HTML/CSS nalogah pazi, ali spreminjaš vse elemente neke vrste, element z razredom ali element z identifikatorjem.",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p251-1-11",
    "examId": "p251",
    "questionNumber": 11,
    "officialAnswer": "B – 2023:12:AB:1::1:; E – 2023:12:AB:1::A:",
    "shortExplanation": "Pravilni odgovor je B – 2023:12:AB:1::1:; E – 2023:12:AB:1::A:. Naloga preverja osnovno omrežno pravilo, protokol ali naslov. Pomagaj si s tem, na kateri plasti deluje naprava oziroma kateri naslov ali vrata uporablja.",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p251-1-12",
    "examId": "p251",
    "questionNumber": 12,
    "officialAnswer": "D – Davčna številka.",
    "shortExplanation": "Pravilni odgovor je D – Davčna številka. Primarni ključ enolično določa posamezno vrstico v tabeli. Zato mora biti stabilen, edinstven in ne sme dopuščati dvoumnosti med zapisi.",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p251-1-13",
    "examId": "p251",
    "questionNumber": 13,
    "officialAnswer": "A – Zniža ceno vseh izdelkov v kategoriji »Akcija« za 10 %.",
    "shortExplanation": "Pravilni odgovor je A – Zniža ceno vseh izdelkov v kategoriji »Akcija« za 10 %. Stavek UPDATE spremeni obstoječe vrstice, SET cena = cena * 0.9 pa zniža ceno za 10 %. Pogoj WHERE omeji spremembo samo na izdelke v kategoriji Akcija.",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p251-1-14",
    "examId": "p251",
    "questionNumber": 14,
    "officialAnswer": "LIKE IS NOT NULL",
    "shortExplanation": "Pravilni odgovor je LIKE IS NOT NULL. LIKE 'A%' poišče vrednosti, ki se začnejo s črko A, IS NOT NULL pa zahteva, da podatek obstaja. Tako izberemo samo dijake z ustreznim priimkom in vpisanim naslovom.",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p251-1-15",
    "examId": "p251",
    "questionNumber": 15,
    "officialAnswer": "A – Modro.",
    "shortExplanation": "Pravilni odgovor je A – Modro. V zapisu RGB so vrednosti podane po vrstnem redu rdeča, zelena, modra. Ker sta rdeča in zelena 0, modra pa 255, zapis predstavlja čisto modro barvo.",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p251-1-16",
    "examId": "p251",
    "questionNumber": 16,
    "officialAnswer": "ul ol",
    "shortExplanation": "Pravilni odgovor je ul ol. Element ul označuje neurejen seznam, element ol pa urejen seznam. Posamezne postavke so zapisane z elementi li.",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p251-1-17",
    "examId": "p251",
    "questionNumber": 17,
    "officialAnswer": "D – float, int, if",
    "shortExplanation": "Pravilni odgovor je D – float, int, if. Vrstica brez zanke ne vsebuje ukazov, kot so for, while ali do while. Tak odgovor lahko vsebuje druge kontrolne stavke ali podatkovne tipe, vendar ne ponavljanja.",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p251-1-18",
    "examId": "p251",
    "questionNumber": 18,
    "officialAnswer": "int a = 10; while(a < 90) { izpis(a); a = a + 10; }",
    "shortExplanation": "Pravilni odgovor je int a = 10; while(a < 90) { izpis(a); a = a + 10; }. Enakovredna zanka mora ohraniti začetno vrednost spremenljivke, isti pogoj za ponavljanje, izpis znotraj zanke in isti korak spreminjanja. Če se spremeni katerikoli od teh delov, zaporedje izpisov ni več enako.",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p252-1-01",
    "examId": "p252",
    "questionNumber": 1,
    "officialAnswer": "9",
    "shortExplanation": "Pravilni odgovor je 9. Frekvenca 3,0 GHz pomeni 3 milijarde ciklov na sekundo, torej približno 3 cikle v eni nanosekundi. V 3 ns procesor izvede 9 ciklov oziroma ukazov, če predpostavimo en ukaz na cikel.",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p252-1-02",
    "examId": "p252",
    "questionNumber": 2,
    "officialAnswer": "9,56 ms",
    "shortExplanation": "Pravilni odgovor je 9,56 ms. Pri dostopnem času diska upoštevamo povprečni iskalni čas in povprečno rotacijsko zakasnitev. Pri 5400 obratih na minuto je polovica časa enega obrata približno 5,56 ms, skupaj s 4 ms pa dobimo 9,56 ms.",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p252-1-03",
    "examId": "p252",
    "questionNumber": 3,
    "officialAnswer": "D – Čas, potreben za prehod iz ene barve v drugo.",
    "shortExplanation": "Pravilni odgovor je D – Čas, potreben za prehod iz ene barve v drugo. Naloga preverja funkcijo računalniške komponente ali operacijskega sistema. Pravilna izbira je tista, ki neposredno opravlja opisano nalogo, druge možnosti pa opisujejo druge dele računalnika.",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p252-1-04",
    "examId": "p252",
    "questionNumber": 4,
    "officialAnswer": "C – Poškodovani sektorji, ki ne morejo zanesljivo shranjevati podatkov.",
    "shortExplanation": "Pravilni odgovor je C – Poškodovani sektorji, ki ne morejo zanesljivo shranjevati podatkov. Slab sektor je poškodovan ali nezanesljiv del diska, na katerega podatkov ni več varno zapisovati. Operacijski sistem ali disk ga lahko označi, da se ga pri nadaljnji uporabi izogne.",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p252-1-05",
    "examId": "p252",
    "questionNumber": 5,
    "officialAnswer": "B – 1 TB.",
    "shortExplanation": "Pravilni odgovor je B – 1 TB. Vrednost 931,32 GiB je binarni prikaz približno enega decimalnega terabajta. Proizvajalci kapaciteto običajno navajajo v decimalnih GB/TB.",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p252-1-06",
    "examId": "p252",
    "questionNumber": 6,
    "officialAnswer": "A – USB-C.",
    "shortExplanation": "Pravilni odgovor je A – USB-C. USB-C je sodoben priključek, ki lahko združuje prenos podatkov, napajanje in video izhod. Zato je primeren za različne zunanje naprave in priklop monitorjev.",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p252-1-07",
    "examId": "p252",
    "questionNumber": 7,
    "officialAnswer": "B – Baterija CMOS.",
    "shortExplanation": "Pravilni odgovor je B – Baterija CMOS. Nastavitve, kot so datum, ura in vrstni red zagona, se hranijo v CMOS/UEFI nastavitvah, ki jih pomaga ohranjati baterija na matični plošči. Ob izgubi napajanja bi se sicer nastavitev lahko izgubile.",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p252-1-08",
    "examId": "p252",
    "questionNumber": 8,
    "officialAnswer": "C – Bliskovni pomnilnik NAND.",
    "shortExplanation": "Pravilni odgovor je C – Bliskovni pomnilnik NAND. SSD-ji podatke hranijo v bliskovnem oziroma flash pomnilniku. Ker nimajo mehanskih plošč in glave, delujejo drugače kot klasični HDD-ji.",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p252-1-09",
    "examId": "p252",
    "questionNumber": 9,
    "officialAnswer": "D – 200.2.1.65",
    "shortExplanation": "Pravilni odgovor je D – 200.2.1.65. Privzeti prehod je pogosto prvi uporaben naslov v podomrežju. Omrežni in broadcast naslov se ne smeta dodeliti napravam.",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p252-1-10",
    "examId": "p252",
    "questionNumber": 10,
    "officialAnswer": "B – Stikalo (angl. switch).",
    "shortExplanation": "Pravilni odgovor je B – Stikalo (angl. switch). Naloga preverja osnovno omrežno pravilo, protokol ali naslov. Pomagaj si s tem, na kateri plasti deluje naprava oziroma kateri naslov ali vrata uporablja.",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p252-1-11",
    "examId": "p252",
    "questionNumber": 11,
    "officialAnswer": "A – Na fizičnem.; B – Na povezavnem.",
    "shortExplanation": "Pravilni odgovor je A – Na fizičnem.; B – Na povezavnem. Uspešen ping pokaže, da osnovna povezljivost do strežnika deluje vsaj na spodnjih plasteh. Težava je lahko višje, na primer pri transportu, aplikaciji ali spletnem strežniku.",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p252-1-12",
    "examId": "p252",
    "questionNumber": 12,
    "officialAnswer": "B – ORDER BY stolpec.",
    "shortExplanation": "Pravilni odgovor je B – ORDER BY stolpec. ORDER BY razvrsti rezultat po izbranem stolpcu, naraščajoče ali padajoče. GROUP BY združuje vrstice, ni pa namenjen navadnemu sortiranju.",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p252-1-13",
    "examId": "p252",
    "questionNumber": 13,
    "officialAnswer": "B – Prikaže vse podatke o dijakih v tabeli tblDijaki, ki so iz kraja, ki se začne s črko d.",
    "shortExplanation": "Pravilni odgovor je B – Prikaže vse podatke o dijakih v tabeli tblDijaki, ki so iz kraja, ki se začne s črko d. Vzorec LIKE 'd%' pomeni, da se vrednost začne s črko d, znak % pa predstavlja poljubno nadaljevanje. SELECT tblDijaki.* zato vrne vse stolpce za ustrezne dijake.",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p252-1-14",
    "examId": "p252",
    "questionNumber": 14,
    "officialAnswer": "C – CREATE; E – ALTER",
    "shortExplanation": "Pravilni odgovor je C – CREATE; E – ALTER. Naloga preverja poznavanje osnovnih SQL ukazov, omejitev ali pomena stavka. Pri takih nalogah najprej ugotovi, ali gre za ustvarjanje/spremembo strukture, vnos podatkov ali poizvedbo.",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p252-1-15",
    "examId": "p252",
    "questionNumber": 15,
    "officialAnswer": "C – input, span, img, a",
    "shortExplanation": "Pravilni odgovor je C – input, span, img, a. Vrstični elementi ne začnejo nujno nove vrstice in se prilegajo toku besedila. Primeri so span, img, a in input, medtem ko so div, h1, p in ol blokovni elementi.",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p252-1-16",
    "examId": "p252",
    "questionNumber": 16,
    "officialAnswer": "<a> href <div> class <img> alt <html> lang 4 pravilne vrstice 2 točki. 3 ali 2 pravilni vrstici 1 točka.",
    "shortExplanation": "Pravilni odgovor je <a> href <div> class <img> alt <html> lang 4 pravilne vrstice 2 točki. 3 ali 2 pravilni vrstici 1 točka. Element <a> ustvari hiperpovezavo, atribut href pa določi naslov povezave. Atribut target=\"_blank\" poskrbi, da se povezava odpre v novem zavihku.",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p252-1-17",
    "examId": "p252",
    "questionNumber": 17,
    "officialAnswer": "A – else, for, case",
    "shortExplanation": "Pravilni odgovor je A – else, for, case. Zanka je programska struktura za ponavljanje ukazov, na primer for ali while. Pri takih nalogah poišči ključno besedo, ki pomeni ponavljanje.",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p252-1-18",
    "examId": "p252",
    "questionNumber": 18,
    "officialAnswer": "int x = 200; while(x > 0) { izpis(x); x=x - 10; }",
    "shortExplanation": "Pravilni odgovor je int x = 200; while(x > 0) { izpis(x); x=x - 10; }. Enakovredna zanka mora ohraniti začetno vrednost spremenljivke, isti pogoj za ponavljanje, izpis znotraj zanke in isti korak spreminjanja. Če se spremeni katerikoli od teh delov, zaporedje izpisov ni več enako.",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p253-1-01",
    "examId": "p253",
    "questionNumber": 1,
    "officialAnswer": "3,725 GiB",
    "shortExplanation": "Pravilni odgovor je 3,725 GiB. Decimalnih 4 GB pretvorimo v binarne GiB tako, da število bajtov delimo z 1024³. Zato operacijski sistem prikaže približno 3,725 GiB.",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p253-1-02",
    "examId": "p253",
    "questionNumber": 2,
    "officialAnswer": "3,03 ns",
    "shortExplanation": "Pravilni odgovor je 3,03 ns. Pri 3,30 GHz traja en cikel približno 1 / 3,30 GHz, to je okoli 0,303 ns. Za 10 ukazov pri enem ukazu na cikel dobimo približno 3,03 ns.",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p253-1-03",
    "examId": "p253",
    "questionNumber": 3,
    "officialAnswer": "A – Severni most.",
    "shortExplanation": "Pravilni odgovor je A – Severni most. Severni most je bil v klasični zasnovi vezni čip za komunikacijo med procesorjem, pomnilnikom in hitrimi vodili. Zato ustreza opisu nadzora toka podatkov med CPE in pomnilnikom.",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p253-1-04",
    "examId": "p253",
    "questionNumber": 4,
    "officialAnswer": "B – Izvajanje kompleksnih matematičnih operacij.",
    "shortExplanation": "Pravilni odgovor je B – Izvajanje kompleksnih matematičnih operacij. Sodobne grafične kartice imajo veliko vzporednih jeder, zato so zelo primerne za grafične in druge matematično zahtevne izračune. Ne izvajajo pa operacijskega sistema kot glavne naloge.",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p253-1-05",
    "examId": "p253",
    "questionNumber": 5,
    "officialAnswer": "D – Povečanje taktne frekvence komponent.",
    "shortExplanation": "Pravilni odgovor je D – Povečanje taktne frekvence komponent. Navijanje pomeni, da komponento nastavimo na višjo taktno frekvenco od privzete. S tem lahko povečamo zmogljivost, vendar se pogosto povečata tudi poraba energije in segrevanje.",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 4
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p253-1-06",
    "examId": "p253",
    "questionNumber": 6,
    "officialAnswer": "A – Bluetooth.",
    "shortExplanation": "Pravilni odgovor je A – Bluetooth. Bluetooth je namenjen kratkodometni brezžični povezavi naprav, kot so tipkovnice, miške, slušalke in drugi dodatki. Wi‑Fi je predvsem za omrežno povezovanje.",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p253-1-07",
    "examId": "p253",
    "questionNumber": 7,
    "officialAnswer": "C – Nalagalnik bootstrap.",
    "shortExplanation": "Pravilni odgovor je C – Nalagalnik bootstrap. Bootstrap oziroma zagonski nalagalnik je del zagonskega postopka, ki poišče in zažene operacijski sistem. POST najprej preveri strojno opremo, ne nalaga pa neposredno sistema.",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p253-1-08",
    "examId": "p253",
    "questionNumber": 8,
    "officialAnswer": "B – Zvočna kartica.",
    "shortExplanation": "Pravilni odgovor je B – Zvočna kartica. Zvočna kartica pretvarja analogni zvočni signal v digitalno obliko za računalnik in digitalni signal nazaj v analognega za zvočnike. Zato je povezana z A/D in D/A pretvorbo.",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p253-1-09",
    "examId": "p253",
    "questionNumber": 9,
    "officialAnswer": "A – Vsi biti gostiteljskega dela naslova (angl. Host ID) imajo vrednost 1.",
    "shortExplanation": "Pravilni odgovor je A – Vsi biti gostiteljskega dela naslova (angl. Host ID) imajo vrednost 1. Broadcast naslov ima v gostiteljskem delu vse bite nastavljene na 1. Tak naslov je namenjen pošiljanju vsem napravam v istem omrežju.",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p253-1-10",
    "examId": "p253",
    "questionNumber": 10,
    "officialAnswer": "B – Ogled pretočnega videa.",
    "shortExplanation": "Pravilni odgovor je B – Ogled pretočnega videa. UDP se pogosto uporablja pri pretočnih vsebinah, kjer je pomembna nizka zakasnitev in ni nujno ponovno pošiljanje vsakega izgubljenega paketa. Za splet, e-pošto in prenos datotek je pogostejši TCP.",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 5
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p253-1-11",
    "examId": "p253",
    "questionNumber": 11,
    "officialAnswer": "D – Naslov MAC.; E – Fizična vrata.",
    "shortExplanation": "Pravilni odgovor je D – Naslov MAC.; E – Fizična vrata. Stikalo odloča o posredovanju okvirjev na podlagi naslovov MAC. V svoji tabeli hrani povezavo med naslovom MAC in fizičnim vmesnikom oziroma vrati.",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p253-1-12",
    "examId": "p253",
    "questionNumber": 12,
    "officialAnswer": "C – Enoličen identifikator vrstice v tabeli.",
    "shortExplanation": "Pravilni odgovor je C – Enoličen identifikator vrstice v tabeli. Primarni ključ enolično določa posamezno vrstico v tabeli. Zato mora biti stabilen, edinstven in ne sme dopuščati dvoumnosti med zapisi.",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p253-1-13",
    "examId": "p253",
    "questionNumber": 13,
    "officialAnswer": "D – Proces organiziranja podatkov z namenom zmanjšanja redundance.",
    "shortExplanation": "Pravilni odgovor je D – Proces organiziranja podatkov z namenom zmanjšanja redundance. Naloga preverja poznavanje osnovnih SQL ukazov, omejitev ali pomena stavka. Pri takih nalogah najprej ugotovi, ali gre za ustvarjanje/spremembo strukture, vnos podatkov ali poizvedbo.",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p253-1-14",
    "examId": "p253",
    "questionNumber": 14,
    "officialAnswer": "NOT NULL PRIMARY KEY (id)",
    "shortExplanation": "Pravilni odgovor je NOT NULL PRIMARY KEY (id). NOT NULL pomeni, da polje ne sme ostati prazno, PRIMARY KEY pa določi enolični identifikator zapisa. Pri tabeli je id zato ključ, ime_priimek pa obvezen podatek.",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p253-1-15",
    "examId": "p253",
    "questionNumber": 15,
    "officialAnswer": "B – <a>",
    "shortExplanation": "Pravilni odgovor je B – <a>. Element <a> ustvari hiperpovezavo, atribut href pa določi naslov povezave. Atribut target=\"_blank\" poskrbi, da se povezava odpre v novem zavihku.",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 6
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p253-1-16",
    "examId": "p253",
    "questionNumber": 16,
    "officialAnswer": "padding-left margin-bottom",
    "shortExplanation": "Pravilni odgovor je padding-left margin-bottom. Padding je notranji odmik med vsebino in robom elementa, margin pa zunanji odmik od drugih elementov. Zato moramo glede na označen položaj uporabiti ustrezno lastnost.",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p253-1-17",
    "examId": "p253",
    "questionNumber": 17,
    "officialAnswer": "A – x = x % 11",
    "shortExplanation": "Pravilni odgovor je A – x = x % 11. Operator % oziroma mod vrne ostanek pri celoštevilskem deljenju. Zato se uporablja, kadar želimo ugotoviti, kaj ostane po deljenju z izbranim številom.",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  },
  {
    "questionId": "p253-1-18",
    "examId": "p253",
    "questionNumber": 18,
    "officialAnswer": "A A 11 = - A Izhodni blok za izpis spremenljivke A 1 točka, prireditveni blok z ustreznim zmanjševanjem spremenljivke A 1 točka.",
    "shortExplanation": "Pravilni odgovor je A A 11 = - A Izhodni blok za izpis spremenljivke A 1 točka, prireditveni blok z ustreznim zmanjševanjem spremenljivke A 1 točka. Enakovredna zanka mora ohraniti začetno vrednost spremenljivke, isti pogoj za ponavljanje, izpis znotraj zanke in isti korak spreminjanja. Če se spremeni katerikoli od teh delov, zaporedje izpisov ni več enako.",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "page": 7
    },
    "note": "Kratka didaktična razlaga, pripravljena iz vprašanja in uradne rešitve."
  }
]

export const maturaAnswerExplanationById: Record<string, MaturaAnswerExplanation> =
  Object.fromEntries(maturaAnswerExplanations.map((item) => [item.questionId, item]))
