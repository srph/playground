import React, { PropTypes } from 'react';

import Empty from './Empty';
import UserDeleteButton from './UserDeleteButton';

export default class UserPanel extends React.Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    addUser: PropTypes.func.isRequired,
    softDeleteUser: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { users, addUser, softDeleteUser } = this.props;

    return (
      <section className="g-col-6">
        <div className="panel">
          { users.length === 0
            ? <Empty addUser={addUser} />
            : this.renderList()
          }
        </div>
      </section>
    );
  }

  renderList() {
    const { users, softDeleteUser } = this.props;

    return users.map((user, i) => {
      return (
        <section className="g-row" key={i}>
          <section className="g-col-6">{user.username}</section>
          <section className="g-col-6">
            <UserDeleteButton
              userId={user.id}
              softDeleteUser={softDeleteUser} />
          </section>
        </section>
      );
    });
  }
}
