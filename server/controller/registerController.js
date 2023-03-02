const RegisterSchema = require("../model/registerModel");
const bcrypt = require("bcrypt");

exports.registerController = (req, res) => {
  bcrypt.hash(req.body.password, 10, async function (err, hash) {
    if (err) return res.status(500).json({ error: "Password Not Salted" });

    const userAlreadyExist = await RegisterSchema.findOne({
      email: req.body.email,
    });

    if (userAlreadyExist) {
      return res.status(500).json({ data: "User Already Exists" });
    } else {
      let userObj = {
        name: req.body.firstname,
        surname: req.body.lastname,
        country: req.body.country,
        city: req.body.city,
        phone: req.body.phone,
        password: hash,
        email: req.body.email,
        file: req.body.file,
      };

      await RegisterSchema.create(userObj, function (err) {
        if (err) {
          return res.status(500).json({ error: err });
        }

        return res.status(201).json({
          data: "User Created",
        });
      });
    }
  });
};
