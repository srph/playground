var React = require('react');

var TodoListPriority = require('./TodoListPriority');
var TodoListDeleteButton = require('./TodoListDeleteButton');

module.exports = React.createClass({
  render: function() {
    var tasks = this.props.tasks;
    var onDelete = this.props.onDelete;

    return tasks.length > 0 ? (
      <div>
        {tasks.map(function(task, i) {
          return (
            <div key={i}>
              {task.title}
              <TodoListPriority priority={task.priority} />
              <TodoListDeleteButton onDelete={onDelete} index={i} />
            </div>
          );
        })}
      </div>
    ) : <div>Empty, bitch</div>;
  }
})