import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Session from './session/session';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';
import { AuthRoute } from '../util/route_util'

const App = () => (
  <div className="app">
    <Modal/>
    <Switch>
      <AuthRoute exact path="/login" component={Session}/>
      <AuthRoute exact path="/signup" component={Session}/>
      <Route path="/" component={GreetingContainer}/>
    </Switch>
  </div>
);

export default App;
