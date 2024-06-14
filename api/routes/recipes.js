const express = require("express");
const RecipesController = require("../controllers/recipes");

const router = express.Router();

router.get("/", RecipesController.getAllRecipes);
router.post("/", RecipesController.createRecipe);
router.post("/external", RecipesController.findRecipes);

module.exports = router;
