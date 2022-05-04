const server = require("./src/app");
const { conn } = require('./src/db.js');
require("dotenv").config();

conn.sync({ force: false }).then(() => {
    server.listen(3001, () => {
      console.log('%s listening at 3001'); // eslint-disable-line no-console
    });
  });