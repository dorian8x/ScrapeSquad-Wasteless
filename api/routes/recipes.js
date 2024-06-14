const express = require("express");
const RecipesController = require("../controllers/recipes");

const router = express.Router();

router.get("/", RecipesController.getAllSavedRecipesByUser_id);
router.post("/", RecipesController.createRecipe);

module.exports = router;
