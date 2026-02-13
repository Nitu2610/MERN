const express = require("express");
const mongoose = require("mongoose");
const connection = require("./config/db");
const UserModel = require("./models/user.model");
const userRouter = require("./routes/user.route");

const server = express();
server.use(express.json());
server.use('/usersData', userRouter) 
//-----------------------------------------------------------------


//---------------------------------
const PORT = 5100;
server.listen(PORT, async () => {
  try {
    await connection;
    console.log(`server is running on the PORT:${PORT}`);
    console.log(` The Database server is linked.`);
  } catch (error) {
    console.log(`error connecting to the database or server ${error}`);
  }
});





// Without Routes we need to individually write all the http methods in the main file `server.js`. 


// //------------------GET---------------------
// server.get("/", (req, res) => {
//   res.send("Welcome to Express server.");
// });

// server.get('/users',async(req,res)=>{
//     try {
//         const users= await UserModel.find(); // We use UserModel.find() because in Mongoose, the Model is the JavaScript representation of a MongoDB collection, and all database operations are done through the Model, not by directly using the collection name.
//         res.status(200).json({"response":`the users data are below`, users})
//     } catch (error) {
//         res.status(500).send(`Unable to fetch the data due to error,${error}`)
//     }
// })

// //----------------------PATCH--------------------------

// server.patch('/users/:id',async(req,res)=>{ // here when I the data is send from the Postman, ensure ':' is removed in the url. ':id' => user.
//     const {id}=req.params;
//     try {
//         const updataUser= await UserModel.findByIdAndUpdate({_id:id},req.body);
//         res.status(203).json({"message":"Updated Successfully", updataUser})
//     } catch (error) {
//         res.status(501).json({"message":"Unable to update due to error", error})
//     }
// })

// //----------------------Delete--------------------------

// server.delete('/users/:id',async(req,res)=>{ // here when I the data is send from the Postman, ensure ':' is removed in the url. ':id' => user.
//     const {id}=req.params;
//     try {
//         const deleteUser= await UserModel.findByIdAndDelete({_id:id},req.body);
//         res.status(203).json({"message":"Deleted Successfully", deleteUser})
//     } catch (error) {
//         res.status(501).json({"message":"Unable to delete due to error", error})
//     }
// })


// //----------------------POST--------------------------

// server.post("/create-user", async (req, res) => {
//   const { name, age, email } = req.body;

//   try {
//     const user = new UserModel({
//       name,
//       age,
//       email,
//     });
//     await user.save();
//     res
//       .status(201)
//       .json({ message: `The ${name} data is created successfully` });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: `Data was unable to created due to error: ${error}` });
//   }
// });

// //---------------------------------
