import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withState, withHandlers, pure } from 'recompose'
import { reduxForm } from 'redux-form'

import { loginUser, registrationEmail, checkAuth } from '../../redux/actions/auth'

import validate from './validate'

import Authorization from '../../components/Auth'

const FORM_NAME = 'authirization'

export default compose(
  connect(),
  reduxForm({
    form: FORM_NAME,
    validate
  }),
  withState('isSignin', 'setIsSignin', true),
  withState('isCheckEmail', 'setIsCheckEmail', false),
  withHandlers({
    handleAuthModal: ({ isSignin, setIsSignin }) => () => {
      setIsSignin(!isSignin)
    },

    onSubmit: ({
      handleCloseModal,
      handleSubmit,
      isCheckEmail,
      setIsCheckEmail,
      dispatch,
      isSignin
    }) =>
      handleSubmit(variables => {
        if (isSignin) {
          const data = {
            email: variables.email,
            pass: variables.pass,
            recaptcha: 'tetetetetetetetetete'
          }
          dispatch(loginUser(data))
            .then(res => {
              if (res && res.success) {
                localStorage.setItem('token', res.token)
                handleCloseModal()
                dispatch(checkAuth())
              }
            })
            .catch(err => console.log('Error: Auth', err))
        } else {
          const data = {
            email: variables.email,
            recaptcha: '111111111111'
          }
          dispatch(registrationEmail(data))
            .then(res => {
              if (res && res.success) {
                setIsCheckEmail(!isCheckEmail)
              }
            })
            .catch(err => console.log('Error: Auth', err))
        }
      })
  }),
  pure
)(Authorization)
