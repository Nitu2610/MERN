const express = require("express");
const PostModel = require("../models/posts.model");

const postRouter = express.Router();

// ----------------GET-----------------

postRouter.get("/allposts", async (req, res) => {
  try {
    const posts = await PostModel.find()
      .populate('author', "firstName")
      .populate('comments.user', "firstName email");
    res
      .status(200)
      .json({
        success: true,
        message: "successfully retrevied the all the posts",
        data: posts
      });
  } catch (error) {
    res
      .status(500)
      .json({
          success: false,
        message: "Unable to fetch the posts due to below error. ",
        error: error,
      });
  }
});

postRouter.get("/allpostswithuserdetails", async (req, res) => {
  try {
    const posts = await PostModel.find().populate("author", "firstName email"); // used the populate concept to retrive the user details.
    res
      .status(200)
      .json({ 
          success: true,
        message:"successfully retrevied the all the posts with details",
        data: posts
   });
  } catch (error) {
    res
      .status(500)
      .json({
       
        success: false,
        message: "Unable to fetch the posts due to below error. ",
        error: error,
      });
  }
});
//-----------------POST-------------------

postRouter.post("/add-post", async (req, res) => {
  let postDetails = req.body;
  try {
    let post = new PostModel({ ...postDetails });
    await post.save();
    res
      .status(201)
      .json({
        success: true,
        message: `The post with title: ${postDetails.title} is created successfully.`,
      });
  } catch (error) {
    res.status(500).json({ 
         success: false,
        message: "Unable to create the post.",
        error: error,
       });
  }
});

postRouter.post("/:postId/comments", async (req, res) => {
  let commentDetails = req.body;
  let { postId } = req.params;
  try {
    let post = await PostModel.findById(postId);
    if (!post) return res.status(404).json({
      success: false,
      message: "Post not found",
    })
    post.comments.push({ ...commentDetails });
    await post.save();
    res
      .status(201)
      .json({
        success: true,
        message: `comment addes successfully`,
      });
  } catch (error) {
    res.status(500).json({
      success: false,
        message: "Unable to add comment.",
        error: error,
 });
  }
});

//----------------------------------------------------
module.exports = postRouter;
