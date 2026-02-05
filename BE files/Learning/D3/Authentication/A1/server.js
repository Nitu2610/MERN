const express = require("express");
const connection = require("./config/db");
const userRouter = require("./router/user.router");
const dotenv = require("dotenv").config();

const server = express();
server.use(express.json());
server.use('/user',userRouter);



server.get('/profile',(req,res)=>{
    let {token}=req.query;
    if(token == "tokenId-1"){
        res.status(203).json({msg:'User Profile Details as user logged in'})
    } else {
         res.status(500).json({err:'Please login first!!!!'})
    }
})


const PORT = process.env.PORT || 3000;
server.listen(PORT, async () => {
  try {
    await connection;
    console.log(`Server is running on the port ${PORT}`);
    console.log("Database is connected and running.");
  } catch (error) {
    console.log("Unable to connect to server or database.");
  }
});
