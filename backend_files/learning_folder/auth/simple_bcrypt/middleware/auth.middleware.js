const jwt = require("jsonwebtoken");
const blockListedToken = require("../blockTokenFromReLogin");
const dotenv = require("dotenv").config();

const auth = (req, res, next) => {
  const {token} = req.headers.authorization.split(" ")[1]; // Here we used headers to ensure the token details are not shared in the url directly. 'headers.authorization; '-> in header of client look for authorization. 
  // And from the thunder client or postman, we need to send the token details under 'Header-> Add header as- 'Authorization' and key as token value= 'Bearer 'actual token value'.
 if(blockListedToken.includes(token)){
  res.send(' Unable to login as user session is out. Need to relogin.')
 } 
  jwt.verify(token, process.env.JWT_SECRETKEY, (err, decoded) => {
    if (err){return res.status(500).json({ err: "Unable to decode the token", err });}
   // console.log(`decoding stage`,decoded); // If pyload is not visible in terminal check the token on off-site.
     req.body.username=decoded.name;
     req.body.role=decoded.role;
    next();
  });
 
};



module.exports=auth;

