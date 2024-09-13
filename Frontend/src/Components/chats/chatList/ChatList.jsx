import "./chatList.css";
import Chats from "./sample";
import lion from "../../../assets/lion.jpg";

const ChatList = ({ onChatClick }) => {
  return (
    <div className="chats">
      {Chats.map((chat) => (
        <div className="chat" key={chat.id} onClick={() => onChatClick(chat)}>
          <div className="image">
            <img src={lion} alt="Profile picture" />
          </div>
          <div className="details">
            <div className="top-details">
              <div>
                <h5>{chat.users.receiver.name}</h5>
              </div>
              {chat.messages.length > 0 && (
                <div className={chat.unread ? "color" : "color read"}>
                  {chat.messages[chat.messages.length - 1].time}
                </div>
              )}
            </div>
            <div className="bottom-details">
              <div>
                {chat.messages.length > 0 && (
                  <small>
                    {chat.messages[chat.messages.length - 1].message}
                  </small>
                )}
              </div>
              {chat.unread && (
                <div className={chat.unread ? "color" : "color read"}>
                  {chat.messages.length}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
