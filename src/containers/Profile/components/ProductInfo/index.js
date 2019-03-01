import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import { withHandlers, withState, pure } from 'recompose'
import isEmpty from 'lodash/isEmpty'

import {
  getProducts,
  getProductInfo,
  postAskQuestion
} from '../../../../redux/actions/profile'

import ProductInfo from '../../../../components/ProductInfo'

const mapStateToProps = (state, ownProps) => ({
  productInfo: state.profile.productInfo,
  form: `${FORM_NAME}-${ownProps.id}`
})

const FORM_NAME = 'QuestionTextField'

export default compose(
  connect(mapStateToProps),
  reduxForm(),
  withState('productInfo', 'setProductInfo', {}),
  withState('isAskQuestion', 'setAskQuestion', false),
  withState('isSpinner', 'setSpinner', false),
  withHandlers({
    handleAskQuestion: ({ setAskQuestion }) => () => {
      setAskQuestion(true)
    },

    handlerShowProductInfo: ({
      setSpinner,
      setProductInfo,
      productInfo,
      dispatch
    }) => id => {
      const data = { product_id: id }

      if (isEmpty(productInfo)) {
        setSpinner(true)
        dispatch(getProductInfo(data))
          .then(res => {
            if (res && res.success) {
              setProductInfo(res.product_info)
              setSpinner(false)
            }
          })
          .catch(err => {
            console.log('ERROR product info:', err)
          })
      } else {
        setProductInfo({})
      }
    },

    onSubmit: ({ handleSubmit, setAskQuestion, dispatch, id }) =>
      handleSubmit(variables => {
        const data = {
          question_id: id,
          question: variables.question
        }

        dispatch(postAskQuestion(data))
          .then(res => {
            if (res.success) {
              dispatch(reset(`${FORM_NAME}-${id}`))
              setAskQuestion(false)
              dispatch(getProducts())
            }
          })
          .catch(err => {
            console.log('Error askQuestion', err)
          })
      })
  }),
  pure
)(ProductInfo)
