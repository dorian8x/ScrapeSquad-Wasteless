/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Footer from '../../components/Footer';
import MediterraneanSalad from '../../images/MediterraneanSalad.jpeg';
import Buttons from '../../components/Button';
import { useNavigate }  from 'react-router-dom';
import { saveRecipe } from '../../services/recipes';
import './Recipe.css'; 

const Recipe = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleButton1Click = async () => {
    console.log('Clicked');
    try {
      const token = localStorage.getItem('token');
        if (token) {
            const recipe = {
                title: " ",
                ingredients: ['', '', '', '', '', '', '', '', ''],
                instructions: " ",
            };
        
            await saveRecipe(token, recipe);
            setSuccess('Recipe saved successfully');
        } else {
          navigate("/login");
        }
        } catch (error) {
      console.error(error);
      setError('Failed to save recipe: ' + error.message);
      setSuccess(null);
    }
        
      };

  const handleButton2Click = () => {
    console.log('Clicked');
    
  };

  const handleButton3Click = () => {
    console.log('Clicked');
  };

  return (
    <div className="recipe">
      <header className="header">
        <div className="header-content" style={{ backgroundImage: `url(${MediterraneanSalad})` }}>
          <h1 className="header-title">Mediterranean Salad</h1>
          <Buttons onButton1Click={handleButton1Click} onButton2Click={handleButton2Click} onButton3Click={handleButton3Click} />
        </div>
      </header>
      <div className="recipe-content">
        <div className="ingredients">
          <h2>Ingredients:</h2>
          <ul>
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
            <li>Ingredient 4</li>
            <li>Ingredient 5</li>
            <li>Ingredient 6</li>
            <li>Ingredient 7</li>
            <li>Ingredient 8</li>
            <li>Ingredient 9</li>
            
          </ul>
        </div>
        <div className="instructions">
          <h2>Instructions:</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec justo vel ante consectetur blandit sed vitae diam.</p>
          <p>Nulla varius pharetra urna, non eleifend arcu. Fusce a ligula eu mi rutrum sollicitudin. Vivamus eleifend tortor vel neque auctor lacinia.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec justo vel ante consectetur blandit sed vitae diam.</p>
          <p>Nulla varius pharetra urna, non eleifend arcu. Fusce a ligula eu mi rutrum sollicitudin. Vivamus eleifend tortor vel neque auctor lacinia.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec justo vel ante consectetur blandit sed vitae diam.</p>
          <p>Nulla varius pharetra urna, non eleifend arcu. Fusce a ligula eu mi rutrum sollicitudin. Vivamus eleifend tortor vel neque auctor lacinia.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec justo vel ante consectetur blandit sed vitae diam.</p>
          <p>Nulla varius pharetra urna, non eleifend arcu. Fusce a ligula eu mi rutrum sollicitudin. Vivamus eleifend tortor vel neque auctor lacinia.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec justo vel ante consectetur blandit sed vitae diam.</p>
          <p>Nulla varius pharetra urna, non eleifend arcu. Fusce a ligula eu mi rutrum sollicitudin. Vivamus eleifend tortor vel neque auctor lacinia.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec justo vel ante consectetur blandit sed vitae diam.</p>
          <p>Nulla varius pharetra urna, non eleifend arcu. Fusce a ligula eu mi rutrum sollicitudin. Vivamus eleifend tortor vel neque auctor lacinia.</p>
        </div>
        </div>
          
      <Footer />
    </div>
  );
};

export default Recipe;
