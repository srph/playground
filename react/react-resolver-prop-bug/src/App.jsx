import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <nav role="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/friends">Friends</Link>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
