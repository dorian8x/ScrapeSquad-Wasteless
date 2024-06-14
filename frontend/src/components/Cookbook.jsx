import React, { useEffect, useState } from 'react';
import { getRecipes } from '../services/recipeService';
import Recipe from './Recipe';
import RecipeForm from './RecipeForm';

const Cookbook = () => {
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
          <Recipe key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Cookbook;
