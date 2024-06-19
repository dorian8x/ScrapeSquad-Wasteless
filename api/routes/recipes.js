const express = require("express");
const RecipesController = require("../controllers/recipes");
const tokenChecker = require("../middleware/tokenChecker");

const router = express.Router();

router.get("/", tokenChecker, RecipesController.getAllSavedRecipesByUser_id);
router.post("/", tokenChecker, RecipesController.createRecipe);
router.post("/bookmark", tokenChecker, RecipesController.bookmarkRecipe);
router.get("/saved", tokenChecker, RecipesController.getSavedRecipes);

module.exports = router;
