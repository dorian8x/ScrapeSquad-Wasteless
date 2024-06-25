import { useNavigate } from "react-router-dom";
import { bookmarkRecipe } from "../../services/recipes";
import { useState } from "react";
import "./BookmarkRecipe.css";

export const BookmarkRecipe = ({ meal }) => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState();

  const handleBookmark = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
      }
      const recipe = {
        title: meal.strMeal,
        picture: meal.strMealThumb,
        ingredients: meal.formattedIngredients,
        instructions: meal.strInstructions,
        recipePageId: meal.idMeal,
      };
      await bookmarkRecipe(token, recipe);
      setIsClicked(true);
      alert("Recipe bookmarked successfully!");
    } catch (error) {
      console.error("Error bookmarking recipe:", error);
      alert("Error bookmarking recipe.");
    }
  };

  return (
    <>
      {!isClicked && <button className="bookmark-recipe-btn" onClick={handleBookmark}>Bookmark</button>}
    </>
  );
};
