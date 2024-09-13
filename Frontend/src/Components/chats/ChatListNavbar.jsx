import { useState } from "react";
import Header from "./chatListHeader/Header";
import NewChatForm from "./chatForm/Form";
import ChatList from "./chatList/ChatList";
import Chats from "./chatList/sample";
import "./chatListNavbar.css";

const ChatListNavbar = ({ onChatClick }) => {
  const [chats, setChats] = useState(Chats);
  const [showForm, setShowFormState] = useState(false);

  const handleNewChatClick = () => {
    setShowFormState(true);
  };

  const handleCreateChat = (newChat) => {
    const chat = {
      id: chats.length + 1,
      unread: false,
      users: {
        receiver: {
          name: newChat.name,
          number: newChat.number,
        },
      },
      messages: [],
    };
    setChats([...chats, chat]);
    Chats.unshift(chat);
  };

  return (
    <div className="left-container">
      <Header onNewChatClick={handleNewChatClick} />

      {showForm && (
        <>
          <div className="backdrop" />
          <NewChatForm
            onClose={() => setShowFormState(false)}
            onCreate={handleCreateChat}
          />
        </>
      )}

      <ChatList onChatClick={onChatClick} />
    </div>
  );
};

export default ChatListNavbar;
