import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Not worked on the below services yet - focused on frontend 
import { getRecipes } from "../../services/cookbook.js";
import Recipes from "../../components/Recipe";

export const CookBook = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const recipeData = await getRecipes(token);
          setRecipes(recipeData); 
        } catch (err) {
          console.error(err);
          navigate("/login");
        }
      } else {
        navigate("/login");
      }
    };

    fetchRecipes();
  }, [navigate]);

  return (
    <>
      <h2>Saved Recipes</h2>
      <div className="cookbook" role="cookbook">
        {recipes.length > 0 ? (
          recipes.map((recipe) => <Recipes recipe={recipe} key={recipe._id} />)
        ) : (
          <p>No recipes saved yet.</p>
        )}
      </div>
    </>
  );
};
