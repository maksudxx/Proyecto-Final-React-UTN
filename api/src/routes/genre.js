const { Router } = require('express')
const {Genre} = require('../db')

const router = Router();
router.get('/genres', async (req, res) => {
    let genres = await Genre.findAll();
    res.json(genres);
})

module.exports = router;