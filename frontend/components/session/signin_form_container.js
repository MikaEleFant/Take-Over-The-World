import { connect } from 'react-redux';
import { signin receiveSessionErrors } from './../../actions/session_actions';
import SigninForm from './signin_form';

const mapStateToProps = (state, ownProps) => {
  let errors = [];
  if (state.errors.session.errors) {
    errors = state.errors.session.errors;
  }
  return ({
    errors: errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  signin: (user) => dispatch(signin(user)),
  receiveSessionErrors: (errors) => dispatch(receiveSessionErrors(errors))
});


export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);