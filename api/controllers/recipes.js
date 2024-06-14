const Recipe = require("../models/recipe");

const getAllRecipes = (req, res) => {
  Recipe.find()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Something went wrong" });
    });
};

const createRecipe = (req, res) => {
  const { title, picture } = req.body;

  const recipe = new Recipe({ title, picture });
  recipe.save()
    .then((newRecipe) => {
      res.status(201).json(newRecipe);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ message: "Something went wrong" });
    });
};

const RecipesController = {
  getAllRecipes,
  createRecipe
};

module.exports = RecipesController;
