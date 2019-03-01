import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import QuestionTextForm from '../../containers/Questions/components/QuestionTextForm'

import styles from './styles'

const Questions = ({ classes, questions, onSubmit }) => (
  <div className={classes.root}>
    {questions.map(item => (
      <div className={classes.wrQuestionInfo} key={item.id}>
        <div className={classes.leftBlock}>
          <div className={classes.id}>ID: {item.id}</div>
          <div className={classes.question}>Вопрос: {item.question}</div>
          <div className={classes.user}>Пользователь: {item.user}</div>
          <div className={classes.date}>Дата: {item.date}</div>
          <div className={classes.nature}>Характер: {item.nature}</div>
        </div>

        <QuestionTextForm id={item.id} />
      </div>
    ))}
  </div>
)

Questions.propTypes = {
  classes: PropTypes.object,
  questions: PropTypes.array,
  onSubmit: PropTypes.func
}

export default withStyles(styles)(Questions)
