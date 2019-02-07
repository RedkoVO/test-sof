import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { lifecycle, pure } from 'recompose'

import { confirmRegistration } from '../../redux/actions/auth'

import ConfirmEmail from '../../components/ConfirmEmail'

export default compose(
  connect(),
  lifecycle({
    componentDidMount() {
      const { match, dispatch } = this.props

      if (match.params.code && match.params.userId) {
        const data = {
          code: match.params.code,
          userId: match.params.userId,
          referral: match.params.referral ? match.params.referral : ''
        }

        dispatch(confirmRegistration(data)).then(res => {
          if (res && res.success) {
            localStorage.setItem('token', res.token)

            this.timer = setTimeout(() => {
              this.props.history.push('/en/web/')
            }, 5000)
          }
        })
      }
    },
    componentWillUnmount() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    }
  }),
  pure
)(ConfirmEmail)
