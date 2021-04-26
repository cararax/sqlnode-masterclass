const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const connect = new Sequelize(dbConfig)

module.exports = connection;