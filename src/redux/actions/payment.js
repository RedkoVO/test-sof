import axios from 'axios'
import qs from 'qs'

import { POST_PAYMENT } from './types'
import gC from '../../constants'

/* POST_PAYMENT */
export const postPayment = data => {
  return dispatch => {
    return axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data),
      url: `${gC.API_URL}/req/payment_url`
    })
      .then(response => {
        dispatch(createPostPaymentSuccess(response.data))

        return response.data
      })
      .catch(error => {
        console.log('POST_PAYMENT error', error)
      })
  }
}

export const createPostPaymentSuccess = data => {
  return {
    type: POST_PAYMENT,
    payload: {
      iframeUrl: data.iframe_url,
      success: data.success
    }
  }
}
/* ********** */
