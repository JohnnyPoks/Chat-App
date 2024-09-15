const Chat = require("../Models/Chat_Model");

const createChat = async (user1_id, user2_id) => {
  try {
    const chat = await Chat.create({ user1_id, user2_id });
    return chat;
  } catch (error) {
    throw new Error("Failed to create chat", error);
  }
};

const getAllChats = async (user_id) => {
  try {
    const chats = await Chat.findAll({ where: { user1_id: user_id } });
    return chats;
  } catch (error) {
    throw new Error("Failed to get chats", error);
  }
};

module.exports = {
  createChat,
  getAllChats,
};
