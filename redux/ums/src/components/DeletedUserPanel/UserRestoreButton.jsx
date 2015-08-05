import React, { PropTypes } from 'react';

export default class UserRestoreButton extends React.Component {
  static propTypes = {
    userId: PropTypes.number.isRequired,
    restoreUser: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <button className="btn -info -small" onClick={::this.handleClick}>
        Restore
      </button>
    );
  }

  handleClick() {
    this.props.restoreUser(
      this.props.userId
    );
  }
}
