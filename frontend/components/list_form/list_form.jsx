import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      id: this.props.selectedListId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const list = Object.assign({}, this.state);
    this.props.processForm(this.props.currentUserId, list, this.props.instruction);
    this.props.clearErrors();
  }

  handleCloseModal(e) {
    e.preventDefault();
    this.props.closeModal();
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit} className="list-form-box">
        <i onClick={this.handleCloseModal} className="material-icons cancel-icon">cancel</i>

        <h1>Add a List</h1>

        {this.renderErrors()}

        <label>
          Please enter a new list name:
          <input type="text"
            value={this.state.title}
            onChange={this.update('title')}
          />
        </label>

        <div className='list-form-buttons'>
          <input type="submit" value={this.props.instruction}/>
          <div onClick={this.handleCloseModal}>
            Cancel
          </div>
        </div>
      </form>
    );
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default ListForm;
