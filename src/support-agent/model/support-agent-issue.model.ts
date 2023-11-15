import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../../database';
import SupportAgent from './support-agent.model';
import Issue from '../../issue';

class SupportAgentIssue extends Model {
  public id: string;
}

SupportAgentIssue.init(
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
    supportAgentId: {
      type: DataTypes.UUID,
      unique: true,
      references: {
        model: SupportAgent,
        key: 'id',
      },
    },
    issueId: {
      type: DataTypes.UUID,
      unique: true,
      references: {
        model: Issue,
        key: 'id',
      },
    },
  },
  {
    tableName: 'support_agents_issues',
    underscored: true,
    modelName: 'SupportAgentIssue',
    timestamps: true,
    sequelize: sequelizeConnection,
  },
);

Issue.belongsToMany(SupportAgent, {
  through: SupportAgentIssue,
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  foreignKey: 'issueId',
});
SupportAgent.belongsToMany(Issue, {
  through: SupportAgentIssue,
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  foreignKey: 'supportAgentId',
});

export default SupportAgentIssue;
