const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");

//Middleware
const auth = require("./middleware/auth");

//PORT
const PORT = process.env.PORT || 3030;

//DB
const db = require("./config/db");

//Import router
const loginRouter = require("./router/loginRouter");
const registerRouter = require("./router/registerRouter");
const contactRouter = require("./router/contactRouter");
const productRouter = require("./router/productRouter");

dotenv.config();
//Prevent  Cors
app.use(cors());

//BodyParser
// for parsing application/json
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);
// for parsing application/xwww-form-urlencoded
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);

db();

app.use("/uploads", express.static("uploads"));

//Image Upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/v1/upload", upload.single("image"), (req, res) => {
  res.status(201).json({ message: "Image uploded" });
});

app.use("/api/v1/login", loginRouter);
app.use("/api/v1/register", registerRouter);
app.use("/api/v1/contact", contactRouter);
app.use("/api/v1/product", productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
