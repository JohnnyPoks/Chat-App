const Message = require("../Models/Message_Model");

const storeMessage = async (newMessage) => {
  const { content, timeSent, chat_id, senderId, receiverId } = newMessage;
  try {
    const message = await Message.create({
      content,
      timeSent,
      chat_id,
      source_user_id: senderId,
      destination_user_id: receiverId,
    });
    return message;
  } catch (error) {
    throw new Error("Failed to store message", error);
  }
};

const getChatMessages = async (chatId) => {
  try {
    const messages = await Message.findAll({ where: { chat_id: chatId } });
    return messages;
  } catch (error) {
    throw new Error("Failed to get chat messages", error);
  }
};

module.exports = {
  storeMessage,
  getChatMessages,
};
