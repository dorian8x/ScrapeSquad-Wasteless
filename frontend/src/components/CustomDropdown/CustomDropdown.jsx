import './CustomDropdown.css';

const widgetOptions = ["Widget A", "Widget B", "Widget C"];

function CustomDropdown({ onDragStart }) {
    return (
        <div className="custom-dropdown">
        <button className="dropdown-button">Select Widget</button>
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
        </div>
    );
    }

export default CustomDropdown;
