const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getRecipes = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/recipes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Failed to fetch recipes');
    }
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
};

export const createRecipe = async (recipe) => {
  try {
    const response = await fetch(`${BACKEND_URL}/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Failed to create recipe');
    }
  } catch (error) {
    console.error('Error creating recipe:', error);
  }
};
