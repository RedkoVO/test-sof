import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import { Field, Form } from 'redux-form'
import cn from 'classnames'

import InputField from '../../App/components/InputField'

import styles from './styles'

const Authorization = ({ classes, onSubmit }) => (
  <div className={classes.root}>
    <div className={classes.containerRegistrat}>
      <div className={classes.containerRegistratStep1}>
        <Form className={classes.registrStep1} onSubmit={onSubmit}>
          <h1 className={classes.step1Title}>Login</h1>
          <label htmlFor="key" className={classes.step1Label}>
            Enter secret key from email
          </label>
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
            <Link to={'/en/web/registration'} className={classes.step1BtnBack}>
              Registration
            </Link>
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

      <div className={classes.footer}>
        <span className={classes.copyright}>All Rights Reserved 2019</span>
        <div>
          <a href="/" className={classes.footerLink}>
            Privacy Policy
          </a>
          <a href="/" className={classes.footerLink}>
            Terms and conditions
          </a>
        </div>
      </div>
    </div>
  </div>
)

Authorization.propTypes = {
  classNamees: PropTypes.object,
  onSubmit: PropTypes.func
}

export default withStyles(styles)(Authorization)
