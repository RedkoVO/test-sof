import React from 'react'
import { compose, pure } from 'recompose'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

import RoutePage from '../../../components/App/components/Routes/RoutePage'
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
      <RoutePage path={'/en/web'} component={Dashboard} />
      <Redirect to="/en/web" />
    </Switch>
  )
}

export default compose(
  withRouter,
  pure
)(RootRoute)
