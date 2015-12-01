require('babel-register');
require('babel-polyfill');
var generator = require('./generator');

var it = generator();
console.log(it.next(12));
console.log(it.next());