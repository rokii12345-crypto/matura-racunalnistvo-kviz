import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { AUTH_STORAGE_KEY, demoUsers, getUserProgressKey } from './data/matura/demoUsers'
import { maturaAnswerExplanationById } from './data/matura/maturaAnswerExplanations'
import { maturaLearningContent } from './data/matura/maturaLearningContent'
import { maturaShortQuestions } from './data/matura/maturaShortQuestions'
import structuredTasksJson from './data/matura/matura_structured_tasks_raw.json'
import type { DemoUser } from './data/matura/demoUsers'
import type {
  LearningLesson,
  LearningSection,
  SubnetTableRow,
} from './data/matura/maturaLearningTypes'
import type { MaturaShortQuestion, MaturaStructuredTask } from './data/matura/maturaQuestionTypes'
import { validateMaturaData } from './data/matura/validateMaturaData'

type AppScreen = 'home' | 'topics' | 'structured' | 'session' | 'learning' | 'profile'
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
type QuizHistoryItem = {
  id: string
  mode: string
  date: string
  total: number
  correct: number
  percent: number
}
type UserProgress = {
  username: string
  wrongQuestionIds: string[]
  answeredQuestionIds: string[]
  correctQuestionIds: string[]
  quizHistory: QuizHistoryItem[]
  completedLearningLessonIds: string[]
  lastLearningSectionId?: string
  lastLearningLessonId?: string
}

const structuredTasks = structuredTasksJson as MaturaStructuredTask[]

const LEGACY_WRONG_STORAGE_KEY = 'matura-racunalnistvo-kviz-wrong-v1'
const MAX_HISTORY_ITEMS = 25

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

const firstLearningSection = maturaLearningContent.sections[0]
const firstLearningLesson = firstLearningSection?.lessons[0]

function stringArray(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : []
}

function isQuizHistoryItem(value: unknown): value is QuizHistoryItem {
  if (!value || typeof value !== 'object') {
    return false
  }

  const item = value as Record<string, unknown>
  return (
    typeof item.id === 'string' &&
    typeof item.mode === 'string' &&
    typeof item.date === 'string' &&
    typeof item.total === 'number' &&
    typeof item.correct === 'number' &&
    typeof item.percent === 'number'
  )
}

function quizHistoryArray(value: unknown) {
  return Array.isArray(value) ? value.filter(isQuizHistoryItem) : []
}

function loadLegacyWrongIds() {
  try {
    const raw = window.localStorage.getItem(LEGACY_WRONG_STORAGE_KEY)
    if (!raw) {
      return []
    }

    const parsed = JSON.parse(raw)
    return stringArray(parsed)
  } catch {
    return []
  }
}

function createDefaultProgress(username: string): UserProgress {
  return {
    username,
    wrongQuestionIds: [],
    answeredQuestionIds: [],
    correctQuestionIds: [],
    quizHistory: [],
    completedLearningLessonIds: [],
  }
}

function loadUserProgress(username: string): UserProgress {
  const base = createDefaultProgress(username)

  try {
    const raw = window.localStorage.getItem(getUserProgressKey(username))
    if (!raw) {
      return {
        ...base,
        wrongQuestionIds: loadLegacyWrongIds(),
      }
    }

    const parsed = JSON.parse(raw) as Partial<UserProgress>
    return {
      ...base,
      wrongQuestionIds: stringArray(parsed.wrongQuestionIds),
      answeredQuestionIds: stringArray(parsed.answeredQuestionIds),
      correctQuestionIds: stringArray(parsed.correctQuestionIds),
      quizHistory: quizHistoryArray(parsed.quizHistory).slice(0, MAX_HISTORY_ITEMS),
      completedLearningLessonIds: stringArray(parsed.completedLearningLessonIds),
      lastLearningSectionId:
        typeof parsed.lastLearningSectionId === 'string' ? parsed.lastLearningSectionId : undefined,
      lastLearningLessonId:
        typeof parsed.lastLearningLessonId === 'string' ? parsed.lastLearningLessonId : undefined,
    }
  } catch {
    return base
  }
}

function addUnique(items: string[], item: string) {
  return items.includes(item) ? items : [...items, item]
}

function removeValue(items: string[], item: string) {
  return items.filter((current) => current !== item)
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

function allLearningLessons() {
  return maturaLearningContent.sections.flatMap((section) => section.lessons)
}

function findLearningSection(sectionId: string) {
  return maturaLearningContent.sections.find((section) => section.id === sectionId) ?? firstLearningSection
}

function findLearningLesson(section: LearningSection | undefined, lessonId: string) {
  return section?.lessons.find((lesson) => lesson.id === lessonId) ?? section?.lessons[0]
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

function AppNav({
  user,
  onHome,
  onLearning,
  onWrongPractice,
  onStructured,
  onProfile,
  onLogout,
}: {
  user: DemoUser
  onHome: () => void
  onLearning: () => void
  onWrongPractice: () => void
  onStructured: () => void
  onProfile: () => void
  onLogout: () => void
}) {
  return (
    <header className="top-nav">
      <button className="brand-button" type="button" onClick={onHome}>
        Matura računalništvo
      </button>
      <nav aria-label="Glavna navigacija">
        <button type="button" onClick={onHome}>
          Kviz
        </button>
        <button type="button" onClick={onLearning}>
          Učenje
        </button>
        <button type="button" onClick={onWrongPractice}>
          Napačni odgovori
        </button>
        <button type="button" onClick={onStructured}>
          Strukturirane naloge
        </button>
        <button type="button" onClick={onProfile}>
          Profil
        </button>
      </nav>
      <div className="user-cluster">
        <span>{user.displayName}</span>
        <button className="ghost-button" type="button" onClick={onLogout}>
          Odjava
        </button>
      </div>
    </header>
  )
}

function LoginScreen({
  onLogin,
}: {
  onLogin: (username: string, password: string) => boolean
}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')

  return (
    <main className="app-shell login-shell">
      <section className="login-panel">
        <div>
          <p className="eyebrow">Lokalna prijava</p>
          <h1>Matura računalništvo</h1>
          <p className="lead">
            Prijavi se z demo uporabnikom, da se napredek, napačni odgovori in predelane lekcije
            shranjujejo ločeno v tem brskalniku.
          </p>
        </div>

        <form
          className="login-form"
          onSubmit={(event) => {
            event.preventDefault()
            const ok = onLogin(username.trim(), password)
            setLoginError(ok ? '' : 'Uporabniško ime ali geslo ni pravilno.')
          }}
        >
          <label>
            Uporabniško ime
            <input
              autoComplete="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label>
            Geslo
            <input
              autoComplete="current-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          {loginError ? <p className="form-error">{loginError}</p> : null}
          <button className="primary-button" type="submit">
            Prijava
          </button>
        </form>

        <div className="demo-users">
          <strong>Demo uporabniki</strong>
          <span>rok / rok</span>
          <span>pyell / pyell</span>
          <span>uporabnik1 / uporabnik1</span>
        </div>

        <p className="login-note">
          To je lokalna učna prijava za shranjevanje napredka v tem brskalniku.
        </p>
      </section>
    </main>
  )
}

function LearningList({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) {
    return null
  }

  return (
    <section className="learning-block">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

function FormulaGrid({ formulas }: { formulas: LearningLesson['formulas'] }) {
  if (formulas.length === 0) {
    return null
  }

  return (
    <section className="learning-block">
      <h3>Formule</h3>
      <div className="formula-grid">
        {formulas.map((formula) => (
          <article className="formula-card" key={`${formula.label}-${formula.formula}`}>
            <strong>{formula.label}</strong>
            <code>{formula.formula}</code>
            {formula.example ? <span>{formula.example}</span> : null}
          </article>
        ))}
      </div>
    </section>
  )
}

function ExampleGrid({ examples }: { examples: LearningLesson['examples'] }) {
  if (examples.length === 0) {
    return null
  }

  return (
    <section className="learning-block">
      <h3>Primeri nalog</h3>
      <div className="example-grid">
        {examples.map((example) => (
          <article className="example-card" key={example.question}>
            <strong>{example.question}</strong>
            <p>{example.solution}</p>
            <span>Odgovor: {example.answer}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function MiniQuiz({ miniQuiz }: { miniQuiz: LearningLesson['miniQuiz'] }) {
  if (miniQuiz.length === 0) {
    return null
  }

  return (
    <section className="learning-block">
      <h3>Mini preverjanje</h3>
      <div className="mini-quiz-list">
        {miniQuiz.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function SubnetTable({ rows }: { rows?: SubnetTableRow[] }) {
  if (!rows || rows.length === 0) {
    return null
  }

  return (
    <section className="learning-block">
      <h3>Subnet tabela</h3>
      <div className="subnet-table">
        <div className="subnet-row subnet-head">
          <span>Prefix</span>
          <span>Maska</span>
          <span>Skupaj</span>
          <span>Uporabnih</span>
          <span>Blok</span>
        </div>
        {rows.map((row) => (
          <div className="subnet-row" key={row.prefix}>
            <span>{row.prefix}</span>
            <span>{row.mask}</span>
            <span>{row.total}</span>
            <span>{row.usable}</span>
            <span>{row.blockSize}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function App() {
  const [currentUsername, setCurrentUsername] = useState(
    () => window.localStorage.getItem(AUTH_STORAGE_KEY) ?? '',
  )
  const currentUser = useMemo(
    () => demoUsers.find((user) => user.username === currentUsername) ?? null,
    [currentUsername],
  )
  const [progress, setProgress] = useState<UserProgress>(() =>
    currentUsername ? loadUserProgress(currentUsername) : createDefaultProgress(''),
  )
  const [screen, setScreen] = useState<AppScreen>('home')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStructuredCategory, setSelectedStructuredCategory] = useState('all')
  const [selectedLearningSectionId, setSelectedLearningSectionId] = useState(
    firstLearningSection?.id ?? '',
  )
  const [selectedLearningLessonId, setSelectedLearningLessonId] = useState(
    firstLearningLesson?.id ?? '',
  )
  const [session, setSession] = useState<Session | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [textAnswer, setTextAnswer] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [finished, setFinished] = useState(false)
  const [attempts, setAttempts] = useState<Record<string, Attempt>>({})

  const wrongIds = progress.wrongQuestionIds
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
  const totalLearningLessonCount = allLearningLessons().length
  const learningSection = findLearningSection(selectedLearningSectionId)
  const learningLesson = findLearningLesson(learningSection, selectedLearningLessonId)
  const learningPercent =
    totalLearningLessonCount > 0
      ? Math.round((progress.completedLearningLessonIds.length / totalLearningLessonCount) * 100)
      : 0
  const currentAttempt = session?.items[currentIndex]
    ? attempts[itemId(session.items[currentIndex])]
    : undefined

  useEffect(() => {
    if (!currentUsername || progress.username !== currentUsername) {
      return
    }

    window.localStorage.setItem(getUserProgressKey(currentUsername), JSON.stringify(progress))
  }, [currentUsername, progress])

  const updateProgress = (updater: (current: UserProgress) => UserProgress) => {
    setProgress((current) => updater(current))
  }

  const handleLogin = (username: string, password: string) => {
    const user = demoUsers.find(
      (demoUser) => demoUser.username === username && demoUser.password === password,
    )
    if (!user) {
      return false
    }

    window.localStorage.setItem(AUTH_STORAGE_KEY, user.username)
    setProgress(loadUserProgress(user.username))
    setCurrentUsername(user.username)
    setScreen('home')
    return true
  }

  const handleLogout = () => {
    window.localStorage.removeItem(AUTH_STORAGE_KEY)
    setProgress(createDefaultProgress(''))
    setCurrentUsername('')
    setSession(null)
    setScreen('home')
    setFinished(false)
    setSubmitted(false)
  }

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

  const updateAnswerProgress = (id: string, correct: boolean) => {
    updateProgress((current) => ({
      ...current,
      wrongQuestionIds: correct
        ? removeValue(current.wrongQuestionIds, id)
        : addUnique(current.wrongQuestionIds, id),
      answeredQuestionIds: addUnique(current.answeredQuestionIds, id),
      correctQuestionIds: correct
        ? addUnique(current.correctQuestionIds, id)
        : removeValue(current.correctQuestionIds, id),
    }))
  }

  const recordAttempt = (attempt: Attempt) => {
    setAttempts((current) => ({
      ...current,
      [attempt.itemId]: attempt,
    }))
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

  const selectLearningLesson = (sectionId: string, lessonId: string) => {
    setSelectedLearningSectionId(sectionId)
    setSelectedLearningLessonId(lessonId)
    updateProgress((current) => ({
      ...current,
      lastLearningSectionId: sectionId,
      lastLearningLessonId: lessonId,
    }))
  }

  const markLearningLessonComplete = () => {
    if (!learningSection || !learningLesson) {
      return
    }

    updateProgress((current) => ({
      ...current,
      completedLearningLessonIds: addUnique(current.completedLearningLessonIds, learningLesson.id),
      lastLearningSectionId: learningSection.id,
      lastLearningLessonId: learningLesson.id,
    }))
  }

  const finishSession = () => {
    if (!session) {
      return
    }

    const total = sessionTotal(session.items)
    const correct = session.items.reduce((sum, item) => sum + (attempts[itemId(item)]?.earned ?? 0), 0)
    const percent = total > 0 ? Math.round((correct / total) * 100) : 0

    updateProgress((current) => ({
      ...current,
      quizHistory: [
        {
          id: `${Date.now()}-${session.kind}`,
          mode: session.title,
          date: new Date().toISOString(),
          total,
          correct,
          percent,
        },
        ...current.quizHistory,
      ].slice(0, MAX_HISTORY_ITEMS),
    }))
    setFinished(true)
  }

  const submitAnswer = () => {
    const currentItem = session?.items[currentIndex] ?? null
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
      updateAnswerProgress(id, correct)
    }
  }

  const markSelfCheck = (known: boolean) => {
    const currentItem = session?.items[currentIndex] ?? null
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
    updateAnswerProgress(id, known)
  }

  const goNext = () => {
    if (!session) {
      return
    }

    if (currentIndex >= session.items.length - 1) {
      finishSession()
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

  const nav = currentUser ? (
    <AppNav
      user={currentUser}
      onHome={() => setScreen('home')}
      onLearning={() => setScreen('learning')}
      onWrongPractice={startWrongPractice}
      onStructured={() => setScreen('structured')}
      onProfile={() => setScreen('profile')}
      onLogout={handleLogout}
    />
  ) : null

  if (!currentUser) {
    return <LoginScreen onLogin={handleLogin} />
  }

  if (screen === 'topics') {
    return (
      <main className="app-shell">
        {nav}
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
        {nav}
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

  if (screen === 'learning') {
    return (
      <main className="app-shell">
        {nav}
        <section className="learning-shell">
          <div className="learning-intro">
            <p className="eyebrow">Učenje</p>
            <h1>Razlage za mirno utrjevanje snovi</h1>
            <p className="lead">
              Izberi temo in lekcijo. Predelane lekcije se shranijo posebej za uporabnika{' '}
              {currentUser.displayName}.
            </p>
            <div className="progress-box learning-progress">
              <span>{learningPercent}% predelano</span>
              <div className="progress-track" aria-hidden="true">
                <div style={{ width: `${learningPercent}%` }} />
              </div>
            </div>
          </div>

          <div className="learning-layout">
            <aside className="learning-sidebar">
              {maturaLearningContent.sections.map((section) => (
                <div className="learning-section-group" key={section.id}>
                  <button
                    className={
                      selectedLearningSectionId === section.id
                        ? 'learning-section-button active'
                        : 'learning-section-button'
                    }
                    type="button"
                    onClick={() => selectLearningLesson(section.id, section.lessons[0]?.id ?? '')}
                  >
                    <strong>{section.title}</strong>
                    <span>{section.examImportance}</span>
                  </button>
                  {selectedLearningSectionId === section.id ? (
                    <div className="lesson-list">
                      {section.lessons.map((lesson) => (
                        <button
                          className={
                            selectedLearningLessonId === lesson.id
                              ? 'lesson-button active'
                              : 'lesson-button'
                          }
                          key={lesson.id}
                          type="button"
                          onClick={() => selectLearningLesson(section.id, lesson.id)}
                        >
                          {progress.completedLearningLessonIds.includes(lesson.id) ? '✓ ' : ''}
                          {lesson.title}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </aside>

            {learningSection && learningLesson ? (
              <article className="learning-panel">
                <div className="meta-row">
                  <MetaPill>{learningSection.shortTitle}</MetaPill>
                  <MetaPill>{`${learningLesson.keyPoints.length} pojmov`}</MetaPill>
                  <MetaPill>{`${learningLesson.miniQuiz.length} mini vprašanj`}</MetaPill>
                  <MetaPill>
                    {progress.completedLearningLessonIds.includes(learningLesson.id)
                      ? 'Predelano'
                      : 'V teku'}
                  </MetaPill>
                </div>
                <h2>{learningLesson.title}</h2>
                <p className="lesson-summary">{learningLesson.summary}</p>

                <LearningList title="Ključni pojmi" items={learningLesson.keyPoints} />
                <FormulaGrid formulas={learningLesson.formulas} />
                <ExampleGrid examples={learningLesson.examples} />
                <SubnetTable rows={learningLesson.subnetTable} />
                <MiniQuiz miniQuiz={learningLesson.miniQuiz} />

                <button
                  className="primary-button"
                  type="button"
                  onClick={markLearningLessonComplete}
                >
                  Označi kot predelano
                </button>
              </article>
            ) : null}
          </div>
        </section>
      </main>
    )
  }

  if (screen === 'profile') {
    const lastQuiz = progress.quizHistory[0]

    return (
      <main className="app-shell">
        {nav}
        <section className="profile-panel">
          <div>
            <p className="eyebrow">Profil / Napredek</p>
            <h1>Živjo, {currentUser.displayName}</h1>
            <p className="lead">
              Napredek je shranjen lokalno v tem brskalniku in ločen po uporabniškem imenu.
            </p>
          </div>
          <div className="score-grid">
            <div>
              <span>{progress.answeredQuestionIds.length}</span>
              <small>rešenih nalog</small>
            </div>
            <div>
              <span>{progress.correctQuestionIds.length}</span>
              <small>pravilnih / znam</small>
            </div>
            <div>
              <span>{progress.wrongQuestionIds.length}</span>
              <small>napačnih / ne znam</small>
            </div>
            <div>
              <span>{progress.completedLearningLessonIds.length}</span>
              <small>predelanih lekcij</small>
            </div>
            <div>
              <span>{lastQuiz ? `${lastQuiz.percent}%` : '—'}</span>
              <small>zadnji rezultat</small>
            </div>
          </div>
          {lastQuiz ? (
            <article className="review-row">
              <strong>{lastQuiz.mode}</strong>
              <span>{`${lastQuiz.correct}/${lastQuiz.total} točk`}</span>
              <span>{new Date(lastQuiz.date).toLocaleDateString('sl-SI')}</span>
            </article>
          ) : (
            <p>Ko zaključiš kviz ali vajo, se bo zadnji rezultat prikazal tukaj.</p>
          )}
          <div className="action-row">
            <button className="primary-button" type="button" onClick={() => setScreen('learning')}>
              Nadaljuj učenje
            </button>
            <button className="secondary-button" type="button" onClick={startWrongPractice}>
              Ponavljaj napačne odgovore
            </button>
            <button className="ghost-button" type="button" onClick={handleLogout}>
              Odjava
            </button>
          </div>
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

    const item = session.items[currentIndex]
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
      {nav}
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
          <small>nalog v ponavljanju napak za {currentUser.displayName}</small>
          {validationIssues.length > 0 ? (
            <p>Validacija podatkov je našla {validationIssues.length} opozoril.</p>
          ) : (
            <p>Podatkovna validacija ni našla kritičnih napak.</p>
          )}
        </div>
      </section>

      <section className="mode-grid mode-grid-expanded" aria-label="Načini">
        <ModeCard
          detail="Izbirna vprašanja, takojšen rezultat."
          stat={`${maturaShortQuestions.filter(isMultipleChoice).length} vprašanj`}
          title="Hitri kviz"
          onClick={startQuickQuiz}
        />
        <ModeCard
          detail="Razlage, formule, primeri in mini preverjanje."
          stat={`${progress.completedLearningLessonIds.length}/${totalLearningLessonCount} lekcij`}
          title="Učenje"
          onClick={() => setScreen('learning')}
        />
        <ModeCard
          detail="Filtriranje po maturitetnih temah."
          stat={`${topicCategories.length} tem`}
          title="Vaja po temah"
          onClick={() => setScreen('topics')}
        />
        <ModeCard
          detail="Shranjeno lokalno za trenutnega uporabnika."
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
          detail="Pretvorbe, enote in računski postopki."
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
        <ModeCard
          detail="Pregled rešenih nalog, uspešnosti in predelanih lekcij."
          stat={`${progress.quizHistory.length} rezultatov`}
          title="Profil / Napredek"
          onClick={() => setScreen('profile')}
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
