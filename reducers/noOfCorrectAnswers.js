import { ANSWER_QUESTION_WRONG, ANSWER_QUESTION_CORRECT } from '../actions/actionTypes'

const noOfCorrectAnswers = (state = 0, action) => {
  switch (action.type) {
    case ANSWER_QUESTION_CORRECT:
      return state + 1
    case ANSWER_QUESTION_WRONG:
      return state
    case 'DO_SOMETHING':
    default:
      return state
  }
}
export default noOfCorrectAnswers
