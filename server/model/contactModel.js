const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  firstname: {
    type: String,
    require: [true, "Please Enter Name"],
  },
  lastname: {
    type: String,
    require: [true, "Please Enter Surname"],
  },
  phone: {
    type: Number,
    require: [true, "Please Enter Phone"],
  },
  email: {
    type: String,
    require: [true, "Please Enter Email"],
  },
  message: {
    type: String,
    require: [true, "Please Enter Message"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contact", ContactSchema);
