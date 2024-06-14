import { useEffect, useState } from 'react';
import { getRecipes } from '../services/recipes';
import RecipeTile from './RecipeTile';
import RecipeForm from './RecipeForm';

export const CookbookOrSearchResults = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipes();
      setRecipes(data);
    };
    fetchRecipes();
  }, []);

  const handleRecipeAdded = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="cookbook">
      <RecipeForm onRecipeAdded={handleRecipeAdded} />
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeTile key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};
