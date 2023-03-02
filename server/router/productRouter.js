const express = require("express");
const router = express.Router();
const { getAllProduct } = require("../controller/productController");

router.route("/").get(getAllProduct);

module.exports = router;
