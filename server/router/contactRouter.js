const express = require("express");
const router = express.Router();
const { contactController } = require("../controller/contactController");

router.route("/").post(contactController);

module.exports = router;
