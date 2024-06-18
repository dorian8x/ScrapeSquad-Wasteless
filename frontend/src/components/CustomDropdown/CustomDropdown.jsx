import { useState } from 'react';
import './CustomDropdown.css';

const widgetOptions = ["beef", "garlic", "potatoes", "salmon", "avocado"];

function CustomDropdown({ onDragStart }) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="custom-dropdown">
      <div 
        id="comment-button" 
        className="commentContainer"
        onMouseEnter={() => setShowMessage(true)}
        onMouseLeave={() => setShowMessage(false)}
      >
        <button className="dropdown-button">Show Ingredients</button>
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
      {showMessage && 
        <div className="drag-message">
          Drag to Start cooking!
        </div>
      }
    </div>
  );
}

export default CustomDropdown;
