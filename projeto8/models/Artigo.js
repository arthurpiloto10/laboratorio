const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Artigo = sequelize.define('artigos', {
    idArtigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    titulo: {
        type: DataTypes.STRING(200),
        allowNull: false
    },

    slug: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true
    },

    imagem: {
        type: DataTypes.STRING(255),
        allowNull: true
    },

    resumo: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    conteudo: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    }
});


module.exports = Artigo;