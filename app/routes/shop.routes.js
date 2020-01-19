const express = require('express');
const router = express.Router();
const controller = require('../controllers/shop.controller');

router.post("/products", controller.addProductToShop);
router.get("/products", controller.getAllProducts);
router.post("/size", controller.calculaValorDoCarrinho);
router.get("/size", controller.getInfoAboutShopCart);
module.exports = router;