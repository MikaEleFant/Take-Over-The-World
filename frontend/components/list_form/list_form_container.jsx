import { connect } from 'react-redux';
import { createList, updateList, removeErrors } from '../../actions/list_actions';
import ListForm from './list_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors.list,
    currentUserId: state.session.id,
    selectedListId: state.ui.selectedListId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (currentUserId, list, instruction) => {
      if (instruction == 'Add') {
        return dispatch(createList(currentUserId, list))
      } else if (instruction == 'Save') {
        return dispatch(updateList(currentUserId, list))
      }
    },
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(removeErrors())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
