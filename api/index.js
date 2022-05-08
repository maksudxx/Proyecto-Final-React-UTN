const server = require("./src/app");
const { conn, Genre, Platform } = require("./src/db.js");
const { createData } = require("./preloadData");
require("dotenv").config();

conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3001, async () => {
    console.log("%s listening at 3001");
    const data = await createData();
    const genre = await Genre.bulkCreate(data.genre);
    console.log("*********Genres created");
    const platform = await Platform.bulkCreate(data.platform);
    console.log("*********Platforms created");
  });
});
