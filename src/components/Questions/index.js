import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import QuestionTextForm from '../../containers/Questions/components/QuestionTextForm'

import styles from './styles'

// const tmpQuestions = [
//   {
//     id: 1,
//     question: 'Сколько буду жить?',
//     user: 'christina.muratkina@gmail.com',
//     date: '21.12.12',
//     nature: 'вспыльчивый',
//     user_details: { email: 'test@test.test' }
//   },
//   {
//     id: 2,
//     question:
//       'Какая скорость света с учетом расширения вселенной относительно наблюдателя на расстоянии 5.67 световых лет?',
//     user: 'christina.muratkina@gmail.com',
//     date: '21.12.12',
//     nature: 'вспыльчивый',
//     user_details: { email: 'test@test.test' }
//   }
// ]

const Questions = ({ classes, questionsList }) => (
  <div className={classes.root}>
    {questionsList &&
      questionsList.answersList &&
      questionsList.answersList.map(item => (
        // {tmpQuestions.map(item => (
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
