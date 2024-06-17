const express = require("express");
const RecipesController = require("../controllers/recipes");

const router = express.Router();

router.get("/", RecipesController.getAllSavedRecipesByUser_id);
router.post("/", RecipesController.createRecipe);
router.post("/bookmark", RecipesController.bookmarkRecipe);

module.exports = router;
