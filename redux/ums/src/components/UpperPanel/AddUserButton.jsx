import React, { PropTypes } from 'react';

export default class AddUserButton extends React.Component {
  static propTypes = {
    addUser: PropTypes.func.isRequired,
    hasUsers: PropTypes.bool.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { addUser, hasUsers } = this.props;

    return !hasUsers ? (
      <button className="btn -info" onClick={::this.handleClick}>
        New User
      </button>
    ) : null;
  }

  handleClick() {
    this.props.addUser();
  }
}
