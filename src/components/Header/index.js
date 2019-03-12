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
  isTablet,
  handleCloseModal,
  handleLogout,
  checkAuthState,
  history
}) => (
  <React.Fragment>
    <header className={classes.root}>
      {isAuth && (
        <div className={classes.logout} onClick={() => handleLogout()}>
          <span>Выйти</span>
        </div>
      )}
      <UserBlock
        isTablet={isTablet}
        userType={checkAuthState ? checkAuthState.userType : ''}
        email={checkAuthState ? checkAuthState.email : ''}
      />
    </header>

    {isShow && <Authorization history={history} handleCloseModal={handleCloseModal} />}
  </React.Fragment>
)

Header.propTypes = {
  classes: PropTypes.object,
  isShow: PropTypes.bool,
  isAuth: PropTypes.bool,
  isTablet: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  handleLogout: PropTypes.func
}

export default withStyles(styles)(Header)
