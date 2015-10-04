var cookie = require('cookie');

console.log(cookie.serialize('yolo', 'swag', {
  expires: new Date(0)
}));

console.log(cookie.parse(cookie.serialize('yolo', 'swag', {
  expires: new Date(0)
})));