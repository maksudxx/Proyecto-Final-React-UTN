const {Router} = require('express');

const router = new Router();
const prueba = require('./prueba')
router.use('/', prueba)

module.exports = router;