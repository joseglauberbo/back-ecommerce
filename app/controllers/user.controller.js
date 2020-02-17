var userService = require('../service/user.service');

exports.showAllUsers = (req, res) => {
  userService["showAllUsers"](req, res)
};

exports.showUser = (req, res) => {
  userService["showUser"](req, res)
};

exports.newUser = (req, res) => {
  userService["newUser"](req, res)
};

exports.updateUser = (req, res) => {
  userService["updateUser"](req, res)
};

exports.deleteUser = (req, res) => {
  userService["deleteUser"](req, res)
};