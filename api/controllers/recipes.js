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
    const user_id = req.user_id.toString(); // Ensure user_id is a string
    if (!user_id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    console.log("Bookmarking recipe for user_id:", user_id); // Added log

    const newRecipe = new Recipe({
      title,
      picture,
      ingredients,
      instructions,
      user_id: user_id,
    });

    await newRecipe.save();
    console.log("Recipe bookmarked:", newRecipe); // Log the saved recipe
    res.status(201).json({ message: "Recipe bookmarked successfully!" });
  } catch (error) {
    console.error("Error bookmarking recipe:", error);
    res.status(500).json({ message: "Failed to bookmark recipe", error });
  }
};

const getSavedRecipes = async (req, res) => {
  try {
    const userId = req.user_id.toString(); // Ensure user_id is a string
    console.log("Fetching recipes for user:", userId); // Log the user ID
    const recipes = await Recipe.find({ user_id: userId });
    console.log("Fetched recipes:", recipes); // Log the fetched recipes
    res.status(200).json(recipes);
  } catch (err) {
    console.error("Error fetching saved recipes:", err);
    res.status(500).json({ error: err.message });
  }
};

const RecipesController = {
  createRecipe,
  getAllSavedRecipesByUser_id,
  bookmarkRecipe,
  getSavedRecipes // Add this line
};

module.exports = RecipesController;
