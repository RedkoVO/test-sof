import React, { Component } from 'react'

class ConfirmEmail extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.history.push('/en/web/')
    }, 5000)
  }

  componentWillUnmount() {
    if(this.timer){
      clearTimeout(this.timer);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="register-in-propgress-message">
          Welcome to Cryptaur Games!<br />
          Email was confirm!
        </div>
      </div>
    )
  }
}

export default ConfirmEmail