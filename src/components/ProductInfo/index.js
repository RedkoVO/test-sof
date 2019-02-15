import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import withStyles from '@material-ui/core/styles/withStyles'
import cn from 'classnames'

import Spinner from '../App/components/Spinner'

import styles from './styles'

const PropductInfo = ({
  classes,
  index,
  isSpinner,
  question,
  productInfo,
  handlerShowProductInfo
}) => {
  const statusButton = status => {
    switch (status) {
      case 1:
        return { text: 'В процессе...', color: 'blue' }
      case 2:
        return { text: 'Открыть', color: 'green' }
      default:
        return { text: 'Задать', color: 'blue' }
    }
  }

  return (
    <div className={cn(classes.root, { active: !isEmpty(productInfo) })}>
      <div className={classes.wrShortInformation}>
        {isSpinner && <Spinner />}

        <div className={classes.text}>
          {index}. {question.question_text}
        </div>

        {question.status !== 0 ? (
          <div
            className={cn(classes.openFullQuestion, {
              active: !isEmpty(productInfo)
            })}
            onClick={() => handlerShowProductInfo(question.id)}
          />
        ) : (
          <div className={classes.ask}>
            {statusButton(question.status).text}
          </div>
        )}
      </div>

      {!isEmpty(productInfo) && (
        <React.Fragment>
          <div
            className={cn(classes.status, statusButton(question.status).color)}
          >
            {question.status === 1 && statusButton(question.status).text}
          </div>

          <div className={classes.wrFullInformation}>{productInfo.answer}</div>
        </React.Fragment>
      )}
    </div>
  )
}

PropductInfo.propTypes = {
  classes: PropTypes.object,
  index: PropTypes.number,
  question: PropTypes.object,
  productInfo: PropTypes.object,
  isSpinner: PropTypes.bool,
  handlerShowProductInfo: PropTypes.func
}

export default withStyles(styles)(PropductInfo)
