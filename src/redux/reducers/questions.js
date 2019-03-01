import { GET_QUESTIONS } from '../actions/types'

const payment = (state = {}, action) => {
  const { payload, type } = action

  switch (type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: {
          answersList: payload.answersList,
          success: payload.success
        }
      }
    default:
      return state
  }
}

export default payment
