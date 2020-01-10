module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();
  app.use('/users', router);

  router.get("/", users.findAll);
  router.get("/:id", users.findOne);
  router.post("/", users.create);
  router.delete("/:id", users.delete);
  router.put("/:id", users.update);

};