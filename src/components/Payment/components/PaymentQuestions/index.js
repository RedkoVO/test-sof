import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const PaymentQuestion = ({
  classes,
  iframeUrl,
  popupData,
  handlerPaymentClose,
  handlerPaymentSubmit
}) => (
  <div className={classes.root}>
    <div className={classes.popup}>
      {iframeUrl ? (
        <div className={classes.wrIframe}>
          <iframe
            id="paymentFrame"
            className={classes.iframe}
            title="payment-frame"
            src={iframeUrl}
          />
        </div>
      ) : (
        <React.Fragment>
          <div className={classes.preview}>
            <div className={classes.content}>{popupData.question_text}</div>
            <div className={classes.price}>$0.99</div>
          </div>

          <div
            className={classes.button}
            onClick={() => handlerPaymentSubmit()}
          >
            Получить ответ
          </div>
        </React.Fragment>
      )}
    </div>
    <div
      className={classes.authOverlay}
      onClick={() => handlerPaymentClose()}
    />
  </div>
)

PaymentQuestion.propTypes = {
  classes: PropTypes.object,
  iframeUrl: PropTypes.string,
  popupData: PropTypes.object,
  handlerPaymentClose: PropTypes.func
}

export default withStyles(styles)(PaymentQuestion)
