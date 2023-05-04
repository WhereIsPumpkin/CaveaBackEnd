"use strict";

var _express = _interopRequireDefault(require("express"));
var _postgre = require("./database/postgre");
var _userController = require("./controllers/userController");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const server = (0, _express.default)();
_postgre.sequelize.sync();
server.use(_express.default.json());
server.get("/inventories", _userController.getInventories);
server.post("/inventories", _userController.addInventory);
server.delete("/inventories/:id", _userController.deleteInventory);
server.listen(4444, () => console.log("Server is listening at http://localhost:4444"));