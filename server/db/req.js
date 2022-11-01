const { Sequelize, DataTypes } = require('sequelize');
const db = require('./database');

module.exports = db.define('req', {
  price: {
    type: DataTypes.DECIMAL(2),
  },
});
