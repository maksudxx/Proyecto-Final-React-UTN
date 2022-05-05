const { Router } = require('express')
const {Platform} = require('../db')

const router = Router();
router.get('/platforms', async (req, res) => {
    let platforms = await Platform.findAll();
    res.json(platforms);
})

module.exports = router;