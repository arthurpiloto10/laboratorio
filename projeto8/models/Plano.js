const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Plano = sequelize.define(
  "planos",
  {
    idPlano: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nome: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },

    valor: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "planos",
    timestamps: false,
  },
);

module.exports = Plano;
