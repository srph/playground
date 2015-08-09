var koa = require('koa');
var app = koa();
app.listen(process.env.PORT || 5000);
app.use(function * (next) {
  
  yield next;
});