import { combineReducers } from 'redux'

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'DO_SOMETHING':
    default:
      return state
  }
}
const allIds = (state = ['foo', 'bar'], action) => {
  switch (action.type) {
    case 'DO_SOMETHING':
    default:
      return state
  }
}

const decks = combineReducers({ allIds, byId })

export default decks
