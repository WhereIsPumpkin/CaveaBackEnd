import { Sequelize } from 'sequelize';
import dotenv from "dotenv";
dotenv.config();


export const sequelize = new Sequelize('postgres', 'postgres', process.env.POSTGRE_PASS, {
  host: 'localhost',
  port: 3000,
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));