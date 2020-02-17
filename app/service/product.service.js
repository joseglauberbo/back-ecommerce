var Product = require('../models/product.model');

function showAllProducts(req, res) {
  Product.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
}

function showProduct(req, res) {
  Product.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
}

function newProduct(req, res) {

  var newProduct = new Product(req.body);

  newProduct.save({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
}

function updateProduct(req, res) {
  const productId = req.params.id;
  Product.findByIdAndUpdate(productId, req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
}

function deleteProduct(req, res) {
  const productId = req.params.id;
  Product.findByIdAndDelete(productId, req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
}

module.exports["showAllProducts"] = showAllProducts;
module.exports["showProduct"] = showProduct;
module.exports["newProduct"] = newProduct;
module.exports["updateProduct"] = updateProduct;
module.exports["deleteProduct"] = deleteProduct;