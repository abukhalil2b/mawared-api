const { Sequelize } = require('sequelize');
const db = require('../config/connection');

module.exports = db.define('Cate', {
    id: {
        type: Sequelize.INTEGER, primaryKey: true, allowNull: false,autoIncrement: true,unique: true
    },
    title: {
        type: Sequelize.STRING, allowNull: false
    },
    description: {
        type: Sequelize.STRING, allowNull: true
    }
}, { timestamps: false,tableName:'cates',underscored: true });