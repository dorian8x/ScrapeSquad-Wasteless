import './Cupboard.css';
import React, { useState } from "react";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import DroppedWidget from "../../components/DroppedWidget/DroppedWidget";
import { findMealsByIngredients } from '../../services/meals';
// import Recipe from '../../components/Recipe';
import { SearchResults } from '../SearchResults/SearchResults';
// import { useNavigate } from "react-router-dom";

export function Cupboard() {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [foundRecipes, setFoundRecipes] = useState<Object[]>([]);
    // const navigate = useNavigate();
    // const token = localStorage.getItem("token");
    const itemsPerShelf = 5; // Adjust this number to control how many items fit on one shelf

    function handleOnDrag(e: React.DragEvent, ingredientType: string) {
        //e.dataTransfer is an object that holds the data being dragged
        //setData sets the data type of the data being dragged
        //We then store the ingredientType (e.g., "Widget A", Widget B") in the dataTransfer object.
        e.dataTransfer.setData("ingredientType", ingredientType);
    }

    function handleOnDrop(e: React.DragEvent) {
        // prevents the default behaviour to allow dropping
        e.preventDefault();
        //retrieve the ingredientType from the dataTransfer object
        //this is the same data that was set in handleOnDrag
        const ingredientType = e.dataTransfer.getData("ingredientType") as string;
        //log ingredientType for debugging
        console.log("ingredientType", ingredientType);
        //Update the state to include new widget
        //the setIngredients function is used to update the state
        //Here, we spread the existing ingredients and add the new widget type to the end
        setIngredients([...ingredients, ingredientType]);
    }

    function handleDragOver(e: React.DragEvent) {
        // prevents the default behaviour to allow dropping
        e.preventDefault();
    }

    function handleRemoveWidget(index: number) {
        //Creates a new arr excld the widget at specified index
        const updatedIngredients = ingredients.filter((_, i) => i !== index);
        //updates the state with new arr
        setIngredients(updatedIngredients);
    }
    function handleClearAll() {
        setIngredients([]);
    }

    const numberOfShelves = Math.ceil(ingredients.length / itemsPerShelf);

    const handleSubmitIngredients = async (event) => {
        // console.log(event);
        event.preventDefault();
        // navigate("/searchresults"), {
        //     state : {
        //         ingredient: ingredients
        //     }
        // } 
        try {
            await findMealsByIngredients(ingredients)
            .then((recipes) => {
                console.log("recipes is (and foundRecipes is going to be):", recipes)
                setFoundRecipes(recipes);
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
                    {/* <input type="range" min="" max="" /> // a slider, for cooking time maybe? */}
                    <input role="submit-button" id="submit" type="submit" value="Submit" />
                </form>
            </div>
            <SearchResults props={foundRecipes} />
        </>
    );
}
