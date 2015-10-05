import React, { PropTypes } from 'react';

export default class AddButton extends React.Component {
  static propTypes = {
    onAddUser: PropTypes.func.isRequired
  };

  state = {
    username: ''
  };

  render() {
    const { username } = this.state;

    return (
      <div>
        <form onSubmit={::this.handleSubmit}>
          <input type="text" onChange={::this.handleInputChange} value={username} />
          <button>Add user</button>
        </form>
      </div>
    );
  }

  handleInputChange(evt) {
    this.setState({ username: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const { username } = this.state;
    
    if ( !username.length ) {
      return;
    }

    this.props.onAddUser(username);
    this.setState({ username: '' });
  }
}
