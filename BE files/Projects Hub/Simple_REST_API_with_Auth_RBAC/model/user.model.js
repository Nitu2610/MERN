const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, requried: true },
  email: { type: String, requried: true, uniqur: true },
  password: { type: String, requried: true },
  role: { type: String, default: "user" },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
