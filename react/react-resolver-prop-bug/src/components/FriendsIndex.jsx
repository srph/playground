import React from 'react';
import { Link } from 'react-router';

export default class FriendsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { friends } = this.props;

    return (
      <div>
        You have {friends.length} friends. Check <Link to="/friends/list">list</Link>.
      </div>
    );
  }
}