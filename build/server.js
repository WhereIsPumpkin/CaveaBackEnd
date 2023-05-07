"use strict";

var _express = _interopRequireDefault(require("express"));
var _postgre = require("./database/postgre");
var _userController = require("./controllers/userController");
var _cors = _interopRequireDefault(require("cors"));
var _swaggerMiddleware = _interopRequireDefault(require("./swagger-middleware.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const server = (0, _express.default)();
server.use((0, _cors.default)());
_postgre.sequelize.sync();
server.use(_express.default.json());
server.get("/inventories", _userController.getInventories);
server.post("/inventories", _userController.addInventory);
server.delete("/inventories/:id", _userController.deleteInventory);
server.use("/", ..._swaggerMiddleware.default);
server.listen(4444, () => console.log("Server is listening at http://localhost:4444"));