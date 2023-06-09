import { DataTypes } from 'sequelize';
import { sequelize } from '../database/postgre';

export const Inventory = sequelize.define('Item', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

