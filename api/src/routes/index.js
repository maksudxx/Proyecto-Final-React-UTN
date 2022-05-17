const { Router } = require("express");

const router = new Router();
const videogame = require("./videogame");
const genre = require("./genre");
const platform = require("./platform");
const jwtAuth = require("./jwtAuth");
const user = require("./user");

router.use("/", videogame);
router.use("/", genre);
router.use("/", platform);
router.use("/auth", jwtAuth);
router.use("/", user);
module.exports = router;
