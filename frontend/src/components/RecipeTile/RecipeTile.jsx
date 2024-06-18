import { Link } from "react-router-dom";
import './RecipeTile.css';

const RecipeTile = (props) => {
  return (
    <div className="recipe-card">
      
      <Link to={`/recipe/${props.recipeId}`}><img src={props.picture} alt={props.title} className="recipe-image" />{props.title}</Link> ID: {props.recipeId} {/* hide the ID later */}
    </div>
  );
};

export default RecipeTile;
