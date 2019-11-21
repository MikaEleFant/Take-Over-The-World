import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import list from './list_errors_reducer';

export default combineReducers({
  session,
  list
});
