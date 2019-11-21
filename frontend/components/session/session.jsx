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
          "Taking over the world is not an easy task.
          That's why we need to carefully plan each move.
          This is where we begin.
          A to-do list of everything needed to take over the world.
          And also cats. Specifically kittens.
          And perhaps teacup pigs. With some memes.
          Uh...............
          On second thought, just the cats."
        </p>
        <p className="quote-author">
          - Chang, Future Ruler of the World Via Cat Takeovers and Meme Domination
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
