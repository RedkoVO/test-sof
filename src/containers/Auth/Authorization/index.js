import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, pure } from 'recompose'
import { reduxForm } from 'redux-form'

import { loginUser } from '../../../redux/actions/auth'

import validate from './validate'

import Authorization from '../../../components/Auth/Authorization'

const FORM_NAME = 'authirization'

export default compose(
  connect(),
  reduxForm({
    form: FORM_NAME,
    validate
  }),
  withHandlers({
    onSubmit: ({ handleSubmit, dispatch }) =>
      handleSubmit(variables => {
        const data = {
          email: variables.email,
          pass: variables.pass,
          recaptcha: 'tetetetetetetetetete'
        }

        dispatch(loginUser(data))
      })
  }),
  pure
)(Authorization)
