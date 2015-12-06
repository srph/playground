var fs = require('fs');
var app = require('koa')();
var http = require('http').createServer(app.callback());
var io = require('socket.io')(http);

var count = 0;

app.use(require('koa-static')(__dirname));
app.use(function *() {
  var html = fs.readFileSync(__dirname + '/index.html', 'utf-8');
  this.body = html;
});

io.on('connection', function(socket) {
  console.log('User #' + (socket.id) + ' has connected');
  socket.emit('connection', { count: count });

  socket.on('increment', function(payload) {
    ++count;
    console.log('User #' + socket.id + ' incremented counter to ' + count);
    io.emit('increment', { count: count });
  });

  socket.on('disconnect', function() {
    console.log('User #' + socket.id + ' has disconnected');
  });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});