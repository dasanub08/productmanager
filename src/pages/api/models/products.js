// models/Product.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');


const Product = sequelize.define('Product', {
  // Model attributes are defined here
  product_id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    unique: true,
    allowNull: false
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  category_id: {
    type: DataTypes.NUMBER,
    unique : true,
    allowNull: false
  },
  tags : {
    type : DataTypes.STRING,
    allowNull: true
  }
}, {
  // Other model options go here
  timestamps: true,
  // If you want the table name to be the same as the model name:
  freezeTableName: true,
});

module.exports = Product;