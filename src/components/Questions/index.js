import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const Questions = ({ classes, questions }) => (
  <div className={classes.root}>
    {questions.map(item => (
      <div className={classes.wrQuestionInfo} key={item.id}>
        <div className={classes.question}>{item.question}</div>
        {/* <div className={classes.user}>{item.user}</div>
        <div className={classes.question}>{item.question}</div>
        <div className={classes.question}>{item.question}</div> */}
      </div>
    ))}
  </div>
)

Questions.propTypes = {
  classes: PropTypes.object,
  questions: PropTypes.array
}

export default withStyles(styles)(Questions)
