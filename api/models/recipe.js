const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  picture: { type: String, required: true },
  ingredients: { type: Array, required: true },
  instructions: { type: String, required: true },
  user_id: { type: String, required: true }, // Add this line to include the user_id
});

module.exports = mongoose.model('Recipe', recipeSchema);
