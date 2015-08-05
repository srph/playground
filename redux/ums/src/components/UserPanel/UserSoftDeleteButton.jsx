import React, { PropTypes } from 'react';

export default class UserSoftDeleteButton extends React.Component {
  static propTypes = {
    userId: PropTypes.number.isRequired,
    softDeleteUser: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <button className="btn -warning -small" onClick={::this.handleClick}>
        Archive
      </button>
    );
  }

  handleClick() {
    this.props.softDeleteUser(
      this.props.userId
    );
  }
}
