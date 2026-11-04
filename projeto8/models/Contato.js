const {DataTypes} = require('sequelize');
const sequelize = require('../database');

const Contato = sequelize.define('dados', {
    idContato: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    icone: {
        type: DataTypes.STRING(128),
        allowNull: false
    },

    descricao: {
        type: DataTypes.STRING(128),
        allowNull: false
    }
},{
tableName: 'dados',
timestamps: false
});

module.exports = Contato;