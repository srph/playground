import React from 'react';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { friends } = this.props;

    return (
      <div>{friends.map((friend, i) => {
        return (
          <li key={i}>
            I'm {friend.name}, {friend.age} years old.
          </li>
        );
      })}</div>
    );
  }
}

export default FriendsList;