import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findMealByID } from "../../services/meals";
import SaveRecipeButton from '../../components/SaveRecipe';
import './Recipe.css';

export const Recipe = () => {
  const [meal, setMeal] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const meal_id = useParams().id;

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);  // Update the logged-in state based on the presence of the token

    findMealByID(meal_id)
      .then((data) => {
        setMeal(data);
        console.log("meal", meal);
      })
      .catch((err) => {
        console.error(err);
        navigate("/cupboard");
      });
  }, [navigate]);

  return (
    <div className="recipe">
      <header className="header">
        <div className="header-content" style={{ backgroundImage: `url(${meal.strMealThumb})` }}>
          <h1 className="header-title">{meal.strMeal}</h1>
        </div>
      </header>
      <div className="recipe-content">
        <div className="ingredients">
          <h2>Ingredients:</h2>
          <ul>
            {/* {meal.ingredientArray.map((ing) => <li key={ing}>{ing}</li>)} */}
          </ul>
        </div>
        <div className="instructions">
          <h2>Instructions:</h2>
          {meal.strInstructions}
        </div>
      </div>
      {isLoggedIn && <SaveRecipeButton token={localStorage.getItem('token')} recipe={meal} />}
    </div>
  );
};
