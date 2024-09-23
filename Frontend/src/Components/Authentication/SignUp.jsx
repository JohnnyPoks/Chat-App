import "./auth.css";
import Client from "../../client/client";
import { useState } from "react";

const SignUpPage = ({ onSignUp, onClose }) => {
  const createUser = new Client();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const User = await createUser.createAccount(name, number);
      const { id, username, phoneNumber } = User.newUser;
      localStorage.clear();
      localStorage.setItem("userId", id);
      localStorage.setItem("name", username);
      localStorage.setItem("number", phoneNumber);
      console.log(localStorage);
      onSignUp();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Create New Account</h2>
        <div className="floating-label">
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="name" className="name">
            Name
          </label>
        </div>
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
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}
        <button type="submit">Create Account</button>
        <button type="button" onClick={onClose}>
          Already have an Account? <span>Login</span>
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
