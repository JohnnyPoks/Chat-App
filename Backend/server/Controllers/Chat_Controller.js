const Chat = require("../Models/Chat_Model");
const { checkIfUsersExist } = require("./User_Controller");
const { getChatMessages } = require("./Message_Controller");

const checkIfChatExist = async (sender_id, receiver_id) => {
  // check if chat exists
  try {
    const chat_1 = await Chat.findOne({
      where: { sender_id: sender_id, receiver_id: receiver_id },
    });

    const chat_2 = await Chat.findOne({
      where: { sender_id: receiver_id, receiver_id: sender_id },
    });

    return { chat_1, chat_2 };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createChat = async (newChatData) => {
  console.log(newChatData);

  try {
    const { senderNumber, receiverNumber } = newChatData;

    const { sender, receiver } = await checkIfUsersExist({
      type: "phoneNumbers",
      data: {
        senderNumber,
        receiverNumber,
      },
    });

    if (sender.id === receiver.id) {
      // Check if sender and receiver are the same
      throw new Error(
        "Sorry you can't chat with yourself. Please use another number"
      );
    }

    const chatExist = await checkIfChatExist(sender.id, receiver.id);

    // Check if chat already exists
    if (chatExist.chat_1) {
      throw new Error(
        `A chat already exists between ${receiver.username} and You. Please try with another user's details`
      );
    }

    if (chatExist.chat_2) {
      throw new Error(
        `A chat already exists between ${receiver.username} and You. Please try with another user's details`
      );
    }

    // Create chat
    const chat = await Chat.create({
      sender_id: sender.id,
      receiver_id: receiver.id,
    });

    return { chat, sender, receiver };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getAllChats = async (senderId) => {
  try {
    let chats = [];

    const chatsAsSender = await Chat.findAll({
      where: { sender_id: senderId },
    });
    // console.log("THIS ARE THE CHATS AS SENDER", chatsAsSender);

    for (let i = 0; i < chatsAsSender.length; i++) {
      const receiver = await checkIfUsersExist({
        type: "UserId",
        data: chatsAsSender[i].receiver_id,
      });

      const chatMessages = await getChatMessages(chatsAsSender[i].id);

      chats.push({
        id: chatsAsSender[i].id,
        users: { receiver: receiver },
        messages: chatMessages,
        unread: false,
      });
    }

    const chatsAsReceiver = await Chat.findAll({
      where: { receiver_id: senderId },
    });
    // console.log("THIS ARE THE CHATS AS RECEIVER", chatsAsReceiver);

    for (let i = 0; i < chatsAsReceiver.length; i++) {
      const receiver = await checkIfUsersExist({
        type: "UserId",
        data: chatsAsReceiver[i].sender_id,
      });

      const chatMessages = await getChatMessages(chatsAsReceiver[i].id);

      chats.push({
        id: chatsAsReceiver[i].id,
        users: { receiver: receiver },
        messages: chatMessages,
        unread: false,
      });
    }

    if (chats.length === 0) {
      throw new Error("YOU DO NOT HAVE ANY CHATS YET. PLEASE CREATE ONE FIRST");
    }

    return chats;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createChat,
  getAllChats,
};
