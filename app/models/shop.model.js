var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShopSchema = new Schema({

  id: {
    type: Number
  },
  listOfProducts: {
    type: [
      {
        type: Schema.Types.Array,
        ref: 'listOfProducts'
      }
    ],
    default: []
  }
});

module.exports = mongoose.model('Shop', ShopSchema);