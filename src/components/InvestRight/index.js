import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const InvestRight = ({ classes }) => (
  <div className={classes.root}>InvestRight</div>
)

InvestRight.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(InvestRight)
