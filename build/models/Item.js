"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;
var _sequelize = require("sequelize");
var _postgre = require("../database/postgre");
const Item = _postgre.sequelize.define('Item', {
  name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: _sequelize.DataTypes.FLOAT,
    allowNull: false
  }
});
exports.Item = Item;