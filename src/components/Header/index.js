import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import UserBlock from './components/UserBlock'
import Authorization from '../../containers/Auth'

import styles from './styles'

const HeaderMain = ({ classes, isShow, handleCloseModal, handleLogout }) => (
  <React.Fragment>
    <header className={classes.root}>
    <div className={classes.logout} onClick={() => handleLogout()}>
      Logout
    </div>
      <UserBlock />
    </header>

    {isShow && <Authorization handleCloseModal={handleCloseModal} />}
  </React.Fragment>
)

HeaderMain.propTypes = {
  classes: PropTypes.object,
  isShow: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  handleLogout: PropTypes.func
}

export default withStyles(styles)(HeaderMain)
