import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/authentication";
import "./SignupPage.css"

export const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signup(username, email, password);
      console.log("redirecting...:");
      navigate("/login");
    } catch (err) {
      alert(err);
      navigate("/signup");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="page-title">Sign Up</h2>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <div id="username" className="form-div">
            <label htmlFor="username" className="form-label">Username:</label>
            <input
              className="form-input"
              id="username"
              type="text"
              required
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-div">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              className="form-input"
              id="email"
              type="text"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-div">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              className="form-input"
              id="password"
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="passwordValidator">Passwords <strong>must</strong> meet the following requirements:</p>
            <ul className="password-paramters-list">
              <li className="pp-item">8+ characters</li>
              <li className="pp-item">Password must contain at least one uppercase letter</li>
              <li className="pp-item">Password must contain at least one number</li>
            </ul>
          </div>
          <div>
            <input
              role="submit-button"
              className="submit-btn"
              id="submit"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
