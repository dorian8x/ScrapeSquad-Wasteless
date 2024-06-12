import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getRecipes } from "../../services/cookbook";
import Recipes from "../../components/Recipes";

export const CookBook = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getRecipes(token)
        .then((data) => {
          setRecipes(data.posts);
          localStorage.setItem("token", data.token);
        })
        .catch((err) => {
          console.error(err);
          navigate("/login");
        });
    }
  }, [navigate]);

  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
    return;
  }

  return (
    <>
      <h2>Saved Recipes</h2>
      <div className="cookbook" role="cookbook">
        {recipes.map((recipes) => (
          <Recipes recipes={recipes} key={recipes._id} />
        ))}
      </div>
    </>
  );
};
