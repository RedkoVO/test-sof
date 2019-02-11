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
  isRegistrationPressed
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
        <SignIn onSubmit={onSubmit} handleAuthModal={handleAuthModal} />
      ) : (
        <Registration
          onSubmit={onSubmit}
          handleAuthModal={handleAuthModal}
          isCheckEmail={isCheckEmail}
          isRegistrationPressed={isRegistrationPressed}
        />
      )}
    </div>
  </div>
)

Authorization.propTypes = {
  classNamees: PropTypes.object,
  handleAuthModal: PropTypes.func,
  isCheckEmail: PropTypes.bool,
  isRegistrationPressed: PropTypes.bool,
  onSubmit: PropTypes.func,
  isSignin: PropTypes.bool
}

export default withStyles(styles)(Authorization)
