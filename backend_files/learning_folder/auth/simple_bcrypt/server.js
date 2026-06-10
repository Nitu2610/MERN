const express = require("express");
const connection = require("./config/db");
const userRouter = require("./router/user.router");
const auth = require("./middleware/auth.middleware");
const checkRole = require("./middleware/checkRole.middleware");
const dotenv = require("dotenv").config();

const server = express();
server.use(express.json());
server.use('/users',userRouter);



server.get('/cart',[auth, checkRole],(req, res)=>{
    console.log(` `, req.body )
res.send("cart page",)
})

server.get('/update-cart',[auth, checkRole],(req, res)=>{
res.send("cart page")
})

server.get('/delete-cart',[auth, checkRole],(req, res)=>{
res.send("cart page")
})












const PORT = process.env.PORT || 3000;

server.listen(PORT, async () => {
  try {
    await connection;
    console.log(`Server running on the port ${PORT}`);
    console.log(`MongoDB is connected and active.`);
  } catch (error) {
    console.log(`Server or MongoDB is unable to connect.`, error);
  }
});
