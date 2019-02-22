import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, withState, lifecycle, pure } from 'recompose'

import { postPayment } from '../../redux/actions/payment'

import Payment from '../../components/Payment/'

export default compose(
  connect(),
  withState('iframeUrl', 'setIframeUrl', ''),
  withHandlers({
    handlerPaymentSubmit: ({ dispatch, choosedAnswer, setIframeUrl }) => () => {
      const data = {
        bundle: choosedAnswer.bundle,
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
  lifecycle({
    componentDidMount() {
      const { match, choosedAnswer, setIframeUrl, dispatch } = this.props
      if (match.params.pay) {
        const data = {
          bundle: choosedAnswer.bundle,
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
    }
  }),
  pure
)(Payment)
