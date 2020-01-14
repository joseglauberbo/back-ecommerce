var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

  id: {
    type: Number
  },
  name: {
    type: String,
    unique: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    index: true
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true
  },
  password: {
    type: String,
    required: [true, "can't be blank"]
  },
});

module.exports = mongoose.model('User', UserSchema);