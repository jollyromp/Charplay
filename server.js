// Connect to Database
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/rpc';

// Connect to Socket
const io = require('socket.io')();

io.on('connection', (client) => {

  client.on('getRoom', () => {
    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      console.log("Connected correctly to database.");
      
      // Send Room Information
      db.collection("rooms").findOne({'name': 'Test Room'}, function(err, room) {
        assert.equal(null, err);

        data = { 'room': room };
        client.emit('roomInfo', data);

        // Send message information
        db.collection("messages").find({roomId: room._id}).toArray(function(err, messages) {
          assert.equal(null, err);

          data = { 'messages': messages };
          client.emit('roomInfo', data);
        });
      });


  
      db.close();
    });
  });

});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);

// MongoDB Connection

