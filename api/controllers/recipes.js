const Recipe = require("../models/recipe");
const { generateToken } = require("../lib/token");

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

const findRecipes = async (req, res) => {
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

const createRecipe = async (req, res) => {
  const recipe = new Recipe(req.body);
  recipe.save();

  const newToken = generateToken(req.user_id);
  res.status(201).json({ message: "Recipe created", token: newToken });
  };
  
  
  const createRecipe = (req, res) => {
    const { title, picture } = req.body;
    
    const recipe = new Recipe({ title, picture });
    recipe.save()
    .then((newRecipe) => {
      res.status(201).json(newRecipe);
      })
      .catch((err) => {
        console.error(err);
        res.status(400).json({ message: "Something went wrong" });
        });
        };
        
  const getAllRecipes = (req, res) => {
    Recipe.find()
      .then((recipes) => {
        res.json(recipes);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Something went wrong" });
      });
  };
  
const RecipesController = {
  findRecipes: findRecipes,
  createRecipe: createRecipe,
};

module.exports = RecipesController;
