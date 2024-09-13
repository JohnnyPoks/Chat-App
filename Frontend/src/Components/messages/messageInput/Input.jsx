import "./input.css";
import { useState, useRef, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";

const MessageInput = ({ chat, onSendMessage }) => {
  const textareaRef = useRef(null);
  const [text, setText] = useState("");
  const [emoji, setEmoji] = useState(false);

  useEffect(() => {
    setText("");
  }, [chat]);

  const handleTextChange = (e) => {
    setText(e.target.value);
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  const handleEmojiClick = (e) => {
    setText((prev) => prev + e.emoji);
  };

  const handleSendMessage = () => {
    if (text.trim() !== "") {
      const now = new Date();
      const time = now.getHours() + ":" + now.getMinutes();
      // send message
      const message = {
        time: time,
        message: text,
        source: "receiver",
      };
      onSendMessage(message);
      setText("");
    } else {
      alert("Error!!! no message text entered");
    }
  };
  return (
    <div className="input_box">
      <div className="emoji">
        <span
          className="material-symbols-outlined"
          onClick={() => setEmoji(!emoji)}
        >
          emoji_emotions
        </span>
        <div className="emojiPicker">
          {emoji && (
            <EmojiPicker theme="dark" onEmojiClick={handleEmojiClick} />
          )}
        </div>
      </div>
      <span className="material-symbols-outlined">attach_file</span>
      <textarea
        ref={textareaRef}
        placeholder="Type a message"
        value={text}
        onChange={handleTextChange}
        rows={1}
      />
      <span className="material-symbols-outlined" onClick={handleSendMessage}>
        send
      </span>
    </div>
  );
};

export default MessageInput;
