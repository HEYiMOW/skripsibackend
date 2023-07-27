'use strict';
const { DataTypes, Model } = require('sequelize');
//const sequelize = require('../config/db.local.config'); // connect to database local
const sequelize = require('../config/db.config'); // connect to database railway
module.exports = () => {
  class Users extends Model {
    static associate(models) {}
  }
  Users.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      
    
    },
    {
      sequelize,
      modelName: 'users',
    }
  );
  return Users;
};
