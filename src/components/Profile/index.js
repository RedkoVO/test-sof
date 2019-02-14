import React from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import withStyles from '@material-ui/core/styles/withStyles'

import Questions from './components/Questions'

import styles from './styles'

const Profile = ({ classes, products, handlerShowProductInfo }) => {
  return (
    <div className={classes.root}>
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
          <Tab className={classes.tab}>
            Помоги Софии решить глобальные проблемы человечества
          </Tab>
          <Tab className={classes.tab}>
            София создает рецепт молодости и бессмертия
          </Tab>
        </TabList>
        <TabPanel className={classes.tabPanel}>
          <Questions
            questions={products ? products.questions.future : []}
            handlerShowProductInfo={handlerShowProductInfo}
          />
        </TabPanel>

        <TabPanel className={classes.tabPanel}>
          <Questions
            questions={products ? products.questions.immortality : []}
            handlerShowProductInfo={handlerShowProductInfo}
          />
        </TabPanel>

        <TabPanel className={classes.tabPanel}>
          <Questions
            questions={products ? products.questions.mavrody : []}
            handlerShowProductInfo={handlerShowProductInfo}
          />
        </TabPanel>

        <TabPanel className={classes.tabPanel}>
          <Questions
            questions={products ? products.questions.troubles : []}
            handlerShowProductInfo={handlerShowProductInfo}
          />
        </TabPanel>

        <TabPanel className={classes.tabPanel}>55555555555</TabPanel>
      </Tabs>
    </div>
  )
}

Profile.propTypes = {
  classes: PropTypes.object,
  products: PropTypes.object,
  handlerShowProductInfo: PropTypes.func
}

export default withStyles(styles)(Profile)
