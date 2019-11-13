import * as APIUtil from './../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (user) => {
  return({
    type: RECEIVE_CURRENT_USER,
    user
  })
};

const signoutCurrentUser = () => ({
  type: SIGNOUT_CURRENT_USER
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signin = (user) => dispatch => {
  return APIUtil.signin(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};

export const signout = () => dispatch => {
  return APIUtil.signout().then(() => {
    return dispatch(signoutCurrentUser());
  });
};

export const signup = (user) => dispatch => {
  return APIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};