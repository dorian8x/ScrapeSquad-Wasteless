const express = require("express");
const router = express.Router();

const RecipesController = require("../controllers/recipes");

router.post("/", RecipesController.findRecipes);
router.post("/external", RecipesController.findRecipes);

module.exports = router;
