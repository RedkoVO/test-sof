import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withProps, lifecycle, pure } from 'recompose'

import { getQuestions } from '../../redux/actions/questions'

import Questions from '../../components/Questions'

// const tmpQuestions = [
//   {
//     id: 1,
//     question: 'Сколько буду жить?',
//     user: 'christina.muratkina@gmail.com',
//     date: '21.12.12',
//     nature: 'вспыльчивый'
//   },
//   {
//     id: 2,
//     question:
//       'Какая скорость света с учетом расширения вселенной относительно наблюдателя на расстоянии 5.67 световых лет?',
//     user: 'christina.muratkina@gmail.com',
//     date: '21.12.12',
//     nature: 'вспыльчивый'
//   }
// ]

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
  // withProps(() => ({
  //   questions: tmpQuestions
  // })),
  pure
)(Questions)
