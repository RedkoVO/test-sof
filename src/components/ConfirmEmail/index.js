import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const ConfirmEmail = ({ classes }) => (
  <div className={classes.root}>
    Welcome to Cryptaur Games!
    <br />
    Email was confirm!
    <Link to="/en/web" className={classes.link}>Home page</Link>
  </div>
)

ConfirmEmail.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(ConfirmEmail)
