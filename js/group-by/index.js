var groupBy = require('./groupBy');

var array = [1, 2, 3, 4, 5, 6];
var output = groupBy(array, function groupThrees(n) {
  return n % 3;
});

console.log(output);