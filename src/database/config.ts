import { Sequelize } from 'sequelize';
import configService from '../config';
import SupportAgent from '../support-agent/model/support-agent.model';
import Issue from '../issue';
import SupportAgentIssue from '../support-agent/model/support-agent-issue.model';
import { ModelsType } from '../common';

const db = new Sequelize({
  dialect: 'postgres',
  host: configService.get('DB_HOST'),
  port: parseInt(configService.get('DB_OUT_PORT') as string), // Change to your PostgreSQL port
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  sync: {
    alter: true,
  },
});

const models: ModelsType = {
  SupportAgent: SupportAgent.initialize(db),
  Issue: Issue.initialize(db),
  SupportAgentIssue: SupportAgentIssue.initialize(db),
};

Object.values(models)
  .filter((model) => typeof model.associate === 'function')
  .forEach((model) => model.associate(models));

export { db, models };
