import { combineReducers } from 'redux'
import cards from './cards'
import decks from './decks'

const reducer = combineReducers({ cards, decks })

export default reducer
