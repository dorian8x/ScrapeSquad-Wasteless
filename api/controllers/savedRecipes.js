// const savedRecipe = require("../models/savedrecipe");
// const { generateToken } = require("../lib/token");

// const saveRecipe = async (req, res) => {
//   const recipe = new savedRecipe(req.body);
//   recipe.save();
//   const newToken = generateToken(req.user_id);
//   res.status(201).json({ message: "Recipe created", token: newToken });
// };


// // const createRecipe = (req, res) => {
// //   const { title, picture } = req.body;

// //   const recipe = new Recipe({ title, picture });
// //   recipe.save()
// //   .then((newRecipe) => {
// //     res.status(201).json(newRecipe);
// //   })
// //   .catch((err) => {
// //     console.error(err);
// //     res.status(400).json({ message: "Something went wrong" });
// //   });
// // };

// const getAllSavedRecipesByUser_id = async (req, res) => {
//   try {
//     const savedRecipes = await savedRecipe.find()
//     const token = generateToken(req.user_id);
//     res.status(200).json({ savedRecipes: savedRecipes, token: token });
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };
// const RecipesController = {
//   saveRecipe: saveRecipe,
//   getAllSavedRecipesByUser_id: getAllSavedRecipesByUser_id,
// };

// module.exports = RecipesController;


// const saveRecipe = async (req, res) => {
//     const { title, picture, ingredients, instructions } = req.body;
//     const { user_id } = req;ç

//     try {
//         const newSavedRecipe = new SavedRecipe({
//             title,
//             picture,
//             ingredients,
//             instructions,
//             userID: user_id
//         });

//         await newSavedRecipe.save();

//         const newToken = generateToken(user_id);
//         res.status(201).json({ message: "Recipe created", token: newToken });
//     } catch (error) {
//         console.error('Error saving recipe:', error);
//         res.status(500).json({ message: "Failed to save recipe" });
//     }
// };

const SavedRecipe = require("../models/savedrecipe");
const { generateToken } = require("../lib/token");

const saveRecipe = async (req, res) => {
    const {
        strMeal,
        strMealThumb,
        strInstructions,
        strYoutube,
        ingredientArray
    } = req.body;
    const { user_id } = req;

    try {
        const newSavedRecipe = new SavedRecipe({
            title: strMeal,
            picture: strMealThumb,
            ingredients: ingredientArray.filter(ingredient => ingredient.trim() !== ''),
            instructions: strInstructions,
            userID: user_id,
            strMeal,
            strMealThumb,
            strInstructions,
            strYoutube,
            ingredientArray
        });

        await newSavedRecipe.save();

        const newToken = generateToken(user_id);
        res.status(201).json({ message: "Recipe created", token: newToken });
    } catch (error) {
        console.error('Error saving recipe:', error);
        res.status(500).json({ message: "Failed to save recipe" });
    }
};

const getAllSavedRecipesByUserID = async (req, res) => {
    const { user_id } = req;

    try {
        const savedRecipes = await SavedRecipe.find({ userID: user_id });
        const newToken = generateToken(user_id);
        res.status(200).json({ savedRecipes, token: newToken });
    } catch (error) {
        console.error('Error fetching saved recipes:', error);
        res.status(500).json({ message: "Failed to fetch saved recipes" });
    }
};

module.exports = {
  saveRecipe,
  getAllSavedRecipesByUserID,
};