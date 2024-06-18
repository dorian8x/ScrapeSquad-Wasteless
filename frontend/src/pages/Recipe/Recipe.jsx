import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { findMealByID } from "../../services/meals";
import { bookmarkRecipe } from "../../services/recipes";
import './Recipe.css';

export const Recipe = () => {
  const [meal, setMeal] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const meal_id = useParams().id;
  const isSaved = location.state?.isSaved || false;

  useEffect(() => {
    const token = localStorage.getItem("token"); // Assuming you store the token in localStorage
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

  const handleBookmark = async () => {
    try {
      const token = localStorage.getItem("token"); // Assuming you store the token in localStorage
      if (!token) {
        navigate("/login");
        return;
      }

      const recipe = {
        title: meal.strMeal,
        picture: meal.strMealThumb,
        ingredients: meal.ingredientArray,
        instructions: meal.strInstructions
      };

      await bookmarkRecipe(token, recipe);
      alert("Recipe bookmarked successfully!");
    } catch (error) {
      console.error("Error bookmarking recipe:", error);
      alert("Error bookmarking recipe.");
    }
  };

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
            {meal.ingredientArray
              ? meal.ingredientArray.map((ing, index) => <li key={index}>{ing}</li>)
              : ""}
          </ul>
        </div>
        <div className="instructions">
          <h2>Instructions:</h2>
          {meal.strInstructions}
        </div>
        {isLoggedIn && !isSaved && <button onClick={handleBookmark}>Bookmark</button>}
      </div>
    </div>
  );
};
