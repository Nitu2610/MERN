const mongoose = require("mongoose");

const prodSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

const ProdModel = mongoose.model("product", prodSchema);

module.exports = ProdModel;
