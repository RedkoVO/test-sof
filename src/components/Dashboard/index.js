import React from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import withStyles from '@material-ui/core/styles/withStyles'

import Answer from './components/Answer'

import styles from './styles'

const Dashboard = ({
  classes,
  answers1,
  answers2,
  answers3,
  answers4,
  answers5
}) => (
  <main>
    <div className={classes.root}>
      <Tabs
        className={classes.tabs}
        selectedTabClassName={classes.selectedTab}
        selectedTabPanelClassName={classes.selectedPanel}
      >
        <TabList className={classes.tabList}>
          <Tab className={classes.tab}>София предсказывает будущее</Tab>
          <Tab className={classes.tab}>София создает рецепт молодости и бессмертия</Tab>
          <Tab className={classes.tab}>София создает рецепт молодости и бессмертия</Tab>
          <Tab className={classes.tab}>София создает рецепт молодости и бессмертия</Tab>
          <Tab className={classes.tab}>София создает рецепт молодости и бессмертия</Tab>
        </TabList>
        <TabPanel className={classes.tabPanel}>
          {answers1.map(item => (
            <Answer answer={item} key={item.id} />
          ))}
        </TabPanel>

        <TabPanel className={classes.tabPanel}>
          {answers2.map(item => (
            <Answer answer={item} key={item.id} />
          ))}
        </TabPanel>

        <TabPanel className={classes.tabPanel}>
          {answers3.map(item => (
            <Answer answer={item} key={item.id} />
          ))}
        </TabPanel>

        <TabPanel className={classes.tabPanel}>
          {answers4.map(item => (
            <Answer answer={item} key={item.id} />
          ))}
        </TabPanel>

        <TabPanel className={classes.tabPanel}>
          {answers5.map(item => (
            <Answer answer={item} key={item.id} />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  </main>
)

Dashboard.propTypes = {
  classes: PropTypes.object,
  answers1: PropTypes.array,
  answers2: PropTypes.array,
  answers3: PropTypes.array,
  answers4: PropTypes.array,
  answers5: PropTypes.array
}

export default withStyles(styles)(Dashboard)
