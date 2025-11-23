const { Router } = require("express");
const {
  getVideogames,
  preloadGames,
  getGameById,
  insertGameInDb,
  editGameInDb,
  deleteGameInDb,
} = require("../controllers/videogames");

const router = Router();

router.get("/videogames", async (req, res, next) => {
  try {
    await preloadGames();
    const games = await getVideogames(req.query.name);
    res.json(games);
  } catch (err) {
    next(err);
  }
});

router.get("/videogames/:videogame_id", async (req, res, next) => {
  const { videogame_id } = req.params;
  try {
    const videogameData = await getGameById(videogame_id);

    if (!videogameData) {
      return res.status(404).json({ message: "Videogame not found" });
    }
    res.json(videogameData);
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

    const result = await insertGameInDb(
      videogame_name,
      videogame_description,
      videogame_release_date,
      videogame_rating,
      videogame_image,
      arrayGenres,
      arrayPlatforms
    );
    res.json({
      message: "OK",
      data: result,
    });
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
    const result = await editGameInDb(
      videogame_id,
      videogame_name,
      videogame_description,
      videogame_release_date,
      videogame_rating
    );

    if (!result) {
      return res.status(404).json({
        message: `ID ${videogame_id} does not exist in DB`,
      });
    }

    res.json({
      message: "OK",
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

router.delete("/videogames/:videogame_id", async (req, res, next) => {
  const { videogame_id } = req.params;
  try {
    const result = await deleteGameInDb(videogame_id);
    if (!result) {
      return res.status(404).json({
        message: `ID ${videogame_id} does not exist in DB`,
      });
    }
    res.json({
      message: "GAME deleted",
    });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
