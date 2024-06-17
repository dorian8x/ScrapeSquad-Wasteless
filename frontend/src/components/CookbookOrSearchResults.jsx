import { useEffect, useState } from 'react';
import { getRecipes } from '../services/recipes';
import RecipeTile from './RecipeTile';
import RecipeForm from './RecipeForm';

export const CookbookOrSearchResults = ({ token }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipes(token);
      console.log("Fetched recipes:", data); // Log the fetched data
      setRecipes(data.savedRecipes || []); // Extract savedRecipes
    };
    fetchRecipes();
  }, [token]);

  const handleRecipeAdded = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  console.log("recipes:", recipes); // Add this line

  return (
    <div className="cookbook">
      <RecipeForm token={token} onRecipeAdded={handleRecipeAdded} />
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeTile key={recipe._id} recipe={recipe} /> // Ensure _id is unique
        ))}
      </div>
    </div>
  );
};
