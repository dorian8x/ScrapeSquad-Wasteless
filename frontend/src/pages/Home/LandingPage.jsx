import { Link } from "react-router-dom";
import Fridge from "../../components/Fridge";

// import  Logo  from "../../../src/assets/Logo/Logo.png";

export const LandingPage = () => {
  return (
    <div className="LandingPage">
      {/* <img src={Logo} alt="Scrape Squad Logo" /> */}
      <h1>Welcome to the Scrape Squad website!</h1>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>

      <Fridge />
    </div>
    
  );
};
