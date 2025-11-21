const { Router } = require("express");
const {
  getVideogames,
  preloadGames,
  getVideoGameById,
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
    const videogameData = await getVideoGameById(videogame_id);

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
