import React from 'react'
import { compose, pure } from 'recompose'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

import RoutePage from '../../../components/App/components/Routes/RoutePage'
import Dashboard from '../../../containers/Dashboard/'
import Authorization from '../../../containers/Auth/Authorization/'
import Registration from '../../../containers/Auth/Registration/'
import ConfirmEmail from '../../../components/ConfirmEmail'

const RootRoute = props => {
  const { location, history } = props

  return (
    <Switch location={location}>
      <Route path={'/en/web/login'} render={() => <Authorization />} />
      <Route path={'/en/web/registration'} render={() => <Registration />} />

      <RoutePage
          path={`/en/web/confirm-email/:hash/:userId`}
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
