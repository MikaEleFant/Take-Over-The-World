import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import { AuthRoute } from '../../util/route_util';

const Session = () => (
  <div className="authentication">

    <div className="authentication-left">

      <div className="quote-logo-container">
        <p className="quote">
          “You have brains in your head.
          You have feet in your shoes.
          You can steer yourself
          any direction you choose.”
        </p>
        <p className="quote-author">
          - Dr. Seuss, Oh, The Places You'll Go!
        </p>
      </div>
    </div>

    <div className="authentication-right">

      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

    </div>

  </div>
);





export default Session;
