import React from 'react';

export default class Empty extends React.Component {
  render() {
    return (
      <section className="container">
        <section className="inner-container -center">
          <h1>No soft deleted users yet.</h1>
        </section>
      </section>
    );
  }
}
