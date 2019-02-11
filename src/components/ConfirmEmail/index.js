import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const ConfirmEmail = ({ classes }) => (
  <div className={classes.root}>
    Добро пожаловать в ваш личный кабинет проекта SophiaIQ!
    <br />
    Email был подтвержден!
    <Link to="/en/web" className={classes.link}>Главная</Link>
  </div>
)

ConfirmEmail.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(ConfirmEmail)
