import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Session from './session/session';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';

const App = () => (
  <div className="app">
    <Modal/>
    <Switch>
      <Route exact path="/login" component={Session}/>
      <Route exact path="/signup" component={Session}/>
      <Route path="/" component={GreetingContainer}/>
    </Switch>
  </div>
);

export default App;
