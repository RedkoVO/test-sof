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
  choosedAnswer,
  isShowPayment,
  handlerPaymentPopup,
  handlerPaymentClose,
  isTablet,
  selectedTabIndex,
  selectTab,
  isAuth
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
      />
    ) : (
      <DashboardDesktop
        answers1={answers1}
        answers2={answers2}
        answers3={answers3}
        answers4={answers4}
        answers5={answers5}
        choosedAnswer={choosedAnswer}
        isShowPayment={isShowPayment}
        handlerPaymentPopup={handlerPaymentPopup}
        handlerPaymentClose={handlerPaymentClose}
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
  choosedAnswer: PropTypes.object,
  isShowPayment: PropTypes.bool,
  isAuth: PropTypes.bool,
  isTablet: PropTypes.bool,
  handlerPaymentPopup: PropTypes.func,
  handlerPaymentClose: PropTypes.func
}

export default Dashboard
