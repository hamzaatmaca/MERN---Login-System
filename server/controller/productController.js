const ProductSchema = require("../model/ProductModel");

exports.getAllProduct = async (req, res) => {
  try {
    const allProduct = await ProductSchema.find({});

    return res.status(200).json({
      message: "Success",
      data: allProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error",
      error: error,
    });
  }
};
