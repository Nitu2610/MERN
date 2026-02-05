const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    location: String,
    tag: [String],
    coverImage: String,
  },
  {
    timestamps: true,
  },
);

const PostModel = mongoose.model("post", postSchema);

module.exports = PostModel;

// Post model (mental picture)

// Mandatory
// title
// content
// author (userId reference)

// Optional
// location
// tag
// coverImage

//  type: mongoose.Schema.Types.ObjectId,
// ==>MongoDB creates a unique ID for every document. That ID looks like: 65f3a9c4e8...
// This line says: “This field will store the ID of another document”

//      ref: "user",
//  ==> Tells Mongoose which collection this ID belongs to.
// "user" must match: ==> mongoose.model("user", userSchema);
