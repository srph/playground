import React, { PropTypes } from 'react';

import Empty from './Empty';
import SearchInput from './SearchInput';
import UserSoftDeleteButton from './UserSoftDeleteButton';

export default class UserPanel extends React.Component {
  static propTypes = {
    hasUsers: PropTypes.bool.isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    addUser: PropTypes.func.isRequired,
    softDeleteUser: PropTypes.func.isRequired,
    onUsersFilterInput: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { hasUsers, users, addUser } = this.props;

    return (
      <section className="g-col-6">
        <div className="panel">
          {
            !hasUsers
              ? <Empty addUser={addUser} />
              : this.renderList()
          }
        </div>
      </section>
    );
  }

  renderList() {
    const {
      users,
      softDeleteUser,
      onUsersFilterInput
    } = this.props;

    return (
      <section>
        <h1 className="special-heading">Users</h1>
        <SearchInput onUsersFilterInput={onUsersFilterInput} />
        {users.map((user, i) => {
          return (
            <section className="g-row g-bottom-space" key={i}>
              <section className="g-col-6">{user.username}</section>
              <section className="g-col-6">
                <UserSoftDeleteButton
                  userId={user.id}
                  softDeleteUser={softDeleteUser} />
              </section>
            </section>
          );
        })}
      </section>
    );
  }
}
