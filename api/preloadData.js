const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

// const getDescription = async (id) => {
//   await axios.get(`https://api.rawg.io/api/games/${id}?key=51198d696f0f4a03aaa77936ccd81e51`)
// }

async function createData() {
  let platforms = await axios.get(
    "https://api.rawg.io/api/platforms?key=51198d696f0f4a03aaa77936ccd81e51"
  );
  let genres = await axios.get(
    "https://api.rawg.io/api/genres?key=51198d696f0f4a03aaa77936ccd81e51"
  );

  let videogames = await axios.get(
    "https://api.rawg.io/api/games?key=51198d696f0f4a03aaa77936ccd81e51"
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
      videogame_id: v.id,
      videogame_name: v.name,
      videogame_description: '-',
      videogame_release_date: v.released,
      videogame_rating: v.rating,
      videogame_image: v.background_image,
    });
  });
  //console.log(videogame);
  return { genre, platform, videogame };
}

module.exports = { createData };
