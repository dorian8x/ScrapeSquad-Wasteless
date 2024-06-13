import React, { useState } from "react";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import DroppedWidget from "../../components/DroppedWidget/DroppedWidget";
import './Cupboard.css';

const Cupboard = () => {
    const [widgets, setWidgets] = useState<string[]>([]);
    const itemsPerShelf = 5; // Adjust this number to control how many items fit on one shelf

    function handleOnDrag(e: React.DragEvent, ingredientType: string) {
        //e.dataTransfer is an object that holds the data being dragged
        //setData sets the data type of the data being dragged
        //We then store the widgetType (e.g., "Widget A", Widget B") in the dataTransfer object.
        e.dataTransfer.setData("ingredientType", ingredientType);
    }

    function handleOnDrop(e: React.DragEvent) {
        // prevents the default behaviour to allow dropping
        e.preventDefault();
        //retrieve the widgetType from the dataTransfer object
        //this is the same data that was set in handleOnDrag
        const ingredientType = e.dataTransfer.getData("ingredientType") as string;
        //log widgetType for debugging
        //Update the state to include new widget
        //the setWidgets function is used to update the state
        //Here, we spread the existing widgets and add the new widget type to the end
        setWidgets([...widgets, ingredientType]);
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

    function handleClearAll() {
        setWidgets([]);
    }

    const numberOfShelves = Math.ceil(widgets.length / itemsPerShelf);

    return (
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
                        {widgets
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
    );
}

export default Cupboard;
