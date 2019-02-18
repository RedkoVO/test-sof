import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const Dashboard = ({ classes, answer, handlerPaymentPopup, name }) => (
  <div className={classes.wrContent}>
    <div className={classes.headerContent}>
      <div className={classes.title}>{answer.title}</div>
      {answer.oldPrice && (
        <div className={classes.oldPrice}>{answer.oldPrice}</div>
      )}
      {answer.percent && (
        <div className={classes.percent}>{answer.percent}</div>
      )}
      <div className={classes.price}>{answer.price}</div>
    </div>
    <div className={classes.content}>
      {answer.items.map(item => (
        <div className={classes.wrItem} key={item.id}>
          <div className={classes.item}>{item.text}</div>
          <div className={classes.underline} />
        </div>
      ))}

      <button
        className={classes.button}
        onClick={() => handlerPaymentPopup(answer, name)}
      >
        Получить ответ
      </button>
    </div>
  </div>
)

Dashboard.propTypes = {
  classes: PropTypes.object,
  handlerPaymentPopup: PropTypes.func,
  answer: PropTypes.object,
  name: PropTypes.string  // TODO: refactor
}

export default withStyles(styles)(Dashboard)
