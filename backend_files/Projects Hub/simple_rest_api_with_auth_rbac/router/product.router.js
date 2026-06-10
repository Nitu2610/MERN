const auth = require("../middleware/auth.middleware");
const checkRole = require("../middleware/checkRole.middlewear");
const ProdModel = require("../model/product.model");

const express = require("express");

const prodRouter = express.Router();

prodRouter.get("/", async (req, res) => {
  try {
    let prodData = await ProdModel.find().populate("createdBy", "name email");
    // console.log(prodData)
    res.status(200).json({
      success: true,
      message: "All products are fetched.",
      data: prodData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch the product.",
      error: error.message,
    });
  }
});

prodRouter.post("/add-product", [auth, checkRole], async (req, res) => {
  let prodDetail = req.body;
  try {
    let prod = new ProdModel({ ...prodDetail, createdBy: req.user.userId }); // using the user details stored in the express req after the successfuly login, so I need to manually apss the user ID.
    await prod.save();
    res.status(201).json({
      success: true,
      message: "Product added successfully.",
      data: prod,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product cant be added due to error .",
      error: error.message,
    });
  }
});

prodRouter.patch("/update-product", [auth, checkRole], async (req, res) => {
  let id = req.query.prod_id;
  let updateDetail = req.body;
  try {
    let update = await ProdModel.findByIdAndUpdate(
      id,
      { ...updateDetail },
      { new: true, runValidators: true },
    );

    if (!update) {
      return res.status(404).json({ 
         success: false,
  message: "Product not found" });
    }
    res.status(200).json({
      success: true,
      message: " Product updated successfully.",
      data: update,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update product",
      error: error.message,
    });
  }
});

prodRouter.put("/update-details", [auth, checkRole], async (req, res) => {
  let id = req.query.prod_id;
  let updateDetails = req.body;
  try {
    let updatedDetails = await ProdModel.findByIdAndUpdate(
      // (findByIdAndUpdate)-> find a document in MongoDB by its _id and update it in one step.
      id,
      { ...updateDetails },
      { new: true, runValidators: true }, // { new: true, runValidators: true } new: true → returns the updated document after the update, not the old one runValidators: true
    );
    if (!updatedDetails) {
      return res.status(404).json({ 
        success: false,
  message: "Product not found"
   });
    }
    res.status(200).json({
      success: true,
      message: " Product details updated successfully.",
      data: updatedDetails,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update product details",
      error: error.message,
    });
  }
});

prodRouter.delete("/prod-delete/:id", [auth, checkRole], async (req, res) => {
  let { id } = req.params;
  try {
    let deletedProd = await ProdModel.findByIdAndDelete(id);
    if (!deletedProd) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
      message: " Product deleted successfully.",
      data: deletedProd,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete product.",
      error: error.message,
    });
  }
});

module.exports = prodRouter;
