import React from 'react';
import { Redirect } from 'react-router-dom';
import ListSidebarContainer from '../dropdown/list_sidebar_container';
import ListShowContainer from '../list_show/list_show_container';
import { Route } from 'react-router-dom';
import TaskEditFormContainer from '../task_edit/task_edit_form_container';


class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSidebar: true,
      showSettings: false
    }

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleSettings = this.toggleSettings.bind(this);
  }

  toggleSidebar(e) {
    e.preventDefault();

    if (this.state.showSidebar) {
      this.setState({
        showSidebar: false
      });
    } else {
      this.setState({
        showSidebar: true
      });
    }
  }

  toggleSettings(e) {
    e.preventDefault();

    if (this.state.showSettings) {
      this.setState({
        showSettings: false
      });
    } else {
      this.setState({
        showSettings: true
      });
    }
  }

  sessionLinks() {
    return (
      <Redirect to="/login" />
    );
  }

  appPage() {
    return (
      <div className="main-page">

        <header className="main-nav">
          <nav className="left-nav">
            <i onClick={this.toggleSidebar} className="material-icons menu-icon">menu</i>
          </nav>

          <nav className="right-nav">
            <ul>
              <li>
                <a href="https://linkedin.com/in/sohi-kim">
                  <img className="linkedin-logo" src="/linkedin-logo.png"/>
                </a>
              </li>
              <li>
                <a href="https://github.com/skycue">
                  <img className="github-logo" src="/github-logo.png"/>
                </a>
              </li>
              <li className="gear-dropdown-btn">
                <i onClick={this.toggleSettings} className="material-icons gear-icon">settings</i>
              </li>

              {
                this.state.showSettings
                  ? (
                    <div className="settings">
                      <ul>
                        <button className="logout-button" onClick={this.props.logout}>Log Out</button>
                      </ul>
                    </div>
                  )
                  : (
                    null
                  )
              }
            </ul>
          </nav>
        </header>

        <div className="main-content">
          {
            this.state.showSidebar
              ? (
                <ListSidebarContainer />
              )
              : (
                null
              )
          }

          <Route path="/lists/:list_id" component={ListShowContainer}/>

          {
            this.props.currentListId
              ? (
                <Route path="/lists/:list_id/tasks/:task_id" component={TaskEditFormContainer}/>
              )
              : (
                null
              )
          }


        </div>

      </div>
    );
  }

  render() {

    return (
      <div>
        {
          this.props.currentUser
            ? (
              <div>
                {this.appPage()}
              </div>
            )
            : (
              <div>
                {this.sessionLinks()}
              </div>
            )
        }
      </div>
    );
  }
}

export default Greeting;
