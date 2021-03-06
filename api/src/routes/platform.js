const { Router } = require('express')
const {Platform} = require('../db')

const router = Router();
router.get('/platforms', async (req, res) => {
    let platforms = await Platform.findAll({
        order:[['platform_name', 'asc']]
    });
    res.json(platforms);
})

module.exports = router;