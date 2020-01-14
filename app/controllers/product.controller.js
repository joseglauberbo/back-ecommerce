var Product = require('../models/product.model');

exports.showAllProducts = (req, res) => {
  Product.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
};

exports.showProduct = (req, res) => {
  Product.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
};

exports.newProduct = (req, res) => {
  var newProduct = new Product(req.body);
  newProduct.save({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
};

exports.updateProduct = (req, res) => {
  const productId = req.params.id;
  Product.findByIdAndUpdate(productId, req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
};

exports.deleteProduct = (req, res) => {
  const productId = req.params.id;
  Product.findByIdAndDelete(productId, req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
};