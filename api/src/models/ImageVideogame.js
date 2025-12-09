const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("imageVideogame", {
    imageVideogame_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    imageVideogame_image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    videogame_id:{
      type: DataTypes.UUID,
      allowNull:false,
    }
  });
};
