import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { checkAuth } from '../../../../redux/actions/auth'

import PageLayout from '../PageLayout'

const mapStateToProps = state => {
  return {
    checkAuthUser: state.auth
  }
}

class RoutePage extends Component {
  componentWillMount() {
    const { dispatch, history } = this.props
    dispatch(checkAuth())
      .then(res => {
        if (res.is_admin === 1) {
          history.push('/en/web/questions')
        }
      })
      .catch(err => {
        console.log('Error checkouth', err)
      })
  }

  render() {
    const { location, checkAuthUser, component, ...rest } = this.props
    const isAuth = checkAuthUser.checkAuth
      ? checkAuthUser.checkAuth.isAuth
      : false

    return (
      <Route
        {...rest}
        render={props => {
          return <PageLayout {...props} content={component} isAuth={isAuth} />
        }}
      />
    )
  }
}

RoutePage.propTypes = {
  checkAuthUser: PropTypes.object,
  dispatch: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object
}

export default connect(mapStateToProps)(RoutePage)
