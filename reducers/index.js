import { combineReducers } from 'redux'
import cards from './cards'
import decks from './decks'
import noOfCorrectAnswers from './noOfCorrectAnswers'

const reducer = combineReducers({ cards, decks, noOfCorrectAnswers })

export default reducer
