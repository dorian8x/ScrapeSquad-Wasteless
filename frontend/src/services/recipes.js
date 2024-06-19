const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const bookmarkRecipe = async (token, recipe) => {
  const requestOptions = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(recipe),
  };
  const response = await fetch(`${BACKEND_URL}/recipes`, requestOptions);
  if (response.status !== 201) {
    throw new Error("Failed to bookmark recipe");
  }
  const data = await response.json();
  return data;
};

export const fetchSavedRecipes = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(`${BACKEND_URL}/recipes`, requestOptions);
  if (response.status !== 200) {
    throw new Error("Failed to fetch saved recipes");
  }
  const data = await response.json();
  return data.savedRecipes;
};
