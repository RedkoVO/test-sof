import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import UserBlock from './components/UserBlock'

import styles from './styles'

const HeaderMain = props => {
  const { classes } = props

  return (
    <header className={classes.root}>
      <UserBlock />
    </header>
  )
}

HeaderMain.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(HeaderMain)
