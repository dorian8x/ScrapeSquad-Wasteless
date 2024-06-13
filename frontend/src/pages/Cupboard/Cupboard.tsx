import React, { useState } from "react";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import DroppedWidget from "../../components/DroppedWidget/DroppedWidget";
import './Cupboard.css';
import { findRecipes } from "../../services/recipes";

export function Cupboard() {
    const [widgets, setWidgets] = useState<string[]>([]);
    const [ing1, setIng1] = useState("");
    const [ing2, setIng2] = useState("");
    const [foundRecipes, setFoundRecipes] = useState<string[]>([]);
    // const token = localStorage.getItem("token");

    function handleOnDrag(e: React.DragEvent, widgetType: string) {
        //e.dataTransfer is an object that holds the data being dragged
        //setData sets the data type of the data being dragged
        //We then store the widgetType (e.g., "Widget A", Widget B") in the dataTransfer object.
        e.dataTransfer.setData("widgetType", widgetType);
    }

    function handleOnDrop(e: React.DragEvent) {
        // prevents the default behaviour to allow dropping
        e.preventDefault();
        //retrieve the widgetType from the dataTransfer object
        //this is the same data that was set in handleOnDrag
        const widgetType = e.dataTransfer.getData("widgetType") as string;
        //log widgetType for debugging
        console.log("widgetType", widgetType);
        //Update the state to include new widget
        //the setWidgets function is used to update the state
        //Here, we spread the existing widgets and add the new widget type to the end
        setWidgets([...widgets, widgetType]);
    }

    function handleDragOver(e: React.DragEvent) {
        // prevents the default behaviour to allow dropping
        e.preventDefault();
    }

    function handleRemoveWidget(index: number) {
        //Creates a new arr excld the widget at specified index
        const updatedWidgets = widgets.filter((_, i) => i !== index);
        //updates the state with new arr
        setWidgets(updatedWidgets);
    }

    const handleSubmitIngredients = async (event) => {
        event.preventDefault();
        try {
            await findRecipes(widgets)
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
                <div className="page" onDrop={handleOnDrop} onDragOver={handleDragOver}>
                    {widgets.map((widget, index) => (
                        <DroppedWidget
                            key={index}
                            widget={widget}
                            index={index}
                            onRemove={handleRemoveWidget}
                        />
                    ))}
                </div>
            </div>
            <div className="home">
                <p>{foundRecipes.map((recipe) => recipe.idMeal)}</p>
                <form onSubmit={handleSubmitIngredients}>
                    {/* <input type="range" min="" max="" /> // a slider, for cooking time maybe? */}
                    <input role="submit-button" id="submit" type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}
