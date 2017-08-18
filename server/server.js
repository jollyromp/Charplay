// Set up mongoose

var mongoose = require('mongoose');
var model = require('./model.js');
var User = model.User;
var Character = model.Character;
var Room = model.Room;
var Message = model.Message;

// Connect to Socket
const io = require('socket.io')();

io.on('connection', (client) => {

  client.on('getRoom', (data) => {
    client.join('room.'+data.roomId);
    
    Room.findOne({'_id': data.roomId}).populate('_owners').exec(function (err, room) {
      if (err) throw err;
      console.log('Sending roomInfo(' + room.name + ') to user');

      data = { 'room': room };

      client.emit('roomInfo', data);

      Message.find({'_room': data.room._id}).populate({ path: '_author', select: 'name _id' }).populate('_character').exec(function (err, messages) {
        if (err) throw err;

        data = { 'messages': messages };
        client.emit('roomInfo', data);
      });
    });

  });

  client.on('sendMessage', (data) => {
    var newMessage = Message({
      _author: data.user,
      _character: data.character,
      _room: data.room,
      content: data.text
    });
    Message.create(newMessage, function (err) {
      if (err) throw err;
      console.log('Sent message to '+data.room);
      
      Message.findOne({'_id': arguments[1]._id}).populate({ path: '_author', select: 'name _id' }).populate('_character').exec(function (err, messages) {
        if (err) throw err;
        messageData = {'messages': messages};
        client.to('room.'+data.room).emit('roomInfo', messageData);
        client.emit('roomInfo', messageData);
      });
    });
  });

});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
