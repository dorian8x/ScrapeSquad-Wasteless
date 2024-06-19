import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchSavedRecipes } from "../../services/recipes";
import RecipeTile from "../../components/RecipeTile/RecipeTile";
import './CookBook.css';

const CookBook = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.log("No token found, redirecting to login");
          navigate("/login");
          return;
        }
        console.log("Fetching recipes with token:", token);
        const fetchedRecipes = await fetchSavedRecipes(token);
        console.log("Fetched recipes:", fetchedRecipes);
        setRecipes(fetchedRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        navigate("/login");
      }
    };

    fetchRecipes();
  }, [navigate]);

  const handleRecipeClick = (recipePageId) => {
    navigate(`/recipe/${recipePageId}`, { state: { isSaved: true } });
  };

  return (
    <div className="cookbook">
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <RecipeTile key={recipe._id} recipe={recipe} onClick={() => handleRecipeClick(recipe.recipePageId)} />
        ))
      ) : (
        <p>No saved recipes found.</p>
      )}
    </div>
  );
};

export default CookBook;
