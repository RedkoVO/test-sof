import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import SignIn from './components/SignIn'
import Registration from './components/Registration'

import Logo from '../../assets/images/auth-logo.jpg'

import styles from './styles'

const Authorization = ({
  classes,
  onSubmit,
  isSignin,
  isCheckEmail,
  handleAuthModal,
  handleChangeRecaptcha,
  isRegistrationPressed,
  recaptchaError,
  errorMessage
}) => (
  <div className={classes.root}>
    <div className={classes.authOverlay} />

    <div className={classes.wrAuth}>
      <div className={classes.wrAuthHeader}>
        <img src={Logo} alt="" />
        <div className={classes.title}>
          Добро пожаловать в ваш личный кабинет проекта SophiaIQ
        </div>
      </div>

      {isSignin ? (
        <SignIn
          onSubmit={onSubmit}
          handleAuthModal={handleAuthModal}
          handleChangeRecaptcha={handleChangeRecaptcha}
          errorMessage={errorMessage}
          recaptchaError={recaptchaError}
        />
      ) : (
        <Registration
          onSubmit={onSubmit}
          handleAuthModal={handleAuthModal}
          handleChangeRecaptcha={handleChangeRecaptcha}
          isCheckEmail={isCheckEmail}
          isRegistrationPressed={isRegistrationPressed}
          errorMessage={errorMessage}
          recaptchaError={recaptchaError}
        />
      )}
    </div>
  </div>
)

Authorization.propTypes = {
  classNamees: PropTypes.object,
  handleAuthModal: PropTypes.func,
  handleChangeRecaptcha: PropTypes.func,
  isCheckEmail: PropTypes.bool,
  isRegistrationPressed: PropTypes.bool,
  onSubmit: PropTypes.func,
  isSignin: PropTypes.bool,
  recaptchaError: PropTypes.string,
  errorMessage: PropTypes.string
}

export default withStyles(styles)(Authorization)
