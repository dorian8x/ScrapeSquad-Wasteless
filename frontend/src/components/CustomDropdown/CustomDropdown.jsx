import './CustomDropdown.css';

const ingredientOptions = ["Ingredient A", "Ingredient B", "Ingredient C"];

function CustomDropdown({ onDragStart }) {
    return (
        <div className="custom-dropdown">
            <button className="dropdown-button">Choose Ingredient</button>
            <div className="dropdown-content">
                {ingredientOptions.map((ingredientType) => (
                    <div
                        key={ingredientType}
                        className="dropdown-item"
                        draggable
                        onDragStart={(e) => onDragStart(e, ingredientType)}
                    >
                        {ingredientType}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CustomDropdown;
