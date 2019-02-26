import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withState, withHandlers, lifecycle, pure } from 'recompose'

import withDeviceTarget from '../../hocs/withDeviceTarget'

import { checkAuth, logout } from '../../redux/actions/auth'

import Header from '../../components/Header/'

const mapStateToProps = state => ({
  checkAuthState: state.auth.checkAuth
})

export default compose(
  connect(mapStateToProps),
  withDeviceTarget,
  withState('isShow', 'setIsShow', false),
  withHandlers({
    handleLogout: ({ dispatch, history }) => () => {
      localStorage.removeItem('token')
      dispatch(logout())
        .then(res => {
          if (res && res.success) {
            dispatch(checkAuth())
          }
        })
        .catch(err => {
          console.log('Error logout:', err)
        })

      history.push('/en/web/')
    },

    handleCloseModal: ({ setIsShow, isShow }) => () => {
      setIsShow(!isShow)
    }
  }),
  lifecycle({
    componentDidUpdate(prevProps) {
      const { isAuth, setIsShow } = this.props

      if (prevProps.isAuth !== isAuth) {
        if (isAuth) {
          setIsShow(false)
        } else {
          setIsShow(true)
        }
      }
    }
  }),
  pure
)(Header)
