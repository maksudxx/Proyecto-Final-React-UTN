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

    // Preload de data
    const { genre, platform } = await createData();

    await Promise.all([
      Genre.bulkCreate(genre, {
        ignoreDuplicates: true,
      }),
      Platform.bulkCreate(platform, {
        ignoreDuplicates: true,
      }),
    ]);

    console.log("Preload completed (Genres & Platforms created)");

    // Levantar servidor
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error initializing server:", error);
  }
}

startServer();
