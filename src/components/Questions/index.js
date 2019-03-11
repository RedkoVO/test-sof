import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import withStyles from '@material-ui/core/styles/withStyles'

import QuestionTextForm from '../../containers/Questions/components/QuestionTextForm'

import styles from './styles'

// const tmpQuestions = [
//   {
//     id: 1,
//     question_text: 'Сколько буду жить?',
//     user: 'christina.muratkina@gmail.com',
//     create_dt: '2019-03-04 04:09:17.79447',
//     user_details: {
//       id: 25,
//       email: 'test@test.test',
//       affirmation_1: '- жизнерадостны и веселы',
//       affirmation_2: '- деловиты и энергичны',
//       affirmation_3: '- в новую работу включаетесь быстро',
//       birth_date: '16-03-1982',
//       picture:
//         'http://games.cryptaur.com/static/_images/games_icons/diceybit/sim_game_icon_cryptoball.png',
//       profile_link: 'https://www.facebook.com/christina.muratkina',
//       sphere: null,
//       telegram: 'ironsky88',
//       uname: 'Christina Muratkina'
//     }
//   },
//   {
//     id: 2,
//     question_text:
//       'Какая скорость света с учетом расширения вселенной относительно наблюдателя на расстоянии 5.67 световых лет?',
//     user: 'christina.muratkina@gmail.com',
//     create_dt: '2019-03-04 04:09:17.79447',
//     user_details: {
//       id: 34,
//       email: 'test@test.test',
//       affirmation_1: '- жизнерадостны и веселы',
//       affirmation_2: '- деловиты и энергичны',
//       affirmation_3: '- в новую работу включаетесь быстро',
//       birth_date: '16-03-1982',
//       picture:
//         'http://games.cryptaur.com/static/_images/games_icons/diceybit/sim_game_icon_cryptoball.png',
//       profile_link: 'https://www.facebook.com/christina.muratkina',
//       sphere: null,
//       telegram: 'ironsky88',
//       uname: 'Christina Muratkina'
//     }
//   }
// ]

const Questions = ({ classes, questionsList }) => (
  <div className={classes.root}>
      {/* {tmpQuestions.map(item => ( */}
    {questionsList &&
      questionsList.answersList &&
      questionsList.answersList.map(item => (
      <div className={classes.wrQuestionInfo} key={item.id}>
        <div className={classes.leftBlock}>
          <div className={classes.id}>ID: {item.id}</div>
          <div className={classes.question}>Вопрос: {item.question_text}</div>
          <div className={classes.date}>
            Дата: {moment(item.create_dt).format('MM-DD-YYYY, hh:mm:ss')}
          </div>

          <div className={classes.wrUser}>
            <img src={item.user_details.picture} alt="" />
            <div className={classes.user}>ID: {item.user_details.id}</div>
            <div className={classes.user}>
              Пользователь: {item.user_details.email}
            </div>
            <div className={classes.id}>Имя: {item.user_details.uname}</div>
            <div className={classes.nature}>
              Характер 1: {item.user_details.affirmation_1}
            </div>
            <div className={classes.nature}>
              Характер 2: {item.user_details.affirmation_2}
            </div>
            <div className={classes.nature}>
              Характер 3: {item.user_details.affirmation_3}
            </div>
            <div className={classes.id}>
              День рождения: {item.user_details.birth_date}
            </div>
            <div className={classes.profile}>
              Профайл:{' '}
              <a
                href={item.user_details.profile_link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {item.user_details.profile_link}
              </a>
            </div>
            <div className={classes.id}>
              Telegram: {item.user_details.telegram}
            </div>
          </div>
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
