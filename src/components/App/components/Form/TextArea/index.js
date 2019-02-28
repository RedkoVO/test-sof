import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const TextArea = ({ input, id, className, name, placeholder, meta: { touched, error } }) => {
  const wpInput = cn(className, { 'input-error': touched && error })

  return (
    <textarea
      {...input}
      id={id}
      name={name}
      className={wpInput}
      placeholder={placeholder}
    />
  )
}

TextArea.propTypes = {
  classNamees: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string
}

export default TextArea