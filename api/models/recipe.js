const mongoose = require("mongoose");

// A Schema defines the "shape" of entries in a collection. This is similar to
// defining the columns of an SQL Database.
const RecipeSchema = new mongoose.Schema({
  message: String,
});

// We use the Schema to create the Recipe model. Models are classes which we can
// use to construct entries in our Database.
const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;