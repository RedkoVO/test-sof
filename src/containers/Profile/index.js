import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, withState, pure, lifecycle } from 'recompose'

import withDeviceTarget from '../../hocs/withDeviceTarget'

import { getProducts } from '../../redux/actions/profile'

import Profile from '../../components/Profile'

const mapStateToProps = state => ({
  products: state.profile.products,
})

export default compose(
  connect(mapStateToProps),
  withDeviceTarget,
  withHandlers({}),
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props

      dispatch(getProducts())
    }
  }),
  pure
)(Profile)
