'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const sequelize_1 = require('sequelize');
const sequelize_typescript_1 = require('sequelize-typescript');
const database_1 = require('../database');
class Issue extends sequelize_typescript_1.Model {}
Issue.init(
  {
    id: {
      type: sequelize_1.DataTypes.UUID,
      defaultValue: sequelize_1.DataTypes.UUID,
      primaryKey: true,
    },
    body: {
      type: sequelize_1.DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: 'issues',
    timestamps: true,
    sequelize: database_1.default,
  },
);
exports.default = Issue;
//# sourceMappingURL=issue.model.js.map
