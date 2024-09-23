import "./list.css";
import { useEffect, useRef } from "react";

const MessageList = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <div className="messages">
      {messages.map((message, index) => {
        return (
          <div
            key={index}
            className={
              parseInt(message.source_user_id) ===
              parseInt(localStorage.getItem("userId"))
                ? "message sender"
                : "message receiver"
            }
          >
            <div
              className={
                parseInt(message.source_user_id) ===
                parseInt(localStorage.getItem("userId"))
                  ? "msg sender_box"
                  : "msg receiver_box"
              }
            >
              {parseInt(message.source_user_id) ===
              parseInt(localStorage.getItem("userId")) ? (
                <div>
                  <div className="text">{message.content}</div>
                  <div className="timeStamp">
                    <span>{message.timeSent}</span>
                    <span className="material-symbols-outlined">done_all</span>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text">{message.content}</div>
                  <div className="timeStamp">
                    <span>{message.timeSent}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}

      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
