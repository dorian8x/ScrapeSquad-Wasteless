import logo from "../../assets/WL.png";
import "./Header.css";

export const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="nav-container">
                <nav className="nav-bar">
                    <div className="nav-left">
                        <button className="nav-button">Home</button>
                    </div>
                    <div className="logo-container">
                        <img 
                            src={logo} 
                            alt="logo" 
                            style={{ height: '7.5rem', width: '7.5rem', borderRadius: '50%', border: '2px solid white' }} 
                        />
                </div>
                    <div className="nav-right">
                        <button className="nav-button">Login</button>
                    </div>
                </nav>
            </div>
        </div>
    )
};