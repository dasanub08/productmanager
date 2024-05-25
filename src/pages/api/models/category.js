// models/Product.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const Category = sequelize.define('Category', {
  // Model attributes are defined here
  category_id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    unique: true,
    allowNull: false
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sub_category_id: {
    type: DataTypes.NUMBER,
    unique : true,
    allowNull: false
  },
}, {
  // Other model options go here
  timestamps: true,
  // If you want the table name to be the same as the model name:
  freezeTableName: true,
});

module.exports = Category;