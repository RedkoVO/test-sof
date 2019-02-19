import React from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import isEmpty from 'lodash/isEmpty'
import find from 'lodash/find'
import withStyles from '@material-ui/core/styles/withStyles'

import Payment from '../../../containers/Payment'
import Answer from './components/Answer'

import styles from './styles'

const Dashboard = ({
  classes,
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
  match
}) => {
  // console.log('match', match)
  // future, immortality, mavrody, troubles
  // future/1_answer/pay

  let popupData = {}

  switch (match.params.type) {
    case 'future':
      popupData = find(answers1, { bundle: match.params.bundle })
      break
    case 'immortality':
      popupData = find(answers2, { bundle: match.params.bundle })
      break
    case 'mavrody':
      popupData = find(answers3, { bundle: match.params.bundle })
      break
    case 'troubles':
      popupData = find(answers4, { bundle: match.params.bundle })
      break
  }

  // console.log('answers', answers)

  return (
    <main>
      <div className={classes.root}>
        <Tabs
          className={classes.tabs}
          selectedTabClassName={classes.selectedTab}
          selectedTabPanelClassName={classes.selectedPanel}
        >
          <TabList className={classes.tabList}>
            {/* <Tab className={classes.tab}>София предсказывает будущее</Tab>
            <Tab className={classes.tab}>
              София создает рецепт молодости и бессмертия
            </Tab>
            <Tab className={classes.tab}>София хакнула Мавроди</Tab>
            <Tab className={classes.tab}>
              Помоги Софии решить глобальные проблемы человечества
            </Tab>
            <Tab className={classes.tab}>
              София создает рецепт молодости и бессмертия
            </Tab> */}

            {answers.map(item => (
              <Tab className={classes.tab} key={item.id}>
                {item.title}
              </Tab>
            ))}
          </TabList>

          {answers.map(item => {
            // console.log('item', item)
            return (
              <TabPanel className={classes.tabPanel} key={item.id}>
                {item.answers.map(answerItem => (
                    <Answer
                      answer={answerItem}
                      key={answerItem.id}
                      isShowPayment={isShowPayment}
                      handlerPaymentPopup={handlerPaymentPopup}
                      name={item.bundle} //TODO: refactor
                    />
                  
                ))}
              </TabPanel>
            )
          })}

          {/* <TabPanel className={classes.tabPanel}>
            {answers1.map(item => (
              <Answer
                answer={item}
                key={item.id}
                isShowPayment={isShowPayment}
                handlerPaymentPopup={handlerPaymentPopup}
                name="future" //TODO: refactor
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
                name="immortality" //TODO: refactor
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
                name="mavrody" //TODO: refactor
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
                name="troubles" //TODO: refactor
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
          </TabPanel> */}
        </Tabs>
      </div>

      {/* {(isShowPayment || !isEmpty(popupData)) && ( */}
      {!isEmpty(popupData) && (
        <Payment
          // popupData={popupData}
          match={match}
          // choosedAnswer={!isEmpty(choosedAnswer) ? choosedAnswer : popupData}
          choosedAnswer={popupData}
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

  answers: PropTypes.array,

  choosedAnswer: PropTypes.object,
  isShowPayment: PropTypes.bool,
  handlerPaymentPopup: PropTypes.func,
  handlerPaymentClose: PropTypes.func,
  match: PropTypes.object
}

export default withStyles(styles)(Dashboard)
