import { useNavigate } from "react-router-dom";
import { RecipeTile } from "../RecipeTile/RecipeTile";
import "./SearchResults.css";

export function SearchResults(props) {
  const navigate = useNavigate();

  const handleRecipeClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div className="search-results">
      {typeof props.foundRecipes[0] == "string" ? (
        <div className="empty-result">{props.foundRecipes}</div>
      ) : (
        props.foundRecipes.map((recipe, index) => (
          <RecipeTile
            key={index}
            recipe={recipe}
            onClick={() => handleRecipeClick(recipe.idMeal)}
          />
        ))
      )}
    </div>
  );
}
