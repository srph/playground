require('babel-register');
require('babel-polyfill');
var generator = require('./generator-module-export');

var it = generator();
console.log(it.next(12));
console.log(it.next());