import * as APIUtil from '../util/list_api_util';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const SET_CURRENT_LIST = 'SET_CURRENT_LIST';
export const RECEIVE_LIST_ERRORS = 'RECEIVE_LIST_ERRORS';
export const REMOVE_LIST_ERRORS = 'REMOVE_LIST_ERRORS';

export const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  lists
});

export const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

export const removeList = list_id => ({
  type: REMOVE_LIST,
  list_id
});

export const setCurrentList = list_id => ({
  type: SET_CURRENT_LIST,
  list_id
});

export const receiveErrors = errors => ({
  type: RECEIVE_LIST_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_LIST_ERRORS
});

export const createList = (user_id, list) => dispatch => (
  APIUtil.createList(user_id, list).then(list => (
    dispatch(receiveList(list))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateList = (user_id, list) => dispatch => {
  return APIUtil.updateList(user_id, list).then(list => (
    dispatch(receiveList(list))
  ), error => console.log(error.responesJSON)
  )
};

export const fetchLists = (user_id) => dispatch => (
  APIUtil.fetchLists(user_id).then(lists => (
    dispatch(receiveLists(lists))
  ))
);

export const deleteList = (user_id, list_id) => dispatch => (
  APIUtil.removeList(user_id, list_id).then(list => (
    dispatch(removeList(list.id))
  ))
);
