const moongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await moongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err.message);
    // Exit proccess with failure
    process.exit(1);
  }
};

module.exports = connectDB;
