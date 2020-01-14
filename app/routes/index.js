var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  const response = 'Bem vindo!';
  res.status(200).send(response);
});

module.exports = router;