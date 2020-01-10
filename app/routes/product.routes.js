module.exports = app => {
  const products = require("../controllers/product.controller.js");

  var router = require("express").Router();
  app.use('/products', router);

  router.get("/", products.findAll);
  router.get("/:id", products.findOne);
  router.post("/", products.create);
  router.delete("/:id", products.delete);
  router.put("/:id", products.update);

};