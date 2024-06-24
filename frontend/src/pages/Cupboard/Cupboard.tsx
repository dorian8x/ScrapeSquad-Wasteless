import './Cupboard.css';
import React, { useState } from "react";
import { CustomDropdown } from "../../components/CustomDropdown/CustomDropdown";
import DroppedWidget from "../../components/DroppedWidget/DroppedWidget";
import { findMealsByIngredients } from '../../services/meals';
import { SearchResults } from '../../components/SearchResults/SearchResults';
import { Header } from "../../components/Header/Header";
import { useEffect } from 'react';

export function Cupboard() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [foundRecipes, setFoundRecipes] = useState<Object[]>([]);
  const itemsPerShelf = 2; // Adjust this number to control how many items fit on one shelf

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  function handleOnDrag(e: React.DragEvent, ingredientType: string) {
    e.dataTransfer.setData("ingredientType", ingredientType);
  }

  function handleOnDrop(e: React.DragEvent) {
    e.preventDefault();
    const ingredientType = e.dataTransfer.getData("ingredientType") as string;
    if (!ingredients.includes(ingredientType)) {
      setIngredients([...ingredients, ingredientType]);
    }
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  function handleRemoveWidget(index: number) {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  }

  function handleClearAll() {
    setIngredients([]);
  }

  const numberOfShelves = Math.ceil(ingredients.length / itemsPerShelf);

  const handleSubmitIngredients = async (event) => {
    event.preventDefault();
    try {
      await findMealsByIngredients(ingredients)
        .then((recipes) => {
          if (recipes.length == 0) {
            setFoundRecipes(["Couldn't find anything :( Try refining your search"])
          } else {
            setFoundRecipes(recipes);
          }
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Header />
      <div className="drag-message">Drag and drop ingredients to start cooking!</div>
      <div className="cupboard">
        <CustomDropdown onDragStart={handleOnDrag} />
        <div 
          className="page" 
          onDrop={handleOnDrop} 
          onDragOver={handleDragOver}
        >
          {Array.from({ length: numberOfShelves }, (_, shelfIndex) => (
            <div className="shelf" key={shelfIndex}>
              {ingredients
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
          {ingredients.length > 0 && <button className="clear-button" onClick={handleClearAll}>Clear All</button>}
        </div>
      </div>
        <form onSubmit={handleSubmitIngredients}>
          <input
            className="search-submit"
            role="submit-button"
            id="submit"
            type="submit"
            value="Get Cooking!"
          />
        </form>
      {foundRecipes.length == 0 ?
        ""
        : <SearchResults foundRecipes={foundRecipes} />
      }
    </>
  );
}
