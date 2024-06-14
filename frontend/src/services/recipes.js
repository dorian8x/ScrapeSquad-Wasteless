// docs: https://vitejs.dev/guide/env-and-mode.html
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getRecipes = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(`${BACKEND_URL}/recipes`, requestOptions);

  if (response.status !== 200) {
    throw new Error("Unable to fetch posts");
  }

  const data = await response.json();
  return data;
};

export const saveRecipe = async (token, recipe) => {
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
    throw new Error("Unable to save recipe");
  }

  const data = await response.json();
  return data;
};
// docs: https://vitejs.dev/guide/env-and-mode.html
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const findRecipes = async (ingredientArray) => {    
    const payload = {};
    ingredientArray.forEach((value, index) => {
        payload[index] = value;
    });
    const requestOptions = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    };

    const response = await fetch(`${BACKEND_URL}/recipes/external`, requestOptions);

    // docs: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201
    if (response.status === 200) {
        let data = await response.json();
        console.log("data is:", data)
        return data.recipes;
    } else {
        throw new Error(
        `Received status ${response.status} when logging in. Expected 201`
        );
    }
};
