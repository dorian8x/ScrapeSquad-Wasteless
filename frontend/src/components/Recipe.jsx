import { Link } from "react-router-dom";

const props = (props) => {
  return (
    <div className="recipe-card">
      <img src={props.picture} alt={props.title} className="recipe-image" />
      <Link to="/somewhere, ask Jose">{props.title}</Link>
      <p>ID: {props.recipeId}</p> {/* hide this later */}
    </div>
  );
};

export default props;
