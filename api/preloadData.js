const { v4: uuidv4 } = require("uuid");
const axios = require("axios");
const { API_KEY } = process.env;

async function createData() {
  let platforms = await axios.get(
    `https://api.rawg.io/api/platforms?key=${API_KEY}`
  );
  let genres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);

  const platform = [];
  platforms.data.results.map((p) => {
    platform.push({ platform_id: p.id, platform_name: p.name });
  });

  platform.push({ platform_id:9999, platform_name:'1-Todas las plataformas'})

  const genre = [];
  genres.data.results.map((g) => {
    genre.push({ genre_id: g.id, genre_name: g.name });
  });

  genre.push({ genre_id: 9999, genre_name: "1-Todos los generos"})

  return { genre, platform };
}

module.exports = { createData };
