const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Marca = sequelize.define('marcas', {
    idMarca: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    imagem: {
        type: DataTypes.STRING(256),
        allowNull: false
    },
    
    descricao: {
        type: DataTypes.STRING(128),
        allowNull: false
    }
});


module.exports = Marca;