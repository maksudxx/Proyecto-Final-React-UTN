const { Router } = require("express");
const { User } = require("../db");
const authorization = require("../middleware/authorization");

const router = Router();

router.get('/user', authorization, async (req, res,next) => {
    try {
        //el valor de req.user proviene desde la authorization. esta me sirve para traer la informacion del usuario logueado
        let user = await User.findOne({
            where: {user_id : [req.user]}
        })
        res.json(user)
    } catch (error) {
        next(error);
    }
})

module.exports = router;