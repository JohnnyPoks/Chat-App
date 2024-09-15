import "./auth.css";
import Client from "../../client/client";
import { useState } from "react";

const SignUpPage = ({ onSignUp, onClose }) => {
  const User = new Client();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp();
    const newUser = User.createAccount(name, number);
    console.log(newUser);
    // localStorage.setItem("userId", newUser._id);
    // localStorage.setItem("name", name);
    // localStorage.setItem("number", number);
    console.log(localStorage);
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
        <button type="submit">Create Account</button>
        <button type="button" onClick={onClose}>
          Already have an Account? <span>Login</span>
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
