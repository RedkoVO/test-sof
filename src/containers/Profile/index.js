import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, withState, lifecycle, pure } from 'recompose'

import withDeviceTarget from '../../hocs/withDeviceTarget'

import { getProducts } from '../../redux/actions/profile'

import Profile from '../../components/Profile'

const mapStateToProps = state => ({
  products: state.profile.products
})

export default compose(
  connect(mapStateToProps),
  withDeviceTarget,
  withState('paymentQuestionData', 'setPaymentQuestionData', {}),
  withHandlers({
    handlerPaymentPopup: ({ setPaymentQuestionData }) => question => {
      setPaymentQuestionData(question)
    },

    handlerPaymentClose: ({ setPaymentQuestionData }) => () => {
      setPaymentQuestionData({})
    }
  }),
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props
      dispatch(getProducts())
    }
  }),
  pure
)(Profile)
