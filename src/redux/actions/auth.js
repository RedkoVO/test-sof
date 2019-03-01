import axios from 'axios'
import qs from 'qs'

import {
  CHECK_AUTH,
  LOGIN_USER,
  REGISTRATION_USER,
  CONFIRM_REGISTRATION,
  LOGOUT
} from './types'
import gC from '../../constants'

/* CHECK AUTH */
export const checkAuth = () => dispatch => {
  const token = localStorage.getItem('token')

  return axios({
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      token: token ? token : ''
    },
    url: `${gC.API_URL}/req/checkauth`
  })
    .then(response => {
      dispatch(createCheckAuthSuccess(response.data))

      return response.data
    })
    .catch(error => {
      console.log('CHECK_AUTH error', error)
    })
}

export const createCheckAuthSuccess = data => {
  return {
    type: CHECK_AUTH,
    payload: {
      isAuth: data.isAuth,
      success: data.success,
      userId: data.user_id,
      email: data.email
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
      url: `${gC.API_URL}/req/auth`
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
      url: `${gC.API_URL}/req/regemail`
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

/* CONFIRM REGISTRATION */
export const confirmRegistration = data => {
  return dispatch => {
    return axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data),
      url: `${gC.API_URL}/req/confirm_email`
    })
      .then(response => {
        dispatch(createConfirmRegistrationSuccess(response.data))

        return response.data
      })
      .catch(error => {
        console.log('CONFIRM_REGISTRATION error', error)
      })
  }
}

export const createConfirmRegistrationSuccess = data => {
  return {
    type: CONFIRM_REGISTRATION,
    payload: {
      success: data.success
    }
  }
}
/* ********** */

/* LOGOUT */
export const logout = () => dispatch =>
  axios({
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: `${gC.API_URL}/req/logout`
  })
    .then(response => {
      dispatch(createLogoutSuccess(response.data))

      return response.data
    })
    .catch(error => {
      console.log('LOGOUT error', error)
    })

export const createLogoutSuccess = data => {
  return {
    type: LOGOUT,
    payload: {
      success: data.success
    }
  }
}
/* ********** */
