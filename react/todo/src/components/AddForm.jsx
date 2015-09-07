var React = require('react/addons');

var initialState = {
  title: '',
  priority: 1
};

module.exports = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return initialState;
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.state.title}
          <input name="title" type="text" placeholder="Enter task title.." valueLink={this.linkState('title')} />
          {this.state.priority}
          <select name="priority" valueLink={this.linkState('priority')}>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
          <button>Add Task</button>
        </form>
      </div>
    );
  },

  handleSubmit(evt) {
    evt.preventDefault();

    if ( this.state.title.length === 0 ) {
      return;
    }

    this.props.onAdd(this.state);
    this.setState(initialState);
  }
});