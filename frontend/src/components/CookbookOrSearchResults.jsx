import { useEffect, useState } from 'react';
import { getRecipes } from '../services/recipes';
import RecipeTile from './RecipeTile';
import RecipeForm from './RecipeForm';

export const CookbookOrSearchResults = ({ token }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipes(token);
      setRecipes(data.savedRecipes || []); // Extract savedRecipes
    };
    fetchRecipes();
  }, [token]);

  const handleRecipeAdded = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

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
