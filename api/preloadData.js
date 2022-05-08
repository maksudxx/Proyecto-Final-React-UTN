const { v4: uuidv4 } = require("uuid");
const axios = require("axios");
const { API_KEY } = process.env;

async function createData() {
  let platforms = await axios.get(
    `https://api.rawg.io/api/platforms?key=${API_KEY}`
  );
  let genres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);

  let videogames = await axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}`
  );

  let videogames2 = await axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}&page=2`
  );
  let videogames3 = await axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}&page=3`
  );
  let videogames4 = await axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}&page=4`
  );
  let videogames5 = await axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}&page=5`
  );

  const platform = [];
  platforms.data.results.map((p) => {
    platform.push({ platform_id: p.id, platform_name: p.name });
  });

  const genre = [];
  genres.data.results.map((g) => {
    genre.push({ genre_id: g.id, genre_name: g.name });
  });

  const videogame = [];

  videogames.data.results.map((v) => {
    videogame.push({
      videogame_id: uuidv4(),
      videogame_id_api: v.id,
      videogame_name: v.name,
      videogame_description: "-",
      videogame_release_date: v.released,
      videogame_rating: v.rating,
      videogame_image: v.background_image,
    });
  });
  videogames2.data.results.map((v) => {
    videogame.push({
      videogame_id: uuidv4(),
      videogame_id_api: v.id,
      videogame_name: v.name,
      videogame_description: "-",
      videogame_release_date: v.released,
      videogame_rating: v.rating,
      videogame_image: v.background_image,
    });
  });
  videogames3.data.results.map((v) => {
    videogame.push({
      videogame_id: uuidv4(),
      videogame_id_api: v.id,
      videogame_name: v.name,
      videogame_description: "-",
      videogame_release_date: v.released,
      videogame_rating: v.rating,
      videogame_image: v.background_image,
    });
  });
  videogames4.data.results.map((v) => {
    videogame.push({
      videogame_id: uuidv4(),
      videogame_id_api: v.id,
      videogame_name: v.name,
      videogame_description: "-",
      videogame_release_date: v.released,
      videogame_rating: v.rating,
      videogame_image: v.background_image,
    });
  });
  videogames5.data.results.map((v) => {
    videogame.push({
      videogame_id: uuidv4(),
      videogame_id_api: v.id,
      videogame_name: v.name,
      videogame_description: "-",
      videogame_release_date: v.released,
      videogame_rating: v.rating,
      videogame_image: v.background_image,
    });
  });
  //console.log(videogame);
  return { genre, platform, videogame };
}

module.exports = { createData };
