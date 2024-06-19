import { useNavigate } from 'react-router-dom';
import { bookmarkRecipe } from '../services/recipes';

const BookmarkRecipe = ({ meal }) => {
  const navigate = useNavigate();

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
        recipePageId: meal.idMeal // Ensure this field is included
      };
      await bookmarkRecipe(token, recipe);
      alert("Recipe bookmarked successfully!");
    } catch (error) {
      console.error("Error bookmarking recipe:", error);
      alert("Error bookmarking recipe.");
    }
  };

  return (
    <button onClick={handleBookmark}>Bookmark</button>
  );
};

export default BookmarkRecipe;