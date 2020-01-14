var Shop = require('../models/shop.model');
var Product = require('../models/product.model');

exports.showShop = (req, res) => {
  Shop.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
};

exports.newShop = (req, res) => {
  var newShop = new Shop(req.body);
  newShop.save({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
};

exports.updateShop = (req, res) => {
  const shopId = req.params.id;
  Shop.findByIdAndUpdate(shopId, req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
};

exports.deleteShop = (req, res) => {
  const shopId = req.params.id;
  Shop.findByIdAndDelete(shopId, req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
};

exports.addProductToShop = (req, res) => {

  let product = new Product(req.body);

  product.save((err, product) => {

    if (err) {
      res.send(err)
    }

    Shop.findById(req.params.id, (err, shop) => {
      if (err) {
        res.send(err)
      }
      shop.products.push(product);
      shop.save((err) => {
        if (err) {
          res.send(err);
        }
        res.status(200).json(shop);
      });
    })
  })
}

exports.ShowAllProductsOfShop = (req, res) => {

  Shop.findById(req.params.id, (err, shop) => {
    if (err) {
      res.send(err);
    }
    res.json(shop.products);
  })
}