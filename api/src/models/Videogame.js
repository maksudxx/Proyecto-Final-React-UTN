const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("videogame", {
    videogame_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    videogame_id_api: {
      type: DataTypes.INTEGER,
    },
    videogame_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    videogame_description: {
      type: DataTypes.TEXT,
    },
    videogame_release_date: {
      type: DataTypes.DATE,
    },
    videogame_rating: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    videogame_image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
