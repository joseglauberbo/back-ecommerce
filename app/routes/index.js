var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log("entrou porra")
  res.render('shop/home', { title: 'Shopping Cart' });
});

module.exports = router;