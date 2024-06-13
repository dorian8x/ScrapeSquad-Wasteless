import Recipe from "../../components/Recipe";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState  } from "react";
import { findRecipes } from "../../services/recipes";


export function SearchResults() { //Props is an array of objects
    const [foundRecipes, setFoundRecipes] = useState([])
    const navigate = useNavigate();
    const location = useLocation();
    let ingredientArr = location.state.ingredient


    useEffect(() => {
            findRecipes(ingredientArr)
            .then((recipes) => {
                setFoundRecipes(recipes);
            })
        }, [navigate]);

    return (
        <div>
            <h1>Search Results</h1>
            {foundRecipes.map((recipe, index) => (
                <Recipe
                    key={index}
                    recipeId={recipe.idMeal}
                    picture={recipe.strMealThumb}
                    title={recipe.strMeal}
                />
            ))}
        </div>
    )
}