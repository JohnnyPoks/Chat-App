import { useState } from "react";
import Header from "./chatListHeader/Header";
import NewChatForm from "./chatForm/Form";
import ChatList from "./chatList/ChatList";
import "./chatListNavbar.css";

const ChatListNavbar = ({ onChatClick, userChats, errorMsg }) => {
  const [showFormState, setShowFormState] = useState(false);
  const [error, setError] = useState(errorMsg);

  const handleNewChatClick = () => {
    setShowFormState(true);
  };

  const handleCreateChat = (newChat) => {
    const chat = {
      id: newChat.chat.id,
      unread: false,
      users: {
        receiver: newChat.receiver,
        sender: newChat.sender,
      },
      messages: [],
    };
    userChats.unshift(chat);
    setError(null);
    console.log(chat);
  };

  console.log("This is User Chats", userChats);

  // const updateChat = (chatId, newMessage) => {
  //   const updatedChats = userChats.map((chat) => {
  //     if (chat.id === chatId) {
  //       return {
  //         ...chat,
  //         messages: [...chat.messages, newMessage],
  //       };
  //     }
  //     return chat;
  //   });
  //   return updatedChats.sort(
  //     (a, b) => b.messages.timeSent - a.messages.timeSent
  //   );
  // };

  return (
    <div className="left-container">
      <Header onNewChatClick={handleNewChatClick} />

      {showFormState && (
        <>
          <div className="backdrop" />
          <NewChatForm
            onClose={() => setShowFormState(false)}
            onCreate={handleCreateChat}
          />
        </>
      )}

      {error && <p className="error-message">{error}</p>}
      <ChatList
        onChatClick={onChatClick}
        Chats={userChats}
        // updateChat={updateChat}
      />
    </div>
  );
};

export default ChatListNavbar;
