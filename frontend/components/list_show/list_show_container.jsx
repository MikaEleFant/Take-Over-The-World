import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListShow from './list_show';
import { createTask, fetchTasks, deselectTask, deselectAllTasks, deleteTask, updateTask, removeTaskFormId } from '../../actions/task_actions';
import { fetchLists } from '../../actions/list_actions';

const mapStateToProps = ({entities: { tasks }, session, entities: { lists }, ui: {selectedTasks, currentListId, closeTaskFormIds}}, ownProps) => {

  const currentList = lists[currentListId];
  const currentTasks = [];

  if (currentList) {
    currentList.task_ids.forEach(id => {
      if (tasks[id]) {
        currentTasks.push(tasks[id]);
      }
    })
  }

  return {
    currentUserId: session.id,
    currentList,
    currentTasks,
    tasks,
    selectedTasks,
    closeTaskFormIds
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTask: (list_id, task) => dispatch(createTask(list_id, task)),
    fetchTasks: (options) => dispatch(fetchTasks(options)),
    fetchLists: (user_id) => dispatch(fetchLists(user_id)),
    deselectTask: (task) => dispatch(deselectTask(task)),
    deselectAllTasks: () => dispatch(deselectAllTasks()),
    deleteTask: (list_id, task_id) => dispatch(deleteTask(list_id, task_id)),
    updateTask: (list_id, task) => dispatch(updateTask(list_id, task)),
    setCurrentList: (list_id) => dispatch(setCurrentList(list_id)),
    removeTaskFormId: () => dispatch(removeTaskFormId())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListShow));
