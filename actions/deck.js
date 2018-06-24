import v4 from 'uuid'
import moment from 'moment'
import { ADD_NEW_DECK, TAKE_QUIZ } from './actionTypes'

export const createNewDeck = ({ deckName }) => ({
  type: ADD_NEW_DECK,
  payload: {
    deckId: v4(),
    deckName,
    cardsList: [],
    lastStudied: null,
  },
})

export const attendQuiz = deckId => ({
  type: TAKE_QUIZ,
  payload: {
    deckId,
    lastStudied: moment(),
  },
})
