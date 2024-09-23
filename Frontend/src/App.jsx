import { useState } from "react";
import "./App.css";
import Client from "./client/client";
import SignUpPage from "./Components/Authentication/SignUp";
import LoginPage from "./Components/Authentication/Login";
import ChatListNavbar from "./Components/chats/ChatListNavbar";
import Nochat from "./Components/NoChat";
import Message from "./Components/messages/Messages";

function App() {
  const getUserChats = new Client();

  const [showSignupForm, setShowSignupForm] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [chats, setChats] = useState([]);
  const [error, setError] = useState(null);

  const handleCreateAccount = () => {
    setShowLoginForm(false);
    setShowSignupForm(false);
  };

  const handleLogin = async () => {
    setShowLoginForm(false);
    try {
      const userChats = await getUserChats.getAllChats(
        localStorage.getItem("userId")
      );

      setChats(userChats.chats);
      console.log("This Are User Chats", userChats.chats);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  const handleBackClick = () => {
    setSelectedChat(null);
  };

  const updateChats = (updatedChat) => {
    const updatedChats = chats.filter((chat) => chat.id !== updatedChat.id);
    updatedChats.unshift(updatedChat);
    setChats(updatedChats);
    console.log("Updated Chats", updatedChats);
  };

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
            setShowSignupForm(true);
          }}
        />
      ) : (
        <>
          <ChatListNavbar
            onChatClick={handleChatClick}
            userChats={chats}
            errorMsg={error}
          />

          <div id="column" className="right-container">
            {selectedChat ? (
              <Message
                chat={selectedChat}
                onBackClick={handleBackClick}
                updateChat={updateChats}
              />
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
