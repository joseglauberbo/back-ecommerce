const express = require("express");
const bodyParser = require("body-parser");
var path = require('path');
const cors = require("cors");
const db = require("./app/models");
const expressHbs = require('express-handlebars');
const app = express();

var routes = require("./app/routes/index")

app.engine('.hbs', expressHbs({ defaultLayout: 'layout', extname: '.hbs' }))
app.set('view engine', '.hbs');

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use('/', routes)
require("./app/routes/user.routes")(app);
require("./app/routes/product.routes")(app);


//server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



