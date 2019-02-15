import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import ProductInfo from '../../../../containers/Profile/components/ProductInfo'

import styles from './styles'

const Questions = ({ classes, questions }) => (
  <div className={classes.root}>
    {questions.map((item, index) => (
      <ProductInfo key={item.id} question={item} index={index + 1} />
    ))}
  </div>
)

Questions.propTypes = {
  classes: PropTypes.object,
  questions: PropTypes.array
}

export default withStyles(styles)(Questions)
