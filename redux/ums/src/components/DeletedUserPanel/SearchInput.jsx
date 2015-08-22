import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default class SearchInput extends React.Component {
  static propTypes = {
    handleSoftDeletedUsersFilterInput: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <section className="g-bottom-space">
        <input
          type="text"
          placeholder="Filter archived users.."
          className={classnames('form-control', {
            '-error': !this.props.hasFilteredUsers
          })}
          onChange={::this.handleChange} />
      </section>
    );
  }

  handleChange(evt) {
    this.props.handleSoftDeletedUsersFilterInput(evt.target.value);
  }
}
