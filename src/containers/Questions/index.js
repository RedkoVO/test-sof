import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { lifecycle, pure } from 'recompose'

import { getQuestions } from '../../redux/actions/questions'

import Questions from '../../components/Questions'

const mapStateToProps = state => ({
  questionsList: state.questions.questions
})

export default compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props
      dispatch(getQuestions())
    }
  }),
  pure
)(Questions)
