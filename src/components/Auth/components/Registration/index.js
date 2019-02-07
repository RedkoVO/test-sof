import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Step1 from './components/Step1'

import styles from './styles'

const Registration = ({ classes, onSubmit, handleAuthModal, isCheckEmail }) => (
  <div className={classes.root}>
    <div className={classes.containerRegistrat}>
      <Step1
        onSubmit={onSubmit}
        handleAuthModal={handleAuthModal}
        isCheckEmail={isCheckEmail}
      />
    </div>
  </div>
)

Registration.propTypes = {
  classNamees: PropTypes.object,
  onSubmit: PropTypes.func,
  handleAuthModal: PropTypes.func,
  isCheckEmail: PropTypes.bool
}

export default withStyles(styles)(Registration)
