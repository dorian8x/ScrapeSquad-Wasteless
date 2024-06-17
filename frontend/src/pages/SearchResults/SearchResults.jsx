import { useNavigate } from "react-router-dom";
import RecipeTile from "../../components/RecipeTile";

export function SearchResults(props) {
  const navigate = useNavigate();

  const handleRecipeClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div>
      <h1>Search Results</h1>
      {props.props.map((recipe, index) => (
        <RecipeTile
          key={index}
          recipe={recipe}
          onClick={() => handleRecipeClick(recipe.idMeal)}
        />
      ))}
    </div>
  );
}
