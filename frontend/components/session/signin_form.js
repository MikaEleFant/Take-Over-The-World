import React from 'react';
import { withRouter } from "react-router-dom";

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.receiveSessionErrors([]);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signin(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  goToSignup() {
    window.location.hash = "#/signup";
  }

  render() {
    const errorsList = this.props.errors.length > 0 ?
      (<ul className="session-errors">{this.props.errors.map((error, idx) => (<li key={idx}>{error}</li>))} </ul>) : null
    return (
      <div className="signin">
        <section className="signin-main">
          <h1>Please sign in.</h1>
          {errorsList}
          <form className="signin-form">
            <input 
              type="text" 
              value={this.state.username} 
              placeholder={'Username'} 
              onChange={this.update('username')} 
            />
            <input 
              type="password" 
              value={this.state.password} 
              onChange={this.update('password')} 
              placeholder={'Password'} 
            />

            <button onClick={this.handleSubmit}>SIGN IN</button>
          </form>
          <h1>Don't have an account?</h1>
          <div className="to-signup-button">
            <button onClick={this.goToSignup}>SIGN UP</button>
          </div>
        </section>
      </div>
    )
  }
}
export default withRouter(SigninForm);