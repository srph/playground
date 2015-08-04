import React, { PropTypes } from 'react';

import EmptyAddUserButton from './EmptyAddUserButton';

export default class Empty extends React.Component {
  static propTypes = {
    addUser: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { addUser } = this.props;
     
    return (
      <section className="container">
        <section className="inner-container -center">
          <h1>No users yet.</h1>
          <h4>Why don't you create one?</h4>  
          <EmptyAddUserButton addUser={addUser} />
        </section>
      </section>
    );
  }
}
