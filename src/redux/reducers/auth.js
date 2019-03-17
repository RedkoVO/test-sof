import {
  CHECK_AUTH,
  LOGIN_USER,
  REGISTRATION_USER,
  LOGOUT
} from '../actions/types'

const auth = (state = {}, action) => {
  const { payload, type } = action

  switch (type) {
    case CHECK_AUTH:
      return {
        ...state,
        checkAuth: {
          isAuth: payload.isAuth,
          isAdmin: payload.isAdmin,
          success: payload.success,
          userId: payload.userId,
          email: payload.email,
          balance: payload.balance,
          userType: payload.userType
        }
      }
    case LOGIN_USER:
      /* TODO: set token to localstorage */
      if (payload.token) {
        localStorage.setItem('token', payload.token)
      }

      return {
        ...state,
        loginUser: {
          isAuth: payload.isAuth,
          sessionId: payload.sessionId,
          success: payload.success,
          token: payload.token,
          address: payload.address,
          balance: payload.balance,
          userId: payload.userId
        }
      }
    case REGISTRATION_USER:
      return {
        ...state,
        registrationEmail: {
          success: payload.success
        }
      }
    case LOGOUT:
      return {
        ...state,
        logout: {
          success: payload.success
        }
      }
    default:
      return state
  }
}

export default auth
