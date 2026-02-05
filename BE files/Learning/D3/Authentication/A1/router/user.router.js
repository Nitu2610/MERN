const UserModel = require("../model/user.model");

const express = require("express");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  let clientData = req.body;
  try {
    let user = new UserModel({ ...clientData });
    await user.save();
    res
      .status(201)
      .json({ msg: ` The user ${clientData.name} are successfully added.` });
  } catch (error) {
    res
      .status(500)
      .json({ err: ` The user ${clientData.name} aren't added.`, error });
  }
});

userRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let cred = await UserModel.findOne({ email, password });
    if (!cred) {
      return res
        .status(401)
        .json({ error: "Invalid credentials"  });
    }
    res.status(200).json({ msg: ` The user is successfully logged in.` ,
    });
  } catch (error) {
    res.status(500).json({ err: ` The login credential are wrong `, error });
  }
});

module.exports = userRouter;
