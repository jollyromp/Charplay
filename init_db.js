//Connect to Database

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/rpc';

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to the database rpc.");

  // Initialize Database

  db.dropDatabase();
  console.log("Initializing Database");

  // Insert users

  var users = [
    {
      username: "cor",
      id: "0001",
    },
    {
      username: "roc",
      id: "0002",
    }
  ];

  var user1 = users[0].id;

  db.collection("users").insertMany(users, function(err, res) {
    if (err) throw err;
    console.log("Number of users inserted: " + res.insertedCount);
  });

  // Insert characters

  var characters = [
    {
      userId: user1,
      avatar: "http://i.imgur.com/8IMdzu3.jpg",
      gallery: [
        "http://i.imgur.com/neIEW0P.png",
        "http://i.imgur.com/8IMdzu3.jpg"
      ],
      name: "test",
      color: "#fff"
    }
  ];

  db.collection("characters").insertMany(characters, function(err, res) {
    if (err) throw err;
    console.log("Number of characters inserted: " + res.insertedCount);
    var character1 = res.insertedIds[0];

    // Insert rooms

    var rooms = [
      {
        owners: [user1],
        name: "Test Room",
        description: "This is a room with a description",
      }
    ];

    var room1;

    db.collection("rooms").insertMany(rooms, function(err, res) {
      if (err) throw err;
      console.log("Number of rooms inserted: " + res.insertedCount);
      room1 = res.insertedIds[0];
      
      // Insert messages

      var messages= [
        {
          userId: user1,
          characterId: character1,
          roomId: room1,
          content: "1harleybins"
        },
        {
          userId: user1,
          characterId: character1,
          roomId: room1,
          content: "2harleybins"
        }
      ];

      db.collection("messages").insertMany(messages, function(err, res) {
        if (err) throw err;
        console.log("Number of messages inserted: " + res.insertedCount);
        db.close();
      });
    });
  });

});
