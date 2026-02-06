const auth = require("../middleware/auth.middleware");
const checkRole = require("../middleware/checkRole.middlewear");
const ProdModel = require("../model/product.model");

const express = require("express");

const prodRouter = express.Router();

prodRouter.get("/", async (req, res) => {
  try {
    let prodData = await ProdModel.find().populate("createdBy", "name email"); 
   // console.log(prodData)
    res.status(200).json({ msg: "All products are fetched.", prodData });
  } catch (error) {
    res.status(500).json({ msg: "Unable to fetch the product.", error });
  }
});

prodRouter.post("/add-product", [auth, checkRole], async (req, res) => {
  let prodDetail = req.body;
  try {
    let prod = new ProdModel({ ...prodDetail, createdBy : req.user.userId }); // using the user details stored in the express req after the successfuly login, so I need to manually apss the user ID. 
    await prod.save();
    res.status(201).json({ msg: "Product added successfully.", prod });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Product cant be added due to error .", error });
  }
});

module.exports = prodRouter;
