const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const { Videogame, Genre, Platform, Tag, Developer } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

async function fetchGamesFromRawg(pages) {
  try {
    const requests = [];
    for (let i = 1; i <= pages; i++) {
      requests.push(
        axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
      );
    }

    //que se cumpla todas las peticiones
    const responses = await Promise.all(requests);
    //Flatmap sirve para unificar todos los arrays devueltos en la respuesta
    return responses.flatMap((r) => r.data.results);
  } catch (error) {
    console.error("Error fetching games from RAWG", error.message);
    throw error;
  }
}

async function preloadGames() {
  try {
    // 1. Verificar si ya existen juegos cargados desde la API
    const count = await Videogame.count({
      where: {
        videogame_id_api: { [Op.not]: null },
      },
    });

    if (count > 0) {
      console.log("Los juegos ya han sido cargados anteriormente.");
      return;
    }

    const rawGames = await fetchGamesFromRawg(1);
    for (const g of rawGames) {
      //obtenemos informacion que necesita la BD
      const detailsRes = await axios.get(
        `https://api.rawg.io/api/games/${g.id}?key=${API_KEY}`
      );

      const description = detailsRes.data.description_raw;

      const tags = detailsRes.data.tags;
      const developers = detailsRes.data.developers;

      const game = await Videogame.create({
        videogame_id: uuidv4(),
        videogame_id_api: g.id,
        videogame_name: g.name,
        videogame_description: description,
        videogame_release_date: g.released,
        videogame_rating: g.rating,
        videogame_image: g.background_image,
      });

      // CARGAMOS LOS TAGS QUE SE NECESITAN EN EL MOMENTO Y NO TODOS EN LA BD
      const tagIds = [];
      for (const t of tags) {
        const [tagDB] = await Tag.findOrCreate({
          where: { tag_id: t.id },
          defaults: { tag_id: t.id, tag_name: t.name },
        });
        tagIds.push(tagDB.tag_id);
      }
      await game.addTag(tagIds);

      // CARGAMOS LOS DEVELOPERS QUE SE NECESITAN EN EL MOMENTO Y NO TODOS EN LA BD
      const devIds = [];
      for (const d of developers) {
        const [devDB] = await Developer.findOrCreate({
          where: { developer_id: d.id },
          defaults: { developer_id: d.id, developer_name: d.name },
        });
        devIds.push(devDB.developer_id);
      }

      await game.addDeveloper(devIds);

      const genreIds = g.genres.map((gen) => gen.id);
      const platformIds = g.platforms.map((p) => p.platform.id);

      await Promise.all([
        game.addGenre(genreIds),
        game.addPlatform(platformIds),
      ]);
    }
  } catch (error) {
    console.error("Error preload games", error.message);
    throw error;
  }
}

async function getVideogames(name) {
  try {
    const where = name ? { videogame_name: { [Op.iLike]: `%${name}%` } } : {};

    return Videogame.findAll({
      where,
      include: [Genre, Platform],
    });
  } catch (error) {
    console.error("Error get games from RAWG", error.message);
    throw error;
  }
}

async function getGameById(id) {
  try {
    let videogame = await Videogame.findOne({
      where: { videogame_id: id },
      include: [{ model: Genre }, { model: Platform }, {model: Tag}, {model : Developer}],
    });
    console.log(videogame)
    if (!videogame) {
      return null;
    } else {
      console.log(videogame);
      return videogame;
    }
  } catch (error) {
    console.error("Error fetching videogame by ID:", error);
    throw error;
  }
}

async function insertGameInDb(
  videogame_name,
  videogame_description,
  videogame_release_date,
  videogame_rating,
  videogame_image,
  arrayGenres,
  arrayPlatforms
) {
  try {
    let newVideogame = await Videogame.create({
      videogame_id: uuidv4(),
      videogame_name,
      videogame_description,
      videogame_release_date,
      videogame_rating,
      videogame_image,
    });

    await newVideogame.addGenre(arrayGenres);
    await newVideogame.addPlatform(arrayPlatforms);
    return newVideogame;
  } catch (error) {
    console.error("Error insert game in DB", error);
    throw error;
  }
}

async function editGameInDb(
  videogame_id,
  videogame_name,
  videogame_description,
  videogame_release_date,
  videogame_rating
) {
  try {
    const editVideogame = await Videogame.findOne({
      where: { videogame_id },
    });
    if (!editVideogame) return null;

    editVideogame.videogame_name = videogame_name;
    editVideogame.videogame_description = videogame_description;
    editVideogame.videogame_release_date = videogame_release_date;
    editVideogame.videogame_rating = videogame_rating;

    await editVideogame.save();
    return editVideogame;
  } catch (error) {
    console.error("Error insert game in DB", error);
    throw error;
  }
}

async function deleteGameInDb(videogame_id) {
  try {
    const videogame = await Videogame.findOne({
      where: { videogame_id },
    });
    if (!videogame) return null;
    videogame.destroy();
    return { message: "game successfully deleted" };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  preloadGames,
  getVideogames,
  getGameById,
  insertGameInDb,
  editGameInDb,
  deleteGameInDb,
};
