import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/authentication";
import "./SignUp.css"

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
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div id="username">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            required
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="passwordValidator">Passwords <strong>must</strong> meet the following requirements:</p>
          <ul>
            <li>8+ characters</li>
            <li>Password must contain at least one uppercase letter</li>
            <li>Password must contain at least one number</li>
          </ul>
        </div>
        <div>
          <input
            role="submit-button"
            id="submit"
            type="submit"
            value="Submit"
            className="button"
          />
        </div>
      </form>
    </div>
  );
};
