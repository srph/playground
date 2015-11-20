var http = require('http');

var server = http.createServer(function(req, res) {
  res.setHeader('Set-Cookie', 'type=; expires=' + new Date(0));
  res.end('<script>document.write(document.cookie);</script>');
});

server.listen(8080, function() {
  console.log('Listening to port 8080');
});