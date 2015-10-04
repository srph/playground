var express = require('express');
var app = express();
var CookieDough = require('cookie-dough');

app.use(express.static('./'));
app.use(require('cookie-parser')());
app.use(function(req, res) {
  var cookie = CookieDough(req);
  cookie.set('password', '1234');
  // cookie.remove('password');

  res.send([
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
      '<title>Cookie Dough</title>',
    '</head>',
    '<body>',
      '<p>', 'What you see here is response from the server.', '</p>',
      '<p>', 'Check the client to see the browser execution', '</p>',
      '<p>', 'Try commenting out (and vice-versa) <strong>line 10</strong>', '</p>',
      '<p>', cookie.get('password'), '</p>',
      '<script src="build.js"></script>',
    '</body>',
    '</html>'
  ].join('\n'));
});

var server = app.listen(8080, function() {
  console.log('Listening to port %d', server.address().port)
});