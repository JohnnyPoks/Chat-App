import "./chatapp.css";
import chat from "../assets/chat.png";
import lion from "../assets/lion.jpg";

const ChatApp = () => {
  const chats = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30,
  ];

  return (
    <div className="container">
      <div className="column left-container">
        <div className="header">
          <div className="navbar">
            <div className="logo">
              <h1>Chats</h1>
            </div>
            <div className="navlinks">
              <div>
                <span className="material-symbols-outlined">edit_square</span>
              </div>
              <div>
                <span className="material-symbols-outlined">filter_list</span>
              </div>
            </div>
          </div>
          <div className="search">
            <input type="text" placeholder="Search or start a new chat" />
          </div>
        </div>
        <div className="chats">
          {chats.map((index) => {
            return (
              <div className="chat" key={index}>
                <div className="image">
                  <img src={lion} alt="Profile picture" />
                </div>
                <div className="details">
                  <div className="top-details">
                    <div>
                      <h5>User Name</h5>
                    </div>
                    <div className="color">{index}:00</div>
                  </div>
                  <div className="bottom-details">
                    <div>
                      <small>Last Message</small>
                    </div>
                    <div className="color">{index}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="column right-container">
        <div className="close-chat">
          <div className="img">
            <img src={chat} alt="chat icon" />
          </div>
          <div className="text">
            <h3>Messaging App</h3>
            <p>
              A simple chat application built for Users to, send and receive
              messages instantly, and experience a seamless chat experience with
              minimal setup
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
