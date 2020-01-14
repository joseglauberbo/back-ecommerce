const express = require('express');
const router = express.Router();
const controller = require('../controllers/shop.controller');

router.get("/:id", controller.showShop);
router.post('/', controller.newShop);
router.put('/:id', controller.updateShop);
router.delete('/:id', controller.deleteShop);
router.post('/:id/product', controller.addProductToShop);
router.get('/:id', controller.ShowAllProductsOfShop);

module.exports = router;