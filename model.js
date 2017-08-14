// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/rpc');

// User schema
var userSchema = new Schema({
  username: { type: String, required: true },
  id: { type: Number, required: true }
});

userSchema.pre('save', function(next) {
  this.id = padId(this.id);
  next();
});
  
function padId(n) {
  z = '0';
  width = 4;
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

var User = mongoose.model('User', userSchema);

// Character schema
var characterSchema = new Schema({
  name: { type: String, required: true },
  userId: { type: Number, required: true },
  color: { type: String, required: true },
  avatar: String,
  gallery: Array,
});
var Character = mongoose.model('Character', characterSchema);

// Room schema
var roomSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  owners: Array,
});
var Room = mongoose.model('Room', roomSchema);

// Message schema
var messageSchema = new Schema({
  userId: { type: Number, required: true },
  characterId: { type: ObjectId, required: true },
  roomId: { type: ObjectId, required: true },
  content: { type: String, required: true }
});

// Export schemas
export { User, Character, Room, Message }