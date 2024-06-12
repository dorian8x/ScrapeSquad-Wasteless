import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authentication";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await login(email, password);
      const token = data.token;
      const user_id = data.id;
      localStorage.setItem("token", token);
      localStorage.setItem("user_id", user_id);
      navigate("/cupboard");
    } catch (err) {
      alert(err);
      navigate("/login");
    }
  };

return (
  <>
    <h2>Log in to your account</h2>
    <form onSubmit={handleSubmit}>
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
