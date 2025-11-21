const { Router } = require("express");

const router = new Router();
const videogame = require("./routes/videogame");
const genre = require("./routes/genre");
const platform = require("./routes/platform");
const jwtAuth = require("./routes/jwtAuth");
const user = require("./routes/user");

router.use("/", videogame);
router.use("/", genre);
router.use("/", platform);
router.use("/auth", jwtAuth);
router.use("/", user);

module.exports = router;
