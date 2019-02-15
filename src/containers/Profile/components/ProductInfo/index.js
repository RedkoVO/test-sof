import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, withState, pure } from 'recompose'
import isEmpty from 'lodash/isEmpty'

import { getProductInfo } from '../../../../redux/actions/profile'

import ProductInfo from '../../../../components/ProductInfo'

const mapStateToProps = state => ({
  productInfo: state.profile.productInfo
})

export default compose(
  connect(mapStateToProps),
  withState('productInfo', 'setProductInfo', {}),
  withState('isSpinner', 'setSpinner', false),
  withHandlers({
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
    }
  }),
  pure
)(ProductInfo)
