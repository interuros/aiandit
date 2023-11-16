import { DataTypes, Model, Sequelize } from 'sequelize';
import SupportAgentIssue from './support-agent-issue.model';
import { ModelsType } from '../../common';

class SupportAgent extends Model {
  id: string;
  issues: SupportAgentIssue[];

  static initialize(db: Sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
      },
      {
        tableName: 'support_agents',
        modelName: 'SupportAgent',
        underscored: true,
        timestamps: true,
        sequelize: db,
      },
    );
  }

  static associate(models: ModelsType) {
    super.hasMany(models.SupportAgentIssue, {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      foreignKey: 'supportAgentId',
      as: 'issues',
    });
  }
}

export default SupportAgent;
