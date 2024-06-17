import RecipeTile from "../../components/RecipeTile/RecipeTile";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useEffect, useState  } from "react";
// import { findRecipes } from "../../services/recipes";


export function SearchResults(props) { //Props is an array of objects
    // const [foundRecipes, setFoundRecipes] = useState([])
    // const navigate = useNavigate();
    // const location = useLocation();
    // let ingredientArr = location.state.ingredient


    // useEffect(() => {
    //         findRecipes(props.ingredientArr)
    //         .then((recipes) => {
    //             setFoundRecipes(recipes);
    //         })
    //     }, [navigate]);

    return (
        <div>
            <h1>Search Results</h1>
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