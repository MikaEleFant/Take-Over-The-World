import { connect } from 'react-redux';
import React from 'react';
import { login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'Log in',
    message: <h3>Already a user? Log In!</h3>,
    navLink: "signup"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => {
      dispatch(removeErrors())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
