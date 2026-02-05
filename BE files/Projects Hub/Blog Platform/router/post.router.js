const express =require('express');
const PostModel = require('../models/posts.model');

const postRouter=express.Router();


// ----------------GET-----------------

postRouter.get('/allposts',async( req, res)=>{
   try {
     const posts= await PostModel.find();
     res.status(200).json({"msg":"successfully retrevied the all the posts", data: posts})
   } catch (error) {
    res.status(500).json({"err": "Unable to fetch the posts due to below error. ", error:error})
   }
})

//-----------------POST-------------------

postRouter.post('/add-post',async( req,res)=>{
    let postDetails=req.body;
    try {
        let post=new PostModel({...postDetails});
        await post.save();
        res.status(201).json({"msg":`The post with title: ${postDetails.title} is created successfully.`})
    } catch (error) {
        res.status(500).json({"err":"Unable to create the post." , error:error})
    }
})


//----------------------------------------------------
module.exports=postRouter;