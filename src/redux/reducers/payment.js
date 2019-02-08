import { POST_PAYMENT } from '../actions/types'

const payment = (state = {}, action) => {
  const { payload, type } = action

  switch (type) {
    case POST_PAYMENT:
      return {
        ...state,
        checkAuth: {
          iframeUrl: payload.iframe_url,
          success: payload.success
        }
      }
    default:
      return state
  }
}

export default payment
