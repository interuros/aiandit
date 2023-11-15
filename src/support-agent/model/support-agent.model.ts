import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../../database';

class SupportAgent extends Model {
  public id: string;
}

SupportAgent.init(
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
    sequelize: sequelizeConnection,
  },
);

export default SupportAgent;
