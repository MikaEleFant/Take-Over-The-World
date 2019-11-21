import merge from 'lodash/merge';

import { RECEIVE_TASKS, RECEIVE_TASK, REMOVE_TASK } from '../actions/task_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TASKS:
      return merge({}, action.tasks);
    case RECEIVE_TASK:
      return merge({}, state, { [action.task.id]: action.task });
    case REMOVE_TASK:
      let newState = merge({}, state);
      delete newState[action.task_id];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default tasksReducer;
