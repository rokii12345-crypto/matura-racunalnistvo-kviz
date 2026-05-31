import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { maturaAnswerExplanationById } from './data/matura/maturaAnswerExplanations'
import { maturaShortQuestions } from './data/matura/maturaShortQuestions'
import structuredTasksJson from './data/matura/matura_structured_tasks_raw.json'
import type { MaturaShortQuestion, MaturaStructuredTask } from './data/matura/maturaQuestionTypes'
import { validateMaturaData } from './data/matura/validateMaturaData'

type AppScreen = 'home' | 'topics' | 'structured' | 'session'
type SessionKind = 'quick' | 'topics' | 'wrong' | 'structured' | 'calculations'
type PracticeItem =
  | { kind: 'short'; question: MaturaShortQuestion }
  | { kind: 'structured'; task: MaturaStructuredTask }
type AttemptStatus = 'correct' | 'incorrect' | 'known' | 'unknown'
type Attempt = {
  itemId: string
  earned: number
  total: number
  status: AttemptStatus
}
type Session = {
  kind: SessionKind
  title: string
  description: string
  items: PracticeItem[]
}

const structuredTasks = structuredTasksJson as MaturaStructuredTask[]

const WRONG_STORAGE_KEY = 'matura-racunalnistvo-kviz-wrong-v1'

const CATEGORY_LABELS: Record<string, string> = {
  strojna_oprema_os: 'Strojna oprema in OS',
  pretvorbe_enote_racunanje: 'Pretvorbe, enote, računanje',
  omrezja: 'Omrežja',
  podatkovne_baze_sql: 'Podatkovne baze in SQL',
  html_css: 'HTML in CSS',
  programiranje_algoritmi: 'Programiranje in algoritmi',
  splosno_racunalnistvo: 'Splošno računalništvo',
}

const CATEGORY_ORDER = Object.keys(CATEGORY_LABELS)

const MODE_COPY: Record<SessionKind, { title: string; description: string }> = {
  quick: {
    title: 'Hitri kviz',
    description: '18 naključnih izbirnih vprašanj iz prvega dela.',
  },
  topics: {
    title: 'Vaja po temah',
    description: 'Mešana vaja iz izbrane teme z odgovori po oddaji.',
  },
  wrong: {
    title: 'Napačni odgovori',
    description: 'Ponovi naloge, ki si jih označil kot napačne ali ne znam.',
  },
  structured: {
    title: 'Strukturirane naloge',
    description: 'Surove naloge iz drugega dela za samopreverjanje.',
  },
  calculations: {
    title: 'Računske naloge',
    description: 'Naloge s pretvorbami, enotami in računskimi postopki.',
  },
}

function loadWrongIds() {
  try {
    const raw = window.localStorage.getItem(WRONG_STORAGE_KEY)
    if (!raw) {
      return []
    }

    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : []
  } catch {
    return []
  }
}

function randomInt(exclusiveMax: number) {
  if (exclusiveMax <= 1) {
    return 0
  }

  const cryptoObject = globalThis.crypto
  if (cryptoObject?.getRandomValues) {
    const bucket = new Uint32Array(1)
    const range = 0x100000000
    const limit = range - (range % exclusiveMax)

    do {
      cryptoObject.getRandomValues(bucket)
    } while (bucket[0] >= limit)

    return bucket[0] % exclusiveMax
  }

  return Math.floor(Math.random() * exclusiveMax)
}

function shuffle<T>(items: readonly T[]) {
  const result = [...items]

  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = randomInt(index + 1)
    const current = result[index]
    result[index] = result[swapIndex]
    result[swapIndex] = current
  }

  return result
}

function itemId(item: PracticeItem) {
  return item.kind === 'short' ? item.question.id : item.task.id
}

function itemPoints(item: PracticeItem) {
  return item.kind === 'short' ? item.question.points : item.task.points
}

function itemCategory(item: PracticeItem) {
  return item.kind === 'short' ? item.question.category : item.task.category
}

function categoryLabel(category: string) {
  return CATEGORY_LABELS[category] ?? category.replaceAll('_', ' ')
}

function sourceLabel(source: MaturaShortQuestion['source']) {
  const page = source.page ? `, stran ${source.page}` : ''
  const hint = source.pageHint ? `, ${source.pageHint}` : ''
  return `${source.examPdf}${page}${hint}`
}

function isMultipleChoice(question: MaturaShortQuestion) {
  return question.options.length > 0 && question.correctOptions.length > 0
}

function isMultiChoice(question: MaturaShortQuestion) {
  return question.type === 'multiple_choice_multi' || question.correctOptions.length > 1
}

function isExactChoice(selectedOptions: string[], correctOptions: string[]) {
  return (
    selectedOptions.length === correctOptions.length &&
    correctOptions.every((optionId) => selectedOptions.includes(optionId))
  )
}

function formatBlock(text: string) {
  return text.trim() || 'Uradna rešitev v podatkih ni podana.'
}

function sessionTotal(items: PracticeItem[]) {
  return items.reduce((sum, item) => sum + itemPoints(item), 0)
}

function shortItems(questions: MaturaShortQuestion[]) {
  return questions.map((question): PracticeItem => ({ kind: 'short', question }))
}

function structuredItems(tasks: MaturaStructuredTask[]) {
  return tasks.map((task): PracticeItem => ({ kind: 'structured', task }))
}

function ModeCard({
  title,
  detail,
  stat,
  onClick,
}: {
  title: string
  detail: string
  stat: string
  onClick: () => void
}) {
  return (
    <button className="mode-card" type="button" onClick={onClick}>
      <span>{title}</span>
      <small>{detail}</small>
      <strong>{stat}</strong>
    </button>
  )
}

function CategoryPicker({
  selectedCategory,
  availableCategories,
  onSelect,
  includeAll,
}: {
  selectedCategory: string
  availableCategories: string[]
  onSelect: (category: string) => void
  includeAll: boolean
}) {
  const categories = includeAll ? ['all', ...availableCategories] : availableCategories

  return (
    <div className="category-grid" role="list" aria-label="Teme">
      {categories.map((category) => (
        <button
          className={selectedCategory === category ? 'chip active' : 'chip'}
          key={category}
          type="button"
          onClick={() => onSelect(category)}
        >
          {category === 'all' ? 'Vse teme' : categoryLabel(category)}
        </button>
      ))}
    </div>
  )
}

function MetaPill({ children }: { children: string }) {
  return <span className="meta-pill">{children}</span>
}

function resultMessage(percentage: number) {
  if (percentage >= 90) {
    return 'Odličen tempo. To je že zelo blizu maturitetni formi.'
  }

  if (percentage >= 70) {
    return 'Dober rezultat. Ponovi še naloge, kjer nisi bil čisto prepričan.'
  }

  if (percentage >= 50) {
    return 'Solidna osnova. Največ boš pridobil s ponavljanjem napak.'
  }

  return 'Začni počasi: reši manjši sklop, preberi razlage in ponovi napačne naloge.'
}

function App() {
  const [screen, setScreen] = useState<AppScreen>('home')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStructuredCategory, setSelectedStructuredCategory] = useState('all')
  const [session, setSession] = useState<Session | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [textAnswer, setTextAnswer] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [finished, setFinished] = useState(false)
  const [attempts, setAttempts] = useState<Record<string, Attempt>>({})
  const [wrongIds, setWrongIds] = useState(loadWrongIds)

  const wrongSet = useMemo(() => new Set(wrongIds), [wrongIds])
  const validationIssues = useMemo(
    () => validateMaturaData(maturaShortQuestions, structuredTasks),
    [],
  )

  const topicCategories = useMemo(
    () => CATEGORY_ORDER.filter((category) => maturaShortQuestions.some((q) => q.category === category)),
    [],
  )

  const structuredCategories = useMemo(
    () => CATEGORY_ORDER.filter((category) => structuredTasks.some((task) => task.category === category)),
    [],
  )

  const categoryStats = useMemo(
    () =>
      CATEGORY_ORDER.map((category) => ({
        category,
        shortCount: maturaShortQuestions.filter((question) => question.category === category).length,
        structuredCount: structuredTasks.filter((task) => task.category === category).length,
      })),
    [],
  )

  useEffect(() => {
    window.localStorage.setItem(WRONG_STORAGE_KEY, JSON.stringify(wrongIds))
  }, [wrongIds])

  const resetQuestionState = () => {
    setSelectedOptions([])
    setTextAnswer('')
    setSubmitted(false)
  }

  const startSession = (kind: SessionKind, items: PracticeItem[]) => {
    const mode = MODE_COPY[kind]
    setSession({
      kind,
      title: mode.title,
      description: mode.description,
      items,
    })
    setCurrentIndex(0)
    setAttempts({})
    setFinished(false)
    resetQuestionState()
    setScreen('session')
  }

  const addWrongId = (id: string) => {
    setWrongIds((current) => (current.includes(id) ? current : [...current, id]))
  }

  const removeWrongId = (id: string) => {
    setWrongIds((current) => current.filter((wrongId) => wrongId !== id))
  }

  const startQuickQuiz = () => {
    const questions = maturaShortQuestions.filter(isMultipleChoice)
    startSession('quick', shortItems(shuffle(questions).slice(0, 18)))
  }

  const startTopicPractice = () => {
    const questions =
      selectedCategory === 'all'
        ? maturaShortQuestions
        : maturaShortQuestions.filter((question) => question.category === selectedCategory)
    startSession('topics', shortItems(shuffle(questions)))
  }

  const startWrongPractice = () => {
    const shortWrong = maturaShortQuestions.filter((question) => wrongSet.has(question.id))
    const structuredWrong = structuredTasks.filter((task) => wrongSet.has(task.id))
    startSession('wrong', shuffle([...shortItems(shortWrong), ...structuredItems(structuredWrong)]))
  }

  const startStructuredPractice = () => {
    const tasks =
      selectedStructuredCategory === 'all'
        ? structuredTasks
        : structuredTasks.filter((task) => task.category === selectedStructuredCategory)
    startSession('structured', structuredItems(shuffle(tasks)))
  }

  const startCalculationPractice = () => {
    const questions = maturaShortQuestions.filter(
      (question) =>
        question.mode === 'racunska_naloga' || question.category === 'pretvorbe_enote_racunanje',
    )
    startSession('calculations', shortItems(shuffle(questions)))
  }

  const currentItem = session?.items[currentIndex] ?? null
  const currentAttempt = currentItem ? attempts[itemId(currentItem)] : undefined

  const recordAttempt = (attempt: Attempt) => {
    setAttempts((current) => ({
      ...current,
      [attempt.itemId]: attempt,
    }))
  }

  const submitAnswer = () => {
    if (!currentItem || submitted) {
      return
    }

    setSubmitted(true)

    if (currentItem.kind === 'short' && isMultipleChoice(currentItem.question)) {
      const correct = isExactChoice(selectedOptions, currentItem.question.correctOptions)
      const id = currentItem.question.id
      recordAttempt({
        itemId: id,
        earned: correct ? currentItem.question.points : 0,
        total: currentItem.question.points,
        status: correct ? 'correct' : 'incorrect',
      })

      if (correct) {
        removeWrongId(id)
      } else {
        addWrongId(id)
      }
    }
  }

  const markSelfCheck = (known: boolean) => {
    if (!currentItem) {
      return
    }

    const id = itemId(currentItem)
    const points = itemPoints(currentItem)
    recordAttempt({
      itemId: id,
      earned: known ? points : 0,
      total: points,
      status: known ? 'known' : 'unknown',
    })

    if (known) {
      removeWrongId(id)
    } else {
      addWrongId(id)
    }
  }

  const goNext = () => {
    if (!session) {
      return
    }

    if (currentIndex >= session.items.length - 1) {
      setFinished(true)
      return
    }

    setCurrentIndex((index) => index + 1)
    resetQuestionState()
  }

  const leaveSession = () => {
    setSession(null)
    setScreen('home')
    setFinished(false)
    resetQuestionState()
  }

  const answeredCount = session
    ? session.items.filter((item) => Boolean(attempts[itemId(item)])).length
    : 0
  const earnedPoints = session
    ? session.items.reduce((sum, item) => sum + (attempts[itemId(item)]?.earned ?? 0), 0)
    : 0
  const totalPoints = session ? sessionTotal(session.items) : 0

  if (screen === 'topics') {
    return (
      <main className="app-shell">
        <button className="ghost-button back-button" type="button" onClick={() => setScreen('home')}>
          Nazaj
        </button>
        <section className="setup-panel">
          <div>
            <p className="eyebrow">Vaja po temah</p>
            <h1>Izberi področje za utrjevanje</h1>
            <p className="lead">
              Vprašanja ostanejo točno taka, kot so v podatkovnem paketu. Po oddaji vidiš uradni
              odgovor in navodila za ocenjevanje.
            </p>
          </div>

          <CategoryPicker
            availableCategories={topicCategories}
            includeAll
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <button className="primary-button" type="button" onClick={startTopicPractice}>
            Začni vajo
          </button>
        </section>
      </main>
    )
  }

  if (screen === 'structured') {
    return (
      <main className="app-shell">
        <button className="ghost-button back-button" type="button" onClick={() => setScreen('home')}>
          Nazaj
        </button>
        <section className="setup-panel">
          <div>
            <p className="eyebrow">Strukturirane naloge</p>
            <h1>Drugi del mature</h1>
            <p className="lead">
              Naloge so prikazane kot surovi bloki iz originalnega paketa. Rešitev oddaš zase, nato
              jo primerjaš z uradnimi navodili.
            </p>
          </div>

          <CategoryPicker
            availableCategories={structuredCategories}
            includeAll
            selectedCategory={selectedStructuredCategory}
            onSelect={setSelectedStructuredCategory}
          />

          <button className="primary-button" type="button" onClick={startStructuredPractice}>
            Začni strukturirane naloge
          </button>
        </section>
      </main>
    )
  }

  if (screen === 'session' && session) {
    if (session.items.length === 0) {
      return (
        <main className="app-shell">
          <button className="ghost-button back-button" type="button" onClick={leaveSession}>
            Domov
          </button>
          <section className="empty-state">
            <p className="eyebrow">{session.title}</p>
            <h1>Trenutno ni nalog za ta izbor</h1>
            <p className="lead">
              Ko pri kvizu ali samopreverjanju označiš napačen odgovor, se bo pojavil tukaj.
            </p>
          </section>
        </main>
      )
    }

    if (finished) {
      const percentage = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0
      const unresolvedItems = session.items.filter((item) => {
        const attempt = attempts[itemId(item)]
        return !attempt || attempt.status === 'incorrect' || attempt.status === 'unknown'
      })

      return (
        <main className="app-shell">
          <section className="result-panel">
            <p className="eyebrow">{session.title}</p>
            <div className="result-summary">
              <h1>Rezultat</h1>
              <div className="result-percent">
                <span>{percentage}%</span>
                <small>{resultMessage(percentage)}</small>
              </div>
            </div>
            <div className="score-grid">
              <div>
                <span>{earnedPoints}</span>
                <small>osvojenih točk</small>
              </div>
              <div>
                <span>{totalPoints}</span>
                <small>možnih točk</small>
              </div>
              <div>
                <span>
                  {answeredCount}/{session.items.length}
                </span>
                <small>odgovorjenih nalog</small>
              </div>
            </div>

            <div className="review-list">
              <h2>Za ponovitev</h2>
              {unresolvedItems.length === 0 ? (
                <p>V tej seriji ni ostalo napačnih ali neoznačenih nalog.</p>
              ) : (
                unresolvedItems.map((item) => (
                  <article className="review-row" key={itemId(item)}>
                    <strong>
                      {item.kind === 'short'
                        ? `${item.question.examCode}, 1. del, naloga ${item.question.questionNumber}`
                        : `${item.task.examCode}, 2. del, naloga ${item.task.taskNumber}`}
                    </strong>
                    <span>{categoryLabel(itemCategory(item))}</span>
                  </article>
                ))
              )}
            </div>

            <div className="action-row">
              <button
                className="primary-button"
                type="button"
                onClick={() => startSession(session.kind, shuffle(session.items))}
              >
                Ponovi serijo
              </button>
              <button className="secondary-button" type="button" onClick={leaveSession}>
                Nazaj na začetek
              </button>
            </div>
          </section>
        </main>
      )
    }

    const item = currentItem
    if (!item) {
      return null
    }

    const isShort = item.kind === 'short'
    const question = isShort ? item.question : null
    const task = item.kind === 'structured' ? item.task : null
    const prompt = question?.prompt ?? task?.promptText ?? ''
    const solution = question ? question.answer : task?.solutionText ?? ''
    const answerExplanation = question
      ? maturaAnswerExplanationById[question.id]?.shortExplanation
      : undefined
    const gradingNotes = question ? question.gradingNotes : task?.solutionText ?? ''
    const canAutoCheck = question ? isMultipleChoice(question) : false
    const needsSelfCheck = !canAutoCheck
    const hasSelection = selectedOptions.length > 0
    const canSubmit = canAutoCheck ? hasSelection : textAnswer.trim().length > 0 || !submitted
    const questionPanelClass = currentAttempt
      ? `question-panel question-panel--${currentAttempt.status}`
      : 'question-panel'
    return (
      <main className="app-shell">
        <section className="session-layout">
          <aside className="session-sidebar">
            <button className="ghost-button" type="button" onClick={leaveSession}>
              Domov
            </button>
            <div>
              <p className="eyebrow">{session.title}</p>
              <h1>{session.description}</h1>
            </div>
            <div className="progress-box">
              <span>
                {currentIndex + 1}/{session.items.length}
              </span>
              <div className="progress-track" aria-hidden="true">
                <div
                  style={{ width: `${((currentIndex + 1) / session.items.length) * 100}%` }}
                />
              </div>
            </div>
            <div className="score-mini">
              <strong>
                {earnedPoints}/{totalPoints}
              </strong>
              <span>trenutni rezultat</span>
            </div>
          </aside>

          <article className={questionPanelClass}>
            <div className="meta-row">
              {question ? (
                <>
                  <MetaPill>{question.examCode}</MetaPill>
                  <MetaPill>{`1. del, naloga ${question.questionNumber}`}</MetaPill>
                  <MetaPill>{categoryLabel(question.category)}</MetaPill>
                  <MetaPill>{`${question.points} t`}</MetaPill>
                  <MetaPill>{question.difficulty}</MetaPill>
                </>
              ) : null}
              {task ? (
                <>
                  <MetaPill>{task.examCode}</MetaPill>
                  <MetaPill>{`2. del, naloga ${task.taskNumber}`}</MetaPill>
                  <MetaPill>{categoryLabel(task.category)}</MetaPill>
                  <MetaPill>{`${task.points} t`}</MetaPill>
                  <MetaPill>{task.difficulty}</MetaPill>
                </>
              ) : null}
            </div>

            {question?.needsVisualContext ? (
              <div className="warning">
                Naloga ima sliko/kodo/shematiko v originalni poli. Vir: {sourceLabel(question.source)}.
              </div>
            ) : null}

            {task ? (
              <div className="warning">
                Strukturirana naloga lahko potrebuje sliko, diagram ali tabelo iz originalne pole.
                Vir: {sourceLabel(task.source)}.
              </div>
            ) : null}

            <div className="question-heading">
              <span>
                {question
                  ? `Vprašanje ${question.questionNumber}`
                  : task
                    ? `Strukturirana naloga ${task.taskNumber}`
                    : `Naloga ${currentIndex + 1}`}
              </span>
              <h2>{question ? categoryLabel(question.category) : task ? categoryLabel(task.category) : session.title}</h2>
            </div>

            <pre className="prompt-text">{formatBlock(prompt)}</pre>

            {question && canAutoCheck ? (
              <div className="options-list">
                {question.options.map((option) => {
                  const selected = selectedOptions.includes(option.id)
                  const isCorrect = submitted && question.correctOptions.includes(option.id)
                  const isWrongSelection = submitted && selected && !isCorrect
                  const className = [
                    'option-button',
                    selected ? 'selected' : '',
                    isCorrect ? 'correct' : '',
                    isWrongSelection ? 'wrong' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')

                  return (
                    <button
                      className={className}
                      key={option.id}
                      type="button"
                      disabled={submitted}
                      onClick={() => {
                        if (isMultiChoice(question)) {
                          setSelectedOptions((current) =>
                            current.includes(option.id)
                              ? current.filter((id) => id !== option.id)
                              : [...current, option.id],
                          )
                        } else {
                          setSelectedOptions([option.id])
                        }
                      }}
                    >
                      <span>{option.id}</span>
                      <strong>{option.text}</strong>
                    </button>
                  )
                })}
              </div>
            ) : (
              <label className="answer-field">
                Tvoj odgovor
                <textarea
                  value={textAnswer}
                  disabled={submitted}
                  placeholder="Vpiši rešitev, postopek ali kodo."
                  onChange={(event) => setTextAnswer(event.target.value)}
                />
              </label>
            )}

            <div className="action-row">
              {!submitted ? (
                <button
                  className="primary-button"
                  type="button"
                  disabled={!canSubmit}
                  onClick={submitAnswer}
                >
                  Oddaj odgovor
                </button>
              ) : (
                <button className="primary-button" type="button" onClick={goNext}>
                  {currentIndex >= session.items.length - 1 ? 'Zaključi' : 'Naslednja naloga'}
                </button>
              )}
            </div>

            {submitted ? (
              <section className="solution-panel">
                {currentAttempt ? (
                  <div className={`result-banner ${currentAttempt.status}`}>
                    {currentAttempt.status === 'correct'
                      ? 'Pravilno.'
                      : currentAttempt.status === 'incorrect'
                        ? 'Ni pravilno.'
                        : currentAttempt.status === 'known'
                          ? 'Označeno kot znam.'
                          : 'Označeno kot ne znam.'}
                  </div>
                ) : null}

                <h2>Pravilna rešitev</h2>
                <pre>{formatBlock(solution)}</pre>

                {answerExplanation ? (
                  <>
                    <h2>Kratka razlaga</h2>
                    <pre>{formatBlock(answerExplanation)}</pre>
                  </>
                ) : null}

                <h2>Navodila za ocenjevanje</h2>
                <pre>{formatBlock(gradingNotes)}</pre>

                {needsSelfCheck ? (
                  <div className="action-row">
                    <button className="secondary-button" type="button" onClick={() => markSelfCheck(true)}>
                      Označi kot znam
                    </button>
                    <button className="danger-button" type="button" onClick={() => markSelfCheck(false)}>
                      Označi kot ne znam
                    </button>
                  </div>
                ) : null}
              </section>
            ) : null}
          </article>
        </section>
      </main>
    )
  }

  return (
    <main className="app-shell">
      <section className="home-hero">
        <div>
          <p className="eyebrow">Kviz za poklicno maturo</p>
          <h1>Matura računalništvo</h1>
          <p className="lead">
            Treniraj vprašanja, računske naloge in strukturirane naloge iz preteklih matur.
          </p>
        </div>
        <div className="status-card">
          <span>{wrongIds.length}</span>
          <small>nalog v ponavljanju napak</small>
          {validationIssues.length > 0 ? (
            <p>Validacija podatkov je našla {validationIssues.length} opozoril.</p>
          ) : (
            <p>Podatkovna validacija ni našla kritičnih napak.</p>
          )}
        </div>
      </section>

      <section className="mode-grid" aria-label="Načini">
        <ModeCard
          detail="Izbirna vprašanja, takojšen rezultat."
          stat={`${maturaShortQuestions.filter(isMultipleChoice).length} vprašanj`}
          title="Hitri kviz"
          onClick={startQuickQuiz}
        />
        <ModeCard
          detail="Filtriranje po maturitetnih temah."
          stat={`${topicCategories.length} tem`}
          title="Vaja po temah"
          onClick={() => setScreen('topics')}
        />
        <ModeCard
          detail="Shranjeno lokalno v tem brskalniku."
          stat={`${wrongIds.length} za ponovitev`}
          title="Napačni odgovori"
          onClick={startWrongPractice}
        />
        <ModeCard
          detail="Drugi del, samopreverjanje."
          stat={`${structuredTasks.length} nalog`}
          title="Strukturirane naloge"
          onClick={() => setScreen('structured')}
        />
        <ModeCard
          detail="Pretvorbe, enote in računanje."
          stat={`${
            maturaShortQuestions.filter(
              (question) =>
                question.mode === 'racunska_naloga' ||
                question.category === 'pretvorbe_enote_racunanje',
            ).length
          } nalog`}
          title="Računske naloge"
          onClick={startCalculationPractice}
        />
      </section>

      <section className="stats-panel">
        <div>
          <p className="eyebrow">Statistika po kategorijah</p>
          <h2>Pokritost paketa</h2>
        </div>
        <div className="stats-grid">
          {categoryStats.map((stat) => (
            <article className="stat-row" key={stat.category}>
              <strong>{categoryLabel(stat.category)}</strong>
              <span>{stat.shortCount} kratkih</span>
              <span>{stat.structuredCount} strukturiranih</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
