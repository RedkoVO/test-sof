import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withState, withHandlers, pure } from 'recompose'
import { reduxForm, reset } from 'redux-form'

import {
  loginUser,
  registrationEmail,
  checkAuth
} from '../../redux/actions/auth'

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
  withState('isRegistrationPressed', 'setRegistrationPressed', false),
  withState('errorMessage', 'setErrorMessage', ''),
  withState('recaptcha', 'setRecaptcha', ''),
  withState('recaptchaError', 'setRecaptchaError', ''),
  withHandlers({
    handleAuthModal: ({
      isSignin,
      setIsSignin,
      setErrorMessage,
      setRecaptchaError,
      setIsCheckEmail,
      setRecaptcha,
      dispatch
    }) => () => {
      setIsSignin(!isSignin)
      setErrorMessage('')
      setRecaptchaError('')
      setRecaptcha('')
      setIsCheckEmail(false)
      dispatch(reset('authirization'))
    },

    handleChangeRecaptcha: ({ setRecaptcha, setRecaptchaError }) => hash => {
      setRecaptcha(hash)
      setRecaptchaError('')
    },

    onSubmit: ({
      handleCloseModal,
      handleSubmit,
      setIsCheckEmail,
      dispatch,
      isSignin,
      setRegistrationPressed,
      isRegistrationPressed,
      setErrorMessage,
      setRecaptchaError,
      recaptcha
    }) =>
      handleSubmit(variables => {
        if (isSignin) {
          if (recaptcha) {
            const data = {
              email: variables.email,
              pass: variables.pass,
              recaptcha
            }
            dispatch(loginUser(data))
              .then(res => {
                if (res && res.success) {
                  localStorage.setItem('token', res.token)
                  handleCloseModal()
                  dispatch(checkAuth())
                } else {
                  if (res.code === 3982) {
                    setErrorMessage(
                      'Такой пользователь не существует, зарегестрируйтесь.'
                    )
                  }
                }
              })
              .catch(err => console.log('Error: Auth', err))
          } else {
            setRecaptchaError('Заполните капчу')
          }
        } else {
          if (recaptcha) {
            if (!isRegistrationPressed) {
              const data = {
                email: variables.email,
                recaptcha: '111111111111'
              }

              setRegistrationPressed(true)

              dispatch(registrationEmail(data))
                .then(res => {
                  if (res && res.success) {
                    setIsCheckEmail(true)
                    setRegistrationPressed(false)
                  } else {
                    setRegistrationPressed(false)
                    if (res.code === 5059) {
                      setErrorMessage(
                        'Такой пользователь существует'
                      )
                    }
                  }
                })
                .catch(err => console.log('Error: Auth', err))
            }
          } else {
            setRecaptchaError('Заполните капчу')
          }
        }
      })
  }),
  pure
)(Authorization)
