import 'babel/polyfill';
import React, { Component } from 'react'
import Select from 'react-select';
import md5 from 'md5';

class App extends Component {
  state = { val: '' };

  render() {
    const { val } = this.state;

    return (
      <div>
        Current Value: {val}
        <label htmlFor="usertype">Hi</label>
        <Select
          id="usertype"
          name="usertype"
          value={val}
          className="form-control"
          asyncOptions={::this.getOptions}
          optionRenderer={::this.renderOption}
          onChange={::this.onChange} />
      </div>
    );
  }

  getOptions(input, callback) {
    setTimeout(() => {
      callback(null, {
        options: [
          { value: '12345', label: '12345 (Kier Borromeo)', email: 'seraphipod@gmail.com' },
          { value: '42312', label: '42312 (Kier Pogi)', email: 'yolo@gmail.com' }  
        ]
      })
    }, 1000);
  }

  renderOption(option) {
    return (
      <span>
        <img src={`http://www.gravatar.com/avatar/${md5(option.email)}?s=48`} />
        {option.label}
      </span>
    );
  }

  onChange(newValue) {
    this.setState({
      val: !!newValue.length && !confirm(`Are you sure to select ${newValue}?`)
        ? val
        : newValue
    });
  }
}

React.render(
  <App />,
  document.getElementById('mount')
);