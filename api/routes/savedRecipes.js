const express = require("express");
const savedRecipesController = require("../controllers/savedRecipes");

const router = express.Router();

router.get("/", savedRecipesController.getAllSavedRecipesByUserID);
router.post("/", savedRecipesController.saveRecipe);

module.exports = router;
