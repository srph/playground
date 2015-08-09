var koa = require('koa');
var app = koa();
require('koa-qs')(app, 'strict');

app.use(require('./middlewares/logger'));
app.use(require('./middlewares/response-time'));

app.use(function* (next) {
  this.body = this.query.query || 'Hello World';
});

app.listen(3000, function() {
  console.log('Listening to port %s', 3000);
});