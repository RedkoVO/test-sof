import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import UserBlock from './components/UserBlock'
import Authorization from '../../containers/Auth'

import styles from './styles'

const Header = ({
  classes,
  isAuth,
  isShow,
  handleCloseModal,
  handleLogout
}) => (
  <React.Fragment>
    <header className={classes.root}>
      {isAuth && (
        <div className={classes.logout} onClick={() => handleLogout()}>
          Logout
        </div>
      )}
      <UserBlock />
    </header>

    {isShow && <Authorization handleCloseModal={handleCloseModal} />}
  </React.Fragment>
)

Header.propTypes = {
  classes: PropTypes.object,
  isShow: PropTypes.bool,
  isAuth: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  handleLogout: PropTypes.func
}

export default withStyles(styles)(Header)
