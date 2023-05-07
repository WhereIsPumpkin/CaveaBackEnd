"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _yamljs = _interopRequireDefault(require("yamljs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const options = {
  customCss: ".swagger-ui .topbar { display: none }",
  customSiteTitle: "Projects"
};
const swaggerDocument = _yamljs.default.load("./src/config/swagger.yaml");
var _default = [_swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(swaggerDocument, options)];
exports.default = _default;