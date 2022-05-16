const { Router } = require("express");
const { User } = require("../db");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");

const router = Router();

//registro usuario
router.post("/register", validInfo, async (req, res, next) => {
  let { user_name, user_email, user_password } = req.body;
  try {
    let user = await User.findOne({
      where: { user_email: user_email },
    });
    if (user) return res.json("el usuario ya existe.!");

    //encriptamos password
    const salt = 10;
    const generarSalt = await bcrypt.genSalt(salt);
    const bcryptPassword = await bcrypt.hash(user_password, salt);

    //creamos el nuevo usuario
    const newUser = await User.create({
      user_id: uuidv4(),
      user_name,
      user_email,
      user_password: bcryptPassword,
    });

    //generamos el JWT password
    const token = jwtGenerator(newUser.user_id);
    res.json({ token: token });
  } catch (err) {
    next(err);
  }
});

router.post("/login", validInfo, async (req, res, next) => {
  try {
    const { user_email, user_password } = req.body;
    const user = await User.findOne({ where: { user_email: user_email } });
    if (!user)
      return res.status(401).json({ message: "password or email invalid" });

    const validPassword = await bcrypt.compare(
      user_password,
      user.user_password
    );
    if (!validPassword)
      return res.status(401).json({ message: "password or email invalid" });

    const token = jwtGenerator(user.user_id);
    res.json({ token: token });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
