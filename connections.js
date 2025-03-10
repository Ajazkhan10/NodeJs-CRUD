const mongoose = require("mongoose");

async function connect(url) {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
}

module.exports = { connect };
