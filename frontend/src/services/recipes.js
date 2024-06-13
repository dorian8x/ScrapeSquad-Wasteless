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

    const response = await fetch(`${BACKEND_URL}/recipes`, requestOptions);

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
