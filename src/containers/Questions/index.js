import compose from 'recompose/compose'
import { withProps, pure } from 'recompose'

import Questions from '../../components/Questions'

const tmpQuestions = [
  {
    id: 1,
    question: 'Сколько буду жить?',
    user: 'christina.muratkina@gmail.com',
    date: '21.12.12',
    answer: '---',
    nature: 'вспыльчивый'
  },
  {
    id: 2,
    question:
      'Какая скорость света с учетом расширения вселенной относительно наблюдателя на расстоянии 5.67 световых лет?',
    user: 'christina.muratkina@gmail.com',
    date: '21.12.12',
    answer: '---',
    nature: 'вспыльчивый'
  }
]

export default compose(
  withProps(() => ({
    questions: tmpQuestions
  })),
  pure
)(Questions)
