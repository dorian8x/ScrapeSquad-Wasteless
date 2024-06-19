import { Link } from "react-router-dom";
import "./LandingPage.css";
import logo from "../../assets/WL.png";


export const LandingPage = () => {
  return (
    <div className="landing">
      <h1>{`Welcome to WasteL<SS!`}</h1>
      <h2 className="Description"> Your Go-To Solution for Leftover Ingredients! </h2>
      <h3 className="Description"> Welcome to Wasteless, the ultimate online platform
        designed to help you reduce food waste and make
        the most out of your leftover ingredients! </h3>
      <Link to="/cupboard" className="fridge-button">
        <img 
          src={logo} 
          alt="logo" 
          style={{ height: '30rem', width: '30rem', borderRadius: '50%', border: '8px solid white' }} 
        /> 
      </Link>
    </div>  
  );
};
      
