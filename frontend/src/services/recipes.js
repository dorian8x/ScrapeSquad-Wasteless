const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getRecipes = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(`${BACKEND_URL}/recipes`, requestOptions);

  if (response.status !== 200) {
    throw new Error("Failed to fetch recipes");
  }

  const data = await response.json();
  return data;
};

export const bookmarkRecipe = async (token, recipe) => {
  const requestOptions = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(recipe),
  };

  const response = await fetch(`${BACKEND_URL}/recipes/bookmark`, requestOptions);

  if (response.status !== 201) {
    throw new Error("Failed to bookmark recipe");
  }

  const data = await response.json();
  return data;
};

// New function to fetch saved recipes
export const fetchSavedRecipes = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(`${BACKEND_URL}/recipes/saved`, requestOptions);

    if (response.status !== 200) {
      throw new Error("Failed to fetch saved recipes");
    }

    const data = await response.json();
    console.log("Fetched saved recipes data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching saved recipes:", error);
    throw error;
  }
};
