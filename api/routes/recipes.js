const express = require("express");
const RecipesController = require("../controllers/recipes");

const router = express.Router();

router.get("/", RecipesController.getAllRecipes);
router.post("/", RecipesController.createRecipe);

module.exports = router;
