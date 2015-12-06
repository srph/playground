var io = require('socket.io-client');
var socket = io('http://localhost:3000');

var $element = document.getElementById('counter-btn');

$element.addEventListener('click', function() {
  socket.emit('increment');
});

socket.on('connection', handleIncrementCount);
socket.on('increment', handleIncrementCount);

function handleIncrementCount(payload) {
  $element.innerHTML = 'Increment count (' + payload.count + ' clicks)';
}