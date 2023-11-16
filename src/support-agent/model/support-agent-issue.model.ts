import { DataTypes, Model, Sequelize } from 'sequelize';

class SupportAgentIssue extends Model {
  id: string;
  issueId: string;
  supportAgentId: string;

  static initialize(db: Sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        active: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
          allowNull: false,
        },
      },
      {
        tableName: 'support_agents_issues',
        underscored: true,
        modelName: 'SupportAgentIssue',
        timestamps: true,
        sequelize: db,
      },
    );
  }
}

export default SupportAgentIssue;
