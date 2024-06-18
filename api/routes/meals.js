const express = require("express");
const MealsController = require("../controllers/meals");

const router = express.Router();

router.post("/", MealsController.findMealByID);
router.post("/ingredients", MealsController.findMealsByIngredients);

module.exports = router;
