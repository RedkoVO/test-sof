import axios from 'axios'
import qs from 'qs'

import { GET_PRODUCTS, GET_PRODUCT_INFO } from './types'
import gC from '../../constants'

/* GET_PRODUCT */
export const getProducts = () => dispatch =>
  axios({
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: `${gC.API_URL}/req/get_products`
  })
    .then(response => {
      dispatch(createCheckAuthSuccess(response.data))
    })
    .catch(error => {
      console.log('GET_PRODUCTS error', error)
    })

export const createCheckAuthSuccess = data => {
  return {
    type: GET_PRODUCTS,
    payload: {
      questions: data.questions,
      success: data.success
    }
  }
}
/* ********** */

/* GET PRODUCT INFO */
export const getProductInfo = data => dispatch =>
  axios({
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data),
    url: `${gC.API_URL}/req/get_product_info`
  })
    .then(response => {
      dispatch(createConfirmRegistrationSuccess(response.data))

      return response.data
    })
    .catch(error => {
      console.log('GET_PRODUCT_INFO error', error)
    })

export const createConfirmRegistrationSuccess = data => {
  return {
    type: GET_PRODUCT_INFO,
    payload: {
      questions: data.success,
      success: data.success
    }
  }
}
/* ********** */
