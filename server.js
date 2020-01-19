const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');
var http = require('http');
var server = http.createServer(app);
var localstorage = require('./app/controllers/shop.controller');

require('dotenv').config()

var options = {
  app: { socketOptios: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

//using mongo
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/siteware');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header('Content-Type', 'application/json');
  next();
});

//routes
const index = require('./app/routes/index');
const products = require('./app/routes/product.routes');
const shop = require('./app/routes/shop.routes');

app.use('/', index)
app.use('/products', products)
app.use('/shop', shop)

//server
const port = process.env.PORT || 3000;
app.listen(port);



module.exports = app;



