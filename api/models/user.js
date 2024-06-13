const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  savedRecipes: { type: Array },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
