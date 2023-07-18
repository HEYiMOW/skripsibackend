'use strict';


const {Model} = require('sequelize');

const sequelize = require('../config/db.config'); // connect to database railway
//const sequelize = require('../config/db.local.config'); // connect to database local

module.exports = (sequelize, DataTypes) => {
  class coffee2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  coffee2.init({
    coffeeshop_name: DataTypes.STRING,
    desc: DataTypes.STRING,
    address: DataTypes.STRING,
    img: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'coffee2s',
  });
  return coffee2;
};