import { combineReducers } from 'redux'
import { ADD_NEW_DECK } from '../actions/actionTypes'

const byId = (state = { some: 'state' }, action) => {
  switch (action.type) {
    case ADD_NEW_DECK:
      return {
        ...state,
        [action.payload.deckId]: action.payload,
      }
    case 'DO_SOMETHING':
    default:
      return state
  }
}
const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_DECK:
      return [...state, action.payload.deckId]
    case 'DO_SOMETHING':
    default:
      return state
  }
}

const decks = combineReducers({ allIds, byId })

export default decks

// Selectors
export const getDecksList = state => state.allIds.map(id => state.byId[id])
