import { Link } from "react-router-dom";
import "./LandingPage.css";
import foodImage1 from "../../assets/image1.jpg";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";


export const LandingPage = () => {
  return (
    <div>
      <Header />
        <div className="landing">
        <h1>Welcome to Sustainabite!</h1>
        <p>
          <Link to="/cupboard" className="fridge-button">
            <span className="default-text">What's in your fridge?</span>
            <span className="hover-text">Check out all the amazing recipes you can make with what you've got available</span>
          </Link>
        </p>
        <p>
          <Link to="/signup">Create an account to save your favourite recipes and preferences</Link>
        </p>
        <img src={foodImage1} alt="Fridge" className="fridge-image" />
      </div>
      <Footer />
    </div>
    
  );
};
