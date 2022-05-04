const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("platform", {
        platform_id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        platform_name:{
            type: DataTypes.TEXT,
            allowNull: false
        }
  })}