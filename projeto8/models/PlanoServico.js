const {DataTypes} = require('sequelize');
const sequelize = require('../database');

const PlanoServico = sequelize.define('planos_servicos',{
    idPlanoServico: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    idPlano: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    nome: {
        type: DataTypes.STRING(128),
        allowNull: false
    }
},
{
    tableName: 'planos_servicos',
    timestamps: false
});

module.exports = PlanoServico;