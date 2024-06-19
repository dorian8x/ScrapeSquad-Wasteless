const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  picture: { type: String, required: true },
  ingredients: { type: Array, required: true },
  instructions: { type: String, required: true },
  user_id: { type: String, required: true }, // user_id to associate the recipe with a user
  recipePageId: { type: String, required: true } // recipePageId to store the ID from the recipe page
});

module.exports = mongoose.model('Recipe', recipeSchema);
