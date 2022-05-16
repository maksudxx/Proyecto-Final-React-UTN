const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

function jwtGenerator(user_id) {
  const payload = {
    user: user_id,
  };

  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1hr" });
}

module.exports = jwtGenerator;
