import React from 'react'
import PropTypes from 'prop-types'
import { Field, Form } from 'redux-form'
import TextArea from '../../../App/components/Form/TextArea'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const required = value => (value ? undefined : 'Required')

const QuestionTextForm = ({ classes, onSubmit, id }) => (
  <Form className={classes.root} onSubmit={onSubmit}>
    <Field
      id={`answer-${id}`}
      name={`answer-${id}`}
      className={classes.field}
      component={TextArea}
      placeholder="Ответ:"
      validate={[required]}
    />

    <button type="submit" className={classes.submit}>
      Ответить
    </button>
  </Form>
)

QuestionTextForm.propTypes = {
  classes: PropTypes.object,
  onSubmit: PropTypes.func
}

export default withStyles(styles)(QuestionTextForm)
