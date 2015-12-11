import React from 'react';
import ReactDOM from 'react-dom';
import linkState from 'react-link-state';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 2
    };
  }

  render() {
    return (
      <div>
        Value: {this.state.value}

        <input
          type="radio"
          name="value"
          value="1"
          valueLink={linkState(this, 'value')} />

        <input
          type="radio"
          name="value"
          value="2"
          valueLink={linkState(this, 'value')} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);