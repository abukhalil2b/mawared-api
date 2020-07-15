const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../config/connection');

module.exports = db.define('Book', {
    id: {
        type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true,unique: true
    },
    title: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.TEXT
    },
    youtube: {
        type: Sequelize.STRING
    },
    edition: {
        type: Sequelize.STRING,
    },
    juz: {
        type: Sequelize.STRING
    },
    cover_url: {
        type: Sequelize.STRING,
    },
    isbn: {
        type: Sequelize.STRING
    },
    preparedby: {
        type: Sequelize.STRING,
    },
    pages: {
        type: Sequelize.STRING
    },
    available: {
        type: Sequelize.BOOLEAN,
    },
    cate_id: {
        type: Sequelize.INTEGER
    },
    created_at: {
        type: Sequelize.STRING,
    },
    updated_at: {
        type: Sequelize.STRING
    }

}, {
    timestamps: false,tableName: 'books',underscored: true 
})