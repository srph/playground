var cookie = require('cookie-dough')();

cookie.set('username', 'kier');
console.log('The value of cookie["username"] is: ', cookie.get('username'));