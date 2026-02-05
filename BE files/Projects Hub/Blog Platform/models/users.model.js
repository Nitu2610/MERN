const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dateOfBirth: String,
    gender: String,
    location: String,
    mobileNumber: String, // Not as number because the user can enter "0's"
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  },
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;





// User model (clean & realistic)

// Mandatory
// firstName
// email (unique)
// password

// Optional
// lastName
// DOB
// gender
// location
// mobileNumber
