const validate = values => {
  const errors = {}

  if (!values.amount) {
    errors.amount = 'error.required'
  } else if (!/^\d*\.?\d+(?:[Ee]?\d+)?$/.test(values.amount)) {
    errors.amount = 'error.cryptaurCoinDeposit'
  }

  return errors
}

export default validate
