import React, { PropTypes } from 'react';

import Empty from './Empty';
import UserRestoreButton from './UserRestoreButton';
import UserDeleteButton from './UserDeleteButton';

export default class UserPanel extends React.Component {
  static propTypes = {
    /**
     * Soft-deleted users
     */
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    restoreUser: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { users } = this.props;

    return (
      <section className="g-col-6">
        <div className="panel">
          {
            users.length === 0
              ? <Empty />
              : this.renderList()
          }
        </div>
      </section>
    );
  }

  renderList() {
    const { users, deleteUser, restoreUser } = this.props;

    return (
      <section>
        <h1 className="special-heading">Archived Users</h1>
        {users.map((user, i) => {
          return (
            <section className="g-row g-bottom-space" key={i}>
              <div className="g-col-6">{user.username}</div>
              <div className="g-col-6">
                <UserRestoreButton
                  userId={user.id}
                  restoreUser={restoreUser} />
                  
                <UserDeleteButton
                  userId={user.id}
                  deleteUser={deleteUser} />
              </div>
            </section>
          );
        })}
      </section>
    );
  }
}
