import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/authentication";

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
    <>
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
          <p className="passwordValidator">Password must be 8+ characters<br/>
          Password must contain at least one uppercase letter<br/>
          Password must contain at least one lowercase letter<br/>
          Password must contain at least one number</p>
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
    </>
  );
};
