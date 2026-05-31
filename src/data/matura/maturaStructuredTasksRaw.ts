import type { MaturaStructuredTask } from './maturaQuestionTypes'

export const maturaStructuredTasksRaw: MaturaStructuredTask[] = [
  {
    "id": "p231-2-1",
    "examId": "p231",
    "examCode": "P231",
    "part": 2,
    "taskNumber": 1,
    "points": 12,
    "category": "html_css",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Podana je vizualna podoba spletnega dokumenta. \n \n \n \n1.1. \nZnotraj glave spletnega dokumenta zapišite ustrezno kodo, ki bo dodala avtorja spletnega \ndokumenta z imenom Ricko, in del kode, ki bo podajal ključne besede HTML, CSS in POM. \n(2 točki) \n \n \n \n \n \n \n \n \n1.2. \nV nogi dokumenta so tri povezave, in sicer CPI, RIC in MIZŠ. Zapišite in ustrezno umestite \nkodo spletnega dokumenta, ki bo z urejenim seznamom prikazala prazne povezave. \nKreirane povezave so lahko podane poljubno. \n(3 točke) \n \n \n \n \n \n \n \n \n \n\n \n \n \n \n1.3. \nZapišite ustrezno kodo spletnega dokumenta, ki bo v blokovnem elementu meni poskrbela, \nda bodo znotraj njega gnezdeni blokovni elementi STORITVE, TEHNIČNA PODPORA, \nPROGRAMIRANJE IN SISTEMSKO VZDRŽEVANJE. Za gnezdene elemente določite \nenolično ime, prek katerega bomo lahko izvedli skupinsko oblikovanje. \n(3 točke) \n \n \n \n \n\n \n\n1.4. \nPredpostavimo, da ste kodo iz naloge 1.3. zapisali v celoti. Nad gnezdenimi elementi \nželimo izvesti naslednje: \n- vsem gnezdenim elementom prek skupnega poimenovanja določimo pisavo na Georgia \nin Times New Roman; \n- ob prehodu miške nad polji STORITVE, TEHNIČNA PODPORA, PROGRAMIRANJE IN \nSISTEMSKO VZDRŽEVANJE naj se spremeni barva ozadja na barvo po modelu RGB \nz vrednostmi 87, 238 in 255. Poleg tega naj se ob prehodu miške izvede levi zamik \ncelotnega polja za 20 točk; \n- zapišite le del kode za oblikovanje za ustrezen blok spletnega dokumenta, ki bo za del \nvsebine (DPK PM ZA RAČUNALNIŠTVO) prikazala polno obrobo debeline \n1 točka, barva pa bo imela vrednost #5F9EA0. \n(4 točke)",
    "solutionText": "Naloga Točke \nRešitev \nDodatna navodila \n1.1 \n2 \nPrimer: \n <meta name=\"keywords\" content=\"HTML, CSS, POM\"> \n<meta name=\"author\" content=\"Ricko\"> \nUstrezna nastavitev avtorja 1 točka, \nustrezna nastavitev ključnih besed 1 točka. \n1.2 \n3 \nPrimer: \n <div id=\"noga\"> \n<ol> \n \n<li><a href=\"#\">CPI</a></li> \n \n<li><a href=\"#\">RIC</a></li> \n \n<li><a href=\"#\">MIZŠ</a></li> \n</ol> \n</div> \nUstrezna umestitev v blokovni element \n1 točka, ustrezna uporaba kode seznama \n1 točka, ustrezno kreiranje povezav 1 točka. \n1.3 \n3 \nPrimer: \n <div id=\"meni\"> \n \n<div id=\"prvi\" class=\"napis\">STORITVE</div> \n \n<div id=\"drugi\" class=\"napis\">TEHNIČNA PODPORA</div> \n \n<div id=\"tretji\" class=\"napis\">PROGRAMIRANJE</div> \n \n<div id=\"cetrti\" class=\"napis\">SISTEMSKO VZDRŽEVANJE</div> \n</div> \nUstrezen zapis blokovnega elementa meni \n1 točka, ustrezno zapisani gnezdeni elementi \n1 točka, ustrezna nastavitev enoličnega \nimena 1 točka. \n1.4 \n4 \nPrimer: \n .napis{ \n \nfont-family: Georgia, \"Times New Roman\"; \n} \n \n#prvi:hover, #drugi:hover, #tretji:hover, #cetrti:hover{ \nbackground-color: rgb(87, 238, 255); \npadding-left: 20px; \n} \n#vsebina{ \nborder: 1px solid #5F9EA0; \n} \nUstrezna sprememba pisave 1 točka, \nustrezna sprememba barve ozadja ob \nprehodu miške 1 točka, \nustrezna nastavitev odmika ob prehodu \nmiške 1 točka, \nustrezna nastavitev obrobe 1 točka.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p231-2-2",
    "examId": "p231",
    "examCode": "P231",
    "part": 2,
    "taskNumber": 2,
    "points": 12,
    "category": "omrezja",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Podana je omrežna shema. Usmerjevalnik R2 v posameznem omrežju dobi 1. uporabni naslov. \n \n \n \n2.1. \nDopolnite nastavitve IPv6 za računalnik RZ1 v krajši obliki. \nNaslov IPv6: ______________________________________ \nPripona: __________________________________________ \nPrivzeti prehod: 2022:21:20:2::1 \n(2 točki) \n \n \n2.2. \nZa računalnik P1 v omrežju PRODAJA napišite zahtevane nastavitve. Računalnik pridobi \n2. uporabni naslov IP. \nNaslov IP: _________________________________________ \nOmrežna maska: __________________________________ \nOmrežni prehod: __________________________________ \n(3 točke) \n \n \n \n\n \n \n \n \n2.3. \nV omrežju PRODAJA je skrbniku uspelo nastaviti tudi preostale računalnike. Sedaj želi \npovezati še nekaj dodatnih naprav. Koliko prostih naslovov IP je še v omrežju? V isto \nomrežje bo najprej postavil spletni strežnik. Katero vrsto vezave kabla UTP mora uporabiti, \nda strežnik poveže na stikalo Sw2? Strežniku bi rad dodelil zadnji uporabni naslov IP. \nZapišite ga. \nŠtevilo prostih naslovov: ____________________________ \nVrsta vezave kabla UTP: ___________________________ \nNaslov IP spletnega strežnika: ______________________ \n(3 točke) \n \n \n2.4. \nOmrežje PROIZVODNJA želi skrbnik umestiti na začetek naslovnega prostora in ga \nrazdeliti na tri podomrežja, in sicer za tri ločene proizvodne prostore. Porabiti želi najmanj \npotrebnega naslovnega prostora, da mu ga del, če bo mogoče, ostane za namene \ntestiranja. \nV 1. podomrežju je treba nasloviti 60 naprav, v 2. podomrežju 12 naprav in v \n3. podomrežju 10 naprav. Zapišite naslove podomrežij. \nKako velik naslovni prostor mu ostane oziroma koliko naprav bi lahko priključili? \n1. podomrežje: ____________________________________ \n2. podomrežje: ____________________________________ \n3. podomrežje: ____________________________________ \nŠtevilo naslovov za naprave v preostalem delu naslovnega prostora: _________ \n(4 točke)",
    "solutionText": "4 \n \nNaloga Točke \nRešitev \nDodatna navodila \n2.1 \n2 \n 2022:21:20:2::A2 \n 64 \n1 točka za vsak pravilen zapis. \n2.2 \n3 \n 189.20.16.242 \n 255.255.255.240 \n 189.20.16.241 \n1 točka za vsak pravilen zapis. \n2.3 \n3 \n 9 \n ravna \n 189.20.16.254 \n1 točka za vsak pravilen zapis. \n2.4 \n4 \n 189.20.16.128 \n 189.20.16.192 \n 189.20.16.208 \n 14 \n1 točka za vsak pravilen zapis.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p231-2-3",
    "examId": "p231",
    "examCode": "P231",
    "part": 2,
    "taskNumber": 3,
    "points": 12,
    "category": "podatkovne_baze_sql",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Za izvedbo pisnega dela poklicne mature želimo voditi seznam testiranih dijakov zaključnih \nletnikov. Tako smo za potrebe vodenja dijakov dodali del potrebnih tabel v modelu šole. \nDel modela: \nDIJAK-TREN \nID \nIme \nPriimek \nSpol \nRazred \nE-mail \n20001 \nJani \nFras \nM \n1A \njani.fras@sola.si \n20002 \nMartin \nBrsa \nM \n1B \nmartin.brsa@sola.si \n20101 \nKsenja \nKlun \nŽ \n2A \nksenja.klun@sola.si \n20102 \nNataša \nRokavec \nŽ \n2A \nnatasa.rokavec@sola.si \n20501 \nFredi \nBorko \nM \n2B \nfredi.borko@sola.si \n \nTIP-TESTA \nID \nNaziv \nZanesljivost \n100 \nPCR \n90 \n101 \nHITRI \n70 \n102 \nHITRI SLINA \n75 \n103 \nKRVNI \n100 \n \n \n \n3.1. \nNapišite stavek SQL, ki iz obstoječe tabele DIJAK kreira (kopira) novo tabelo DIJAK-\nTREN z obstoječimi podatki brez definicije tujih ključev ali indeksov. \n(2 točki) \n \n \n \n \n \n \n \n \n \n \n \n3.2. \nNapišite stavek SQL, s katerim v tabeli TIP-TESTA zmanjšate zanesljivost hitrih testov za 5. \n(3 točke) \n \n \n \nTESTIRANJA \nID \nDatum \nKraj \nRezultat \nID_Dijaka \nID_TipTesta \n10000 \n2021-05-07 \nDoma \nNegativen \n20001 \n102 \n10001 \n2021-05-08 \nV šoli \nPozitiven \n20002 \n101 \n10002 \n2021-05-08 \nV šoli \nNegativen \n20101 \n101 \n10003 \n2021-05-05 \nV šoli \nNegativen \n20102 \n100 \n10004 \n2021-05-09 \nZdravstveni \ndom \nPozitiven \n20501 \n103 \n\n \n \n \n \n3.3. \nNapišite stavek SQL, s katerim kreirate tabelo TESTIRANJA. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n3.4. \nNapišite poizvedbo SQL, s katero izpišete ime, priimek, razred in rezultat pozitivnih testov, \nrazvrščenih glede na razred. \n(4 točke)",
    "solutionText": "5 \nNaloga Točke \nRešitev \nDodatna navodila \n3.1 \n2 \nPrimer: \n CREATE TABLE DIJAK-TREN AS \nSELECT * FROM DIJAK; \nPravilna izbira stavka CREATE in določila AS \n1 točka, pravilno nastavljene tabele 1 točka. \n3.2 \n3 \nPrimer: \n UPDATE TIP-TESTA \nSET zanesljivost = zanesljivost -5 \nWHERE naziv LIKE 'HITRI%'; \nPravilna uporaba UPDATE 1 točka, pravilna \nnastavitev SET 1 točka, pravilna nastavitev \npogoja WHERE 1 točka. \n \nUpoštevamo tudi rešitev, ki v pogoju preverja \nle vrednost 'HITRI'. \n3.3 \n3 \nPrimer: \n CREATE TABLE TESTIRANJA ( \nID smallint(5) NOT NULL, \nDatum date NOT NULL, \nKraj varchar(30) NOTNULL, \nRezultat varchar(10) NOTNULL, \nID_Dijaka smallint(5) NOT NULL, \nID_TipTesta smallint(3) NOT NULL, \nPRIMARY KEY (ID), \nFOREIGN KEY(ID_Dijaka) REFERENCES DIJAK-TREN (ID), \nFOREIGN KEY(ID_Tip_Testa) REFERENCES TIP-TESTA(ID) \n); \nPravilna uporaba CREATE TABLE in izdelava \natributov 1 točka, pravilna nastavitev \nFOREIGN KEY 1 točka, pravilna nastavitev \nREFERENCES 1 točka. \n3.4 \n4 \nPrimer: \n SELECT Ime, Priimek, Razred, Rezultat \nFROM DIJAK-TREN \nLEFT JOIN TESTIRANJA \nON DIJAK-TREN.ID = TESTIRANJA.ID_Dijaka \nWHERE Rezultat LIKE 'Pozitiven' \nORDER BY Razred; \nPravilna privzeta imena v SELECT 1 točka, \npravilna združitev tabel JOIN 1 točka, pravilen \npogoj 1 točka, pravilno razvrščanje 1 točka.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p231-2-4",
    "examId": "p231",
    "examCode": "P231",
    "part": 2,
    "taskNumber": 4,
    "points": 12,
    "category": "programiranje_algoritmi",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P231-C901-1-1.pdf",
      "solutionsPdf": "P231-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Rešite spodnje naloge v poljubnem programskem/skriptnem jeziku. \nObkrožite izbrani programski/skriptni jezik: \nC, C++, C#, Java, Python, PHP \nNarediti želimo preprost program za pregledovanje glasovanja na glasbenem tekmovanju Pesem \nEvrovizije. Za hranjenje podatkov smo se odločili, da jih bomo hranili ločeno v štirih podatkovnih \nspremenljivkah (glasovalka, prejemnica, tocke in leto), ki pripadajo podatkovnemu tipu polje \n(seznam, tabela). Vsebina polj je poljubna - primer vsebine polj vidite na spodnji sliki. Poznate \npa, kakšen podatkovni tip je v posameznem polju: glasovalka (država, ki glasuje; besedilni tip), \nprejemnica (država, ki prejme točke; besedilni tip), tocke (število točk, ki jih je glasovalka dala \nprejemnici; celoštevilski tip) in leto (leto tekmovanja; celoštevilski tip). Predpostavite, da prečno \nistoležni podatki, ki si sledijo zaporedno na istem indeksu vseh štirih polj, pripadajo istemu \nposnetku, kar je označeno na sliki. \n \n \n \n↓ ↓ ↓ ↓ ↓ \n \n \n \n \n \n \n \n \nglasovalka = \n''Španija'' \n''Norveška'' \n''Slovenija'' \n... \n''Hrvaška'' \n \n \n \n \n \n \nprejemnica = \n''Gruzija'' \n''Švedska'' \n''Danska'' \n... \n''Slovenija'' \n \n \n \n \n \n \ntocke = \n3 \n12 \n4 \n... \n12 \n \n \n \n \n \n \nleto = \n2007 \n2013 \n2019 \n... \n2011 \n \n \n \n \n \n \n \n \n \n↑ ↑ ↑ ↑ ↑ \n \n \n \n \n4.1. \nNapišite podprogram kratica, ki kot vhodne spremenljivke prejme polji prejemnica in leto \nter naravno število indeks. Podprogram vrne niz, sestavljen iz prvih treh črk imena države z \ndodanim letom tekmovanja, in sicer za državo, ki je v poljih na mestu (indeksu) indeks. \nPrimer: klic podprograma kratica(prejemnica,leto,2) vrne 'Dan2019'. \n(2 točki) \n \n4.2. \nNapišite podprogram steviloTock, ki kot vhodne spremenljivke prejme polja prejemnica, \ntocke in leto, besedilno spremenljivko nazivDrzave ter celoštevilsko vrednost \nletoTekmovanja. Podprogram sešteje in vrne število točk, ki ga je država z imenom \nnazivDrzave prejela leta letoTekmovanja. \n(3 točke) \n \n4.3. \nNapišite podprogram kolikokrat12, ki kot vhodne spremenljivke prejme polji prejemnica in \ntocke ter besedilno spremenljivko nazivDrzave. Podprogram izpiše, kolikokrat je država \nnazivDrzave prejela 12 točk v celotni zgodovini tekmovanja Pesmi Evrovizije. \n(3 točke) \n \n4.4. \nNapišite podprogram zmagovalka, ki kot vhodne spremenljivke prejme polja prejemnica, \ntocke in leto ter celoštevilsko vrednost letoTekmovanja. Podprogram izpiše kratico države, \nki je zmagala leta leto. Pri zapisu rešitve uporabite klic podprogramov iz nalog 4.1. in 4.2. \nPredpostavite, da ste pri obeh nalogah zapisali pravilno rešitev. \n(4 točke) \n \n \n\n \n \n \n \n \n \n\n \n\n \n \n\n \n \n \n \n \nPrazna stran \n \n \n\n \n\n \nPrazna stran",
    "solutionText": "6 \n \nNaloga Točke \nRešitev \nDodatna navodila \n4.1 \n2 \nPrimer: \n \n \nPridobitev podniza s tremi črkami 1 točka, \ndodajanje letnice in vračanje novonastalega \nniza 1 točka. \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.2 \n3 \nPrimer: \n \n \nUstrezna deklaracija zanke 1 točka, \npreverjanje pogojev 1 točka, seštevanje in \nvračanje vrednosti 1 točka. \n \n \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.3 \n3 \nPrimer: \n \n \nUstrezna deklaracija zanke 1 točka, \npreverjanje pogojev 1 točka, preštevanje in \nizpis vrednosti 1 točka. \n \n \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.4 \n4 \nPrimer: \n \n \nUstrezna deklaracija zanke 1 točka, izračun \nštevila točk z ustreznim klicanjem \npodprograma steviloTock 1 točka, preverjanje \npogoja 1 točka, izpis kratice s klicanjem \npodprograma kratica 1 točka. \n \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p232-2-1",
    "examId": "p232",
    "examCode": "P232",
    "part": 2,
    "taskNumber": 1,
    "points": 12,
    "category": "html_css",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Podana je vizualna podoba spletnega dokumenta. \nZvok in video preko Flash.\nPodpora vektorske grafike preko različnih tehnologij.\nZvok in video preko Flash.\nZvok in video preko značke.\nPodpora vektorski grafiki integrirana.\nZvok in video preko značke.\nHTML\nHTML5\n \n \n \n1.1. \nZnotraj glave spletnega dokumenta zapišite ustrezno kodo, ki bo poklicala datoteko za \noblikovanje z imenom stil.css in nastavila znakovni nabor s podporo slovenskim znakom. \n(2 točki) \n \n \n \n \n \n \n \n \n \n \n \n \n1.2. \nV nogi dokumenta so tri povezave, in sicer CPI, RIC in MIZŠ. Zapišite in ustrezno umestite \nkodo spletnega dokumenta, ki bo s pomočjo urejenega seznama prikazala prazne \npovezave. Kreirane povezave so lahko poljubno podane. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n\n \n \n \n \n1.3. \nZapišite ustrezno kodo vsebine spletne strani in jo umestite v ustrezno značko, ki bo s \npomočjo tabele prikazala vsebino, kot je podano na vizualni podobi spletnega dokumenta. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n1.4. \nPredpostavimo, da ste uspešno zapisali kodo spletne tabele. Vaša naloga je, da prek kode \nza oblikovanje izvedete naslednje: \n- nastavite celotni tabeli obrobo debeline ene točke in polne črne črte; \n- na levi strani tabele nastavite ozadje na lightgrey; \n- celotno tabelo pomaknete v desno stran za 60 točk; \n- poskrbite, da se barva ozadja posamezne celice tabele ob prehodu kazalnika miške \nspremeni v rumeno barvo. \n(4 točke)",
    "solutionText": "Naloga Točke \nRešitev \nDodatna navodila \n1.1 \n2 \nPrimer: \n <meta charset=\"utf-8\"> \n<link rel=\"stylesheet\" type=\"text/css\" href=\"stil.css\"> \nUstrezna nastavitev znakovnega nabora \n1 točka, ustrezen klic datoteke za oblikovanje \n1 točka. \n1.2 \n3 \nPrimer: \n <div id=\"noga\"> \n<ol> \n \n<li><a href=\"#\">CPI</a></li> \n \n<li><a href=\"#\">RIC</a></li> \n \n<li><a href=\"#\">MIZŠ</a></li> \n</ol> \n</div> \nUstrezna umestitev v blokovni element \n1 točka, ustrezna uporaba kode seznama \n1 točka, ustrezno kreiranje povezav 1 točka. \n1.3 \n3 \nPrimer: \n <div id=\"vsebina\"> \n<table> \n<tr> \n<th>HTML</th> \n<th>HTML5</th> \n</tr> \n<tr> \n<td>Zvok in video preko Flash.</td> \n<td>Zvok in video preko značke.</td> \n</tr> \n<tr> \n<td>Podpora vektorske grafike preko različnih tehnologij.</td> \n<td>Podpora vektorski grafiki integrirana.</td> \n</tr> \n<tr> \n<td>Zvok in video preko Flash.</td> \n<td>Zvok in video preko značke.</td> \n</tr> \n</table> \n</div> \nUstrezno gnezdenje 1 točka, ustrezen klic \ntabele 1 točka, ustrezno kreirani elementi \n1 točka. \n\n4 \n1.4 \n4 \nPrimer: \n table{ \n \nborder: 1px solid black; \n} \n \n.siva{ \n \nbackground-color: lightgrey; \n} \n \n#odmik{ \n \nmargin-left: 60px; \n} \n \ntd:hover, th:hover{ \n \nbackground-color: yellow; \n} \nUstrezna nastavitev obrobe tabele 1 točka, \nustrezna sprememba barve ozadja 1 točka, \nustrezna nastavitev odmika 1 točka, \nustrezna nastavitev barve ozadja ob prehodu \nmiške 1 točka.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p232-2-2",
    "examId": "p232",
    "examCode": "P232",
    "part": 2,
    "taskNumber": 2,
    "points": 12,
    "category": "omrezja",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Podana je omrežna shema. Usmerjevalnik R2 v posameznem omrežju dobi 1. uporabni naslov. \n \n \n \n2.1. \nOmrežje PROIZVODNJA še nima povezave do usmerjevalnika R2. Stikalo Sw1 bomo \nz usmerjevalnikom R2 povezali s kablom UTP. Katero vezavo kabla moramo uporabiti? \nV omrežje PROIZVODNJA bi želeli povezati tudi brezžične naprave. Na katero omrežno \nnapravo bomo povezali brezžično dostopno točko? \nVrsta vezave: _______________________________ \nIme naprave: _______________________________ \n(2 točki) \n \n \n2.2. \nZa računalnik R01 iz omrežja RAZVOJ zapišite zahtevane nastavitve. \nNaslov IP: __________________________________ \nOmrežna maska: ____________________________ \nPrivzeti prehod: _____________________________ \n(3 točke) \n \n \n \n\n \n \n \n \n2.3. \nV omrežju RAZVOJ bomo vpeljali tudi naslavljanje IPv6. Ponudnik internetnih storitev nam \nje dodelil naslovni prostor 2002:A2:55::/48. Oznako podomrežja lahko izberete poljubno. \nRačunalniku določimo 2. uporabni naslov IP. Določite zahtevane nastavitve IPv6 za \nračunalnik R01. \nNaslov IPv6: ________________________________ \nOmrežna pripona: ___________________________ \nPrivzeti prehod: _____________________________ \n(3 točke) \n \n \n2.4. \nRazdelite naslovni prostor podjetja na podomrežja po potrebah na shemi. Omrežje \nRAZVOJ je umeščeno na začetku naslovnega prostora, zapišite naslov preostalih dveh \nomrežij in njuno masko v desetiški obliki. V naslovni prostor najprej umestite omrežje \nPROIZVODNJA, nato TEHNOLOGI. \nPROIZVODNJA: ____________________________ \nOmrežna maska: ____________________________ \n \nTEHNOLOGI: _______________________________ \nOmrežna maska: ____________________________ \n(4 točke)",
    "solutionText": "5 \nNaloga Točke \nRešitev \nDodatna navodila \n2.1 \n2 \n ravna \n Sw1 \n1 točka za vsak pravilen zapis. \n2.2 \n3 \n 210.12.89.130 \n 255.255.255.224 \n 210.12.89.129 \n1 točka za vsak pravilen zapis. \n2.3 \n3 \nPrimer: \n 2002:A2:55:1::2 \n 64 \n 2002:A2:55:1::1 \n1 točka za vsak pravilen zapis. \n \nOznaka podomrežja je lahko karkoli med 0 \nin FFFF. \n2.4 \n4 \n 210.12.89.160 \n 255.255.255.224 \n 210.12.89.192 \n 255.255.255.240 \n1 točka za vsak pravilen zapis.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p232-2-3",
    "examId": "p232",
    "examCode": "P232",
    "part": 2,
    "taskNumber": 3,
    "points": 12,
    "category": "podatkovne_baze_sql",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "V povezavi z izvedbo pisanja poklicne mature želimo voditi seznam testiranih dijakov zaključnih \nletnikov. Tako smo za potrebe vodenja seznama dijakov dodali del potrebnih tabel v modelu šole. \nDel modela: \nDIJAK-TREN \nID \nIme \nPriimek \nSpol \nLetnik E-pošta \n20001 \nJani \nFras \nM \n1 \njani.fras@sola.si \n20002 \nMartin \nBrsa \nM \n4 \nmartin.brsa@sola.si \n20101 \nKsenja \nKlun \nŽ \n4 \nksenja.klun@sola.si \n20102 \nNataša \nRokavec \nŽ \n3 \nnatasa.rokavec@sola.si \n20501 \nFredi \nBorko \nM \n2 \nfredi.borko@sola.si \n \nTIP-TESTA \nID \nNaziv \nZanesljivost \n100 \nPCR \n90 \n101 \nHITRI \n70 \n102 \nHITRI SLINA \n75 \n103 \nKRVNI \n100 \n \n \n \n \n3.1. \nNapišite stavek SQL, ki iz obstoječe tabele TESTIRANJA kreira (kopira) novo tabelo \nTESTIRANJA1 z obstoječimi podatki brez definicije tujih ključev ali indeksov. \n(2 točki) \n \n \n \n \n \n \n \n \n \n \n \n \n3.2. \nNapišite stavek SQL, s katerim v tabeli DIJAK-TREN zvišate Letnik za 1 pri vseh razen pri \ndijakih 4. letnika. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \nTESTIRANJA \nID \nDatum \nLokacija \nRezultat \nID_Dijaka \nID_TipTesta \n10000 \n2021-05-07 \nDoma \nN \n20001 \n102 \n10001 \n2021-05-08 \nV šoli \nP \n20002 \n101 \n10002 \n2021-05-08 \nV šoli \nN \n20101 \n101 \n10003 \n2021-05-05 \nV šoli \nN \n20102 \n100 \n10004 \n2021-05-09 \nZdravstveni \ndom \nP \n20501 \n103 \n\n \n \n \n \n3.3. \nNapišite stavek SQL, s katerim kreirate tabelo TESTIRANJA. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n3.4. \nNapišite poizvedbo SQL, s katero izpišete ime, priimek, letnik in rezultat negativnih testov (N), \nrazvrščenih v letniku naraščajoče. \n(4 točke)",
    "solutionText": "6 \nNaloga Točke \nRešitev \nDodatna navodila \n3.1 \n2 \nPrimer: \n CREATE TESTIRANJA1 AS \nSELECT * FROM TESTIRANJA; \nPravilna izbira stavka CREATE in določila AS \n1 točka, pravilno nastavljene tabele 1 točka. \n3.2 \n3 \nPrimer: \n UPDATE DIJAK-TREN \nSET Letnik = Letnik+1 \nWHERE Letnik < 4; \nPravilna uporaba UPDATE 1 točka, pravilna \nnastavitev SET 1 točka, pravilna nastavitev \npogoja WHERE 1 točka. \n3.3 \n3 \nPrimer: \n CREATE TABLE TESTIRANJA ( \nID smallint(5) NOT NULL, \nDatum date NOT NULL, \nKraj varchar(30) NOTNULL, \nRezultat varchar(10) NOTNULL \nID_Dijaka smallint(5) NOT NULL, \nID_TipTesta smallint(3) NOT NULL, \nPRIMARY KEY (ID), \nFOREIGN KEY(ID_Dijaka) REFERENCES DIJAK-TREN (ID), \nFOREIGN KEY(ID_Tip_Testa) REFERENCES TIP-TESTA(ID) \n); \nPravilna uporaba CREATE TABLE in izdelava \natributov 1 točka, \npravilna nastavitev FOREIGN KEY 1 točka, \npravilna nastavitev REFERENCES 1 točka. \n3.4 \n4 \nPrimer: \n SELECT Ime, Priimek, Letnik, Rezultat \nFROM DIJAK-TREN \nLEFT JOIN TESTIRANJA \nON DIJAK-TREN.ID = TESTIRANJA.ID_Dijaka \nWHERE Rezultat LIKE 'N' \nORDER BY Letnik; \nPravilna privzeta imena v SELECT 1 točka, \npravilna združitev tabel JOIN 1 točka, pravilen \npogoj 1 točka, pravilno razvrščanje 1 točka.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p232-2-4",
    "examId": "p232",
    "examCode": "P232",
    "part": 2,
    "taskNumber": 4,
    "points": 12,
    "category": "programiranje_algoritmi",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P232-C901-1-1.pdf",
      "solutionsPdf": "P232-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Rešite spodnje naloge v poljubnem programskem/skriptnem jeziku. \nObkrožite izbrani programski/skriptni jezik: \nC, C++, C#, Java, Python, PHP \nNarediti želimo preprost program za pregledovanje glasovanja na glasbenem tekmovanju \nPesem Evrovizije. Za hranjenje podatkov smo se odločili, da jih bomo hranili ločeno v štirih \npodatkovnih spremenljivkah (glasovalka, prejemnica, tocke in leto), ki pripadajo podatkovnemu \ntipu polje (seznam, tabela). Vsebina polj je poljubna - primer vsebine polj vidite na spodnji sliki. \nPoznate pa, kakšen podatkovni tip je v posameznem polju: glasovalka (država, ki \nglasuje; besedilni tip), prejemnica (država, ki prejme točke; besedilni tip), tocke (število točk, \nki jih je glasovalka dala prejemnici; celoštevilski tip) in leto (leto tekmovanja; celoštevilski tip). \nPredpostavite, da prečno istoležni podatki, ki se nahajajo zaporedno na istem indeksu vseh štirih \npolj, pripadajo istemu posnetku, kot je označeno na sliki. \n \n \n \n↓ ↓ ↓ ↓ ↓ \n \n \n \n \n \n \n \n \nglasovalka = \n''Španija'' \n''Norveška'' \n''Slovenija'' \n... \n''Hrvaška'' \n \n \n \n \n \n \nprejemnica = \n''Gruzija'' \n''Švedska'' \n''Danska'' \n... \n''Slovenija'' \n \n \n \n \n \n \ntocke = \n3 \n12 \n4 \n... \n12 \n \n \n \n \n \n \nleto = \n2007 \n2013 \n2019 \n... \n2011 \n \n \n \n \n \n \n \n \n \n↑ ↑ ↑ ↑ ↑ \n \n \n \n \n4.1. \nNapišite podprogram kratica, ki kot vhodne spremenljivke prejme polji prejemnica in leto \nter naravno število indeks. Podprogram vrne niz, sestavljen iz leta tekmovanja, nato so \ndodani pomišljaj in za njim še prve tri črke imena države, in sicer za državo, ki je v poljih na \nmestu (indeksu) indeks. \nPrimer: klic podprograma kratica(prejemnica,leto,2) vrne '2019-Dan'. \n(2 točki) \n \n4.2. \nNapišite podprogram izpis, ki kot vhodne spremenljivke prejme polja glasovalka, \nprejemnica, leto in tocke ter celoštevilsko vrednost letoTekmovanja. Podprogram naj izpiše \nvsa glasovanja za leto tekmovanja letoTekmovanja. Glede na zgornji označeni primer naj \nbo izpis podoben obliki \"2019-Slo -> 2019-Dan : 4\". Pri zapisu rešitve uporabite klic \npodprograma pri nalogi 4.1. Predpostavite, da ste pri nalogi zapisali pravilno rešitev. \n(3 točke) \n \n4.3. \nNapišite podprogram povprecno, ki kot vhodne spremenljivke prejme polja glasovalka, \nprejemnica in tocke ter besedilni spremenljivki nazivGlasovalke in nazivPrejemnice. \nPodprogram vrne povprečno število točk države nazivPrejemnice, ki jih je dala država \nnazivGlasovalke glede na celotno zgodovino tekmovanja Pesmi Evrovizije. \n(3 točke) \n \n4.4. \nNapišite podprogram najvecTock, ki kot vhodne spremenljivke prejme polja glasovalka, \nprejemnica in tocke ter besedilno vrednost drzavaGlasovalka. Podprogram izpiše naziv \ndržave, ki ji je država drzavaGlasovalka v povprečju dala največ točk glede na celotno \nzgodovino tekmovanja Pesmi Evrovizije. Pri zapisu rešitve uporabite klic podprograma \nv nalogi 4.3. Predpostavite, da ste pri nalogi zapisali pravilno rešitev. \n(4 točke)",
    "solutionText": "7 \nNaloga Točke \nRešitev \nDodatna navodila \n4.1 \n2 \nPrimer: \n \nPridobitev podniza s tremi črkami 1 točka, \ndodajanje letnice in vračanje na novo \nnastalega niza 1 točka. \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.2 \n3 \n \nPrimer: \n \nUstrezna deklaracija zanke 1 točka, \npreverjanje pogojev 1 točka, ustrezen klic \npodprograma in tvorba izpisa 1 točka. \n \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.3 \n3 \nPrimer: \n \nUstrezna deklaracija zanke 1 točka, \npreverjanje pogojev 1 točka, ustrezen izračun \nin vračanje povprečne ocene 1 točka. \n \n \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.4 \n4 \nPrimer: \n \nUstrezna deklaracija zanke 1 točka, klic \npodprograma povprecno 1 točka, preverjanje \npogoja 1 točka, izpis ustrezne države z največ \nprejetimi točkami 1 točka. \n \n \n \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p233-2-1",
    "examId": "p233",
    "examCode": "P233",
    "part": 2,
    "taskNumber": 1,
    "points": 12,
    "category": "html_css",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Podana je vizualna podoba spletnega dokumenta. \n \n \n \n1.1. \nZnotraj glave spletnega dokumenta zapišite ustrezno kodo, ki bo poklicala datoteko za \noblikovanje z imenom stil.css in nastavila znakovni nabor s podporo za slovenske znake. \n(2 točki) \n \n \n \n \n \n \n \n \n \n \n1.2. \nV nogi dokumenta so tri povezave, in sicer CPI, RIC in MIZŠ. Zapišite in ustrezno umestite \nkodo spletnega dokumenta, ki bo s pomočjo neurejenega seznama prikazala prazne \npovezave. Kreirane povezave so lahko podane poljubno. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n\n \n \n \n \n1.3. \nZapišite ustrezno kodo spletnega dokumenta, ki bo osnovno ogrodje spletnega dokumenta \nglede na prikazano rešitev, in jo ustrezno umestite. Predpostavimo, da je nosilni element, \nznotraj katerega se gnezdijo drugi blokovni elementi, poimenovan placeholder. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n1.4. \nPredpostavimo, da ste zapisali kodo spletnega dokumenta, v katerem se vizualni element z \nnapisom HTML imenuje prvi. Vaša naloga je, da prek kode za oblikovanje izvedete \nnaslednje: \n- nastavitev širine in višine na 250 točk, \n- postavitev elementa naj bo na levo, \n- barva ozadja elementa naj bo #CECECE, \n- ob prehodu miške nad poljem HTML naj se prikaže črna polna obroba debeline \nena točka in barva ozadja naj bo bela. \n(4 točke)",
    "solutionText": "Naloga Točke \nRešitev \nDodatna navodila \n1.1 \n2 \nPrimer: \n <meta charset=\"utf-8\"> \n<link rel=\"stylesheet\" type=\"text/css\" href=\"stil.css\"> \nUstrezna nastavitev znakovnega nabora \n1 točka, ustrezen klic datoteke za oblikovanje \n1 točka. \n1.2 \n3 \nPrimer: \n <div id=\"noga\"> \n<ul> \n <li><a href=\"#\">CPI</a></li> \n <li><a href=\"#\">RIC</a></li> \n <li><a href=\"#\">MIZŠ</a></li> \n</ul> \n</div> \nUstrezna umestitev v blokovni element \n1 točka, ustrezna uporaba kode seznama \n1 točka, ustrezno kreiranje povezav 1 točka. \n1.3 \n3 \nPrimer: \n <body> \n<div id=\"placeholder\"> \n<div id=\"glava\"> \n<div id=\"header\">Predloga spletnega dokumenta</div> \n</div> \n<div id=\"prvi\"> \n</div> \n<div id=\"drugi\"> \n</div> \n<div id=\"tretji\"> \n</div> \n<div id=\"cetrti\"> \n</div> \n<div id=\"peti\"> \n</div> \n<div id=\"sesti\"> \n<div id=\"noga\"> \n</div> \n</div> \n</div> \n</body> \nUstrezno gnezdenje 1 točka, ustrezni nosilni \nelement 1 točka, ustrezno kreirani bloki \n1 točka. \n\n4 \n \n \n1.4 \n4 \nPrimer: \n #prvi{ \n \nwidth: 250px; \n \nheight: 250px; \n \nfloat:left; \n \nbackground-color: #CECECE; \n} \n#prvi:hover{ \n \nborder: 1px solid black; \n background-color: white; \n} \n \nUstrezna nastavitev širine in višine 1 točka, \nustrezna postavitev 1 točka, ustrezna \nnastavitev barve ozadja 1 točka, ustrezna \nsprememba obrobe in ozadja 1 točka.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p233-2-2",
    "examId": "p233",
    "examCode": "P233",
    "part": 2,
    "taskNumber": 2,
    "points": 12,
    "category": "omrezja",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Podana je omrežna shema. Usmerjevalnik R1 v posameznem omrežju dobi 1. uporabni naslov. \n \n \n \n2.1. \nV omrežje PROIZVODNJA bi želeli povezati tudi brezžične naprave. Na katero omrežno \nnapravo bomo povezali brezžično dostopno točko? Na kateri omrežni napravi v omrežju bi \npostavili požarni zid, da zavarujemo strežnik S1? \nDostopno točko povežemo na: _____________________________ \nPožarni zid postavimo na: _________________________________ \n(2 točki) \n \n \n2.2. \nZa strežnik S1 v omrežju PROIZVODNJA zapišite zahtevane nastavitve. \nNaslov IP: _______________________________________________ \nOmrežna maska: _________________________________________ \nPrivzeti prehod: __________________________________________ \n(3 točke) \n \n \n \n\n \n \n \n \n2.3. \nV omrežju RAZVOJ bomo vpeljali tudi naslavljanje IPv6. Ponudnik internetnih storitev nam \nje dodelil naslovni prostor 2222:33:FF::/48. Oznako podomrežja lahko izberete poljubno. \nZa računalnik določimo 2. uporabni naslov IP. Določite zahtevane nastavitve IPv6 za \nračunalnik RZ1. \nNaslov IPv6: _____________________________________________ \nOmrežna pripona: ________________________________________ \nPrivzeti prehod: __________________________________________ \n(3 točke) \n \n \n2.4. \nRazdelite naslovni prostor podjetja na podomrežja po potrebah na shemi. Omrežje \nPROIZVODNJA je umeščeno na začetku naslovnega prostora. Zapišite naslov preostalih \ndveh podomrežij in njuno masko v desetiški obliki. \nPRODAJA: ______________________________________________ \nOmrežna maska: _________________________________________ \n \nRAZVOJ: ________________________________________________ \nOmrežna maska: _________________________________________ \n(4 točke)",
    "solutionText": "Naloga Točke \nRešitev \nDodatna navodila \n2.1 \n2 \n Sw1 \n R1 \n1 točka za vsak pravilen zapis. \n2.2 \n3 \n 195.2.1.222 \n 255.255.255.224 \n 195.2.1.193 \n1 točka za vsak pravilen zapis. \n2.3 \n3 \nPrimer: \n 2222:33:FF:1::2 \n 64 \n 2222:33:FF:1::1 \n1 točka za vsak pravilen zapis. \n2.4 \n4 \nPrimer: \n 195.2.1.224 \n 255.255.255.240 \n 195.2.1.240 \n 255.255.255.240 \n1 točka za vsak pravilen zapis.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p233-2-3",
    "examId": "p233",
    "examCode": "P233",
    "part": 2,
    "taskNumber": 3,
    "points": 12,
    "category": "podatkovne_baze_sql",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Imamo prodajalno s televizijskimi aparati. Svojim kupcem bi želeli ponuditi nakup prek spletne \ntrgovine. Razvijalec spletne strani je od nas zahteval potrebne podatke, ki smo jih zapisali v obliki \ntabele. Mesto, kjer je slika izdelka, je ločeno v skupni mapi trgo. Slike pa se ne shranjujejo v bazi, \nampak se tam shranjuje samo pot do njih. \nTabela: izdelki \nid \ncelo \nštevilo \nprimarni \nključ \nkoda \ntrije \nznaki \nznamka \ndo 30 \nznakov \nime \ndo 30 \nznakov \nkolicina \ncelo \nštevilo \ncena \ndecimalno \nštevilo \nz dvema \ndecimalkama \nslika \ndo 50 znakov \n \n1001 \nLCD \nSony \nTV KDL32EX \n10 \n319.99 \\\\trgo\\id+koda1.jpg \n1002 \nLED \nSony \nTV KDL32W \n8 \n529.99 \\\\trgo\\id+koda2.jpg \n1003 \nLED \nLG \nTV 37LS560S \n15 \n499.99 \\\\trgo\\id+koda3.jpg \n1004 \nPLA \nLG TV 32CS460S \n22 \n269.99 \\\\trgo\\id+koda4.jpg \n1005 \nLCD \nLG \nTV 32LD320 \n12 \n269.99 \\\\trgo\\id+koda5.jpg \n \n \n \n3.1. \nS pomočjo stavka SQL ustvarite podatkovno bazo z imenom Spletna in tabelo izdelki. \n(2 točki) \n \n \n \n \n \n \n \n \n \n \n3.2. \nS pomočjo stavka SQL izpišite kode, znamke, imena in cene za izdelke, katerih količina je \nvečja od 10, cena pa nižja ali enaka 400,00. Izdelki naj bodo urejeni glede na ceno \npadajoče. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n\n \n \n \n \n3.3. \nS pomočjo stavka SQL izpišite znamke izdelkov. Vsako znamko izpišite samo enkrat. \nIzpis naj vključuje samo izdelke, ki imajo v znamki črko »s«. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n3.4. \nS pomočjo stavkov SQL spremenite strukturo že izdelane tabele izdelki, da bo ustrezala \nprikazu spodaj. Nato dodajte dva nova izdelka. Vpisati je treba vse podatke. \nTabela: izdelki \nid \nkoda \nznamka-TV \nime \nkolicina \ncena \ndiagonala \n1006 \nLCD \nSamsung \nLE32E420 \n10 \n269.99 \n81 \n1007 \nLED \nGrundig \n37VLC7 \n10 \n349.99 \n94 \n(4 točke)",
    "solutionText": "5 \nNaloga Točke \nRešitev \nDodatna navodila \n3.1 \n2 \nPrimer: \n CREATE DATABASE Spletna; \n CREATE TABLE izdelki ( \nid INT PRIMARY KEY, \nkoda CHAR(3), \nznamka VARCHAR(30), \nime VARCHAR(30), \nkolicina INT, \ncena DECIMAL(7,2) \nslika VARCHAR(50)); \nPravilno kreiranje podatkovne baze 1 točka, \npravilno kreiranje tabele 1 točka. \n3.2 \n3 \nPrimer: \n SELECT koda, znamka, ime, cena \nFROM izdelki \nWHERE (kolicina> 10) AND (cena <= 400.00) \nORDER BY cena DESC; \nPravilna izbira stavka SELECT 1 točka, \npravilna pogoja 1 točka, pravilno sortiranje \n1 točka. \n3.3 \n3 \nPrimer: \n SELECT DISTINCT znamka \nFROM izdelki \nWHERE znamka LIKE '%s%'; \nPravilna izbira stavka SELECT 1 točka, \npravilna nastavitev lastnosti DISTINCT \n1 točka, pravilen pogoj WHERE 1 točka. \n3.4 \n4 \nPrimer: \n ALTER TABLE izdelki \nDROP slika; \n ALTER TABLE izdelki \nADD diagonala INT; \n ALTER TABLE izdelki \nznamka RENAME znamka-TV; \n INSERT INTO izdelki VALUES \n(1006,'LCD','Samsung','LE32E420',10,269.99,81), \n(1007,'LED','Grundig','37VLC7',10,349.99,94); \nIzbris atributa 1 točka, dodajanje atributa \n1 točka, preimenovanje atributa 1 točka, \nstavek INSERT 1 točka.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p233-2-4",
    "examId": "p233",
    "examCode": "P233",
    "part": 2,
    "taskNumber": 4,
    "points": 12,
    "category": "programiranje_algoritmi",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P233-C901-1-1.pdf",
      "solutionsPdf": "P233-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Rešite spodnje naloge v poljubnem programskem/skriptnem jeziku. \nObkrožite izbrani programski/skriptni jezik: \nC, C++, C#, Java, Python, PHP \nNarediti želimo program, ki nam bo pomagal pri izdelavi računalniške igre. Za hranjenje podatkov \nsmo se odločili, da bomo podatke hranili ločeno v štirih podatkovnih spremenljivkah (bitje, \nlokacija, napad in zivljenjskeTocke), ki pripadajo podatkovnemu tipu polje (seznam, tabela). \nVsebina polj je poljubna - primer vsebine polj vidite na spodnji sliki. Poznate pa, kakšen \npodatkovni tip je v posameznem polju: bitje (ime/naziv bitja; besedilni tip), lokacija (polje z dvema \nnaravnima številoma), napad (število točk napada; celoštevilski tip) in zivljenjskeTocke (število \nživljenjskih točk bitja; celoštevilski tip). Predpostavite, da prečno istoležni podatki, ki so \nzaporedno na istem indeksu vseh štirih polj, pripadajo istemu bitju, kot je označeno na sliki. \n \n \n \n↓ ↓ ↓ ↓ ↓ \n \n \n \n \n \n \n \n \nbitje = \n''skrat21'' \n''orka69'' \n''vilinec21'' \n... \n''carovnik99'' \n \n \n \n \n \n \nlokacija = \n[5,10] \n[13,4] \n[2,4] \n... \n[15,21] \n \n \n \n \n \n \nnapad = \n20 \n25 \n27 \n... \n45 \n \n \n \n \n \n \nzivljenjskeTocke = \n105 \n90 \n120 \n... \n150 \n \n \n \n \n \n \n \n \n \n↑ ↑ ↑ ↑ ↑ \n \n \n \n \n4.1. \nNapišite podprogram izpis, ki kot vhodne spremenljivke prejme polji bitje in \nzivljenjskeTocke ter naravno število indeks. Podprogram vrne niz, sestavljen iz naziva bitja, \nnato je presledek in nato v oklepaju podana vrednost življenjskih točk, in sicer za bitje, ki se \nnahaja v poljih na mestu (indeksu) indeks. \nPrimer klica podprograma izpis(bitje, zivljenjskeTocke, 2) vrne 'vilinec21 (120)'. \n(2 točki) \n \n4.2. \nNapišite podprogram razdalja, ki kot vhodni spremenljivki prejme polji lokacija1 in \nlokacija2 - obe polji vsebujeta dve vrednosti, kjer prva vrednost označuje absciso v \nkoordinatnem sistemu (vrednost x), druga vrednost pa ordinato (vrednost y). Podprogram \nnaj vrne razdaljo med tema dvema lokacijama. Za izračun razdalje si pomagajte s spodnjo \nformulo. \n(\n)\n(\n)\n(\n)\n2\n2\n1\n2\n2\n1\n2\n1\nrazdalja\n,\nd L L\nx\nx\ny\ny\n=\n=\n-\n+\n-\n \n(3 točke) \n \n4.3. \nNapišite podprogram kolikoBitij, ki kot vhodne spremenljivke prejme polje lokacija, \nceloštevilsko vrednost indeks in naravno število oddaljenost. Podprogram izpiše število \nbitij, ki se nahajajo v razdalji oddaljenost glede na bitje, ki se v polju lokacija nahaja na \nindeksu indeks. Pri zapisu rešitve uporabite klic podprograma v nalogi 4.2. Predpostavite, \nda ste pri nalogi zapisali pravilno rešitev. \n(3 točke) \n \n4.4. \nNapišite podprogram vilinecVNevarnosti, ki kot vhodne spremenljivke prejme polja bitje, \nlokacija in zivljenjskeTocke. Podprogram izpiše kratico vilinca, ki ima največ drugih bitij do \nrazdalje 10. Predpostavite, da so vsa imena bitij sestavljena tako, da je najprej zapisan tip \nbitja (npr. vilinec) nato pa sledi poljubno veliko naravno število (npr. vilinec21). Pri zapisu \nrešitve uporabite klic podprogramov v nalogah 4.1. in 4.3. Predpostavite, da ste pri nalogah \nzapisali pravilno rešitev. \n(4 točke)",
    "solutionText": "6 \n \nNaloga Točke \nRešitev \nDodatna navodila \n4.1 \n2 \nPrimer: \n \n \nPridobitev podniza podatkov glede na indekse \n1 točka, združevanje nizov 1 točka. \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.2 \n3 \nPrimer: \n \n \nPridobitev obeh koordinat 1 točka, izračun \nrazdalje 1 točka, vračanje vrednosti 1 točka. \n \n \n \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.3 \n3 \nPrimer: \n \n \nUstrezna deklaracija zanke 1 točka, \npreverjanje pogojev in klic podprograma \n1 točka, ustrezno preštevanje in izpis \nvrednosti 1 točka. \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.4 \n4 \nPrimer: \n \n \nUstrezna deklaracija zanke in nastavitev \nzačetnega indeksa vilinca 1 točka, klic \npodprograma kolikoBitij 1 točka, ustrezno \niskanje največje vrednosti 1 točka, ustrezen \nklic podprograma izpis z ustreznim indeksom \n1 točka. \n \n \n \n \n \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p241-2-1",
    "examId": "p241",
    "examCode": "P241",
    "part": 2,
    "taskNumber": 1,
    "points": 12,
    "category": "html_css",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Podano imamo spletno stran naročnika. Izdelana je bila grafična podoba želene spletne strani. \nSLOVENIJA\nHOTEL\nHOSTEL\nINFORMACIJE\nSLOVENSKA INFO TOČKA\nO nas\nZemljevid\nRegistracija\n \n \n1.1. \nZapišite kodo spletnega dokumenta, v katerem bodo podprte slovenske črke za prikaz in \nizveden klic datoteke za oblikovanje. \n(2 točki) \n \n \n \n \n \n \n \n \n \n \n\n \n \n \n \n1.2. \nZapišite kodo spletnega dokumenta, ki vam bo omogočala, da boste s pomočjo blokovnih \nelementov poskrbeli za pravilno razdelitev in postavitev elementov. Elementi naj bodo \ngnezdeni znotraj blokovnega elementa t. i. »placeholder«. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n1.3. \nZapišite ustrezno kodo za oblikovanje, ki bo za polje SLOVENIJA: \n- spremenila barvo ozadja na vrednost #EAECEE, \n- spremenila barvo prehoda miške nad besedilom na vrednost #17A589, \n- poskrbela za ustrezno postavitev polja glede na preostale elemente. \n(3 točke) \n \n \n \n\n \n\n1.4. \nV nogi spletnega dokumenta je meni. Zapišite kodo, ki bo: \n- prikazala meni, ki vsebuje povezave, s pomočjo neurejenega seznama, \n- seznam prikazala vrstično, \n- izvedla ustrezno postavitev noge širine 500 px, levi odmik 200 px in odmik zgoraj 20 px. \n(4 točke)",
    "solutionText": "Naloga Točke Rešitev \nDodatna navodila \n1.1 \n2 \nPrimer: \n <meta charset=\"utf-8\"> \n<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\"> \nNastavitev slovenskih znakov 1 točka, klic \ndatoteke za oblikovanje 1 točka. \n1.2 \n3 \nPrimer: \n <div id=\"placeholder\"> \n \n \n<div id=\"glava\"><h2>SLOVENSKA INFO TOČKA</h2></div> \n \n \n<div id=\"elementi\"> \n \n \n \n<div id=\"prvi\"><p>SLOVENIJA</p></div> \n \n \n \n<div id=\"drugi\"><p>HOTEL</p></div> \n \n \n \n<div id=\"tretji\"><p>HOSTEL</p></div> \n \n \n \n<div id=\"cetrti\"><p>INFORMACIJE</p></div> \n \n \n</div> \n \n \n<div id=\"slike\"> \n \n \n \n<div id=\"s1\"></div> \n \n \n \n<div id=\"s2\"></div> \n \n \n \n<div id=\"s3\"></div> \n \n \n \n<div id=\"s4\"></div> \n \n \n</div> \n \n \n<div id=\"noga\"> \n \n \n \n<div id=\"odmik\"> \n \n \n \n</div> \n \n \n</div> \n </div> \nZunanji blokovni element (placeholder) 1 točka, \nzapis ostalih blokovnih elementov gnezdenih \nznotraj zunanjega blokovnega elementa \n1 točka, nastavitev razredov ali identifikatorjev \n1 točka. \n1.3 \n3 \nPrimer: \n #prvi{ \n \nbackground-color: #EAECEE; \n \nfloat:left; \n} \n \n#prvi:hover { \n color: #17A589; \n } \nNastavitev barve ozadja na #EAECEE 1 točka, \nnastavitev postavitve levo 1 točka, nastavitev \nprehoda miške na #17A589 1 točka. \n\n4 \n \n1.4 \n4 \nPrimer: \n <ul> \n \n \n<li><a href=\"#\">O nas</a></li> \n \n \n<li><a href=\"#\">Zemljevid</a></li> \n \n \n<li><a href=\"#\">Registracija</a></li> \n </ul> \n \n \n \nul li{ \n display: inline; \n} \n#noga { \n margin-left: 200px; \n width: 500px; \n margin-top: 20px; \n } \nKreiranje seznama 1 točka, definiranje \npovezav 1 točka, vrstični prikaz seznama \n1 točka, nastavitev širine noge, levi odmik in \nzgornji odmik 1 točka.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p241-2-2",
    "examId": "p241",
    "examCode": "P241",
    "part": 2,
    "taskNumber": 2,
    "points": 12,
    "category": "omrezja",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Podana je omrežna shema. Kjer je potrebno, so naslovi končnih naprav zapisani na shemi, \nomrežni prehod v posameznem omrežju dobi prvi uporabni naslov, stikala ne potrebujejo naslova \nIP. \n \n \n \n2.1. \nV omrežje TESTNI CENTER bi radi dodali nov računalnik. Dodelili mu bomo prvi prosti \nnaslov. Zapišite naslov IPv6 in privzeti prehod (angl. default gateway) za novi računalnik \nv skrajšani obliki. \nNaslov IPv6: ____________________________________________________________________ \nPrivzeti prehod: _________________________________________________________________ \n(2 točki) \n \n \n2.2. \nIz računalnika P01 v omrežju PRODAJA je poslana poizvedba ARP. Katerim napravam \nstikalo Sw2 pošlje okvir? Odgovor zapišite na črto. \n ________________________________________________________________________________ \n(3 točke) \n \n \n2.3. \nOmrežje HRAMBA želimo razdeliti na dve podomrežji. Zapišite naslova IP za posamezno \npodomrežje in ustrezno masko v desetiški obliki. \nNaslov IP 1. podomrežja: _________________________________________________________ \nNaslov IP 2. podomrežja: _________________________________________________________ \nMaska v desetiški obliki: __________________________________________________________ \n(3 točke) \n \n \n \n\n \n \n \n \n2.4. \nZa celotno omrežje IPv4 je dodeljen naslovni prostor 202.19.20.. Nekaj naslovnega \nprostora je že uporabljenega glede na podatke na shemi omrežja. Določite najmanjšo \nmožno velikost omrežja PRODAJA, ki bo omogočalo priključitev 10 naprav. Omrežje \nPRODAJA umestite na začetek prostega dela naslovnega področja. Zapišite naslov \nomrežja in zahtevane nastavitve IP računalnika Vodja. \nNaslov IP omrežja PRODAJA: ____________________________________________________ \n \nRačunalnik Vodja: \nNaslov IP: ______________________________________________________________________ \nMaska v desetiški obliki: __________________________________________________________ \nNaslov IP omrežnega prehoda: ____________________________________________________ \n(4 točke)",
    "solutionText": "Naloga Točke \nRešitev \nDodatna navodila \n2.1 \n2 \n 2020:2019:A:1::3 \n 2020:2019:A:1::1 \nVsak pravilen zapis 1 točka. \n2.2 \n3 \n R2 \n Vodja \n P02 \nVsak pravilen zapis 1 točka. \nČe kandidat vnese vse naprave lokalnega \nomrežja, dobi 2 točki. \n2.3 \n3 \n 202.19.20.0 \n 202.19.20.64 \n 255.255.255.192 \nVsak pravilen zapis 1 točka. \nPri zapisu maske upoštevamo tudi zapis z \nmrežno pripono. \n\n5 \n \n2.4 \n4 \n 202.19.20.160 \n 202.19.20.162 \n 255.255.255.240 \n 202.19.20.161 \nVsak pravilen zapis 1 točka. \nKot pravilen zapis naslova IP za računalnik \nVodja se upošteva katerikoli naslov od \n202.19.20.162 do vključno 202.19.20.174. \nČe kandidat napačno umesti omrežje \nPRODAJA, mu ocenjevalec oceni nadaljnje \nnastavitve glede na zapisan naslov omrežja. \nPri zapisu maske upoštevamo tudi zapis z \nmrežno pripono.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p241-2-3",
    "examId": "p241",
    "examCode": "P241",
    "part": 2,
    "taskNumber": 3,
    "points": 12,
    "category": "podatkovne_baze_sql",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Imamo tabele: \ntip_plovil \n \nplovila \nid \ntip \n \nreg_st \nime \nst_kabin model \ndolzina t_id z_st \n1 \njadrnica \n \nIZ 1234 \nIza \n3 \nImpression 40 12 \n1 \n10 \n2 \nmotorna jahta \n \nPI 123 \nLucija \n4 \nNautitech 46 \n14 \n3 \n14 \n3 \nkatamaran \n \nKP 4321 Glorija \n3 \nCustom \n30 \n2 \n11 \n \n \n \nIZ 1324 \nIzabella \n2 \n48 Mk II \n12 \n1 \n13 \nznamke \n \nIZ 1432 \nIzadora \n3 \nImpression 45 14 \n1 \n10 \nst \nznamka \n \nPI 321 \nLukrecija 3 \n64 \n19 \n3 \n13 \n10 \nElan \n \nIZ 1313 \nVictoria \n4 \nImpression 50 15 \n1 \n10 \n11 \nBenetti \n \n \n \n \n \n \n \n \n12 \nNauticat \n \n \n \n \n \n \n \n \n13 \nHallberg Rassy \n \n \n \n \n \n \n \n14 \nBavaria \n \n \n \n \n \n \n \n \n15 \nRiva \n \n \n \n \n \n \n \n \n \n \n3.1. \nV tabelo znamke vnesite novo znamko plovila z imenom 'Elan494'. \n(2 točki) \n \n \n \n \n \n \n \n \n \n \n3.2. \nNapišite stavek SQL za izdelavo tabele tip_plovil iz zgornjega modela. Nastavite tudi \nprimarni ključ. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n\n \n \n \n \n3.3. \nS pomočjo stavka SQL izpišite imena jadrnic, ki so krajše od 15 m. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n3.4. \nS pomočjo stavka SQL izbrišite plovila, katerih ime se začne z \"Iza\". Ta plovila naj imajo \n3 kabine ali so daljša od 15 m. \n(4 točke)",
    "solutionText": "Naloga Točke Rešitev \nDodatna navodila \n3.1 \n2 \nPrimer: \n INSERT INTO znamke (znamka) VALUES \n('Elan494'); \nPravilna izbira stavka INSERT 1 točka, pravilno \ndodan podatek 1 točka. \n3.2 \n3 \nPrimer: \n CREATE TABLE tip_plovil( \nid INTEGER PRIMARY KEY, \ntip VARCHAR(45)); \nPravilna uporaba CREATE TABLE 1 točka, \nizdelava atributov 1 točka, pravilna nastavitev \nprimarnega ključa 1 točka. \n3.3 \n3 \nPrimer: \n SELECT ime \nFROM plovila, tip_plovil \nWHERE tip_plovil.id = plovila.t_id AND tip_plovil.tip = 'jadrnica' \nAND plovila.dolzina < 15; \nZdruževanje tabel 1 točka, vsak pravilen pogoj \n1 točka. \n3.4 \n4 \nPrimer: \n DELETE FROM plovila \nWHERE (st_kabin = 3 OR plovila.dolzina > 15) AND ime LIKE 'Iza%'; \nPravilna uporaba stavka DELETE 1 točka, \npravilni pogoj LIKE 1 točka, pravilna uporaba \noklepaja in logičnih operatorjev 1 točka, \npravilna ostala pogoja 1 točka.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p241-2-4",
    "examId": "p241",
    "examCode": "P241",
    "part": 2,
    "taskNumber": 4,
    "points": 12,
    "category": "programiranje_algoritmi",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P241-C901-1-1.pdf",
      "solutionsPdf": "P241-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Rešite spodnje naloge v poljubnem programskem/skriptnem jeziku. \nObkrožite izbrani programski/skriptni jezik: \nC, C++, C#, Java, Python, PHP \nNarediti želimo preprost program za pregledovanje podatkov o slovenskih glasbenih spotih, \nobjavljenih na nekem portalu. Za hranjenje podatkov smo se namerno odločili, da jih bomo hranili \nločeno v treh podatkovnih spremenljivkah (naslov, izvajalec in datum), ki pripadajo podatkovnemu \ntipu polje (seznam, tabela). Vsebina polj je poljubna - primer vsebine polj vidite na spodnji sliki. \nPoznate pa, kakšen podatkovni tip je v posameznem polju: naslov (besedilni tip), izvajalec \n(besedilni tip) in datum (celoštevilski tip v formatu LLLLMMDD, kjer LLLL pomeni leto, MM mesec \nin DD dan). Predpostavite, da prečno istoležni podatki, ki se nahajajo zaporedno na istem \nindeksu vseh treh polj, pripadajo istemu posnetku, kar je označeno na sliki. \n \n \n \n↓ ↓ ↓ ↓ ↓ \n \n \n \n \n \n \n \n \nnaslov = \n''A veš'' \n''Moja'' \n''Sebi'' \n... \n''Hvala za vijolice'' \n \n \n \n \n \n \nizvajalec = \n''Alya'' \n''Modrijani'' \n''zalagasper'' \n... \n''Bilbi'' \n \n \n \n \n \n \ndatum = \n20071213 \n20130815 \n20190220 \n... \n20101026 \n \n \n \n \n \n \n \n \n \n↑ ↑ ↑ ↑ ↑ \n \n \n \n \n4.1. \nNapišite podprogram (metodo, funkcijo) vrniLeto, ki prejme celoštevilsko vrednost \ndatumNastanka (v formatu LLLLMMDD) kot vhodno spremenljivko. Podprogram pa izlušči \nin vrne leto. \n(2 točki) \n \n4.2. \nNapišite podprogram izpis, ki prejme kot vhodno spremenljivko indeks (celoštevilsko \nvrednost zaporednega števila mesta v polju), polje naslov in polje datum. Podprogram pa \nizpiše besedilo, pri katerem ob naslovu skladbe doda še leto nastanka. Za pridobivanje leta \nuporabite podprogram iz naloge 4.1. Predpostavite, da ste pri tej nalogi zapisali pravilno \nrešitev. Primer klica izpis(1,naslov,datum)izpiše 'Moja - 2013'. \n(3 točke) \n \n4.3. \nNapišite podprogram vsiPosnetkiIzvajalca, ki kot vhodne spremenljivke prejme besedilno \nvrednost naziva izvajalca nazivIzvajalca in polja naslov, izvajalec in datum. Podprogram \nizpiše vse skladbe izvajalca, ki je vhodna spremenljivka. Za izpis skladb uporabite/pokličite \npodprogram iz naloge 4.2. Predpostavite, da ste pri tej nalogi zapisali pravilno rešitev. \n(3 točke) \n \n4.4. \nNapišite podprogram najstarejsaSkladba, ki kot vhodni spremenljivki prejme polji naslov \nin datum, izpiše pa najstarejšo skladbo, shranjeno v poljih. Za izpis skladbe \nuporabite/pokličite podprogram iz naloge 4.2. Predpostavite, da ste pri tej nalogi zapisali \npravilno rešitev. \n(4 točke)",
    "solutionText": "6 \n \nNaloga Točke Rešitev \nDodatna navodila \n4.1 \n2 \nPrimer: \n \nUstrezno luščenje leta 1 točka, ustrezno \nvračanje numerične vrednosti 1 točka. \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.2 \n3 \nPrimer: \n \nUstrezno dostopanje do elementa na mestu \nindeks 1 točka, ustrezen klic podprograma iz \nnaloge 4.1 1 točka, združevanje nizov 1 točka. \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.3 \n3 \nPrimer: \n \nUstrezna deklaracija zanke 1 točka, ustrezno \npreverjanje pogoja 1 točka, ustrezen klic \npodprograma iz naloge 4.2 1 točka. \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.4 \n4 \nPrimer: \n \nPregled vseh elementov v polju 1 točka, \niskanje najmanjše vrednosti (najstarejšega \ndatuma) 1 točka, dostop do najstarejše skladbe \n1 točka, izpis najstarejše skladbe \ns klicem podprograma iz naloge 4.2 1 točka. \n \n \n \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p242-2-1",
    "examId": "p242",
    "examCode": "P242",
    "part": 2,
    "taskNumber": 1,
    "points": 12,
    "category": "html_css",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Podana je vizualna podoba spletnega dokumenta. \nIzdelaj stran.si\nPodročje računalništvo\nTo je prvi del vsebine.\nTo je drugi del vsebine.\nTo je tretji del vsebine.\nNavodila\nSeznam\nPomoč\nKlikni me\nKlikni me\nKlikni me\nCPI\nRIC\nMIZŠ\nProstor za vaš oglas!\n \n \n1.1. \nZapišite in ustrezno umestite del kode spletnega dokumenta, ki bo poskrbela za ustrezno \npodporo slovenskim znakom na spletni strani in izvedla nastavitev imena zavihka na \nPOKLICNA MATURA. \n(2 točki) \n \n \n \n \n \n \n \n1.2. \nZapišite kodo blokovnega razdelka, v katerega umestite odstavek z besedilom npr. To je \nprvi del vsebine. Ne pozabite dodati tudi kode za gumb. \n(3 točke) \n \n \n \n \n \n \n \n \n\n \n \n \n \n1.3. \nNapišite ustrezno kodo za oblikovanje seznama, ki je napisan v levem razdelku kot \nNavodila, Seznam in Pomoč. Vaša naloga je, da: \n- zapišete ustrezen blokovni element, \n- umestite ustrezen urejen seznam, \n- seznamu odstranite vse oznake in ga premaknete za 15 točk v desno. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n1.4. \nS pomočjo kode za oblikovanje spletnega dokumenta želimo dodati naslednje spremembe: \n- ob prehodu miške nad gumbom se barva ozadja spremeni na zeleno, \n- za tri blokovne elemente, poimenovane prvi, drugi in tretji, želimo sočasno spremeniti \nširino na 700 točk in višino na 200 točk, \n- blokovni element z imenom #prvi naj ima polno obrobo, ki naj bo črne barve in debeline \n1 točka. \n(4 točke)",
    "solutionText": "Naloga Točke \nRešitev \nDodatna navodila \n1.1 \n2 \nPrimer: \n <head> \n \n<meta charset=\"utf-8\"> \n \n<title>POKLICNA MATURA</title> \n</head> \nUstrezna umestitev 1 točka, ustrezen napis \nzavihka in uporabe znakovnega nabora \n1 točka. \n1.2 \n3 \nPrimer: \n <div id=\"vsebina\"> \n \n<p>To je prvi del vsebine.</p> \n \n<button>Klikni me</button> \n</div> \nUstrezna umestitev v blokovni element \n1 točka, ustrezna uporaba kode gnezdenega \nblokovnega elementa 1 točka, kreiranje \ngumba 1 točka. \n1.3 \n3 \nPrimer: \n <div id=\"levo\"> \n<ol> \n \n<li>Navodila</li> \n \n<li>Seznam</li> \n \n<li>Pomoč</li> \n</ol> \n</div> \n \nol{ \n \nlist-style-type: none; \n \nmargin-left: 15px; \n} \nZapis ustreznega blokovnega elementa \n1 točka, zapis in umestitev seznama 1 točka, \nodstranitev oznake seznama in zamik za 10 \ntočk v levo 1 točka. \n\n4 \n1.4 \n4 \nPrimer: \n button:hover{ \n \nbackground-color: green; \n} \n#prvi, #drugi, #tretji{ \n \nwidth: 700px; \n \nheight: 200px; \n} \n \n#prvi{ \nborder:1px solid black; \n} \nUstrezen selektor 1 točka, sprememba barve \n1 točka, sočasna sprememba višine in širine \nza tri elemente hkrati 1 točka, klic ustreznega \nbloka #prvi in dodajanje obrobe 1 točka. \n \nKomentar: merska enota ni pomembna \n(px ali pt).",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p242-2-2",
    "examId": "p242",
    "examCode": "P242",
    "part": 2,
    "taskNumber": 2,
    "points": 12,
    "category": "omrezja",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Podana je omrežna shema. Usmerjevalnik R2 v posameznem omrežju dobi 1. uporabni naslov. \nPROGRAMERJI\nNaslovni prostor:\nHRAMBA\nTRIGLAV\n \n \n \n2.1. \nNa podlagi podatkov v omrežni shemi zapišite zahtevane omrežne nastavitve IPv6 za \nstrežnik TRIGLAV. \nNaslov IP: _____________________________________________________ \nPrivzeti prehod: ________________________________________________ \n(2 točki) \n \n \n2.2. \nIzračunajte in zapišite naslov IP za razpršeno oddajanje (angl. broadcast) omrežja \nPROGRAMERJI, napišite tudi, kolikšno je celotno število uporabnih naslovov IP v tem \nomrežju in koliko naslovov IP ostane prostih potem, ko priključimo in nastavimo vse končne \nnaprave v shemi, ki so priključene v to omrežje. Omrežnim stikalom ne dodelimo naslova \nIP. \nNaslov IP za razpršeno oddajanje: ________________________________ \nŠtevilo uporabnih naslovov IP: ___________________________________ \nŠtevilo prostih naslovov IP: ______________________________________ \n(3 točke) \n \n \n \n\n \n \n \n \n2.3. \nV omrežje podjetja želimo dodati ločeno brezžično omrežje za goste. Na katero napravo \nbomo povezali dostopno točko? Kako bi najpreprosteje lahko zaščitili brezžično omrežje, \nda do njega ne bi dostopal kdorkoli, ampak samo tisti, ki bi mu to omogočili? Obenem bi \nradi gostom iz brezžičnega omrežja onemogočili dostop v preostale dele omrežja podjetja, \nna voljo jim bo samo dostop do interneta. Na kateri napravi bomo nastavili filtriranje \nprometa za ta namen? \nDostopno točko povežemo na: ___________________________________ \nNačin zaščite brezžičnega omrežja: _______________________________ \nFiltriranje prometa nastavimo na: _________________________________ \n(3 točke) \n \n \n2.4. \nPodan je naslovni prostor podjetja. Del naslovnega prostora zaseda omrežje \nPROGRAMERJI. V naslovni prostor umestite še omrežje UPRAVA, v katerem bomo imeli \n12 naprav, in nato v preostali del tudi omrežje za goste. Zapišite zahtevane nastavitve za \nobe omrežji. \nNaslov IP omrežja UPRAVA: _____________________________________ \nMaska omrežja UPRAVA: _______________________________________ \nNaslov IP omrežja GOSTI: _______________________________________ \nMaska omrežja GOSTI: _________________________________________ \n(4 točke)",
    "solutionText": "Naloga Točke \nRešitev \nDodatna navodila \n2.1 \n2 \n 2002:A:B:C::10 \n 2002:A:B:C::1 \n1 točka za vsak pravilen zapis. \n2.2 \n3 \n 93.233.88.159 \n 30 \n 23 \n1 točka za vsak pravilen zapis. \n2.3 \n3 \n R2 \n geslo \n R2 \n1 točka za vsak pravilen zapis. \n \nZa zaščito brezžičnega omrežja se \nupoštevajo tudi druge smiselne rešitve. \n2.4 \n4 \n 93.233.88.160 \n 255.255.255.240 \n 93.233.88.176 \n 255.255.255.240 \n1 točka za vsak pravilen zapis. \n \nUpoštevamo tudi odgovor /28.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p242-2-3",
    "examId": "p242",
    "examCode": "P242",
    "part": 2,
    "taskNumber": 3,
    "points": 12,
    "category": "podatkovne_baze_sql",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Na svetovnem nogometnem prvenstvu želimo spremljati podatke o rezultatih na tekmah med \ndržavami udeleženkami in voditi statistiko o dosežkih igralcev. Za ta namen smo začeli izdelovati \npodatkovni model in podatkovno bazo. Spodaj je del tabel iz modela podatkovne baze. \nIgralci \nID_igralca ime \npriimek \nstarost pozicija \nklub \nstevilka reprezentanca_id \n100 \nLionel \nMessi \n35 \nnapadalec Paris Saint-German 10 \n3 \n200 \nCristiano \nRonaldo \n37 \nnapadalec Manchester United \n7 \n2 \n300 \nSantos Junior Neymar da Silva 35 \nnapadalec PSG \n10 \n1 \n \n \nReprezentance \nID_reprezentanca \ndrzava \nnaziv \nime_priimek_selektorja \n1 \nBrazil \nBrazilija \nAdenor Leonardo Bacchi - Tite \n2 \nPortugal \nPortugalska \nFernando Santos \n3 \nArgentina \nArgentina \nLionel Scaloni \n4 \nFrance \nFrancija \nDidier Deschamps \n \n \nStadion \nID_stadiona \nnaziv_ime_stadiona \nnaslov_stadiona \nstevilo_gledalcev \n10000 \nAl Bayt Stadium \nAl Khor City, 35km north of central Doha \n60000 \n10001 \nLusail Stadium \nLusail City, 20km north of central Doha \n80000 \n10002 \nAhmad Bin Ali Stadium \nUmm Al Afaei, 20km west of central Doha \n40000 \n10003 \nAl Janoub Stadium \nAl Wakrah, 22km east of central Doha \n40000 \n \n \nTekme \nID_tekme \nskupina \ndatum \nstadion_ID \nrep1 \nrep2 \nrezultat \n1 \nA \n22.11.2022 \n10000 \n1 \n2 \n0:0 \n2 \nA \n24.11.2022 \n10000 \n3 \n4 \n3:0 \n3 \nA \n25.11.2022 \n10002 \n1 \n3 \n2:0 \n4 \nA \n27.11.2022 \n10002 \n2 \n4 \n2:1 \n5 \nB \n28.11.2022 \n10003 \n4 \n1 \n3:2 \n \n \n3.1. \nNapišite stavek SQL, s katerim v tabeli Stadion spremenite ime stolpca stevilo_gledalcev v \nstevilo_sedezev. \n(2 točki) \n \n \n \n\n \n \n \n \n3.2. \nNapišite stavek SQL, s katerim kreirate tabelo Igralci. Določite ustrezne atribute, primarni \nključ ter tuj ključ. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n3.3. \nV ustvarjeno tabelo Tekme vstavite zapis tekme v skupini C med Francijo in Brazilijo, \nodigrane 3. 12. 2022, ki se je končala z zmago Brazilije 3 : 1 in je bila odigrana na stadionu \nAhmad Bin Ali Stadium. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n3.4. \nNapišite stavek SQL, s katerim izpišete datume tekem in sortiran seznam imen stadionov, \nki imajo število sedežev večje kot 50.000. \n(4 točke)",
    "solutionText": "5 \nNaloga Točke \nRešitev \nDodatna navodila \n3.1 \n2 \nPrimer: \n ALTER TABLE Stadion \nCHANGE stevilo_gledalcev stevilo_sedezev int; \nPravilna izbira stavka ALTER 1 točka, \npravilna nastavitev CHANGE 1 točka. \n3.2 \n3 \nPrimer: \n CREATE TABLE Igralci ( \nID_igralca smallint(5) primary key, \nime varchar(30) NOT NULL, \npriimek varchar(30) NOT NULL, \nstarost smallint(3) NOT NULL, \npozicija varchar(30) NOT NULL, \nklub varchar(30) NOT NULL, \nstevilka smallint(3) NOT NULL, \nreprezentanca_id int NOT NULL, \nFOREIGN KEY(reprezentanca_id) REFERENCES \nReprezentance(ID_reprezentanca)); \nPravilna uporaba CREATE TABLE in izdelava \natributov 1 točka, pravilna nastavitev \nFOREIGN KEY 1 točka, pravilna nastavitev \nREFERENCES 1 točka. \n3.3 \n3 \nPrimer: \n INSERT INTO Tekme \n(ID_tekme, skupina, datum, stadion_ID, rep1, rep2, rezultat) \nVALUES (1, 'C' , '2022-12-03', 10002,4,1, '1:3'); \nPravilna izbira INSERT 1 točka, pravilna \nnastavitev stolpcev 1 točka, pravilne \nnastavitve vrednosti 1 točka. \n3.4 \n4 \nPrimer: \n SELECT datum, naziv_ime_stadiona \nFROM Tekme \nJOIN Stadion \nON Tekme.stadion_ID = ID_stadiona \nWHERE stevilo_gledalcev > 50000 \nORDER BY naziv_ime_stadiona; \nPravilna privzeta imena v SELECT 1 točka, \npravilna združitev tabel JOIN 1 točka, pravilno \nsortiranje 1 točka, pogoj WHERE 1 točka.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p242-2-4",
    "examId": "p242",
    "examCode": "P242",
    "part": 2,
    "taskNumber": 4,
    "points": 12,
    "category": "programiranje_algoritmi",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P242-C901-1-1 (1).pdf",
      "solutionsPdf": "P242-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Rešite spodnje naloge v poljubnem programskem/skriptnem jeziku. \nObkrožite izbran programski/skriptni jezik: \nC, C++, C#, Java, Python, PHP \n \nUstvariti želimo preprosto računalniško igro s pomočjo (poljubno dolgega) polja/seznama/tabele \nigra. Nekje v polju je glavni lik , ki je predstavljen z znakom 'O'. V polju so tudi zvezdice , \npredstavljene z znakom '*', ki pomenijo bonus točke. Prazne celice (glede na spodnjo shemo) pa \nso označene z znakom '-'. Spodaj je en primer postavitve elementov. \n \n \n \n \n \n \n \n \n \n \n \n \n \n0 \n1 \n2 \n3 \n4 \n5 \n6 \n7 \n8 \n9 \n10 \n11 \n12 \n \n \n4.1. \nNapišite del kode, ki izpiše postavitev elementov v polju igra. Za zgornjo postavitev bi se \nna standardni izhod (enkrat) izpisalo: \n* - * - - - O - - * - * - \n(2 točki) \n \n \n4.2. \nNapišite podprogram/metodo lokacijaLika, ki prejme kot vhodno spremenljivko polje \n(seznam/tabelo) igra. Podprogram vrne lokacijo (indeks) glavnega lika. Pri zapisu rešitve \nne smete uporabiti vnaprej napisanega podprograma za iskanje elementa v polju \n(seznamu/tabeli). \n(3 točke) \n \n \n4.3. \nNapišite podprogram/metodo preštej, ki prejme kot vhodno spremenljivko polje \n(seznam/tabelo) igra. Podprogram prešteje in vrne število zvezdic v polju igra. Pri zapisu \nrešitve ne smete uporabiti vnaprej napisanega podprograma za iskanje oz. preštevanje \nelementov v polju (seznamu/tabeli). \n(3 točke) \n \n \n4.4. \nNapišite podprogram/metodo tehtnica, ki prejme kot vhodno spremenljivko polje \n(seznam/tabelo) igra. Podprogram pa vrne niz 'LEVO', če je levo od glavnega lika več \nzvezdic. Če jih je več na desni, naj vrne niz 'DESNO', sicer vrne 'ENAKO'. \n(4 točke)",
    "solutionText": "6 \nNaloga Točke \nRešitev \nDodatna navodila \n4.1 \n2 \nPrimer: \n \nUstrezno pregledovanje polja 1 točka, \nustrezno generiranje izpisa 1 točka. \n \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.2 \n3 \nPrimer: \n \nUstrezno pregledovanje polja 1 točka, \nustrezno upoštevanje kriterija 1 točka, \nvračanje indeksa 1 točka. \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.3 \n3 \nPrimer: \n \nUstrezno pregledovanje polja 1 točka, \nustrezno preštevanje 1 točka, vračanje \nnumerične vrednosti 1 točka. \n \n \n \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n\n7 \n4.4 \n4 \nPrimer: \n \nUgotovitev lokacije glavnega lika 1 točka, \nustrezno pregledovanje polja 1 točka, \nustrezno preštevanje levega in desnega dela \n1 točka, vračanje ustrezne vrednosti z \nupoštevanjem kriterijev 1 točka. \n \n \n \n \n \n \n \n \n \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p243-2-1",
    "examId": "p243",
    "examCode": "P243",
    "part": 2,
    "taskNumber": 1,
    "points": 12,
    "category": "html_css",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Podana je vizualna podoba spletnega dokumenta. \n \n \n1.1. \nZnotraj glave dokumenta zapišite ustrezno kodo, ki se bo sklicevala na datoteko za \noblikovanje z imenom oblikovanje.css in nastavila avtorja spletnega mesta na RIC. \n(2 točki) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n1.2. \nV nogi dokumenta so tri povezave, in sicer CPI, RIC in MIZŠ. Zapišite in ustrezno umestite \nkodo spletnega dokumenta, ki bo s pomočjo urejenega seznama prikazala prazne \npovezave. Kreirane povezave so lahko podane poljubno. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n\n \n \n \n \n \n1.3. \nPredpostavimo, da ste za prikaz okvirjev prodaja, servis, reklamacije, akcije in o nas \nuporabili blokovne elemente. V razdelku PRODAJA je primer, kako naj bi bil videti vsak \nizmed naslednjih elementov, s sliko. Zapišite ustrezno kodo, ki ustvari ustrezen blok, \nznotraj katerega umestite novi blok za postavitev, kot je na sliki. Znotraj drugega bloka \nzapišite ustrezno kodo za klic slike, ki je v mapi Slike z imenom slika.jpg. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n1.4. \nPredpostavimo, da ste ustrezno zapisali kodo v nalogi 1.3., v kateri ste uporabili blokovne \nelemente. S pomočjo kode za oblikovanje poskrbite za naslednje: \n- prvi blok se imenuje prodaja in predstavlja prvo polje. Določite mu širino 200 točk in \nvišino 250 točk, postavitev levo in barvo ozadja temnosivo (angl. darkgrey); \n- ob prehodu miške nad blokom prodaja se pokaže polna črta črne barve, ki bo imela \ndebelino 1 točke; \n- znotraj bloka prodaja je tudi slika. Pri sliki želimo spremeniti levi odmik za negativno \nvrednost 30 točk in zgornji odmik za 40 točk. \n(4 točke)",
    "solutionText": "Naloga Točke \nRešitev \nDodatna navodila \n1.1 \n2 \nPrimer: \n <head> \n \n<meta name=\"author\" content=\"RIC\"> \n \n<link rel=\"stylesheet\" type=\"text/css\" href=\"oblikovanje.css\"> \n</head> \nUstrezna nastavitev avtorja spletnega mesta \n1 točka, ustrezen sklic na datoteko za \noblikovanje 1 točka. \n1.2 \n3 \nPrimer: \n <div id=\"noga\"> \n \n<ol> \n \n \n<li><a href=\"#\">CPI</a></li> \n \n \n<li><a href=\"#\">RIC</a></li> \n \n \n<li><a href=\"#\">MIZŠ</a></li> \n \n</ol> \n</div> \nUstrezna umestitev v blokovni element \n1 točka, ustrezna uporaba kode seznama \n1 točka, ustrezno kreiranje povezav 1 točka. \n1.3 \n3 \nPrimer: \n <div id=\"prvi\"> \n \n<div class=\"odmik\"> \n \n \n<p>PRODAJA</p> \n \n \n<a href=\"#\"></a> \n \n \n<p><img src=\"Slike/racunalnik.jpg\"></p> \n \n</div> \n</div> \nUstrezno kreiranje prvega bloka 1 točka, \nustrezno generiranje in gnezdenje drugega \nbloka 1 točka, ustrezna umestitev slike in \nzapis poti 1 točka. \n\n4 \n \n \n1.4 \n4 \nPrimer: \n #prvi{ \n \nwidth: 200px; \n \nheight: 250px; \n \nfloat:left; \n \nbackground-color: darkgrey; \n} \n \n#prvi:hover{ \n \nborder: 1px solid black; \n} \n \nimg{ \n \nmargin-left: -30px; \n \nmargin-top: 40px; \n} \n \nUstrezen zapis selektorja za prvi blok ter \nnastavitev višine in širine polja 1 točka, \nustrezna postavitev prvega bloka in \nnastavitev barve ozadja 1 točka, \nustrezen zapis selektorja prehoda miške in \nustrezna nastavitev črte 1 točka, \nustrezen zapis selektorja slike in sprememba \nnastavitve odmika 1 točka.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p243-2-2",
    "examId": "p243",
    "examCode": "P243",
    "part": 2,
    "taskNumber": 2,
    "points": 12,
    "category": "omrezja",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Podana je omrežna shema. Usmerjevalnik R2 v posameznem omrežju dobi 1. uporabni naslov. \n \n \n \n2.1. \nNaprave, ki so povezane s stikalom Sw1, so del omrežja PROGRAMERJI. Katero vezavo \nkabla UTP moramo uporabiti in s katero omrežno napravo moramo povezati stikalo Sw1? \nVrsta vezave: _________________________________ \nIme naprave: _________________________________ \n(2 točki) \n \n \n2.2. \nZa strežnik ABAK v omrežju HRAMBA zapišite zahtevane nastavitve. \nNaslov IP: ____________________________________ \nOmrežna pripona: _____________________________ \nPrivzeti prehod: _______________________________ \n(3 točke) \n \n \n \n\n \n \n \n \n2.3. \nOmrežje PROGRAMERJI naj ima naslovni prostor 196.2.2.. Določite naslov IP \nomrežnega prehoda za omrežje, naslov IP za razpršeno oddajanje (angl. broadcast IP) \nin število prostih naslovov IP po razdelitvi naslovov že priključenim napravam na stikalih \nSw1 in Sw2. Stikalom naslovov IP ne podelimo. \nNaslov IP omrežnega prehoda: __________________________ \nNaslov IP za razpršeno oddajanje: _______________________ \nŠtevilo prostih naslovov IP: _____________________________ \n(3 točke) \n \n \n2.4. \nOmrežje UPRAVA zaseda veliko prostora, zato ga bomo zmanjšali tako, da bomo vanj \nlahko umestili štiri končne naprave in omrežni prehod. V preostanek naslovnega prostora \nprvotnega omrežja pa umestimo največje možno omrežje z imenom RAZVOJ. Zapišite \nnaslove podomrežij in omrežno masko obeh omrežij v desetiški obliki. \nUPRAVA: ____________________________________ \nOmrežna maska: ______________________________ \n \nRAZVOJ: _____________________________________ \nOmrežna maska: ______________________________ \n(4 točke)",
    "solutionText": "5 \nNaloga Točke \nRešitev \nDodatna navodila \n2.1 \n2 \n križna \n Sw2 \nZa vsak pravilen zapis 1 točka. \n2.2 \n3 \n 2030:ABCD:12:FF::10 \n 64 \n 2030:ABCD:12:FF::1 \nZa vsak pravilen zapis 1 točka. \n2.3 \n3 \n 196.2.2.225 \n 196.2.2.255 \n 23 \nZa vsak pravilen zapis 1 točka. \n2.4 \n4 \n 196.2.2.192 \n 255.255.255.248 \n 196.2.2.208 \n 255.255.255.240 \nZa vsak pravilen zapis 1 točka. \nZa masko omrežja UPRAVA upoštevamo tudi \nrešitev 255.255.255.240.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p243-2-3",
    "examId": "p243",
    "examCode": "P243",
    "part": 2,
    "taskNumber": 3,
    "points": 12,
    "category": "podatkovne_baze_sql",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Kot strastni navdušenci in navijači ob tekmah in tekmovanjih v košarki si želimo voditi statistiko \ndosežkov igralcev na prvenstvu EURO 2022. Za ta namen imamo spodnje tabele: \nEKIPA \nID \nOznakaEkipe \nDrzava \nEmailEkipe \n20001 \nLIT \nLitva \nEuro2022@lit.com \n20002 \nSLO \nSlovenija \nEuro2022@slo.com \n20101 \nHRV \nHrvaška \nEuro2022@hrv.com \n20102 \nNEM \nNemčija \nEuro2022@nem.com \n20501 \nFRA \nFrancija \nEuro2022@fra.com \n \nSTATISTIKA \nID \nTocke \nSkoki \nBlokade \nID_Ekipe \nID_Igralca \n10000 \n35 \n44 \n13 \n20002 \n102 \n10001 \n99 \n12 \n1 \n20002 \n101 \n10002 \n120 \n33 \n5 \n20002 \n100 \n10003 \n77 \n40 \n9 \n20002 \n103 \n \nIGRALEC \nID \nIme \nPriimek \nStarost \nTeza \n100 \nLuka \nDončič \n22 \n95 \n101 \nGoran \nDragič \n33 \n78 \n102 \nVlado \nDimec \n29 \n110 \n103 \nVladko \nČančar \n28 \n85 \n \n \n \n3.1. \nNapišite stavek SQL, ki v obstoječi tabeli EKIPA doda stolpec Prvaki, v katerem vpišemo \nvrednosti »BILI« ali »NISO« bili prvaki evropskega prvenstva. \n(2 točki) \n \n \n \n \n \n \n \n \n\n \n \n \n \n3.2. \nNapišite stavek SQL, s katerim kreirate tabelo STATISTIKA. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n3.3. \nPo končani tekmi bi radi vstavili nove podatke v tabelo STATISTIKA. Napišite stavek SQL \nza posodobitev statistike, nanašajoče se na Luko Dončiča, ki ima ID enak 100, in sicer \npovečanje atributa Tocke za vrednost 48. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n3.4. \nNapišite poizvedbo, s katero izpišete ime, priimek, točke in skoke igralcev, ki so težji od 80 \nkilogramov, urejenih po imenu. \n(4 točke)",
    "solutionText": "6 \n \nNaloga Točke \nRešitev \nDodatna navodila \n3.1 \n2 \nPrimer: \n ALTER TABLE EKIPA \nADD Prvaki VARCHAR(4); \nPravilna izbira stavka 1 točka, pravilna izbira \ntipa 1 točka. \n3.2 \n3 \nPrimer: \n CREATE TABLE STATISTIKA ( \nID smallint(5) NOT NULL, \nTocke smallint(5) NOT NULL, \nSkoki smallint(5) NOT NULL, \nBlokade smallint(5) NOT NULL, \nID_Ekipe smallint(5) NOT NULL, \nID_Igralca smallint(3) NOT NULL, \nPRIMARY KEY (ID), \nFOREIGN KEY(ID_Ekipe) REFERENCES EKIPA(ID), \nFOREIGN KEY(ID_Igralca) REFERENCES IGRALEC(ID)) \n); \nPravilna uporaba CREATE TABLE in izdelava \natributov 1 točka, \npravilna nastavitev FOREIGN KEY 1 točka, \npravilna nastavitev REFERENCES 1 točka. \n3.3 \n3 \nPrimer: \n UPDATE STATISTIKA \nSET Tocke = Tocke+48 \nWHERE ID_Igralca = '100'; \nPravilna izbira UPDATE 1 točka, \npravilna nastavitev SET 1 točka, \npravilna nastavitev pogoja WHERE 1 točka. \n3.4 \n4 \nPrimer: \n SELECT Ime, Priimek, Tocke, Skoki \nFROM IGRALEC \nLEFT JOIN STATISTIKA \nON IGRALEC.ID = STATISTIKA.ID_Igralca \nWHERE Teza >80 \nORDER BY IME; \nUstrezni atributi stavka SELECT 1 točka, \nzdružitev tabel 1 točka, \npravilno sortiranje 1 točka, \npogoj WHERE 1 točka.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p243-2-4",
    "examId": "p243",
    "examCode": "P243",
    "part": 2,
    "taskNumber": 4,
    "points": 12,
    "category": "programiranje_algoritmi",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P243-C901-1-1.pdf",
      "solutionsPdf": "P243-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Rešite spodnje naloge v poljubnem programskem/skriptnem jeziku. \nObkrožite izbran programski/skriptni jezik: \nC, C++, C#, Java, Python, PHP \nNarediti želimo program za pregledovanje spletnih objav v izbranem družbenem omrežju. Za \nhranjenje podatkov smo se odločili, da jih bomo hranili ločeno v treh podatkovnih spremenljivkah \n(uporabnik, slika in steviloSrckov), ki pripadajo podatkovnemu tipu polje (seznam, tabela). \nVsebina polj je poljubna - primer vsebine polj vidite na spodnji sliki. Poznate pa, kakšen \npodatkovni tip se nahaja v posameznem polju: uporabnik (besedilni tip), slika (identifikacijska \nštevilka slike; celoštevilski tip) in steviloSrckov (število reakcij na sliko; celoštevilski tip). \nPredpostavite, da prečno istoležni podatki, ki si sledijo zaporedno na istem indeksu vseh treh polj, \npripadajo isti objavi, kot je označeno na sliki. \n \n \n \n↓ ↓ ↓ ↓ ↓ \n \n \n \n \n \n \n \n \nuporabnik = \n''skrat21'' \n''orka69'' \n''vilinec21'' \n... \n''skrat21'' \n \n \n \n \n \n \nslika = \n1214 \n4210 \n2512 \n... \n2414 \n \n \n \n \n \n \nsteviloSrckov = \n205 \n25 \n1005 \n... \n325 \n \n \n \n \n \n \n \n \n \n↑ ↑ ↑ ↑ ↑ \n \n \n \n \n \n4.1. \nNapišite podprogram izpis, ki kot vhodne spremenljivke prejme polja uporabnik, slika in \nsteviloSrckov ter naravno število indeks. Podprogram na standardni izhod izpiše niz, \nsestavljen iz imena uporabnika, dodamo pomišljaj in identifikacijsko številko slike ter nato \nv oklepaju podamo število reakcij/srčkov, in sicer za uporabnika, ki se nahaja v poljih na \nmestu (indeksu) indeks. \nPrimer: \nklica podprograma izpis(uporabnik, slika, steviloSrckov, 2) \nizpiše niz 'vilinec21-2512(1005)'. \n(2 točki) \n \n4.2. \nNapišite podprogram najmanjZanimivaSlika, ki kot vhodni spremenljivki prejme polji slika \nin steviloSrckov. Podprogram pa naj vrne identifikacijsko številko slike, ki ima najmanj \nreakcij (srčkov) v naši bazi. \n(3 točke) \n \n4.3. \nNapišite podprogram steviloVsehReakcij, ki kot vhodne spremenljivke prejme polji \nuporabnik in steviloSrckov ter besedilno vrednost imeUporabnika. Podprogram pa naj vrne \nskupno število vseh reakcij na slike uporabnika imeUporabnika. \n(3 točke) \n \n4.4. \nNapišite podprogram topUporabnik, ki kot vhodni spremenljivki prejme polji uporabnik in \nsteviloSrckov. Podprogram pa naj izpiše uporabnika, ki ima največje število reakcij na \nsvoje slike. Pri zapisu rešitve uporabite/pokličite podprogram iz naloge 4.3. Predpostavite, \nda ste zapisali pravilno rešitev. \n(4 točke)",
    "solutionText": "7 \nNaloga Točke \nRešitev \nDodatna navodila \n4.1 \n2 \n def izpis(uporabnik, slika, steviloSrckov, indeks): \n print(uporabnik[indeks] + \"-\" + str(slika[indeks]) + \"(\" + \nstr(steviloSrckov[indeks])+\")\") \nPridobitev vrednosti iz polj na indeksu indeks \n1 točka, ustrezno generiranje izpisa in izpis \nbesedilne vrednosti 1 točka. \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.2 \n3 \n def najmanjZanimivaSlika(slika, steviloSrckov): \n indeks=0 \n for i in range(len(slika)): \n if(steviloSrckov[i]<steviloSrckov[indeks]): \n indeks=i \n return(slika[indeks]) \nUstrezna deklaracija zanke 1 točka, \npreverjanje pogojev 1 točka, pridobitev \nnajmanjše vrednosti 1 točka. \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.3 \n3 \n def steviloVsehReakcij(uporabnik, steviloSrckov, uporabniskoIme): \n vsota=0 \n for i in range(len(uporabnik)): \n if(uporabnik[i]==uporabniskoIme): \n vsota+=steviloSrckov[i] \n return(vsota) \nUstrezna deklaracija zanke 1 točka, \npreverjanje pogojev 1 točka, seštevek vseh \nreakcij 1 točka. \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.4 \n4 \n def topUporabnik(uporabnik, steviloSrckov): \n maksiUporabnik=uporabnik[0] \n for i in range(len(uporabnik)): \n if(steviloVsehReakcij(uporabnik, steviloSrckov, \nuporabnik[i]) > steviloVsehReakcij(uporabnik, steviloSrckov, \nmaksiUporabnik)): \n maksiUporabnik=uporabnik[i] \n return(maksiUporabnik) \nUstrezna deklaracija zanke 1 točka, klic \npodprograma steviloVsehReakcij 1 točka, \npreverjanje pogojev 1 točka, pridobitev najbolj \npriljubljenega uporabnika 1 točka. \n \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p251-2-1",
    "examId": "p251",
    "examCode": "P251",
    "part": 2,
    "taskNumber": 1,
    "points": 12,
    "category": "html_css",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Dana je vizualna podoba spletnega dokumenta. \nIskalnik fotografij\nglava\nglavna\nvsebina\nodsek z \ngalerijo \nmajhnih sličic\nOpis fotografije\nodsek z \nveliko \nfotografijo\nOpis 1\n10 ogledov\nOpis 2\n155 ogledov\nOpis 3\n19 ogledov\nOpis 4\n144 ogledov\nOpis 5\n155 ogledov\nOpis 6\n19 ogledov\nOpis 7\n11 ogledov\nOpis 8\n155 ogledov\nOpis 9\n79 ogledov\n \n \n \n1.1. \nNapišite glavo spletnega dokumenta in vanjo pravilno umestite: \n- meta podatke o avtorju. Avtor naj bo Luka Krajnc; \n- dodajte še povezavo do oblikovne datoteke, ki je shranjena v podmapi stili. \n(2 točki) \n \n \n \n \n \n \n \n1.2. \nNapišite kodo za strukturo spletnega dokumenta. \n- Dodajte odseka za glavo in glavno vsebino tako, da bo za namen oblikovanja mogoče \ndo vsakega odseka posebej dostopati z unikatnim imenom. \n- V glavo dodajte glavni naslov z vsebino »Iskalnik fotografij«. \n- V odsek z glavno vsebino dodajte še dva bloka za odsek z veliko fotografijo in odsek z \ngalerijo majhnih sličic. Za vsak odsek določite svoj razred. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n\n \n \n \n \n1.3. \nOblikujte spletno stran. Zapišite kodo za oblikovanje. \n- Odsek z veliko fotografijo ter odsek z galerijo majhnih sličic postavite drug zraven \ndrugega. \n- Širina celotnega odseka z veliko fotografijo naj bo 70 odstotkov celotne širine odseka, \nv katerem je. Širina odseka z galerijo majhnih sličic naj bo 20 odstotkov širine. \n- Na levi strani odseka z galerijo majhnih sličic naredite pikčast črn rob širok 2 piksla. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n1.4. \nZa del strani z galerijo majhnih sličic napišite kodo spletnega dokumenta. \n- Napišite kodo, ki bo prikazala odsek z galerijo majhnih sličic. Napišite samo en tak blok. \nFotografija je shranjena v datoteki z imenom drevo.jpg in podmapi foto. \n- Velikost pisave teksta (samo) v galeriji naj bo 12 pikslov. \n- Besedilo za opis fotografije naj bo poudarjeno. \n- Fotografija v galeriji naj bo 10 pikslov oddaljena od besedila. \n(4 točke)",
    "solutionText": "Naloga Točke \nRešitev \nDodatna navodila \n1.1 \n2 \nPrimer: \n <head> \n \n <meta name=\"author\" content=\"Luk Krajnc\" /> \n \n <link rel=\"stylesheet\" href=\"stili/glavni.css\"> \n \n</head> \nPravilno zapisana glava dokumenta HTML \n1 točka, pravilno zapisana element meta in \npovezava do datoteke za oblikovanje 1 točka. \n1.2 \n3 \nPrimer: \n <body> \n <header id=\"glava\"> \n <h1>Iskalnik fotografij</h1> \n </header> \n <main id=\"glavna\"> \n <div class=\"levi\"><div> \n <div class=\"desni\"></div> \n <main> \n</body> \nPravilna uporaba dveh bločnih elementov \nz unikatnim atributom (id) 1 točka, pravilno \numeščen in zapisan element h1 1 točka, \npravilno umeščena in zapisana notranja \nbločna elementa z določenim razredom \n1 točka. \n1.3 \n3 \nPrimer: \n #glavna \n{ \n display: flex; \n \n} \n.levi \n{ \n width: 70%; \n} \n \n.desni \n{ \n width: 20%; \n} \n.desni \n{ \n border-left: dotted 2px black; \n} \nPravilno zapisan selektor ter lastnost in \nvrednost za glavno vsebino 1 točka, pravilna \nuporaba selektorja in lastnosti ter pravilna \nuporaba vrednosti za levi in desni odsek \n1 točka, pravilna uporaba selektorja ter \nlastnosti in vrednosti za rob 1 točka. \n\n4 \n1.4 \n4 \nPrimer: \n <div> \n <img src=\"foto/drevo.jpg\" alt=\"drevo\" class=\"galerija\"> \n <div> \n <p class=\"naslov\">Opis 1</p> \n <p class=\"ogledi\">10 ogledov</p> \n </div> \n</div> \n \n.desni { \n font-size: 12px; \n } \n \n.naslov \n{ \n font-weight: bold; \n} \n \n.galerija \n{ \n margin-right: 10px; \n} \n \nPravilno zapisana HTML-koda odseka \n1 točka, pravilna uporaba selektorja in \npravilna lastnost ter vrednost za velikost \npisave 1 točka, pravilna uporaba selektorja \nin lastnosti za poudarjeno pisavo 1 točka, \npravilna uporaba selektorja in lastnosti za \nodmik 1 točka.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p251-2-2",
    "examId": "p251",
    "examCode": "P251",
    "part": 2,
    "taskNumber": 2,
    "points": 12,
    "category": "omrezja",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Dana je omrežna shema podjetja. Stari del omrežja v sedanji stavbi je funkcionalno povezan v \nWAN. Podjetje gradi novo stavbo, v kateri bo omrežje razvojnega oddelka. Usmerjevalnika R1 in \nR2 v posameznem omrežju dobita prvi uporabni naslov, na povezavi med usmerjevalnikoma R1 \nprvi uporabni naslov, R2 drugega. \n \n \n2.1. \nV novem omrežju RAZVOJ bomo poleg IPv4 nastavili tudi IPv6. Imamo naslovni prostor \n2020:100:A:55::/64. Zapišite nastavitve za vmesnik usmerjevalnika R1, ki se povezuje s \nstikalom Sw4. \nNaslov IPv6: ____________________________________________________________________ \nPredpona omrežja: ______________________________________________________________ \n(2 točki) \n \n \n2.2. \nNova stavba podjetja je postavljena malo stran od stare stavbe, razdalja med \nusmerjevalnikoma R1 in R2 je 300 m. Med usmerjevalnikoma želimo vzpostaviti hitro in \nzanesljivo povezavo, ki bo hrbtenica omrežja podjetja. Kateri omrežni medij moramo \nuporabiti? Določite tudi omrežno predpono za povezavo med usmerjevalnikoma R1 in R2, \ntako da uporabimo čim manjše podomrežje. Koliko prostih naslovov ima tako podomrežje \npo dodelitvi naslovov usmerjevalnikoma R1 in R2? \nVrsta omrežnega medija: __________________________________________________________ \nOmrežna predpona: ______________________________________________________________ \nŠtevilo prostih naslovov: __________________________________________________________ \n(3 točke) \n \n \n \n\n \n \n \n \n2.3. \nUgotovili smo, da bo treba zamenjati usmerjevalnik R2 z novejšim usmerjevalnikom. Vrata \nza dostop do omrežja WAN so že nastavljena prek protokola DHCP. Zapišite nastavitve \nIPv4 ostalih vrat usmerjevalnika R2, če na povezavi R1-R2 uporabimo naslov omrežja \n188.22.1.252. \nVrata v omrežje PROIZVODNJA: __________________________________________________ \nVrata v omrežje HRAMBA: _______________________________________________________ \nVrata v omrežje R1-R2: __________________________________________________________ \n(3 točke) \n \n \n2.4. \nV novi stavbi bo poleg omrežja RAZVOJ, v katerem bo 20 naprav, omrežje UPRAVA, \nv katerem bo 10 naprav. Ločeno omrežje za povezavo med usmerjevalnikoma smo \npostavili na naslov omrežja 188.22.1.252. Začetni del naslovnega prostora podjetja \nzasedajo omrežja v starem delu podjetja. Preostali del naslovnega prostora razdelite na \nustrezno velika omrežja in zapišite zahtevane podatke. \nNaslov IP omrežja RAZVOJ: ______________________________________________________ \nMaska omrežja RAZVOJ: ________________________________________________________ \nNaslov IP omrežja UPRAVA: _____________________________________________________ \nMaska omrežja UPRAVA: ________________________________________________________ \n(4 točke)",
    "solutionText": "5 \n \nNaloga Točke \nRešitev \nDodatna navodila \n2.1 \n2 \n 2020:100:A:55::1 \n 64 \n1 točka za vsak pravilen zapis. Upošteva se \ntudi daljša oblika zapisa naslova IPv6. \n2.2 \n3 \n optični medij \n 30 \n 0 \n1 točka za vsak pravilen zapis. \nKot pravilni odgovor za omrežno predpono se \nupošteva tudi 31. \n2.3 \n3 \n 188.22.1.129 \n 188.22.1.161 \n 188.22.1.254 \n1 točka za vsak pravilen zapis. \n2.4 \n4 \nPrimer: \n 188.22.1.192 \n 255.255.255.224 \n 188.22.1.224 \n 255.255.255.240 \n1 točka za vsak pravilen zapis.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p251-2-3",
    "examId": "p251",
    "examCode": "P251",
    "part": 2,
    "taskNumber": 3,
    "points": 12,
    "category": "podatkovne_baze_sql",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Dan imamo nepopoln logični model za izposojo knjig v knjižnici. \nknjige \n \nid_knjige INT \n \nnaslov VARCHAR(255) \navtor VARCHAR(255) \nleto_izdaje NUMERIC(4,0) \nISBN VARCHAR(20) \nkategorija VARCHAR(50) \n \n \nčlani \n \nid_člana INT \n \nime VARCHAR(50) \npriimek VARCHAR(50) \nnaslov VARCHAR(255) \ntelefon VARCHAR(15) \ndatum_včlanitve DATE \n \n \n \n3.1. \nNa podlagi zgornjega modela s stavkom SQL izdelajte tabelo knjige. Zapišite tudi primarni \nključ. Vsi atributi so obvezni. \n(2 točki) \n \n \n \n \n \n \n \n \n \n \n \n \n3.2. \nS pomočjo SQL v tabelo knjige dodajte atribut platnice, ki ima lahko le vrednost »mehke« \nali »trde«. Vpišite mehke platnice za vse knjige v tabeli. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \nizposoje \n \nid_izposoje INT \n \nid_knjige INT \nid_člana INT \ndatum_izposoje DATE \ndatum_vračila DATE \n\n \n \n \n \n3.3. \nNapišite stavek SQL, s katerim se bodo izpisali vsi naslovi knjig in datum njihove izposoje, \nurejeno po naslovu knjig. Uporabite krajše ime (alias) za tabeli. V izpisu so tudi \nneizposojene knjige. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n3.4. \nNapišite poizvedbo SQL, s katero se bodo izpisali podatki za vse atribute iz tabele knjige \nin datumi izposoje za člane, ki so se v knjižnico vpisali pred letom 2025. \n(4 točke)",
    "solutionText": "6 \nNaloga Točke \nRešitev \nDodatna navodila \n3.1 \n2 \nPrimer: \n CREATE TABLE knjige( \nid_knjige INT PRIMARY KEY, \nnaslov VARCHAR(255) NOT NULL, \navtor VARCHAR(255) NOT NULL, \nleto_izdaje NUMERIC(4,0) NOT NULL, \nISBN VARCHAR(20) NOT NULL, \nkategorija VARCHAR(50) NOT NULL); \nPravilno nastavljeni atributi in tipi atributov \n1 točka, pravilno nastavljen ključ 1 točka. \n3.2 \n3 \nPrimer: \n ALTER TABLE knjige \nADD COLUMN platnice ENUM('mehke', 'trde'); \n \nUPDATE knjige \nSET platnice='mehke'; \nPravilni ukaz ALTER TABLE 1 točka, pravilni \ntip atributa z omejitvijo v ALTER TABLE 1 \ntočka, pravilni ukaz UPDATE 1 točka. \n3.3 \n3 \nPrimer: \n SELECT naslov, datum_izposoje \nFROM knjige k \nLEFT OUTER JOIN izposoje i \nON k.id_knjige=i.id_knjige \nORDER BY naslov; \nPravilno povezovanje dveh tabel 1 točka, \npravilna uporaba aliasov na tabelah 1 točka, \npravilno sortiranje 1 točka. \n3.4 \n4 \nPrimer: \n SELECT k.*, datum_izposoje \nFROM knjige k \nINNER JOIN izposoje i \nON k.id_knjige=i.id_knjige \nINNER JOIN člani č \nON i.id_člana=č.id_člana \nWHERE datum_včlanitve < '2025-01-01'; \nPravilna navedba izpisanih atributov 1 točka, \npravilno prvo povezovanje tabel 1 točka, \npravilno drugo povezovanje tabel 1 točka, \npravilni pogoj 1 točka.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p251-2-4",
    "examId": "p251",
    "examCode": "P251",
    "part": 2,
    "taskNumber": 4,
    "points": 12,
    "category": "programiranje_algoritmi",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P251-C901-1-1.pdf",
      "solutionsPdf": "P251-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Rešite spodnje naloge v poljubnem programskem/skriptnem jeziku. \nObkrožite izbrani programski/skriptni jezik: \nC, C++, C#, Java, Python, PHP \n4.1. \nNapišite del programa, ki uporabniku omogoča, da vnese 80 nizov imen in priimkov \nzgodovinskih osebnosti, ki jih shranite v ustrezno podatkovno strukturo \n(polje/tabelo/seznam). Poimenujte jo osebnosti. \n(2 točki) \n \n4.2. \nNapišite podprogram steviloPredhodnikov, ki prejme dva vhodna podatka, in sicer \npolje/tabelo/seznam osebnosti, napolnjeno v nalogi 4.1., in niz imeInPriimek. Podprogram \nnaj vrne število osebnosti, ki so v polju osebnosti pred iskano osebo imeInPriimek oziroma \nlevo od nje. Če te osebnosti ni v polju, naj metoda vrne vrednost -1. \n(3 točke) \n \n4.3. \nNapišite podprogram steviloImenInPriimkov, ki prejme kot vhodno spremenljivko \npoljuben niz imeInPriimekOsebnosti, ki vsebuje podatek o imenu in priimku osebnosti, niz \nvsebuje male in velike črke angleške abecede. Podprogram vrne skupno število imen in \npriimkov. Predpostavite, da ima lahko osebnost več imen in več priimkov, ločenih s \npresledkom. \n(3 točke) \n \n4.4. \nNapišite podprogram najvecImenInPriimkov, ki prejme kot vhodno spremenljivko \npolje/tabelo/seznam osebnosti, napolnjeno v nalogi 4.1., podprogram pa izpiše osebnost, ki \nima skupno največ imen in priimkov. Uporabite podprogram iz naloge 4.3. Predpostavite, \nda podprogram obstaja in je pravilno napisan. Predpostavite tudi, da je takšna osebnost v \npolju/tabeli samo ena. \n(4 točke)",
    "solutionText": "7 \n \nNaloga Točke \nRešitev \nDodatna navodila \n4.1 \n2 \nPrimer: \n osebnosti = [] \nfor i in range(5): \n vnos = input(\"Vnesi ime in priimek osebe: \") \n osebnosti.append(vnos) \nDeklaracija in inicializacija \npolja/tabele/seznama 1 točka, ustrezno branje \npodatkov v zanki 1 točka. \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.2 \n3 \nPrimer: \n def steviloPredhodnikov(osebnosti, imeInPriimek): \n for i in range(0,len(osebnosti),1): \n if(osebnosti[i] == imeInPriimek): \n return(i) \n return(-1) \nUstrezna deklaracija glave podprograma \n1 točka, ustrezno preverjanje pogojev 1 točka, \nustrezno vračanje števila 1 točka. \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.3 \n3 \nPrimer: \n def steviloImenInPriimkov(imeInPriimekOsebnosti): \n stevec = 0 \n for znak in imeInPriimekOsebnosti: \n if znak == \" \": \n stevec += 1 \n return(stevec + 1) \nUstrezna zanka 1 točka, ustrezno preštevanje \npresledkov 1 točka, ustrezno vračanje \nvrednosti 1 točka. \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.4 \n4 \nPrimer: \n def najvecImenInPriimkov(osebnosti): \n indeks = 0 \n for i in range(1,len(osebnosti)): \n if steviloImenInPriimkov(osebnosti[i]) > \nsteviloImenInPriimkov(osebnosti[indeks]): \n indeks = i \n print(osebnosti[indeks]) \nUstrezna zanka 1 točka, ustrezno klicanje \npodprograma 1 točka, ustrezno iskanje \nnajvečje vrednosti 1 točka, ustrezen izpis \nvrednosti 1 točka. \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p252-2-1",
    "examId": "p252",
    "examCode": "P252",
    "part": 2,
    "taskNumber": 1,
    "points": 12,
    "category": "html_css",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Dana je vizualna podoba spletnega dokumenta. \n \n \n \n1.1. \nV glavo dokumenta HTML pravilno umestite: \n- \nnaslov (Spletna trgovina), ki se prikaže v zavihku brskalnika, \n- \nvrstico za vključitev datoteke za oblikovanje. \n(2 točki) \n \n \n \n \n \n \n \n1.2. \nStruktura vizualnega dela spletne strani (telesa) je sestavljena iz treh odsekov: glave, \nnavigacije in (glavne) vsebine. \n- V telo dokumenta HTML zapišite kodo za te tri odseke. Uporabite vsaj dva semantična \nstrukturna elementa. \n- V glavo vstavite fotografijo. Fotografija naj se sklicuje na datoteko laptop.png, ki je \nshranjena v podmapi foto. Fotografiji dodajte še enolični identifikator za kasnejše \noblikovanje. \n- V glavo vstavite naslov (Trgovina za prenosne računalnike). \n(3 točke) \n \n \n \n\n \n \n \n \n1.3. \nOblikujte glavo spletne strani. \n- Fotografijo postavite na levo stran od glave. Zraven fotografije postavite naslov. \nFotografija naj bo visoka 100 pikslov. Za oblikovanje uporabite enolični identifikator. \n- Besedilo v naslovu poravnajte na sredini elementa in ga povečajte na dvakratno \nvelikost. \n- Za vse elemente v glavi dokumenta (naslov, fotografija) določite barvo ozadja (sivo) in \nbarvo besedila belo. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n1.4. \nZa del strani z navigacijo imamo naslednjo kodo HTML. \n<ul> \n <li><a href=\"#\">Gaming</a></li> \n <li><a href=\"#\">Multimedijski</a></li> \n <li><a href=\"#\">Ultrabooki</a></li> \n <li><a href=\"#\" class=\"aktivna\">Poslovni</a></li> \n</ul> \n \n \nZapišite kodo, ki bo: \n- v elementih navigacije odstranila podčrtovanje v povezavah; \n- v elementih navigacije odstranila vodilno ikono (piko); \n- trenutno aktivno povezavo (poslovni) pobarvala s svetlo vijoličasto barvo (hex: 7884e3); \n- celoten blok navigacije postavila pod glavo na levi, če vemo, da je glava visoka 100 \npikslov. Blok naj bo fiksen, torej naj se ob premikanju po spletni strani ne premika gor ali \ndol. \n(4 točke)",
    "solutionText": "Naloga Točke Rešitev \nDodatna navodila \n1.1 \n2 \nPrimer: \n <head> \n \n <title>Spletna trgovina</title> \n \n <link rel=\"stylesheet\" href=\"stili.css\"> \n \n</head> \nPravilno zapisan element title 1 točka, \npravilno zapisana povezava do datoteke za \noblikovanje 1 točka. \n1.2 \n3 \nPrimer: \n <body> \n <header> \n <img src=\"foto/laptop.png\" alt=\"Junak z namiznim računalnikom\" \nid=\"foto\"> \n <h1>Trgovina za prenosne računalnike</h1> \n </header> \n <nav> \n </nav> \n <main> \n </main> \n</body> \nPravilna uporaba treh bločnih elementov za \nstrukturo, od tega vsaj dveh semantičnih, \n1 točka. \nPravilno umeščen in zapisan element img \nz enoličnim identifikatorjem 1 točka. \nPravilno umeščen in zapisan element h1 \n1 točka. \n\n4 \n1.3 \n3 \nPrimer: \n #foto \n{ \n height: 100px; \n float: left; \n \n} \n \nh1 \n{ \n font-size: 2em; \n text-align: center; \n} \n \nheader \n{ \n background-color:#808080; \n color: white; \n} \nPravilno zapisan selektor in postavitev na levo \nter višina 1 točka. Pravilna uporaba selektorja, \nlastnosti in pravilna uporaba vrednosti 1 točka. \nPravilna uporaba selektorja, lastnosti ter \npravilna uporaba vrednosti za barvo ozadja in \nbarvo teksta 1 točka. \n1.4 \n4 \nPrimer: \n a \n{ \n text-decoration: none;} \n \nul \n{ \n list-style-type: none; \n} \n \na.aktivna { \n background-color:#7884e3; \n } \n \nnav \n{ \n position: fixed; \n top: 100px; \n left:0; \n} \nPravilna odstranitev podčrtavanja v povezavah \n1 točka. Pravilna odstranitev vodilne ikone \n1 točka. Pravilno obarvanje aktivne povezave \n1 točka. Pravilna postavitev bloka 1 točka.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p252-2-2",
    "examId": "p252",
    "examCode": "P252",
    "part": 2,
    "taskNumber": 2,
    "points": 12,
    "category": "omrezja",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Dana je omrežna shema podjetja, ki se ukvarja z izobraževanjem. Usmerjevalnik R2 v \nposameznem omrežju dobi 1. uporabni naslov. \n \n \n \n2.1. \nV omrežju PODATKOVNI CENTER je določen naslovni prostor 2000:11:22:33::/64. \nStrežniku S1 določite poljuben naslov IPv6 in ustrezno predpono omrežja. \nNaslov IPv6: ____________________________________________________________________ \nPredpona omrežja: ______________________________________________________________ \n(2 točki) \n \n \n2.2. \nPodjetje, za katero postavljamo omrežje, želi računalnik R5 povezati v omrežje \nPODATKOVNI CENTER, za računalnik R4, povezan na stikalo Sw2, pa želijo, da je v \nomrežju UCILNICE. PODATKOVNI CENTER in UCILNICE sta ločeni omrežji. Zapišite, na \nkatere omrežne naprave povežemo R5, Sw2 in Sw3, da zadostimo željam stranke. \nR5 povežemo na: ________________________________________________________________ \nSw2 povežemo na: ______________________________________________________________ \nSw3 povežemo na: ______________________________________________________________ \n(3 točke) \n \n \n \n\n \n \n \n \n2.3. \nKo smo vzpostavili povezave, nastavimo še omrežne nastavitve za računalnik R4. \nDodelimo mu prvi še nezasedeni naslov v omrežju. Zapišite zahtevane omrežne nastavitve \nza računalnik R4. \nNaslov IP: _______________________________________ \nOmrežna maska: _________________________________ \nPrivzeti prehod: __________________________________ \n(3 točke) \n \n \n2.4. \nNa shemi je dan naslovni prostor podjetja. Nekaj prostora zaseda omrežje UCILNICE. \nPreostali del naslovnega prostora želimo razdeliti po metodi VLSM, tako da začetni del \nnamenimo za brezžično omrežje GOSTI, v katerem bi hkrati imeli do 25 naprav, del pa ga \nuporabimo za omrežje PODATKOVNI CENTER, v katerem želimo z naslovi IPv4 nasloviti \n10 naprav. Preostanek naslovnega prostora bomo imeli za rezervo za morebitno novo \npodomrežje. Zapišite zahtevane nastavitve IP. \nNaslov IP omrežja GOSTI: ________________________________________________________ \nMaska omrežja GOSTI: __________________________________________________________ \nNaslov IP omrežja PODATKOVNI CENTER: ________________________________________ \nMaska omrežja PODATKOVNI CENTER: ___________________________________________ \n(4 točke)",
    "solutionText": "5 \nNaloga Točke \nRešitev \nDodatna navodila \n2.1 \n2 \nPrimer: \n 2000:11:22:33::10 \n 64 \n1 točka za vsak pravilen zapis, za naslov IPv6 \nse upošteva katerokoli veljavna oznaka \nvmesnika (angl. interface ID) razen 1. \n2.2 \n3 \n Sw3 \n Sw1 \n R2 \nVsak pravilen zapis 1 točka. \n2.3 \n3 \n 194.72.1.69 \n 255.255.255.192 \n 194.72.1.65 \nVsak pravilen zapis 1 točka. \n2.4 \n4 \n 194.72.1.0 \n 255.255.255.224 \n 194.72.1.32 \n 255.255.255.240 \nVsak pravilen zapis 1 točka.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p252-2-3",
    "examId": "p252",
    "examCode": "P252",
    "part": 2,
    "taskNumber": 3,
    "points": 12,
    "category": "podatkovne_baze_sql",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Dan imamo logični model za izposojo knjig. \nknjige \nPK \nid_knjige INT \n \nnaslov VARCHAR(255) \navtor VARCHAR(255) \nleto_izdaje NUMERIC(4,0) \nISBN VARCHAR(20) \nkategorija VARCHAR(50) \n \nčlani \nPK \nid_člana INT \n \nime VARCHAR(50) \npriimek VARCHAR(50) \nnaslov VARCHAR(255) \ntelefon VARCHAR(15) \ndatum_včlanitve DATE \n \n \n3.1. \nNa podlagi zgornjega modela s stavkom SQL kreirajte tabelo izposoje. Zapišite tudi \nprimarni ključ in tuja ključa. \n(2 točki) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n3.2. \nPrva, ki si je izposodila knjigo, je bila Eva Novak. Ob začetku šole, 1. 9. 2024, si je \nizposodila knjigo Gospodar prstanov. S stavkom SQL vpišite naštete podatke v vse tabele. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \nizposoje \nPK \nid_izposoje INT \nFK1 \nFK2 \nid_knjige INT \nid_člana INT \ndatum_izposoje DATE \ndatum_vračila DATE \n\n \n \n \n \n3.3. \nNapišite stavek SQL, s katerim boste izpisali člane, ki so si izposodili knjige 1. 9. 2024. \nIzpišite ime in priimek članov ter datum izposoje. Člane uredite po priimku in imenu. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n3.4. \nNapišite stavek SQL, s katerim boste izpisali naslov knjig in vse datume izposoje za Evo \nNovak. \n(4 točke)",
    "solutionText": "6 \nNaloga Točke Rešitev \nDodatna navodila \n3.1 \n2 \nPrimer: \n CREATE TABLE izposoje( \nid_izposoje INT PRIMARY KEY, \nid_knjige INT, \nid_člana INT, \ndatum_izposoje DATE, \ndatum_vračila DATE, \nFOREIGN KEY(id_knjige) REFERENCES knjige(id_knjige), \nFOREIGN KEY(id_člana) REFERENCES člani(id_člana)); \nPravilni atributi in tipi atributov 1 točka. Pravilni \nključi 1 točka. \n3.2 \n3 \nPrimer: \n INSERT INTO knjige (id_knjige, naslov) VALUES \n(1,'Gospodar prstanov'); \nINSERT INTO člani (id_člana, ime, priimek) VALUES \n(1,'Eva','Novak'); \n \nINSERT INTO izposoje (id_izposoje, id_knjige, id_člana, \ndatum_izposoje) VALUES \n(1,1,1,'2024-09-01'); \nPravilni ukaz INSERT za tabelo knjige 1 točka. \nPravilni ukaz INSERT za tabelo člani 1 točka. \nPravilni vrstni red in ukaz INSERT za tabelo \nizposoje 1 točka. \n3.3 \n3 \nPrimer: \n SELECT ime, priimek, datum_izposoje \nFROM člani č \nJOIN izposoje i \nON č.id_člana=i.id_člana \nWHERE datum_izposoje =\"2024-09-01\" \nORDER BY priimek,ime; \nPravilno povezovanje dveh tabel 1 točka. \nPravilni pogoj 1 točka. Pravilno sortiranje \n1 točka. \n3.4 \n4 \nPrimer: \n SELECT ime, priimek, k.naslov, datum_izposoje \nFROM knjige k \nJOIN izposoje i \nON k.id_knjige=i.id_knjige \nJOIN člani č \nON i.id_člana=č.id_člana \nWHERE ime=\"Eva\" AND priimek=\"Novak\"; \nPravilna navedba izpisanih atributov 1 točka. \nPravilno prvo povezovanje tabel 1 točka. \nPravilno drugo povezovanje tabel 1 točka. \nPravilni pogoj 1 točka.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p252-2-4",
    "examId": "p252",
    "examCode": "P252",
    "part": 2,
    "taskNumber": 4,
    "points": 12,
    "category": "programiranje_algoritmi",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P252-C901-1-1.pdf",
      "solutionsPdf": "P252-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Rešite spodnje naloge v poljubnem programskem/skriptnem jeziku. \nObkrožite izbrani programski/skriptni jezik: \nC, C++, C#, Java, Python, PHP \n4.1. \nNapišite del programa, ki uporabniku omogoča, da vnese 50 imen držav, ki jih shranite v \nustrezno podatkovno strukturo (polje/tabelo/seznam), ki jo poimenujte drzave. \n(2 točki) \n \n4.2. \nNapišite podprogram vrniDolzinoImena, ki prejme dva vhodna podatka, in sicer \npolje/tabelo/seznam drzave, napolnjeno v nalogi 4.1., in število X. Podprogram naj vrne \nštevilo znakov besede/niza, ki je na X-tem mestu v polju/tabeli drzave. Če je X dan izven \nustreznega intervala in na tem mestu zato ni znaka, naj vrne vrednost -1. \n(3 točke) \n \n4.3. \nNapišite podprogram steviloSamoglasnikov, ki prejme kot vhodno spremenljivko poljuben \nniz imeDrzave, ki vključuje male in velike črke angleške abecede. Podprogram naj vrne \nštevilo samoglasnikov v nizu. \n(3 točke) \n \n4.4. \nNapišite podprogram najvecSamoglasnikov, ki prejme kot vhodno spremenljivko \npolje/tabelo/seznam drzave, napolnjeno v nalogi 4.1., metoda pa izpiše tisto ime države v \npolju, ki ima največ samoglasnikov. Uporabite podprogram iz naloge 4.3. Predpostavite, da \npodprogram obstaja in je pravilno napisan. Predpostavite tudi, da je tak niz v polju/tabeli \nsamo eden. \n(4 točke)",
    "solutionText": "7 \nNaloga Točke Rešitev \nDodatna navodila \n4.1 \n2 \nPrimer: \n drzave = [] \nfor i in range(50): \n vnos = input(\"Vnesi ime drzave: \") \n drzave.append(vnos) \nDeklaracija in inicializacija \npolja/tabele/seznama 1 točka, ustrezno branje \npodatkov v zanki 1 točka. \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.2 \n3 \nPrimer: \n def vrniDolzinoImena(drzave, X): \n if X >= 0 and X < len(drzave): \n return(len(drzave[X])) \n else: \n return(-1) \nUstrezna deklaracija glave podprograma \n1 točka, ustrezno preverjanje pogojev 1 točka, \nizpis dolžine X-tega niza 1 točka. \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.3 \n3 \nPrimer: \n def steviloSamoglasnikov(imeDrzave): \n stevec = 0 \n for znak in imeDrzave: \n if znak in \"AEIOUaeiou\": \n stevec += 1 \n return(stevec) \nUstrezna zanka 1 točka, ustrezno preštevanje \nsoglasnikov 1 točka, ustrezno vračanje \nvrednosti 1 točka. \n \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.4 \n4 \nPrimer: \n def najvecSamoglasnikov(drzave): \n indeks = 0 \n for i in range(1,len(drzave)): \n if steviloSamoglasnikov(drzave[i]) > \nsteviloSamoglasnikov(drzave[indeks]): \n indeks = i \n print(drzave[indeks]) \nUstrezna zanka 1 točka, ustrezno klicanje \npodprograma 1 točka, ustrezno iskanje \nnajvečje vrednosti 1 točka, ustrezen izpis \nvrednosti 1 točka. \n \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p253-2-1",
    "examId": "p253",
    "examCode": "P253",
    "part": 2,
    "taskNumber": 1,
    "points": 12,
    "category": "html_css",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Dana je vizualna podoba spletnega dokumenta. \nGmail Slike\nIskanje Google\nKlik na srečo\nSlovenia\nPredstavitev\nOglaševanje\nPosel\nKako deluje iskanje Google\nZasebnost\nPogoji\nNastavitve\n \n \n1.1. \nZapišite del spletnega dokumenta za: \n- deklaracijo tipa dokumenta (informacijo brskalniku o dokumentu - datoteki), ki je vedno \nv prvi vrstici, in \n- kodiranje znakov Unicode. \n(2 točki) \n \n \n \n \n \n \n \n \n \n1.2. \nStruktura vizualnega dela spletne strani (telesa) je sestavljena iz treh odsekov. Glava, \nglavni del in noga. Zapišite kodo za te odseke. V nogo vstavite še dva poljubna bločna \nodseka, ki jima dodajte unikatna atributa za morebitno kasnejše oblikovanje. Vsebine \n(besedila) posameznih odsekov ne pišite. Uporabite vsaj dva semantična elementa HTML \nza strukturo strani. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n\n \n \n \n \n1.3. \nČrke na spletni strani v besedi »Google« naj bodo različne barve. \nG \no \no \ng \nl \ne \nmodra \nrdeča \nrumena \nmodra \nzelena \nrdeča \n \n \n- Zapišite kodo, ki bo omogočala, da nastavite želene oblikovne nastavitve. \n- Zapišite kodo, ki bo za vse črke določila tipografijo (font) pisave Product Sans. \nČe brskalnik te pisave ne »pozna«, pa določi pisavo Arial. \n- Zapišite kodo, ki bo izpisala črke v izbranih barvah. \n(3 točke) \n \n \n \n\n \n\n1.4. \nZa glavni del spletnega dokumenta imamo naslednjo kodo: \n<form action=\"obdelava.php\" method=\"POST\"> \n <!-- del Google --> \n <input type=\"text\" name=\"geslo\" id=\"geslo\"> \n <div id=\"gumba\"> \n <div class=\"gumbSubmit\" onclick=\"Isci()\">Iskanje \nGoogle</div> \n <div class=\"gumbSubmit\" onclick=\"Sreca()\">Klik na \nsrečo</div> \n </div> \n</form> \n \n \nZapišite kodo za oblikovanje, ki bo: \n- postavila celoten odsek (obrazec) na sredino ekrana, \n- širina odseka naj bo 50 % širine strani, \n- ozadje gumbov »Iskanje Google« in »Klik na srečo« bo pobarvala na sivo barvo, \n- ob prehodu čez en ali drugi gumb se bo okoli gumba izrisal tanek črn rob. \n(4 točke)",
    "solutionText": "Naloga Točke Rešitev \nDodatna navodila \n1.1 \n2 \nPrimer: \n <!DOCTYPE html> \n <meta charset=\"UTF-8\"> \n \nDeklaracija tipa dokumenta 1 točka, kodiranje \nznakov 1 točka. \n1.2 \n3 \nPrimer: \n <header> \n</header> \n<main> \n</main> \n<footer> \n <div id=\"prvi\"></div> \n <div id=\"drugi\"></div> \n</footer> \nPravilna uporaba treh bločnih elementov za \nstrukturo 1 točka, vsaj dva semantična \nstrukturna elementa 1 točka, pravilno \ngnezdena bločna elementa z določenim \natributom id 1 točka. \n1.3 \n3 \nPrimer: \n <div> \n <span class=\"moder\">G</span> \n <span class=\"rdec\">o</span> \n <span class=\"rumen\">o</span> \n <span class=\"moder\">g</span> \n <span class=\"zelen\">l</span> \n <span class=\"rdec\">e</span> \n</div> \n \ndiv \n{ \n font-family: \"Product Sans\", Arial; \n} \n.moder {color: blue;} \n.rdec {color: red;} \n.rumen {color: yellow;} \n.zelen {color: green;} \nVsaka črka v svojem vrstičnem elementu s \nprimernimi atributi 1 točka, pravilna nastavitev \ntipografije 1 točka, pravilna nastavitev barve za \nposamezne črke 1 točka. \n\n4 \n1.4 \n4 \nPrimer: \n form \n{ \n margin-left: auto; \n margin-right: auto; \n width: 50%; \n} \n \n.gumbSubmit \n{ \n background-color: gray; \n} \n \n.gumbSubmit:hover \n{ \n border: 1px solid black; \n} \nPravilna nastavitev širine obrazca 1 točka, \npostavitev obrazca na sredino ekrana 1 točka, \npravilna nastavitev obarvanja gumbov 1 točka, \npravilna nastavitev lastnosti prehoda z miško \n1 točka.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p253-2-2",
    "examId": "p253",
    "examCode": "P253",
    "part": 2,
    "taskNumber": 2,
    "points": 12,
    "category": "omrezja",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Dana je omrežna shema. Usmerjevalnik R2 v posameznem omrežju dobi 1. uporabni naslov. \n \n \n \n \n2.1. \nV omrežju PODATKOVNI CENTER se poleg naslovov IPv4 uporabljajo tudi naslovi IPv6. \nDan je naslov strežnika MARK. Dopolnite nastavitve IPv6 s predpono omrežja in naslovom \nomrežnega prehoda IPv6. \nNaslov IP: \n \n _____________________________ \nPredpona omrežja: \n _____________________________ \nPrivzeti prehod: \n \n _____________________________ \n(2 točki) \n \n \n2.2. \nV omrežje RAZVOJ želimo dodati računalnik, ki bo imel zadnji uporabni naslov v omrežju. \nZapišite zahtevane omrežne nastavitve. \nNaslov IP: \n _____________________________ \nOmrežna maska: \n _____________________________ \nOmrežni prehod: \n _____________________________ \n(3 točke) \n \n \n \n2012:A1:B2:C3::2 \n\n \n \n \n \n2.3. \nV omrežni shemi je računalnik R4, ki je povezan s stikalom Sw2. Želimo, da je računalnik \nR4 del omrežja RAZVOJ. S katero napravo povežemo stikalo Sw2, da lahko to \nomogočimo? Katera naprava bo potem predstavljala omrežni prehod za R4? Računalniku \nR4 dodelite prvi še nezasedeni naslov IP. \nSw2 povežemo s: \n _____________________________ \nOmrežni prehod za R4: _____________________________ \nNaslov IP za R4: \n _____________________________ \n(3 točke) \n \n \n2.4. \nV začetni del naslovnega prostora bi radi umestili omrežje PODATKOVNI CENTER in \nnovo omrežje VODSTVO. V omrežju PODATKOVNI CENTER želimo nasloviti 25 naprav. \nUmestimo ga na začetek naslovnega prostora. V omrežju VODSTVO želimo nasloviti 12 \nnaprav in ga umestiti za omrežje PODATKOVNI CENTER. Del naslovnega prostora pustite \nše za povezavo med usmerjevalnikoma. Zapišite naslova IP za omrežji PODATKOVNI \nCENTER in VODSTVO ter njuno omrežno masko. \nNaslov IP za omrežje PODATKOVNI CENTER: _____________________________________ \nMaska omrežja PODATKOVNI CENTER: \n _____________________________________ \nNaslov IP za omrežje VODSTVO: \n _____________________________________ \nMaska omrežja VODSTVO: \n _____________________________________ \n(4 točke)",
    "solutionText": "Naloga Točke \nRešitev \nDodatna navodila \n2.1 \n2 \n 64 \n 2012:A1:B2:C3::1 \nVsak pravilen zapis 1 točka. Upošteva se tudi \ndaljša oblika zapisa naslova IPv6. \n2.2 \n3 \n 200.88.1.126 \n 255.255.255.192 \n 200.88.1.65 \nVsak pravilen zapis 1 točka. \n2.3 \n3 \n Sw1 \n R2 \n 200.88.1.69 \nVsak pravilen zapis 1 točka. \n2.4 \n4 \n 200.88.1.0 \n 255.255.255.224 \n 200.88.1.32 \n 255.255.255.240 \nVsak pravilen zapis 1 točka.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p253-2-3",
    "examId": "p253",
    "examCode": "P253",
    "part": 2,
    "taskNumber": 3,
    "points": 12,
    "category": "podatkovne_baze_sql",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Imamo model podatkovne baze za izposojo knjig. \n3.1. \nDopolnite spodnji model s povezavami med relacijami in določite njihovo števnost. \nknjige \nPK \nid_knjige INT \n \nnaslov VARCHAR(255) \navtor VARCHAR(255) \nleto_izdaje NUMERIC(4,0) \nISBN VARCHAR(20) \nkategorija VARCHAR(50) \n \nčlani \nPK \nid_člana INT \n \nime VARCHAR(50) \npriimek VARCHAR(50) \nnaslov VARCHAR(255) \ntelefon VARCHAR(15) \ndatum_včlanitve DATE \n(2 točki) \n \n \n3.2. \nTabeli izposoje s pomočjo stavkov SQL dodajte tuje ključe. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n3.3. \nNapišite poizvedbo SQL, s katero boste izpisali ime in priimek članov ter njihove \nizposojene, ne pa tudi vrnjene knjige. \n(3 točke) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \nizposoje \nPK \nid_izposoje INT \nFK1 \nFK2 \nid_knjige INT \nid_člana INT \ndatum_izposoje DATE \ndatum_vračila DATE \n\n \n \n \n \n3.4. \nNapišite stavek SQL, s katerim boste izpisali knjige, ki so bile izposojene 14. 11. 2024. \nIzpišite naslov knjig, avtorje knjig in datum izposoj. Izpišete samo knjige z letnicami izdaje \nmed vključno letnico izdaje knjige »Gospodar prstanov« in letnico izdaje knjige »Harry \nPotter in kamen modrosti«. \n(4 točke)",
    "solutionText": "5 \n \n \nNaloga Točke Rešitev \nDodatna navodila \n3.1 \n2 \nPrimer: \nPravilni obe povezavi 1 točka, pravilni obe \nštevnosti 1 točka. \n \nknjige \nPK \nid_knjige INT \n \nnaslov VARCHAR(255) \navtor VARCHAR(255) \nleto_izdaje NUMERIC(4,0) \nISBN VARCHAR(20) \nkategorija VARCHAR(50) \n \nčlani \nPK \nid_člana INT \n \nime VARCHAR(50) \npriimek VARCHAR(50) \nnaslov VARCHAR(255) \ntelefon VARCHAR(15) \ndatum_včlanitve DATE \n \n \n 1 \n \n \nN \n \n \nM \n \n \n \n \n \n 1 \n \n \nizposoje \nPK \nid_izposoje INT \nFK1 \nFK2 \nid_knjige INT \nid_člana INT \ndatum_izposoje DATE \ndatum_vračila DATE \n \n3.2 \n3 \nPrimer: \n ALTER TABLE izposoje \nADD FOREIGN KEY(id_knjige) REFERENCES \nknjige(id_knjige); \nALTER TABLE izposoje \nADD FOREIGN KEY(id_člana) REFERENCES \nčlani(id_člana); \nPravilna izbira ukaza ALTER TABLE za \nizposojo 1 točka, pravilna postavitev prvega \ntujega ključa 1 točka, pravilna postavitev \ndrugega tujega ključa 1 točka. \n\n6 \n \n3.3 \n3 \nPrimer: \n SELECT ime, priimek, k.naslov \nFROM knjige k \nJOIN izposoje i \nON k.id_knjige=i.id_knjige \nJOIN člani č \nON i.id_člana=č.id_člana \nWHERE datum_izposoje IS NOT NULL AND datum_vračila \nIS NULL; \nPravilna navedba izpisanih atributov 1 točka, \npravilno povezovanje treh tabel 1 točka, \npravilni pogoj 1 točka. \n3.4 \n4 \nPrimer: \n SELECT naslov, avtor, datum_izposoje \nFROM knjige k JOIN izposoje i \nON k.id_knjige=i.id_knjige \nWHERE datum_izposoje =\"2024-11-14\" \nAND leto_izdaje BETWEEN \n \n(SELECT leto_izdaje \n \nFROM knjige \n \nWHERE naslov=\"Gospodar prstanov\") \n \nAND \n \n(SELECT leto_izdaje \n \nFROM knjige \n \nWHERE naslov=\"Harry Potter in kamen modrosti\"); \nPravilna navedba izpisanih atributov 1 točka, \npravilno povezovanje dveh tabel 1 točka, \npravilni pogoj za datum in leto izdaje 1 točka, \npravilna ugnezdena stavka SELECT 1 točka.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  },
  {
    "id": "p253-2-4",
    "examId": "p253",
    "examCode": "P253",
    "part": 2,
    "taskNumber": 4,
    "points": 12,
    "category": "programiranje_algoritmi",
    "mode": "strukturirana_vaja",
    "difficulty": "zahtevno",
    "source": {
      "examPdf": "P253-C901-1-1.pdf",
      "solutionsPdf": "P253-C901-1-3.pdf",
      "pageHint": "glej originalni PDF; nekatere naloge imajo sheme/slike/tabele"
    },
    "promptText": "Rešite spodnje naloge v poljubnem programskem/skriptnem jeziku. \nObkrožite izbrani programski/skriptni jezik: \nC, C++, C#, Java, Python, PHP \n \n4.1. \nNapišite kodo, s katero preberete celoštevilsko vrednost iz standardnega vhoda, in \npreverite, ali je število štirimestno. Če uporabnik vnese število, ki ne ustreza kriteriju, naj se \nna standardni izhod izpiše »Stevilo ni ustrezno!«. \n(2 točki) \n \n4.2. \nNapišite podprogram vsotaStevk, ki bo za poljubno naravno število, ki ga prejme kot \nvhodni parameter, izračunal in vrnil vsoto števk. \n(3 točke) \n \n4.3. \nNapišite podprogram cenzura, ki bo za poljubno naravno število, ki ga prejme kot vhodni \nparameter, spremenil to število v besedo (niz) in lihe števke nadomestil z znakom '#'. \nSpremenjena vrednost naj se izpiše na standardni izhod. \n(3 točke) \n \n4.4. \nNapišite podprogram aliJeSteviloPopolno, ki bo za poljubno naravno število, ki ga prejme \nkot vhodni parameter, preveril, ali je popolno - podprogram vrne »DA« oz. »NE«. Popolno \nštevilo v matematiki je naravno število, katerega vsota njegovih manjših deliteljev je enaka \nštevilu samemu. \nPrimer popolnih števil sta 6 (1 + 2 + 3 = 6) in 28 (1 + 2 + 4 + 7 + 14 = 28). \n(4 točke) \n \n \n\n \n \n \n \n \n \n\n \n\n \n \n\n \n \n \n \n \nPrazna stran \n \n \n \n\n \n\n \nPrazna stran",
    "solutionText": "7 \n \nNaloga Točke Rešitev \nDodatna navodila \n4.1 \n2 \nPrimer: \n stevilo = int(input(\"Vnesi stevilo\")) \nif (len(str(stevilo)) != 4): \n \nprint(\"Stevilo ni ustrezno!\") \nBranje iz standardnega vhoda 1 točka, \npreverjanje kriterija in ustrezen izpis besedila \n1 točka. \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.2 \n3 \nPrimer: \n def vsotaStevk(stevilo): \n \nvsota = 0 \n \nwhile(stevilo > 0): \n \nvsota += stevilo % 10 \n \nstevilo //= 10 \n \nreturn(vsota) \nDeklaracija glave podprograma 1 točka, vsota \nštevk 1 točka, vračanje vrednosti 1 točka. \n \n \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.3 \n3 \nPrimer: \n def cenzura(stevilo): \n \nniz = \"\" \n \nfor s in str(stevilo): \n \nif s in \"13579\": \n \nniz += '#' \nelse: \n \nniz += s \n \nprint(niz) \nPretvorba numeričnih vrednosti v besedilne \n1 točka, preverjanje kriterijev 1 točka, spajanje \nštevil in niza 1 točka. \n \n \n \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih. \n4.4 \n4 \nPrimer: \n def aliJeSteviloPopolno(stevilo): \n \nvsota = 0 \n \nfor delitelj in range(1,stevilo,1): \n \nif (stevilo % delitelj == 0): \n \nvsota += delitelj \n \nif (vsota == stevilo): \nreturn(\"DA\") \nelse: \nreturn(\"NE\") \nDeklaracija zanke 1 točka, preverjanje \ndeljivosti 1 točka, seštevek manjših deliteljev \n1 točka, preverjanje kriterija za popolno število \n1 točka. \n \n \n \n \nPo enakem sistemu se točkujejo rešitve \nv drugih programskih/skriptnih jezikih.",
    "implementationNote": "To je surova strukturirana naloga. Za interaktivno igro jo Codex lahko razbije na podnaloge 1.1-1.4 / 2.1-2.4 itd. Naloge s shemami naj prikazujejo tudi stran iz izvornega PDF-ja ali ročno pripravljeno sliko."
  }
]
