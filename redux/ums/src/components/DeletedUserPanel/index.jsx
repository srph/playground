import React, { PropTypes } from 'react';

import Empty from './Empty';
import SearchInput from './SearchInput';
import UserRestoreButton from './UserRestoreButton';
import UserDeleteButton from './UserDeleteButton';

export default class DeletedUserPanel extends React.Component {
  static propTypes = {
    hasUsers: PropTypes.bool.isRequired,
    /**
     * Soft-deleted users
     */
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    restoreUser: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    handleSoftDeletedUsersFilterInput: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { hasUsers } = this.props;

    return (
      <section className="g-col-6">
        <div className="panel">
          {!hasUsers ? <Empty /> : this.renderList()}
        </div>
      </section>
    );
  }

  renderList() {
    const {
      users,
      deleteUser,
      restoreUser,
      handleSoftDeletedUsersFilterInput
    } = this.props;

    return (
      <section>
        <h1 className="special-heading">Archived Users</h1>
        <SearchInput
          hasFilteredUsers={users.length !== 0}
          handleSoftDeletedUsersFilterInput={handleSoftDeletedUsersFilterInput} />
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
