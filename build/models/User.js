"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;
var _sequelize = require("sequelize");
var _postgre = require("../database/postgre");
const User = _postgre.sequelize.define('User', {
  firstName: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: _sequelize.DataTypes.STRING
  }
});
exports.User = User;