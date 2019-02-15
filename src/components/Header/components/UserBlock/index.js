import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

import Avatar from '../../../../assets/images/user.jpg'

import styles from './styles'

const UserBlock = ({ classes, email }) => (
  <div className={classes.root}>
    <div className={classes.user}>
      <div className={classes.userBlock}>
        <div className={classes.userHello}>
          Добро пожаловать, <br />
          <div className={classes.email}>{email}</div>
        </div>
        <div className={classes.userPhoto}>
          <img src={Avatar} alt="" />
        </div>
        <div className={classes.menu}>
          <ul>
            <li>
              <Link to={'/en/web/'}>Главная</Link>
            </li>
            <li>
              <Link to={'/en/web/profile'}>Личный кабинет</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

UserBlock.propTypes = {
  classes: PropTypes.object,
  email: PropTypes.string
}

export default withStyles(styles)(UserBlock)
