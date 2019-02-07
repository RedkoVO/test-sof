import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { Field, Form } from 'redux-form'
import cn from 'classnames'

import InputField from '../../../App/components/InputField'

import styles from './styles'

const SignIn = ({ classes, onSubmit, handleAuthModal }) => (
  <div className={classes.root}>
    <div className={classes.containerRegistrat}>
      <div className={classes.containerRegistratStep1}>
        <Form className={classes.registrStep1} onSubmit={onSubmit}>
          <h1 className={classes.step1Title}>Login</h1>
          <Field
            id="email"
            name="email"
            type="email"
            className={classes.field}
            component={InputField}
            placeholder="Email"
          />

          <Field
            id="pass"
            name="pass"
            type="password"
            className={classes.field}
            component={InputField}
            placeholder="Password"
          />

          <div>
            <div
              className={classes.step1BtnBack}
              onClick={() => handleAuthModal()}
            >
              Registration
            </div>
            <button
              type="submit"
              className={cn(classes.step1BtnsRegister, {
                disabled: false
              })}
            >
              Login!
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
)

SignIn.propTypes = {
  classNamees: PropTypes.object,
  handleAuthModal: PropTypes.func,
  onSubmit: PropTypes.func
}

export default withStyles(styles)(SignIn)
