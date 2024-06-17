import { Link } from "react-router-dom";

const RecipeTile = (props) => {
  return (
    <div className="recipe-card">
      <img src={props.picture} alt={props.title} className="recipe-image" />
      <Link to={`/recipe/${props.recipeId}`}>{props.title}</Link>
      <p>ID: {props.recipeId}</p> {/* hide this later */}
    </div>
  );
};

export default RecipeTile;
