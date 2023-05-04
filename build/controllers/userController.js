"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItems = exports.deleteItem = exports.addItem = void 0;
var _Item = require("../models/Item");
const getItems = async (req, res) => {
  const items = await _Item.Item.findAll();
  res.json(items);
};
exports.getItems = getItems;
const addItem = async (req, res) => {
  const {
    name,
    location,
    price
  } = req.body;
  try {
    const newItem = await _Item.Item.create({
      name,
      location,
      price
    });
    res.json(newItem);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};
exports.addItem = addItem;
const deleteItem = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const item = await _Item.Item.findByPk(id);
    if (!item) {
      return res.status(404).json({
        error: 'Item not found'
      });
    }
    await item.destroy();
    res.json({
      message: 'Item deleted'
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};
exports.deleteItem = deleteItem;