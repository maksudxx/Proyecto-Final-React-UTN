const { Router } = require("express");
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const { Videogame, Genre, Platform } = require("../db");

const router = Router();

router.get("/videogames", async (req, res, next) => {
  try {
    const { name } = req.query;

    if (!name) {
      let videogames = await Videogame.findAll({
        include: [{ model: Genre }, { model: Platform }],
      });

      res.json(videogames);
    } else {
      const matchVideogame = await Videogame.findAll({
        where: { videogame_name: { [Op.iLike]: `${name}%` } },
        include: [{ model: Genre }, { model: Platform }],
      });
      res.json(matchVideogame);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/videogame", async (req, res, next) => {
  try {
    const {
      videogame_name,
      videogame_description,
      videogame_release_date,
      videogame_rating,
      arrayGenre,
      arrayPlatform,
    } = req.body;

    let newVideogame = await Videogame.create({
      videogame_id: uuidv4(),
      videogame_name,
      videogame_description,
      videogame_release_date,
      videogame_rating,
    });

    await newVideogame.addGenre(arrayGenre);
    await newVideogame.addPlatform(arrayPlatform);
    res.json(newVideogame);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
