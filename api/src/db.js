require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DATABASE, DATABASE_URL } = process.env;

// 1. Definimos la URL local por si no existe la de producción
const DB_LOCAL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DATABASE}`;

// 2. Elegimos qué URL usar
const targetURL = DATABASE_URL || DB_LOCAL;

// 3. Creamos la instancia única de Sequelize
const sequelize = new Sequelize(targetURL, {
  logging: false,
  native: false,
  dialectOptions: DATABASE_URL 
    ? {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      }
    : {}, // Si es local, no enviamos opciones de SSL
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  Genre,
  Platform,
  Videogame,
  Tag,
  Developer,
  ImageVideogame,
  VideoVideogame,
} = sequelize.models;

// Aca vendrian las relaciones
Videogame.belongsToMany(Genre, { through: "videogame_genre" });
Genre.belongsToMany(Videogame, { through: "videogame_genre" });

Videogame.belongsToMany(Platform, { through: "videogame_platform" });
Platform.belongsToMany(Videogame, { through: "videogame_platform" });

Videogame.belongsToMany(Tag, { through: "videogame_tag" });
Tag.belongsToMany(Videogame, { through: "videogame_tag" });

Videogame.belongsToMany(Developer, { through: "videogame_developer" });
Developer.belongsToMany(Videogame, { through: "videogame_developer" });

Videogame.hasMany(ImageVideogame, {
  foreignKey: "videogame_id",
  onDelete: "CASCADE",
});
ImageVideogame.belongsTo(Videogame, { foreignKey: "videogame_id" });

Videogame.hasMany(VideoVideogame, {
  foreignKey: "videogame_id",
  onDelete: "CASCADE",
});
VideoVideogame.belongsTo(VideoVideogame, { foreignKey: "videogame_id" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
