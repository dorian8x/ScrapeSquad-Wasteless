import "./CustomDropdown.css";

const ingredientOptions = ["beef", "garlic", "potatoes", "salmon", "avocado"];

export function CustomDropdown({ onDragStart }) {
  return (
    // <div className="custom-dropdown">
      // <div
      //   id="comment-button"
      //   className="commentContainer"
      // >
        // {/* <button className="dropdown-button">Show Ingredients</button> */}
        <div className="dropdown-content">
          {ingredientOptions.map((ingredient) => (
            <div
              key={ingredient}
              className="dropdown-item"
              draggable
              onDragStart={(e) => onDragStart(e, ingredient)}
            >
              {ingredient}
            </div>
          ))}
        </div>
      // </div>
    // </div>
  );
}
