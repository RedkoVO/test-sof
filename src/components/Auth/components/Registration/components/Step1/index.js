import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { Form, Field } from 'redux-form'

import InputField from '../../../../../App/components/InputField'

import styles from './styles'

const Step1 = ({ classes, onSubmit, handleAuthModal, isCheckEmail }) => (
  <div className={classes.root}>
    <Form className={classes.registrStep1} onSubmit={onSubmit}>
      <h1 className={classes.step1Title}>Registration</h1>

      <label htmlFor="password" className={classes.step1Label}>
        Email
      </label>
      <Field
        id="email"
        name="email"
        type="email"
        className={classes.field}
        component={InputField}
        placeholder="Email"
      />

      {isCheckEmail && (
        <div className={classes.checkEmail}>Check your email</div>
      )}

      <div>
        <div className={classes.step1BtnBack} onClick={() => handleAuthModal()}>
          Login
        </div>
        <button type="submit" className={classes.step1BtnsFinish}>
          Registration!
        </button>
      </div>
    </Form>
  </div>
)

Step1.propTypes = {
  classNamees: PropTypes.object,
  handleAuthModal: PropTypes.func,
  onSubmit: PropTypes.func,
  isCheckEmail: PropTypes.bool
}

export default withStyles(styles)(Step1)
