import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { findMealByID } from "../../services/meals";
import './Recipe.css';

export const Recipe = () => {
  const [meal, setMeal] = useState({});
  const navigate = useNavigate();
  const meal_id = useParams().id;

  useEffect(() => {
    findMealByID(meal_id)
      .then((data) => {
        setMeal(data);
      })
      .catch((err) => {
        console.error(err);
        navigate("/cupboard");
      });
}, [navigate])

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
            {meal.formattedIngredients
            ? meal.formattedIngredients.map(
                (ing, index) => <li key={index}>{ing}</li>)
              : ""}
          </ul>
        </div>
        <div className="instructions">
          <h2>Instructions:</h2>
            {meal.strInstructions}
        </div>
      </div>
          {/* <Buttons onButton1Click={handleButton1Click}onButton3Click={handleButton3Click} /> */}
    </div>
  );
};
