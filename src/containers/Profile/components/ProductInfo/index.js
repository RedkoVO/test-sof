import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, lifecycle, pure } from 'recompose'

import { getProductInfo } from '../../../../redux/actions/profile'

import ProductInfo from '../../../../components/ProductInfo'

const mapStateToProps = state => ({
  productInfo: state.profile.productInfo
})

export default compose(
  connect(mapStateToProps),
  withHandlers({
    handlerShowProductInfo: ({ dispatch }) => id => {
      const data = { product_id: id }

      dispatch(getProductInfo(data))
    }
  }),
  // lifecycle({
  //   componentDidMount() {
  //     const { dispatch, id } = this.props

  //     console.log('id', id)

  //   }
  // }),
)(ProductInfo)
