const { DataTypes } = require('sequelize')
const { db } = require('../db/connection')

const Usuario = db.define('vehiculo',{
    id_trim:{
        type:DataTypes.STRING
    },
    marca:{
        type:DataTypes.STRING
    },
    modelo:{
        type:DataTypes.STRING
    },
    generacion:{
        type:DataTypes.STRING
    },
    año_generacion:{
        type:DataTypes.STRING
    }
})

module.exports = {
    Usuario
}

