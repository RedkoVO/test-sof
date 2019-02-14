import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import auth from './auth'
import payment from './payment'
import profile from './profile'

const appReducer = combineReducers({
  form,
  auth,
  payment,
  profile
})

export default (state, action) => appReducer(state, action)
