import axios from 'axios'
import qs from 'qs'

import { CHECK_AUTH, LOGIN_USER, REGISTRATION_USER } from './types'
import gC from '../../constants'

/* CHECK AUTH */
export const checkAuth = () => {
  return dispatch => {
    const token = localStorage.getItem('token')

    return axios({
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        token: token ? token : ''
      },
      url: `${gC.API_URL}/checkauth`
    })
      .then(response => {
        dispatch(createCheckAuthSuccess(response.data))
      })
      .catch(error => {
        console.log('CHECK_AUTH error', error)
      })
  }
}

export const createCheckAuthSuccess = data => {
  return {
    type: CHECK_AUTH,
    payload: {
      isAuth: data.isAuth,
      success: data.success,
      balance: data.balance,
      userId: data.user_id,
      email: data.email,
      gotNewBonusEvent: data.got_new_bonus_event
    }
  }
}
/* ********** */

/* LOGIN USER */
export const loginUser = data => {
  return dispatch => {
    return axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data),
      url: `${gC.API_URL}/auth`
    })
      .then(response => {
        dispatch(createLoginUserSuccess(response.data))

        return response.data
      })
      .catch(error => {
        console.log('LOGIN_USER error', error)
      })
  }
}

export const createLoginUserSuccess = data => {
  return {
    type: LOGIN_USER,
    payload: {
      isAuth: data.isAuth,
      sessionId: data.session_id,
      success: data.success,
      token: data.token,
      address: data.address,
      balance: data.balance,
      userId: data.user_id
    }
  }
}
/* ********** */

/* REGISTRATION */
export const registrationEmail = data => {
  return dispatch => {
    return axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data),
      url: `${gC.API_URL}/regemail`
    })
      .then(response => {
        dispatch(createRegistrationEmailSuccess(response.data))

        return response.data
      })
      .catch(error => {
        console.log('REGISTRATION_EMAIL error', error)
      })
  }
}

export const createRegistrationEmailSuccess = data => {
  return {
    type: REGISTRATION_USER,
    payload: {
      success: data.success
    }
  }
}
/* ********** */
