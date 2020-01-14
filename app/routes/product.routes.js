const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller');

router.get("/", controller.showAllProducts);
router.get('/:id', controller.showProduct);
router.post('/', controller.newProduct);
router.put('/:id', controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

module.exports = router;