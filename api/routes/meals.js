const express = require("express");
const MealsController = require("../controllers/meals");

const router = express.Router();

// router.post("/:id", MealsController.findMealBy_id);
router.post("/external", MealsController.findMealsByIngredients);

module.exports = router;
