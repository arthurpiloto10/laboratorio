const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Sobre = sequelize.define(
  "sobre",
  {
    idSobre: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    texto: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    missao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    visao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    valores: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    
    imagem: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
  },
  {
    tableName: "sobre",
    timestamps: false,
  },
);

module.exports = Sobre;
