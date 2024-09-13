import "./messages.css";
import MessageNavbar from "./messageNavbar/Navbar";
import MessageList from "./messageList/List";
import MessageInput from "./messageInput/Input";
import { useEffect, useState } from "react";

const Message = ({ chat, onBackClick }) => {
  const [chatMessages, setChatMessages] = useState(chat.messages);

  useEffect(() => {
    setChatMessages([...chat.messages]);
  }, [chat]);

  const handleSendMessage = (message) => {
    const now = new Date();
    const time = now.getHours() + ":" + now.getMinutes();

    const reply = {
      message: "This is an automatic reply for testing purpose only 🙂",
      time: time,
      source: "receiver",
    };
    setChatMessages([...chat.messages, message, reply]);
    chat.messages = [...chat.messages, message];
  };

  return (
    <div className="open-chat">
      <MessageNavbar onBackClick={onBackClick} chat={chat} />

      <MessageList messages={chatMessages} />

      <MessageInput onSendMessage={handleSendMessage} chat={chat} />
    </div>
  );
};

export default Message;
