import "./list.css";

const MessageList = ({ messages }) => {
  return (
    <div className="messages">
      {messages.map((message, index) => {
        return (
          <div
            key={index}
            className={
              message.source === "sender"
                ? "message sender"
                : "message receiver"
            }
          >
            <div
              className={
                message.source === "sender"
                  ? "msg sender_box"
                  : "msg receiver_box"
              }
            >
              <p>
                {message.message}
                <span>{message.time}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
