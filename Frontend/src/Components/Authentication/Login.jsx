import "./auth.css";
import Client from "../../client/client";
import { useState } from "react";

const LoginPage = ({ onLogin, onClose }) => {
  const login = new Client();
  const [number, setNumber] = useState(() => {
    return localStorage.getItem("number") || "";
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const User = await login.loginUser(number);
      const { id, username, phoneNumber } = User.user;
      localStorage.clear();
      localStorage.setItem("userId", id);
      localStorage.setItem("name", username);
      localStorage.setItem("number", phoneNumber);
      console.log(localStorage);
      onLogin();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        {localStorage.getItem("name") ? (
          <h2>
            Welcome <span>{localStorage.getItem("name").toUpperCase()}</span>
          </h2>
        ) : (
          <h2>Login</h2>
        )}

        <div className="floating-label">
          <input
            id="number"
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <label htmlFor="number" className="num">
            Number
          </label>
        </div>
        {error ? (
          <div className="error-message">
            <p>{error}</p>
          </div>
        ) : (
          <div>
            <small>Enter your phone number to login</small>
          </div>
        )}

        <button type="submit">Login</button>
        <button type="button" onClick={onClose}>
          Don&apos;t have an account? <span>SignUP</span>
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
