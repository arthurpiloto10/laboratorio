const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Servico = sequelize.define("servicos", {
  idServico: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(128),
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING(128),
    allowNull: false
  },
  imagem: {
    type: DataTypes.STRING(256)
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  tempoExecucao: {
    type: DataTypes.TIME,
    allowNull: false
  },
  validade: {
    type: DataTypes.STRING(128),
    allowNull: false
  },
  preco: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  }
});

module.exports = Servico;