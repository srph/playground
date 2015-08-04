import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';

import { filterBySoftDeleted, filterByNotSoftDeleted } from '../reducers/users';
import * as UserActions from '../actions/UserActions';

import UserPanel from './UserPanel';
import DeletedUserPanel from './DeletedUserPanel';
import AddUserButton from './UpperPanel/AddUserButton';

export default class App extends Component {
  render() {
    return (
      <Connector select={({ users }) => ({ users })}>
        {({ users, dispatch }) => {
          const actions = bindActionCreators(UserActions, dispatch);

          return (
            <main className="g-container container">
              <section className="inner-container">
                <section className="g-bottom-space">
                  <AddUserButton
                    addUser={actions.addUser}
                    hasUsers={users.length !== 0} />
                </section>

                <div className="g-row">
                  <UserPanel
                    users={filterByNotSoftDeleted(users)}
                    addUser={actions.addUser}
                    softDeleteUser={actions.softDeleteUser} />

                  <DeletedUserPanel
                    users={filterBySoftDeleted(users)}
                    restoreUser={actions.restoreUser}
                    deleteUser={actions.deleteUser} />
                </div>
              </section>  
            </main>
          );
        }}
      </Connector>
    );
  }
}
