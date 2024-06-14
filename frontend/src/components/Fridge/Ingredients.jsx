/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const Ingredient = ({ name }) => {
  return (
    <motion.div className="ingredient" drag>
      {name}
    </motion.div>
  );
};

export default Ingredient;
