const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    text: { type: String, trim: true, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  },
  {
    timestamps: true,
  },
);

const postSchema = mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    location: String,
    tag: [String],
    coverImage: String,
    comments: [commentSchema], // link the value(commentSchema) to comment
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

//SHort summary-
// ObjectId → stores _id of another document
// ref      → tells which model that _id belongs to
// Used to link collections without copying data
