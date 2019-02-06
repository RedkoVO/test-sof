import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Step1 from './components/Step1'

import styles from './styles'

const Registration = ({
  classes,
  onSubmit,
  handleGenerateSecretKey,
  handleSaveSecretKey,
  generatedKey
}) => (
  <div className={classes.root}>
    <div className={classes.containerRegistrat}>
      <Step1
        onSubmit={onSubmit}
        handleGenerateSecretKey={handleGenerateSecretKey}
        handleSaveSecretKey={handleSaveSecretKey}
        generatedKey={generatedKey}
      />

      <div className={classes.footer}>
        <span className={classes.copyright}>
          Vault. All Rights Reserved 2018
        </span>
        <div>
          <a href="/" className={classes.footerLink}>
            Privacy Policy
          </a>
          <a href="/" className={classes.footerLink}>
            Terms and conditions
          </a>
        </div>
      </div>
    </div>
  </div>
)

Registration.propTypes = {
  classNamees: PropTypes.object,
  onSubmit: PropTypes.func,
  generatedKey: PropTypes.string,
  handleSaveSecretKey: PropTypes.func,
  handleGenerateSecretKey: PropTypes.func
}

export default withStyles(styles)(Registration)
