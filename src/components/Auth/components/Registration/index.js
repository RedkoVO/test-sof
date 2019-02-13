import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Step1 from './components/Step1'

import styles from './styles'

const Registration = ({
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
    <div className={classes.containerRegistrat}>
      <Step1
        onSubmit={onSubmit}
        handleAuthModal={handleAuthModal}
        handleChangeRecaptcha={handleChangeRecaptcha}
        isCheckEmail={isCheckEmail}
        isRegistrationPressed={isRegistrationPressed}
        recaptchaError={recaptchaError}
        errorMessage={errorMessage}
      />
    </div>
  </div>
)

Registration.propTypes = {
  classNamees: PropTypes.object,
  onSubmit: PropTypes.func,
  handleAuthModal: PropTypes.func,
  handleChangeRecaptcha: PropTypes.func,
  isCheckEmail: PropTypes.bool,
  isRegistrationPressed: PropTypes.bool,
  recaptchaError: PropTypes.string,
  errorMessage: PropTypes.string
}

export default withStyles(styles)(Registration)
