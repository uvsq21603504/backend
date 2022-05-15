const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  
  categorie: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  qte: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  D : {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updatedAt : {
    type: Sequelize.DATE,
    allowNull: false,
  },
  CreatedAt : {
    type: Sequelize.DATE,
    allowNull: false,
  },
  promo: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  }
});

module.exports = Product;
