import React from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { reveal as Menu } from 'react-burger-menu'
import isEmpty from 'lodash/isEmpty'
import find from 'lodash/find'
import withStyles from '@material-ui/core/styles/withStyles'

import Payment from '../../../containers/Payment'
import Answer from './components/Answer'

import './burgerMenu.css'
import styles from './styles'

const Dashboard = ({
  classes,
  answers,
  handlerPaymentPopup,
  handlerPaymentClose,
  selectTab,
  selectedTabIndex,
  isOpenMenu,
  match
}) => {
  const popupDataType = find(answers, { bundle: match.params.type })
  const popupData =
    popupDataType &&
    find(popupDataType.answers, { bundle: match.params.bundle })

  return (
    <main>
      <Menu pageWrapId={'page-wrap'} width={'280px'} isOpen={isOpenMenu}>
        <div className="menu-item" onClick={() => selectTab(0)}>
          София предсказывает будущее
        </div>
        <div className="menu-item" onClick={() => selectTab(1)}>
          София создает рецепт молодости и бессмертия
        </div>
        <div className="menu-item" onClick={() => selectTab(2)}>
          София хакнула Мавроди
        </div>
        <div className="menu-item" onClick={() => selectTab(3)}>
          Помоги Софии решить глобальные проблемы человечества
        </div>
        <div className="menu-item" onClick={() => selectTab(4)}>
          София создает рецепт молодости и бессмертия
        </div>
      </Menu>

      <div className={classes.root} id="page-wrap">
        <Tabs
          className={classes.tabs}
          onSelect={() => {}}
          selectedIndex={selectedTabIndex}
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
          handlerPaymentClose={handlerPaymentClose}
          choosedAnswer={popupData}
        />
      )}
    </main>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object,
  answers: PropTypes.array,
  isOpenMenu: PropTypes.bool,
  handlerPaymentPopup: PropTypes.func,
  handlerPaymentClose: PropTypes.func,
  selectTab: PropTypes.func,
  selectedTabIndex: PropTypes.number,
  match: PropTypes.object
}

export default withStyles(styles)(Dashboard)
