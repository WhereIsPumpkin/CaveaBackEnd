"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;
var _sequelize = require("sequelize");
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const DATABASE_URL = process.env.DATABASE_URL;
const sequelize = new _sequelize.Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});
exports.sequelize = sequelize;
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});