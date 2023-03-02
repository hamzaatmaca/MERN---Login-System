const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Please Enter Email"],
  },
  password: {
    type: String,
    require: [true, "Please Enter Password"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Login", LoginSchema);
