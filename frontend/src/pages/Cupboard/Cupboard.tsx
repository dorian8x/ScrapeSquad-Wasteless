import './Cupboard.css';
import React, { useState } from "react";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import DroppedWidget from "../../components/DroppedWidget/DroppedWidget";
import { findMeals } from '../../services/meals';
import { SearchResults } from '../SearchResults/SearchResults';

export function Cupboard() {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [foundRecipes, setFoundRecipes] = useState<Object[]>([]);
    const itemsPerShelf = 5; // Adjust this number to control how many items fit on one shelf

    function handleOnDrag(e: React.DragEvent, ingredientType: string) {
        e.dataTransfer.setData("ingredientType", ingredientType);
    }

    function handleOnDrop(e: React.DragEvent) {
        e.preventDefault();
        const ingredientType = e.dataTransfer.getData("ingredientType") as string;
        console.log("ingredientType", ingredientType);
        setIngredients([...ingredients, ingredientType]);
    }

    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
    }

    function handleRemoveWidget(index: number) {
        const updatedIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(updatedIngredients);
    }

    function handleClearAll() {
        setIngredients([]);
    }

    const numberOfShelves = Math.ceil(ingredients.length / itemsPerShelf);

    const handleSubmitIngredients = async (event) => {
        event.preventDefault();
        try {
            await findMeals(ingredients)
            .then((recipes) => {
                console.log("Fetched recipes:", recipes); // Log the fetched recipes
                const processedRecipes = recipes.map(r => ({
                    title: r.strMeal,
                    picture: r.strMealThumb,
                    _id: r.idMeal
                }));
                console.log("Processed recipes:", processedRecipes); // Log the processed recipes
                setFoundRecipes(processedRecipes);
            });
        } catch (err) {
            console.error(err);
        }
    };
    
    return (
        <>
            <div className="cupboard">
                <CustomDropdown onDragStart={handleOnDrag} />
                <button className="clear-button" onClick={handleClearAll}>Clear All</button>
                <div 
                className="page" 
                onDrop={handleOnDrop} 
                onDragOver={handleDragOver}
            >
                {Array.from({ length: numberOfShelves }, (_, shelfIndex) => (
                    <div className="shelf" key={shelfIndex}>
                        {ingredients
                            .slice(shelfIndex * itemsPerShelf, (shelfIndex + 1) * itemsPerShelf)
                            .map((widget, index) => (
                                <DroppedWidget
                                    key={index + shelfIndex * itemsPerShelf}
                                    widget={widget}
                                    index={index + shelfIndex * itemsPerShelf}
                                    onRemove={handleRemoveWidget}
                                />
                            ))}
                    </div>
                ))}
            </div>
            </div>
            <div className="home">
                <form onSubmit={handleSubmitIngredients}>
                    <input role="submit-button" id="submit" type="submit" value="Submit" />
                </form>
            </div>
            <SearchResults recipes={foundRecipes} /> {/* Pass recipes as prop */}
        </>
    );
}
