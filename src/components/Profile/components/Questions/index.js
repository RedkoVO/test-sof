import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import ProductInfo from '../../../../containers/Profile/components/ProductInfo'

import styles from './styles'

const Questions = ({ classes, questions, handlerShowProductInfo }) => (
  <div className={classes.root}>
    {questions.map(item => (
      <ProductInfo
        key={item.id}
        question={item}
        // handlerShowProductInfo={handlerShowProductInfo}
      />
    ))}
  </div>
)

Questions.propTypes = {
  classes: PropTypes.object,
  questions: PropTypes.array,
  handlerShowProductInfo: PropTypes.func
}

export default withStyles(styles)(Questions)
