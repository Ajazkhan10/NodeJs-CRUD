const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String },
  email: { type: String, required: true, unique: true },
  gender: String,
  job_title: String,
  timestamp: { type: Date, default: Date.now },
});

const user = mongoose.model("User", userSchema);

module.exports = user;
