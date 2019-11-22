import React from 'react';
import ReactDOM from 'react-dom';
import ListFormContainer from '../list_form/list_form_container';
import { Redirect } from 'react-router-dom';

class ListSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showListOptions: null
    }

    this.toggleListOptions = this.toggleListOptions.bind(this);
    this.handleDeleteList = this.handleDeleteList.bind(this);
    this.handleShowList = this.handleShowList.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    this.props.fetchLists(this.props.currentUserId);
  }

  componentDidUpdate() {
    if (this.state.showListOptions) {
      document.addEventListener('mousedown', this.handleClick, false);
    } else {
      document.removeEventListener('mousedown', this.handleClick, false);
    }
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.showListOptions && this.node.contains(e.target)) {
      return;
    }
    this.handleClickOutside();
  }

  handleClickOutside() {
    if (this.state.showListOptions) {
      this.setState({
        showListOptions: null
      });
    }
  }

  toggleListOptions(list_id) {

    if (this.state.showListOptions) {
      this.setState({
        showListOptions: null
      });
    } else {
      this.setState({
        showListOptions: list_id
      });
    }
  }

  handleDeleteList(e, list_user_id, list_id) {
    e.preventDefault();
    this.props.deleteList(list_user_id, list_id).then(() => {
      this.props.history.push('/');
    })
  }

  handleShowList(e, list_id) {
    e.preventDefault();

    this.props.setCurrentList(list_id);
    this.props.history.push(`/lists/${list_id}`);
  }

  render() {
    const { lists } = this.props;
    return (
      <div className="sidebar">

        <div className="all-lists">
          <ul>
            <li>
              <i className="material-icons md-17 drop-down-icon">arrow_drop_down</i>
              Lists
              <i className="material-icons md-12 lists-options-icon">arrow_drop_down_circle</i>
              <i onClick={() => this.props.openModal('Add')} className="material-icons md-14 add-box-icon">add_box</i>

            </li>
            {
              this.props.lists.map(list => (
                <li onClick={(e) => this.handleShowList(e, list.id)} key={list.id}>
                  {list.title}
                  <i onClick={() => this.toggleListOptions(list.id)} className="material-icons md-14 list-options-icon">arrow_drop_down_circle</i>
                    {
                      this.state.showListOptions === list.id
                        ? (
                          <div className='list-options' ref={node => this.node = node}>
                            <ul>
                              <li onClick={() => this.props.openModal('Save', {selectedListId: list.id})}>Rename list</li>
                              <li onClick={(e) => this.handleDeleteList(e, list.user_id, list.id)}>Remove list</li>
                            </ul>
                          </div>
                        )
                        : (
                          null
                        )
                    }
                </li>
              ))
            }
          </ul>
        </div>

        {
          this.state.showListForm
            ? (
              <ListFormContainer/>
            )
            : (
              null
            )
        }



      </div>
    );
  }
}

export default ListSidebar;
