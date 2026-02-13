var jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const auth = (req, res, next) => {
  let { token } = req.query;
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({
          success: false,
          message: "The user is unable to authenticate.",
          error: err.message,
        });
    }

    console.log(
      `auth data decoded with token from url at middleware: `,
      decoded,
    );
    req.user = decoded;
    next();
  });
};

module.exports = auth;
