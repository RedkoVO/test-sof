import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, withState, pure } from 'recompose'

import { getProductInfo } from '../../../../redux/actions/profile'

import ProductInfo from '../../../../components/ProductInfo'

const mapStateToProps = state => ({
  productInfo: state.profile.productInfo
})

export default compose(
  connect(mapStateToProps),
  withState('productInfo', 'setProductInfo', {}),
  withHandlers({
    handlerShowProductInfo: ({ setProductInfo, dispatch }) => id => {
      const data = { product_id: id }

      dispatch(getProductInfo(data))
        .then(res => {
          if (res && res.success) {
            setProductInfo(res.product_info)
          }
        })
        .catch(err => {
          console.log('ERROR product info:', err)
        })
    }
  }),
  pure
)(ProductInfo)
