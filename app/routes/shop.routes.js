const express = require('express');
const router = express.Router();
const controller = require('../controllers/shop.controller');

router.post("/products", controller.addProductToShop);
router.get("/products", controller.getAllProducts);

module.exports = router;