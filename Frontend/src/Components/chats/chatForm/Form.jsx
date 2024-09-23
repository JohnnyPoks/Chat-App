import "./form.css";
import Client from "../../../client/client";
import { useState } from "react";

const NewChatForm = ({ onClose, onCreate }) => {
  const newChat = new Client();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const senderNumber = localStorage.getItem("number");

    try {
      const Chat = await newChat.createChat(senderNumber, number);
      console.log(Chat);
      onCreate(Chat.newChat);
      onClose();
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
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
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}
        <button type="submit">Create Chat</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default NewChatForm;
