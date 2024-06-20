import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authentication";
import { Header } from "../../components/Header/Header";
import "./LoginPage.css";

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
      <Header />
      <div className="container">
        <div className="form-container">
          <h2 className="login-title">Log in to your account</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form-div">
              <label className="login-label" htmlFor="email">
                Email:
              </label>
              <input
                id="email"
                className="login-input"
                type="text"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-form-div">
              <label className="login-label" htmlFor="password">
                Password:
              </label>
              <input
                id="password"
                className="login-input"
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
                className="login-submit-btn"
                id="submit"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
