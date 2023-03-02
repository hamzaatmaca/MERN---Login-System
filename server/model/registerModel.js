const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please Enter Name"],
  },
  surname: {
    type: String,
    require: [true, "Please Enter Surname"],
  },
  country: {
    type: String,
    require: [true, "Please Enter Country"],
  },
  city: {
    type: String,
    require: [true, "Please Enter City"],
  },
  phone: {
    type: Number,
    require: [true, "Please Enter Phone"],
  },
  email: {
    type: String,
    require: [true, "Please Enter Email"],
  },
  password: {
    type: String,
    require: [true, "Please Enter Password"],
  },
  file: {
    type: String,
    require: [true, "Please Enter FileName"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Register", RegisterSchema);
