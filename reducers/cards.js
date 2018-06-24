import { combineReducers } from 'redux'
import { ADD_NEW_CARD } from '../actions/actionTypes'

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_CARD:
      return {
        ...state,
        [action.payload.questionId]: action.payload,
      }
    case 'DO_SOMETHING':
    default:
      return state
  }
}
const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_CARD:
      return [...state, action.payload.questionId]
    case 'DO_SOMETHING':
    default:
      return state
  }
}

const cards = combineReducers({ allIds, byId })

export default cards
