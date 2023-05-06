"use strict";

var _sequelize = require("sequelize");
var _Inventory = require("./models/Inventory");
const sequelize = new _sequelize.Sequelize('database', 'username', 'password', {
  host: 'host',
  dialect: 'postgres'
});
(async () => {
  await sequelize.authenticate();
  const inventories = [];
  for (let i = 0; i < 300000; i++) {
    inventories.push({
      name: `Inventory ${i}`,
      location: 'Random Location',
      price: Math.floor(Math.random() * 100)
    });
  }
  await _Inventory.Inventory.bulkCreate(inventories);
})();