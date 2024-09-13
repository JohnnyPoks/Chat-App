import "./header.css";

const Header = ({ onNewChatClick }) => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <h1>Chats</h1>
        </div>
        <div className="navlinks">
          <div onClick={onNewChatClick}>
            <span className="material-symbols-outlined">edit_square</span>
          </div>
          <div>
            <span className="material-symbols-outlined">contrast</span>
          </div>
        </div>
      </div>
      <div className="search">
        <input type="text" placeholder="Search or start a new chat" />
      </div>
    </div>
  );
};

export default Header;
