import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/root_reducer';

const middlewares = [thunk];
export const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(e) {
    console.log(e);
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }
  } catch(e) {
    console.log(e);
    return undefined;
  }
}

let persistedState = loadFromLocalStorage();

export const configureStore = (preloadedState = {}) => {
  if (preloadedState !== {}) {
    persistedState = Object.assign({}, preloadedState, persistedState);
  }

  return createStore(
    rootReducer,
    persistedState,
    applyMiddleware(...middlewares)
  )
};
