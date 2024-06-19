const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const findMealsByIngredients = async (ingredientArray) => {
  const payload = {};
  ingredientArray.forEach((value, index) => {
    payload[index] = value;
  });
  const requestOptions = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };
  const response = await fetch(`${BACKEND_URL}/meals/ingredients`, requestOptions);
  if (response.status === 200) {
    const data = await response.json();
    return data.recipes;
  } else {
    throw new Error("Failed to fetch recipes");
  }
};

export const findMealByID = async (mealID) => {
  const requestOptions = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(`${BACKEND_URL}/meals/${mealID}`, requestOptions);
  if (response.status === 200) {
    const data = await response.json();
    return data.foundMeal;
  } else {
    throw new Error("Failed to fetch meal by ID");
  }
};
