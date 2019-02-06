import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, pure } from 'recompose'
import { reduxForm } from 'redux-form'

import { registrationEmail } from '../../../redux/actions/auth'

import validate from './validate'

import Registration from '../../../components/Auth/Registration'

const FORM_NAME = 'registration'

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
          recaptcha: '111111111111'
        }

        dispatch(registrationEmail(data))
      })
  }),
  pure
)(Registration)
