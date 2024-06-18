const mongoose = require('mongoose');

const savedRecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  picture: { type: String, required: true },
  ingredients: { type: Array, required: true },
  instructions: { type: String, required: true },
  userID: { type: Array, required: true }
});

module.exports = mongoose.model('Saved Recipes', savedRecipeSchema);
