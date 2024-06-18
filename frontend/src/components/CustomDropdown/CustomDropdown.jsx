import { useState } from 'react';
import './CustomDropdown.css';

const widgetOptions = ["beef", "garlic", "potatoes", "salmon", "avocado"];

function CustomDropdown({ onDragStart }) {
    const [showWidgets, setShowWidgets] = useState(false);

    const toggleIngredients = () => {
        setShowWidgets(!showWidgets);
    };

    return (
        <div className="custom-dropdown">
            <div id="comment-button" className="commentContainer">
                {!showWidgets &&
                    <button className="dropdown-button" onClick={toggleIngredients}>Show Ingredients</button>}
                {showWidgets &&
                    <button className="dropdown-button" onClick={toggleIngredients}>Hide Ingredients</button>}
                {showWidgets &&
                    <div className="dropdown-content">
                        {widgetOptions.map((widgetType) => (
                            <div
                                key={widgetType}
                                className="dropdown-item"
                                draggable
                                onDragStart={(e) => onDragStart(e, widgetType)}
                            >
                                {widgetType}
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    );
}

export default CustomDropdown;
