var log = require('./log');

module.exports = function(str, color, duration) {
  var durationPerPrint = duration / str.length;

  return async.series(
    str.split('').map(function(letter) {
      return print(letter, color, durationPerPrint);
    }),
    function(err) {
      log('red')('An error occured', err.stack || err);
    }
  );
}