import { useState, useEffect } from "react";
import "./App.css";
import ChatListNavbar from "./Components/chats/ChatListNavbar";
import Nochat from "./Components/NoChat";
import Message from "./Components/messages/Messages";

function App() {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  const handleBackClick = () => {
    setSelectedChat(null);
  };

  // useEffect(() => {
  //   setSelectedChat(chat)
  
  //   return () => {
  //     setSelectedChat(null)
  //   }
  // }, [])
  

  // useEffect(() => {
  //   // Create WebSocket connection.
  //   const socket = new WebSocket("ws://localhost:8080");

  //   // Connection opened
  //   socket.addEventListener("open", (event) => {
  //     socket.send(JSON.stringify({ myMessage: "Hello Server!" }));
  //     console.log(event);
  //   });

  //   // Listen for messages
  //   socket.addEventListener("message", (event) => {
  //     console.log("Message from server ", event.data);
  //   });
  // }, []);

  return (
    <div className="container">
      <ChatListNavbar onChatClick={handleChatClick} />

      <div id="column" className="right-container">
        {selectedChat ? (
          <Message chat={selectedChat} onBackClick={handleBackClick} />
        ) : (
          <Nochat />
        )}
      </div>
    </div>
  );
}

export default App;
