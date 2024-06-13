import React, { useState } from "react";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import DroppedWidget from "../../components/DroppedWidget/DroppedWidget";
import './Cupboard.css';

const Cupboard = () => {
    const [widgets, setWidgets] = useState<string[]>([]);
    const itemsPerShelf = 5; // Adjust this number to control how many items fit on one shelf

    function handleOnDrag(e: React.DragEvent, ingredientType: string) {
        e.dataTransfer.setData("ingredientType", ingredientType);
    }

    function handleOnDrop(e: React.DragEvent) {
        e.preventDefault();
        const ingredientType = e.dataTransfer.getData("ingredientType") as string;
        setWidgets([...widgets, ingredientType]);
    }

    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
    }

    function handleRemoveWidget(index: number) {
        const updatedWidgets = widgets.filter((_, i) => i !== index);
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
