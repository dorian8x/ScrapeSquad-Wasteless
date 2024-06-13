import React, { useState } from "react";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import DroppedWidget from "../../components/DroppedWidget/DroppedWidget";
import './Cupboard.css';

const Cupboard = () => {
    const [widgets, setWidgets] = useState<string[]>([]);

    function handleOnDrag(e: React.DragEvent, widgetType: string) {
        e.dataTransfer.setData("widgetType", widgetType);
    }

    function handleOnDrop(e: React.DragEvent) {
        e.preventDefault();
        const widgetType = e.dataTransfer.getData("widgetType") as string;
        console.log("widgetType", widgetType);
        setWidgets([...widgets, widgetType]);
    }

    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
    }

    function handleRemoveWidget(index: number) {
        const updatedWidgets = widgets.filter((_, i) => i !== index);
        setWidgets(updatedWidgets);
    }

    return (
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
    );
    }

export default Cupboard;
