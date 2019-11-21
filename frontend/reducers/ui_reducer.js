import { OPEN_MODAL } from '../actions/modal_actions';
import { SET_CURRENT_LIST } from '../actions/list_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { SELECT_TASK, DESELECT_TASK, DESELECT_ALL_TASKS, REMOVE_TASK, SET_CURRENT_TASK_FORM,
  CLOSE_TASK_FORM, REMOVE_TASK_FORM_ID } from '../actions/task_actions';

export default function uiReducer(state = {selectedTasks: [], closeTaskFormIds: []}, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, action.options);
    case SET_CURRENT_LIST:
      return Object.assign({}, state, {currentListId: action.list_id})
    case SELECT_TASK:
      state.selectedTasks.push(action.task.id);
      return Object.assign({}, state);
    case SET_CURRENT_TASK_FORM:
      state.closeTaskFormIds.push(action.task.id);
      return Object.assign({}, state, {currentTaskFormId: action.task.id});
    case DESELECT_ALL_TASKS:
      return Object.assign({}, state, {selectedTasks: []})
    case REMOVE_TASK_FORM_ID:
      if (state.closeTaskFormIds[0] === state.closeTaskFormIds[1]) {
        state.closeTaskFormIds.splice(0, 2);
      } else {
        state.closeTaskFormIds.splice(0, 1);
      }
      return Object.assign({}, state);
    case CLOSE_TASK_FORM:
      return Object.assign({}, state, {closeTaskFormId: action.task.id})
    case DESELECT_TASK:
      const taskIndex = state.selectedTasks.indexOf(action.task.id);
      if (taskIndex >= 0) {
        state.selectedTasks.splice(state.selectedTasks.indexOf(action.task.id), 1);
      }
      return Object.assign({}, state);
    case LOGOUT_CURRENT_USER:
      return {selectedTasks: [], closeTaskFormIds: []};
    default:
      return state;
  }
}
