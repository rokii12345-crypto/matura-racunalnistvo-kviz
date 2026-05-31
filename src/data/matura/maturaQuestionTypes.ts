export type MaturaQuestionType =
  | 'multiple_choice_single'
  | 'multiple_choice_multi'
  | 'short_answer'
  | 'calculation'
  | 'sql_open'
  | 'html_css_open'
  | 'code_open'

export type MaturaMode =
  | 'kviz'
  | 'kratki_odgovor'
  | 'racunska_naloga'
  | 'sql_vaja'
  | 'html_css_vaja'
  | 'programiranje_vaja'
  | 'strukturirana_vaja'

export type MaturaSourceRef = {
  examPdf: string
  solutionsPdf: string
  page?: number
  pageHint?: string
}

export type MaturaShortQuestion = {
  id: string
  examId: string
  examCode: string
  part: 1
  questionNumber: number
  source: MaturaSourceRef
  points: number
  type: MaturaQuestionType
  mode: MaturaMode
  category: string
  difficulty: 'osnovno' | 'srednje' | 'zahtevno'
  needsVisualContext: boolean
  prompt: string
  options: { id: string; text: string }[]
  correctOptions: string[]
  answer: string
  gradingNotes: string
  tags: string[]
}

export type MaturaStructuredTask = {
  id: string
  examId: string
  examCode: string
  part: 2
  taskNumber: number
  points: 12
  category: string
  mode: 'strukturirana_vaja'
  difficulty: 'zahtevno'
  source: MaturaSourceRef
  promptText: string
  solutionText: string
  implementationNote: string
}
