import React from 'react';
import SigninFormContainer from '../session/signin_form_container';
import SignupFormContainer from '../session/signup_form_container';
import { AuthRoute } from '../../util/route_util';

const Session = () => (
  <div className="authentication">
    <div className="authentication-left">
      <div className="splash-text">
        <p>Come join me and hundreds of others around the world!</p>
        <p>Assist us with our diabolical plans to take over the world!</p>
        <p>We offer free cookies and milk!</p>
        <p>Together, we can make the internet the true home of all kittens,</p>
        <p>and, by joining hands with Elon Musk, we can make catgirls roam the Earth!</p>
      </div>
    </div>
    <div className="authentication-right">
      <AuthRoute exact path="/signin" component={SigninFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </div>
  </div>
);

export default Session;