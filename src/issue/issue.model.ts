import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../database';

class Issue extends Model {
  public id: string;
  public body: string;
}

Issue.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: 'issues',
    modelName: 'Issue',
    timestamps: true,
    sequelize: sequelizeConnection,
  },
);

export default Issue;
