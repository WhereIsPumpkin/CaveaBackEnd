import { DataTypes } from 'sequelize';
import { sequelize } from '../database/postgre';

export const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
});