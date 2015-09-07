var React = require('react');

var TodoListPriority = React.createClass({
  render: function() {
    var priority = this.props.priority;
    var string = '';

    for ( var i = 0; i < priority; i++ ) {
      string += '!';
    }

    return <span style={{ color: this.getColor() }}>{string}</span>;
  },

  getColor: function() {
    switch(this.props.priority) {
      case 1:
      case '1': return 'blue';
      case 2:
      case '2': return '#CECE23';
      case 3:
      case '3': return 'red';
    }
  }
});

module.exports = TodoListPriority;