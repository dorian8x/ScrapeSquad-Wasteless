const express = require("express");
const router = express.Router();

const RecipesController = require("../controllers/recipes");

router.post("/", RecipesController.findRecipes);

module.exports = router;
