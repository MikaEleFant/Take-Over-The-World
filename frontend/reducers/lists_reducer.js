import merge from 'lodash/merge';
import { RECEIVE_TASK, REMOVE_TASK } from '../actions/task_actions';

import { RECEIVE_LISTS, RECEIVE_LIST, REMOVE_LIST } from '../actions/list_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_LISTS:
      // const lists= {};
      // action.lists.forEach(list => {
      //   lists[list.id] = list;
      // });
      // return lists;
      return merge({}, state, action.lists);
    case RECEIVE_LIST:
      return merge({}, state, { [action.list.id]: action.list });
    case REMOVE_LIST:
      newState = merge({}, state);
      delete newState[action.list_id];
      return newState;
    case RECEIVE_TASK:
      newState = merge({}, state);

      const taskIdsOfList = newState[action.task.list_id].task_ids;
      taskIdsOfList.splice(taskIdsOfList.indexOf(action.task.id), 1);
      taskIdsOfList.push(action.task.id);

      return newState;
    case REMOVE_TASK:
      newState = merge({}, state);
      let listTaskIds = newState[action.task.list_id].task_ids;
      listTaskIds.splice(listTaskIds.indexOf(action.task.id), 1);
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default listsReducer;
