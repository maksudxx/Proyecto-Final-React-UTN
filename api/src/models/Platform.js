const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("platform", {
        platform_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        platform_name:{
            type: DataTypes.TEXT,
            allowNull: false
        }
  })}