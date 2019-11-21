import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import listsReducer from './lists_reducer';
import tasksReducer from './tasks_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  lists: listsReducer,
  tasks: tasksReducer
});

export default entitiesReducer;
