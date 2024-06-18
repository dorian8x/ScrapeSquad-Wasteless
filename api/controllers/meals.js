const Recipe = require("../models/recipe");

const getMealsByIngredient = async (ingredient) => {
  try {
    const gottenMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json())
      .then((data) => data.meals);
    return gottenMeals;
  } catch (err) {
    console.error(err);
  }
};

const getMealByID = async (mealID) => {
  try {
    const gottenMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
      .then((response) => response.json())
      .then((data) => data.meals[0]);
    return gottenMeal;
  } catch (err) {
    console.error(err);
  }
};

const findMealsByIngredients = async (req, res) => {
  try {
    const wantedIngredients = Object.values(req.body);
    const foundRecipes = await Promise.all(
      wantedIngredients.map(ingredient => getMealsByIngredient(ingredient))
    );
    const finalResult = foundRecipes.reduce((commonRecipes, recipes) => {
      return commonRecipes.filter(recipe =>
        recipes.some(reci => recipe.idMeal === reci.idMeal)
      );
    });
    res.status(200).json({ recipes: finalResult });
  } catch (err) {
    console.error(err);
  }
};

const findMealByID = async (req, res) => {
  const mealID = req.params.id || req.body.mealID;
  try {
    const foundMeal = await getMealByID(mealID);
    const ingredientArray = Object.values(foundMeal).slice(9, 29);
    const measureArray = Object.values(foundMeal).slice(29, 49);
    foundMeal["formattedIngredients"] = ingredientArray.filter(
      (ing) => ing).map((ing, index) => `${ing}: ${measureArray[index]}`
    );
    res.status(200).json({ message: "Recipe fetched successfully", foundMeal: foundMeal });
  } catch (error) {
    console.error("Error fetching meal:", error);
    res.status(500).json({ message: "Error fetching meal", error });
  }
};

const MealsController = {
  findMealsByIngredients: findMealsByIngredients,
  findMealByID: findMealByID,
};

module.exports = MealsController;
