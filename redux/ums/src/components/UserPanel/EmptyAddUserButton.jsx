import React, { PropTypes } from 'react';

export default class EmptyAddUserButton extends React.Component {
  static propTypes = {
    addUser: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { addUser } = this.props;

    return (
      <button className="btn -info" onClick={::this.handleClick}>
        New User
      </button>
    );
  }

  handleClick() {
    this.props.addUser();
  }
}
