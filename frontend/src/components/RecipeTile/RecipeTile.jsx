import './RecipeTile.css';

const RecipeTile = ({ recipe, onClick }) => {
  const { picture, title, strMealThumb, strMeal } = recipe || {};

  const imageUrl = picture || strMealThumb;
  const recipeTitle = title || strMeal;

  return (
    <div className="recipe-tile" onClick={onClick}>
      {imageUrl ? <img src={imageUrl} alt={recipeTitle} /> : <div className="placeholder-img">No Image</div>}
      <h3>{recipeTitle || 'Untitled Recipe'}</h3>
    </div>
  );
};

export default RecipeTile;
