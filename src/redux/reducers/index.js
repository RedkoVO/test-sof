import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import auth from './auth'
import payment from './payment'

const appReducer = combineReducers({
  form,
  auth,
  payment
})

export default (state, action) => appReducer(state, action)
