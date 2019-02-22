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
  answers,
  handlerPaymentPopup,
  handlerPaymentClose,
  match
}) => {
  const popupDataType = find(answers, { bundle: match.params.type })
  const popupData =
    popupDataType &&
    find(popupDataType.answers, { bundle: match.params.bundle })

  return (
    <main>
      <div className={classes.root}>
        <Tabs
          className={classes.tabs}
          selectedTabClassName={classes.selectedTab}
          selectedTabPanelClassName={classes.selectedPanel}
        >
          <TabList className={classes.tabList}>
            {answers.map(item => (
              <Tab className={classes.tab} key={item.id}>
                {item.title}
              </Tab>
            ))}
          </TabList>

          {answers.map(item => (
            <TabPanel className={classes.tabPanel} key={item.id}>
              {item.answers.map(answerItem => (
                <Answer
                  answer={answerItem}
                  key={answerItem.id}
                  handlerPaymentPopup={handlerPaymentPopup}
                  name={item.bundle}
                />
              ))}
            </TabPanel>
          ))}
        </Tabs>
      </div>

      {!isEmpty(popupData) && (
        <Payment
          match={match}
          choosedAnswer={popupData}
          handlerPaymentClose={handlerPaymentClose}
        />
      )}
    </main>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object,
  answers: PropTypes.array,
  handlerPaymentPopup: PropTypes.func,
  handlerPaymentClose: PropTypes.func,
  match: PropTypes.object
}

export default withStyles(styles)(Dashboard)
