const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("genre", {
      genre_id:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,

      },
      genre_name:{
        type: DataTypes.TEXT,
        allowNull: false
      }
  })}