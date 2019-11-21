import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ListFormContainer from '../list_form/list_form_container';
import { removeErrors } from '../../actions/list_actions';

function Modal({modal, closeModal, clearErrors}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'Add':
    case 'Save':
      component = <ListFormContainer instruction={modal}/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={() => {
        closeModal();
        clearErrors();
      }}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(removeErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
