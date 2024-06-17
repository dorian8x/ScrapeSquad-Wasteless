const Recipe = require("../models/recipe");
const { generateToken } = require("../lib/token");

const createRecipe = async (req, res) => {
  const recipe = new Recipe(req.body);
  recipe.save();
  const newToken = generateToken(req.user_id);
  res.status(201).json({ message: "Recipe created", token: newToken });
};


// const createRecipe = (req, res) => {
//   const { title, picture } = req.body;

//   const recipe = new Recipe({ title, picture });
//   recipe.save()
//   .then((newRecipe) => {
//     res.status(201).json(newRecipe);
//   })
//   .catch((err) => {
//     console.error(err);
//     res.status(400).json({ message: "Something went wrong" });
//   });
// };

const getAllSavedRecipesByUser_id = async (req, res) => {
  try {
    const savedRecipes = await Recipe.find()
    const token = generateToken(req.user_id);
    res.status(200).json({ savedRecipes: savedRecipes, token: token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
const RecipesController = {
  createRecipe: createRecipe,
  getAllSavedRecipesByUser_id: getAllSavedRecipesByUser_id,
};

module.exports = RecipesController;
