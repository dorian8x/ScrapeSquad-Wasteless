const Recipe = require("../models/recipe");

const getMealsByIngredient = async (ingredient) => {
    const gottenMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then((response) => response.json())
        .then((data) => data.meals);
    return gottenMeals;
  // if (response.status !== 200) {
  //   throw new Error("Unable to fetch recipes");
  // };
  // const data = response.json();
  // console.log("data is:", data);
  // return data.meals;
};

const findMealsByIngredients = async (req, res) => {
    const wantedIngredients = Object.values(req.body);
    let foundRecipes = []; // will be an array of arrays, one for each ingredient given
    for (let i = 0 ; i < wantedIngredients.length ; i++) { // for each ingredient
        await getMealsByIngredient(wantedIngredients[i]) // find all the recipes that contain it
        .then((data) => {
            foundRecipes.push(data)
        });
    };
    let finalResult = foundRecipes[0].filter(
        (recipe) => foundRecipes[1].map((reci) => reci.idMeal).includes(recipe.idMeal)
    );

    // refactor with a map or forEach
    // for (let i = 0 ; i < foundRecipes.length - 1 ; i++) { // for each array of recipes found
    //   for (let j = 0 ; j < foundRecipes[i].length ; j++) { // for each recipe in that array
    //     if (foundRecipes[i+1].includes(foundRecipes[i][j])) { // if that recipe is included in the next array of recipes (the ones found for the next ingredient)
    //       console.log("foundRecipes[i][j] is:", foundRecipes[i][j]);
    //       finalResult.push(foundRecipes[i][j]);
    //     }; 
    //   };
    // };
    // const token = generateToken(req.user_id);
    console.log("finalResult is:", finalResult);
    res.status(200).json({ recipes: finalResult/*, token: token */});
};

const MealsController = {
    findMealsByIngredients: findMealsByIngredients,
    // findMealBy_id: findMealBy_id,
};

module.exports = MealsController;
