const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");
    if (!jwtToken) return res.status(403).json({ message: "Not authorized" });
    const payload = jwt.verify(jwtToken, JWT_SECRET);
    req.user = payload.user;
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(403).json("not authorized");
  }
};
