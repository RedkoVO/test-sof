import React from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { reveal as Menu } from 'react-burger-menu'
import withStyles from '@material-ui/core/styles/withStyles'

import Payment from '../../../containers/Payment'
import Answer from './components/Answer'

import './burgerMenu.css'
import styles from './styles'

const Dashboard = ({
  classes,
  answers1,
  answers2,
  answers3,
  answers4,
  answers5,
  choosedAnswer,
  isShowPayment,
  handlerPaymentPopup,
  handlerPaymentClose,
  selectTab,
  selectedTabIndex,
  isAuth
}) => {
  return (
    <main>
      {isAuth && (
        <Menu pageWrapId={'page-wrap'} width={'280px'}>
        <div className="menu-item" onClick={() => selectTab(0)}>
          Home
        </div>
        <div className="menu-item" onClick={() => selectTab(1)}>
          About
        </div>
        <div className="menu-item" onClick={() => selectTab(2)}>
          Contact
        </div>
      </Menu>
      )}
      
      <div className={classes.root} id="page-wrap">
        <Tabs
          className={classes.tabs}
          onSelect={() => {}}
          selectedIndex={selectedTabIndex}
          selectedTabClassName={classes.selectedTab}
          selectedTabPanelClassName={classes.selectedPanel}
        >
          <TabList className={classes.tabList}>
            <Tab className={classes.tab}>София предсказывает будущее</Tab>
            <Tab className={classes.tab}>
              София создает рецепт молодости и бессмертия
            </Tab>
            <Tab className={classes.tab}>София хакнула Мавроди</Tab>
            <Tab className={classes.tab}>
              София создает рецепт молодости и бессмертия
            </Tab>
            <Tab className={classes.tab}>
              София создает рецепт молодости и бессмертия
            </Tab>
          </TabList>

          <TabPanel className={classes.tabPanel}>
            {answers1.map(item => (
              <Answer
                answer={item}
                key={item.id}
                isShowPayment={isShowPayment}
                handlerPaymentPopup={handlerPaymentPopup}
              />
            ))}
          </TabPanel>

          <TabPanel className={classes.tabPanel}>
            {answers2.map(item => (
              <Answer
                answer={item}
                key={item.id}
                isShowPayment={isShowPayment}
                handlerPaymentPopup={handlerPaymentPopup}
              />
            ))}
          </TabPanel>

          <TabPanel className={classes.tabPanel}>
            {answers3.map(item => (
              <Answer
                answer={item}
                key={item.id}
                isShowPayment={isShowPayment}
                handlerPaymentPopup={handlerPaymentPopup}
              />
            ))}
          </TabPanel>

          <TabPanel className={classes.tabPanel}>
            {answers4.map(item => (
              <Answer
                answer={item}
                key={item.id}
                isShowPayment={isShowPayment}
                handlerPaymentPopup={handlerPaymentPopup}
              />
            ))}
          </TabPanel>

          <TabPanel className={classes.tabPanel}>
            {answers5.map(item => (
              <Answer
                answer={item}
                key={item.id}
                isShowPayment={isShowPayment}
                handlerPaymentPopup={handlerPaymentPopup}
              />
            ))}
          </TabPanel>
        </Tabs>
      </div>

      {isShowPayment && (
        <Payment
          choosedAnswer={choosedAnswer}
          handlerPaymentClose={handlerPaymentClose}
        />
      )}
    </main>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object,
  answers1: PropTypes.array,
  answers2: PropTypes.array,
  answers3: PropTypes.array,
  answers4: PropTypes.array,
  answers5: PropTypes.array,
  choosedAnswer: PropTypes.object,
  isShowPayment: PropTypes.bool,
  isAuth: PropTypes.bool,
  handlerPaymentPopup: PropTypes.func,
  handlerPaymentClose: PropTypes.func,
  selectTab: PropTypes.func,
  selectedTabIndex: PropTypes.number
}

export default withStyles(styles)(Dashboard)
