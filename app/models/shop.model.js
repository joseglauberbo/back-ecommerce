var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShopSchema = new Schema({

  id: {
    type: Number
  },
  products: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }
    ],
    default: []
  }
});

module.exports = mongoose.model('Shop', ShopSchema);