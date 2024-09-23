import "./navbar.css";
import lion from "../../../assets/lion.jpg";

const MessageNavbar = ({ chat, onBackClick }) => {
  return (
    <div className="navbar">
      <div className="profile_info">
        <div className="back" onClick={onBackClick}>
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <div className="image">
          <img src={lion} alt="Profile picture" />
        </div>
        <div className="profile_name">
          {chat && <b>{chat.users.receiver.username}</b>}
          <div>
            <small>{chat.users.receiver.phoneNumber}</small>
          </div>
        </div>
      </div>
      <div className="chat_icons">
        <div className="call_links">
          <div>
            <span className="material-symbols-outlined">videocam</span>
          </div>
          <div>
            <span className="material-symbols-outlined">call</span>
          </div>
        </div>
        <div className="search_chat">
          <div>
            <span className="material-symbols-outlined">search</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageNavbar;
