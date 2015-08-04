import React, { PropTypes } from 'react';

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
    const { users, softDeleteUser } = this.props;

    return (
      <section className="g-col-6">
        <div className="panel">
          {users.length === 0 ? this.renderEmpty() : this.renderList()}
        </div>
      </section>
    );
  }

  renderList() {
    return this.props.users.map((user, i) => {
      return (
        <section className="g-row" key={i}>
          <div className="g-col-6">{user.username}</div>
          <div className="g-col-4">
            <button className="btn -danger">Delete</button>
            <button className="btn -info">Restore</button>
          </div>
        </section>
      );
    });
  }

  renderEmpty() {
    return (
      <section className="container">
        <section className="inner-container -center">
          <h1>No soft deleted users yet.</h1>
        </section>
      </section>
    );
  }
}
