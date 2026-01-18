const server = require("./src/app");
const { conn, Genre, Platform } = require("./src/db.js");
const { createData } = require("./preloadData");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

async function startServer() {
  try {
    // Sincronizar DB
    await conn.sync({ force: true });
    console.log("Database synced");

    const countGenres = await Genre.count();

    if (countGenres === 0) {
      // Preload de data
      const { genre, platform, tag } = await createData();
      await Promise.all([
        Genre.bulkCreate(genre, {
          ignoreDuplicates: true,
        }),
        Platform.bulkCreate(platform, {
          ignoreDuplicates: true,
        })
      ]);

      console.log("Preload completed (Genres, Tags & Platforms created)");
    }
    // Levantar servidor
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error initializing server:", error);
  }
}

startServer();
