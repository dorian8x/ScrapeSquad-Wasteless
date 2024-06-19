const express = require("express");
const RecipesController = require("../controllers/recipes");
const tokenChecker = require("../middleware/tokenChecker");

const router = express.Router();

router.get("/", tokenChecker, RecipesController.getSavedRecipes);
router.post("/", tokenChecker, RecipesController.bookmarkRecipe);

module.exports = router;
