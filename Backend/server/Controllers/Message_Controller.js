const Message = require("../Models/Message_Model");

const storeMessage = async (
  content,
  timeSent,
  chat_id,
  senderId,
  receiverId
) => {
  try {
    const message = await Message.create({
      content,
      timeSent,
      chat_id,
      senderId,
      receiverId,
    });
    return message;
  } catch (error) {
    throw new Error("Failed to store message", error);
  }
};

const getChatMessages = async (chat_id) => {
  try {
    const messages = await Message.findAll({ where: { chat_id } });
    return messages;
  } catch (error) {
    throw new Error("Failed to get chat messages", error);
  }
};

module.exports = {
  storeMessage,
  getChatMessages,
};
