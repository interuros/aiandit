import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../database';
import { IssueStatusEnum } from './enum';

class Issue extends Model {
  id: string;
  body: string;
  status: IssueStatusEnum;
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
    status: {
      type: DataTypes.ENUM(...Object.keys(IssueStatusEnum)),
      defaultValue: IssueStatusEnum.OPEN,
      allowNull: false,
    },
  },
  {
    underscored: true,
    tableName: 'issues',
    modelName: 'Issue',
    timestamps: true,
    sequelize: sequelizeConnection,
  },
);

export default Issue;
