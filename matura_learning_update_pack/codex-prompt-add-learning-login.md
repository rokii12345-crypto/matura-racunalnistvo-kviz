# Codex prompt — dodaj razdelek Učenje in lokalno prijavo

Projekt:

```text
C:\Users\rokje\OneDrive\Documents\VSCodeProjekti\matura-racunalnistvo-kviz
```

Aplikacija že deluje kot kviz za maturo iz računalništva. Zdaj dodaj novo večjo posodobitev.

## Cilj

Dodaj:
1. lokalno prijavo z uporabniškim imenom in geslom,
2. shranjevanje napredka po uporabniku,
3. nov razdelek **Učenje**,
4. učno vsebino za:
   - Strojna oprema, OS, enote in pretvorbe
   - Omrežja

Uporabi priložene datoteke:
- `maturaLearningTypes.ts`
- `maturaLearningContent.ts`
- `demoUsers.ts`

Skopiraj jih v:

```text
src/data/matura/
```

## Lokalna prijava

Dodaj začetni login screen.

Za zdaj uporabi hardcoded demo uporabnike:

```text
rok / rok
pyell / pyell
uporabnik1 / uporabnik1
```

Uporabniška imena in gesla dobiš iz `demoUsers.ts`.

### Pomembno

To ni prava varna prijava. To je samo lokalna demo prijava za ločevanje napredka v brskalniku.

V UI dodaj majhno opombo:

```text
To je lokalna učna prijava za shranjevanje napredka v tem brskalniku.
```

Ne dodajaj backend strežnika.
Ne dodajaj Firebase.
Ne dodajaj Supabase.
Ne dodajaj prave registracije.

## Session

Po uspešni prijavi shrani trenutnega uporabnika v `localStorage`:

```text
matura-auth-current-user
```

Shrani samo username, ne gesla.

Dodaj gumb **Odjava**, ki izbriše trenutno prijavo, ne pa napredka.

## Shranjevanje napredka po uporabniku

Trenutno aplikacija verjetno uporablja localStorage za napačne odgovore. Posodobi tako, da se vse shrani po uporabniku.

Uporabi ključ:

```ts
`matura-progress-v1:${username}`
```

Predlagana struktura:

```ts
type UserProgress = {
  username: string
  wrongQuestionIds: string[]
  answeredQuestionIds: string[]
  correctQuestionIds: string[]
  quizHistory: {
    id: string
    mode: string
    date: string
    total: number
    correct: number
    percent: number
  }[]
  completedLearningLessonIds: string[]
  lastLearningSectionId?: string
  lastLearningLessonId?: string
}
```

Zahteve:
- napačni odgovori naj bodo ločeni po uporabniku,
- rezultati kvizov naj bodo ločeni po uporabniku,
- zaključene učne lekcije naj bodo ločene po uporabniku,
- ob odjavi se napredek ne izbriše,
- ob ponovni prijavi isti uporabnik vidi svoj napredek.

Če v aplikaciji že obstaja star localStorage ključ za napačne odgovore, ga ne briši nasilno. Lahko ga ignoriraš ali narediš nežno migracijo v trenutno prijavljenega uporabnika.

## Navigacija

Dodaj glavno navigacijo ali začetni zaslon z razdelki:

- Kviz
- Učenje
- Napačni odgovori
- Strukturirane naloge
- Profil / Napredek
- Odjava

Obstoječih funkcij ne odstrani.

## Razdelek Učenje

Dodaj novo stran/sekcijo **Učenje**.

Uporabi podatke iz:

```ts
maturaLearningContent
```

UI naj omogoča:
1. izbiro glavne teme,
2. prikaz lekcij znotraj teme,
3. prikaz:
   - povzetka,
   - ključnih pojmov,
   - formul,
   - primerov,
   - mini vprašanj,
   - subnet tabele, če obstaja,
4. gumb **Označi kot predelano**,
5. prikaz napredka po uporabniku.

### Začetne teme

Prikaži vsaj ti dve kartici:

1. **Strojna oprema, OS, enote in pretvorbe**
   - enote in pretvorbe
   - procesor
   - pomnilniki
   - diski
   - datotečni sistemi
   - RAID/priključki/monitorji

2. **Omrežja**
   - osnovni pojmi
   - IPv4/CIDR
   - subnetting
   - VLSM
   - IPv6
   - protokoli
   - kabli, naprave in MAC tabela

## UI / dizajn

Ohrani obstoječo lepo temo, vendar dodaj učni občutek.

Želim:
- temen premium dizajn,
- kartice,
- jasne značke za lekcije,
- progress bar,
- lep prikaz formul,
- subnet tabela mora biti pregledna tudi na telefonu,
- brez horizontalnega scrollanja,
- mobile friendly.

Pri lekcijah naj bo vse zelo berljivo. Ne pretiravaj z animacijami.

## Profil / napredek

Dodaj preprost profil:

- pozdrav uporabniku,
- število rešenih vprašanj,
- število pravilnih odgovorov,
- število napačnih odgovorov,
- število predelanih lekcij,
- zadnji rezultat kviza,
- gumb za odjavo.

## Varnost / omejitve

Ne uporabljaj tega kot pravi auth.
Ne shranjuj gesel v localStorage.
Gesla so samo v demo podatkovni datoteki.
Ne dodajaj zunanjih auth knjižnic.

## Build

Na koncu zaženi:

```bash
npm run build
npm run lint
```

Če lint skripta ne obstaja, to jasno napiši ali jo dodaj, če je to smiselno.

Popravi vse TypeScript napake.
Ne spreminjaj vprašanj mature.
Ne izmišljaj novih maturitetnih vprašanj.
