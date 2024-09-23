import "./messages.css";
import MessageNavbar from "./messageNavbar/Navbar";
import MessageList from "./messageList/List";
import MessageInput from "./messageInput/Input";
import { useEffect, useState } from "react";
import Client from "../../client/client";

const Message = ({ chat, onBackClick, updateChat }) => {
  const checkMessage = new Client();
  const [chatMessages, setChatMessages] = useState(chat.messages);

  useEffect(() => {
    setChatMessages([...chat.messages]);
  }, [chat]);

  useEffect(() => {
    const checkIncomingMessages = (event) => {
      const receivedMessage = JSON.parse(event.data);
      if (
        receivedMessage.destination_user_id ===
        parseInt(localStorage.getItem("userId"))
      ) {
        console.log("You are the receiver");

        setChatMessages((prevMessages) => [...prevMessages, receivedMessage]);
        updateChat({ ...chat, messages: [...chat.messages, receivedMessage] });
        console.log("Newly updated Chat", chat);
      }
      console.log("The Received Message", receivedMessage);
    };

    checkMessage.socket.addEventListener("message", checkIncomingMessages);

    return () => {
      checkMessage.socket.removeEventListener("message", checkIncomingMessages);
    };
  }, [checkMessage.socket, chat, updateChat]);

  const handleSendMessage = (message) => {
    setChatMessages((prevMessages) => [...prevMessages, message]);
    chat.messages.push(message);
    updateChat(chat);
    console.log("The chat Messages", chat.messages);
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
