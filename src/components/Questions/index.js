import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import QuestionTextForm from '../../containers/Questions/components/QuestionTextForm'

import styles from './styles'

const Questions = ({ classes, questionsList }) => (
  <div className={classes.root}>
    {questionsList &&
      questionsList.answersList &&
      questionsList.answersList.map(item => (
        <div className={classes.wrQuestionInfo} key={item.id}>
          <div className={classes.leftBlock}>
            <div className={classes.id}>ID: {item.id}</div>
            <div className={classes.question}>Вопрос: {item.question_text}</div>
            <div className={classes.user}>
              Пользователь: {item.user_details.email}
            </div>
            <div className={classes.date}>Дата: {item.create_dt}</div>
            <div className={classes.nature}>Характер: {item.sub_part}</div>
          </div>

          <QuestionTextForm id={item.id} />
        </div>
      ))}
  </div>
)

Questions.propTypes = {
  classes: PropTypes.object,
  questions: PropTypes.array
}

export default withStyles(styles)(Questions)
