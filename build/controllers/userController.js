"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInventories = exports.deleteInventory = exports.addInventory = void 0;
var _Inventory = require("../models/Inventory");
const getInventories = async (req, res) => {
  const {
    location,
    sortBy,
    page = 1,
    pageSize = 20
  } = req.query;
  let order;
  if (sortBy === 'price') {
    order = [['price', 'ASC']];
  } else {
    order = [['name', 'ASC']];
  }
  try {
    const inventories = await _Inventory.Inventory.findAll({
      where: location ? {
        location
      } : {},
      order,
      limit: Number(pageSize),
      offset: (Number(page) - 1) * Number(pageSize)
    });
    const totalItems = await _Inventory.Inventory.count({
      where: location ? {
        location
      } : {}
    });
    res.json({
      inventories,
      totalItems
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};
exports.getInventories = getInventories;
const addInventory = async (req, res) => {
  const {
    name,
    location,
    price
  } = req.body;
  try {
    const newInventory = await _Inventory.Inventory.create({
      name,
      location,
      price
    });
    res.json(newInventory);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};
exports.addInventory = addInventory;
const deleteInventory = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const inventory = await _Inventory.Inventory.findByPk(id);
    if (!inventory) {
      return res.status(404).json({
        error: 'Inventory not found'
      });
    }
    await inventory.destroy();
    res.json({
      message: 'Inventory deleted'
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};
exports.deleteInventory = deleteInventory;