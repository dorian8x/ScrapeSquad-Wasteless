// docs: https://vitejs.dev/guide/env-and-mode.html
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const findMealsByIngredients = async (ingredientArray) => {    
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

    const response = await fetch(`${BACKEND_URL}/meals/ingredients`, requestOptions);

    // docs: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201
    if (response.status === 200) {
        let data = await response.json();
        return data.recipes;
    } else {
        throw new Error(
        `Received status ${response.status} when logging in. Expected 201`
        );
    }
};

export const findMealByID = async (mealID) => {    
    const payload = {
        mealID: mealID
    };
    const requestOptions = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    };
    const response = await fetch(`${BACKEND_URL}/meals`, requestOptions);
    if (response.status === 200) {
        let data = await response.json();
        return data.foundMeal;
    } else {
        throw new Error(
        `Received status ${response.status} when logging in. Expected 200`
        );
    }
};
