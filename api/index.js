const server = require("./src/app");
const { conn, Genre, Platform, Videogame} = require('./src/db.js');
const {createData} = require('./preloadData')
require("dotenv").config();

conn.sync({ force: false }).then(() => {
    server.listen(process.env.PORT || 3001, async () => {
      console.log('%s listening at 3001'); 
      const data = await createData();
      const genre = await Genre.bulkCreate(data.genre);
      console.log('*********Genres created');
      const platform = await Platform.bulkCreate(data.platform);
      console.log('*********Platforms created');
      const video = await Videogame.bulkCreate(data.videogame);
      await video[0].addGenre([genre[0].genre_id, genre[1].genre_id])
      await video[0].addPlatform([platform[0].platform_id, platform[1].platform_id, platform[2].platform_id]), 
      console.log('*********Videogames created')
    });
  });