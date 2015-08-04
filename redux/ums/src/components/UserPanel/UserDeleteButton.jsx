import React, { PropTypes } from 'react';

export default class UserDeleteButton extends React.Component {
  static propTypes = {
    userId: PropTypes.number.isRequired,
    softDeleteUser: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <button className="btn -danger" onClick={::this.handleClick}>
        Delete
      </button>
    );
  }

  handleClick() {
    this.props.softDeleteUser(
      this.props.userId
    );
  }
}
