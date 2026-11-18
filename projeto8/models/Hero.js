const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Hero = sequelize.define(
  "hero",
  {
    idHero: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    titulo: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },

    subtitulo: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    
    imagem: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
  },
  {
    tableName: "hero",
    timestamps: false,
  },
);

module.exports = Hero;
