const { Sequelize } = require('sequelize')

const db = new Sequelize('db_veiculo_02', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

module.exports = db