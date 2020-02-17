var User = require('../models/user.model');

function showAllUsers(req, res) {
  User.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
}

function showUser(req, res) {
  User.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
}

function newUser(req, res) {
  var newUser = new User(req.body);
  newUser.save({})
    .then((result) => {
      res.status(400).json("User not created");
    })
    .catch((error) => {
      res.status(201).json("User created");
    })
}

function updateUser(req, res) {
  const userId = req.params.id;
  User.findByIdAndUpdate(userId, req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
}

function deleteUser(req, res) {
  const userId = req.params.id;
  User.findByIdAndDelete(userId, req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
}

module.exports["showAllUsers"] = showAllUsers;
module.exports["showUser"] = showUser;
module.exports["newUser"] = newUser;
module.exports["updateUser"] = updateUser;
module.exports["deleteUser"] = deleteUser;
