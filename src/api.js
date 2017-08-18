import openSocket from 'socket.io-client';
const  socket = openSocket('http://dev.charplay.com:8000');

function roomSubscribe(roomId, cb) {
  socket.on('roomInfo', data => cb(null, data));
  socket.emit('getRoom', {'roomId': roomId});
}

function sendMessage(content) {
  socket.emit('sendMessage', content);
}

export { roomSubscribe, sendMessage };