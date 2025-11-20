const { Router } = require("express");

const router = Router();

router.use("/videogames", require("./routes/videogame"));
router.use("/genres", require("./routes/genre"));
router.use("/platforms", require("./routes/platform"));
router.use("/auth", require("./routes/jwtAuth"));
router.use("/users", require("./routes/user"));

module.exports = router;

