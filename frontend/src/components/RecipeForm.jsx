import { useState } from 'react';
import { saveRecipe } from '../services/recipes';

const RecipeForm = ({ onRecipeAdded }) => {
  const [title, setTitle] = useState('');
  const [picture, setPicture] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = await saveRecipe({ title, picture });
    onRecipeAdded(newRecipe);
    setTitle('');
    setPicture('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={picture}
        onChange={(e) => setPicture(e.target.value)}
        placeholder="Image URL"
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
