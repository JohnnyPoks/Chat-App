import "./chatList.css";
import lion from "../../../assets/lion.jpg";

const ChatList = ({ Chats, onChatClick }) => {
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
                <h5>{chat.users.receiver.username}</h5>
              </div>
              {chat.messages.length > 0 && (
                <div className={chat.unread ? "color" : "color read"}>
                  {chat.messages[chat.messages.length - 1].timeSent}
                </div>
              )}
            </div>
            <div className="bottom-details">
              {chat.messages.length > 0 && (
                <div>
                  <span className="material-symbols-outlined">done_all</span>
                  <small>
                    {chat.messages[chat.messages.length - 1].content}
                  </small>
                </div>
              )}

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
