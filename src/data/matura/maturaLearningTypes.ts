export type LearningFormula = {
  label: string
  formula: string
  example?: string
}

export type LearningExample = {
  question: string
  solution: string
  answer: string
}

export type LearningMiniQuizItem = {
  question: string
  answer: string
}

export type SubnetTableRow = {
  prefix: string
  mask: string
  total: number
  usable: number
  blockSize: number
}

export type LearningLesson = {
  id: string
  title: string
  summary: string
  keyPoints: string[]
  formulas: LearningFormula[]
  examples: LearningExample[]
  miniQuiz: LearningMiniQuizItem[]
  subnetTable?: SubnetTableRow[]
}

export type LearningSection = {
  id: string
  title: string
  shortTitle: string
  icon?: string
  color?: string
  description: string
  examImportance: string
  lessons: LearningLesson[]
}

export type LearningContent = {
  version: string
  generatedFor: string
  sections: LearningSection[]
}
