import { combineReducers } from 'redux'
import cards from './cards'
import decks from './decks'
import scorePercent from './scorePercent'

const reducer = combineReducers({ cards, decks, scorePercent })

export default reducer
