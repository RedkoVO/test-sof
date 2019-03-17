import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

import Avatar from '../../../../assets/images/user.jpg'

import styles from './styles'

const UserBlock = ({ classes, email, userType, isTablet }) => (
  <div className={classes.root}>
    <div className={classes.user}>
      <div className={classes.userBlock}>
        {!isTablet && (
          <div className={classes.userHello}>
            Добро пожаловать, <br />
            <div className={classes.email}>{email}</div>
          </div>
        )}
        <div className={classes.userPhoto}>
          <img src={Avatar} alt="" />
        </div>
        <div className={classes.menu}>
          {userType !== 'b' && (
            <ul>
              <li>
                <Link to={'/en/web/'}>Главная</Link>
              </li>
              <li>
                <Link to={'/en/web/profile'}>Личный кабинет</Link>
              </li>
              <li>
                <Link to={'/en/web/invest'}>Инвестировать</Link>
              </li>
              <li>
                <Link to={'/en/web/invest-right'}>Правила инвестирования</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  </div>
)

UserBlock.propTypes = {
  classes: PropTypes.object,
  email: PropTypes.string,
  isTablet: PropTypes.bool
}

export default withStyles(styles)(UserBlock)
