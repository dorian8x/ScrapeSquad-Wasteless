
const getMealsByIngredient = async (ingredient) => {
    try {
        const gottenMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then((response) => response.json())
        .then((data) => data.meals);
        return gottenMeals;
    } catch (err) {
        console.error(err);
    };
};
const getMealByID = async (mealID) => {
    const gottenMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
        .then((response) => response.json())
        .then((data) => data.meals[0]);
    return gottenMeal;
};


const findMealsByIngredients = async (req, res) => {
    try {
        const wantedIngredients = Object.values(req.body);
        const foundRecipes = await Promise.all( // Get meals for each ingredient concurrently
            wantedIngredients.map(ingredient => getMealsByIngredient(ingredient))
        );
        console.log("foundRecipes is:", foundRecipes)
        const finalResult = foundRecipes.reduce((commonRecipes, recipes) => {// Reduce to find common recipes
            return commonRecipes.filter(recipe => // Filter common recipes
                recipes.some(reci => recipe.idMeal === reci.idMeal) // checks if _recipe_ is included in the _recipes_ currently being checked/reduced 
            );
        });
        res.status(200).json({ recipes: finalResult});
    } catch (err) {
        console.error(err);
    };
};

const findMealByID = async (req, res) => {
    let foundMeal = {};
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
        foundMeal["formattedIngredients"] = ingredientArray.filter(
            (ing) => ing).map((ing, index) => `${ing}: ${measureArray[index]}`
        );
        res.status(200).json({ message: "Recipe fetched successfully", foundMeal: foundMeal });
    } catch (error) {
        console.error("Error fetching meal:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const MealsController = {
    findMealsByIngredients: findMealsByIngredients,
    findMealByID: findMealByID,
};

module.exports = MealsController;
