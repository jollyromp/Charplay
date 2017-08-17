// Set up mongoose and connect to MongoDB

var mongoose = require('mongoose')
, Schema = mongoose.Schema
var uri = 'mongodb://localhost:27017/rpc';
mongoose.Promise = global.Promise;
mongoose.connect(uri, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});

// User schema
var userSchema = new Schema({
  _id: { type: String, required: true },
  username: { type: String, required: true },
});

userSchema.pre('save', function(next) {
  this._id = padId(this._id);
  next();
});
  
function padId(n) {
  z = '0';
  width = 4;
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

// Character schema
var characterSchema = new Schema({
  _author: { type: String, required: true, ref: 'User' },
  name: { type: String, required: true },
  color: { type: String, required: true },
  avatar: String,
  gallery: Array,
});

// Room schema
var roomSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  _owners: [{ type: String, ref: 'User' }],
});

// Message schema
var messageSchema = new Schema({
  _author: { type: String, required: true, ref: 'User' },
  _character: { type: Schema.Types.ObjectId, required: true, ref: 'Character' },
  _room: { type: Schema.Types.ObjectId, required: true, ref: 'Room' },
  content: { type: String, required: true }
});

exports.User = mongoose.model('User', userSchema);
exports.Character = mongoose.model('Character', characterSchema);
exports.Room = mongoose.model('Room', roomSchema);
exports.Message = mongoose.model('Message', messageSchema);

