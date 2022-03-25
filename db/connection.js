const { Sequelize } = require('sequelize')


const db = new Sequelize('osirisDB', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging:false

});

module.exports = {
    db
}