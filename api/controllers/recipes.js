const Recipe = require("../models/recipe");


const getSavedRecipes = async (req, res) => {
  try {
    const savedRecipes = await Recipe.find({ user_id: req.user_id });
    res.status(200).json({ savedRecipes });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const bookmarkRecipe = async (req, res) => {
  const { title, picture, ingredients, instructions, recipePageId } = req.body;

  try {
    const user_id = req.user_id.toString();
    if (!user_id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    if (!recipePageId) {
      return res.status(400).json({ message: "Recipe Page ID is required" });
    }

    const newRecipe = new Recipe({
      title,
      picture,
      ingredients,
      instructions,
      user_id: user_id,
      recipePageId: recipePageId // Save the recipePageId
    });

    await newRecipe.save();
    console.log("Recipe bookmarked:", newRecipe);
    res.status(201).json({ message: "Recipe bookmarked successfully!" });
  } catch (error) {
    console.error("Error bookmarking recipe:", error);
    res.status(500).json({ message: "Failed to bookmark recipe", error });
  }
};


const RecipesController = {
  bookmarkRecipe,
  getSavedRecipes
};

module.exports = RecipesController;
