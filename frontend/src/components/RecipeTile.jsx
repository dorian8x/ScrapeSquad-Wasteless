import { Link } from "react-router-dom";

const RecipeTile = ({ recipe }) => {
  console.log('Rendering recipe:', recipe);

  if (!recipe) {
    return null; // Or render a placeholder
  }

  const { picture, title, _id } = recipe;

  return (
    <div className="recipe-card">
      {picture ? (
        <img src={picture} alt={title} className="recipe-image" />
      ) : (
        <div className="placeholder-image">No Image</div>
      )}
      <Link to={`/recipe/${_id}`}>{title}</Link>
      <p>ID: {_id}</p> {/* hide this later */}
    </div>
  );
};

export default RecipeTile;
