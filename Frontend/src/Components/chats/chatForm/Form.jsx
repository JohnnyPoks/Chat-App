import "./form.css";
import { useState } from "react";

const NewChatForm = ({ onClose, onCreate }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ name, number });
    onClose();
  };

  return (
    <div className="new-chat-form">
      <form onSubmit={handleSubmit}>
        <h2>Create New Chat</h2>
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
        <button type="submit">Create Chat</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default NewChatForm;
