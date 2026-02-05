const express = require("express");
const UserModel = require("../models/users.model");

const userRouter = express.Router();

// const reply=(status_code, res_type, content, data)=>{
//     if(status_code ===201 && res_type === msg) return res.status(status_code).json({res_type:content})
//         else  if(status_code ===501 && res_type === err) return res.status(status_code).json({res_type:content}, data)
//     else {
//         res.send('the error is on wrong page.')
//     }
// }
//------------GET-------------------

userRouter.get("/details", async (req, res) => {
  try {
    const users = await UserModel.find();
    res
      .status(200)
      .json({ msg: "Successfully fetched the user details,", data: users });
  } catch (error) {
    res
      .status(500)
      .json({
        err: "Unable to fetcht the user details due to below error, ",
        error: error.message,
      });
  }
});

module.exports = userRouter;
