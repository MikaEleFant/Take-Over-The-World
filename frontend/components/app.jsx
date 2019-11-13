import React from 'react';
import { Switch } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute } from './../util/route_util';
import SplashContainer from './session/splash_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;