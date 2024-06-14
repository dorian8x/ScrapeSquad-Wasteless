const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  // add other fields as necessary
});

module.exports = mongoose.model('Recipe', recipeSchema);
