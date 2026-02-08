const express = require("express");
const UserModel = require("../model/user.model");
const dotenv = require("dotenv").config();
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userRouter = express.Router();

const JWT_KEY = process.env.JWT_SECRETKEY;

//-----------------
userRouter.get("/userDetails", (req, res) => {
  try {
    res.send(`welome to user page.`);
  } catch (error) {
    res.send(error);
  }
});

//-----------------------POST------------------

userRouter.post("/create-user", async (req, res) => {
  let clientData = req.body;
  // console.log(clientData.password)
  bcrypt.hash(clientData.password, 5, async function (err, hash) {
    if (err)
      return res.status(500).json({ err: "Unable to bcryp the user passwrd." });

    try {
      let user = new UserModel({ ...clientData, password: hash });
      await user.save();
      res.status(201).json({
        msg: `User details added to database successfully`,
        user,
      });
    } catch (error) {
      res.status(500).json({
        err: "Unable to add the user details in the database.",
        error,
      });
    }
  });
});
//----------------------------------------------------------------------------------------
userRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        err: " The user cred. are invalid or no such user avaliable.",
      });
    } else {
      let dbPass = user.password;
      bcrypt.compare(password, dbPass, async function (err, result) {
        if (err)
          return res
            .status(500)
            .json({ err: " Unablet to bcrypt the password." });

        if (!result) {
          return res
            .status(401)
            .json({ err: "The password entered is incorrect." });
        } 
          const token = jwt.sign({ name: user.name, role: user.role }, JWT_KEY);
          return res.status(200).json({ msg: "The password entered is correct and user is logged in. ", token });
      });
    }
  } catch (error) {
    res.status(500).json({ err: "Unable to check the credantials." });
  }
});

module.exports = userRouter;
