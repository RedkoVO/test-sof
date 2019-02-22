import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const Payment = ({
  classes,
  iframeUrl,
  choosedAnswer,
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
            <div className={classes.title}>{choosedAnswer.title}</div>
            <div className={classes.content}>{choosedAnswer.items[0].text}</div>
            <div className={classes.price}>{choosedAnswer.price}</div>
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

Payment.propTypes = {
  classes: PropTypes.object,
  iframeUrl: PropTypes.string,
  choosedAnswer: PropTypes.object,
  handlerPaymentClose: PropTypes.func
}

export default withStyles(styles)(Payment)
