const ContactSchema = require("../model/contactModel");

exports.contactController = async (req, res) => {
  await ContactSchema.create(req.body, function (err) {
    if (err) {
      return res.status(500).json({ error: err });
    }

    return res.status(201).json({
      data: "Message Created",
    });
  });
};
