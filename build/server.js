"use strict";

var _express = _interopRequireDefault(require("express"));
var _userController = require("./controllers/userController");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const server = (0, _express.default)();
server.get("/", _userController.createUser);
server.get("/users", _userController.getUsers);
server.listen(4444, () => console.log("Server is listening at http://localhost:4444"));