var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({

  id: {
    type: Number
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('Product', ProductSchema);