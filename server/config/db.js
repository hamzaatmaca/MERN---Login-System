const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(
      "mongodb+srv://hamzatmacatr:1jLLWjhCD3lJ7clQ@cluster0.w6uba4m.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`MongoDB Connection is very Successfull`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = db;
