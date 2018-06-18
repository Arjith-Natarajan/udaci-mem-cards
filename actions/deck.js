import v4 from 'uuid'
// import { ADD_NEW_DECK_SUCCESS } from './actionTypes'

export const createNewDeck = deckName => ({
  deckId: v4(),
  deckName,
  cardsList: [],
  lastStudied: null,
})
