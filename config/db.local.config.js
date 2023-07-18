const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dbnenjapcoffee2', 'postgres', 'owen', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;