const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Numero = sequelize.define('numeros', {
    idNumero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    icone: {
        type: DataTypes.STRING(128),
        allowNull: false
    },

    valor: {
        type: DataTypes.STRING(128),
        allowNull: true
    },

    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});


module.exports = Numero;