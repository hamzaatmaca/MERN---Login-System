const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Please Enter title"],
  },
  type: {
    type: String,
    require: [true, "Please Enter type"],
  },
  description: {
    type: String,
    require: [true, "Please Enter description"],
  },
  price: {
    type: Number,
    require: [true, "Please Enter price"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
