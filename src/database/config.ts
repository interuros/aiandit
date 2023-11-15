import { Sequelize } from 'sequelize';
import configService from '../config';

const sequelizeConnection = new Sequelize({
  dialect: 'postgres',
  host: configService.get('DB_HOST'),
  port: parseInt(configService.get('DB_OUT_PORT') as string), // Change to your PostgreSQL port
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  sync: {
    searchPath: '../**/*.mode.ts',
    alter: true,
  },
});

export default sequelizeConnection;
