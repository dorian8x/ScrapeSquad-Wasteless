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
const getMealByID = async (mealID) => {
    const gottenMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
        .then((response) => response.json())
        .then((data) => data.meals[0]);
    return gottenMeal;
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
const findMealBy_id = async (req, res) => {
    // const meal_id = req.params.id;
    // console.log("meal_id is:", meal_id)
    let foundMeal = {};
    // await getMealByID(meal_id)
    //     .then((data) => {
    //         foundMeal = data
    //     });
    // res.status(200).json({ recipe: recipe, message: "OK"});
    const meal_id = req.body.mealID
    try {
        await getMealByID(meal_id)
            .then((data)=> {
                foundMeal = data
            })
        if (!foundMeal) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        const ingredientArray = Object.values(foundMeal).slice(9, 29)
        const measureArray = Object.values(foundMeal).slice(29, 49)
        console.log("measureArray is:", measureArray)
        ingredientArray.map((ing, index) => `${measureArray[index]} ${ing}`)
        foundMeal["ingredientArray"] = ingredientArray;
        console.log("foundMeal is:", foundMeal)
        res.status(200).json({ message: "Recipe fetched successfully", foundMeal: foundMeal });
    } catch (error) {
        console.error("Error fetching meal:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const MealsController = {
    findMealsByIngredients: findMealsByIngredients,
    findMealBy_id: findMealBy_id,
};

module.exports = MealsController;
