const { Router } = require("express");
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const { Videogame, Genre, Platform } = require("../db");
const axios = require("axios");
const authorization = require("../middleware/authorization");
const { API_KEY } = process.env;

const router = Router();

router.get("/videogames", async (req, res, next) => {
  try {
    const { name } = req.query;

    let arrayGames = [];
    let videogames = await Videogame.findAll();
    if (videogames.length === 0) {
      let newVideoGame = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}`
      );
      let newVideoGame2 = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=2`
      );
      let newVideoGame3 = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=3`
      );
      let newVideoGame4 = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=4`
      );
      let newVideoGame5 = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=5`
      );
      arrayGames = newVideoGame.data.results.concat(
        newVideoGame2.data.results,
        newVideoGame3.data.results,
        newVideoGame4.data.results,
        newVideoGame5.data.results
      );
      arrayGames.map(async (v) => {
        let video = await Videogame.create({
          videogame_id: uuidv4(),
          videogame_id_api: v.id,
          videogame_name: v.name,
          videogame_description: "-",
          videogame_release_date: v.released,
          videogame_rating: v.rating,
          videogame_image: v.background_image,
        });
        let arrayGenre = [];

        v.genres.map(async (genre) => {
          arrayGenre.push(genre.id);
        });

        let arrayPlatform = [];
        v.platforms.map(async (p) => {
          arrayPlatform.push(p.platform.id);
        });

        await video.addGenre(arrayGenre);
        try {
          await video.addPlatform(arrayPlatform);
        } catch (err) {
          next(err);
        }
      });
    }

    if (!name) {
      let videogames = await Videogame.findAll({
        include: [{ model: Genre }, { model: Platform }],
      });

      res.json(videogames);
    } else {
      const matchVideogame = await Videogame.findAll({
        where: { videogame_name: { [Op.iLike]: `%${name}%` } },
        include: [{ model: Genre }, { model: Platform }],
      });
      res.json(matchVideogame);
    }
  } catch (err) {
    next(err);
  }
});

router.get("/videogames/:videogame_id", async (req, res, next) => {
  const { videogame_id } = req.params;
  try {
    let videogame = await Videogame.findOne({
      where: { videogame_id: videogame_id },
      include: [{ model: Genre }, { model: Platform }],
    });
    if (videogame.videogame_description === "-") {
      let matchvideogame = await axios.get(
        `https://api.rawg.io/api/games/${videogame.videogame_id_api}?key=${API_KEY}`
      );
      res.json(matchvideogame.data);
    } else {
      res.json(videogame);
    }
  } catch (err) {
    next(err);
  }
});
router.post("/videogames", async (req, res, next) => {
  try {
    const {
      videogame_name,
      videogame_description,
      videogame_release_date,
      videogame_rating,
      videogame_image,
      arrayGenres,
      arrayPlatforms,
    } = req.body;

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
    res.json(newVideogame);
  } catch (err) {
    next(err);
  }
});

router.put("/videogames/:videogame_id", async (req, res, next) => {
  const {
    videogame_name,
    videogame_description,
    videogame_release_date,
    videogame_rating,
  } = req.body;
  const { videogame_id } = req.params;
  try {
    const editVideogame = await Videogame.findOne({
      where: { videogame_id: videogame_id },
    });
    if (editVideogame) {
      editVideogame.videogame_name = videogame_name;
      editVideogame.videogame_description = videogame_description;
      editVideogame.videogame_release_date = videogame_release_date;
      editVideogame.videogame_rating = videogame_rating;
      await editVideogame.save();
      res.json(editVideogame);
    } else {
      res.json({
        message: `ID received: ${videogame_id} not exists in DB`,
      });
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/videogames/:videogame_id", async (req, res, next) => {
  const { videogame_id } = req.params;
  const videogame = await Videogame.findOne({
    where: { videogame_id: videogame_id },
  });
  if (videogame) {
    videogame
      .destroy()
      .then(() =>
        res.status(200).json({ message: `videogame succefully deleted` })
      )
      .catch((err) => next(err));
  } else {
    res.status(404).json({ message: "videogame nox exists" });
  }
});
module.exports = router;
