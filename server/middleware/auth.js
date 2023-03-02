var jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, process.env.SECRET, function (err, token) {
    if (err) return res.status(401).json({ error: "UnAuthorized Entry" });
  });

  next();
};
