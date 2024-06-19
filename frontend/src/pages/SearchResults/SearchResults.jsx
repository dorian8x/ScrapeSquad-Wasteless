import RecipeTile from "../../components/RecipeTile/RecipeTile";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useEffect, useState  } from "react";
// import { findRecipes } from "../../services/recipes";
import "./SearchResult.css";

export function SearchResults(props) { //Props is an array of objects
    return (
        <div>
            <h1 className="search-result-title">Search Results</h1> 
            {props.props.map((recipe, index) => (
                <RecipeTile
                    key={index}
                    recipeId={recipe.idMeal}
                    picture={recipe.strMealThumb}
                    title={recipe.strMeal}
                />
            ))}
        </div>
    )
}