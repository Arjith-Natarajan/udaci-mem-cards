import v4 from 'uuid'
import { ADD_NEW_CARD } from './actionTypes'

export const createNewCard = ({ question, answer }) => ({
  type: ADD_NEW_CARD,
  payload: {
    questionId: v4(),
    deckId: 'd1',
    question,
    answer,
  },
})
