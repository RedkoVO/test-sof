import React from 'react'
import { compose, pure } from 'recompose'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

import RoutePage from '../../../components/App/components/Routes/RoutePage'
import Questions from '../../Questions/'
import Profile from '../../Profile/'
import Dashboard from '../../Dashboard/'
import ConfirmEmail from '../../ConfirmEmail'
import Invest from '../../Invest'
import InvestRight from '../../InvestRight'

const RootRoute = props => {
  const { location, history } = props

  return (
    <Switch location={location}>
      <Route
        path={`/en/web/confirm_email/:code/:userId/:referral?`}
        history={history}
        component={ConfirmEmail}
      />
      <RoutePage path={'/en/web/questions'} component={Questions} history={history} />
      <RoutePage path={'/en/web/profile'} component={Profile} history={history} />
      <RoutePage path={'/en/web/invest'} component={Invest} history={history} />
      <RoutePage path={'/en/web/invest-right'} component={InvestRight} history={history} />
      <RoutePage path={'/en/web/:type?/:bundle?/:pay?'} history={history} component={Dashboard} />
      <Redirect to="/en/web" />
    </Switch>
  )
}

export default compose(
  withRouter,
  pure
)(RootRoute)
