import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { withHandlers, withProps, pure } from 'recompose'

import Questions from '../../components/Questions'

const tmpQuestions = [
  {
    id: 1,
    question: 'Сколько буду жить?',
    user: 'christina.muratkina@gmail.com',
    date: '21.12.12',
    nature: 'вспыльчивый'
  },
  {
    id: 2,
    question:
      'Какая скорость света с учетом расширения вселенной относительно наблюдателя на расстоянии 5.67 световых лет?',
    user: 'christina.muratkina@gmail.com',
    date: '21.12.12',
    nature: 'вспыльчивый'
  }
]

const FORM_NAME = 'Answer'

export default compose(
  connect(),
  reduxForm({
    form: FORM_NAME
  }),
  withHandlers({
    onSubmit: ({ handleSubmit }) =>
      handleSubmit(variables => {
        console.log('variables', variables)
      })
  }),
  withProps(() => ({
    questions: tmpQuestions
  })),
  pure
)(Questions)
