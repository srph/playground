import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { filterUsersBySoftDeleted, filterUsersByNotSoftDeleted } from '../reducers/users';
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

  constructor(props, context) {
    super(props, context);
  }

  render() {
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
            users={users}
            addUser={actions.addUser}
            softDeleteUser={actions.softDeleteUser} />

          <DeletedUserPanel
            users={softDeletedUsers}
            restoreUser={actions.restoreUser}
            deleteUser={actions.deleteUser} />
        </div>
      </main>
    );
  }
}
