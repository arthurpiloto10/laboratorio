const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Case = sequelize.define(
  "cases",
  {
    idCase: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    imagem: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },

    descricao: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: "cases",
    timestamps: false,
  },
);

module.exports = Case;
