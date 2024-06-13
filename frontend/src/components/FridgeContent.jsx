/* eslint-disable no-unused-vars */
import React from 'react';
import Ingredient from './Ingredients';

const FridgeContent = ({ isOpen }) => {
  const ingredients = ['Milk', 'Eggs', 'Cheese'];

  return (
    <div className={`fridge-content ${isOpen ? 'open' : ''}`}>
      <div className="shelf"></div>
      <div className="shelf"></div>
      <div className="shelf"></div>
      <div className="shelf"></div>
      <div className="shelf"></div>
      {ingredients.map((item, index) => (
        <Ingredient key={index} name={item} />
      ))}
    </div>
  );
};

export default FridgeContent;

