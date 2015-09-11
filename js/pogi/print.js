var delay = require('./delay');
var log = require('./log');

module.exports = function(txt, color, ms) {
  return function(callback) {
    return delay(ms)
      .then(function() {
        log(color)(txt);
        callback(null);
      })
      .catch(function(err) {
        log('red')(err || err.stack);
      });
  }
}