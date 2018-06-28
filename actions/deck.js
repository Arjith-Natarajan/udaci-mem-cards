import moment from 'moment'
import { ADD_NEW_DECK, TAKE_QUIZ } from './actionTypes'

export const createNewDeck = ({ deckId, deckName }) => ({
  type: ADD_NEW_DECK,
  payload: {
    deckId,
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
