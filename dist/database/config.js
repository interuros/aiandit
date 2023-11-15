'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const sequelize_1 = require('sequelize');
const config_1 = require('../config');
const sequelizeConnection = new sequelize_1.Sequelize({
  dialect: 'postgres',
  host: config_1.default.get('DB_HOST'),
  port: parseInt(config_1.default.get('DB_OUT_PORT')),
  username: config_1.default.get('DB_USER'),
  password: config_1.default.get('DB_PASSWORD'),
  database: config_1.default.get('DB_NAME'),
});
exports.default = sequelizeConnection;
//# sourceMappingURL=config.js.map
