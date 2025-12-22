const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("developer", {
    developer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    developer_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
