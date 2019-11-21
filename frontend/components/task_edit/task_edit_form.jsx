import React from 'react';

class TaskEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(this.props.match.params.task_id),
      title: this.props.tasks[parseInt(this.props.match.params.task_id)].title,
      complete: this.props.tasks[parseInt(this.props.match.params.task_id)].complete
    };

    this.editTask = this.editTask.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.task_id != this.props.match.params.task_id) {
      this.setState({ title: this.props.tasks[parseInt(this.props.match.params.task_id)].title})
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  editTask(e) {
    e.preventDefault();
    const task = Object.assign({}, this.state);
    this.props.updateTask(parseInt(this.props.match.params.list_id), task);
  }

  handleCloseForm(e) {
    e.preventDefault();
    this.props.history.push(`/lists/${this.props.currentListId}`)
  }

  render() {
    return (
      <form onSubmit={this.editTask} className="task-edit-form">
        <div onClick={this.handleCloseForm} className="task-edit-close">
          close
          <i className="material-icons close-icon">close</i>
        </div>

        <input className="task-edit-input"
          type="text"
          onChange={this.update("title")}
          value={this.state.title}
        />
      </form>

    );
  }
}

export default TaskEditForm;
