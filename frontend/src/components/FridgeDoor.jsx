/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const FridgeDoor = ({ onClick, isOpen }) => {
  return (
    <motion.div
      className="fridge-door"
      onClick={onClick}
      animate={{ rotateY: isOpen ? 120 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="door-handle"></div>
    </motion.div>
  );
};

export default FridgeDoor;
