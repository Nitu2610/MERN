const express = require("express");
var jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const UserModel = require("../model/user.model");
const auth = require("../middleware/auth.middleware");

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  let clientData = req.body;
  try {
    let user = new UserModel({ ...clientData });
    await user.save();
    res.status(201).json({
      msg: ` Ther user: ${clientData.name} are created successfully`,
    });
  } catch (error) {
    res.status(500).json({
      err: ` Ther user: ${clientData.name} are not created due to error: `,
      error,
    });
  }
});

userRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email, password });

    if (!user) {
      return res
        .status(500)
        .json({ err: "The user details are not avaliable." });
    }

    var token = jwt.sign(
      { userId: user._id, name: user.name, role: user.role },
      process.env.JWT_SECRET,
    );
    res
      .status(200)
      .json({
        msg: "The user cred are matched and user is logged in. ",
        token,
      });
  } catch (error) {
    res.status(500).json({
      err: ` Ther user cred are not matching. `,
      error,
    });
  }
});

userRouter.get("/userDetail", auth, async (req, res) => {
  try {
    let userDetails = req.user;
    res
      .status(200)
      .json({ msg: "The user details from login cred are,", userDetails });
  } catch (error) {
    res
      .status(500)
      .json({
        err: "The login details are unable to fetch from login token.",
        error,
      });
  }
});

module.exports = userRouter;
