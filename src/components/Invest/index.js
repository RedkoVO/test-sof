import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const Invest = ({ classes }) => (
  <div className={classes.root}>Invest</div>
)

Invest.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Invest)
