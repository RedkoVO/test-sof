import { GET_PRODUCTS, GET_PRODUCT_INFO } from '../actions/types'

const payment = (state = {}, action) => {
  const { payload, type } = action

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: {
          questions: payload.questions,
          success: payload.success
        }
      }
    case GET_PRODUCT_INFO:
      return {
        ...state,
        productInfo: {
          questions: payload.success,
          success: payload.success
        }
      }
    default:
      return state
  }
}

export default payment
