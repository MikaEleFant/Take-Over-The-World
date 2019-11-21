import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { removeErrors } from '../../actions/session_actions.js';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitDemo = this.handleSubmitDemo.bind(this);
  }

  handleSubmitDemo(e) {
    e.preventDefault();
    const demoUser = {username: "guest", password: "guest_password"};
    this.props.demoLogin(demoUser);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {

    const linkText = this.props.navLink === "login" ? "Log in" : "Sign up";

    return (
      <div className="login-form-container">
        <Link onClick={this.props.clearErrors} className={`${this.props.navLink}-link`} to={`/${this.props.navLink}`}>{linkText}</Link>

        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form">

            {this.props.message}
            {this.renderErrors()}

            <label>
              <input type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.update('username')}
                className="login-input"
              />
            </label>

            <label>
              <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <input className="session-submit" type="submit" value={this.props.formType} />

            <div onClick={this.handleSubmitDemo} className="login-demo-form-box">
              <input className="session-demo-submit" type="submit" value="Demo Login" />
            </div>

          </div>
        </form>
      </div>
    );
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default withRouter(SessionForm);
