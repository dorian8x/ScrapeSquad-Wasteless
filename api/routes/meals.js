const express = require("express");
const MealsController = require("../controllers/meals");

const router = express.Router();

// POST routes
router.post("/", MealsController.findMealByID);
router.post("/ingredients", MealsController.findMealsByIngredients);

// GET route for fetching meal by ID
router.get("/:id", MealsController.findMealByID);

module.exports = router;
