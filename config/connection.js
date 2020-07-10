const { Sequelize, DataTypes, Model } = require('sequelize');
module.exports = new Sequelize('mawared', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

