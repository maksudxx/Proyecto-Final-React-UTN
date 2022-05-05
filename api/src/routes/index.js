const {Router} = require('express');

const router = new Router();
const videogame = require('./videogame')
const genre = require('./genre')
const platform = require('./platform')
router.use('/', videogame);
router.use('/', genre);
router.use('/', platform);

module.exports = router;