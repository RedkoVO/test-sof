import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import { Field, Form } from 'redux-form'
import withStyles from '@material-ui/core/styles/withStyles'
import cn from 'classnames'

import TextArea from '../App/components/Form/TextArea'
import Spinner from '../App/components/Spinner'

import styles from './styles'

const required = value => (value ? undefined : 'Required')

const PropductInfo = ({
  classes,
  id,
  isSpinner,
  question,
  productInfo,
  isAskQuestion,
  handlerShowProductInfo,
  handleAskQuestion,
  onSubmit
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
          {id}. {question.question_text}
        </div>

        {isAskQuestion ? (
          <Form className={classes.form} onSubmit={onSubmit}>
            <Field
              id={`question-${id}`}
              name={`question-${id}`}
              className={classes.field}
              component={TextArea}
              validate={[required]}
              placeholder="Вопрос:"
            />

            <button type="submit" className={classes.submit}>
              Отправить
            </button>
          </Form>
        ) : (
          <React.Fragment>
            {question.status === 0 && (
              <div
                className={classes.ask}
                onClick={() => {
                  handleAskQuestion()
                }}
              >
                {statusButton(question.status).text}
              </div>
            )}
          </React.Fragment>
        )}

        {question.status !== 0 && (
          <div
            className={cn(classes.openFullQuestion, {
              active: !isEmpty(productInfo)
            })}
            onClick={() => handlerShowProductInfo(question.id)}
          />
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
  id: PropTypes.number,
  question: PropTypes.object,
  productInfo: PropTypes.object,
  isSpinner: PropTypes.bool,
  isAskQuestion: PropTypes.bool,
  handlerShowProductInfo: PropTypes.func,
  handleAskQuestion: PropTypes.func,
  onSubmit: PropTypes.func
}

export default withStyles(styles)(PropductInfo)
