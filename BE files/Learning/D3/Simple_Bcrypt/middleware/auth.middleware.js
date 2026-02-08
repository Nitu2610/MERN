const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const auth = (req, res, next) => {
  const {token} = req.query;
  jwt.verify(token, process.env.JWT_SECRETKEY, (err, decoded) => {
    if (err){return res.status(500).json({ err: "Unable to decode the token", err });}
   // console.log(`decoding stage`,decoded); // If pyload is not visible in terminal check the token on off-site.
     req.body.username=decoded.name;
     req.body.role=decoded.role;
    next();
  });
};



module.exports=auth;

