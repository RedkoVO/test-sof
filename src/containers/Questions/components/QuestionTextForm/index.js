import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import { withHandlers, pure } from 'recompose'

import { postAnswer, getQuestions } from '../../../../redux/actions/questions'

import QuestionTextForm from '../../../../components/Questions/components/QuestionTextForm'

const FORM_NAME = 'Answer'

const mapStateToProps = (state, ownProps) => {
  return {
    form: `${FORM_NAME}-${ownProps.id}`
  }
}

export default compose(
  connect(mapStateToProps),
  reduxForm(),
  withHandlers({
    onSubmit: ({ handleSubmit, dispatch, id }) =>
      handleSubmit(variables => {
        const data = {
          answer_id: id,
          answer_text: `${variables.answer}-${id}`
        }

        dispatch(postAnswer(data))
          .then(res => {
            if (res.success) {
              dispatch(reset(`${FORM_NAME}-${id}`))
              dispatch(getQuestions())
            }
          })
          .catch(err => {
            console.log('Error askQuestion', err)
          })
      })
  }),
  pure
)(QuestionTextForm)
