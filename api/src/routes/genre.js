const { Router } = require("express");
const { Genre } = require("../db");
const router = Router();
try {
  
  router.get("/genres", async (_req, res) => {
    let genres = await Genre.findAll({
      order: [["genre_name", "asc"]],
      attributes: ["genre_id", "genre_name"],
    });
    res.json(genres);
  });
} catch (error) {
  console.error("Error fetching genre4s:", error);
  res.status(500).json({ error: "Internal server error" });
}
module.exports = router;
