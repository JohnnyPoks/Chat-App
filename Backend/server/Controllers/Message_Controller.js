const Message = require("../Models/Message_Model");

const createMessage = async (content, senderId, receiverId) => {
  try {
    const message = await Message.create({ content, senderId, receiverId });
    return message;
  } catch (error) {
    throw new Error("Failed to create message");
  }
};

module.exports = {
  createMessage,
};
