import React from 'react'
import PropTypes from 'prop-types'
import ReCAPTCHA from 'react-google-recaptcha'
import { Form, Field } from 'redux-form'
import withStyles from '@material-ui/core/styles/withStyles'
import cn from 'classnames'

import InputField from '../../../../../App/components/Form/InputField'

import styles from './styles'

const Step1 = ({
  classes,
  onSubmit,
  handleAuthModal,
  handleChangeRecaptcha,
  isCheckEmail,
  isRegistrationPressed,
  recaptchaError,
  errorMessage
}) => (
  <div className={classes.root}>
    <Form className={classes.registrStep1} onSubmit={onSubmit}>
      <h1 className={classes.step1Title}>
        Введите ваш имейл для регистрации. Если вы уже зарегистрированы в
        SophiaIQ, то перейдите по кнопке "Авторизация"
      </h1>

      <Field
        id="email"
        name="email"
        type="text"
        className={classes.field}
        component={InputField}
        placeholder="Email"
      />

      <ReCAPTCHA
        className={classes.recaptcha}
        sitekey="6LcwOJEUAAAAAEkWn7eDLwZ2V81nrrWDLHwk1_AE"
        onChange={handleChangeRecaptcha}
      />

      {isCheckEmail && (
        <div className={classes.checkEmail}>Проверте свой email</div>
      )}

      {errorMessage && <div className={classes.error}>{errorMessage}</div>}
      {recaptchaError && <div className={classes.error}>{recaptchaError}</div>}

      <div>
        <div className={classes.step1BtnBack} onClick={() => handleAuthModal()}>
          Авторизация
        </div>
        <button
          type="submit"
          className={cn(classes.step1BtnsFinish, {
            disabled: isRegistrationPressed
          })}
        >
          Регистрация!
        </button>
      </div>
    </Form>
  </div>
)

Step1.propTypes = {
  classNamees: PropTypes.object,
  handleAuthModal: PropTypes.func,
  onSubmit: PropTypes.func,
  handleChangeRecaptcha: PropTypes.func,
  isCheckEmail: PropTypes.bool,
  isRegistrationPressed: PropTypes.bool,
  recaptchaError: PropTypes.string,
  errorMessage: PropTypes.string
}

export default withStyles(styles)(Step1)
