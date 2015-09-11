var chalk = require('chalk');

module.exports = function log(color) {
  return function() {
    var args = [].slice.call(arguments);
    console.log(chalk[color].apply(null, args));
  }
}