var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <input type="text" onChange={this.handleChange} />
    );
  },

  handleChange: function(evt) {
    this.props.onSearch(evt.target.value);
  }
});