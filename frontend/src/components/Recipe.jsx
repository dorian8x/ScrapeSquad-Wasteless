import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.picture} alt={recipe.title} className="recipe-image" />
      <h3>{recipe.title}</h3>
      <p>ID: {recipe._id}</p>
    </div>
  );
};

export default Recipe;