# Codex prompt - Matura računalništvo kviz/trening

V projektu dodaj nov način učenja/igre za **poklicno maturo iz računalništva**.

Uporabi podatkovni paket v tej mapi:

- `matura_manifest.json` - seznam izpitnih rokov in izvornih PDF-jev
- `matura_short_questions.json` - 162 krajših vprašanj iz 1. dela
- `matura_structured_tasks_raw.json` - 36 surovih strukturiranih nalog iz 2. dela
- `maturaQuestionTypes.ts` - predlagani tipi
- `maturaShortQuestions.ts` - TypeScript export istih vprašanj
- `maturaStructuredTasksRaw.ts` - TypeScript export strukturiranih nalog
- `extraction_report.json` - kontrola ekstrakcije in statistika

## Cilj

Naredi aplikacijo/način igre, ki pomaga pri pripravi na maturo:

1. hiter kviz iz 1. dela,
2. računske naloge,
3. SQL/HTML/CSS/programiranje vaje,
4. način "matura trening", kjer uporabnik rešuje po temah,
5. pregled napak in ponavljanje napačnih vprašanj.

## Podatkovna pravila

- Ne izmišljaj vprašanj ali rešitev.
- Uporabi samo podatke iz priloženih JSON/TS datotek.
- Pri vprašanjih z `needsVisualContext: true` prikaži opozorilo: "Naloga ima sliko/kodo/shematiko v originalni poli" in pokaži `source.examPdf` + `source.page`.
- Če ima vprašanje `options`, ga prikaži kot izbiro odgovorov.
- Če ima `correctOptions` eno črko, gre za en odgovor.
- Če ima `correctOptions` več črk, gre za več pravilnih odgovorov.
- Če `correctOptions` manjka ali je prazen, prikaži vnosno polje in po oddaji pokaži `answer` + `gradingNotes`.
- `gradingNotes` vsebuje uradna navodila za ocenjevanje; prikaži jih šele po oddaji odgovora.

## Načini igre

### 1. Hitri kviz

- Vprašanja: samo `type` = `multiple_choice_single` ali `multiple_choice_multi`.
- Uporabnik izbere odgovor.
- Takoj pokaži pravilno/napačno.
- Točkovanje naj upošteva `points`.
- Pri multi-choice mora uporabnik izbrati točno vse pravilne odgovore.

### 2. Računske naloge

- Vprašanja: `mode` = `racunska_naloga` ali `category` = `pretvorbe_enote_racunanje`.
- Uporabnik vpiše rezultat.
- Po oddaji pokaži rešitev in uradna navodila.
- Ne skušaj strogo avtomatsko ocenjevati vseh zapisov; za prvo verzijo zadošča samopreverjanje.

### 3. SQL/HTML/CSS/programiranje

- Vprašanja: `sql_open`, `html_css_open`, `code_open` in strukturirane naloge.
- Uporabnik vpiše rešitev v večvrstično polje.
- Po oddaji pokaži uradno rešitev/navodila.
- Dodaj gumb "Označi kot znam / ne znam".

### 4. Po temah

Omogoči filtre po `category`:

- `strojna_oprema_os`
- `pretvorbe_enote_racunanje`
- `omrezja`
- `podatkovne_baze_sql`
- `html_css`
- `programiranje_algoritmi`
- `splosno_racunalnistvo`

### 5. Matura simulacija

- Naključno izberi 18 vprašanj iz 1. dela.
- Cilj: skupaj približno 22 točk.
- Nato dodaj 4 strukturirane naloge, po eno iz vsake glavne skupine, če je mogoče:
  - HTML/CSS
  - omrežja
  - SQL
  - programiranje
- Na koncu pokaži rezultat in seznam napačnih/negotovih odgovorov.

## UI zahteve

- Slovenski teksti.
- Mobilno prijazno, brez horizontalnega scrollanja.
- Temen, čist dizajn, primeren za učenje.
- Kartica vprašanja naj pokaže:
  - izpitni rok (`examCode`, leto/sezona iz manifesta),
  - del in številko naloge,
  - kategorijo,
  - točke,
  - težavnost.
- Dodaj napredek: npr. 7/18.
- Dodaj statistiko po kategorijah.
- Shrani napredek v localStorage.

## Tehnične zahteve

- Uporabi React + TypeScript.
- Dodaj tipe iz `maturaQuestionTypes.ts`.
- Podatke lahko uvoziš iz `maturaShortQuestions.ts` in `maturaStructuredTasksRaw.ts`.
- Implementiraj robusten shuffle.
- Ne crashaj, če je odgovor prazen.
- Pri vprašanjih brez `correctOptions` ne izvajaj avtomatske ocene, ampak samopreverjanje.

## Validacija

Dodaj skripto ali funkcijo, ki preveri:

- vsak `id` je unikaten,
- vsako vprašanje ima `prompt`,
- MC vprašanja imajo vsaj 2 options,
- MC vprašanja imajo `correctOptions`,
- vsako vprašanje ima `category`, `mode`, `points`, `source`,
- strukturirane naloge imajo `promptText` in `solutionText`.

Na koncu zaženi:

```cmd
npm.cmd run build
npm.cmd run lint
```

Popravi vse TypeScript/lint napake.
