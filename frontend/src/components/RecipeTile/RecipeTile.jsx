import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeTile.css';

const RecipeTile = ({ recipe, onClick }) => {
  const { picture, title, strMealThumb, strMeal, idMeal } = recipe || {};
  const imageUrl = picture || strMealThumb;
  const recipeTitle = title || strMeal;

  return (
    <div className="recipe-tile" onClick={onClick}>
      <Link to={`/recipe/${idMeal}`}>
        {imageUrl ? <img src={imageUrl} alt={recipeTitle} /> : <div className="placeholder-img">No Image</div>}
        <h3>{recipeTitle || 'Untitled Recipe'}</h3>
      </Link>
    </div>
  );
};

export default RecipeTile;
