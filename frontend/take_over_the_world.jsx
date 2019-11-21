import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import { login, logout, signup } from './actions/session_actions';
import { createList, removeList } from './util/list_api_util'; //For testing
import { saveToLocalStorage, configureStore } from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    store.subscribe(() => saveToLocalStorage(store.getState()));
    delete window.currentUser;
  } else {
    store = configureStore();
    store.subscribe(() => saveToLocalStorage(store.getState()));
  }

  ReactDOM.render(<Root store={store}/>, root);
})
