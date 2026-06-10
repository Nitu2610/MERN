const express = require("express");
const UserModel = require("../model/user.model");
const dotenv = require("dotenv").config();
var jwt = require("jsonwebtoken");

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
  var token = jwt.sign(
    { email: clientData.email, role: clientData.role },
    JWT_KEY,
  );
  try {
    let user = new UserModel({ ...clientData });
    await user.save();
    res.status(201).json({
      msg: `User details added to database successfully`,
      user,
      token,
    });
  } catch (error) {
    res
      .status(500)
      .json({ err: "Unable to add the user details in the database.", error });
  }
});

userRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;

  try {
    let user = await UserModel.findOne({ email, password });
    if (!user) {
      return res
        .status(401)
        .json({ err: " The user cred are invalid or no such user avaliable." });
    }

    const token = jwt.sign({name:user.name, role:user.role}, JWT_KEY);

    res.status(200).json({ msg: "user is logged in. ", token });
  } catch (error) {
    res.status(500).json({ err: "Unable to check the credantials." });
  }
});

module.exports = userRouter;
