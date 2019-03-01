import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import { withHandlers, pure } from 'recompose'

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
        console.log('variables', variables)

        dispatch(reset(`${FORM_NAME}-${id}`))
      })
  }),
  pure
)(QuestionTextForm)
