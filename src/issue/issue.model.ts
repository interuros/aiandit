import { DataTypes, Model, Sequelize } from 'sequelize';
import { IssueStatusEnum } from './enum';
import { ModelsType } from '../common';

class Issue extends Model {
  id: string;
  body: string;
  status: IssueStatusEnum;

  static initialize(db: Sequelize) {
    return super.init(
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
        sequelize: db,
      },
    );
  }

  static associate(models: ModelsType) {
    super.hasMany(models.SupportAgentIssue, {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      foreignKey: 'issueId',
    });
  }
}

export default Issue;
