import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': config.username || "postgres",
  'password': config.password || "mypassword",
  'database': config.database || "postgres",
  'host': config.host || "database-2.cdydsrnijogz.us-east-1.rds.amazonaws.com",
  'port': 5432,
  'dialect': config.dialect,
  'dialectOptions': {
    'ssl': {
      'require': true,
      'rejectUnauthorized': false,
    },
  },
  'storage': ':memory:',
});
