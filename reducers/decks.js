import { combineReducers } from 'redux'
import { ADD_NEW_DECK, ADD_NEW_CARD, TAKE_QUIZ } from '../actions/actionTypes'

const byId = (state = { some: 'state' }, action) => {
  switch (action.type) {
    case ADD_NEW_DECK:
      return {
        ...state,
        [action.payload.deckId]: action.payload,
      }
    case ADD_NEW_CARD:
      return {
        ...state,
        [action.payload.deckId]: {
          ...state[action.payload.deckId],
          cardsList: [...state[action.payload.deckId].cardsList, action.payload.questionId],
        },
      }
    case TAKE_QUIZ:
      return {
        ...state,
        [action.payload.deckId]: {
          ...state[action.payload.deckId],
          lastStudied: action.payload.lastStudied,
        },
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
export const getDeckById = (state, id) => state.byId[id]
