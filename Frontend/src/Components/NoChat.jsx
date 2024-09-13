import chat from "../assets/chat.png";

const Nochat = () => {
  return (
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
  );
};

export default Nochat