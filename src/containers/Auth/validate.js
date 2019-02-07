const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'error.required'
  }

  if (!values.pass) {
    errors.pass = 'error.required'
  }

  return errors
}

export default validate
