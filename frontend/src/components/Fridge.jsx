/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import FridgeDoor from './FridgeDoor';
import FridgeContent from './FridgeContent';
import { motion } from 'framer-motion';
import './Fridge.css';

const Fridge = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDoorClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fridge-container">
      <motion.div
        className="fridge"
        animate={{ x: isOpen ? 100 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <FridgeDoor onClick={handleDoorClick} isOpen={isOpen} />
        <FridgeContent isOpen={isOpen} />

      </motion.div>
    </div>
  );
};

export default Fridge;
