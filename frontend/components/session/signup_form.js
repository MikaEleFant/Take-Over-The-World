import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.receiveSessionErrors([]);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  render() {
    const errorsList = this.props.errors.length > 0 ? 
      (<ul className="session-errors">{this.props.errors.map((error, idx) => (<li key={idx}>{error}</li>))} </ul>) : null
    return (
      <div className="signup">
        <section className="signup-main">
          <h1>Create New User</h1>
          {errorsList}
          <form  className="signup-form">
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
            <input 
              type="text" 
              value={this.state.name} 
              onChange={this.update('name')} 
              placeholder={'Name'}
            />
            <input 
              type="text" 
              value={this.state.email_address} 
              onChange={this.update('email')} 
              placeholder={'Email Address'}
            />
            
            <button onClick={this.handleSubmit}>SIGN UP</button>
          </form>
          <h2>Or, if you already have an account: <Link className="green-link" to={'/login'}>Sign In</Link></h2>
        </section>
      </div>
    )
  }

}

export default SignupForm;