import { useNavigate } from "react-router-dom";
import RecipeTile from "../../components/RecipeTile/RecipeTile";
import "./SearchResult.css";

export function SearchResults(props) {
  const navigate = useNavigate();

  const handleRecipeClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div>
      <h1 className="search-result-title">Search Results</h1>
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
// import { useNavigate, useLocation } from "react-router-dom";
// import { useEffect, useState  } from "react";
// import { findRecipes } from "../../services/recipes";

// export function SearchResults(props) { //Props is an array of objects
//     return (
//         <div>
//             <h1 className="search-result-title">Search Results</h1> 
//             {props.props.map((recipe, index) => (
//                 <RecipeTile
//                     key={index}
//                     recipeId={recipe.idMeal}
//                     picture={recipe.strMealThumb}
//                     title={recipe.strMeal}
//                 />
//             ))}
//         </div>
//     )
// }
