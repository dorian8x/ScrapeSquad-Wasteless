import "./CustomDropdown.css";
import { allIngredients } from '../../../../api/ingredientsList';
import { useState } from 'react';

const widgetOptions = allIngredients.map(ingredient => ingredient.strIngredient);

export function CustomDropdown({ onDragStart }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOptions = widgetOptions.filter(ingredient =>
    ingredient.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="custom-dropdown">
      <input
        type="text"
        className="search-input"
        placeholder="Search ingredients..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="dropdown-content">
        {filteredOptions.map((ingredient) => (
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
    </div>
  );
}
