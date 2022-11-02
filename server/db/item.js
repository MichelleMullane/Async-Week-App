const { Sequelize, DataTypes } = require('sequelize');
const db = require('./database');

module.exports = db.define('item', {
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: DataTypes.TEXT,
    defaultValue:
      'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  link: {
    type: DataTypes.TEXT,
  },
  description: {
    type: DataTypes.TEXT,
  },
  speed: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
  size: {
    type: DataTypes.STRING,
  },
  basket: {
    type: DataTypes.BOOLEAN,
  },
  rustResistant: {
    type: DataTypes.BOOLEAN,
  },
});
