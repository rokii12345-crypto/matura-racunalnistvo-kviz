# Matura računalništvo - strukturiran paket za kviz/trening

Ta paket je pripravljen iz PDF-jev, ki so bili naloženi v pogovor.

## Kaj je vključeno

- **9 izpitnih rokov**
- **162 krajših vprašanj** iz 1. dela
- **36 surovih strukturiranih nalog** iz 2. dela

Izpitna pola ima po navodilih dva dela: 18 krajših nalog in 4 strukturirane naloge, skupaj 70 točk, od tega 22 v 1. delu in 48 v 2. delu.

## Datoteke

- `matura_manifest.json` - izpitni roki in izvorne datoteke
- `matura_short_questions.json` - glavni podatki za kviz
- `matura_structured_tasks_raw.json` - surove daljše naloge za vaje
- `maturaQuestionTypes.ts` - TypeScript tipi
- `maturaShortQuestions.ts` - TS export krajših vprašanj
- `maturaStructuredTasksRaw.ts` - TS export strukturiranih nalog
- `codex-prompt-matura-kviz.md` - prompt za Codex
- `extraction_report.json` - statistika in opozorila

## Opombe o kakovosti podatkov

Ekstrakcija je avtomatska iz PDF-jev. Vprašanja 1. dela so najbolj uporabna takoj.

Naloge z oznako `needsVisualContext: true` se lahko sklicujejo na sliko, shemo, tabelo ali prikazano kodo v originalni poli. V aplikaciji naj se pri teh nalogah prikaže vir: `source.examPdf` in `source.page`.

Strukturirane naloge 2. dela so namerno shranjene kot surovi bloki. Codex naj jih lahko prikaže kot "vaje s samopreverjanjem" ali jih kasneje ročno/AI razbije na podnaloge.

## Priporočen vrstni red v Codexu

1. Skopiraj `maturaQuestionTypes.ts`, `maturaShortQuestions.ts`, `maturaStructuredTasksRaw.ts` v `src/data/matura/`.
2. Dodaj validacijo podatkov.
3. Najprej naredi "Hitri kviz" iz MC vprašanj.
4. Potem dodaj odprte računske/SQL/HTML/programerske vaje.
5. Na koncu dodaj "Matura simulacija".

## Statistika

```json
{
  "exams": 9,
  "shortQuestions": 162,
  "structuredTasks": 36,
  "byCategoryShort": {
    "programiranje_algoritmi": 21,
    "strojna_oprema_os": 31,
    "pretvorbe_enote_racunanje": 19,
    "splosno_racunalnistvo": 24,
    "omrezja": 19,
    "podatkovne_baze_sql": 26,
    "html_css": 22
  },
  "byTypeShort": {
    "short_answer": 17,
    "multiple_choice_single": 102,
    "multiple_choice_multi": 11,
    "sql_open": 9,
    "html_css_open": 9,
    "calculation": 13,
    "code_open": 1
  },
  "byModeShort": {
    "kratki_odgovor": 17,
    "kviz": 113,
    "sql_vaja": 9,
    "html_css_vaja": 9,
    "racunska_naloga": 13,
    "programiranje_vaja": 1
  },
  "needsVisualContextShort": 19,
  "errors": []
}
```
