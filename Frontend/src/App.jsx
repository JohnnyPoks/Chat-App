import { useState, useEffect, useContext } from "react";
import "./App.css";
// import Client from "./client/client";
import SignUpPage from "./Components/Authentication/SignUp";
import LoginPage from "./Components/Authentication/Login";
import ChatListNavbar from "./Components/chats/ChatListNavbar";
import Nochat from "./Components/NoChat";
import Message from "./Components/messages/Messages";

function App() {
  // const test = new Client();

  const [showSignupForm, setShowSignupForm] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  const handleBackClick = () => {
    setSelectedChat(null);
  };

  const handleLogin = () => {
    setShowLoginForm(false);
  };

  const handleCreateAccount = () => {
    setShowLoginForm(false);
    setShowSignupForm(false);
  };

  // useEffect(() => {
  //   // Create WebSocket connection.
  //   const socket = new WebSocket("ws://localhost:8080");

  //   // Connection opened
  //   socket.addEventListener("open", (event) => {
  //     socket.send(JSON.stringify({ createUser: "Hello Server!" }));
  //     console.log(event);
  //   });

  //   // Listen for messages
  //   socket.addEventListener("message", (event) => {
  //     console.log("Message from server ", event.data);
  //   });
  // }, []);

  return (
    <div className="container">
      {showSignupForm ? (
        <SignUpPage
          onSignUp={handleCreateAccount}
          onClose={() => {
            setShowLoginForm(true);
            setShowSignupForm(false);
          }}
        />
      ) : showLoginForm ? (
        <LoginPage
          onLogin={handleLogin}
          onClose={() => {
            localStorage.clear();
            setShowSignupForm(true);
          }}
        />
      ) : (
        <>
          <ChatListNavbar onChatClick={handleChatClick} />

          <div id="column" className="right-container">
            {selectedChat ? (
              <Message chat={selectedChat} onBackClick={handleBackClick} />
            ) : (
              <Nochat />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
