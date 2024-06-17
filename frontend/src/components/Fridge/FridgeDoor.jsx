/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const FridgeDoor = ({ onClick, isOpen }) => {
  return (
  <div className="Fridge-door-container">
    <motion.div
      className="fridge-door"
      onClick={onClick}
      animate={{ rotateY: isOpen ? 120 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="door-handle"></div>
      <div className="door-side"></div>
    </motion.div>
   </div>
  );
};

export default FridgeDoor;
