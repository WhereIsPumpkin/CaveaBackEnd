"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = exports.createUser = void 0;
var _User = require("../models/User");
const createUser = async (req, res) => {
  await _User.User.sync();
  await _User.User.create({
    firstName: "John",
    lastName: "Doe"
  });
  res.send("User created!");
};
exports.createUser = createUser;
const getUsers = async (req, res) => {
  const users = await _User.User.findAll();
  res.json(users);
};
exports.getUsers = getUsers;