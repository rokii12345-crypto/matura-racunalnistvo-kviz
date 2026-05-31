import type { MaturaShortQuestion, MaturaStructuredTask } from './maturaQuestionTypes'

export type ValidationIssue = {
  id: string
  message: string
}

const isMultipleChoice = (type: MaturaShortQuestion['type']) =>
  type === 'multiple_choice_single' || type === 'multiple_choice_multi'

const hasSource = (source: MaturaShortQuestion['source']) =>
  Boolean(source.examPdf && source.solutionsPdf)

export function validateMaturaData(
  shortQuestions: MaturaShortQuestion[],
  structuredTasks: MaturaStructuredTask[],
) {
  const issues: ValidationIssue[] = []
  const ids = new Set<string>()

  for (const question of shortQuestions) {
    if (ids.has(question.id)) {
      issues.push({ id: question.id, message: 'Podvojen ID vprašanja.' })
    }
    ids.add(question.id)

    if (!question.prompt.trim()) {
      issues.push({ id: question.id, message: 'Manjka besedilo vprašanja.' })
    }
    if (!question.category || !question.mode || !question.points || !hasSource(question.source)) {
      issues.push({ id: question.id, message: 'Manjkajo obvezna metapodatkovna polja.' })
    }
    if (isMultipleChoice(question.type) && question.options.length < 2) {
      issues.push({ id: question.id, message: 'Izbirno vprašanje ima premalo možnosti.' })
    }
    if (isMultipleChoice(question.type) && question.correctOptions.length === 0) {
      issues.push({ id: question.id, message: 'Izbirno vprašanje nima pravilnega odgovora.' })
    }
  }

  for (const task of structuredTasks) {
    if (ids.has(task.id)) {
      issues.push({ id: task.id, message: 'Podvojen ID naloge.' })
    }
    ids.add(task.id)

    if (!task.promptText.trim()) {
      issues.push({ id: task.id, message: 'Manjka besedilo strukturirane naloge.' })
    }
    if (!task.solutionText.trim()) {
      issues.push({ id: task.id, message: 'Manjka rešitev strukturirane naloge.' })
    }
  }

  return issues
}
