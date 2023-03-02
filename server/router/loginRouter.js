const express = require("express");
const router = express.Router();
const {
  loginController,
  loginPhoto,
} = require("../controller/loginController");

router.route("/").post(loginController);
router.route("/loginPhoto").post(loginPhoto);

module.exports = router;
