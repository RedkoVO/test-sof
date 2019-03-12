import React from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import withStyles from '@material-ui/core/styles/withStyles'

import Questions from './components/Questions'
import Spinner from '../App/components/Spinner'

import styles from './styles'

const Profile = ({
  classes,
  products,
  handlerPaymentClose,
  handlerPaymentPopup,
  paymentQuestionData
}) => (
  <div className={classes.root}>
    <div className={classes.title}>Мои вопросы</div>
    <Tabs
      className={classes.tabs}
      selectedTabClassName={classes.selectedTab}
      selectedTabPanelClassName={classes.selectedPanel}
    >
      <TabList className={classes.tabList}>
        <Tab className={classes.tab}>София предсказывает будущее</Tab>
        <Tab className={classes.tab}>
          София создает рецепт молодости и бессмертия
        </Tab>
        <Tab className={classes.tab}>София хакнула Мавроди</Tab>
        {/* <Tab className={classes.tab}>
          Помоги Софии решить глобальные проблемы человечества
        </Tab> */}
      </TabList>
      <TabPanel className={classes.tabPanel}>
        <Questions
          paymentQuestionData={paymentQuestionData}
          handlerPaymentPopup={handlerPaymentPopup}
          handlerPaymentClose={handlerPaymentClose}
          questions={
            products && products.questions && products.questions.future
              ? products.questions.future
              : []
          }
        />
      </TabPanel>

      <TabPanel className={classes.tabPanel}>
        <Questions
          paymentQuestionData={paymentQuestionData}
          handlerPaymentPopup={handlerPaymentPopup}
          handlerPaymentClose={handlerPaymentClose}
          questions={
            products && products.questions && products.questions.immortality
              ? products.questions.immortality
              : []
          }
        />
      </TabPanel>

      <TabPanel className={classes.tabPanel}>
        <Questions
          paymentQuestionData={paymentQuestionData}
          handlerPaymentPopup={handlerPaymentPopup}
          handlerPaymentClose={handlerPaymentClose}
          questions={
            products && products.questions && products.questions.mavrody
              ? products.questions.mavrody
              : []
          }
        />
      </TabPanel>

      {/* <TabPanel className={classes.tabPanel}>
        <Questions
        paymentQuestionData={paymentQuestionData}
        handlerPaymentPopup={handlerPaymentPopup}
        handlerPaymentClose={handlerPaymentClose}
          questions={
            products && products.questions && products.questions.troubles
              ? products.questions.troubles
              : []
          }
        />
      </TabPanel> */}
    </Tabs>

    <div className={classes.spinner}>{!products && <Spinner />}</div>
  </div>
)

Profile.propTypes = {
  classes: PropTypes.object,
  products: PropTypes.object,
  paymentQuestionData: PropTypes.object,
  handlerPaymentClose: PropTypes.func,
  handlerPaymentPopup: PropTypes.func
}

export default withStyles(styles)(Profile)
