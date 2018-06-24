import { RESET_SCORE, ANSWER_QUESTION_WRONG, ANSWER_QUESTION_CORRECT } from '../actions/actionTypes'

const noOfCorrectAnswers = (state = 0, action) => {
  switch (action.type) {
    case ANSWER_QUESTION_CORRECT:
      return state + 1
    case ANSWER_QUESTION_WRONG:
      return state
    case RESET_SCORE:
      return 0
    default:
      return state
  }
}
export default noOfCorrectAnswers
