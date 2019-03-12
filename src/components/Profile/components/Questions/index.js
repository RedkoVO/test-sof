import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import withStyles from '@material-ui/core/styles/withStyles'

import ProductInfo from '../../../../containers/Profile/components/ProductInfo'
import PaymentQuestions from '../../../../containers/Payment/components/PaymentQuestions'

import styles from './styles'

// const tmpQuestion = [
//   {
//     answer: null,
//     create_dt: '2019-03-01 05:48:20.004462',
//     id: 58,
//     is_paid: 1,
//     question_text: 'когда я замучу личный бизнес?',
//     question_type: 'future',
//     status: 1
//   },
//   {
//     answer: null,
//     create_dt: '2019-03-01 05:48:20.004462',
//     id: 34,
//     is_paid: 0,
//     question_text: 'когда я замучу личный бизнес?',
//     question_type: 'future',
//     status: 1
//   },
//   {
//     answer: null,
//     create_dt: '2019-03-01 05:48:20.004462',
//     id: 51,
//     is_paid: 1,
//     question_text: 'когда я замучу личный бизнес?',
//     question_type: 'future',
//     status: 1
//   },
//   {
//     answer: null,
//     create_dt: '2019-03-01 05:50:12.491917',
//     id: 59,
//     is_paid: 1,
//     question_text: '',
//     question_type: 'future',
//     status: 0
//   },
//   {
//     answer: null,
//     create_dt: '2019-03-01 05:50:12.491917',
//     id: 60,
//     is_paid: 1,
//     question_text: '',
//     question_type: 'future',
//     status: 0
//   }
// ]

const Questions = ({
  classes,
  handlerPaymentClose,
  handlerPaymentPopup,
  paymentQuestionData,
  questions
}) => (
  <div className={classes.root}>
    {/* {tmpQuestion.map(item => ( */}
    {questions.map(item => (
      <ProductInfo
        key={item.id}
        question={item}
        id={item.id}
        handlerPaymentPopup={handlerPaymentPopup}
      />
    ))}

    {!isEmpty(paymentQuestionData) && (
      <PaymentQuestions
        handlerPaymentClose={handlerPaymentClose}
        popupData={paymentQuestionData}
      />
    )}
  </div>
)

Questions.propTypes = {
  classes: PropTypes.object,
  questions: PropTypes.array,
  paymentQuestionData: PropTypes.object,
  handlerPaymentPopup: PropTypes.func,
  handlerPaymentClose: PropTypes.func
}

export default withStyles(styles)(Questions)
