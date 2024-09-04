import "./chatapp.css";
// import chat from "../assets/chat.png";
import lion from "../assets/lion.jpg";

const ChatApp = () => {
  const chats = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30,
  ];

  // const Chat = document.getElementById("chat");
  // const openChat = document.getElementById("open-chat");
  // const closeChat = document.getElementById("close-chat");

  // Chat.addEventListener("click", () => {
  //   closeChat.style.display = "none";
  // });

  return (
    <div className="container">
      <div className="left-container">
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
              <div className="chat" id="chat" key={index}>
                <div className="image">
                  <img src={lion} alt="Profile picture" />
                </div>
                <div className="details">
                  <div className="top-details">
                    <div>
                      <h5>Becky Dev</h5>
                    </div>
                    <div className="color">{index}:00</div>
                  </div>
                  <div className="bottom-details">
                    <div>
                      <small>Hi my Name is Becky</small>
                    </div>
                    <div className="color">{index}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div id="column" className="right-container">
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
      </div> */}
      <div id="column" className="right-container">
        <div className="open-chat">
          <div className="navbar">
            <div className="profile_info">
              <div className="back">
                <span className="material-symbols-outlined">arrow_back</span>
              </div>
              <div className="image">
                <img src={lion} alt="Profile picture" />
              </div>
              <div className="profile_name">
                <b>Becky Dev</b>
              </div>
            </div>
            <div className="chat_icons">
              <div className="call_links">
                <div>
                  <span className="material-symbols-outlined">Videocam</span>
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
          <div className="message_box">
            <div className="sender_box">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi accusamus adipisci dolore error at labore nostrum
                placeat quaerat voluptatum! Quos consequuntur veritatis eligendi
                earum possimus, nisi odio sint enim iure.
              </p>
            </div>
            <div className="receiver_box">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi accusamus adipisci dolore error at labore nostrum
                placeat quaerat voluptatum! Quos consequuntur veritatis eligendi
                earum possimus, nisi odio sint enim iure.
              </p>
            </div>
          </div>
          <div className="input_box">
            <span className="material-symbols-outlined">emoji_emotions</span>
            <span className="material-symbols-outlined">attach_file</span>
            <input type="text" placeholder="Type a message" />
            <span className="material-symbols-outlined">send</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
