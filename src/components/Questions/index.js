import React from 'react'
import PropTypes from 'prop-types'
import { Field, Form } from 'redux-form'
import TextArea from '../App/components/Form/TextArea'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const Questions = ({ classes, questions, onSubmit }) => (
  <div className={classes.root}>
    {questions.map(item => (
      <Form
        className={classes.wrQuestionInfo}
        key={item.id}
        onSubmit={onSubmit}
      >
        <div className={classes.leftBlock}>
          <div className={classes.id}>ID: {item.id}</div>
          <div className={classes.question}>Вопрос: {item.question}</div>
          <div className={classes.user}>Пользователь: {item.user}</div>
          <div className={classes.date}>Дата: {item.date}</div>
          <div className={classes.nature}>Характер: {item.nature}</div>
        </div>

        <div className={classes.rightBlock}>
          <Field
            id={`answer-${item.id}`}
            name="answer"
            className={classes.field}
            component={TextArea}
            placeholder="Ответ:"
          />

          <button type="submit" className={classes.submit}>
            Ответить
          </button>
        </div>
      </Form>
    ))}
  </div>
)

Questions.propTypes = {
  classes: PropTypes.object,
  questions: PropTypes.array,
  onSubmit: PropTypes.func
}

export default withStyles(styles)(Questions)
