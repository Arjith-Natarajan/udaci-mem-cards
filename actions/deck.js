import v4 from 'uuid'
import { ADD_NEW_DECK } from './actionTypes'

export const createNewDeck = ({ deckName }) => ({
  type: ADD_NEW_DECK,
  payload: {
    deckId: v4(),
    deckName,
    cardsList: [],
    lastStudied: null,
  },
})
