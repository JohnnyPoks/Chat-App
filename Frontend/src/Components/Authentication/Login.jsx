import "./auth.css";
import { useState } from "react";

const LoginPage = ({ onLogin, onClose }) => {
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ number });
    console.log(number);
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
        <div>
          <small>Enter your phone number to login</small>
        </div>
        <button type="submit">Login</button>
        <button type="button" onClick={onClose}>
          Don&apos;t have an account? <span>SignUP</span>
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
