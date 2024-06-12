// docs: https://vitejs.dev/guide/env-and-mode.html
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const findRecipes = async (ing1, ing2) => {
    const payload = {
        ing1: ing1,
        ing2: ing2,
    };

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