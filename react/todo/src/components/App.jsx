var React = require('react');
var axios = require('axios');

var AddForm = require('./AddForm');
var SearchForm = require('./SearchForm');
var TodoList = require('./TodoList');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      tasks: [],
      filter: '',
    };
  },

  componentWillMount: function() {
    axios({
      method: 'get',
      url: './src/data.json',
      transformResponse: [function (data) {
        // Do whatever you want to transform the data
        return JSON.parse(data);
      }]
    })
      .then(function(res) {
        var tasks = this.state.tasks;
        this.setState({ tasks: tasks.concat(res.data.data) });
      }.bind(this))
      .catch(function(err) {
        console.error(err);
        return err;
      })
  },

  render: function() {
    var filter = this.state.filter;
    var tasks = filter.length === 0
      ? this.state.tasks
      : this.state.tasks.filter(function(task) {
        return task.title.includes(filter);
      });

    return (
      <div>
        <AddForm onAdd={this.handleAdd} />
        <SearchForm onSearch={this.handleSearch} />
        <TodoList tasks={tasks} onDelete={this.handleDelete} />
      </div>
    );
  },

  handleAdd: function(task) {
    var tasks = this.state.tasks;
    tasks.push({ title: task.title, priority: task.priority });
    this.setState({ tasks: tasks });
  },

  handleDelete: function(idx) {
    this.setState({
      tasks: this.state.tasks.filter(function(task, i) {
        return i !== idx;
      })
    })
  },

  handleSearch: function(title) {
    this.setState({ filter: title });
  }
});