const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const checkRole=(req,res,next)=>{
    if(req.body.role=== 'admin') {return next();}
    res.send('You are not authorized to access this route.')
}

module.exports=checkRole;