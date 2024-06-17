import React from 'react';
import RecipeTile from "../../components/RecipeTile";

export function SearchResults({ recipes }) { // Destructure the recipes prop

  if (!recipes || recipes.length === 0) {
    return <div>No recipes found.</div>;
  }

  return (
    <div>
      <h1>Search Results</h1>
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <RecipeTile
            key={recipe._id} // Use a unique key
            recipe={recipe} // Pass the whole recipe object
          />
        ))}
      </div>
    </div>
  );
}
