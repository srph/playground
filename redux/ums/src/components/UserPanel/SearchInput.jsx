import React, { PropTypes } from 'react';

export default class SearchInput extends React.Component {
  static propTypes = {
    onUsersFilterInput: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <section className="g-bottom-space">
        <input
          type="text"
          onChange={::this.handleChange} />
      </section>
    );
  }

  handleChange(evt) {
    this.props.onUsersFilterInput(evt.target.value);
  }
}
