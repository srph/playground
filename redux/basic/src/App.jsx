import React, { PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as UserActions from './actions/UserActions';

import AddUserForm from './components/AddUserForm';

class App extends React.Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  };

  render() {
    console.log(this.props.users);

    return (
      <div>
        {this.renderUsers()}
        
        <AddUserForm onAddUser={::this.handleAddUser} />
      </div>
    );
  }

  renderUsers() {
    const { users } = this.props;
    return !users.length
      ? <div> Sorry, but it's empty, noob. </div>
      : users.map((user, i) => {
          return (
          <div key={i}>
            #{i} - {user.username} <button onClick={this.handleRemoveUser(i)}>x</button>
          </div>
        );
      });
  }

  handleAddUser(username) {
    this.props.addUser(username);
  }

  handleRemoveUser(i) {
    return () => {
      this.props.removeUser(i);
    };
  }
}

export default connect(
  state => state,
  dispatch => bindActionCreators(UserActions, dispatch)
)(App);