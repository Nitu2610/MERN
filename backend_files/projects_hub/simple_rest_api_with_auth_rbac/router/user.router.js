const express = require("express");
var jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const UserModel = require("../model/user.model");
const auth = require("../middleware/auth.middleware");
const bcrypt = require("bcrypt");


const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  let clientData = req.body;
  try {
    const hashedPassword = await bcrypt.hash(clientData.password, 4);
    let user = new UserModel({ ...clientData, password: hashedPassword });
    await user.save();
    res.status(201).json({
      success: true,
      message: ` Ther user: ${clientData.name} are created successfully`,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: ` Ther user: ${clientData.name} are not created due to error: `,
      error: error.message,
    });
  }
});

userRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }
      var token = jwt.sign(
        { userId: user._id, name: user.name, role: user.role },
        process.env.JWT_SECRET,
      );
      res.status(200).json({
        success: true,
        message: "The user cred are matched and user is logged in. ",
        data: token,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: ` Ther user cred are not matching. `,
        error: error.message,
      });
    }
  });

userRouter.get("/userDetail", auth, async (req, res) => {
  try {
    let userDetails = req.user;
    res.status(200).json({
      success: true,
      message: "The user details from login cred are,",
      data: userDetails,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "The login details are unable to fetch from login token.",
      error: error.message,
    });
  }
});

module.exports = userRouter;
