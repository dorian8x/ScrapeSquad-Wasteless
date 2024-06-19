import logo from "../../assets/WL.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleCookbook = () => {
    navigate("/cookbook");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    setIsLoggedIn(false);
  };
  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <div className="nav-left">
          <Link to="/">
            <button className="nav-button">Home</button>
          </Link>
        </div>
        <div className="logo-container">
          <Link to="/cupboard">
            <img
              src={logo}
              alt="logo"
              style={{
                height: "7.5rem",
                width: "7.5rem",
                borderRadius: "50%",
                border: "2px solid white",
              }}
            />
          </Link>
        </div>
        <div className="nav-right">
          {!isLoggedIn && (
            <Link to="/login">
              <button className="nav-button">Login</button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/cookbook">
              <button className="nav-button" onClick={handleCookbook}>
                Cookbook
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to={"/"}>
              <button className="nav-button" onClick={handleLogout}>
                Logout
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};
