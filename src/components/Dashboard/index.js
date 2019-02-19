import React from 'react'
import PropTypes from 'prop-types'

import DashboardMobile from './Mobile'
import DashboardDesktop from './Desktop'

const Dashboard = ({
  answers1,
  answers2,
  answers3,
  answers4,
  answers5,

  answers,

  choosedAnswer,
  isShowPayment,
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
        answers1={answers1}
        answers2={answers2}
        answers3={answers3}
        answers4={answers4}
        answers5={answers5}
        choosedAnswer={choosedAnswer}
        isShowPayment={isShowPayment}
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
        answers1={answers1}
        answers2={answers2}
        answers3={answers3}
        answers4={answers4}
        answers5={answers5}

        answers={answers}

        choosedAnswer={choosedAnswer}
        isShowPayment={isShowPayment}
        handlerPaymentPopup={handlerPaymentPopup}
        handlerPaymentClose={handlerPaymentClose}
        match={match}
      />
    )}
  </React.Fragment>
)

Dashboard.propTypes = {
  answers1: PropTypes.array,
  answers2: PropTypes.array,
  answers3: PropTypes.array,
  answers4: PropTypes.array,
  answers5: PropTypes.array,

  answers: PropTypes.array,
  
  choosedAnswer: PropTypes.object,
  isShowPayment: PropTypes.bool,
  isAuth: PropTypes.bool,
  isTablet: PropTypes.bool,
  isOpenMenu: PropTypes.bool,
  handlerPaymentPopup: PropTypes.func,
  handlerPaymentClose: PropTypes.func,
  match: PropTypes.object
}

export default Dashboard
