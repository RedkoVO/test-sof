import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, withState, pure } from 'recompose'

import { postPayment } from '../../../../redux/actions/payment'

import PaymentQuestion from '../../../../components/Payment/components/PaymentQuestions'

export default compose(
  connect(),
  withState('iframeUrl', 'setIframeUrl', ''),
  withHandlers({
    handlerPaymentSubmit: ({ dispatch, popupData, setIframeUrl }) => () => {
      const data = {
        id: popupData.id,
        bundle: popupData.bundle,
        payment: 'visa'
      }

      dispatch(postPayment(data))
        .then(res => {
          if (res && res.success) {
            setIframeUrl(res.iframe_url)
          }
        })
        .catch(err => {
          console.log('Error: postPayment', err)
        })
    }
  }),
  pure
)(PaymentQuestion)
