const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env.local" });

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, options, () => {
      console.log("MongoDB connected...");
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
