import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  filterUsersBySoftDeleted,
  filterUsersByNotSoftDeleted,
  filterUsersByInput
} from '../reducers/users';
import * as UserActions from '../actions/UserActions';

import UserPanel from './UserPanel';
import DeletedUserPanel from './DeletedUserPanel';
import AddUserButton from './UpperPanel/AddUserButton';

@connect(({ users }) => ({
  users: filterUsersByNotSoftDeleted(users),
  softDeletedUsers: filterUsersBySoftDeleted(users)
}))
export default class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  state = {
    usersFilter: '',
    softDeletedUsersFilter: ''    
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { usersFilter, softDeletedUsersFilter } = this.state;
    const { dispatch, users, softDeletedUsers } = this.props;
    const actions = bindActionCreators(UserActions, dispatch);

    return (
      <main className="g-container">
        <section className="g-bottom-space">
          <AddUserButton
            addUser={actions.addUser}
            hasUsers={users.length !== 0} />
        </section>

        <div className="g-row">
          <UserPanel
            hasUsers={users.length !== 0}
            users={filterUsersByInput(users, usersFilter)}
            addUser={actions.addUser}
            softDeleteUser={actions.softDeleteUser}
            onUsersFilterInput={::this.handleUsersFilterInput} />

          <DeletedUserPanel
            hasUsers={softDeletedUsers.length !== 0}
            users={filterUsersByInput(softDeletedUsers, softDeletedUsersFilter)}
            restoreUser={actions.restoreUser}
            deleteUser={actions.deleteUser}
            handleSoftDeletedUsersFilterInput={::this.handleSoftDeletedUsersFilterInput} />
        </div>
      </main>
    );
  }

  handleUsersFilterInput(value) {
    this.setState({ usersFilter: value });
  }

  handleSoftDeletedUsersFilterInput(value) {
    this.setState({ softDeletedUsersFilter: value });
  }
}
