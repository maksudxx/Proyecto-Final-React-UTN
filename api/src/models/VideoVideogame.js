const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("videoVideogame", {
    videosVideogame_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    videosVideogame_video: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    videogame_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });
};
