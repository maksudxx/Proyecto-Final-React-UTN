const { v4: uuidv4 } = require("uuid");
const axios = require("axios");
const { API_KEY } = process.env;

async function createData() {
  //!====================GENRES===========================//
  //traer las plataformas y los generos de la api
  const genresRes = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );

  // Mapear géneros
  const genre = genresRes.data.results.map(({ id, name }) => ({
    genre_id: id,
    genre_name: name,
  }));

  // Agregar opción "Todos los géneros"
  genre.push({ genre_id: 9999, genre_name: "1-Todos los generos" });

  //!====================PLATFORMS===========================//
  // Mapear plataformas
  let platform = [];
  let page = 1;
  let totalPages = 2;

  const platformRequests = [];
  for (let i = 1; i <= totalPages; i++) {
    platformRequests.push(
      axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}&page=${i}`)
    );
  }

  const platformResponses = await Promise.all(platformRequests);

  platformResponses.forEach((res) => {
    res.data.results.forEach((p) => {
      platform.push({ platform_id: p.id, platform_name: p.name });
    });
  });

  // Agregar opción "Todas las plataformas"
  platform.push({
    platform_id: 9999,
    platform_name: "1-Todas las plataformas",
  });

  return { genre, platform };
}

module.exports = { createData };
