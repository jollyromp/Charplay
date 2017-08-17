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

  client.on('getRoom', () => {

    Room.findOne({'name': 'Test Room'}).populate('_owners').exec(function (err, room) {
      if (err) throw err;

      data = { 'room': room };

      client.emit('roomInfo', data);

      Message.find({'_room': data.room._id}).populate('_author _character').exec(function (err, messages) {
        if (err) throw err;

        console.log(messages);

        data = { 'messages': messages };
        client.emit('roomInfo', data);
      });
    });
  });

});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
