import v4 from 'uuid'
import {
  RESET_SCORE,
  ADD_NEW_CARD,
  ANSWER_QUESTION_WRONG,
  ANSWER_QUESTION_CORRECT,
} from './actionTypes'

export const createNewCard = ({ question, answer, deckId }) => ({
  type: ADD_NEW_CARD,
  payload: {
    questionId: v4(),
    deckId,
    question,
    answer,
  },
})

export const answerCorrectly = () => ({
  type: ANSWER_QUESTION_CORRECT,
})
export const answerWrongly = () => ({
  type: ANSWER_QUESTION_WRONG,
})
export const resetScore = () => ({
  type : RESET_SCORE
})
