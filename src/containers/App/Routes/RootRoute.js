import React from 'react'
import { compose, pure } from 'recompose'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

import RoutePage from '../../../components/App/components/Routes/RoutePage'
import Questions from '../../Questions/'
import Profile from '../../Profile/'
import Dashboard from '../../Dashboard/'
import ConfirmEmail from '../../ConfirmEmail'

const RootRoute = props => {
  const { location, history } = props

  return (
    <Switch location={location}>
      <Route
        path={`/en/web/confirm_email/:code/:userId/:referral?`}
        history={history}
        component={ConfirmEmail}
      />
      <RoutePage path={'/en/web/questions'} component={Questions} />
      <RoutePage path={'/en/web/profile'} component={Profile} />
      <RoutePage path={'/en/web/:type?/:bundle?/:pay?'} component={Dashboard} />
      <Redirect to="/en/web" />
    </Switch>
  )
}

export default compose(
  withRouter,
  pure
)(RootRoute)
