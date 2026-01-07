const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Produto = sequelize.define("produtos", {
  idProduto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING
  },
  preco: {
    type: DataTypes.DECIMAL(10,2)
  },
  categoria: {
    type: DataTypes.STRING
  },
  imagem: {
    type: DataTypes.STRING
  }
});

module.exports = Produto;