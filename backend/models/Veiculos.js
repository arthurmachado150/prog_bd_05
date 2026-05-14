const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Veiculos = db.define('veiculo',{
    codVeiculo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ano: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precoFab: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    precoVenda: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
},{
    timestamps: false
})

module.exports = Veiculos