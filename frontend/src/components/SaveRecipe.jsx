import React from 'react';
import { saveRecipe } from '../services/recipes';

const SaveRecipeButton = ({ token, recipe }) => {
  const handleSaveRecipe = async () => {
    try {
      const savedRecipe = await saveRecipe(token, recipe);
      console.log("Recipe saved:", savedRecipe);
      alert("Recipe saved successfully!");
    } catch (error) {
      console.error("Error saving recipe:", error);
      alert("Failed to save the recipe. Please try again.");
    }
  };

  return (
    <button className="save-recipe-button" onClick={handleSaveRecipe}>
      Save Recipe
    </button>
  );
};

export default SaveRecipeButton;
