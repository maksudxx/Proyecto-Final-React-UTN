const {Router} = require('express');

const router = new Router();
const videogame = require('./videogame')
router.use('/', videogame);

module.exports = router;