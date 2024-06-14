import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
// import Footer from '../../components/Footer/Footer';
import { findMeals } from "../../services/meals";
import './Recipe.css';

export const Recipe = () => {
  const [meal, setMeal] = useState({});
  const navigate = useNavigate();
  const meal_id = useParams();

  useEffect(() => {
    findMeals(meal_id)
      .then((data) => {
        setMeal(data.meal);
      })
      .catch((err) => {
        console.error(err);
        navigate("/cupboard");
      });
}, [navigate, meal_id])

  return (
    <div className="recipe">
      <header className="header">
        <div className="header-content" style={{ backgroundImage: `url` }}>
          <h1 className="header-title">Mediterranean Salad</h1>
          {/* <Buttons onButton1Click={handleButton1Click} onButton2Click={handleButton2Click} onButton3Click={handleButton3Click} /> */}
        </div>
      </header>
      <div className="recipe-content">
        <div className="ingredients">
          <h2>Ingredients:</h2>
          <ul>
            {meal.ingredients.map((ing) => {<li>{ing.amount}</li>})}
          </ul>
        </div>
        <div className="instructions">
          <h2>Instructions:</h2>

        </div>
        </div>
      
    </div>
  );
};
