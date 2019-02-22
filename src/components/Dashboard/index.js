import React from 'react'
import PropTypes from 'prop-types'

import DashboardMobile from './Mobile'
import DashboardDesktop from './Desktop'

const Dashboard = ({
  answers,
  handlerPaymentPopup,
  handlerPaymentClose,
  isTablet,
  selectedTabIndex,
  selectTab,
  isAuth,
  isOpenMenu,
  match
}) => (
  <React.Fragment>
    {isTablet ? (
      <DashboardMobile
        answers={answers}
        handlerPaymentPopup={handlerPaymentPopup}
        handlerPaymentClose={handlerPaymentClose}
        selectedTabIndex={selectedTabIndex}
        selectTab={selectTab}
        isAuth={isAuth}
        isOpenMenu={isOpenMenu}
        match={match}
      />
    ) : (
      <DashboardDesktop
        answers={answers}
        handlerPaymentPopup={handlerPaymentPopup}
        handlerPaymentClose={handlerPaymentClose}
        match={match}
      />
    )}
  </React.Fragment>
)

Dashboard.propTypes = {
  answers: PropTypes.array,
  isAuth: PropTypes.bool,
  isTablet: PropTypes.bool,
  isOpenMenu: PropTypes.bool,
  handlerPaymentPopup: PropTypes.func,
  handlerPaymentClose: PropTypes.func,
  match: PropTypes.object
}

export default Dashboard
