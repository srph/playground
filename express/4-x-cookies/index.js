var express = require('express');
var app = express();
var port = 3000;

app.use(function(req, res, next) {
  console.log(res. cookie());
});
app.listen(port, function() {
  console.log('Server is up at port %d', port);
});