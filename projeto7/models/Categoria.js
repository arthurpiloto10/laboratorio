const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Categoria = sequelize.define("categorias", {
  idCategoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING
  }
});

module.exports = Categoria;