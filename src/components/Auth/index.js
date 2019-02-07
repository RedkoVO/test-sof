import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import SignIn from './components/SignIn'
import Registration from './components/Registration'

import styles from './styles'

const Authorization = ({
  classes,
  onSubmit,
  isSignin,
  handleCloseModal,
  handleAuthModal
}) => (
  <div className={classes.root}>
    <div className={classes.authOverlay} />

    {isSignin ? (
      <SignIn onSubmit={onSubmit} handleAuthModal={handleAuthModal} />
    ) : (
      <Registration onSubmit={onSubmit} handleAuthModal={handleAuthModal} />
    )}
  </div>
)

Authorization.propTypes = {
  classNamees: PropTypes.object,
  handleAuthModal: PropTypes.func,
  handleCloseModal: PropTypes.func,
  onSubmit: PropTypes.func,
  isSignin: PropTypes.bool
}

export default withStyles(styles)(Authorization)
