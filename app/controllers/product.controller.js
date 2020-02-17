var productService = require("../service/product.service")

exports.showAllProducts = (req, res) => {
  productService["showAllProducts"](req, res)
};

exports.showProduct = (req, res) => {
  productService["showProduct"](req, res)
};

exports.newProduct = (req, res) => {
  productService["newProduct"](req, res)
};

exports.updateProduct = (req, res) => {
  productService["updateProduct"](req, res)
};

exports.deleteProduct = (req, res) => {
  productService["deleteProduct"](req, res)
};