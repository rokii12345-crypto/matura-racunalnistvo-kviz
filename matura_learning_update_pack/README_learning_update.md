# Matura računalništvo — learning + login update

Ta paket doda predlog vsebine in navodila za novo posodobitev spletne aplikacije.

## Kaj doda posodobitev

1. Razdelek **Učenje**
   - Strojna oprema, OS, enote in pretvorbe
   - Omrežja
   - razlage pojmov
   - formule
   - primeri nalog
   - mini vprašanja za preverjanje

2. Osnovna lokalna prijava
   - `rok` / `rok`
   - `pyell` / `pyell`
   - `uporabnik1` / `uporabnik1`

3. Shranjevanje napredka po uporabniku v `localStorage`
   - napačni odgovori
   - rezultat kvizov
   - zaključene učne lekcije
   - zgodovina vaj

## Pomembno

To ni prava varna prijava. Ker gre za statično spletno aplikacijo brez strežnika, so uporabniki namenjeni samo ločevanju lokalnega napredka na istem računalniku/brskalniku.

Ne shranjuj občutljivih podatkov.
Ne uporabljaj tega kot produkcijski auth sistem.

## Datoteke

- `maturaLearningTypes.ts`
- `maturaLearningContent.ts`
- `maturaLearningContent.json`
- `demoUsers.ts`
- `codex-prompt-add-learning-login.md`

## Kam kopirati

Predlagana lokacija v projektu:

```text
src/data/matura/maturaLearningTypes.ts
src/data/matura/maturaLearningContent.ts
src/data/matura/demoUsers.ts
```
