import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import cn from 'classnames'

import styles from './styles'

const PropductInfo = ({
  classes,
  question,
  productInfo,
  handlerShowProductInfo
}) => {
  const statusButton = status => {
    switch (status) {
      case 1:
        return { text: 'Задать', color: 'blue' }
      case 2:
        return { text: 'Открыть', color: 'green' }
      default:
        return { text: 'В процессе', color: 'blue' }
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.text}>lalalalal{question.question_text}</div>
      <div
        className={cn(
          classes.openFullQuestion,
          statusButton(question.status).color
        )}
        onClick={() => handlerShowProductInfo(question.id)}
      >
        {statusButton(question.status).text}
      </div>

      {productInfo.question_type}
    </div>
  )
}

PropductInfo.propTypes = {
  classes: PropTypes.object,
  question: PropTypes.object,
  productInfo: PropTypes.object,
  handlerShowProductInfo: PropTypes.func
}

export default withStyles(styles)(PropductInfo)
