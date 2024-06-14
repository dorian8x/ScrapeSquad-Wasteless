/* eslint-disable no-unused-vars */
import React from 'react';
import './Buttons.css'; // Styling for the buttons

const Buttons = ({ /*onButton1Click,*/ onButton2Click , onButton3Click}) => {
  return (
    <div className="buttons-container">
      {/* <button className="round-button" onClick={onButton1Click}>Save</button> */}
      <button className="round-button" onClick={onButton2Click}>Login</button>
      <button className="round-button" onClick={onButton3Click}>Logout</button>
    </div>
  );
};

export default Buttons;
