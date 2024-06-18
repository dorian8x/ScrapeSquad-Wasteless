const Recipe = require("../models/recipe");

const createRecipe = async (req, res) => {
  const { title, picture, ingredients, instructions } = req.body;
  const newToken = req.newToken;

  try {
    const newRecipe = new Recipe({
      title,
      picture,
      ingredients,
      instructions,
      user_id: req.user_id,
    });

    await newRecipe.save();
    res.status(201).json({ message: "Recipe created", token: newToken });
  } catch (error) {
    res.status(500).json({ message: "Failed to create recipe", error });
  }
};

const getAllSavedRecipesByUser_id = async (req, res) => {
  try {
    const savedRecipes = await Recipe.find({ user_id: req.user_id });
    res.status(200).json({ savedRecipes });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const bookmarkRecipe = async (req, res) => {
  const { title, picture, ingredients, instructions } = req.body;

  try {
    // Log request body and user_id for debugging
    console.log("Request Body:", req.body);
    console.log("User ID:", req.user_id);

    const user_id = req.user_id;
    if (!user_id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const newRecipe = new Recipe({
      title,
      picture,
      ingredients,
      instructions,
      user_id: user_id,
    });

    await newRecipe.save();
    res.status(201).json({ message: "Recipe bookmarked successfully!" });
  } catch (error) {
    console.error("Error bookmarking recipe:", error);
    res.status(500).json({ message: "Failed to bookmark recipe", error });
  }
};

const RecipesController = {
  createRecipe,
  getAllSavedRecipesByUser_id,
  bookmarkRecipe,
};

module.exports = RecipesController;
