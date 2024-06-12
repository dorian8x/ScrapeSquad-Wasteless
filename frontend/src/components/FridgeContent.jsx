/* eslint-disable no-unused-vars */
import React from 'react';
import Ingredients from './ingredients';

const FridgeContent = ({ isOpen }) => {
  const ingredients = ['Milk', 'Eggs', 'Cheese'];

  return (
    <div className={`fridge-content ${isOpen ? 'open' : ''}`}>
      {ingredients.map((item, index) => (
        <Ingredients key={index} name={item} />
      ))}
    </div>
  );
};

export default FridgeContent;
