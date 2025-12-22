const { Router } = require("express");
const { Tag } = require("../db");

const router = Router();
router.get("/tags", async (req, res) => {
  const tags = await Tag.findAll({
    order: [["tag_name", "asc"]],
  });
  res.json(tags);
});

module.exports = router;
