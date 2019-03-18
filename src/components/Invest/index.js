import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const Invest = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.investTitle}>Мои инвестиции</div>
    <div className={classes.tabs}>
      <div className={cn(classes.tab, 'active')}>Инвестиционный кошелек №1</div>
      <div className={classes.tab}>Инвестиционный кошелек №2</div>
      <div className={classes.tab}>+</div>
    </div>
    <div className={classes.wrWallet}>
      <div className={classes.wallet}>Ваш ETH кошелек: 0000000000000000</div>
      <div className={classes.invested}>Инвестировано: 0 ETH</div>
      <div className={classes.earned}>Заработано: 0 ETH</div>
      <div className={classes.wrButton}>
        <button className={classes.button}>Вывести</button>
        <Link to="/" className={classes.withdrawRight}>
          Правила вывода
        </Link>
      </div>
      <div className={classes.referralTitle}>Реферальная программа</div>
      <p>Ваша реферальная ссылка</p>
      <p>https://tilda.cc/page/?pageid=5175144</p>
      <div className={classes.referrals}>
        <p>Количество привлеченных рефералов: 0</p>
        <p>Ваша реферальная ссылка Заработано с рефералов: 0 ETH</p>
      </div>
    </div>
  </div>
)

Invest.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Invest)
