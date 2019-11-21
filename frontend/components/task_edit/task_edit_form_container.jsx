import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deselectTask, updateTask } from '../../actions/task_actions';
import TaskEditForm from './task_edit_form';

const mapStateToProps = (state) => {
  return {
    tasks: state.entities.tasks,
    currentListId: state.ui.currentListId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deselectTask: (task) => dispatch(deselectTask(task)),
    updateTask: (list_id, task) => dispatch(updateTask(list_id, task))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskEditForm));
