import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRecipes } from "../../services/recipes";
import RecipeTile from "../../components/RecipeTile";
import './CookBook.css';

const CookBook = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const token = localStorage.getItem("token"); // Assuming you store the token in localStorage
        if (!token) {
          navigate("/login");
          return;
        }
        const fetchedRecipes = await getRecipes(token);
        setRecipes(fetchedRecipes.savedRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        navigate("/login");
      }
    };

    fetchRecipes();
  }, [navigate]);

  const handleRecipeClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`, { state: { isSaved: true } });
  };

  return (
    <div className="cookbook">
      {recipes.map((recipe) => (
        <RecipeTile key={recipe._id} recipe={recipe} onClick={() => handleRecipeClick(recipe._id)} />
      ))}
    </div>
  );
};

export default CookBook;
