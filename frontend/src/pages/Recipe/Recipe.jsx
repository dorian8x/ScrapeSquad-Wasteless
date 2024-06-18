// frontend/src/pages/Recipe/Recipe.jsx

import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { findMealByID } from "../../services/meals";
import BookmarkRecipe from "../../components/BookmarkRecipe";
import './Recipe.css';

export const Recipe = () => {
  const [meal, setMeal] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const meal_id = useParams().id;
  const isSaved = location.state?.isSaved || false;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }

    findMealByID(meal_id)
      .then((data) => {
        setMeal(data);
      })
      .catch((err) => {
        console.error(err);
        navigate("/cupboard");
      });
  }, [navigate, meal_id]);

  return (
    <div className="recipe">
      <h1>{meal.strMeal}</h1>
      {meal.strMealThumb && <img src={meal.strMealThumb} alt={meal.strMeal} />}
      <div className="ingredients">
        <h2>Ingredients:</h2>
        <ul>
          {meal.ingredientArray ? meal.ingredientArray.map((ing, index) => <li key={index}>{ing}</li>) : ""}
        </ul>
      </div>
      <div className="instructions">
        <h2>Instructions:</h2>
        {meal.strInstructions}
      </div>
      {isLoggedIn && !isSaved && <BookmarkRecipe meal={meal} />}
    </div>
  );
};
