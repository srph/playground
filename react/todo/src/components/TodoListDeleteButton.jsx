var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <button type="button" onClick={this.handleClick}>
        X
      </button>
    );
  },

  handleClick: function() {
    this.props.onDelete(this.props.index);
  }
});