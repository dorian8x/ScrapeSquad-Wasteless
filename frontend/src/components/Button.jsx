import React from 'react';
import './Buttons.css'; // Styling for the buttons

const Buttons = ({ onButton1Click, onButton2Click }) => {
  return (
    <div className="buttons-container">
      <button className="round-button" onClick={onButton1Click}>Cook</button>
      <button className="round-button" onClick={onButton2Click}>Logout</button>
    </div>
  );
};

export default Buttons;
