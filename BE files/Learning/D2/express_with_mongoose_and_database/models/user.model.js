const { default: mongoose } = require("mongoose");

const userScheme = mongoose.Schema({
  name: String,
  age: Number,
  email: {type:String, required:true},
});

const UserModel = mongoose.model("user", userScheme);

module.exports = UserModel;
