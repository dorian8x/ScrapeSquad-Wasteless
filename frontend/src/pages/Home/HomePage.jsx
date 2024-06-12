
import { useState } from "react";
import { findRecipes } from "../../services/recipes";
// import "./HomePage.css";

export const HomePage = () => {
  const [ing1, setIng1] = useState("");
  const [ing2, setIng2] = useState("");
  let [foundRecipes, setFoundRecipes] = useState([]);
  // const token = localStorage.getItem("token");

  const handleSubmitIngredients = async (event) => {
    event.preventDefault();
    try {
      await findRecipes(ing1, ing2)
      .then((recipes) => {
        console.log("recipes is (and foundRecipes is going to be):", recipes)
        setFoundRecipes(recipes);
      });
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="home">
      <p>{foundRecipes.map((recipe) => recipe.idMeal)}</p>
      <form onSubmit={handleSubmitIngredients}>
        <label htmlFor="ing1">First Ingredient:</label>
        <input 
          placeholder="ing1"
          id="ing1"
          type="text"
          value={ing1}
          onChange={(e) => setIng1(e.target.value)}
        />
        <label htmlFor="ing2">Second Ingredient:</label>
        <input
          placeholder="ing2"
          id="ing2"
          type="text"
          value={ing2}
          onChange={(e) => setIng2(e.target.value)}
        />
        <input role="submit-button" id="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};
